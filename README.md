# Portfolio App

Kullanıcının kendini tanıtabileceği ve projelerini sergileyebileceği bir platform sunar.<br />
Aydınlık ve karanlık tema seçeneği sunar.<br />
Ekrandaki baloncukları hareket ettirebilir.<br />
Sosyal medya hesaplarını ekleyebilir.<br />
Alanıyla alakalı terimler ekleyebilir.<br />
Geliştirmiş olduğu projeleri paylaşabilir.<br />
Siteyi ziyaret edenler, "Buy Me a Coffee" üzerinden kahve ısmarlayabilir.<br />

React tabanlı bir framework olan Next.js kullanıldı.<br />
Next.js, sunucu tarafında render (SSR) ve statik site oluşturur. <br />
Hygraph, GraphQL tabanlı bir yapıdır. İçeriklerin yönetilmesi için kullanıldı. <br />
Tailwindcss, stil eklemek ve farklı cihaz boyutlarıyla uyumlu responsive çalışması için tercih edildi.<br />
Kahve ısmarlama kısmı için [buymeacoffee](https://buymeacoffee.com/brand) dokümanından faydalanabilirsiniz. <br />

## Gif

![](/public/dev-portfolio.gif)

## Projenin Çalıştırılması

Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız.

```
git clone https://github.com/evinoguz/dev-portfolio.git
```

Proje dizininde .env.local adında dosya oluşturunuz. Bu dosyada ortam değişkenlerinizi tanımlayınız.<br />
Bu ayarları yapmak için [hygraph](https://app.hygraph.com/) sitesinden veritabanınızı oluşturabilirsiniz. <br />
Buradan, dev-portfolio adında yeni proje oluşturunuz.<br />

Schema>Models menüsünden, Project adında model oluşturunuz. <br />
Title: single text, title, required<br />
Description: multi line text, required<br />
Image: Asset picker, required<br />
Source: single text, required<br />
Tags: single text, multible values, required<br />
şeklinde tablonuzu oluşturunuz.<br />

Content menüsünden "Addentry" ile verilerinizi ekleyebilirsiniz.<br />

Oluşturduğunuz tabloyu projede kullanmak için;<br />
API Playground menüsünden,
<pre>
<code>
query getAllProjects {
  projects {
    id
    title
    description
    tags
    source
    image {
      url
    }
  }
}
</code>
</pre>
kodları alarak projede kullanabilirsiniz.

yourUrl = Project Settings > Entpoints > High Performance Content API linkini kopyalayınız ve ortam değişkenine ekleyiniz.

```
NEXT_PUBLIC_GRAPHCMS_URL = yourUrl
```

Terminalde;

```
npm install

```

komutu ile paketleri indiriniz, ardından

```
npm run dev
```

komutu ile projeyi ayağa kaldırınız.
