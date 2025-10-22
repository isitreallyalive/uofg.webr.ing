@clean:
    rm -rf webring

@build:
    bun --silent run build
    ringfairy

@serve: build
    miniserve webring --index index.html