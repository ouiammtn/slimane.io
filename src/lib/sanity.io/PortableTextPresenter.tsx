import * as React from "react";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_IO_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_IO_DATASET,
  useCdn: true,
  apiVersion: "2021-05-01",
});

interface serializersCodeProps {
  node: {
    language: string;
    code: string;
  };
}

interface PortableTextPresenterProps {
  body: Record<string, unknown>;
}

export default function PortableTextPresenter({
  body,
}: PortableTextPresenterProps): JSX.Element {
  return <BlockContent blocks={body} {...client.config()} />;
}
