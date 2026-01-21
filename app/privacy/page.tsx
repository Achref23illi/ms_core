'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/app/components';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Back Navigation */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-[#092963] pb-12">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#0f3475]" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Politique de <span className="text-[#eb7e2a]">Confidentialité</span>
                        </h1>
                        <p className="text-gray-300 text-sm">Dernière mise à jour : 23 septembre 2022</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Nous vous devons de traiter vos informations avec sérieux et en toute sécurité.
                            En naviguant sur notre site Internet ou en bénéficiant de nos services, vous reconnaissez avoir lu et compris la présente politique et consentez à ce que vos données et renseignements personnels soient traités en conformité avec cette dernière, le cas échéant.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
                            <h3 className="text-lg font-bold text-[#092963] mb-4">Sommaire</h3>
                            <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                                <li>Objectifs de la politique de confidentialité</li>
                                <li>Entrée en vigueur</li>
                                <li>Modalités de recueil du consentement</li>
                                <li>Objectifs de la collecte de données</li>
                                <li>Finalités de traitements des données</li>
                                <li>Renseignements personnels collectés</li>
                                <li>Les procédés de traitements utilisés</li>
                                <li>Modalités d'accès et de contrôle des renseignements personnels</li>
                                <li>Partage et raisons du partage des renseignements personnels à des tiers</li>
                                <li>Utilisation de témoins et technologies similaires</li>
                                <li>Conservation des renseignements personnels</li>
                            </ol>
                        </div>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">1. Objectifs de la politique de confidentialité</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Le respect de la vie privée ainsi que la protection des renseignements personnels sont essentiels pour nous, c'est pourquoi, par la présente Politique, nous entendons protéger ceux-ci conformément aux lois en vigueur.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Afin d'assurer cette protection, Technologies MS Core s'engage à ne collecter, traiter et partager une information permettant d'identifier un individu que lorsque ce dernier y a consenti, à moins que cela ne soit permis ou requis par la loi, auquel cas votre consentement ne sera pas nécessaire.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            La Politique a pour objectif d'informer les utilisateurs des raisons et de la façon dont Technologies MS Core, ou toute personne agissant en son nom, va collecter et utiliser leurs renseignements personnels. Elle se veut être en langage clair afin de s'assurer un consentement éclairé des utilisateurs.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Aux fins de la présente Politique, on entend par « renseignements personnels » tout renseignement permettant d'identifier une personne physique. Dans la mesure du possible, nous anonymiserons, pseudonymiserons et/ou agrégerons ces derniers afin qu'ils n'identifient plus ladite personne.
                        </p>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">2. Entrée en vigueur</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            La présente Politique s'applique à partir du <strong>23 septembre 2022</strong>.
                        </p>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">3. Modalités de recueil du consentement</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Nous nous engageons à obtenir un consentement avant de recueillir les renseignements personnels d'un individu. Le consentement peut être explicite ou implicite et peut être fourni directement par la personne ou par son représentant autorisé.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Nous privilégions l'obtention d'un consentement explicite, que ce soit verbalement, par voie électronique ou par écrit. Toutefois le consentement implicite peut être raisonnablement déduit de l'action ou l'inaction d'une personne.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Si nous voulons utiliser les renseignements personnels à une nouvelle fin, nous décrirons l'utilisation prévue et demanderons à nouveau le consentement.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Il n'est pas toujours possible, notamment dans le cadre d'une demande des autorités gouvernementales, d'obtenir le consentement de la personne. Nous nous engageons à ne jamais communiquer ce type de renseignements, autrement qu'en conformité avec la présente Politique, sauf si la loi nous y oblige ou le permet.
                        </p>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">4. Objectifs de la collecte de données</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Les informations collectées le sont conformément aux finalités et objectifs fixés dans la présente politique de confidentialité. Voici certaines raisons pour lesquelles nous collectons vos renseignements personnels :
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Pour fournir des services :</strong> Nous collectons et traitons les données nécessaires pour remplir notre mission et nos obligations contractuelles.</li>
                            <li><strong>Pour assurer et améliorer ces services :</strong> Les données collectées lors de vos interactions sont utilisées pour analyser et améliorer nos services.</li>
                            <li><strong>Pour proposer de nouveaux services :</strong> Les données peuvent servir dans un cadre de recherche et développement.</li>
                            <li><strong>Pour proposer des services personnalisés :</strong> L'analyse des données nous permet d'offrir des services pertinents.</li>
                            <li><strong>Pour évaluer les performances des services :</strong> Les données nous permettent d'évaluer et d'améliorer nos services.</li>
                            <li><strong>Pour protéger la vie privée de nos utilisateurs :</strong> Les données récoltées nous permettent de vérifier l'identité.</li>
                            <li><strong>Pour satisfaire des obligations légales :</strong> Les données peuvent être récoltées pour satisfaire à des obligations légales.</li>
                        </ul>

                        {/* Section 5 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">5. Renseignements personnels collectés</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Technologies MS Core peut collecter des renseignements personnels sous diverses formes, mais ne le fera que par des moyens licites et uniquement aux fins nécessaires. Parmi les renseignements susceptibles d'être recueillis :
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li><strong>Nom et coordonnées :</strong> prénom, nom, adresse courriel, adresse postale, numéro de téléphone.</li>
                            <li><strong>Justificatifs d'identité :</strong> mots de passe et renseignements de sécurité.</li>
                            <li><strong>Données démographiques :</strong> âge, sexe, pays, langue de communication.</li>
                            <li><strong>Données de paiement :</strong> numéro de carte de crédit, compte bancaire.</li>
                            <li><strong>Images et sons :</strong> données audiovisuelles pour assurer la sécurité.</li>
                            <li><strong>Résolution des problèmes :</strong> données fournies lors de demandes d'assistance.</li>
                            <li><strong>Centres d'intérêt et préférences :</strong> données sur vos intérêts.</li>
                            <li><strong>Données de localisation :</strong> données sur votre emplacement.</li>
                        </ul>

                        {/* Section 6 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">6. Les procédés de traitement utilisés</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Technologies MS Core accorde la plus grande importance à la sécurité de vos renseignements personnels et s'engage à traiter ceux-ci suivant les normes et standards de l'industrie, uniquement pour les fins pour lesquelles ils sont recueillis.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Néanmoins, la sauvegarde absolue de ces derniers est impossible compte tenu des limites de sécurité inhérentes à une transmission via Internet. Cependant, nous nous engageons à protéger et à sauvegarder tous les renseignements personnels conformément à la réglementation en vigueur.
                        </p>

                        {/* Section 7 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">7. Modalités d'accès et de contrôle des renseignements personnels</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Technologies MS Core s'assure que tous les renseignements personnels en sa possession sont aussi exacts, actuels et complets que nécessaire.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Vous avez le droit de demander accès à vos renseignements personnels aux fins de vérification et de demander une correction si ces derniers sont inexacts. Si vous croyez que vos renseignements personnels sont inexacts ou si vous souhaitez avoir accès à vos renseignements personnels, vous pouvez faire une demande en utilisant les coordonnées fournies à la fin de la présente Politique.
                        </p>

                        {/* Section 8 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">8. Partage des renseignements personnels à des tiers</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Nous ne partageons pas vos renseignements personnels avec des entreprises, des organisations, ni des personnes extérieures à Technologies MS Core, à l'exception de nos fournisseurs et partenaires autorisés, ainsi que dans les cas suivants :
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                            <li>Avec votre consentement</li>
                            <li>Pour le stockage dans des serveurs infonuagiques</li>
                            <li>Pour des raisons juridiques</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong>Technologies MS Core s'engage à ne pas vendre ou louer vos renseignements personnels à une tierce partie.</strong>
                        </p>

                        {/* Section 9 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">9. Témoins et technologies similaires</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Technologies MS Core peut utiliser des fichiers témoins (« cookies »), des balises Internet, des pixels invisibles, des fichiers journal ou autres technologies pour collecter certains renseignements personnels relatifs aux visiteurs sur nos sites Web.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Les témoins utilisés servent notamment à retrouver l'historique de recherche ainsi que les paniers liés à la session, pour faciliter l'expérience de navigation en ligne. Vous pouvez définir les paramètres de votre navigateur pour qu'il vous informe de la présence de témoins.
                        </p>

                        {/* Section 10 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">10. Conservation des renseignements personnels</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Technologies MS Core garde les données collectées pendant différentes périodes de temps, en fonction de leur nature et de leur utilité dans l'offre de nos services. Durant la période de conservation, Technologies MS Core prend des mesures physiques et techniques pour assurer la sécurité des données.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Une fois la période de conservation expirée, les renseignements personnels sont détruits. Seuls les statistiques ou rapports contenant des données dépersonnalisées et anonymisées pourront être conservés pour des périodes prolongées.
                        </p>

                        {/* Section 11 */}
                        <h2 className="text-2xl font-bold text-[#092963] mt-12 mb-4">11. Modifications de la présente politique</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Nous apportons des modifications à la présente Politique de confidentialité de temps à autre. Toute diminution de vos droits ne saurait être appliquée sans votre consentement explicite. Nous indiquons toujours la date à laquelle les dernières modifications ont été apportées.
                        </p>

                        {/* Contact */}
                        <div className="bg-[#092963] text-white p-8 rounded-2xl mt-12">
                            <h2 className="text-2xl font-bold mb-4">Personne en charge de la conformité</h2>
                            <p className="mb-4 text-gray-200">
                                Pour toute question, pour formuler des commentaires ou pour émettre une plainte au sujet de cette politique, vous pouvez communiquer avec la personne responsable de la protection des renseignements personnels.
                            </p>
                            <div className="space-y-2 text-gray-200">
                                <p><strong>Nom :</strong> Martin Soro</p>
                                <p><strong>E-mail :</strong> <a href="mailto:martin.soro@techmscore.com" className="text-[#eb7e2a] hover:underline">martin.soro@techmscore.com</a></p>
                                <p><strong>Adresse :</strong> 877 rue du butor, Lévis (QC), G7A5M1</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
