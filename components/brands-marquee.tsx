const brands = [
  { name: 'Google', file: '/images/brands/google.svg' },
  { name: 'Microsoft', file: '/images/brands/microsoft.svg' },
  { name: 'AWS', file: '/images/brands/aws.svg' },
  { name: 'OpenAI', file: '/images/brands/openai.svg' },
  { name: 'GitHub', file: '/images/brands/github.svg' },
  { name: 'Docker', file: '/images/brands/docker.svg' },
  { name: 'IBM', file: '/images/brands/ibm.svg' },
  { name: 'NVIDIA', file: '/images/brands/nvidia.svg' },
  { name: 'Meta', file: '/images/brands/meta.svg' },
  { name: 'Salesforce', file: '/images/brands/salesforce.svg' },
  { name: 'Hugging Face', file: '/images/brands/huggingface.svg' },
  { name: 'Anthropic', file: '/images/brands/anthropic.svg' },
]

const brands2 = [
  { name: 'Apple', file: '/images/brands2/apple.svg' },
  { name: 'X', file: '/images/brands2/twitter.svg' },
  { name: 'Samsung', file: '/images/brands2/samsung.svg' },
  { name: 'Netflix', file: '/images/brands2/netflix.svg' },
  { name: 'Spotify', file: '/images/brands2/spotify.svg' },
  { name: 'Stripe', file: '/images/brands2/stripe.svg' },
  { name: 'Intel', file: '/images/brands2/intel.svg' },
  { name: 'Oracle', file: '/images/brands2/oracle.svg' },
  { name: 'PayPal', file: '/images/brands2/paypal.svg' },
  { name: 'LinkedIn', file: '/images/brands2/linkedin.svg' },
  { name: 'YouTube', file: '/images/brands2/youtube.svg' },
  { name: 'Zoom', file: '/images/brands2/zoom.svg' },
  { name: 'Slack', file: '/images/brands2/slack.svg' },
  { name: 'Shopify', file: '/images/brands2/shopify.svg' },
  { name: 'Airbnb', file: '/images/brands2/airbnb.svg' },
  { name: 'Dropbox', file: '/images/brands2/dropbox.svg' },
  { name: 'Adobe', file: '/images/brands2/adobe.svg' },
  { name: 'Reddit', file: '/images/brands2/reddit.svg' },
  { name: 'Discord', file: '/images/brands2/discord.svg' },
  { name: 'TikTok', file: '/images/brands2/tiktok.svg' },
]

export function BrandsMarquee({
  label = 'Colaboraciones',
  title = 'Nuestras colaboraciones',
  description = 'Empresas que confían en nuestro trabajo',
}: {
  label?: string
  title?: string
  description?: string
}) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neuratek-primary/[0.02] via-transparent to-neuratek-primary/[0.03] pointer-events-none" />
      <div className="absolute top-10 left-20 w-80 h-80 rounded-full bg-neuratek-deep/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-neuratek-primary/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-neuratek-primary/60" />
            <span className="text-neuratek-primary text-sm font-medium uppercase tracking-widest">{label}</span>
            <div className="h-px w-8 bg-neuratek-primary/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:bg-gradient-to-r before:from-neuratek-dark before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:bg-gradient-to-l after:from-neuratek-dark after:to-transparent">
          <div className="flex gap-16 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-16 flex items-center justify-center grayscale brightness-[1.8] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={brand.file}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:bg-gradient-to-r before:from-neuratek-dark before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:bg-gradient-to-l after:from-neuratek-dark after:to-transparent">
          <div className="flex gap-16 animate-[marquee-reverse_50s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {[...brands2, ...brands2].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-16 flex items-center justify-center grayscale brightness-[1.8] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={brand.file}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
