@clean:
    rm -rf webring

@build: clean
    bun --silent run build

@serve: build
    miniserve webring --index index.html