var clubeEventosData = [
  {
    id: 'evt-1',
    titulo: 'Torneio de Sueca',
    data: '12 Junho 2026',
    descricao: 'Uma tarde divertida com prémios e convívio entre sócios.',
  },
  {
    id: 'evt-2',
    titulo: 'Baile Popular',
    data: '28 Junho 2026',
    descricao: 'Música ao vivo, petiscos e muita animação.',
  },
  {
    id: 'evt-3',
    titulo: 'Caminhada Solidária',
    data: '10 Julho 2026',
    descricao: 'Passeio em grupo para apoiar causas locais.',
  },
];

var clubeGaleriaData = [
  {
    id: 'img-1',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    alt: 'Evento do clube',
  },
  {
    id: 'img-2',
    src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop',
    alt: 'Convívio entre sócios',
  },
  {
    id: 'img-3',
    src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop',
    alt: 'Atividades recreativas',
  },
];

function ClubeHeroSection() {
  return (
    <section className="bg-gradient-to-r from-amber-900 to-orange-700 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-5xl font-black md:text-6xl">
          Clube Recreativo da Sapataria
        </h1>

        <p className="mb-8 max-w-2xl text-xl text-orange-100 md:text-2xl">
          Um espaço de amizade, tradição e convívio para toda a comunidade.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-orange-800 hover:bg-orange-50 transition"
          >
            Tornar-me Sócio
          </button>

          <button
            type="button"
            className="rounded-2xl border border-white px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            Ver Eventos
          </button>
        </div>
      </div>
    </section>
  );
}

function ClubeSobreSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="mb-6 text-4xl font-bold">Sobre o Clube</h2>

        <p className="mb-4 text-lg leading-relaxed text-stone-600">
          O Clube Recreativo da Sapataria promove cultura, desporto e convívio
          social para toda a comunidade.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-stone-600">
          Organizamos eventos recreativos, atividades culturais e iniciativas
          solidárias durante todo o ano.
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-black text-orange-700">25+</div>
            <div className="mt-2 text-sm text-stone-500">Anos de História</div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-black text-orange-700">300</div>
            <div className="mt-2 text-sm text-stone-500">Sócios Ativos</div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-black text-orange-700">50+</div>
            <div className="mt-2 text-sm text-stone-500">Eventos por Ano</div>
          </div>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop"
        alt="Comunidade reunida"
        className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
      />
    </section>
  );
}

function ClubeEventosSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 text-4xl font-bold">Próximos Eventos</h2>

        <p className="mb-12 text-lg text-stone-600">
          Participa nas nossas atividades e junta-te à comunidade.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {clubeEventosData.map((evento) => (
            <article
              key={evento.id}
              className="rounded-3xl bg-stone-100 p-8 shadow-md hover:shadow-lg transition"
            >
              <span className="mb-4 inline-block rounded-full bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-800">
                {evento.data}
              </span>

              <h3 className="mb-3 text-2xl font-bold">{evento.titulo}</h3>

              <p className="mb-6 text-stone-600">{evento.descricao}</p>

              <button
                type="button"
                className="font-semibold text-orange-700 hover:text-orange-900 transition"
              >
                Saber mais →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClubeGaleriaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Galeria</h2>

        <p className="text-lg text-stone-600">
          Alguns momentos especiais do nosso clube.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {clubeGaleriaData.map((imagem) => (
          <img
            key={imagem.id}
            src={imagem.src}
            alt={imagem.alt}
            className="h-80 w-full rounded-3xl object-cover shadow-lg hover:shadow-xl transition"
          />
        ))}
      </div>
    </section>
  );
}

function ClubeContactosSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
  };

  return (
    <section className="bg-stone-900 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold">Contactos</h2>

          <p className="mb-8 text-lg text-stone-300">
            Entra em contacto connosco para inscrições e informações.
          </p>

          <div className="space-y-4 text-lg">
            <p>📍 Rua Principal da Sapataria, Portugal</p>
            <p>📞 +351 912 345 678</p>
            <p>✉️ geral@clubesapataria.pt</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 p-8">
          <h3 className="mb-6 text-2xl font-bold">Enviar Mensagem</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500"
              required
            />

            <textarea
              rows={5}
              placeholder="Mensagem"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500"
              required
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-orange-700 px-6 py-3 font-semibold hover:bg-orange-800 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ClubeFooterSection() {
  return (
    <footer className="bg-black py-6 text-center text-sm text-stone-400">
      © 2026 Clube Recreativo da Sapataria — Todos os direitos reservados.
    </footer>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-800">
      <ClubeHeroSection />
      <ClubeSobreSection />
      <ClubeEventosSection />
      <ClubeGaleriaSection />
      <ClubeContactosSection />
      <ClubeFooterSection />
    </main>
  );
}

export default App;
