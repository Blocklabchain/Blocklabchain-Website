import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    fallbackLng: 'en',
    resources: {
      fr: {
      translation: {
                     about: 'à propos',
                     services: 'services',
                     testimonials: 'témoignages',
                     'ico raised': 'ico levé',
                     'trusted': 'Nos Avis',
                     'contact': 'contact',
                     'hero_subtitle1': 'AGENCE DIGITALE WEB2 & WEB3',
                     'hero_title1': 'Blocklabchain',
                     'hero_btn1': 'Parlons',
                     'hero_desc': 'Site Web de Développement, APP, Dapps, ICO, Conception, Marketing, Vidéo & Agence RP.',
                     'expertise-1_title': '200+',
                     'expertise-1_content': 'Clients Réels',
                     'expertise-2_title': '5+',
                     'expertise-2_content': 'Années d\'Expérience',
                     'expertise-3_title': '1900+',
                     'expertise-3_content': 'Avis de 1900+ Influenceurs Crypto Vérifiés sur YouTube',
                     'expertise-4_title': '60+',
                     'expertise-4_content': 'Publications chez Forbes et plus de 60 médias d\'affaires & crypto',
                     'expertise-5_title': '30+',
                     'expertise-5_content': 'Experts de l\'Équipe',
                     'expertise-6_title': 'Paris',
                     'expertise-6_content': 'Enregistré à Paris, France',
                      'sevices-btn-1': 'développement',
                       'sevices-btn-2': 'marketing',
                       'sevices-btn-3': 'conception',
                       'sevices-btn-4': 'vidéo',
                     'sevices-development-1_title': 'Site Web',
                     'sevices-development-1_content': 'Création de sites web sur mesure, plateformes de commerce électronique et solutions CMS puissantes adaptées à vos besoins. Rehaussez votre présence en ligne avec notre expertise.',
                     'sevices-development-2_title': 'Application',
                     'sevices-development-2_content': 'Conception d\'applications mobiles, web et hybrides sur mesure pour répondre à des besoins divers. Rehaussez votre présence numérique avec nos solutions d\'application personnalisées.',
                     'sevices-development-3_title': 'Dapps',
                     'sevices-development-3_content': 'Spécialisé dans le développement d\'applications décentralisées (dApps), utilisant la technologie blockchain pour créer des solutions sécurisées et innovantes (staking, launchpad, p2p escrow, cex, dex, marché NFT ...)',
                     'sevices-development-4_title': 'Smart Contract',
                     'sevices-development-4_content': 'Révolutionnez les transactions avec nos solutions de smart contract : accords sécurisés et automatisés sur blockchain pour des opérations sans heurts.',
                     'sevices-development-5_title': 'SEO',
                     'sevices-development-5_content': 'Optimisez votre présence numérique avec nos stratégies de référencement (Search Engine Optimization) : amélioration de la visibilité, du trafic et du classement pour la croissance de votre entreprise.',
                     'sevices-development-6_title': 'SEA',
                     'sevices-development-6_content': 'SEA (Search Engine Advertising) : Amplifiez votre présence en ligne grâce à des publicités ciblées, maximisant la visibilité et les conversions.',
                     'sevices-development-7_title': 'Blockchain',
                     'sevices-development-7_content': 'Débloquer le potentiel grâce au développement blockchain : création de réseaux sécurisés et décentralisés adaptés à vos besoins et objectifs uniques.',
                     'sevices-development-8_title': 'CRM',
                     'sevices-development-8_content': 'Optimisez les relations client avec nos solutions CRM (Customer Relationship Management) : rationalisation des interactions, des données et des insights pour un engagement et une croissance améliorés.',
                     'sevices-development-9_title': 'Audit',
                     'sevices-development-9_content': 'Assurer la transparence et l\'efficacité : nos services d\'audit évaluent et optimisent méticuleusement les systèmes pour des performances et une sécurité accrues.',
                     'sevices-marketing-1_title': 'Incubateur ICO',
                     'sevices-marketing-1_content': 'Favorisez le succès avec notre Incubateur ICO : soutien et accompagnement complets pour le lancement et la croissance de levées de fonds réussies.',
                     'sevices-marketing-2_title': 'Communiqué de presse',
                     'sevices-marketing-2_content': `Concevez des communiqués de presse percutants avec notre expertise : offrir des récits convaincants pour amplifier la visibilité et la portée de votre marque (Forbes, Cointelegraph, Yahoo, Bloomberg...)`,
                     'sevices-marketing-3_title': 'Influenceurs',
                     'sevices-marketing-3_content': `Amplifiez la voix de votre marque grâce aux influenceurs : tirer parti de leur portée et de leur crédibilité pour engager et élargir votre public.`,
                     'sevices-marketing-4_title': 'SEA',
                     'sevices-marketing-4_content': 'SEA (Search Engine Advertising) : Amplifiez votre présence en ligne grâce à des publicités ciblées, maximisant la visibilité et les conversions.',
                     'sevices-marketing-5_title': 'Partenariat',
                     'sevices-marketing-5_content': 'Favorisez la croissance grâce à des partenariats stratégiques : tirer parti des synergies pour étendre la portée, améliorer les offres et conduire le succès mutuel.',
                     'sevices-marketing-6_title': 'Événement de Réseautage',
                     'sevices-marketing-6_content': 'Rejoignez nos événements de réseautage : Connecter les leaders de l\'industrie, favoriser la collaboration et débloquer des opportunités de croissance et d\'innovation.',
                     'sevices-design-1_title': 'Logo',
                     'sevices-design-1_content': 'Création de logos percutants : marier la créativité avec l\'identité de la marque pour créer des représentations visuelles mémorables, polyvalentes et uniques.',
                     'sevices-design-2_title': 'Dépliants',
                     'sevices-design-2_content': 'Conception de dépliants captivants : mêler créativité et information pour créer des supports promotionnels visuellement attrayants et informatifs.',
                     'sevices-design-3_title': 'Figma',
                     'sevices-design-3_content': 'Débloquez le potentiel de conception avec Figma : Collaborez de manière transparente, créez des visuels époustouflants et rationalisez les flux de travail pour l\'excellence en matière de conception.',
                     'sevices-design-4_title': 'Photoshop',
                     'sevices-design-4_content': 'Libérez la créativité avec Photoshop : Création de visuels époustouflants, manipulation d\'images et concrétisation de l\'imagination avec précision.',
                     'sevices-design-5_title': 'Livre blanc',
                     'sevices-design-5_content': 'Rédaction de livres blancs complets : distillation d\'idées complexes en documents clairs et informatifs, mettant en valeur l\'expertise et la vision.',
                     'sevices-design-6_title': 'Direction Artistique',
                     'sevices-design-6_content': 'Définition de la direction artistique : Fusion de la créativité avec la stratégie, guidant les récits visuels pour refléter l\'essence de la marque et captiver les publics.',
                     'sevices-video-1_title': 'Montage Vidéo',
                     'sevices-video-1_content': 'Affinez votre histoire grâce au montage vidéo : Amélioration des visuels, du son et des effets pour créer des récits engageants et percutants.',
                     'sevices-video-2_title': 'Effets Visuels',
                     'sevices-video-2_content': 'Rehaussez le récit avec des effets visuels : Transformation de vidéos en expériences captivantes grâce à des visuels innovants et immersifs.',
                     'sevices-video-3_title': 'Storyboarding',
                     'sevices-video-3_content': 'Création de récits à travers le storyboard : Visualisation de concepts, de séquences et d\'éléments narratifs pour une production vidéo convaincante.',
                     'sevices-video-4_title': 'Publicité',
                     'sevices-video-4_content': 'Création de vidéos publicitaires convaincantes : Récits engageants, visuels captivants et messages stratégiques pour une promotion de marque percutante.',
                     'sevices-video-5_title': 'Interviews',
                     'sevices-video-5_content': 'Capturer des histoires authentiques à travers des interviews : Création de récits convaincants qui résonnent, informent et se connectent avec les publics.',
                     'sevices-video-6_title': 'Vidéos de Gameplay',
                     'sevices-video-6_content': 'Mise en valeur des expériences de jeu à travers des vidéos de gameplay : Capturer l\'excitation, les stratégies et les moments immersifs pour engager et divertir les publics.',
                     'workData_name': 'travail',
                     'workData_subHeading': `nos
                                              Développements de Sites Web & Applications
                                              `,
                     'workData_heading': `Fiers de
                                           chaque travail que nous faisons`,
                     'workData_paragraph': 'Nous considérons chaque projet comme une opportunité de relever la barre et sommes immensément fiers des résultats.',
                     'web3Data_name':`web3`,
                     'web3Data_subHeading':`nos ICOs web3`,
                     'web3Data_heading':`Donner le
                                           pouvoir au futur: Nos ICOs Web3`,
                     'web3Data_paragraph': `Nous considérons chaque projet comme une opportunité de relever la barre et sommes immensément fiers des résultats.`,
                     'client-1_number': '$610,000',
                     'client-2_number': '$800,101',
                     'client-3_number': '$210,101,927',
                     'client-4_number': '$50,183,127',
                     'client-5_number': '$610,000',
                     'client-6_number': '$800,101',
                     'client-7_number': '$210,101,927',
                     'client-8_number': '$50,183,127',
                     'testimonial-1_heading': `Hulk Cars`,
                     'testimonial-1_subHeading': `@Hulkcars`,
                     'testimonial-1_content': `@Blocklabchain qui a déjà aidé des centaines de projets ico web 3 nous soutient dans notre marketing! `,
                     'testimonial-1_time': `23 Juin, 2022`,
                     'testimonial-2_heading': `Flash Technologies`,
                     'testimonial-2_subHeading': `@Flash_Techno_Of`,
                     'testimonial-2_content': `@Blocklabchain Nous avons levé plus de 600,000 $ avec nos préventes grâce au marketing de Blocklabchain !!!!`,
                     'testimonial-2_time': `23 Septembre, 2023`,
                     'testimonial-3_heading': `Gulf Coin Official`,
                     'testimonial-3_subHeading': `@GulfCoin_`,
                     'testimonial-3_content': `@Blocklabchain a augmenté le taux de clics de 200% pour nos annonces en 7 jours !!!!`,
                     'testimonial-3_time': `19 Février, 2022`,
                     'testimonial-4_heading': `Hulk Cars`,
                     'testimonial-4_subHeading': `@Hulkcars`,
                     'testimonial-4_content': `@Blocklabchain qui a déjà aidé des centaines de projets ico web 3 nous soutient dans notre marketing! `,
                     'testimonial-4_time': `23 Juin, 2022`,
                     'testimonial-5_heading': `Flash Technologies`,
                     'testimonial-5_subHeading': `@Flash_Techno_Of`,
                     'testimonial-5_content': `@Blocklabchain Nous avons levé plus de 600,000 $ avec nos préventes grâce au marketing de Blocklabchain !!!!`,
                     'testimonial-5_time': `23 Juin, 2022`,
                     'testimonial-6_heading': `Gulf Coin Official`,
                     'testimonial-6_subHeading': `@GulfCoin_`,
                     'testimonial-6_content': `@Flexe_io a augmenté le taux de clics de 200% pour nos annonces en 7 jours !!!!`,
                     'testimonial-6_time': `19 Février, 2022`,
                     'inflencer-1_heading': `Conor Kenny`,
                     'inflencer-1_subHeading': `@ConorKenny`,
                     'inflencer-1_subscribesNumer': `180 K`,
                     'inflencer-1_earningNumer': `4,75 CR`,
                     'inflencer-1_avgViewsNumer': `10 K`,
                     'inflencer-2_heading': `CoinMars`,
                     'inflencer-2_subHeading': `@CoinMars`,
                     'inflencer-2_subscribesNumer': `73,9 K`,
                     'inflencer-2_earningNumer': `3,59 CR`,
                     'inflencer-2_avgViewsNumer': `37,5 K`,
                     'inflencer-3_heading': `CriptoMind`,
                     'inflencer-3_subHeading': `@CriptoMindYT`,
                     'inflencer-3_subscribesNumer': `120 K`,
                     'inflencer-3_earningNumer': `2,45 CR`,
                     'inflencer-3_avgViewsNumer': `10 K`,
                     'footer_link_columnName_1': 'Société',
                     'footer_link_col1_0': 'À propos de nous',
                     'footer_link_col1_1': 'services',
                     'footer_link_col1_2': 'témoignage',
                     'footer_link_col1_3': 'ico levé',
                     'footer_link_col1_4': 'Nos Avis',
                     'footer_link_col1_5': 'contact',
                     'footer_link_columnName_2': 'Ressources',
                     'footer_link_col2_0': 'termes et conditions',
                     'footer_link_col2_1': 'politique de confidentialité',
                     'footer_link_col2_2': 'Politique de cookies',
                     'footer_link_col2_3': 'Politique de remboursement et de service',
                     'footer_link_columnName_3': 'Services',
                     'footer_link_col3_0': 'développement',
                     'footer_link_col3_1': 'marketing',
                     'footer_link_col3_2': 'conception',
                     'footer_link_col3_3': 'vidéo',
                     'about_subTitle': 'À propos de nous',
                     'about_title': 'Expertise en chiffres',
                     'services_subTitle': 'Services',
                     'services_title': `Agence`,
                     'clients_heading': `<span class='h2-bold'>Nos Clients</span><br />de Confiance`,
                      'testimonials_heading': 'Nos Témoignages',
                          'btn_view_on_X': 'Voir sur Twitter',

                              'subscribes': 'Abonnés',
                              'earning': 'Gains',
                              'avgViews': 'Vues moyennes',
                                'business_heading': `60+Entreprises & <br/> <span class='h2-bold'>Crypto</span> Médias`,
                     'alert_title': 'Bonjour les amis',
                      'alert_desc': `Nous ne fournissons plus de services de site web, de développement, de dApps, de contrats intelligents, de blockchain, de NFT, de CRM, de conception, de marketing et de relations publiques en tant qu'agence car notre équipe est entièrement concentrée sur le développement.`,
                      'needServ': `Si vous avez besoin de service <span class='alert__if-need-link'>cliquez sur le lien</span> ou envoyez un e-mail à <a href='mailto:contact@blocklabchain.com' class='alert__if-need-link'>contact@blocklabchain.com</a>`,
                      'tac': 'Conditions Générales',
                        'tac_body': `
                                  <p class="sub-page__p p-s">Veuillez lire attentivement ce document pour comprendre les Conditions d'Utilisation concernant les Services fournis par notre Plateforme et comment le marketing est effectué dans le marché des cryptomonnaies.</p>

                                          <p class="sub-page__p p-s">Ces Conditions d'Utilisation de Blocklabchain (appelées les "Conditions d'Utilisation") établissent les termes régissant la relation entre la Plateforme Blocklabchain et l'Utilisateur lors de la fourniture des Services.</p>

                                          <p class="sub-page__p p-s">Les références à "nous", "notre" ou "nos" (ou des mots similaires) font référence à Blocklabchain.</p>

                                          <p class="sub-page__p p-s">Les références à "vous" ou "votre" (ou des mots similaires) font référence à notre Utilisateur.</p>

                                          <p class="sub-page__p p-s">La Plateforme propose à l'Utilisateur des Services pour la mise en œuvre d'activités marketing.</p>

                                          <p class="sub-page__p p-s">L'utilisation des Services de la Plateforme Blocklabchain est soumise aux Conditions d'Utilisation et à la Politique de Confidentialité.</p>

                                          <p class="sub-page__p p-s">Définitions</p>

                                          <p class="sub-page__p p-s">- ChatBot: Programme conçu pour simuler la communication entre l'Utilisateur et le service de support.</p>

                                          <p class="sub-page__p p-s">- Contrôleur: Désigne une personne physique ou morale, une autorité publique, une agence ou un autre organisme qui détermine de manière indépendante ou conjointe avec d'autres les finalités et les moyens du traitement des Données Personnelles.</p>

                                          <p class="sub-page__p p-s">- Cookie: Fichiers stockant des informations sur les actions précédentes sur la Plateforme, telles que la date et l'heure des visites sur le site, les clics et les transitions.</p>

                                          <p class="sub-page__p p-s">- Cryptomonnaie: Forme de monnaie numérique dont l'émission et la comptabilité reposent sur le chiffrement asymétrique et diverses méthodes de protection cryptographique, telles que la Preuve de travail et/ou la Preuve d'enjeu.</p>

                                          <p class="sub-page__p p-s">- Plateforme Blocklabchain (ci-après dénommée la Plateforme ou Blocklabchain): Service marketing pour la promotion et la publicité de produits sur le marché des cryptomonnaies.</p>

                                          <p class="sub-page__p p-s">- Site Web Blocklabchain (ci-après dénommé "Site Web"): Page web ou groupe de pages web par lesquelles l'Utilisateur reçoit les Services et utilise les services de la Plateforme Blocklabchain, disponibles à l'adresse suivante : https://blocklabchain.com/.</p>

                                          <p class="sub-page__p p-s">- RGPD (Règlement Général sur la Protection des Données): Règlement dans le cadre de la législation de l'Union européenne sur la protection des données personnelles de toutes les personnes physiques qui sont citoyens de l'Union européenne.</p>

                                          <p class="sub-page__p p-s">- Propriété Intellectuelle: Comprend des éléments liés à la fourniture des Services, tels que les marques de commerce, les droits d'auteur, les logiciels informatiques, les secrets commerciaux et des droits de propriété similaires.</p>

                                          <p class="sub-page__p p-s">- Inscription: Processus de placement d'une cryptomonnaie sur une bourse pour la négociation avec d'autres actifs.</p>

                                          <p class="sub-page__p p-s">- Messager: Système de messagerie instantanée pour la communication entre l'Utilisateur et la Plateforme.</p>

                                          <p class="sub-page__p p-s">- Partenaire: Personne morale (bourse de cryptomonnaies) par le biais de laquelle la Plateforme propose des Inscriptions.</p>

                                          <p class="sub-page__p p-s">- Données Personnelles: Toute information relative à l'Utilisateur qui est traitée, stockée, protégée et transmise conformément au RGPD.</p>

                                          <p class="sub-page__p p-s">- Politique de Confidentialité: Document écrit spécifiant les méthodes de collecte, de traitement et de stockage des Données Personnelles de l'Utilisateur.</p>

                                          <p class="sub-page__p p-s">- Processeur: Personne physique ou morale, autorité publique, institution ou autre organisme qui traite des Données Personnelles pour le compte du Contrôleur.</p>

                                          <p class="sub-page__p p-s">- Services: Travail analytique utilisant des plateformes publicitaires, achat de trafic, promotion de l'optimisation pour les moteurs de recherche, systèmes d'analyse, modèles publicitaires, réseaux sociaux, médias et forums de cryptomonnaies, fourniture d'Inscriptions en utilisant des services partenaires, marketing vidéo, développement de documentation White Paper et travail pour le concept White Label.</p>

                                          <p class="sub-page__p p-s">- Conditions d'Utilisation: Document fournissant les conditions, les règles et les dispositions de base pour utiliser la Plateforme.</p>

                                          <p class="sub-page__p p-s">- Tiers: Personne physique ou morale, autorité publique, institution ou organisme autre que l'Utilisateur, le Contrôleur, le Processeur et les personnes autorisées par le Contrôleur ou le Processeur sous leur supervision directe pour traiter des Données Personnelles.</p>

                                          <p class="sub-page__p p-s">- Utilisateur: Personne physique ou morale qui reçoit les Services et les Données Personnelles traitées par nous.</p>

                                          <p class="sub-page__p p-s">- Consentement de l'Utilisateur (ci-après dénommé Consentement): Expression de volonté volontaire, spécifique, informée et non ambiguë par laquelle l'Utilisateur consent au traitement de ses Données Personnelles.</p>

                                          <p class="sub-page__p p-s">Services</p>

                                          <p class="sub-page__p p-s">Blocklabchain fournit à l'Utilisateur des Services comme indiqué dans les sections suivantes du Site Web :</p>

                                          <p class="sub-page__p p-s">- Trafic.
                                          - Sensibilisation.
                                          - Communauté.
                                          - Conversation.
                                          - Échange.
                                          - Promotion en ASIE.
                                          - Emballage.
                                          - Marque blanche : La Plateforme peut assurer le marketing d'un produit (cryptomonnaie) pour une entreprise qui le lancera sous sa propre marque.</p>

                                          <p class="sub-page__p p-s">Règles pour travailler avec la Plateforme Blocklabchain</p>

                                          <p class="sub-page__p p-s">Pour recevoir des Services de la Plateforme, l'Utilisateur communique avec les employés de la Plateforme par l'intermédiaire de :</p>

                                          <p class="sub-page__p p-s">- Email: <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>.
                                          - Messagers: Telegram, WhatsApp, Facebook.</p>

                                          <p class="sub-page__p p-s">La communication dans les Messagers est facilitée à l'aide d'un ChatBot, qui collecte des informations préliminaires pour fournir des Services à l'Utilisateur. La communication ultérieure est assurée par un employé de la Plateforme.</p>

                                          <p class="sub-page__p p-s">Après avoir communiqué avec la Plateforme, l'Utilisateur sélectionne les types de Services et les conditions de coopération. La Plateforme fournit des Services à l'Utilisateur sur la base de l'Accord de Services conclu, définissant les termes, conditions et coûts de fourniture des Services.</p>

                                          <p class="sub-page__p p-s">À propos de la Plateforme Blocklabchain</p>

                                          <p class="sub-page__p p-s">Chez Blocklabchain, nous proposons des solutions de marketing ICO de premier ordre. ICO, ou Initial Coin Offering, est un mécanisme de financement alternatif pour les startups pour vendre leurs jetons crypto en échange d'autres cryptomonnaies.</p>

                                          <p class="sub-page__p p-s">Nous fournissons des solutions de développement ICO optimisées et stables adaptées aux besoins de l'Utilisateur, comprenant la création de plateformes ICO, de pages de destination, de création et de distribution de jetons, de Livres Blancs, de services pré-ICO et post-ICO, et de développement de logiciels Blockchain.</p>

                                          <p class="sub-page__p p-s">Avec plus de 40 projets réalisés, notre équipe de 8 experts possède une connaissance approfondie de l'industrie des ICO. Nous croyons qu'avec la bonne stratégie marketing, une campagne de RP ICO réussie peut aider à collecter les fonds nécessaires pour faire avancer votre projet.</p>

                                          <p class="sub-page__p p-s">Vous pouvez vous familiariser avec notre équipe dans la section "Équipe" du Site Web et lire des avis sur la qualité de notre travail dans la section "Témoignages".</p>

                                          <p class="sub-page__p p-s">Réseaux Sociaux</p>

                                          <p class="sub-page__p p-s">La Plateforme promeut activement ses Services sur les réseaux sociaux et fournit aux Utilisateurs des informations supplémentaires sur les pages de blog.</p>

                                          <p class="sub-page__p p-s">Les Utilisateurs peuvent accéder à des informations supplémentaires sur le marketing de cryptomonnaies sur les pages de blog.</p>

                                          <p class="sub-page__p p-s">La Plateforme publie les dernières actualités sur le marketing de cryptomonnaies sur le canal d'actualités Telegram. Les Utilisateurs peuvent s'abonner au canal pour rester informés des dernières actualités et tendances en matière de marketing de cryptomonnaies.</p>

                                          <p class="sub-page__p p-s">Droits du Propriétaire</p>

                                          <p class="sub-page__p p-s">- Recevoir des Données Personnelles fiables de l'Utilisateur.
                                          - Utiliser des Cookies lors de la fourniture des Services.
                                          - Interagir avec d'autres services et Partenaires.
                                          - Transférer des Données Personnelles à des Tiers, conformément aux Conditions d'Utilisation et à la Politique de Confidentialité.
                                          - Accorder un accès limité aux Données Personnelles des Utilisateurs à ses employés, Contrôleur, Processeur et personnel de support, conformément à la Politique de Confidentialité.
                                          - Divulguer des Données Personnelles à des Tiers, Partenaires, tribunaux, forces de l'ordre et organismes gouvernementaux, comme prévu par la Politique de Confidentialité.
                                          - Refuser unilatéralement d'interagir avec l'Utilisateur en cas de non-paiement par l'Utilisateur et/ou de violation de la Politique de Confidentialité et/ou des Conditions d'Utilisation.
                                          - Modifier unilatéralement les Conditions d'Utilisation et la Politique de Confidentialité.</p>

                                          <p class="sub-page__p p-s">Droits de l'Utilisateur</p>

                                          <p class="sub-page__p p-s">- Recevoir des Services de la Plateforme en marketing de cryptomonnaies.
                                          - Travailler sur le concept White Label.
                                          - Effectuer des Inscriptions avec l'assistance des Partenaires de la Plateforme.
                                          - Recevoir un service client et un support technique.</p>

                                          <p class="sub-page__p p-s">Déclaration de Propriété Intellectuelle</p>

                                          <p class="sub-page__p p-s">- Tous les droits de propriété intellectuelle exclusifs et les éléments appartiennent exclusivement au Propriétaire.
                                          - L'Utilisateur reconnaît et accepte que le Propriétaire possède tous les droits de propriété intellectuelle liés aux Services.
                                          - L'Utilisateur est responsable de la légalité, de la fiabilité, de l'intégrité, de l'exactitude et de la qualité des Données Personnelles fournies à Blocklabchain.
                                          - L'Utilisateur accorde au Propriétaire un droit non exclusif d'utiliser, de copier, de traiter et de transférer ses Données Personnelles pendant la période d'utilisation des Services.</p>

                                          <p class="sub-page__p p-s">Notification des Mises à Jour des Conditions d'Utilisation et de la Politique de Confidentialité</p>

                                          <p class="sub-page__p p-s">La Plateforme Blocklabchain informe l'Utilisateur des mises à jour des Conditions d'Utilisation et de la Politique de Confidentialité par le biais de messages électroniques ou d'une fenêtre contextuelle placée sur les pages du Site Web de Blocklabchain.</p>

                                          <p class="sub-page__p p-s">Avis de Non-responsabilité</p>

                                          <p class="sub-page__p p-s">- Le bureau de la Plateforme Blocklabchain est situé dans la ville de Paris, en France, et les Données Personnelles de l'Utilisateur peuvent être transférées sur le territoire de la France. En continuant à utiliser les Services de la Plateforme, l'Utilisateur est réputé consentir au transfert de ses Données Personnelles sur le territoire de la France.
                                          - Le Propriétaire n'est pas responsable des actions de l'Utilisateur résultant d'un malentendu ou d'une mauvaise interprétation des Conditions d'Utilisation et de la Politique de Confidentialité.
                                          - Nous ne sommes pas responsables de tout dommage indirect, réel ou consécutif, même si nous avons été informés de la possibilité de tels dommages ou en cas de négligence.
                                          - La responsabilité du Propriétaire pour toute réclamation liée à la fourniture des Services ne peut dépasser le montant total du paiement mensuel pour les Services.
                                          - Dans la mesure permise par la loi, nous fournissons des matériaux et des Services "tels quels", sans aucune garantie, y compris, mais sans s'y limiter, des garanties pour le marketing de cryptomonnaies.
                                          - Nous utilisons des Cookies pour améliorer la qualité de nos services. En continuant à utiliser les Services de la Plateforme, il est supposé que vous acceptez l'utilisation de Cookies.
                                          - Blocklabchain informe l'Utilisateur que ses Données Personnelles peuvent être utilisées par nous pour fournir les Services, et en cas de désaccord, l'Utilisateur doit quitter le Site Web de Blocklabchain.
                                          - L'Inscription est réalisée par des Partenaires, et Blocklabchain n'est pas responsable des actions de ces Partenaires. L'Utilisateur est seul responsable et tenu de payer toutes les commissions et frais associés à l'Inscription, et assume également les risques liés à la spécification de coordonnées de paiement incorrectes.</p>

                                          <p class="sub-page__p p-s">Droit Applicable</p>

                                          <p class="sub-page__p p-s">La relation entre le Propriétaire et l'Utilisateur est régie par les lois de l'Angleterre et du Pays de Galles. Tout litige découlant de ces Conditions d'Utilisation ou lié à la relation entre les parties sera examiné par les tribunaux de France régis par les lois.</p>

                                          <p class="sub-page__p p-s">Contacts</p>

                                          <p class="sub-page__p p-s">Pour des questions, des commentaires, des conseils sur les Services fournis, ou des préoccupations concernant l'interaction avec la Plateforme, veuillez contacter le support à l'adresse <a class="sub-page__malito-link" href="'mailto:contact@blocklabchain.com'">contact@blocklabchain.com</a>.</p>
                                 `,

                      'pp': 'Politique de confidentialité',
                         'pp_body': `
                             <p class="sub-page__p p-s">Blocklabchain s'engage à protéger la vie privée des utilisateurs de son site web. Cette politique de confidentialité décrit comment Blocklabchain collecte, utilise et protège les informations personnelles des utilisateurs lorsqu'ils utilisent le site web https://blocklabchain.com/.</p>
                             <p class="sub-page__p p-s">Collecte et Utilisation des Informations Personnelles</p>
                             <p class="sub-page__p p-s">Blocklabchain peut collecter et utiliser les informations personnelles des utilisateurs à diverses fins, notamment pour fournir et améliorer ses services. Les informations personnelles collectées peuvent inclure, mais sans s'y limiter, le nom, l'adresse e-mail, les coordonnées et d'autres informations pertinentes.</p>
                             <p class="sub-page__p p-s">Divulgation des Informations Personnelles à des Tiers</p>
                             <p class="sub-page__p p-s">Blocklabchain se réserve le droit de divulguer les informations personnelles des utilisateurs dans les cas suivants :</p>
                             <p class="sub-page__p p-s">- Tiers : Blocklabchain peut divulguer des informations sur les utilisateurs dans le cadre d'une transaction commerciale d'entreprise, telle qu'une fusion, une acquisition, une réorganisation ou une faillite, où de telles informations peuvent être transférées à des tiers en tant qu'actif commercial dans la transaction.</p>
                             <p class="sub-page__p p-s">- Consentement de l'Utilisateur : Avec le consentement écrit ou en ligne de l'utilisateur, Blocklabchain peut divulguer des informations personnelles à des tiers.</p>
                             <p class="sub-page__p p-s">- Partenaires : Blocklabchain peut transférer des données personnelles à des partenaires pour travailler sur le concept White Label. Tous les tiers avec lesquels Blocklabchain échange des données personnelles sont tenus d'utiliser ces données conformément au Règlement Général sur la Protection des Données.</p>
                             <p class="sub-page__p p-s">Droits de l'Utilisateur</p>
                             <p class="sub-page__p p-s">Les utilisateurs ont certains droits concernant leurs données personnelles, notamment le droit d'accéder à leurs données, le droit à l'oubli, le droit de rectification, le droit à la portabilité et le droit de s'opposer au traitement de leurs données. Blocklabchain s'engage à respecter ces droits conformément au Règlement Général sur la Protection des Données.</p>
                             <p class="sub-page__p p-s">Stockage des Données Personnelles</p>
                             <p class="sub-page__p p-s">Blocklabchain met en place des mesures de sécurité pour protéger les données personnelles des utilisateurs contre la perte, l'abus, l'altération ou la destruction. Les données personnelles peuvent être stockées et traitées en dehors de l'Espace Économique Européen (EEE), mais Blocklabchain veille à ce que ces données soient traitées conformément à sa politique de confidentialité.</p>
                             <p class="sub-page__p p-s">Cookies</p>
                             <p class="sub-page__p p-s">Blocklabchain utilise des cookies pour fournir ses services et améliorer leur qualité. Les utilisateurs peuvent configurer leur navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site web.</p>
                             <p class="sub-page__p p-s">#### Liens vers des Sites Web Tiers</p>
                             <p class="sub-page__p p-s">Le site web de Blocklabchain peut contenir des liens vers des sites web tiers, pour lesquels Blocklabchain n'est pas responsable des politiques de confidentialité ou du contenu.</p>
                             <p class="sub-page__p p-s">Pour toute question ou préoccupation concernant la politique de confidentialité de Blocklabchain, veuillez contacter <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com.</a></p>
                         `,
                         'cp': 'Politique en matière de cookies',
                             'cp_body': `
                                 <p class="sub-page__p p-s">Nous respectons votre vie privée et nous efforçons de vous informer correctement sur la manière dont vous pouvez gérer vos Cookies. <br />
                                     Cette politique de cookies de Blocklabchain (ci-après dénommée "Politique en matière de cookies") décrit notre politique concernant l'utilisation des Cookies et de l'analyse web. <br />
                                     Les références aux termes "nous", "notre" ou "nos" (ou des mots similaires ayant le même sens) désignent Blocklabchain. <br />
                                     Les références aux termes "vous", "votre" ou "les vôtres" (ou des mots similaires ayant le même sens) désignent notre utilisateur. C'est-à-dire une personne physique, les données personnelles que nous collectons, utilisons et traitons. <br />
                                     Blocklabchain, dans le cadre de ses activités de collecte, de traitement, de stockage des données personnelles, s'efforce de respecter les règles et exigences prévues par le Règlement général sur la protection des données (Règlement (UE) 2016/679 du 27 avril 2016), connu sous le nom de "RGPD". <br />
                                     Définitions <br />
                                     Contrôleur - désigne une personne physique ou morale, une autorité publique, une agence ou un autre organisme qui détermine indépendamment ou conjointement avec d'autres les finalités et les moyens du traitement des données personnelles. <br />
                                     Cookie - signifie des fichiers qui stockent des informations sur vos actions précédentes sur la plateforme. Par exemple : date et heure de la visite du site, clics et transitions. <br />
                                     Plateforme Blocklabchain (ci-après dénommée la Plateforme ou Blocklabchain) - est un service marketing pour la promotion et la publicité de produits sur le marché des cryptomonnaies. <br />
                                     Site web Blocklabchain (ci-après dénommé "Site web") - signifie une page web ou un groupe de pages web sur Internet par lequel l'utilisateur reçoit les services et utilise les services de la Plateforme Blocklabchain, qui sont publiés sur Internet à l'adresse suivante : https://blocklabchain.io/. <br />
                                     RGPD (Règlement général sur la protection des données) - désigne un règlement dans le cadre de la législation de l'Union européenne sur la protection des données personnelles de toutes les personnes physiques qui sont citoyens de l'Union européenne. <br />
                                     Données personnelles - désigne toute information relative à l'utilisateur qui est traitée, stockée, protégée et transmise conformément au RGPD. <br />
                                     Politique de confidentialité - désigne un document rédigé par écrit, qui précise les méthodes de collecte, de traitement, de stockage des données personnelles de l'utilisateur. <br />
                                     Processeur - désigne une personne physique ou morale, une autorité publique, une institution ou un autre organisme qui traite des données personnelles pour le compte du responsable du traitement. <br />
                                     Services - il s'agit d'un travail analytique utilisant des plateformes publicitaires, l'achat de trafic, la promotion SEO, l'utilisation de systèmes d'analyse et de modèles publicitaires, les réseaux sociaux, les médias et forums de cryptomonnaies, la fourniture de listes en utilisant les services du partenaire, le marketing vidéo, l'élaboration de documentation White Paper, travailler pour le concept White Label. <br />
                                     Tiers - désigne une personne physique ou morale, une autorité publique, une institution ou un organisme autre que l'utilisateur, le contrôleur, le processeur et les personnes autorisées par le contrôleur ou le processeur sous leur surveillance directe à traiter des données personnelles. <br />
                                     Utilisateur - désigne une personne physique ou morale qui reçoit les services et les données personnelles, que nous traitons. <br />
                                     Consentement de l'utilisateur (ci-après dénommé Consentement) - désigne une expression de volonté volontaire, spécifique, informée et non équivoque, dans laquelle l'utilisateur, au moyen d'une déclaration ou d'une action affirmative claire, consent au traitement de ses données personnelles. <br />
                                     Web-beacon - désigne une image électronique appelée un pixel (1×1) ou des images GIF vides. Les web-beacons peuvent reconnaître certains types d'informations sur votre ordinateur, telles que les Cookies, l'heure et la date à laquelle la page a été consultée, et la description de la page où le web-beacon est situé. <br />
                                     Cookies <br />
                                     Un Cookie est un petit fichier qui est placé sur votre ordinateur, votre appareil mobile ou votre tablette et contient un code d'identification qui nous permet de reconnaître votre ordinateur, votre appareil mobile ou votre tablette et de vous fournir la meilleure expérience possible sur notre Site web. Par exemple, il permet au Site web de se souvenir de vos actions et préférences (telles que les informations de connexion, la langue, la taille de la police et autres paramètres d'affichage) pendant une certaine période de temps, de sorte que vous n'avez pas besoin de les saisir à nouveau ou de les réajuster chaque fois que vous revenez sur le Site web ou passez d'une page à l'autre. L'utilisation des Cookies est une pratique courante pour les sites web et la plupart des navigateurs web autorisent les Cookies par défaut. <br />
                                     Les pages du Site web peuvent contenir des images électroniques appelées Web-beacons (parfois également appelées gifs transparents ou balises pixel). Les web-beacons sont généralement de petites images situées sur une page web ou dans des e-mails que vous consultez. La demande que votre appareil connecté à Internet fait pour télécharger une telle image à partir d'un serveur/ordinateur est enregistrée et elle nous fournit des informations telles que l'adresse IP de l'ordinateur qui télécharge l'image, l'heure à laquelle l'image a été consultée et le type de navigateur utilisé à cette fin. <br />
                                     Types de Cookies <br />
                                     Lors de la fourniture des Services, nous pouvons utiliser les types de Cookies suivants : <br />
                                     - Cookies de session, également appelés Cookies transitoires, existent uniquement dans la mémoire temporaire pendant que l'utilisateur se trouve sur une page du Site web. Les navigateurs suppriment généralement le Cookie de session après que l'utilisateur a fermé la fenêtre du navigateur ; <br />
                                     - Les Cookies persistants sont supprimés à une certaine date ou après une certaine période de temps. Cela signifie que les informations sur le Cookie seront transmises au serveur à chaque fois que l'utilisateur visite le Site web auquel ces Cookies appartiennent ; <br />
                                     - Les Cookies tiers sont un type de fichiers qui apparaissent lorsque les pages web contiennent du contenu de sites web externes, tels que des liens vers d'autres sites web. Par exemple, ils peuvent être utilisés pour suivre l'historique des visites des utilisateurs sur d'autres sites web ; <br />
                                     - Les Cookies d'analyse web sont utilisés pour analyser le comportement des utilisateurs lorsqu'ils parcourent diverses pages du Site web Blocklabchain. L'utilisation des Cookies ci-dessus est basée sur l'article 6 "Licéité du traitement" du RGPD. <br />
                                     Cookie d'analyse Web <br />
                                     Blocklabchain utilise les types de Cookies d'analyse web suivants lors de l'analyse du comportement des utilisateurs : <br />
                                     - Google Ads, un service de publicité en ligne de Google Inc. ("Google"), qui permet aux annonceurs de rivaliser pour afficher de courts textes publicitaires aux utilisateurs du web, basés en partie sur des mots-clés générés par les annonceurs, qui peuvent lier, copier le contenu des pages web affichées aux utilisateurs. Vous pouvez en savoir plus sur ce service en utilisant le lien interne de Google Ads. <br />
                                     - Facebook Ads, un service de publicité en ligne de Facebook, Inc. ("Facebook"), qui permet la promotion d'une marque, d'un produit ou d'un service via un réseau social de plusieurs millions de dollars en utilisant des technologies avancées. Vous pouvez vous familiariser avec ce service plus en détail en utilisant le lien interne de Facebook. <br />
                                     - 4chan Ads. 4chan est un tableau d'affichage basé sur des images simples où n'importe qui peut poster des commentaires et partager des images. Le site permet à quiconque de poster des images et des commentaires sur l'un de ses 60+ tableaux d'images thématiques. Vous pouvez en savoir plus sur ce service en utilisant le lien interne de 4chan Ads. <br />
                                     Sécurité des Cookies <br />
                                     Les Cookies ne transmettent pas de virus et/ou de logiciels malveillants à votre ordinateur, car les données dans le Cookie ne changent pas lorsqu'elles sont déplacées et n'affectent pas le fonctionnement de votre ordinateur de quelque manière que ce soit. Au lieu de cela, ils agissent davantage comme des journaux (c'est-à-dire qu'ils enregistrent l'activité de l'utilisateur et se souviennent des informations d'état) et sont mis à jour chaque fois que vous visitez le Site web. <br />
                                     Utilisation des Cookies <br />
                                     Lorsque vous visitez le Site web pour la première fois, vous verrez une bannière de notification de cookies demandant votre Consentement à l'utilisation de cookies par le Site web comme l'exige la loi. Vous pouvez confirmer l'utilisation des Cookies en utilisant la case à cocher de l'élément graphique. Avec cette bannière, vous pouvez modifier les catégories de Cookies que vous autorisez (à l'exclusion des Cookies nécessaires, qui sont nécessaires au bon fonctionnement du Site web), ou accepter toutes les catégories de Cookies. <br />
                                     Vous pouvez révoquer votre Consentement à l'utilisation des Cookies à tout moment et/ou modifier les catégories de Cookies que vous autorisez. Vous pouvez également désactiver les Cookies en modifiant les paramètres de votre navigateur web. Les informations que les Cookies collectent sont sous forme anonyme. <br />
                                     Certains Cookies sont nécessaires au bon fonctionnement du Site web et certains ne le sont pas, mais ils nous aident à améliorer le Site web. Veuillez noter que vous acceptez automatiquement les Cookies nécessaires de notre Site web pour son bon fonctionnement lorsque vous le visitez (sauf si vous avez désactivé tous les Cookies dans les paramètres de votre navigateur). <br />
                                     Nous pouvons également utiliser des Cookies stockés dans les e-mails pour nous aider à confirmer que vous avez reçu et répondu à ces e-mails. <br />
                                     Veuillez noter que si vous désactivez l'utilisation des Cookies dans votre navigateur, de nombreuses fonctions du Site web ne seront pas disponibles pour vous. Les Cookies nous permettent de suivre l'utilisation du Site web par l'utilisateur, de mesurer les données et d'analyser l'expérience utilisateur. <br />
                                     Les Cookies utilisés sur notre Site web sont divisés en deux groupes : nos Cookies et les Cookies tiers. En raison de la nature technique des Cookies, nous ne pouvons pas accéder aux Cookies utilisés par les tiers, et les tiers ne peuvent pas accéder à nos Cookies. <br />
                                     Contrôle <br />
                                     La plupart des navigateurs internet sont initialement configurés pour accepter automatiquement les Cookies. Vous pouvez modifier vos paramètres pour bloquer les Cookies ou vous alerter lorsque des Cookies sont envoyés à votre appareil. Il existe plusieurs façons de gérer les Cookies. Veuillez vous référer à l'aide de votre navigateur pour plus d'informations sur la personnalisation ou le changement de ses paramètres. <br />
                                     Pour savoir comment désactiver les Cookies dans votre navigateur, consultez les instructions du développeur : <br />
                                     - Microsoft Internet Explorer ; <br />
                                     - Microsoft EDGE ; <br />
                                     - Mozilla Firefox ; <br />
                                     - Google Chrome ; <br />
                                     - Opera ; <br />
                                     - Apple Safari. <br />
                                     Si vous utilisez un autre navigateur, cliquez sur "Aide" dans votre navigateur pour obtenir des instructions. <br />
                                     Si vous utilisez différents appareils pour visualiser et accéder au Site web (par exemple, votre ordinateur, smartphone, tablette, etc.), vous devez vous assurer que chaque navigateur sur chacun de vos appareils est configuré conformément à vos préférences concernant les Cookies.<br />
                                     Législation <br />
                                     Si vous avez d'autres questions sur la manière dont nous traitons vos données personnelles ou si vous souhaitez exercer l'un de vos droits en vertu de la loi britannique sur la protection des données de 2018 (DPA), du Règlement général sur la protection des données, veuillez nous contacter à : <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>.
                                 </p>
                                 <p class="sub-page__p p-s">
                                     Les Cookies collectent des informations de manière anonyme. <br />
                                     Certains Cookies sont nécessaires au bon fonctionnement du Site web et d'autres ne le sont pas, mais ils nous aident à améliorer le Site web. Veuillez noter que vous acceptez automatiquement les Cookies nécessaires de notre Site web pour son bon fonctionnement lorsque vous le visitez (sauf si vous avez désactivé tous les Cookies dans les paramètres de votre navigateur). <br />
                                     Nous pouvons également utiliser des Cookies stockés dans les e-mails pour nous aider à confirmer que vous avez reçu et répondu à ces e-mails. <br />
                                     Veuillez noter que si vous désactivez l'utilisation des Cookies dans votre navigateur, de nombreuses fonctions du Site web ne seront pas disponibles pour vous. Les Cookies nous permettent de suivre l'utilisation du Site web par l'utilisateur, de mesurer les données et d'analyser l'expérience utilisateur. <br />
                                     Les Cookies utilisés sur notre Site web sont divisés en deux groupes : nos Cookies et les Cookies tiers. En raison de la nature technique des Cookies, nous ne pouvons pas accéder aux Cookies utilisés par les tiers, et les tiers ne peuvent pas accéder à nos Cookies. <br />
                                     Contrôle <br />
                                     La plupart des navigateurs internet sont initialement configurés pour accepter automatiquement les Cookies. Vous pouvez modifier vos paramètres pour bloquer les Cookies ou vous alerter lorsque des Cookies sont envoyés à votre appareil. Il existe plusieurs façons de gérer les Cookies. Veuillez vous référer à l'aide de votre navigateur pour plus d'informations sur la personnalisation ou le changement de ses paramètres. <br />
                                     Pour savoir comment désactiver les Cookies dans votre navigateur, consultez les instructions du développeur : <br />
                                     - Microsoft Internet Explorer ; <br />
                                     - Microsoft EDGE ; <br />
                                     - Mozilla Firefox ; <br />
                                     - Google Chrome ; <br />
                                     - Opera ; <br />
                                     - Apple Safari. <br />
                                     Si vous utilisez un autre navigateur, cliquez sur "Aide" dans votre navigateur pour obtenir des instructions. <br />
                                     Si vous utilisez différents appareils pour visualiser et accéder au Site web (par exemple, votre ordinateur, smartphone, tablette, etc.), vous devez vous assurer que chaque navigateur sur chacun de vos appareils est configuré conformément à vos préférences concernant les Cookies. <br />
                                     Législation <br />
                                     Si vous avez d'autres questions sur la manière dont nous traitons vos données personnelles ou si vous souhaitez exercer l'un de vos droits en vertu de la loi britannique sur la protection des données de 2018 (DPA), du Règlement général sur la protection des données, veuillez nous contacter à : <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>.
                                 </p>
                             `,

                             'rsp': 'Politique de remboursement et de service',
                                 'rsp_boyd': `
                                 <p class="sub-page__p p-s">
                                     Le client peut demander un remboursement pour les services dans les cas suivants : <br />
                                     Si Blocklabchain dépasse la date limite pour l'exécution de ses obligations, le client a le droit d'envoyer immédiatement une réclamation ; Blocklabchain rembourse 100 % du montant payé. <br />
                                     Le client a le droit de se rétracter sans motif à tout moment, quel que soit le stade du service ; cependant, le client doit payer l'agence pour les coûts réellement engagés. <br />
                                     Le client peut demander le remboursement du solde des fonds inutilisés du compte à la résiliation du contrat ou en cas de litige concernant l'impossibilité d'utiliser les services de Blocklabchain. <br />
                                     Le client peut demander un remboursement au plus tard 7 jours calendaires après le paiement : <br />
                                     - Si le service n'a pas encore commencé ; <br />
                                     - Si le client décide de refuser le service fourni, Blocklabchain effectuera le remboursement moins les coûts engagés. <br />
                                     Après 7 jours calendaires et au plus tard 6 mois à compter de la date de la prestation de service, la demande de remboursement sera examinée au cas par cas avec les arguments du client concernant la mauvaise qualité des services rendus.
                                     Les remboursements sont effectués par Blocklabchain sur demande écrite du client envoyée à l'adresse e-mail <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>. </p>
                                 <p class="sub-page__p p-s">
                                     La demande de remboursement doit être faite sous forme libre et doit contenir les données suivantes : <br />
                                     - Le sujet du courriel doit être "Demande de remboursement". <br />
                                     - Nom de l'entreprise/projet ; <br />
                                     - Le nom du service ; <br />
                                     - La raison du remboursement ; <br />
                                     - Montant du paiement et devise dans laquelle il a été effectué ; <br />
                                     - Date de la transaction ; <br />
                                     - Informations de contact (numéro de téléphone, e-mail). <br />
                                     Motifs de refus de remboursement : <br />
                                     - Blocklabchain peut refuser une demande de remboursement s'il existe des preuves de fraude, d'abus de remboursement, de revente de services d'agence ou d'autres pratiques manipulatrices. Les promotions, les mises à niveau et les modifications des plans existants ne sont pas éligibles pour les remboursements. <br />
                                     Chaque demande de remboursement est examinée individuellement, sur la base du premier arrivé, premier servi, et prend du temps pour être traitée. Le responsable des remboursements vous fournira des informations sur le statut de votre demande. <br />
                                     Une fois votre demande de remboursement approuvée, le responsable vous en informera. Le processus de remboursement lui-même peut prendre plusieurs semaines, selon votre mode de paiement, votre banque et d'autres raisons. <br />
                                     Le montant payé pour le produit sera remboursé de la même manière que le paiement a été effectué. Les coûts réels engagés par Blocklabchain peuvent être déduits du montant remboursé. <br />
                                 </p>
                                 `,
                                  btnSend: 'Envoyer',
                                     formTitle: 'Demander un devis',
                                     formDesc: `
                                          <p>
                                                     Message sur <a target="_blank" href="https://twitter.com/Blocklabchain" class="link">Twitter</a> ou <a href="https://t.me/blocklabchain" target="_blank" class="link">Telegram</a> pour une réponse plus rapide !
                                                   </p>
                                                   <p class="required-text">(<span class="required">*</span>) Champs obligatoires</p>
                                         `,
                                     label1: 'Votre nom',
                                     label2: 'Votre Twitter ou Telegram',
                                     label3: 'Nom du projet',
                                     label4: 'Votre Twitter ou Telegram',
                                     label5: 'Nom du projet',
                                     label6: 'Telegram du projet',
                                     label7: 'E-mail du projet',
                                     label8: 'Site Web du projet',
                                     label9: 'Pays du projet',
                                     label10: 'Sélectionnez les services',
                                     label11: 'Informations supplémentaires (facultatif)',
                                     defPlaceHolder: 'Écrivez ici',
                                     formCheckBox1:'Développement',
                                     formCheckBox2:'Marketing',
                                     formCheckBox3:'Conception',
                                     formCheckBox4:'Vidéo',
                                     formCheckBox5:'Autre',
                   }
      },
      en: {
        translation: {
          about: 'about',
          services: 'services',
          testimonials: 'testimonials',
          'ico raised': 'ico raised',
          'trusted': 'trusted',
          'contact': 'contact',
          'hero_subtitle1': 'DIGITAL AGENCY WEB2 & WEB3',
          'hero_title1': 'Blocklabchain',
          'hero_btn1': 'Let’s Talk',
          'hero_desc': 'Development Website, APP, Dapps, ICO, Design, Marketing, Video & PR Agency.',
          'expertise-1_title': '200+',
          'expertise-1_content': 'Real Clients',
          'expertise-2_title': '5+',
          'expertise-2_content': 'Years of Experience',
          'expertise-3_title': '1900+',
          'expertise-3_content': 'Reviews by 1900+ Verified Crypto Influencers on YouTube',
          'expertise-4_title': '60+',
          'expertise-4_content': 'Publications at Forbes and other 60+ Business & Crypto Media',
          'expertise-5_title': '30+',
          'expertise-5_content': 'Team Experts',
          'expertise-6_title': 'Paris',
          'expertise-6_content': 'Registered in Paris, France',
          'sevices-btn-1': 'development',
          'sevices-btn-2': 'marketing',
          'sevices-btn-3': 'design',
          'sevices-btn-4': 'video',
          'sevices-development-1_title': 'Website',
          'sevices-development-1_content': 'Creating bespoke websites, e-commerce platforms, and powerful CMS solutions tailored to your needs. Elevate your online presence with our expertise.',
          'sevices-development-2_title': 'Application',
          'sevices-development-2_content': 'Designing tailored mobile, web, and hybrid apps to meet diverse needs. Elevate your digital presence with our custom app solutions.',
          'sevices-development-3_title': 'Dapps',
          'sevices-development-3_content': 'Specializing in decentralized applications (dApps) development, utilizing blockchain technology to create secure and innovative solutions (staking, launchpad, p2p escrow, cex, dex, NFT marketplace ...)',
          'sevices-development-4_title': 'Smart Contract',
          'sevices-development-4_content': 'Revolutionize transactions with our smart contract solutions: secure, automated agreements on blockchain for seamless operations.',
          'sevices-development-5_title': 'SEO',
          'sevices-development-5_content': 'Optimize your digital presence with our SEO (Search Engine Optimization) strategies: enhancing visibility, traffic, and rankings for your business growth.',
          'sevices-development-6_title': 'SEA',
          'sevices-development-6_content': 'SEA (Search Engine Advertising): Amplify your online presence through targeted ads, maximizing visibility and conversions.',
          'sevices-development-7_title': 'Blockchain',
          'sevices-development-7_content': 'Unlocking potential through blockchain development: creating secure, decentralized networks tailored to your unique needs and goals.',
          'sevices-development-8_title': 'CRM',
          'sevices-development-8_content': 'Optimize customer relationships with our CRM solutions (Customer Relationship Management): Streamlining interactions, data, and insights for enhanced engagement and growth.',
          'sevices-development-9_title': 'Audit',
          'sevices-development-9_content': 'Ensuring transparency and efficiency: our audit services meticulously evaluate and optimize systems for enhanced performance and security.',
           'sevices-marketing-1_title': 'ICO Incubator',
          'sevices-marketing-1_content': 'Foster success with our ICO Incubator: comprehensive support and guidance for launching and growing successful token offerings.',
           'sevices-marketing-2_title': 'Press Release',
          'sevices-marketing-2_content': `Craft impactful press releases with our expertise: delivering compelling narratives to amplify your brand's visibility and reach (Forbes, Cointelegraph, Yahoo, Bloomberg...)`,
         'sevices-marketing-3_title': 'Influencers',
          'sevices-marketing-3_content': `Amplify your brand's voice through influencers: leveraging their reach and credibility to engage and expand your audience.`,
          'sevices-marketing-4_title': 'SEA',
          'sevices-marketing-4_content': 'SEA (Search Engine Advertising): Amplify your online presence through targeted ads, maximizing visibility and conversions.',
          'sevices-marketing-5_title': 'Partnership',
          'sevices-marketing-5_content': 'Foster growth through strategic partnerships: leveraging synergies to expand reach, enhance offerings, and drive mutual success.',
          'sevices-marketing-6_title': 'Networking Event',
          'sevices-marketing-6_content': 'Join our networking events: Connecting industry leaders, fostering collaboration, and unlocking opportunities for growth and innovation.',
          'sevices-design-1_title': 'Logo',
          'sevices-design-1_content': 'Crafting impactful logos: marrying creativity with brand identity to create memorable, versatile, and unique visual representations.',
          'sevices-design-2_title': 'Flyers',
          'sevices-design-2_content': 'Designing captivating flyers: blending creativity and information to craft visually compelling and informative promotional materials.',
          'sevices-design-3_title': 'Figma',
          'sevices-design-3_content': 'Unlock design potential with Figma: Collaborate seamlessly, create stunning visuals, and streamline workflows for design excellence.',
          'sevices-design-4_title': 'Photoshop',
          'sevices-design-4_content': 'Unleash creativity with Photoshop: Crafting stunning visuals, manipulating images, and bringing imagination to life with precision.',
          'sevices-design-5_title': 'Whitepaper',
          'sevices-design-5_content': 'Crafting comprehensive whitepapers: distilling complex ideas into clear, informative documents, showcasing expertise and vision.',
          'sevices-design-6_title': 'Artistic Direction',
          'sevices-design-6_content': 'Defining artistic direction: Fusing creativity with strategy, guiding visual narratives to reflect brand essence and captivate audiences.',
          'sevices-video-1_title': 'Editing video',
          'sevices-video-1_content': 'Refine your story through video editing: Enhancing visuals, sound, and effects to create engaging, impactful narratives.',
          'sevices-video-2_title': 'Visual Effects',
          'sevices-video-2_content': 'Elevate storytelling with visual effects: Transforming videos into captivating experiences through innovative and immersive visuals.',
          'sevices-video-3_title': 'Storyboarding',
          'sevices-video-3_content': 'Crafting narratives through storyboarding: Visualizing concepts, sequences, and storytelling elements for compelling video production.',
          'sevices-video-4_title': 'Advertising',
          'sevices-video-4_content': 'Crafting compelling advertising videos: Engaging narratives, captivating visuals, and strategic messaging for impactful brand promotion.',
          'sevices-video-5_title': 'Interviews',
          'sevices-video-5_content': 'Capturing authentic stories through interviews: Creating compelling narratives that resonate, inform, and connect with audiences.',
          'sevices-video-6_title': 'Gameplay Videos',
          'sevices-video-6_content': 'Showcase gaming experiences through gameplay videos: Capturing excitement, strategies, and immersive moments to engage and entertain audiences.',
          'workData_name': 'work',
          'workData_subHeading': `our
                                  Websites & APPs
                                  Development`,
          'workData_heading': `Proud of
                               every work we do`,
          'workData_paragraph': 'We treat every project as an opportunity to raise the bar higher and take immense pride in the results.',
          'web3Data_name':`web3`,
          'web3Data_subHeading':`our web3 ICOs`,
          'web3Data_heading':`Empowering the
                               future: Our Web3 ICOs`,
          'web3Data_paragraph': `We treat every project as an opportunity to raise the bar higher and take immense pride in the results.`,
          'client-1_number': '$610,000',
          'client-2_number': '$800,101',
          'client-3_number': '$210,101,927',
          'client-4_number': '$50,183,127',
          'client-5_number': '$610,000',
          'client-6_number': '$800,101',
          'client-7_number': '$210,101,927',
          'client-8_number': '$50,183,127',
          'testimonial-1_heading': `Hulk Cars`,
          'testimonial-1_subHeading': `@Hulkcars`,
          'testimonial-1_content': `@Blocklabchain who has already helped hundreds of projects ico web 3 supports us with our marketing! `,
          'testimonial-1_time': `June 23, 2022`,
          'testimonial-2_heading': `Flash Technologies`,
          'testimonial-2_subHeading': `@Flash_Techno_Of`,
          'testimonial-2_content': `@Blocklabchain We raised over $600,000 with our presales thanks to Blocklabchain marketing !!!!`,
          'testimonial-2_time': `September 23, 2023`,
          'testimonial-3_heading': `Gulf Coin Official`,
          'testimonial-3_subHeading': `@GulfCoin_`,
          'testimonial-3_content': `@Blocklabchain has increased CTR by 200% for our ads within 7 days !!!!`,
          'testimonial-3_time': `February 19, 2022`,
          'testimonial-4_heading': `Hulk Cars`,
          'testimonial-4_subHeading': `@Hulkcars`,
          'testimonial-4_content': `@Blocklabchain who has already helped hundreds of projects ico web 3 supports us with our marketing! `,
          'testimonial-4_time': `June 23, 2022`,
          'testimonial-5_heading': `Flash Technologies`,
          'testimonial-5_subHeading': `@Flash_Techno_Of`,
          'testimonial-5_content': `@Blocklabchain We raised over $600,000 with our presales thanks to Blocklabchain marketing !!!!`,
          'testimonial-5_time': `June 23, 2022`,
          'testimonial-6_heading': `Gulf Coin Official`,
          'testimonial-6_subHeading': `@GulfCoin_`,
          'testimonial-6_content': `@Flexe_io has increased CTR by 200% for our ads within 7 days !!!!`,
          'testimonial-6_time': `February 19, 2022`,
          'inflencer-1_heading': `Conor Kenny`,
          'inflencer-1_subHeading': `@ConorKenny`,
          'inflencer-1_subscribesNumer': `180 K`,
          'inflencer-1_earningNumer': `4,75 CR`,
          'inflencer-1_avgViewsNumer': `10 K`,
          'inflencer-2_heading': `CoinMars`,
          'inflencer-2_subHeading': `@CoinMars`,
          'inflencer-2_subscribesNumer': `73,9 K`,
          'inflencer-2_earningNumer': `3,59 CR`,
          'inflencer-2_avgViewsNumer': `37,5 K`,
          'inflencer-3_heading': `CriptoMind`,
          'inflencer-3_subHeading': `@CriptoMindYT`,
          'inflencer-3_subscribesNumer': `120 K`,
          'inflencer-3_earningNumer': `2,45 CR`,
          'inflencer-3_avgViewsNumer': `10 K`,
          'footer_link_columnName_1': 'Company',
          'footer_link_col1_0': 'About US',
          'footer_link_col1_1': 'services',
          'footer_link_col1_2': 'testimonial',
          'footer_link_col1_3': 'ico Raised',
          'footer_link_col1_4': 'trusted',
          'footer_link_col1_5': 'contact',
          'footer_link_columnName_2': 'resources',
          'footer_link_col2_0': 'terms and conditions',
          'footer_link_col2_1': 'privacy policy',
          'footer_link_col2_2': 'cookie Policy',
          'footer_link_col2_3': 'refund & Service Policy',
          'footer_link_columnName_3': 'Services',
          'footer_link_col3_0': 'development',
          'footer_link_col3_1': 'marketing',
          'footer_link_col3_2': 'design',
          'footer_link_col3_3': 'video',

          'about_subTitle': 'About us',
          'about_title': 'Expertise in Numbers',

          'services_subTitle': 'Services',
          'services_title': `Agency`,

          'clients_heading': `Our Trusted <br /><span class='h2-bold'>Clients</span>`,
          'testimonials_heading': 'Our Testimonials',

          'btn_view_on_X': 'View in Twitter',
          'subscribes': 'Subscribes',
          'earning': 'Earning',
          'avgViews': 'Avg Views',

           'business_heading': `60+Business & <br/> <span class='h2-bold'>Crypto</span> Media`,

           'alert_title': 'Hello friends',
           'alert_desc': 'We are no longer providing website, development, dapps, smart contract, blockchain, NFT, CRM, design, marketing & PR services as an agency cause our team is fully focused on the development.',
           'needServ': `If you need service <span class='alert__if-need-link'>click on the link</span> click on the link or send email to <a href='mailto:contact@blocklabchain.com' class='alert__if-need-link'>contact@blocklabchain.com</a>`,

           'tac': 'Terms And Conditions',
           'tac_body': `
            <p class="sub-page__p p-s">Please carefully read this document to understand the Terms of Use regarding the Services provided by our Platform and how marketing is conducted in the cryptocurrency market.</p>

                    <p class="sub-page__p p-s">These Blocklabchain Terms of Use (referred to as the “Terms of Use”) establish the terms governing the relationship between the Blocklabchain Platform and the User during the provision of the Services.</p>

                    <p class="sub-page__p p-s">References to “we,” “our,” or “us” (or similar words) refer to Blocklabchain.</p>

                    <p class="sub-page__p p-s">References to “you” or “your” (or similar words) refer to our User.</p>

                    <p class="sub-page__p p-s">The Platform offers the User Services for implementing marketing activities.</p>

                    <p class="sub-page__p p-s">The use of Blocklabchain Platform Services is subject to the Terms of Use and Privacy Policy.</p>

                    <p class="sub-page__p p-s">Definitions</p>

                    <p class="sub-page__p p-s">- ChatBot: A program designed to simulate communication between the User and the support service.</p>

                    <p class="sub-page__p p-s">- Controller: Refers to a natural or legal person, public authority, agency, or other body that independently or jointly with others determines the purposes and means of processing Personal Data.</p>

                    <p class="sub-page__p p-s">- Cookie: Files storing information about previous actions on the Platform, such as the date and time of site visits, clicks, and transitions.</p>

                    <p class="sub-page__p p-s">- Cryptocurrency: A form of digital currency whose issuance and accounting are based on asymmetric encryption and various cryptographic protection methods, such as Proof-of-work and/or Proof-of-stake.</p>

                    <p class="sub-page__p p-s">- Blocklabchain Platform (hereinafter referred to as the Platform or Blocklabchain)**: A marketing service for promoting and advertising products in the cryptocurrency market.</p>

                    <p class="sub-page__p p-s">- Blocklabchain Website (hereinafter referred to as “Website”)**: A web page or group of web pages through which the User receives the Services and utilizes the services of the Blocklabchain Platform, available at the following address: https://blocklabchain.com/.</p>

                    <p class="sub-page__p p-s">- GDPR (General Data Protection Regulation)**: A regulation within the framework of European Union legislation on the protection of personal data of all natural persons who are citizens of the European Union.</p>

                    <p class="sub-page__p p-s">- Intellectual Property: Includes elements related to the provision of the Services, such as trademarks, copyrights, computer software, trade secrets, and similar proprietary rights.</p>

                    <p class="sub-page__p p-s">- Listing: The process of placing a cryptocurrency on an exchange for trading with other assets.</p>

                    <p class="sub-page__p p-s">- Messenger: An instant messaging system for communication between the User and the Platform.</p>

                    <p class="sub-page__p p-s">- Partner: A legal entity (crypto exchange) through which the Platform provides Listings.</p>

                    <p class="sub-page__p p-s">- Personal Data: Any information related to the User that is processed, stored, protected, and transmitted in accordance with the GDPR.</p>

                    <p class="sub-page__p p-s">- Privacy Policy: A written document specifying the methods of collecting, processing, and storing the User's Personal Data.</p>

                    <p class="sub-page__p p-s">- Processor: A natural or legal person, public authority, institution, or other body that processes Personal Data on behalf of the Controller.</p>

                    <p class="sub-page__p p-s">- Services: Analytical work using advertising platforms, buying traffic, SEO promotion, analytics systems, advertising models, social networks, cryptocurrency media and forums, providing Listings using partner services, video marketing, developing White Paper documentation, and working for the White Label concept.</p>

                    <p class="sub-page__p p-s">- Terms of Use: A document providing terms, rules, and basic provisions for using the Platform.</p>

                    <p class="sub-page__p p-s">- Third Party: A natural or legal person, public authority, institution, or body other than the User, Controller, Processor, and persons authorized by the Controller or Processor under their direct supervision to process Personal Data.</p>

                    <p class="sub-page__p p-s">- User: A natural or legal person who receives the Services and Personal Data processed by us.</p>

                    <p class="sub-page__p p-s">- User’s Consent (hereinafter referred to as Consent)**: A voluntary, specific, informed, and unambiguous expression of will by which the User consents to the processing of their Personal Data.</p>

                    <p class="sub-page__p p-s">Services</p>

                    <p class="sub-page__p p-s">Blocklabchain provides the User with Services as indicated in the following sections of the Website:</p>

                    <p class="sub-page__p p-s">- Traffic.
                    - Awareness.
                    - Community.
                    - Conversation.
                    - Exchange.
                    - Promotion in ASIA.
                    - Packaging.
                    - White Label: The Platform can provide marketing of a product (cryptocurrency) for a company that will release it under its own brand.</p>

                    <p class="sub-page__p p-s">Rules For Working With Blocklabchain Platform</p>

                    <p class="sub-page__p p-s">To receive Services from the Platform, the User communicates with Platform employees through:</p>

                    <p class="sub-page__p p-s">- Email: <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>.
                    - Messengers: Telegram, WhatsApp, Facebook.</p>

                    <p class="sub-page__p p-s">Communication in Messengers is facilitated using a ChatBot, which collects preliminary information to provide Services to the User. Subsequent communication is conducted by a Platform employee.</p>

                    <p class="sub-page__p p-s">After communicating with the Platform, the User selects the types of Services and terms of cooperation. The Platform provides Services to the User based on the concluded Service Agreement, defining the terms, conditions, and cost of providing the Services.</p>

                    <p class="sub-page__p p-s">About Blocklabchain Platform</p>

                    <p class="sub-page__p p-s">At Blocklabchain, we offer top-tier ICO Marketing solutions. ICO, or Initial Coin Offering, is an alternative fundraising mechanism for startups to sell their crypto tokens in exchange for other cryptocurrencies.</p>

                    <p class="sub-page__p p-s">We provide optimized, stable ICO development solutions tailored to match User requirements, including ICO platform creation, landing pages, token creation and distribution, White Papers, Pre-ICO and Post-ICO services, and Blockchain software development.</p>

                    <p class="sub-page__p p-s">With over 40 projects completed, our team of 8 experts possesses in-depth knowledge of the ICO industry. We believe that with the right marketing strategy, a successful ICO PR campaign can help raise the funds required to propel your project forward.</p>

                    <p class="sub-page__p p-s">You can familiarize yourself with our team on the Website's "Team" section and read reviews about the quality of our work in the "Testimonials" section.</p>

                    <p class="sub-page__p p-s">Social Networks</p>

                    <p class="sub-page__p p-s">The Platform actively promotes its Services on social networks and provides Users with additional information on blog pages.</p>

                    <p class="sub-page__p p-s">Users can access additional information about cryptocurrency marketing on the blog pages.</p>

                    <p class="sub-page__p p-s">The Platform publishes the latest cryptocurrency marketing news on the Telegram news channel. Users can subscribe to the channel to stay updated with the latest news and trends in cryptocurrency marketing.</p>

                    <p class="sub-page__p p-s">Owner Rights</p>

                    <p class="sub-page__p p-s">- Receive reliable Personal Data from the User.
                    - Use Cookies when providing the Services.
                    - Interact with other services and Partners.
                    - Transfer Personal Data to Third parties, in accordance with the Terms of Use and Privacy Policy.
                    - Grant limited access to the Personal Data of Users to its employees, Controller, Processor, and support staff, following the Privacy Policy.
                    - Disclose Personal Data to Third parties, Partners, courts, law enforcement, and government agencies, as provided by the Privacy Policy.
                    - Unilaterally refuse to interact with the User in case of non-payment by the User and/or violation of the Privacy Policy and/or Terms of Use.
                    - Unilaterally amend the Terms of Use and Privacy Policy.</p>

                    <p class="sub-page__p p-s">User Rights</p>

                    <p class="sub-page__p p-s">- Receive Services from the Platform in cryptocurrency marketing.
                    - Work on the White Label concept.
                    - Carry out Listings with the assistance of Platform Partners.
                    - Receive customer service and technical support.</p>

                    <p class="sub-page__p p-s">Intellectual Property Statement</p>

                    <p class="sub-page__p p-s">- All exclusive Intellectual Property rights and elements belong exclusively to the Owner.
                    - The User acknowledges and agrees that the Owner owns all intellectual property rights related to the Services.
                    - The User is responsible for the legality, reliability, integrity, accuracy, and quality of the Personal Data provided to Blocklabchain.
                    - The User grants the Owner a non-exclusive right to use, copy, process, and transfer their Personal Data during the period of using the Services.</p>

                    <p class="sub-page__p p-s">Notice Of Updates To Terms Of Use And Privacy Policy</p>

                    <p class="sub-page__p p-s">The Blocklabchain Platform notifies the User about updates to the Terms of Use and Privacy Policy via email messages or a pop-up window placed on the Blocklabchain Website pages.</p>

                    <p class="sub-page__p p-s">Disclaimers</p>

                    <p class="sub-page__p p-s">- The
                    Blocklabchain Platform's office is located in the city of Paris, France, and the User’s Personal Data may be transferred to the territory of the France. By continuing to use the Platform's Services, the User is assumed to consent to the transfer of their Personal Data to the territory of the France.
                    - The Owner is not responsible for the actions of the User resulting from misunderstanding or misinterpretation of the Terms of Use and the Privacy Policy.
                    - We are not liable for any consequential, actual, or consequential damages, even if advised of the possibility of such damages or arising due to negligence.
                    - The Owner’s liability for any claims related to the provision of the Services cannot exceed the total amount of the monthly payment for the Services.
                    - To the extent permitted by law, we provide materials and Services “as is,” without any guarantees, including, but not limited to, guarantees for cryptocurrency marketing.
                    - We use Cookies to improve the quality of our services. By continuing to use the Platform's Services, it is assumed that you agree to the use of Cookies.
                    - Blocklabchain notifies the User that their Personal Data may be used by us to provide the Services, and in case of disagreement, the User must leave the Blocklabchain Website.
                    - Listing is carried out by Partners, and Blocklabchain is not responsible for the actions of such Partners. The User is solely responsible and liable for payment of all commissions and fees associated with the Listing, and also assumes the risks associated with specifying incorrect payment details.</p>

                    <p class="sub-page__p p-s">Governing Law</p>

                    <p class="sub-page__p p-s">The relationship between the Owner and the User is governed by the laws of England and Wales. Any disputes arising from these Terms of Use or in connection with the relationship between the parties will be considered in the courts of France governed by the laws.</p>

                    <p class="sub-page__p p-s">Contacts</p>

                    <p class="sub-page__p p-s">For questions, feedback, advice on the Services provided, or concerns about interacting with the Platform, please contact support at <a class="sub-page__malito-link" href="'mailto:contact@blocklabchain.com'">contact@blocklabchain.com</a>.</p>
           `,

           'pp': 'Privacy policy',
           'pp_body': `
             <p class="sub-page__p p-s">Blocklabchain is committed to protecting the privacy of users of its website. This privacy policy describes how Blocklabchain collects, uses, and protects users' personal information when they use the website https://blocklabchain.com/.</p>
                <p class="sub-page__p p-s">Collection and Use of Personal Information</p>
                <p class="sub-page__p p-s">Blocklabchain may collect and use users' personal information for various purposes, including to provide and improve its services. The personal information collected may include, but is not limited to, name, email address, contact information, and other relevant information.</p>
                <p class="sub-page__p p-s">Disclosure of Personal Information to Third Parties</p>
                <p class="sub-page__p p-s">Blocklabchain reserves the right to disclose users' personal information in the following cases:</p>
                <p class="sub-page__p p-s">-Third Parties: Blocklabchain may disclose information about users as part of a corporate business transaction, such as a merger, acquisition, reorganization, or bankruptcy, where such information may be transferred to third parties as a business asset in the transaction.</p>
                <p class="sub-page__p p-s">-User Consent: With the written or online consent of the user, Blocklabchain may disclose personal information to third parties.</p>
                <p class="sub-page__p p-s">-Partners: Blocklabchain may transfer personal data to partners for work on the White Label concept. All third parties with whom Blocklabchain exchanges personal data are required to use such data in accordance with the General Data Protection Regulation.</p>
                <p class="sub-page__p p-s">User Rights</p>
                <p class="sub-page__p p-s">Users have certain rights regarding their personal data, including the right to access their data, the right to be forgotten, the right to rectification, the right to portability, and the right to object to the processing of their data. Blocklabchain is committed to respecting these rights in accordance with the General Data Protection Regulation.</p>
                <p class="sub-page__p p-s">Storage of Personal Data</p>
                <p class="sub-page__p p-s">Blocklabchain implements security measures to protect users' personal data against loss, misuse, alteration, or destruction. Personal data may be stored and processed outside the European Economic Area (EEA), but Blocklabchain ensures that such data is processed in accordance with its privacy policy.</p>
                <p class="sub-page__p p-s">Cookies</p>
                <p class="sub-page__p p-s">Blocklabchain uses cookies to provide its services and improve their quality. Users can configure their browser to refuse cookies, but this may affect certain functionalities of the website.</p>
                <p class="sub-page__p p-s">#### Links to Third-Party Websites</p>
                <p class="sub-page__p p-s">Blocklabchain's website may contain links to third-party websites, for which Blocklabchain is not responsible for the privacy policies or content.</p>
                <p class="sub-page__p p-s">For any questions or concerns regarding Blocklabchain's privacy policy, please contact <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com.</a></p>

           `,

           'cp': 'Cookie Policy',
           'cp_body': `
            <p class="sub-page__p p-s">We respect your privacy and strive to ensure that you are properly informed about how you may manage your Cookies. <br />
                  This Blocklabchain Cookie Policy (hereinafter referred to as the "Cookie Policy") describes our policy regarding the use of Cookies and web analytics. <br />
                  References to the words "we", "our", or "us" (or similar words within the meaning) mean Blocklabchain. <br />
                  References to the words "you", "your", or "yours" (or similar words within the meaning) mean our User. That is, an individual, the Personal Data that we collect, use, and process. <br />
                  Blocklabchain, in its activities in the collection, processing, storage of Personal Data, makes every effort to adhere to the rules and requirements provided by the General Data Protection Regulation (Regulation (EU) 2016/679 of April 27, 2016), known as "GDPR ". <br />
                  Definitions <br />
                  Controller – means a natural or legal person, public authority, agency, or other body that independently or jointly with others determines the purposes and means of processing Personal Data. <br />
                  Cookie – means files that store information about your previous actions on the Platform. For example: date and time of site visit, clicks, and transitions. <br />
                  Blocklabchain Platform (hereinafter referred to as the Platform or Blocklabchain) – is a marketing service for promoting and advertising products on the Cryptocurrency market. <br />
                  Blocklabchain Website (hereinafter referred to as "Website") – means a web page or a group of web pages on the Internet through which the User receives the Services and uses the services of the Blocklabchain Platform, which are posted on the Internet at the following address: https://blocklabchain.io/.<br />
                  GDPR (General Data Protection Regulation) – means a regulation within the framework of European Union legislation on the protection of personal data of all natural persons who are citizens of the European Union.<br />
                  Personal Data – means any information related to the User that is processed, stored, protected, and transmitted in accordance with the GDPR. <br />
                  Privacy Policy – means a document drawn up in writing, which specifies the methods of collection, processing, storage of the Personal Data of the User. <br />
                  Processor – means a natural or legal person, public authority, institution, or other body that processes Personal Data on behalf of the Controller. <br />
                  Services – it is analytical work using advertising platforms, buying traffic, SEO promotion, using analytics systems and advertising models, social networks, Cryptocurrency media and forums, providing listing using partner’s services, video marketing, developing White Paper documentation, working for White Label concept. <br />
                  Third party – means a natural or legal person, public authority, institution, or body other than the User, Controller, Processor, and persons who are authorized by the Controller or Processor under their direct supervision to process Personal Data. <br />
                  User – means a natural or legal person who receives the Services and Personal Data, whom we process. <br />
                  User’s Consent (hereinafter referred to as Consent) – means a voluntary, specific, informed, and unambiguous expression of will, in which the User, by means of a statement or a clear affirmative action, consents to the processing of his Personal Data. <br />
                  Web-beacon – means an electronic image called one-pixel (1×1) or blank GIF images. Web-beacons may recognize certain types of information on your computer, such as Cookies, the time and date the page was viewed, and the description of the page where the Web-beacon is located. <br />
                  Cookies  <br />
                  A Cookie is a small file that is placed on your computer, mobile device, or tablet and contains an identification code that allows us to recognize your computer, mobile device, or tablet and provide you with the best possible experience on our Website. For example, it allows the Website to remember your actions and preferences (such as login information, language, font size, and other display settings) for a certain period of time, so you do not need to re-enter them or re-adjust your preferences every time you return to the Website or go from one page to another. The use of Cookies is a popular practice for websites and most web browsers allow Cookies by default. <br />
                  The pages of the Website may contain electronic images known as Web-beacons (sometimes also called transparent gifs or pixel tags). Web-beacons are usually small images located on a web page or in emails that you view. The request that your internet-connected device makes to download such an image from a server/computer is recorded and it provides us with information such as the IP address of the computer that downloads the image, the time the image was viewed, and the type of browser used for this is used. <br />
                  Types of Cookie <br />
                  When providing the Services, we may use the following types of Cookies: <br />
                  - Session Cookies, also known as transient Cookies, exist only in temporary memory while the User is on a Website page. Browsers usually remove the session Cookie after the User closes the browser window; <br />
                  - Persistent Cookies are deleted on a certain date or after a certain period of time. This means that information about the Cookie will be transmitted to the server every time the User visits the Website to which these Cookies belong; <br />
                  - Third-party Cookies are a type of files that appear when web pages contain content from external websites, such as links to other websites. For example, they may be used to track the history of User visits to other websites; <br />
                  - Web analytics Cookies are used to analyze User behavior when browsing various pages of the Blocklabchain Website. The use of the above Cookies is based on Article 6 “Lawfulness of processing” GDPR. <br />
                  Web-Analytics Cookie <br />
                  Blocklabchain uses the following types of web analytics Cookies when analyzing User behavior: <br />
                  - Google Ads, an online advertising service from Google Inc. (“Google”), which allows advertisers to compete to display short advertising texts to web users, based in part on keywords driven by advertisers, which may link, copy the content of web pages displayed to users. You may learn more about this service using the internal Google Ads link. <br />
                  - Facebook Ads, an online advertising service of Facebook, Inc. (“Facebook”), which allows the promotion of a brand, Product or service through a multi-million dollar social network using advanced technologies. You may get acquainted with this service in more detail using the internal Facebook link. <br />
                  - 4chan Ads. 4chan is a simple image-based bulletin board where anyone can post comments and share images. The website lets anyone post pictures and comments to any of its 60+ themed image boards. You may learn more about this service using the internal 4chan Ads link. <br />
                  Cookie Safety <br />
                  Cookies do not transmit viruses and/or malicious software to your computer, as the data in the Cookie does not change when moved and does not affect the operation of your computer in any way. Instead, they act more like logs (that is, they record user activity and remember state information) and are updated every time you visit Website. <br />
                  Use Of Cookies <br />
                  When you visit Website for the first time, you will see a Cookie notification banner asking for your Consent to the Website’s use of Cookies as required by law. You may confirm the use of Cookies using the graphic element checkbox. With this banner, you may change the categories of Cookies that you allow (excluding the necessary Cookies, which are necessary for the Website to function properly), or accept all categories of Cookies <br />
                  You may revoke your Consent to the use of Cookies at any time and/or change the categories of Cookies you allow. You may also disable Cookies by changing the settings of your web browser. The information that</p>
                  <p class="sub-page__p p-s">
                      Cookies collect is in an anonymous form. <br />
                      Some Cookies are necessary for the Website to function properly and some are not necessary, but they help us improve the Website. Please note that you automatically accept the necessary Cookies from our Website for its proper functioning when you visit it (unless you have disabled all Cookies in your browser settings). <br />
                      We may also use Cookies stored in emails to help us confirm that you have received and responded to such emails. <br />
                      Please note that if you disable the use of Cookies in your browser, many functions of the Website will not be available to you. Cookies allow us to track the use of the Website by the User, measure data, and analyze user experience. <br />
                      The Cookies used on our Website are divided into two groups: our Cookies and third-party Cookies. Due to the technical nature of Cookies, we may not access Cookies that are used by Third parties, and third parties may not access our Cookies. <br />
                      Control <br />
                      Most internet browsers are initially set to automatically accept Cookies. You may change your settings to block Cookies or alert you when Cookies are sent to your device. There are several ways to manage Cookies. Please refer to your browser help for more information on how to customize or change its settings. <br />
                      To find out how to turn off Cookies in your browser see the developer’s instructions: <br />
                      - Microsoft Internet Explorer; <br />
                      - Microsoft EDGE; <br />
                      - Mozilla Firefox; <br />
                      - Google Chrome; <br />
                      - Opera; <br />
                      - Apple Safari. <br />
                      If you are using another browser, click “Help” in your browser to get instructions. <br />
                      If you use different devices to view and access the Website (for example, your computer, smartphone, tablet, etc.), you need to make sure that each browser on each of your devices is configured in accordance with your preferences regarding Cookies.<br />
                      Legislation <br />
                      If you have any further questions about how we process your Personal Data or if you would like to exercise any of your rights under UK Data Protection Act 2018 (DPA), General Data Protection Regulation, please contact us at: <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>.
                  </p>
           `,

           'rsp': 'Refund & Service Policy',
           'rsp_boyd': `
           <p class="sub-page__p p-s">
               The customer can request a refund for services in the following cases: <br />
           If Blocklabchain misses the deadline for fulfilling its obligations, the Customer has the right to immediately send a claim; Blocklabchain refunds 100% of the amount paid. <br />
           The customer has the right to withdraw without reason at any time, regardless of the service's stage; however, the customer must pay the agency for the costs actually incurred. <br />
           The customer can request a refund of the balance of unused funds from the account upon contract termination or in case of disputes about the inability to use Blocklabchain's services. <br />
           The Customer may request a refund no later than 7 calendar days after the payment is made: <br />
           – If the service has not yet commenced; <br />
           – If the Customer decides to decline the provided service, Blocklabchain shall make the refund less the costs incurred. <br />
           After 7 calendar days and no later than 6 months from the date of service rendering, the request for a refund shall be considered on a case-by-case basis with the Customer's arguments regarding the poor quality of services rendered.
           Refunds are made by Blocklabchain upon a written request from the Customer sent to the email address <a class="sub-page__malito-link" href="mailto:contact@blocklabchain.com">contact@blocklabchain.com</a>. </p>
           <p class="sub-page__p p-s">
           The refund request should be made in a free form and should contain the following data: <br />
           – The subject of the email should be "Request for Refund". <br />
           – Company/project name; <br />
           – The name of the service; <br />
           – The reason for the refund; <br />
           – Amount of payment and currency in which it was made; <br />
           – Date of the transaction; <br />
           – Contact information (phone number, email). <br />
           Grounds for refusing a refund: <br />
           – Blocklabchain may deny a refund request if there is evidence of fraud, abuse of reimbursement, resale of agency services, or other manipulative practices. Promotions, upgrades, and changes to existing plans are not eligible for refunds. <br />
           Each refund request is reviewed individually, on a first-come, first-served basis, and takes time to process. The refund manager will provide you with information about the status of your request. <br />
           Once your refund request is approved, the manager will notify you. The refund process itself may take up to several weeks, depending on your payment method, your bank, and other reasons. <br />
           The amount paid for the product will be refunded in the same way as the payment was made. The actual costs incurred by Blocklabchain may be deducted from the refunded amount. <br />
               </p>

           `,
        btnSend: 'Send',
        formTitle: 'Ask for a quote',
        formDesc: `
         <p>
                    Message on <a href="https://twitter.com/Blocklabchain" target="_blank" class="link">Twitter</a> or <a href="https://t.me/blocklabchain" target="_blank" class="link">Telegram</a> for a faster response!
                  </p>
                  <p class="required-text">(<span class="required">*</span>) Required fields</p>
        `,
        label1: 'Your Name',
        label2: 'Your Twitter or Telegram',
        label3: 'Project Name',
        label4: 'Your Twitter or Telegram',
        label5: 'Project Name',
        label6: 'Project Telegram',
        label7: 'Project Email',
        label8: 'Project website',
        label9: 'Project country',
        label10: 'Select the Services',
        label11: 'Additional information (optional)',
        defPlaceHolder: 'Type here',
        formCheckBox1:'Development',
        formCheckBox2:'Marketing',
        formCheckBox3:'Design',
        formCheckBox4:'Video',
        formCheckBox5:'Other',

        }
      }
    }
  });


