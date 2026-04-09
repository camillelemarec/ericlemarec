export const metadata = {
  title: "Mentions légales | SELARL Eric Le Marec",
  description:
    "Mentions légales du site SELARL Eric Le Marec : éditeur, hébergement, paiement en ligne et protection des données.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-4xl space-y-8 px-6 py-12">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">Mentions légales</h1>
          <p className="text-sm text-slate-500">Dernière mise à jour : février 2026</p>
        </header>

        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Éditeur du site</h2>
            <p className="text-sm text-slate-700">
              Le présent site est édité par la <strong>SELARL Eric Le Marec</strong>.
            </p>
            <p className="text-sm text-slate-700">
              Adresse : 10, rue de Verdun – 44410 Herbignac
            </p>
            <p className="text-sm text-slate-700">Email : elm@etudelemarec.com</p>
            <p className="text-sm text-slate-700">
              Directeur de la publication : Maître Eric Le Marec
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Hébergement</h2>
            <p className="text-sm text-slate-700">
              Le site est hébergé par <strong>Vercel Inc.</strong>
            </p>
            <p className="text-sm text-slate-700">440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
            <p className="text-sm text-slate-700">Site web : https://vercel.com</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Paiement en ligne</h2>
            <p className="text-sm text-slate-700">
              Le service de paiement en ligne proposé sur ce site est réalisé via{" "}
              <strong>Stripe</strong>.
            </p>
            <p className="text-sm text-slate-700">
              Les données bancaires sont traitées de manière sécurisée par Stripe et ne
              sont pas conservées sur ce site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              Propriété intellectuelle
            </h2>
            <p className="text-sm text-slate-700">
              L&apos;ensemble des éléments du site (textes, contenus, logo, images,
              charte graphique) est protégé par le droit de la propriété intellectuelle.
            </p>
            <p className="text-sm text-slate-700">
              Toute reproduction, représentation ou diffusion, totale ou partielle, sans
              autorisation préalable est interdite.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Données personnelles</h2>
            <p className="text-sm text-slate-700">
              Les informations transmises via les formulaires de contact ou de paiement
              sont utilisées uniquement pour le traitement de votre demande.
            </p>
            <p className="text-sm text-slate-700">
              Conformément à la réglementation applicable, vous pouvez exercer vos droits
              d&apos;accès, de rectification ou de suppression en écrivant à :
              elm@etudelemarec.com
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Responsabilité</h2>
            <p className="text-sm text-slate-700">
              L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à
              jour des informations diffusées sur le site, sans pouvoir en garantir
              l&apos;exhaustivité en permanence.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

