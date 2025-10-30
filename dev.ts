import { watch } from "fs";

function run(command: string, stdout = true) {
  const proc = Bun.spawn(command.split(" "), {
    stderr: "inherit",
    stdout: stdout ? "inherit" : undefined
  });
  return proc;
}

let buildProcess: ReturnType<typeof Bun.spawn> | null = null;

// build on change
watch("./src", { recursive: true }, async (event, filename) => {
  if (buildProcess) {
    console.log("🛑 cancelling previous build");
    buildProcess.kill();
  }

  console.log("⚙️  started build");
  buildProcess = run("bun run build", false);
  await buildProcess.exited;
  
  console.log("✅ build complete");
  buildProcess = null;
});

await (run("bun run build", false)).exited;
// https://crates.io/crates/live-server
const server = run("live-server webring --port 3030 --hard");
await server.exited;