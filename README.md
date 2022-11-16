## Development

Contributions are welcome!

To start off, this repo (along with others in the [@polkadot](https://github.com/polkadot-js/) family) uses yarn workspaces to organize the code. As such, after cloning dependencies _should_ be installed via `yarn`, not via npm, the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/selendra/selendra-portal && cd selendra-portal`
2. Ensure that you have a recent LTS version of Node.js, for development purposes [Node >= 16](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >= 1.22](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Ready! Now you can launch the UI (assuming you have a local Polkadot Node running), via `yarn run start`
6. Access the UI via [http://localhost:3000](http://localhost:3000)

## Docker

You can run a docker container via -

```
docker run --rm -it --name selendra-portal -e WS_URL=ws://someip:9944 -p 80:80 selendrachain/selendra-portal:latest
```

To build a docker container containing local changes -

```
docker build -t selendrachain/selendra-portal -f docker/Dockerfile .
```

When using these Docker commands, you can access the UI via http://localhost:80 (or just http://localhost)
