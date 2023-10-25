export var recipes = [
    {
        id: 1,
        name: 'Tarte aux Pommes',
        description: 'Dessert classique à base de pommes',
        ingredients: [
            '1 pâte brisée',
            '4 pommes',
            '100g de sucre',
            '1 cuillère à café de cannelle',
            '1 cuillère à soupe de jus de citron'
        ],
        instructions: "Préchauffer le four à 180°C. Étaler la pâte brisée dans un moule à tarte. Peler, épépiner et couper les pommes en tranches fines, puis les arroser de jus de citron. Disposer les tranches de pommes sur la pâte en les chevauchant légèrement. Saupoudrer de sucre et de cannelle. Cuire au four pendant 30-35 minutes jusqu'à ce que la tarte soit dorée.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'Tomates Provençales',
        description: 'Tomates farcies à la provençale',
        ingredients: [
            '4 grosses tomates',
            "2 gousses d'ail",
            'Persil frais haché',
            'Chapelure',
            "Huile d'olive",
            'Sel et poivre'
        ],
        instructions: "Préchauffer le four à 180°C. Couper le chapeau des tomates et les évider délicatement. Dans un bol, mélanger l'ail haché, le persil, la chapelure, l'huile d'olive, le sel et le poivre. Farcir les tomates avec ce mélange. Remettre les chapeaux sur les tomates. Cuire au four pendant environ 20-25 minutes.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        name: 'Poulet Tandoori',
        description: 'Poulet mariné aux épices indiennes',
        ingredients: [
            '4 cuisses de poulet',
            'Yaourt nature',
            '2 cuillères à soupe de pâte de tandoori',
            'Jus de citron',
            'Ail haché',
            'Gingembre râpé',
            'Sel et poivre'
        ],
        instructions: "Dans un bol, mélanger le yaourt, la pâte de tandoori, le jus de citron, l'ail, le gingembre, le sel et le poivre. Incorporer le poulet dans le mélange et laisser mariner au moins 1 heure. Préchauffer le four à 200°C. Placer le poulet mariné sur une plaque de cuisson et cuire au four pendant 30-35 minutes.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 4,
        name: 'Ratatouille',
        description: 'Plat traditionnel provençal aux légumes',
        ingredients: [
            '1 aubergine',
            '1 courgette',
            '1 poivron rouge',
            '2 tomates',
            '1 oignon',
            'Ail haché',
            'Herbes de Provence'
        ],
        instructions: "Couper tous les légumes en petits morceaux. Faire revenir l'oignon et l'ail dans une grande poêle avec de l'huile d'olive. Ajouter les légumes et cuire à feu doux pendant environ 30 minutes. Assaisonner avec les herbes de Provence, le sel et le poivre.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 5,
        name: 'Crêpes Suzette',
        description: 'Dessert français classique aux crêpes flambées',
        ingredients: [
            '4 crêpes',
            '100g de sucre',
            '50g de beurre',
            "Jus et zeste d'orange",
            "Grand Marnier (liqueur à l'orange)"
        ],
        instructions: "Dans une poêle, faire fondre le beurre et ajouter le sucre, le jus et le zeste d'orange. Faire flamber avec le Grand Marnier. Placer les crêpes dans la poêle, les enrober de sauce et les replier. Servir chaud avec de la glace à la vanille.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 6,
        name: 'Quiche Lorraine',
        description: 'Tarte salée aux lardons et à la crème',
        ingredients: [
            '1 pâte brisée',
            '200g de lardons',
            '200ml de crème fraîche',
            '3 œufs',
            'Noix de muscade',
            'Sel et poivre'
        ],
        instructions: "Préchauffer le four à 180°C. Étaler la pâte brisée dans un moule à tarte et la piquer à la fourchette. Faire revenir les lardons dans une poêle jusqu'à ce qu'ils soient croustillants. Dans un bol, mélanger la crème fraîche, les œufs, la noix de muscade, le sel et le poivre. Ajouter les lardons à la préparation. Verser le mélange sur la pâte brisée et cuire au four pendant environ 30 minutes.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 7,
        name: 'Bouillabaisse',
        description: 'Soupe de poisson provençale',
        ingredients: [
            'Différents poissons (lotte, rascasse, dorade, etc.)',
            'Fruits de mer (moules, coques, crevettes)',
            'Bouillon de poisson',
            'Tomates',
            'Fenouil',
            'Ail',
            "Rouille (sauce à l'ail et au safran)"
        ],
        instructions: "Faire revenir l'ail et le fenouil dans une grande marmite. Ajouter les tomates, le bouillon de poisson et les poissons coupés en morceaux. Laisser mijoter pendant environ 20-30 minutes. Ajouter les fruits de mer et cuire jusqu'à ce qu'ils s'ouvrent. Servir avec de la rouille et des croûtons de pain.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 8,
        name: 'Tartiflette',
        description: 'Plat savoyard à base de pommes de terre, de lardons et de reblochon',
        ingredients: [
            '1kg de pommes de terre',
            '200g de lardons',
            '1 reblochon',
            'Oignons',
            'Vin blanc sec',
            'Ail',
            'Crème fraîche',
            'Sel et poivre'
        ],
        instructions: "Préchauffer le four à 180°C. Faire revenir les lardons avec les oignons et l'ail. Couper les pommes de terre en rondelles et les faire cuire dans du vin blanc jusqu'à ce qu'elles soient tendres. Dans un plat à gratin, alterner les couches de pommes de terre, de lardons et de morceaux de reblochon. Ajouter de la crème fraîche, du sel et du poivre. Cuire au four jusqu'à ce que le reblochon soit doré et fondant.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 9,
        name: 'Bœuf Bourguignon',
        description: 'Plat traditionnel à base de bœuf mijoté dans du vin rouge',
        ingredients: [
            '1,5kg de bœuf (gîte, paleron, etc.)',
            '200g de lardons',
            '2 oignons',
            '2 carottes',
            'Ail',
            'Thym et laurier',
            'Bouillon de bœuf',
            'Vin rouge'
        ],
        instructions: "Faire revenir les lardons et l'ail dans une grande cocotte. Ajouter la viande coupée en morceaux et la faire dorer. Ajouter les oignons, les carottes, le thym, le laurier, le bouillon de bœuf et le vin rouge. Laisser mijoter pendant environ 2 heures. Servir chaud avec des pommes de terre ou des pâtes.",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 10,
        name: 'Crème Brûlée',
        description: 'Dessert français classique à la vanille',
        ingredients: [
            '250ml de crème fraîche',
            "4 jaunes d'œufs",
            '50g de sucre',
            '1 gousse de vanille',
            'Sucre cassonade'
        ],
        instructions: "Préchauffer le four à 150°C. Faire chauffer la crème avec la gousse de vanille fendue. Battre les jaunes d'œufs avec le sucre. Retirer la gousse de vanille de la crème et la verser sur le mélange d'œufs et de sucre. Répartir la crème dans des ramequins et cuire au four pendant 30-40 minutes. Saupoudrer de sucre cassonade et caraméliser à l'aide d'un chalumeau ou du gril du four.",
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
