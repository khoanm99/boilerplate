'use client';

import { useEffect } from "react";

const Page = () => {
  const getCookieValue = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(cookie => cookie.includes(name));
    return cookie?.split('=')[1] ?? null;
  };

  useEffect(() => {
    console.log(document.cookie)
  }, [])

  
  return (
    <div>
      <h1>How to setup graphql and codegen</h1>
      <ol>
        <li>Install graphql: with `yarn add graphql`</li>
        <li>Install apollo with `yarn add @apollo/client`</li>
        <li>These library in dev dependencies</li>
        <li>Install codegen with `yarn add -D @graphql-codegen/cli`</li>
        <li>
          Install codegen client-preset with `yarn add -D
          @graphql-codegen/client-preset`
        </li>
        <li>Add codegen.ts at root</li>
        <li>
          Create gql folder ( check in the codegen.ts file, difference config
          will lead to difference folder)
        </li>
        <li>Add some query in gql/query folder</li>
        <li>
          Add script in file package.json,
          `
          &quot;codegen-cms&quot;: &quot;graphql-codegen --config codegen-cms.ts&quot;,
          &quot;codegen&quot;: &quot;yarn codegen-cms&quot;
          `
        </li>
        <li>Please clear node modules, and yarn lock before run yarn codegen
            (Some cache issue will prevent you to query the data)
        </li>
        <li>Add some query in gql/query folder</li>
      </ol>
    </div>
  );
};

export default Page;
