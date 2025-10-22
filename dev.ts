import { watch } from "fs";

async function run(command: string) {
  await Bun.spawn(command.split(" "), {
    stdout: "inherit",
    stderr: "inherit",
  }).exited;
}

// build on change
watch("./src", { recursive: true }, async (event, filename) => {
  console.log(`\n📝 File changed: ${filename}`);
  await run("bun run build");
});

// https://crates.io/crates/live-server
await run("live-server webring")