const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Plošinkovka: 0},
	{Centrovat: 0},
	{Player: 0},
	{PevnéTěleso: 0},
	{DlaždicovéPozadí: 0},
	{Tomato: 0},
	{Klávesnice: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	DlaždicovéPozadí: class extends self.ITiledBackgroundInstance {},
	Tomato: class extends self.ISpriteInstance {},
	Klávesnice: class extends self.IInstance {}
}