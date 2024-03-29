import React from "react"
import { Head } from "next/document"
import theme from "../theme/palette"
import brand from "../public/text/brand"
import { useTranslation } from "react-i18next"

const HeadComponent = () => {
  const { t } = useTranslation("common")
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='description' content={t("complex_services_agroholdings")} />
      <link rel='icon' href='/favicons/favicon.ico' />
      <link
        rel='icon'
        sizes='192x192'
        type='image/png'
        href='/android-icon-192x192-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-icon-180x180-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/apple-icon-152x152-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/apple-icon-144x144-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-icon-120x120-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/apple-icon-114x114-seochecker-910.png'
      />
      <link
        rel='icon'
        sizes='96x96'
        type='image/png'
        href='/favicon-96x96-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/apple-icon-76x76-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/apple-icon-72x72-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/apple-icon-60x60-seochecker-910.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/apple-icon-57x57-seochecker-910.png'
      />
      <link
        rel='icon'
        sizes='32x32'
        type='image/png'
        href='/favicon-32x32-seochecker-910.png'
      />
      <link
        rel='icon'
        sizes='16x16'
        type='image/png'
        href='/favicon-16x16-seochecker-910.png'
      />
      <link rel='manifest' href='/favicons/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicons/ms-icon-144x144.png'
      />
      {/* PWA primary color */}
      <meta name='theme-color' content={theme.burgundy.palette.primary.main} />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <link
        href='https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css'
        rel='stylesheet'
      />
      <meta property='og:locale' content='ru' />
      <meta property='og:type' content='website' />
      <meta property='twitter:image:src' content='/images/logo.png' />
      <meta property='og:url' content={brand.starter.url} />
      <meta property='og:title' content={brand.starter.title} />
      <meta
        property='og:description'
        content={t("complex_services_agroholdings")}
      />
      <meta name='twitter:site' content={brand.starter.url} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={brand.starter.img} />
      <meta property='og:image' content={brand.starter.img} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta
        name='description'
        content='халяль Халяль забой курицы агрохолдинги ручной забой прибыль команда'
      ></meta>
      <meta
        name='description'
        content='halal halal chicken slaughter agricultural holdings manual slaughter profit team'
      ></meta>
      <meta
        name='description'
        content='ذبح الدجاج الحلال ذبح المقتنيات الزراعية فريق الربح اليدوي'
      ></meta>
    </Head>
  )
}

export default HeadComponent
