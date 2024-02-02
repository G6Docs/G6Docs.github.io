/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// type KVNamespace = import("@cloudflare/workers-types").KVNamespace;

interface RemarkConfig {
  host: string
  site_id?: string
  url?: string
  components?: Array<'embed' | 'last-comments' | 'counter'>
  max_shown_comments?: number
  max_last_comments?: number
  theme?: 'light' | 'dark'
  page_title?: string
  locale?: string
  show_email_subscription?: boolean
  show_rss_subscription?: boolean
  simple_view?: boolean
  no_footer?: boolean
}

interface Window {
  remark_config: RemarkConfig
}
