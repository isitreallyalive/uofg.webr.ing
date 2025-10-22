@clean:
    rm -rf webring

@build:
    bun --silent run build

@serve: build
    miniserve webring --index index.html