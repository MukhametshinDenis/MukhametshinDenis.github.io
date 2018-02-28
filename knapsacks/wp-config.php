<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'wordpress');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'G*G~)DbX(m2Sz]]uFd%*_u1fNesd`0.[?kW:&][|<6u}e< 6TMUOJ^/*!R~Yt+=C');
define('SECURE_AUTH_KEY',  'lly(i.[<lyshRtGl[kOZ+TZXI3|^6@Xc+N;:{0|fjl2N?$:s#4@I08 RuP!7D[d$');
define('LOGGED_IN_KEY',    ' Uzc)pn>9Ci)DbNdKpD^R0^?y3Pn#A^X)t>Qmfh;-<d73Z.PlAJ_`V|Cz3sCXL07');
define('NONCE_KEY',        'bb}*Fae6K#>m&*my?X#[$),RNlUVdGtcIYT*:j;}j-8gCAo~@=$V)8_!S3JU&;$F');
define('AUTH_SALT',        't&p3>^-92HdO3L6~[+@KcbmCGsSIwwgCs1k[3y3WCysKra#.mMrru`XZ4;&2W-J9');
define('SECURE_AUTH_SALT', 'L1-q2L[0]POfyedhMwe!#)g/H/mbVJ;Bj)x!|o;)Mv*-=xNC)FS`dACl7k /vBp)');
define('LOGGED_IN_SALT',   ',nhohjNF1wZI} 6W]00;bV8X2?Rp7DyDT;xBuTTLMv. ]K1g%a#(Sw&7j_3I0h7P');
define('NONCE_SALT',       'NniS-s0Z2eiMrrqZonhH[P k+kkpK3po]F<WodpDFo~~+?,<EDy#VXSVgX<;^QB@');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
