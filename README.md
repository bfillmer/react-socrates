
# React & Socrates (Redux) Boilerplate

Leveraging React and Socrates-wrapped Redux for a simple to spin up front-end boilerplate.

## Quick Start

```shell
git clone https://github.com/bfillmer/react-socrates.git
cd react-socrates
npm install
npm run dev # Point browser to: http://localhost:8080
```

## Available Commands

```shell
npm run build # Minimized build in dist/
npm run dev # Dev server running at: http://localhost:8080
npm run lint # eslint
npm run reset # clean & install
npm run clean # clear dist/ and node_modules/
npm run update # update node_modules
npm run test # tape unit tests [TODO]
```

## Development Notes

* Any paths leveraged within the codebase are relative to the `app/` directory.
* Any additional node modules needed by the application should be added to the `vendors` array in `webpack.config.babel.js` so they are concatenated into `vendors.js` on build.
* Assets leveraged within the `scss` files are relative to `appearance/scss/main.scss`. Thus most of the time to access anything within `appearance/img` you would use the following: `url('../img/an-image.png')`.

## Credits

* David Huff [davidryanhuff@gmail.com](davidryanhuff@gmail.com): For the Atomic CSS structure, and generally being a badass.
