import ansiColors from "ansi-colors";

const { red, yellow, bold, dim } = ansiColors;

const requiredEnvs = [
  {
    key: "NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY",
    // TODO: we need a good doc to point this to
    description:
      "Learn how to create a publishable key: https://docs.medusajs.com/v2/resources/storefront-development/publishable-api-keys",
  },
];

function checkEnvVariables() {
  const missingEnvs = requiredEnvs.filter(function (env) {
    return !process.env[env.key];
  });

  if (missingEnvs.length > 0) {
    console.error(red.bold("\n🚫 Error: Missing required environment variables\n"));

    missingEnvs.forEach(function (env) {
      console.error(yellow(`  ${bold(env.key)}`));
      if (env.description) {
        console.error(dim(`    ${env.description}\n`));
      }
    });

    console.error(
      yellow("\nPlease set these variables in your .env file or environment before starting the application.\n")
    );

    process.exit(1);
  }
}

export default checkEnvVariables;
