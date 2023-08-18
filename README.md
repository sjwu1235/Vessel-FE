# Vessel Web App

This site is accessible at https://vessel-tc.network/home. To test:
1. Create an escrow wallet account via the **create escrow account** button by filling in the form. The pin you enter will be used to authorise the signing enclave, which stores your private key, to sign transactions for the escrow account. Pin retrieval would be a feature of the next phase.
2. On submission, you will see a page with the escrow account wallet address, you can find it on the XRPL testnet. Copy this address
3. On XRPL, you need to fund your account before you can transact with it. We have, in the past, implemented an autofund feature which would form part of the next phase of this project. For now, please go to the XRPL testnet faucet to fund the escrow wallet account manually.
4. The **opt-in** button provides a form to manually opt-in to the asset that the escrow account should recieve, for now, the asset issuer and asset name has been hardcoded for demonstration purposes. In future, there will be an option for the user to enter the issuer details and asset symbol or pick from a predefined set of assets and issuers.

This is simply the front end of Vessel, please see the demo-video and documentation on the full system architecture for more information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Quickstart

To start the developement server:
`npm i`
`ng serve`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
