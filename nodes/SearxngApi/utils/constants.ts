let locales = [
	['af', 'Afrikaans', '', 'Afrikaans', '\U0001f310'],
	['ar', 'العربية', '', 'Arabic', '\U0001f310'],
	['ar-SA', 'العربية', 'المملكة العربية السعودية', 'Arabic', '\U0001f1f8\U0001f1e6'],
	['be', 'Беларуская', '', 'Belarusian', '\U0001f310'],
	['bg', 'Български', '', 'Bulgarian', '\U0001f310'],
	['bg-BG', 'Български', 'България', 'Bulgarian', '\U0001f1e7\U0001f1ec'],
	['ca', 'Català', '', 'Catalan', '\U0001f310'],
	['cs', 'Čeština', '', 'Czech', '\U0001f310'],
	['cs-CZ', 'Čeština', 'Česko', 'Czech', '\U0001f1e8\U0001f1ff'],
	['cy', 'Cymraeg', '', 'Welsh', '\U0001f310'],
	['da', 'Dansk', '', 'Danish', '\U0001f310'],
	['da-DK', 'Dansk', 'Danmark', 'Danish', '\U0001f1e9\U0001f1f0'],
	['de', 'Deutsch', '', 'German', '\U0001f310'],
	['de-AT', 'Deutsch', 'Österreich', 'German', '\U0001f1e6\U0001f1f9'],
	['de-BE', 'Deutsch', 'Belgien', 'German', '\U0001f1e7\U0001f1ea'],
	['de-CH', 'Deutsch', 'Schweiz', 'German', '\U0001f1e8\U0001f1ed'],
	['de-DE', 'Deutsch', 'Deutschland', 'German', '\U0001f1e9\U0001f1ea'],
	['el', 'Ελληνικά', '', 'Greek', '\U0001f310'],
	['el-GR', 'Ελληνικά', 'Ελλάδα', 'Greek', '\U0001f1ec\U0001f1f7'],
	['en', 'English', '', 'English', '\U0001f310'],
	['en-AU', 'English', 'Australia', 'English', '\U0001f1e6\U0001f1fa'],
	['en-CA', 'English', 'Canada', 'English', '\U0001f1e8\U0001f1e6'],
	['en-GB', 'English', 'United Kingdom', 'English', '\U0001f1ec\U0001f1e7'],
	['en-IE', 'English', 'Ireland', 'English', '\U0001f1ee\U0001f1ea'],
	['en-IN', 'English', 'India', 'English', '\U0001f1ee\U0001f1f3'],
	['en-NZ', 'English', 'New Zealand', 'English', '\U0001f1f3\U0001f1ff'],
	['en-PH', 'English', 'Philippines', 'English', '\U0001f1f5\U0001f1ed'],
	['en-PK', 'English', 'Pakistan', 'English', '\U0001f1f5\U0001f1f0'],
	['en-SG', 'English', 'Singapore', 'English', '\U0001f1f8\U0001f1ec'],
	['en-US', 'English', 'United States', 'English', '\U0001f1fa\U0001f1f8'],
	['en-ZA', 'English', 'South Africa', 'English', '\U0001f1ff\U0001f1e6'],
	['es', 'Español', '', 'Spanish', '\U0001f310'],
	['es-AR', 'Español', 'Argentina', 'Spanish', '\U0001f1e6\U0001f1f7'],
	['es-CL', 'Español', 'Chile', 'Spanish', '\U0001f1e8\U0001f1f1'],
	['es-CO', 'Español', 'Colombia', 'Spanish', '\U0001f1e8\U0001f1f4'],
	['es-ES', 'Español', 'España', 'Spanish', '\U0001f1ea\U0001f1f8'],
	['es-MX', 'Español', 'México', 'Spanish', '\U0001f1f2\U0001f1fd'],
	['es-PE', 'Español', 'Perú', 'Spanish', '\U0001f1f5\U0001f1ea'],
	['et', 'Eesti', '', 'Estonian', '\U0001f310'],
	['et-EE', 'Eesti', 'Eesti', 'Estonian', '\U0001f1ea\U0001f1ea'],
	['eu', 'Euskara', '', 'Basque', '\U0001f310'],
	['fa', 'فارسی', '', 'Persian', '\U0001f310'],
	['fi', 'Suomi', '', 'Finnish', '\U0001f310'],
	['fi-FI', 'Suomi', 'Suomi', 'Finnish', '\U0001f1eb\U0001f1ee'],
	['fr', 'Français', '', 'French', '\U0001f310'],
	['fr-BE', 'Français', 'Belgique', 'French', '\U0001f1e7\U0001f1ea'],
	['fr-CA', 'Français', 'Canada', 'French', '\U0001f1e8\U0001f1e6'],
	['fr-CH', 'Français', 'Suisse', 'French', '\U0001f1e8\U0001f1ed'],
	['fr-FR', 'Français', 'France', 'French', '\U0001f1eb\U0001f1f7'],
	['ga', 'Gaeilge', '', 'Irish', '\U0001f310'],
	['gd', 'Gàidhlig', '', 'Scottish Gaelic', '\U0001f310'],
	['gl', 'Galego', '', 'Galician', '\U0001f310'],
	['he', 'עברית', '', 'Hebrew', '\U0001f1ee\U0001f1f1'],
	['hi', 'हिन्दी', '', 'Hindi', '\U0001f310'],
	['hr', 'Hrvatski', '', 'Croatian', '\U0001f310'],
	['hu', 'Magyar', '', 'Hungarian', '\U0001f310'],
	['hu-HU', 'Magyar', 'Magyarország', 'Hungarian', '\U0001f1ed\U0001f1fa'],
	['id', 'Indonesia', '', 'Indonesian', '\U0001f310'],
	['id-ID', 'Indonesia', 'Indonesia', 'Indonesian', '\U0001f1ee\U0001f1e9'],
	['is', 'Íslenska', '', 'Icelandic', '\U0001f310'],
	['it', 'Italiano', '', 'Italian', '\U0001f310'],
	['it-CH', 'Italiano', 'Svizzera', 'Italian', '\U0001f1e8\U0001f1ed'],
	['it-IT', 'Italiano', 'Italia', 'Italian', '\U0001f1ee\U0001f1f9'],
	['ja', '日本語', '', 'Japanese', '\U0001f310'],
	['ja-JP', '日本語', '日本', 'Japanese', '\U0001f1ef\U0001f1f5'],
	['kn', 'ಕನ್ನಡ', '', 'Kannada', '\U0001f310'],
	['ko', '한국어', '', 'Korean', '\U0001f310'],
	['ko-KR', '한국어', '대한민국', 'Korean', '\U0001f1f0\U0001f1f7'],
	['lt', 'Lietuvių', '', 'Lithuanian', '\U0001f310'],
	['lv', 'Latviešu', '', 'Latvian', '\U0001f310'],
	['ml', 'മലയാളം', '', 'Malayalam', '\U0001f310'],
	['mr', 'मराठी', '', 'Marathi', '\U0001f310'],
	['nb', 'Norsk Bokmål', '', 'Norwegian Bokmål', '\U0001f310'],
	['nb-NO', 'Norsk Bokmål', 'Norge', 'Norwegian Bokmål', '\U0001f1f3\U0001f1f4'],
	['nl', 'Nederlands', '', 'Dutch', '\U0001f310'],
	['nl-BE', 'Nederlands', 'België', 'Dutch', '\U0001f1e7\U0001f1ea'],
	['nl-NL', 'Nederlands', 'Nederland', 'Dutch', '\U0001f1f3\U0001f1f1'],
	['pl', 'Polski', '', 'Polish', '\U0001f310'],
	['pl-PL', 'Polski', 'Polska', 'Polish', '\U0001f1f5\U0001f1f1'],
	['pt', 'Português', '', 'Portuguese', '\U0001f310'],
	['pt-BR', 'Português', 'Brasil', 'Portuguese', '\U0001f1e7\U0001f1f7'],
	['pt-PT', 'Português', 'Portugal', 'Portuguese', '\U0001f1f5\U0001f1f9'],
	['ro', 'Română', '', 'Romanian', '\U0001f310'],
	['ro-RO', 'Română', 'România', 'Romanian', '\U0001f1f7\U0001f1f4'],
	['ru', 'Русский', '', 'Russian', '\U0001f310'],
	['ru-RU', 'Русский', 'Россия', 'Russian', '\U0001f1f7\U0001f1fa'],
	['sk', 'Slovenčina', '', 'Slovak', '\U0001f310'],
	['sl', 'Slovenščina', '', 'Slovenian', '\U0001f310'],
	['sq', 'Shqip', '', 'Albanian', '\U0001f310'],
	['sv', 'Svenska', '', 'Swedish', '\U0001f310'],
	['sv-SE', 'Svenska', 'Sverige', 'Swedish', '\U0001f1f8\U0001f1ea'],
	['ta', 'தமிழ்', '', 'Tamil', '\U0001f310'],
	['te', 'తెలుగు', '', 'Telugu', '\U0001f310'],
	['th', 'ไทย', '', 'Thai', '\U0001f310'],
	['th-TH', 'ไทย', 'ไทย', 'Thai', '\U0001f1f9\U0001f1ed'],
	['tr', 'Türkçe', '', 'Turkish', '\U0001f310'],
	['tr-TR', 'Türkçe', 'Türkiye', 'Turkish', '\U0001f1f9\U0001f1f7'],
	['uk', 'Українська', '', 'Ukrainian', '\U0001f310'],
	['ur', 'اردو', '', 'Urdu', '\U0001f310'],
	['vi', 'Tiếng Việt', '', 'Vietnamese', '\U0001f310'],
	['vi-VN', 'Tiếng Việt', 'Việt Nam', 'Vietnamese', '\U0001f1fb\U0001f1f3'],
	['zh', '中文', '', 'Chinese', '\U0001f310'],
	['zh-CN', '中文', '中国', 'Chinese', '\U0001f1e8\U0001f1f3'],
	['zh-HK', '中文', '中國香港特別行政區', 'Chinese', '\U0001f1ed\U0001f1f0'],
	['zh-TW', '中文', '台灣', 'Chinese', '\U0001f1f9\U0001f1fc'],
]


export const getLocales = () => {
	/**
	 * Returns a list of locales for the SearXNG API.
	 * Each locale is represented as an object with the following properties:
	 * - name: The name of the language or region.
	 * - value: The locale code.
	 */

	let output = [{name: 'Automatic', value: 'auto'}];
	let _locales = locales.map(locale => {
		/**
		 * 0. SearXNG's internal locale tag (a language or region tag)
		 * 1. Name of the language (:py:obj:`babel.core.Locale.get_language_name`)
		 * 2. For region tags the name of the region (:py:obj:`babel.core.Locale.get_territory_name`).
		 *    Empty string for language tags.
		 * 3. English language name (from :py:obj:`babel.core.Locale.english_name`)
		 * 4. Unicode flag (emoji) that fits to SearXNG's internal region tag. Languages
		 *    are represented by a globe (🌐)
		 */
		let [code, , country, english,] = locale;
		return country ? {name: `${english} - (${country})`, value: code} : {name: english, value: code};
	});

	output.push(..._locales)
	return output
}
