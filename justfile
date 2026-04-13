@install:
  cargo install --locked --git https://github.com/k3rs3d/ringfairy --rev 004322e

@clean:
  rm -rf dist

@fmt:
  prettier --write .

@build: clean
  ringfairy -l websites.toml -c config.toml -o dist

[private]
dev-build:
  watchexec -e toml,html,css -r -- just build

[private]
dev-server:
  live-server dist -p 1234

[parallel]
@dev: dev-build dev-server