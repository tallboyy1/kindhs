import { createClient } from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "5awgzptq",
  dataset: "production",
  apiVersion: '2023-08-26',
  useCdn: false,
});


const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any){
  return builder.image(source)
}


// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,
// })
