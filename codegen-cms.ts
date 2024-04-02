import type { CodegenConfig } from '@graphql-codegen/cli';
import { Types } from '@graphql-codegen/plugin-helpers';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

let schema: Types.UrlSchemaWithOptions | string = {};

const url = `${process.env.NEXT_GRAPHQL_URL ?? ``}`;

if (process.env.NEXT_GRAPHQL_TOKEN) {
  schema[url] = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_GRAPHQL_TOKEN}`
    }
  };
} else {
  schema = url;
}

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: [`./gql/query/*`, `./gql/fragment/*`, `!./gql/generate/*`],
  generates: {
    './gql/generate/': {
      preset: `client`,
      plugins: []
    }
  }
};

export default config;
