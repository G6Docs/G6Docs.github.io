export const prerender = true

import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')

const pages: Record<string, { data: any }> = Object.fromEntries(
  entries.map(({ data, id }) => [id, { data }])
)

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      description: page.data.description,
      bgGradient: [[24, 24, 27]],
      border: { color: [63, 63, 70], width: 20 },
      padding: 80,
      font: {
        title: {
          family: "PretendardVariable, 'Pretendard JP Variable', sans-serif",
          color: [255, 255, 255]
        },
        description: {
          family: "PretendardVariable, 'Pretendard JP Variable', sans-serif",
          color: [200, 200, 200]
        }
      },
      fonts: [
        'node_modules/pretendard/dist/public/variable/PretendardVariable.ttf',
        'node_modules/pretendard-jp/dist/public/variable/PretendardJPVariable.ttf'
      ],
      logo: {
        path: 'src/assets/logo.png',
        size: [400]
      },
      quality: 100
    }
  }
})
