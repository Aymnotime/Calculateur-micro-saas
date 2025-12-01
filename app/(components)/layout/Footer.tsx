export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <div className="text-gray-900 font-semibold">© 2025 ProfitEngine</div>
          <p className="mt-2">Construire des outils simples, rapides et utiles pour les e-commerçants.</p>
        </div>
        <div>
          <div className="text-gray-900 font-semibold">Navigation</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-gray-900" href="/blog">Blog</a></li>
            <li><a className="hover:text-gray-900" href="/contact">Contact</a></li>
            <li><a className="hover:text-gray-900" href="#">Mentions Légales</a></li>
            <li><a className="hover:text-gray-900" href="#">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div>
          <div className="text-gray-900 font-semibold">Nous suivre</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-gray-900" href="#">Twitter</a></li>
            <li><a className="hover:text-gray-900" href="#">LinkedIn</a></li>
            <li><a className="hover:text-gray-900" href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
