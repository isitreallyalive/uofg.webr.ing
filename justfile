@clean:
    rm -rf webring

@build:
    bun run build
    ringfairy

@serve: build
    miniserve webring