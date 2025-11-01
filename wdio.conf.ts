import { config as dotenvConfig } from 'dotenv';
import type { Options } from '@wdio/types';

dotenvConfig();

export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json',
        },
    },

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: ['./test/specs/**/*.spec.ts'],
    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless=new', // headless mode
                    '--disable-gpu',
                    '--window-size=1920,1080',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                ],
            },
        },
    ],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://automationexercise.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

    //
    // ============
    // Mocha Config
    // ============
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    //
    // ============
    // Test Suites
    // ============
    suites: {
        register: ['./test/specs/tc01_register_user.spec.ts'],
        search: ['./test/specs/tc09_search_product.spec.ts'],
        addToCart: ['./test/specs/tc12_add_products_in_cart.spec.ts'],
        verifyQuantity: ['./test/specs/tc13_verify_product_quantity.spec.ts'],
        removeProduct: ['./test/specs/tc17_remove_product_from_cart.spec.ts'],
    },

    //
    // ============
    // Hooks
    // ============

    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};
