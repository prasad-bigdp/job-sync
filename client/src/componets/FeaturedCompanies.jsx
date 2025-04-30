import React from 'react'

function FeaturedCompanies() {

  const logos = [
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005847/N671b6JcBQfPKBIohUIYVs2Uo1RzadgjrFzkQFOI_bxfd0u.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005849/hsR7tbBwiRx5twXYneti0qmebYf2oNZrasYUV2f7_lnw4hm.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005847/LjoNiguvzuUwFq8yj4PGjDfJvzJSGA5kRlyCqNOs_g2cu5r.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005846/HWMRuAwwASLR6Ge4hHcTaTjIGemPxfVNFaIayRv3_fvra2a.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005845/XkD2qczUmzHjmow82kL0KXn3C58Ckc943TU4ioAy_tk0xxj.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005845/gtvNLVlCC0gljwoGWib46QZij1Onlkvtj9Y5Tphr_nqguch.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005845/gtvNLVlCC0gljwoGWib46QZij1Onlkvtj9Y5Tphr_nqguch.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005842/RxBMJijwDrAtoV1i9kZmIv17TbS9cSlr200IMHF7_wlhpbi.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005844/vaxhFktkYNY3Se07eyLhJ3nal8NCLARr9yPI15Gz_pz3op9.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005844/BbTm5uqIbhiLgZAAmiVeYTk85RKlnh7TEx9mc6Y1_xm9xp0.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005844/FpWTK4SpvKviR7jEmKBMZjP3fJllR7W44T4XCEM8_t5cqv3.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005842/OH8IxQernBpza3OH363LKp5LAdVa5z2QRPfZTC5S_zavbud.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005843/gtgag9u8MGtCreJX3YYZ3RTVodwzfC1zK9ikhr9W_ray52e.webp",
    "https://res.cloudinary.com/dv5abn9bn/image/upload/v1746005843/DmwTm9V6ve76JgwS6aZcNPZYKYMqyt74erEVmh2p_nxbrh9.webp"
  ];

  return (
    <div className="w-full px-4 md:px-12 py-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Featured Companies</h2>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 min-w-full">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="min-w-[120px] h-[70px] flex items-center justify-center bg-white rounded-lg shadow-sm px-4 py-2"
            >
              <img
                src={logo}
                alt={`company-${idx}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default FeaturedCompanies