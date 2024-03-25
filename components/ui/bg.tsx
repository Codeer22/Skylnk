import Image from 'next/image'
import mountains from '../public/mountains.jpg'

export default function Background() {
     return (
          <Image
                  alt="bg-image"
                  src="/backg/satoru-gojo-8k-3840x2160-15315.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
     )
}