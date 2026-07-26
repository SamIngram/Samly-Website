export type Game = {
	title: string;
	description: string;
	image: string;
	platform: 'Steam' | 'Itch';
	priceLabel: 'FREE' | 'PAY WHAT YOU WANT' | 'BUY NOW';
	storeUrl: string;
	artTheme: 'meadow' | 'night' | 'garden' | 'cabin';
};

/*
 * ADDING A GAME
 * Copy one object below, then change its title, description, image, platform,
 * priceLabel, and storeUrl. If image is left blank, the friendly CSS artwork
 * placeholder is shown. Use a path such as "/images/games/my-game.webp".
 */
export const games: Game[] = [
	{
		title: 'Merge',
		description: 'Easy to learn, hard to master.',
		image: '/images/games/samlys-merge.jpg',
		platform: 'Steam',
		priceLabel: 'BUY NOW',
		storeUrl: 'https://store.steampowered.com/app/3392070/Samlys_Merge/',
		artTheme: 'night',
	},
	{
		title: 'Bookly',
		description: 'Help lost stories find their way home.',
		image: '/images/games/bookly.png',
		platform: 'Itch',
		priceLabel: 'PAY WHAT YOU WANT',
		storeUrl: 'https://samlytv.itch.io/bookly',
		artTheme: 'meadow',
	},
	{
		title: "Fifi's Fishing",
		description: 'Fifi catalogues fish for her sanctuary.',
		image: '/images/games/fifis-fishing.png',
		platform: 'Itch',
		priceLabel: 'PAY WHAT YOU WANT',
		storeUrl: 'https://samlytv.itch.io/fifis-fishing',
		artTheme: 'garden',
	},
	{
		title: 'Scramble',
		description: 'Unscramble anagrams against the clock.',
		image: '/images/games/scramble.png',
		platform: 'Itch',
		priceLabel: 'PAY WHAT YOU WANT',
		storeUrl: 'https://samlytv.itch.io/scramble',
		artTheme: 'cabin',
	},
	{
		title: "Mordekai's Magical Museum",
		description: 'Mordekai fills his museum with magical objects from the dungeon below.',
		image: '/images/games/mordekais-magical-museum.png',
		platform: 'Itch',
		priceLabel: 'PAY WHAT YOU WANT',
		storeUrl: 'https://samlytv.itch.io/mordekais-magical-museum',
		artTheme: 'night',
	},
];

export const gameJams: Game[] = [
	{
		title: 'Postie, The Post Ghost (Game Jam Edition)',
		description: 'Help Postie deliver mail around a cryptic graveyard.',
		image: '/images/games/postie-game-jam.png',
		platform: 'Itch',
		priceLabel: 'PAY WHAT YOU WANT',
		storeUrl: 'https://samlytv.itch.io/postie-the-post-ghost-game-jam-edition',
		artTheme: 'cabin',
	},
	{
		title: "Mordekai's Magical Museum (Game Jam Edition)",
		description: 'Mordekai fills his museum with magical objects from the dungeon below.',
		image: '/images/games/mordekais-magical-museum-game-jam.png',
		platform: 'Itch',
		priceLabel: 'PAY WHAT YOU WANT',
		storeUrl: 'https://samlytv.itch.io/mordekais-magical-museum-game-jam-edition',
		artTheme: 'night',
	},
];
