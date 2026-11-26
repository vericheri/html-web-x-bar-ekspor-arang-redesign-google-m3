/* ==========================================================================
   X BAR Admin Panel Shared State & Helpers
   ========================================================================== */

(function () {
  const DEFAULT_PRODUCTS = [
    {
      id: 'tamarind-charcoal',
      name: 'Tamarind Charcoal',
      category: 'Charcoal',
      price: '300 USD',
      stock: '100 Tons',
      img: '../assets/1b2e1e5be9ef9997911dd50fa0c28ea5.jpg',
      desc: 'Tamarind Charcoal (Briket/Arang Kayu Asam) is a premium, high-density bio-fuel produced through the carbonization of natural tamarind wood (Tamarindus indica). Known for its dense hardwood properties, tamarind charcoal is widely favored in industrial metallurgy, shisha/hookah lounges, and professional BBQ catering due to its high heat output and low smoke emission.',
      descId: 'Arang Kayu Asam (Tamarind Charcoal) merupakan bahan bakar hayati (bio-fuel) premium berdensitas tinggi yang dihasilkan melalui karbonisasi kayu asam alami (Tamarindus indica). Dikenal karena karakteristik kayunya yang keras dan padat, arang kayu asam banyak diminati dalam industri metalurgi, tempat shisha/hookah, serta layanan katering BBQ profesional karena mampu menghasilkan panas yang tinggi dengan emisi asap yang rendah.',
      descEn: 'Tamarind Charcoal is a premium, high-density bio-fuel produced through the carbonization of natural tamarind wood (Tamarindus indica). Known for its dense hardwood properties, tamarind charcoal is widely favored in industrial metallurgy, shisha/hookah lounges, and professional BBQ catering due to its high heat output and low smoke emission.'
    },
    {
      id: 'mix-charcoal',
      name: 'Mix Charcoal',
      category: 'Charcoal',
      price: '300 USD',
      stock: '70 Tons',
      img: '../assets/8c3b51fe8245321f728b124924a220e4.jpg',
      desc: 'Crafted from a blend of premium hardwoods, such as Kukun, Klampok, Kenitu, Mimbo, and Asam, this mixed wood charcoal is designed for barbecues, grilling, and commercial kitchens. It delivers a clean, spark-free burn with minimal smoke, low ash residue, and a subtle, non-intrusive scent.',
      descId: 'Dibuat dari campuran kayu keras premium—seperti Kukun, Klampok, Kenitu, Mimbo, dan Asam—arang kayu campuran ini dirancang untuk keperluan barbeku, memanggang, serta penggunaan di dapur komersial. Arang ini menghasilkan pembakaran yang bersih tanpa percikan api, dengan sedikit asap, residu abu yang minim, serta aroma yang samar dan tidak mengganggu.',
      descEn: 'Crafted from a blend of premium hardwoods, such as Kukun, Klampok, Kenitu, Mimbo, and Asam, this mixed wood charcoal is designed for barbecues, grilling, and commercial kitchens. It delivers a clean, spark-free burn with minimal smoke, low ash residue, and a subtle, non-intrusive scent.'
    },
    {
      id: 'charcoal-powder',
      name: 'Charcoal Powder',
      category: 'Charcoal',
      price: '300 USD',
      stock: '30 Tons',
      img: '../assets/974043cce93429795ab298e340657749.jpg',
      desc: 'Derived from blended timber sources, this versatile charcoal powder (or charcoal fines) can be tailored to buyer specifications regarding wood type. It serves as a highly effective medium for livestock care, soil enrichment, water filtration, and chemical neutralization while maintaining a reliable, high-volume supply.',
      descId: 'Diperoleh dari campuran berbagai jenis kayu, bubuk arang (atau serbuk arang) serbaguna ini dapat disesuaikan dengan spesifikasi pembeli terkait jenis kayu yang digunakan. Produk ini berfungsi sebagai media yang sangat efektif untuk perawatan ternak, pengayaan tanah, penyaringan air, serta netralisasi bahan kimia, dengan ketersediaan pasokan yang andal dalam volume besar.',
      descEn: 'Derived from blended timber sources, this versatile charcoal powder (or charcoal fines) can be tailored to buyer specifications regarding wood type. It serves as a highly effective medium for livestock care, soil enrichment, water filtration, and chemical neutralization while maintaining a reliable, high-volume supply.'
    },
    {
      id: 'industrial-charcoal',
      name: 'Industrial Charcoal',
      category: 'Charcoal',
      price: '300 USD',
      stock: '20 Tons',
      img: '../assets/6b1c81f461947addb58a2cb207f850c5.jpg',
      desc: 'Specifically tailored for factory and industrial facility usage, this heavy-duty charcoal is produced from Black Klampis and Lamtoro woods. It burns clean with low smoke, minimal ash production, and a non-pungent scent, while providing the energetic spark profile required for industrial heating systems.',
      descId: 'Dirancang khusus untuk kebutuhan pabrik dan fasilitas industri, arang berdaya tahan tinggi ini diproduksi dari kayu Klampis Hitam dan kayu Lamtoro. Arang ini terbakar dengan bersih, menghasilkan sedikit asap dan abu, serta tidak mengeluarkan bau menyengat, sembari memberikan profil energi yang dibutuhkan untuk sistem pemanas industri.',
      descEn: 'Specifically tailored for factory and industrial facility usage, this heavy-duty charcoal is produced from Black Klampis and Lamtoro woods. It burns clean with low smoke, minimal ash production, and a non-pungent scent, while providing the energetic spark profile required for industrial heating systems.'
    },
    {
      id: 'firewood',
      name: 'Firewood',
      category: 'Wood',
      price: '300 USD',
      stock: '50 Tons',
      img: '../assets/646f2877590b16b0c3fe182d7c2d5936.jpg',
      desc: 'Offered in precise lengths ranging from 36 cm to 47 cm, this natural firewood features a steady supply of hard timber like Lamtoro, Klampok, Kenitu, Mimbo, and Mahogany (or custom wood species upon request). It is ideal for residential heating, commercial cooking, outdoor grilling, and heavy industrial fuel applications.',
      descId: 'Tersedia dalam ukuran panjang yang presisi, mulai dari 36 cm hingga 47 cm, kayu bakar alami ini mencakup pasokan kayu keras yang stabil, seperti Lamtoro, Klampok, Kenitu, Mimbo, dan Mahoni (atau jenis kayu lain sesuai permintaan). Produk ini sangat ideal untuk kebutuhan pemanas hunian, keperluan memasak komersial, kegiatan memanggang di luar ruangan, maupun sebagai bahan bakar untuk kebutuhan industri berskala besar.',
      descEn: 'Offered in precise lengths ranging from 36 cm to 47 cm, this natural firewood features a steady supply of hard timber like Lamtoro, Klampok, Kenitu, Mimbo, and Mahogany (or custom wood species upon request). It is ideal for residential heating, commercial cooking, outdoor grilling, and heavy industrial fuel applications.'
    }
  ];

  const DEFAULT_CMS = {
    header: {
      title: 'Natural energy, Global Quality',
      enDesc: 'A trusted supplier of premium-quality charcoal and firewood, catering to culinary (BBQ/grilling), industrial, and agricultural needs on a global scale. We are prepared to consistently supply both local and international markets.',
      idDesc: 'Pemasok tepercaya untuk arang dan kayu bakar berkualitas premium guna memenuhi kebutuhan kuliner (BBQ/pemanggangan), industri, serta pertanian berskala global. Siap memasok pasar lokal maupun internasional secara konsisten.',
      heroImg: '../assets/e5b465e662d1108b8a092052f4b0fefc.png'
    },
    about: {
      enDesc: 'X BAR is an Indonesia-based supplier of quality charcoal and wood-based products, serving both local and international markets. We specialize in Tamarind Charcoal, Mixed Charcoal, Firewood, and Charcoal Powder, carefully selected and processed to deliver consistent quality and reliable performance',
      idDesc: 'X BAR adalah pemasok produk berbasis arang dan kayu berkualitas yang berbasis di Indonesia, melayani pasar lokal maupun internasional. Kami mengkhususkan diri pada Arang Kayu Asam (Tamarind Charcoal), Arang Campuran (Mixed Charcoal), Kayu Bakar, dan Bubuk Arang—semuanya dipilih dan diproses dengan cermat untuk menghadirkan kualitas yang konsisten serta performa yang dapat diandalkan.'
    },
    history: [
      {
        period: '2017 - 2018',
        enDesc: 'As the manufacturer, we built three kilns at a cost of 9 million per unit, with specifications of 9 meters in length and 2 meters in width. We supply our output to local middlemen in Bondowoso.',
        idDesc: 'Sebagai produsen, kami membangun tiga unit tanur dengan biaya 9 juta per unit, yang memiliki spesifikasi panjang 9 meter dan lebar 2 meter. Kami memasok hasil produksi kami kepada para perantara lokal di Bondowoso.'
      },
      {
        period: '2019 - 2022',
        enDesc: 'We partnered with an external investor to construct 25 kilns at a production site in Sukowono Village, Pujer District. With these 25 kilns, we are able to ship an output of 4-5 containers per month. We export the charcoal to buyers in the Middle East.',
        idDesc: 'Kami bermitra dengan investor eksternal untuk membangun 25 tanur di lokasi produksi yang terletak di Desa Sukowono, Kecamatan Pujer. Dengan 25 tanur tersebut, kami mampu mengirimkan hasil produksi sebanyak 4-5 kontainer per bulan. Kami mengekspor arang tersebut kepada para pembeli di Timur Tengah.'
      },
      {
        period: '2022 - Sekarang',
        enDesc: 'We have transformed into charcoal aggregators, partnering with farmers and kiln owners in Bondowoso to help market their charcoal production.',
        idDesc: 'Kami telah bertransformasi menjadi agregator arang, bermitra dengan para petani serta pemilik tanur di Bondowoso untuk membantu memasarkan produksi arang mereka.'
      }
    ],
    visionMission: {
      visionEn: 'To become a trusted, world-class Indonesian company providing high-quality wood- and charcoal-based energy products.',
      visionId: 'Menjadi perusahaan Indonesia berkelas dunia yang tepercaya dalam menyediakan produk energi berbasis kayu dan arang berkualitas tinggi.',
      missionEn: '1. Provide consistently high-quality charcoal and wood products for the international market.\n2. Build long-term relationships based on trust, quality, and excellent service.\n3. Develop products sustainably through the responsible use of natural resources.\n4. Bring the quality and excellence of Indonesian products to the global market.',
      missionId: '1. Menyediakan produk arang dan kayu yang senantiasa berkualitas tinggi untuk pasar internasional.\n2. Membangun hubungan jangka panjang yang didasarkan pada kepercayaan, kualitas, dan layanan prima.\n3. Mengembangkan produk secara berkelanjutan melalui pemanfaatan sumber daya alam yang bertanggung jawab.\n4. Menghadirkan kualitas dan keunggulan produk Indonesia ke pasar global.'
    },
    gallery: [
      { id: 'g1', name: 'galeri1.jpg', src: '../assets/4116beb8301aabfec2c13f7206c8a1b8.png' },
      { id: 'g2', name: 'galeri2.jpg', src: '../assets/5d5352947f8602f68bac1e3e16072089.png' },
      { id: 'g3', name: 'galeri3.jpg', src: '../assets/4322e72277367a243a9dd51066389b0c.png' },
      { id: 'g4', name: 'galeri4.jpg', src: '../assets/5ab7fe2896c98c015c790a3b9277161e.png' }
    ]
  };

  const DEFAULT_PROFILE = {
    name: 'Admin X BAR',
    email: 'admin@xbar.co.id',
    avatar: '../assets/admin-avatar.jpg'
  };

  window.XBarAdmin = {
    getProducts() {
      try {
        const raw = localStorage.getItem('xbar_products');
        return raw ? JSON.parse(raw) : structuredClone(DEFAULT_PRODUCTS);
      } catch (e) {
        return structuredClone(DEFAULT_PRODUCTS);
      }
    },
    saveProducts(list) {
      localStorage.setItem('xbar_products', JSON.stringify(list));
    },
    getCms() {
      try {
        const raw = localStorage.getItem('xbar_cms_data');
        return raw ? JSON.parse(raw) : structuredClone(DEFAULT_CMS);
      } catch (e) {
        return structuredClone(DEFAULT_CMS);
      }
    },
    saveCms(data) {
      localStorage.setItem('xbar_cms_data', JSON.stringify(data));
    },
    getProfile() {
      try {
        const raw = localStorage.getItem('xbar_admin_profile');
        return raw ? JSON.parse(raw) : structuredClone(DEFAULT_PROFILE);
      } catch (e) {
        return structuredClone(DEFAULT_PROFILE);
      }
    },
    saveProfile(profile) {
      localStorage.setItem('xbar_admin_profile', JSON.stringify(profile));
    },
    showToast(message) {
      let toast = document.getElementById('adminToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'adminToast';
        toast.className = 'admin-toast';
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toast._timer);
      toast._timer = setTimeout(() => toast.classList.remove('show'), 2600);
    },
    initEditProfileModal() {
      const avatarTrigger = document.getElementById('topAvatarBtn');
      const modalBackdrop = document.getElementById('editProfileModal');
      if (!avatarTrigger || !modalBackdrop) return;

      const profile = this.getProfile();
      const topAvatarImg = avatarTrigger.querySelector('img');
      if (topAvatarImg && profile.avatar) topAvatarImg.src = profile.avatar;

      const nameInput = document.getElementById('profileNameInput');
      const emailInput = document.getElementById('profileEmailInput');
      const newPassInput = document.getElementById('profileNewPassInput');
      const lastPassInput = document.getElementById('profileLastPassInput');
      const avatarCircle = document.getElementById('profileAvatarPreview');
      const fileInput = document.getElementById('profileAvatarFile');
      const changeImgBtn = document.getElementById('profileChangeImgBtn');
      const cancelBtn = document.getElementById('profileCancelBtn');
      const form = document.getElementById('editProfileForm');

      let pendingAvatar = profile.avatar;

      function renderPreview(src) {
        if (!avatarCircle) return;
        if (src) {
          avatarCircle.innerHTML = `<img src="${src}" alt="Profile Avatar">`;
        } else {
          avatarCircle.textContent = 'AE';
        }
      }

      avatarTrigger.addEventListener('click', () => {
        const cur = window.XBarAdmin.getProfile();
        pendingAvatar = cur.avatar;
        if (nameInput) nameInput.value = cur.name || '';
        if (emailInput) emailInput.value = cur.email || '';
        if (newPassInput) newPassInput.value = '';
        if (lastPassInput) lastPassInput.value = '';
        renderPreview(pendingAvatar);
        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
      });

      function closeModal() {
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
      }

      if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });

      if (changeImgBtn && fileInput) {
        changeImgBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => {
          const file = fileInput.files && fileInput.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (ev) => {
            pendingAvatar = ev.target.result;
            renderPreview(pendingAvatar);
          };
          reader.readAsDataURL(file);
        });
      }

      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const updated = {
            name: nameInput ? nameInput.value.trim() : profile.name,
            email: emailInput ? emailInput.value.trim() : profile.email,
            avatar: pendingAvatar
          };
          window.XBarAdmin.saveProfile(updated);
          if (topAvatarImg && updated.avatar) topAvatarImg.src = updated.avatar;
          closeModal();
          window.XBarAdmin.showToast('Profile updated successfully.');
        });
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
          closeModal();
        }
      });
    }
  };
})();
