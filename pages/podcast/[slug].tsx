import { GetStaticPropsContext, NextPageContext } from "next";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setPodcastItemState } from "../../src/store/podcast/slice";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  fetchAllPodcastSlugs,
  fetchPodcastCompleteData,
} from "../../src/lib/graphql/fetchers/podcast";
import { PodcastItem } from "../../src/types/podcast/podcast.types";
import PodcastItemPageContainer from "../../src/containers/podcast/podcastItemPage.container";
import { createVideoThumbnailLink } from "../../src/lib/utils";

export default function PodcastItemPage(props: PodcastItem): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const action = {
    slug: slug as string,
    newState: props,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPodcastItemState(action));
  }, []);

  const imageLink = createVideoThumbnailLink(props.videoId);
  const pageTitle = `${props.title} | Kass Atay Podcast`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={imageLink} />
        <meta property="og:description" content={props.excerpt} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:image" content={imageLink} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content={props.excerpt} />
      </Head>
      <PodcastItemPageContainer podcastItem={props} audioPlatforms={[]} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const slug = context.params.slug as string;
  return {
    props: await fetchPodcastCompleteData(slug),
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: await fetchAllPodcastSlugs(),
  };
}
