import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Card } from "@/components/PageShell";

// --- IMPORT ZDJĘĆ ---
import nastawianieImg from "@/assets/nastawianie.jpg";
import derzkoImg from "@/assets/derzko.jpg";
import vImg from "@/assets/610629481_849363157936952_2331904166900211822_n.jpg";
import lodyImg from "@/assets/623937132_1182086817341569_5373814379333548855_n.jpg";
import selfieImg from "@/assets/622535834_1538858720748153_4773163309576924664_n.jpg";
import bagazeImg from "@/assets/624870990_1221951886742169_4834142750022204764_n.jpg";
import autoImg from "@/assets/625836403_920732310391340_1874767743012508824_n.jpg";
import kolacjaImg from "@/assets/628321843_1999154953971561_7549957902154063420_n.jpg";
import ogrodImg from "@/assets/663546313_823041414175006_6119553590711339607_n.jpg";

// --- IMPORT NAGRAŃ ---
import video1 from "@/assets/AQOLnqPlcQ6HRXPZ1XPYpE-cWOKMwPCERyz5xWrrUMcsDcoiucB2HgxPlxW41jSfzHPBhh_xI-pnivf24ikNnU4gV7BQyP8SWIWruUaE3Q.mp4";
import video2 from "@/assets/AQOcz1vgSm9unZ6CTb316zCnveNkTjVfeYVKz7weEW3sLsgHHf1VEl9vsIjwNdEMRLBbTzC0Y-VEAXah-mCAehtNk3a44IxjfIW8MdH2-w.mp4";
import video3 from "@/assets/AQPlJO-_pDsgFSvsU7QymfQqQFmaIoW28YRz29PB47d-CCamZCqXs87_D1ABKds94Lnk175738kAHZEr2w66Ye1JTc0nq-abqJfg25Joag.mp4";
import video4 from "@/assets/AQND_1XyCP2HlEDf4TlIj3O1jFc02HZxPsJ52L2w8RRAba975eEsvpFWPPXmmLbscZk7m64AZpJ5M_96U9EeDCb4OU39j60T71b0iMvHyw.mp4";
import video5 from "@/assets/AQN3AiVYR583JKMeFN94qzr9JcyJwkUqLqQx7Xl3m5v2p7SYCF52xrQQFYhdEWdXDfS9Z_zlh2v1nER6PlMhOZU4UxyPjMWU7pNaOK-Teg.mp4";
import video6 from "@/assets/AQMg68tBjnBh5UHBg2cgrSwPzGBLX2PBwJbWg6tf0dvM-zHo17Rwv4pa2BQnPH7I4IoBhelD-o20DN-Gj5pMdCeup8xxAsh76ewQak0RhQ.mp4";
import video7 from "@/assets/AQOIZ1UfQqSnR7nHOLq7f9ieevQFKKzF7J7U0jw_pOij0oD3upd_DlldD77HiZnKleRV3NSLWmUWPZ-AcwbCsrGnoKbnoX51qdGTMJLv7Q.mp4";
import video8 from "@/assets/AQPRkuasFgutEZvxDdvzWSlinF-2YXDtobakWbyituS5pbEmZjFCuxeMBDj73mk9U393guFftUXlNSznoTwPaP3i-kNbLqUcf6QotnydJA.mp4";

export const Route = createFileRoute("/nasza-galeria")({
  head: () => ({
    meta: [
      { title: "Nasza Galeria — Wiadomość do Rodziców" },
      { name: "description", content: "Nasze wspólne chwile na zdjęciach i wideo." },
    ],
  }),
  component: GaleriaPage,
});

const photos = [
  { src: nastawianieImg, title: "Dystans(od nas)" },
  { src: derzkoImg, title: "W drodze" },
  { src: vImg, title: "Dobre emocje" },
  { src: lodyImg, title: "Chwila relaksu" },
  { src: selfieImg, title: "Selfie" },
  { src: bagazeImg, title: "Wycieczka" },
  { src: autoImg, title: "Bezpieczny powrót" },
  { src: kolacjaImg, title: "Obiad" },
  { src: ogrodImg, title: "Lany poniedziałek" },
];

const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

function GaleriaPage() {
  return (
    <PageShell
      eyebrow="Album Wspomnień"
      title="Nasza galeria"
      subTitle="Życie w obiektywie"
      intro="Zdjęcia i nagrania, które pokazują naszą codzienność. Bez filtrów, za to z dużą dawką odpowiedzialności i przyjaźni."
    >
      
      {/* --- SEKCJA ZDJĘĆ: KLASYCZNA SIATKA --- */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-display uppercase tracking-widest text-foreground">01. Fotografie</h2>
          <div className="h-px bg-border flex-grow" />
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group rounded-xl overflow-hidden bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="p-4 bg-white">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEKCJA WIDEO: TOTALNIE WYCISZONY REEL --- */}
<section className="relative -mx-4 px-4 py-24 bg-zinc-950 rounded-[4rem] overflow-hidden shadow-2xl">
  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

  <div className="relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-display text-white uppercase tracking-[0.3em] mb-4 italic">02. Nagrania</h2>
      <p className="text-zinc-400 text-sm max-w-md mx-auto font-light leading-relaxed">
        Krótkie migawki wideo. Wyłącznie obraz, aby oddać czysty klimat chwili.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {videos.map((v, i) => (
        <div 
          key={i} 
          className="group aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative cursor-default"
        >
          {/* Kluczowe parametry poniżej: brak controls i wymuszone muted */}
          <video 
            src={v} 
            autoPlay 
            loop 
            muted 
            playsInline
            controls={false} 
            disablePictureInPicture
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            onVolumeChange={(e) => (e.currentTarget.muted = true)} // Dodatkowe zabezpieczenie: jeśli system spróbuje odciszyć, kod natychmiast wycisza z powrotem
          />
          
          <div className="absolute top-4 left-4 flex items-center gap-2 px-2 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] text-white font-mono tracking-tighter uppercase">LIVE FEED</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- FOOTER GALERII --- */}
      <footer className="mt-24 text-center">
        <Card className="inline-block px-12 py-6 bg-transparent border-dashed border-border border-2">
          <p className="text-muted-foreground text-xs uppercase tracking-widest leading-loose">
            Wszystkie materiały są własnością naszej grupy. <br />
            Chronimy prywatność i dbamy o bezpieczeństwo każdego uczestnika.
          </p>
        </Card>
      </footer>

      <footer className="mt-24 text-center">
        <Card className="inline-block px-12 py-6 bg-transparent border-dashed border-border border-2">
          <p className="text-muted-foreground text-xs uppercase tracking-widest leading-loose">
            Narazie tyle zdjęć i nagrań bo już mi się nie chciało więcej tego dawać <br />
            
          </p>
        </Card>
      </footer>

    </PageShell>
  );
}