import {Kobo} from 'kobo-sdk'

export const survey = {
  'schema': '1',
  'survey': [
    {
      'name': 'start',
      'type': 'start',
      '$kuid': 'ZYQW3Q3Yh',
      '$xpath': 'start',
      '$autoname': 'start'
    },
    {
      'name': 'end',
      'type': 'end',
      '$kuid': 'IYU4aQttb',
      '$xpath': 'end',
      '$autoname': 'end'
    },
    {
      'name': 'date',
      'type': 'date',
      '$kuid': '0SbqyRdjz',
      'label': [
        'Date',
        'Дата'
      ],
      '$xpath': 'date',
      'default': 'today()',
      '$autoname': 'date'
    },
    {
      'name': 'background',
      'type': 'begin_group',
      '$kuid': 'BWQ6NOflx',
      'label': [
        '###1. Background',
        '###1. Фон'
      ],
      '$xpath': 'background',
      'required': false,
      '$autoname': 'background',
      'appearance': 'field-list'
    },
    {
      'name': 'back_un_id',
      'type': 'note',
      '$kuid': '44vJlV5qc',
      'label': [
        '**1. ID/Case Number**',
        '**Унікальний персональний код**'
      ],
      '$xpath': 'background/back_un_id',
      'required': false,
      '$autoname': 'back_un_id',
      'calculation': 'once(format-date-time(now(), ‘%y%m%d%H%M%S%3’))'
    },
    {
      'name': 'back_office',
      'type': 'select_one',
      '$kuid': 'lgHKqzrxe',
      'label': [
        '1.1 Office',
        '1.1 Офіс'
      ],
      '$xpath': 'background/back_office',
      'required': true,
      '$autoname': 'back_office',
      'choice_filter': 'tag =\'yes\'',
      'select_from_list_name': 'office'
    },
    {
      'name': 'back_enum',
      'type': 'select_one',
      '$kuid': 'RqpgY2hCD',
      'label': [
        '1.2 Enumerator',
        '1.2 Переписувач'
      ],
      '$xpath': 'background/back_enum',
      'required': true,
      '$autoname': 'back_enum',
      'choice_filter': 'office=${back_office}',
      'select_from_list_name': 'enum'
    },
    {
      'hint': [
        'Select all that apply',
        'Оберіть усі варіанти, які підходять'
      ],
      'name': 'back_prog_type',
      'type': 'select_multiple',
      '$kuid': 'ur7DVm5jt',
      'label': [
        '1.3 Programme Type',
        '1.3 Тип програми'
      ],
      '$xpath': 'background/back_prog_type',
      'required': true,
      '$autoname': 'back_prog_type',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'prog_type'
    },
    {
      'name': 'donor_mpca',
      'type': 'select_one',
      '$kuid': '0tiwOorii',
      'label': [
        '1.3.1 Donor for MPCA',
        '1.3.1 Який донор для MPCA'
      ],
      '$xpath': 'background/donor_mpca',
      'relevant': 'selected(${back_prog_type}, \'mpca\')',
      'required': true,
      '$autoname': 'donor_mpca',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_nfi',
      'type': 'select_one',
      '$kuid': 'N2wnqRLCK',
      'label': [
        '1.3.2 Donor for NFI',
        '1.3.2 Який донор для NFI'
      ],
      '$xpath': 'background/donor_nfi',
      'relevant': 'selected(${back_prog_type}, \'nfi\')',
      'required': true,
      '$autoname': 'donor_nfi',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_esk',
      'type': 'select_one',
      '$kuid': '8L3ZUM0Mu',
      'label': [
        '1.3.3 Donor for Emergency Shelter Kit',
        '1.3.3 Який донор для Emergency Shelter Kit'
      ],
      '$xpath': 'background/donor_esk',
      'relevant': 'selected(${back_prog_type}, \'esk\')',
      'required': true,
      '$autoname': 'donor_esk',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_cfr',
      'type': 'select_one',
      '$kuid': 'y4ni88rSK',
      'label': [
        '1.3.4 Donor for Cash for Rent',
        '1.3.4 Який донор для Cash for Rent'
      ],
      '$xpath': 'background/donor_cfr',
      'relevant': 'selected(${back_prog_type}, \'cfr\')',
      'required': true,
      '$autoname': 'donor_cfr',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_cff',
      'type': 'select_one',
      '$kuid': '6xRknT5uy',
      'label': [
        '1.3.5 Donor for Cash for Fuel',
        '1.3.5 Який донор для Cash for Fuel'
      ],
      '$xpath': 'background/donor_cff',
      'relevant': 'selected(${back_prog_type}, \'csf\')',
      'required': true,
      '$autoname': 'donor_cff',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_cfe',
      'type': 'select_one',
      '$kuid': '577qrJdyh',
      'label': [
        '1.3.6 Donor for Cash for Education',
        '1.3.6 Який донор для Cash for Education'
      ],
      '$xpath': 'background/donor_cfe',
      'relevant': 'selected(${back_prog_type}, \'cfe\')',
      'required': true,
      '$autoname': 'donor_cfe',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_iwk',
      'type': 'select_one',
      '$kuid': 'jxVtYOAK4',
      'label': [
        '1.3.7 Donor for Infant Winterclothing Kit',
        '1.3.7 Який донор для Infant Winterclothing Kit'
      ],
      '$xpath': 'background/donor_iwk',
      'relevant': 'selected(${back_prog_type}, \'iwk\')',
      'required': true,
      '$autoname': 'donor_iwk',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_ihk',
      'type': 'select_one',
      '$kuid': 'FQquSYpcm',
      'label': [
        '1.3.8 Donor for Infant Hygiene Kit',
        '1.3.8 Який донор для Infant Hygiene Kitм'
      ],
      '$xpath': 'background/donor_ihk',
      'relevant': 'selected(${back_prog_type}, \'ihk\')',
      'required': true,
      '$autoname': 'donor_ihk',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'donor_cfu',
      'type': 'select_one',
      '$kuid': 'a4YvGNl5v',
      'label': [
        '1.3.9 Donor for Cash for Utilities',
        '1.3.9 Який донор для Cash for Utilities'
      ],
      '$xpath': 'background/donor_cfu',
      'relevant': 'selected(${back_prog_type}, \'cfu\')',
      'required': true,
      '$autoname': 'donor_cfu',
      'choice_filter': 'lwo=${back_office} or chj=${back_office} or dnk=${back_office} or hrk=${back_office} or nlv=${back_office} or umy=${back_office}',
      'select_from_list_name': 'donor'
    },
    {
      'hint': [
        '🔒 Automatically filled',
        '🔒 Заповнюється автоматично'
      ],
      'name': 'back_donor',
      'type': 'select_multiple',
      '$kuid': '6nkur3r5A',
      'label': [
        '1.4 Donors selected',
        '1.4 Вибрані донори'
      ],
      '$xpath': 'background/back_donor',
      'required': false,
      '$autoname': 'back_donor',
      'read_only': 'TRUE',
      'calculation': 'concat(${donor_mpca},\' \', ${donor_nfi},\' \', ${donor_esk},\' \', ${donor_cfr},\' \', ${donor_cff},\' \', ${donor_cfe},\' \', ${donor_iwk},\' \', ${donor_ihk},\' \', ${donor_cfu})',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'back_refer',
      'type': 'select_one',
      '$kuid': 'AAHNH5HFk',
      'label': [
        '1.5.1 Internal DRC Referral?',
        '1.5.1 Чи було це направлення здійснено у межах ДРБ?'
      ],
      '$xpath': 'background/back_refer',
      'default': 'no',
      'required': true,
      '$autoname': 'back_refer',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'back_refer_who',
      'type': 'select_one',
      '$kuid': 'aGj0Wm8PI',
      'label': [
        '1.5.2 Referral Department',
        '1.5.2 З якого відділу було здійснено це направлення?'
      ],
      '$xpath': 'background/back_refer_who',
      'relevant': 'selected(${back_refer},\'yes\')',
      'required': true,
      '$autoname': 'back_refer_who',
      'select_from_list_name': 'department'
    },
    {
      'hint': [
        'Hello, my name is ${back_enum} and I am a representative of the Danish Refugee Council. This questionnaire is designed primarily to ascertain your eligibility for the programmes for which you have been pre-selected for. You are free to refuse to answer any question or also stop the process at any time knowing that non-answers may affect the possibility of you not being selected on any programs we are offering. No individual data will be shared outside of the DRC aside from your tax number which we are required by law to share with the government. Tax numbers are also shared anonymously with other organisations to ensure that there is no duplication of assistance. Should you be selected for cash assistance, then your details will also be shared with the selected payment provider in order to process your payment. All other data will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.',
        'Щоб зареєструвати вашу заявку, нам потрібно поставити вам кілька запитань, щоб зрозуміти склад вашої сім\'ї та як найкраще перерахувати вам фінансову допомогу, якщо ви маєте на це право. Ці запитання займуть 10-15 хвилин. Якщо ви відповідаєте вимогам, нам потрібно буде надати банку деякі основні дані, щоб здійснити платіж. Ми також зобов\'язані надавати ідентифікаційні номери платника податків людей, яким ми надаємо допомогу, іншим гуманітарним організаціям, які впроваджують програми фінансової допомоги, щоб гарантувати, що ми не дублюємо допомогу. Вся інша інформація зберігатиметься в безпеці відповідно до Закону про захист персональних даних і не буде передана за межі DRC та його партнерів.'
      ],
      'name': 'back_consent',
      'type': 'select_one',
      '$kuid': 'We6B356tk',
      'label': [
        '1.6.1 Consent',
        '1.6.1 Згода'
      ],
      '$xpath': 'background/back_consent',
      'required': true,
      '$autoname': 'back_consent',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'back_consen_no_reas',
      'type': 'text',
      '$kuid': 'Tpl8KfZPM',
      'label': [
        '1.6.2 Reason for No Consent',
        '1.6.2 Зазначте, будь ласка, причину, з якої Ви не погоджуєтеся заповнити анкету?'
      ],
      '$xpath': 'background/back_consen_no_reas',
      'relevant': 'selected(${back_consent},\'no\')',
      'required': false,
      '$autoname': 'back_consen_no_reas'
    },
    {
      'name': 'back_consent_no_note',
      'type': 'note',
      '$kuid': 'GdSbdGqhH',
      'label': [
        'Thank you very much for your time, we will not proceed with the questionnaire without your consent.',
        'Щиро дякуємо за ваш час, ми не будемо продовжувати заповнення анкети без вашої згоди.'
      ],
      '$xpath': 'background/back_consent_no_note',
      'relevant': 'selected(${back_consent},\'no\')',
      'required': false,
      '$autoname': 'back_consent_no_note'
    },
    {
      'type': 'end_group',
      '$kuid': '6yZhCYq2D'
    },
    {
      'name': 'ben_det',
      'type': 'begin_group',
      '$kuid': 'lPHyxrxGq',
      'label': [
        '###2. Beneficiary Details',
        '###2. Відомості про одержувача'
      ],
      '$xpath': 'ben_det',
      'relevant': 'selected(${back_consent},\'yes\')',
      'required': false,
      '$autoname': 'ben_det',
      'appearance': 'field-list'
    },
    {
      'hint': [
        'PLEASE WRITE IN UKRAINIAN',
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ'
      ],
      'name': 'ben_det_surname',
      'type': 'text',
      '$kuid': 'ttU9hd7ef',
      'label': [
        '2.1 Surname',
        '2.1 Яке ваше прізвище (як вказано в паспорті)?'
      ],
      '$xpath': 'ben_det/ben_det_surname',
      'required': true,
      '$autoname': 'ben_det_surname'
    },
    {
      'hint': [
        'PLEASE WRITE IN UKRAINIAN',
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ'
      ],
      'name': 'ben_det_first_name',
      'type': 'text',
      '$kuid': 'zsfeDNcVt',
      'label': [
        '2.2 First Name',
        '2.2 Яке ваше ім\'я (як зазначено в паспорті)?'
      ],
      '$xpath': 'ben_det/ben_det_first_name',
      'required': true,
      '$autoname': 'ben_det_first_name'
    },
    {
      'hint': [
        'PLEASE WRITE IN UKRAINIAN',
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ'
      ],
      'name': 'ben_det_pat_name',
      'type': 'text',
      '$kuid': 'oYCMyguau',
      'label': [
        '2.3 Patronymic Name',
        '2.3 Яке ваше по-батькові?'
      ],
      '$xpath': 'ben_det/ben_det_pat_name',
      'required': true,
      '$autoname': 'ben_det_pat_name'
    },
    {
      'hint': [
        'Do not inlcude +380 prefix. Number must contain 9 digits',
        'Не вводьте префікс +380. Номер повинен складатися з 9 цифр'
      ],
      'name': 'ben_det_ph_number',
      'type': 'integer',
      '$kuid': 'V9jSTbc2p',
      'label': [
        '2.4 Phone Number',
        '2.4 Ваш контактний номер телефону?'
      ],
      '$xpath': 'ben_det/ben_det_ph_number',
      'required': true,
      '$autoname': 'ben_det_ph_number',
      'constraint': '. > 100000000 and . < 1000000000',
      'constraint_message': [
        'Phone number must be nine digits',
        'Номер телефону повинен складатися з дев\'яти цифр'
      ]
    },
    {
      'name': 'ben_det_oblast',
      'type': 'select_one',
      '$kuid': '626G4liwu',
      'label': [
        '2.5.1 Registration Oblast',
        '2.5.1 Виберіть область, де буде проходити реєстрація'
      ],
      '$xpath': 'ben_det/ben_det_oblast',
      'required': true,
      '$autoname': 'ben_det_oblast',
      'select_from_list_name': 'oblast'
    },
    {
      'name': 'ben_det_raion',
      'type': 'select_one',
      '$kuid': 'pgHLi4Ll5',
      'label': [
        '2.5.2 Registration Raion',
        '2.5.2 Виберіть район, де буде проходити реєстрація'
      ],
      '$xpath': 'ben_det/ben_det_raion',
      'required': true,
      '$autoname': 'ben_det_raion',
      'choice_filter': 'oblast=${ben_det_oblast}',
      'select_from_list_name': 'raion'
    },
    {
      'name': 'ben_det_hromada',
      'type': 'select_one',
      '$kuid': 'F6T6F4LXC',
      'label': [
        '2.5.3 Registration Hromada',
        '2.5.3 Виберіть громаду, де відбувається реєстрація'
      ],
      '$xpath': 'ben_det/ben_det_hromada',
      'required': true,
      '$autoname': 'ben_det_hromada',
      'choice_filter': 'raion=${ben_det_raion}',
      'select_from_list_name': 'hromada'
    },
    {
      'file': 'kobo_settlements_activityinfo.csv',
      'name': 'ben_det_settlement',
      'type': 'select_one_from_file',
      '$kuid': 'QPbThcOwr',
      'label': [
        '2.5.4 Registration Settlement',
        '2.5.4 Виберіть Поселення, де відбувається реєстрація'
      ],
      '$xpath': 'ben_det/ben_det_settlement',
      'required': false,
      '$autoname': 'ben_det_settlement',
      'choice_filter': 'hromada=${ben_det_hromada}'
    },
    {
      'name': 'ben_det_res_stat',
      'type': 'select_one',
      '$kuid': 'YgWYAJR9X',
      'label': [
        '2.5.5 Residential Status',
        '2.5.5 Виберіть статус проживання'
      ],
      '$xpath': 'ben_det/ben_det_res_stat',
      'required': true,
      '$autoname': 'ben_det_res_stat',
      'select_from_list_name': 'res_stat'
    },
    {
      'name': 'ben_det_prev_oblast',
      'type': 'select_one',
      '$kuid': 'hsMb6s6De',
      'label': [
        '2.5.6 Area of Origin',
        '2.5.6 Який регіон є пріорітетним до переміщення? (Виберіть область)'
      ],
      '$xpath': 'ben_det/ben_det_prev_oblast',
      'relevant': 'selected(${ben_det_res_stat},\'idp\')',
      'required': true,
      '$autoname': 'ben_det_prev_oblast',
      'select_from_list_name': 'oblast'
    },
    {
      'name': 'ben_det_idp_time',
      'type': 'select_one',
      '$kuid': 'DyqyWVz50',
      'label': [
        '2.5.7 Internally Displaced Person(s) in Household',
        '2.5.7 Домогосподарство з внутрішньо переміщеною особою (особами)'
      ],
      '$xpath': 'ben_det/ben_det_idp_time',
      'relevant': 'selected(${ben_det_res_stat},\'idp\') and selected(${donor_nfi},\'ukr000347_danida2\') and selected(${back_office},\'chj\')',
      'required': true,
      '$autoname': 'ben_det_idp_time',
      'select_from_list_name': 'idp_time'
    },
    {
      'hint': [
        'Please indcate all resources beyond just formal income, this is to include gifts from family/friends/savings/in kind donationds/pensions etc',
        'Зазначте всі ресурси, крім офіційного доходу; це мають бути подарунки від сім’ї/ друзів/ заощадження/ пожертвування у натуральній формі/ пенсії тощо'
      ],
      'name': 'ben_det_income',
      'type': 'integer',
      '$kuid': 'rOa3OzObi',
      'label': [
        '2.6 Total Value of Resources Received (UAH) per month',
        '2.6 Якою була загальна вартість у гривнях усіх ресурсів, отриманих Вашим домогосподарством за останній один місяць?'
      ],
      '$xpath': 'ben_det/ben_det_income',
      'required': true,
      '$autoname': 'ben_det_income'
    },
    {
      'name': 'ben_det_hh_size',
      'type': 'integer',
      '$kuid': 'fSyBAGJsw',
      'label': [
        '2.7 Household Size',
        '2.7.1 Кількість членів домогосподарства (включно з головою домогосподарства)'
      ],
      '$xpath': 'ben_det/ben_det_hh_size',
      'required': true,
      '$autoname': 'ben_det_hh_size'
    },
    {
      'type': 'end_group',
      '$kuid': 'BVYRcGVN2'
    },
    {
      'name': 'hh_char',
      'type': 'begin_group',
      '$kuid': 'Vxawdkq8z',
      'label': [
        '###3. Household Characteristics & Vulnerability Assessment',
        '###3. Характеристика домогосподарства та оцінка вразливостей'
      ],
      '$xpath': 'hh_char',
      'relevant': 'selected(${back_consent},\'yes\') and ${ben_det_hh_size}>0',
      'required': false,
      '$autoname': 'hh_char'
    },
    {
      'hint': [
        'If it is not clear who is the head of household, ask who feels most able or willing to answer questions on behalf of the household.',
        'Якщо незрозуміло, хто є головою сім’ї, запитайте, хто може або бажає відповідати на запитання від імені родини'
      ],
      'name': 'hh_char_hhh',
      'type': 'select_one',
      '$kuid': 'pOobvxvQ8',
      'label': [
        '3.1 Head of Household?',
        '3.1 Ви голова домогосподарства?'
      ],
      '$xpath': 'hh_char/hh_char_hhh',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'hh_char_hhh',
      'appearance': 'quick',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'hh_char_res_gender',
      'type': 'select_one',
      '$kuid': 'cl0xbzHAC',
      'label': [
        '3.1.1 Gender of Respondent',
        '3.1.1 Виберіть стать респондента'
      ],
      '$xpath': 'hh_char/hh_char_res_gender',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'hh_char_res_gender',
      'appearance': 'quick',
      'select_from_list_name': 'gender'
    },
    {
      'name': 'hh_char_res_age',
      'type': 'integer',
      '$kuid': 'DaKX9YwTK',
      'label': [
        '3.1.2 Age of Respondent',
        '3.1.2 Вік респондента'
      ],
      '$xpath': 'hh_char/hh_char_res_age',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'hh_char_res_age'
    },
    {
      'hint': [
        'Please read all options',
        'Будь ласка, прочитайте всі варіанти'
      ],
      'name': 'hh_char_res_dis_select',
      'type': 'select_multiple',
      '$kuid': 'fbEAnulEu',
      'label': [
        '3.1.3 Respondent Characteristics',
        '3.1.3 Будь ласка, оберіть будь-який з наведених нижче пунктів, які стосуються респондента'
      ],
      '$xpath': 'hh_char/hh_char_res_dis_select',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_res_dis_select',
      'constraint': 'not(selected(.,\'diff_none\') and count-selected(.)>1)',
      'constraint_message': [
        'Cannot have these options checked together',
        'Ці параметри не можна перевіряти разом'
      ],
      'select_from_list_name': 'dis'
    },
    {
      'name': 'hh_char_res_dis_level',
      'type': 'select_one',
      '$kuid': 'WsiKTmuwt',
      'label': [
        '3.1.4 Difficulty Level of Respondent Characteristics',
        '3.1.4 Який рівень складності обраних варіантів відповідей на попередні запитання?'
      ],
      '$xpath': 'hh_char/hh_char_res_dis_level',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_res_dis_level',
      'appearance': 'quick',
      'select_from_list_name': 'dis_level'
    },
    {
      'name': 'hh_char_hhh_gender',
      'type': 'select_one',
      '$kuid': 'pyLe8l5pA',
      'label': [
        '3.2.1 Gender of Head of Household',
        '3.2.1 Яка стать голови родини?'
      ],
      '$xpath': 'hh_char/hh_char_hhh_gender',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'hh_char_hhh_gender',
      'appearance': 'quick',
      'select_from_list_name': 'gender'
    },
    {
      'name': 'hh_char_hhh_age',
      'type': 'integer',
      '$kuid': 'rXrhl2OI0',
      'label': [
        '3.2.2 Age of Head of Household',
        '3.2.2 Скільки років голові домогосподарства?'
      ],
      '$xpath': 'hh_char/hh_char_hhh_age',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'hh_char_hhh_age'
    },
    {
      'hint': [
        'Please read all options',
        'Будь ласка, прочитайте всі варіанти'
      ],
      'name': 'hh_char_hhh_dis_select',
      'type': 'select_multiple',
      '$kuid': 'UStxYkpVX',
      'label': [
        '3.2.3 Head of Household Characteristics',
        '3.2.3 Будь ласка, оберіть будь-який з наведених нижче пунктів, які стосуються голови домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_hhh_dis_select',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_hhh_dis_select',
      'constraint': 'not(selected(.,\'diff_none\') and count-selected(.)>1)',
      'constraint_message': [
        'Cannot have these options checked together',
        'Ці параметри не можна перевіряти разом'
      ],
      'select_from_list_name': 'dis'
    },
    {
      'name': 'hh_char_hhh_dis_level',
      'type': 'select_one',
      '$kuid': 'ZIw108tzl',
      'label': [
        '3.2.4 Difficulty Level of Head of Household Characteristics',
        '3.2.4 Який рівень складності обраних варіантів відповідей на попередні запитання?'
      ],
      '$xpath': 'hh_char/hh_char_hhh_dis_level',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_hhh_dis_level',
      'appearance': 'quick',
      'select_from_list_name': 'dis_level'
    },
    {
      'name': 'calc_hhh_res_dis_level',
      'type': 'calculate',
      '$kuid': 'qOurHCNkY',
      '$xpath': 'hh_char/calc_hhh_res_dis_level',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'calc_hhh_res_dis_level',
      'calculation': 'if(selected(${hh_char_res_dis_level},\'one\') or selected(${hh_char_res_dis_level},\'two\') or selected(${hh_char_res_dis_level},\'fri\') or selected(${hh_char_hhh_dis_level},\'one\') or selected(${hh_char_hhh_dis_level},\'two\') or selected(${hh_char_hhh_dis_level},\'fri\'),1,0)'
    },
    {
      'name': 'hh_char_civ_stat',
      'type': 'select_one',
      '$kuid': 'VabPKyDIz',
      'label': [
        '3.1 Civil Status of Head of Household',
        '3.1 Який цивільно-правовий статус голови домогосподарства?'
      ],
      '$xpath': 'hh_char/hh_char_civ_stat',
      'required': true,
      '$autoname': 'hh_char_civ_stat',
      'appearance': 'quick',
      'select_from_list_name': 'civ_stat'
    },
    {
      'name': 'hh_char_pensioner',
      'type': 'select_one',
      '$kuid': 'BSQ2vyiVS',
      'label': [
        '3.1.1 Pension Receiver in Household?',
        '3.1.1 Чи є в домогосподарстві кого-небудь, хто отримує пенсію?'
      ],
      '$xpath': 'hh_char/hh_char_pensioner',
      'required': true,
      '$autoname': 'hh_char_pensioner',
      'appearance': 'quick',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'hh_char_preg',
      'type': 'select_one',
      '$kuid': 'RQomc3JF9',
      'label': [
        '3.1.2 Pregnant/Lactating Females in Household?',
        '3.1.2 Чи є у домогосподарстві жінки, які вагітні чи годують грудьми?'
      ],
      '$xpath': 'hh_char/hh_char_preg',
      'default': 'no',
      'required': true,
      '$autoname': 'hh_char_preg',
      'appearance': 'quick',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'hh_char_preg_number',
      'type': 'integer',
      '$kuid': 'ZoBbyzzwA',
      'label': [
        '3.1.2.1 How many Pregnant/Lactating Females in Household?',
        '3.1.2.1 Скільки вагітних/годуючих жінок у домогосподарстві?'
      ],
      '$xpath': 'hh_char/hh_char_preg_number',
      'default': '1',
      'relevant': 'selected(${hh_char_preg},\'yes\')',
      'required': false,
      '$autoname': 'hh_char_preg_number'
    },
    {
      'name': 'calc_char_civ_stat',
      'type': 'calculate',
      '$kuid': 'iCbsVxb79',
      '$xpath': 'hh_char/calc_char_civ_stat',
      'required': false,
      '$autoname': 'calc_char_civ_stat',
      'calculation': 'if(selected(${hh_char_civ_stat},\'single\') or selected(${hh_char_civ_stat},\'div_sep\') or selected(${hh_char_civ_stat},\'widow\') or selected(${hh_char_civ_stat},\'abandoned\'),1,0)'
    },
    {
      'name': 'cal_head_tax',
      'type': 'calculate',
      '$kuid': 'x9l5MNWxS',
      '$xpath': 'hh_char/cal_head_tax',
      'required': false,
      '$autoname': 'cal_head_tax',
      'calculation': 'indexed-repeat(${hh_char_tax_id_num},${hh_char_hh_det} ,1)'
    },
    {
      'hint': [
        '**DO NOT INCLUDE HH MEMBERS ALREADY REFERRED TO ABOVE**',
        '**НЕ ЗАЗНАЧАЙТЕ ЧЛЕНІВ ДОМОГОСПОДАРСТВА, ПРО ЯКИХ УЖЕ ЙШЛОСЯ ВИЩЕ**'
      ],
      'name': 'hh_char_hh_det',
      'type': 'begin_repeat',
      '$kuid': 'MmF6uPAtx',
      'label': [
        '3.2 HH Members',
        '3.2  Члени домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_hh_det',
      'relevant': '${ben_det_hh_size} !=\'\'',
      'required': false,
      '$autoname': 'hh_char_hh_det',
      'appearance': 'field-list',
      'repeat_count': '${ben_det_hh_size}'
    },
    {
      'name': 'hh_chart_note_resp',
      'type': 'note',
      '$kuid': 'Q019nyVJ0',
      'label': [
        '**Should be respondant**',
        '**Має бути отримувачем допомоги**'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_chart_note_resp',
      'relevant': 'position(..) = 1',
      'required': false,
      '$autoname': 'hh_chart_note_resp'
    },
    {
      'name': 'hh_char_tax_id_yn',
      'type': 'select_one',
      '$kuid': 'rx0mQo8Su',
      'label': [
        'Have individual tax number (TIN)?',
        'Чи має член домогосподарства індивідуальний податковий номер (ІПН)?'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_tax_id_yn',
      'default': 'yes',
      'required': true,
      '$autoname': 'hh_char_tax_id_yn',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'head_tax_id',
      'type': 'calculate',
      '$kuid': 'ZJPedlptj',
      'label': [
        'Individual tax number respondant',
        'Ідентифікаційний номер отримувача допомоги'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/head_tax_id',
      'required': false,
      '$autoname': 'head_tax_id',
      'calculation': '${cal_head_tax}'
    },
    {
      'hint': [
        'The TIN contains 10 digits',
        'ІПН містить 10 цифр'
      ],
      'name': 'hh_char_tax_id_num',
      'type': 'text',
      '$kuid': 'LrsXGptM1',
      'label': [
        'Individual tax number',
        'Ідентифікаційний номер (ІПН) бенефіціара'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_tax_id_num',
      'relevant': 'selected(${hh_char_tax_id_yn},\'yes\')',
      'required': true,
      '$autoname': 'hh_char_tax_id_num',
      'appearance': 'numbers',
      'constraint': 'regex(., \'^[0-9]{10}$\') and (${taxid_weightedsum} - ${taxid_roundedsum} = substr(${hh_char_tax_id_num}, 9, 10) or ${taxid_weightedsum} - ${taxid_roundedsum} - 10 = substr(${hh_char_tax_id_num}, 9, 10))',
      'constraint_message': [
        'Invalid Tax ID',
        'Недійсний податковий номер'
      ]
    },
    {
      'name': 'hh_char_date_birth',
      'type': 'date',
      '$kuid': 'utovmMecV',
      'label': [
        'Date of birth',
        'Дата народження члена домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_date_birth',
      'required': false,
      '$autoname': 'hh_char_date_birth'
    },
    {
      'name': 'taxid_weightedsum',
      'type': 'calculate',
      '$kuid': 'R0z5xAuyd',
      '$xpath': 'hh_char/hh_char_hh_det/taxid_weightedsum',
      'required': false,
      '$autoname': 'taxid_weightedsum',
      'calculation': 'substr(${hh_char_tax_id_num}, 0, 1) * (-1) + substr(${hh_char_tax_id_num}, 1, 2) * 5 + substr(${hh_char_tax_id_num}, 2, 3) * 7 + substr(${hh_char_tax_id_num}, 3, 4) * 9 + substr(${hh_char_tax_id_num}, 4, 5) * 4 + substr(${hh_char_tax_id_num}, 5, 6) * 6 + substr(${hh_char_tax_id_num}, 6, 7) * 10 + substr(${hh_char_tax_id_num}, 7, 8) * 5 + substr(${hh_char_tax_id_num}, 8, 9) * 7 + substr(${hh_char_tax_id_num}, 9, 10) * 0'
    },
    {
      'name': 'taxid_roundedsum',
      'type': 'calculate',
      '$kuid': 'SNfmp7wAm',
      '$xpath': 'hh_char/hh_char_hh_det/taxid_roundedsum',
      'required': false,
      '$autoname': 'taxid_roundedsum',
      'calculation': '(${taxid_weightedsum} div 11 - ((${taxid_weightedsum} div 11) mod 1)) * 11'
    },
    {
      'name': 'hh_char_hh_det_gender',
      'type': 'select_one',
      '$kuid': 'io1Usedgu',
      'label': [
        'Gender',
        'Будь ласка, вкажіть СТАТЬ члена домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_hh_det_gender',
      'required': true,
      '$autoname': 'hh_char_hh_det_gender',
      'select_from_list_name': 'gender'
    },
    {
      'name': 'hh_char_hh_det_age',
      'type': 'integer',
      '$kuid': 'ETZJBECch',
      'label': [
        'Age',
        'ВІК члена домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_hh_det_age',
      'required': false,
      '$autoname': 'hh_char_hh_det_age',
      'calculation': 'if(${hh_char_date_birth} != \'\', int((${date} - ${hh_char_date_birth}) div 365.25), \'\')'
    },
    {
      'name': 'hh_char_student',
      'type': 'select_one',
      '$kuid': 'HplLIeozh',
      'label': [
        'Are you a student?',
        'Чи ви студент?'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_student',
      'relevant': '${hh_char_hh_det_age} >17 and ${hh_char_hh_det_age} <23',
      'required': false,
      '$autoname': 'hh_char_student',
      'select_from_list_name': 'yn'
    },
    {
      'hint': [
        'Please read all options',
        'Будь ласка, прочитайте всі варіанти'
      ],
      'name': 'hh_char_hh_det_dis_select',
      'type': 'select_multiple',
      '$kuid': 'SlUkWpxf3',
      'label': [
        'Member Characteristics',
        'Будь ласка, оберіть будь-який з наведених нижче пунктів, які стосуються члена вашого домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_hh_det_dis_select',
      'required': false,
      '$autoname': 'hh_char_hh_det_dis_select',
      'constraint': 'not(selected(.,\'diff_none\') and count-selected(.)>1)',
      'constraint_message': [
        'Cannot have these options checked together',
        'Ці параметри не можна перевіряти разом'
      ],
      'select_from_list_name': 'dis'
    },
    {
      'name': 'hh_char_hh_det_dis_level',
      'type': 'select_one',
      '$kuid': 'AWOLjcwOk',
      'label': [
        'Difficulty Level of Member Characteristics',
        'Який рівень складності обраних варіантів відповідей на попередні запитання?'
      ],
      '$xpath': 'hh_char/hh_char_hh_det/hh_char_hh_det_dis_level',
      'relevant': 'not(selected(${hh_char_hh_det_dis_select}, \'diff_none\'))',
      'required': false,
      '$autoname': 'hh_char_hh_det_dis_level',
      'select_from_list_name': 'dis_level'
    },
    {
      'name': 'calc_u5',
      'type': 'calculate',
      '$kuid': 'xqxrpVFYo',
      '$xpath': 'hh_char/hh_char_hh_det/calc_u5',
      'required': false,
      '$autoname': 'calc_u5',
      'calculation': 'if(${hh_char_hh_det_age}<5,1,0)'
    },
    {
      'name': 'calc_u18',
      'type': 'calculate',
      '$kuid': 'WgdqHWV3U',
      '$xpath': 'hh_char/hh_char_hh_det/calc_u18',
      'required': false,
      '$autoname': 'calc_u18',
      'calculation': 'if(${hh_char_hh_det_age}<18,1,0)'
    },
    {
      'name': 'calc_o60',
      'type': 'calculate',
      '$kuid': 'POcNk9DZB',
      '$xpath': 'hh_char/hh_char_hh_det/calc_o60',
      'required': false,
      '$autoname': 'calc_o60',
      'calculation': 'if(${hh_char_hh_det_age}>59,1,0)'
    },
    {
      'name': 'calc_ed_age',
      'type': 'calculate',
      '$kuid': 'kJCUtN3fU',
      '$xpath': 'hh_char/hh_char_hh_det/calc_ed_age',
      'required': false,
      '$autoname': 'calc_ed_age',
      'calculation': 'if(${hh_char_hh_det_age} > 5 and ${hh_char_hh_det_age} < 18,1,0)'
    },
    {
      'name': 'calc_baby_age',
      'type': 'calculate',
      '$kuid': 'Pke2nbYHd',
      '$xpath': 'hh_char/hh_char_hh_det/calc_baby_age',
      'required': false,
      '$autoname': 'calc_baby_age',
      'calculation': 'if(${hh_char_hh_det_age} < 3, 1, 0)'
    },
    {
      'name': 'calc_preg',
      'type': 'calculate',
      '$kuid': 'TfpNT9Dwa',
      '$xpath': 'hh_char/hh_char_hh_det/calc_preg',
      'required': false,
      '$autoname': 'calc_preg',
      'calculation': 'if(${hh_char_hh_det_gender} = \'female\' and ${hh_char_hh_det_age}>15 and ${hh_char_hh_det_age}<46,1,0)'
    },
    {
      'name': 'calc_det_dis_level',
      'type': 'calculate',
      '$kuid': 'AtkV2VWzw',
      '$xpath': 'hh_char/hh_char_hh_det/calc_det_dis_level',
      'required': false,
      '$autoname': 'calc_det_dis_level',
      'calculation': 'if(selected(${hh_char_hh_det_dis_level},\'one\') or selected(${hh_char_hh_det_dis_level},\'two\') or selected(${hh_char_hh_det_dis_level},\'fri\'),1,0)'
    },
    {
      'name': 'cal_student',
      'type': 'calculate',
      '$kuid': 'WBqQEuet5',
      '$xpath': 'hh_char/hh_char_hh_det/cal_student',
      'required': false,
      '$autoname': 'cal_student',
      'calculation': 'if(selected(${hh_char_student},\'yes\'),1,0)'
    },
    {
      'name': 'cal_scoring_difficulty_level',
      'type': 'calculate',
      '$kuid': 'D7hbggchV',
      '$xpath': 'hh_char/hh_char_hh_det/cal_scoring_difficulty_level',
      'required': false,
      '$autoname': 'cal_scoring_difficulty_level',
      'calculation': 'if(selected(${hh_char_hh_det_dis_level},\'one\'),1, if(selected(${hh_char_hh_det_dis_level},\'two\'),2, if(selected(${hh_char_hh_det_dis_level},\'fri\'),3,0)))'
    },
    {
      'type': 'end_repeat',
      '$kuid': 'tJEbH7KMF'
    },
    {
      'name': 'hh_char_chh',
      'type': 'note',
      '$kuid': 'GaSRBI90P',
      'label': [
        'This is a child headed household (high risk protection case), please refer immediately to a DRC Protection colleague and complete internal referral form.',
        'Це домогосподарство, яке очолює дитина (ситуація з високим рівнем ризику у сфері соціального захисту), будь ласка, негайно зверніться до колеги з відділу соцыально-правового захисту ДРБ та заповніть внутрішню форму перенаправлення .'
      ],
      '$xpath': 'hh_char/hh_char_chh',
      'relevant': 'indexed-repeat(${hh_char_hh_det_age},${hh_char_hh_det} ,1) <18',
      'required': false,
      '$autoname': 'hh_char_chh'
    },
    {
      'name': 'calc_tot_baby_age',
      'type': 'calculate',
      '$kuid': 'NAfSk52jf',
      '$xpath': 'hh_char/calc_tot_baby_age',
      'required': false,
      '$autoname': 'calc_tot_baby_age',
      'calculation': 'sum(${calc_baby_age})'
    },
    {
      'name': 'calc_tot_calc_u5',
      'type': 'calculate',
      '$kuid': 'Div3S4xYK',
      '$xpath': 'hh_char/calc_tot_calc_u5',
      'required': false,
      '$autoname': 'calc_tot_calc_u5',
      'calculation': 'sum(${calc_u5})'
    },
    {
      'name': 'calc_tot_chi',
      'type': 'calculate',
      '$kuid': 'jLtHR9XEe',
      '$xpath': 'hh_char/calc_tot_chi',
      'required': false,
      '$autoname': 'calc_tot_chi',
      'calculation': 'sum(${calc_u18}) + (if(${hh_char_res_age}<18,1,0)) + (if(${hh_char_hhh_age}<18,1,0))'
    },
    {
      'name': 'calc_tot_ed_age',
      'type': 'calculate',
      '$kuid': 'bPBJn4Phk',
      '$xpath': 'hh_char/calc_tot_ed_age',
      'required': false,
      '$autoname': 'calc_tot_ed_age',
      'calculation': 'sum(${calc_ed_age}) + (if((${hh_char_res_age}>5 and ${hh_char_res_age}<18),1,0)) + (if((${hh_char_hhh_age}>5 and ${hh_char_hhh_age}<18),1,0))'
    },
    {
      'name': 'calc_tot_eld',
      'type': 'calculate',
      '$kuid': 'pZXLIBNgE',
      '$xpath': 'hh_char/calc_tot_eld',
      'required': false,
      '$autoname': 'calc_tot_eld',
      'calculation': 'sum(${calc_o60}) + (if(${hh_char_res_age}>59,1,0)) + (if(${hh_char_hhh_age}>59,1,0))'
    },
    {
      'name': 'calc_tot_student',
      'type': 'calculate',
      '$kuid': '2F7KdZvMY',
      '$xpath': 'hh_char/calc_tot_student',
      'required': false,
      '$autoname': 'calc_tot_student',
      'calculation': 'sum(${cal_student})'
    },
    {
      'name': 'cal_tot_scoring_difficulty_level',
      'type': 'calculate',
      '$kuid': 'ULcvAMVF0',
      '$xpath': 'hh_char/cal_tot_scoring_difficulty_level',
      'required': false,
      '$autoname': 'cal_tot_scoring_difficulty_level',
      'calculation': 'sum(${cal_scoring_difficulty_level})'
    },
    {
      'name': 'hh_char_dis_note',
      'type': 'note',
      '$kuid': 'ZGFYq0yo6',
      'label': [
        '**3.4 Activities Difficulty (Members over 5)**',
        '**3.4 Нижче наведені питання стосуються труднощів, з якими Ви або члени Вашого домогосподарства можете зіткнутися під час виконання певних дій. Ці запитання стосуються лише членів домогосподарства віком понад 5 років.**'
      ],
      '$xpath': 'hh_char/hh_char_dis_note',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_dis_note'
    },
    {
      'hint': [
        'Please read all options',
        'Translation Missing'
      ],
      'name': 'hh_char_dis_select',
      'type': 'select_multiple',
      '$kuid': 'PABfXdVd8',
      'label': [
        '3.4.1 Activities Difficulty',
        '3.4.1 Будь ласка, оберіть будь-який з наведених нижче пунктів, які стосуються вас або члена вашого домогосподарства'
      ],
      '$xpath': 'hh_char/hh_char_dis_select',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_dis_select',
      'constraint': 'not(selected(.,\'diff_none\') and count-selected(.)>1)',
      'constraint_message': [
        'None of the above\' option may not be slected alongisde other options',
        'Варіант "жоден з вищезазначених" не може бути обраний поряд з іншими варіантами'
      ],
      'select_from_list_name': 'dis'
    },
    {
      'hint': [
        'In instances wher more than one person in the household ay have these issues, only refer to the most severe case.',
        'У випадках, коли більше ніж у однієї людини в домогосподарстві можуть виникати ці проблеми, зазначайте лише найсерйозніший випадок.'
      ],
      'name': 'hh_char_dis_level',
      'type': 'select_one',
      '$kuid': 'gUeVv13L2',
      'label': [
        '3.4.2 Difficulty Level of Activities',
        '3.4.2 Який рівень складності обраних варіантів відповідей на попередні запитання?'
      ],
      '$xpath': 'hh_char/hh_char_dis_level',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'hh_char_dis_level',
      'appearance': 'quick',
      'select_from_list_name': 'dis_level'
    },
    {
      'name': 'calc_dis_level',
      'type': 'calculate',
      '$kuid': 'eMh1Abun3',
      '$xpath': 'hh_char/calc_dis_level',
      'required': false,
      '$autoname': 'calc_dis_level',
      'calculation': 'if(selected(${hh_char_dis_level},\'one\') or selected(${hh_char_dis_level},\'two\') or selected(${hh_char_dis_level},\'fri\') or ${calc_hhh_res_dis_level} >0 or sum(${calc_det_dis_level}) >0,1,0)'
    },
    {
      'name': 'receive_financial_assistance',
      'type': 'select_one',
      '$kuid': 'qKMzLv2C3',
      'label': [
        '3.5 Financial Assistance from Government or Agencies?',
        '3.5 Чи отримуєте Ви або хтось із членів Вашого домогосподарства фінансову допомогу від держави або інших установ?'
      ],
      '$xpath': 'hh_char/receive_financial_assistance',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'receive_financial_assistance',
      'appearance': 'quick',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'households_damaged',
      'type': 'select_one',
      '$kuid': 'awaHbA54n',
      'label': [
        '3.6 Housing Damage from Hostilities',
        '3.6 Домогосподарства з пошкодженим (включаючи навколишню інфраструктуру, яка була пошкоджена і вплинула на домогосподарство, наприклад, зруйновані водопроводи) або зруйнованим житлом внаслідок бойових дій'
      ],
      '$xpath': 'hh_char/households_damaged',
      'relevant': 'selected(${donor_nfi},\'ukr000347_danida2\') and selected(${back_office},\'chj\')',
      'required': true,
      '$autoname': 'households_damaged',
      'select_from_list_name': 'yn'
    },
    {
      'type': 'end_group',
      '$kuid': 'CtkH83Wvr'
    },
    {
      'name': 'nfi',
      'type': 'begin_group',
      '$kuid': 'Ga6iMw7W6',
      'label': [
        '###4. NFI Needs',
        '###4. Підтримка наборами NFI'
      ],
      '$xpath': 'nfi',
      'relevant': 'selected(${back_consent},\'yes\') and selected(${back_prog_type}, \'nfi\') and ${ben_det_hh_size}>0',
      'required': false,
      '$autoname': 'nfi',
      'appearance': 'field-list'
    },
    {
      'name': 'nfi_fam',
      'type': 'calculate',
      '$kuid': 'M6vPw9qcx',
      '$xpath': 'nfi/nfi_fam',
      'required': false,
      '$autoname': 'nfi_fam',
      'calculation': 'if(${ben_det_hh_size}<=3,1, if(${ben_det_hh_size}>3 and ${ben_det_hh_size}<=6,2, if(${ben_det_hh_size}>6,3,0)))'
    },
    {
      'hint': [
        'This is based on the vulnerability criteria. **Do not read this out to the Household**.',
        'Базується на критеріях вразливості. **не зачитуйте це домогосподарству.**'
      ],
      'name': 'eligibility_summary_nfi',
      'type': 'note',
      '$kuid': '1CmDyhPpr',
      'label': [
        '**Based on minimum standards this house is eligible for:**',
        'Виходячи з наведених вище відповідей, домогосподарство має право на наступне:'
      ],
      '$xpath': 'nfi/eligibility_summary_nfi',
      'required': false,
      '$autoname': 'eligibility_summary_nfi'
    },
    {
      'name': 'nfi_fam_hy',
      'type': 'note',
      '$kuid': 'OzVa6rbFX',
      'label': [
        '**${nfi_fam}** Family Hygiene Kit (HKMV)',
        '**${nfi_fam}** Сімейний гігієнічний набір (HKMV)'
      ],
      '$xpath': 'nfi/nfi_fam_hy',
      'required': false,
      '$autoname': 'nfi_fam_hy'
    },
    {
      'name': 'nfi_fam_nfi',
      'type': 'note',
      '$kuid': '9iXEIrRBf',
      'label': [
        '**${nfi_fam}** Family NFI Kit (NFKF + KS)',
        '**${nfi_fam}** Сімейний непродовольчий набір (NFKF + KS)'
      ],
      '$xpath': 'nfi/nfi_fam_nfi',
      'required': false,
      '$autoname': 'nfi_fam_nfi'
    },
    {
      'name': 'ihk_nfi',
      'type': 'note',
      '$kuid': 'Yd5CyA3Ar',
      'label': [
        '**1** Baby Hygiene Kit (BK)',
        '**1** Дитячий Гігієнічний набір (BK)'
      ],
      '$xpath': 'nfi/ihk_nfi',
      'relevant': 'selected(${back_prog_type}, \'ihk\') and selected(${ben_det_res_stat}, \'idp\') and sum(${calc_baby_age}) > 0 and selected(${back_office},\'lwo\')',
      'required': false,
      '$autoname': 'ihk_nfi'
    },
    {
      'name': 'iwk_nfi',
      'type': 'note',
      '$kuid': 'KAvZpHR6V',
      'label': [
        '**1** Baby Winter Kit (WKB)',
        '**1** Дитячий Зимовий набір'
      ],
      '$xpath': 'nfi/iwk_nfi',
      'relevant': 'selected(${back_prog_type}, \'iwk\') and selected(${back_office},\'lwo\') and selected(${ben_det_res_stat}, \'idp\') and sum(${calc_baby_age}) > 0',
      'required': false,
      '$autoname': 'iwk_nfi'
    },
    {
      'name': 'fnk_ks_last_6months',
      'type': 'select_one',
      '$kuid': 'Sdf8KA5EB',
      'label': [
        'Household has received assistance (FAMILY NFI KIT/KITCHEN SET) in the last 6 months to cover household needs',
        'Домогосподарство отримувало допомогу (СІМЕЙНИЙ НАБІР/КУХОННИЙ НАБІР) протягом останніх 6 місяців для покриття побутових потреб'
      ],
      '$xpath': 'nfi/fnk_ks_last_6months',
      'relevant': 'selected(${donor_nfi},\'ukr000347_danida2\') and selected(${back_office},\'chj\')',
      'required': true,
      '$autoname': 'fnk_ks_last_6months',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'family_need_fnk_ks',
      'type': 'select_one',
      '$kuid': 'VDZLMwsls',
      'label': [
        'Does your family need a Family kit/Kitchen set?',
        'Вашій родині потрібен Сімейний набір/Кухонний набір?'
      ],
      '$xpath': 'nfi/family_need_fnk_ks',
      'relevant': 'selected(${donor_nfi},\'ukr000347_danida2\') and selected(${back_office},\'chj\') and selected(${fnk_ks_last_6months},\'no\')',
      'required': true,
      '$autoname': 'family_need_fnk_ks',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'nfi_kit_disitrbuted',
      'type': 'select_one',
      '$kuid': '6uKFnQ6Q9',
      'label': [
        'Did you distribute the NFI Kits at the point of registration',
        'Чи видавали Ви комплекти NFI на місці реєстрації?'
      ],
      '$xpath': 'nfi/nfi_kit_disitrbuted',
      'required': true,
      '$autoname': 'nfi_kit_disitrbuted',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'begin_group_LF3jyHrmq',
      'type': 'begin_group',
      '$kuid': 'asdHBcVEG',
      '$xpath': 'nfi/begin_group_LF3jyHrmq',
      'relevant': 'selected(${nfi_kit_disitrbuted}, \'yes\')',
      'required': false,
      '$autoname': 'begin_group_LF3jyHrmq',
      'appearance': 'field-list'
    },
    {
      'hint': [
        'HKF, HKMV, NFKF, BK, WKB1-4',
        'HKF, HKMV, NFKF, BK, WKB1-4'
      ],
      'name': 'nfi_dist_label',
      'type': 'note',
      '$kuid': 'mif6Np9W8',
      'label': [
        '**How many of the following kits have been distributed?**',
        '**Скільки комплектів було роздано?**'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_label',
      'required': false,
      '$autoname': 'nfi_dist_label'
    },
    {
      'name': 'nfi_dist_hkf',
      'type': 'integer',
      '$kuid': 'jmV8JYKIU',
      'label': [
        'Family Hygiene Kits (HKF)',
        'Сімейні гігієнічні набори (HKF)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_hkf',
      'default': '0',
      'required': false,
      '$autoname': 'nfi_dist_hkf'
    },
    {
      'name': 'nfi_dist_hkf_donor',
      'type': 'select_one',
      '$kuid': 'ERmaUyswK',
      'label': [
        'Donor Family Hygiene Kits (HKF)',
        'Донор сімейних гігієнічні набори (HKF)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_hkf_donor',
      'relevant': '${nfi_dist_hkf} >0',
      'required': false,
      '$autoname': 'nfi_dist_hkf_donor',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'nfi_dist_hkmv',
      'type': 'integer',
      '$kuid': 'R0pIz5m2l',
      'label': [
        'Family Hygiene Kits for IDPs on the Move distributed (HKMV)',
        'Роздача сімейних гігієнічних наборів для ВПО, що знаходяться в русі (НКMV)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_hkmv',
      'default': '0',
      'required': true,
      '$autoname': 'nfi_dist_hkmv'
    },
    {
      'name': 'nfi_dist_hkmv_donor',
      'type': 'select_one',
      '$kuid': 'ueV9YTPoJ',
      'label': [
        'Donor Family Hygiene Kits for IDPs on the Move distributed (HKMV)',
        'Донор сімейних гігієнічних наборів для ВПО, що знаходяться в русі (НКMV)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_hkmv_donor',
      'relevant': '${nfi_dist_hkmv} >0',
      'required': false,
      '$autoname': 'nfi_dist_hkmv_donor',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'nfi_dist_hkf_001',
      'type': 'integer',
      '$kuid': 'ACglfDTPA',
      'label': [
        'Family NFI kits distributed (NFKF + KS)',
        'Роздача сімейних наборів (NFKF + KS)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_hkf_001',
      'default': '0',
      'required': true,
      '$autoname': 'nfi_dist_hkf_001'
    },
    {
      'name': 'nfi_dist_hkf_001_donor',
      'type': 'select_one',
      '$kuid': 'piM7UR7yv',
      'label': [
        'Donor Family NFI kits distributed (NFKF + KS)',
        'Донор сімейних наборів (NFKF + KS)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_hkf_001_donor',
      'relevant': '${nfi_dist_hkf_001} >0',
      'required': false,
      '$autoname': 'nfi_dist_hkf_001_donor',
      'select_from_list_name': 'donor'
    },
    {
      'name': 'nfi_dist_bk',
      'type': 'integer',
      '$kuid': 'R4L4jPrgl',
      'label': [
        'Baby Kits distributed (BK)',
        'Роздача дитячих наборів (BK)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_bk',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000309_okf\') and selected(${back_office},\'lwo\')',
      'required': true,
      '$autoname': 'nfi_dist_bk'
    },
    {
      'name': 'nfi_dist_wkb1',
      'type': 'integer',
      '$kuid': 'RLt7CVB8K',
      'label': [
        'Baby Winter Kits S distributed (WKB1)',
        'Роздача дитячих зимових наборів в розмірі S (WKB1)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_wkb1',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000309_okf\') and selected(${back_office},\'lwo\')',
      'required': true,
      '$autoname': 'nfi_dist_wkb1'
    },
    {
      'name': 'nfi_dist_wkb2',
      'type': 'integer',
      '$kuid': 'fRdcu8nAn',
      'label': [
        'Baby Winter Kits M distributed (WKB2)',
        'Роздача дитячих зимових наборів в розмірі М (WKB2)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_wkb2',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000309_okf\') and selected(${back_office},\'lwo\')',
      'required': true,
      '$autoname': 'nfi_dist_wkb2'
    },
    {
      'name': 'nfi_dist_wkb3',
      'type': 'integer',
      '$kuid': 'pIIN1pcOA',
      'label': [
        'Baby Winter Kits L distributed (WKB3)',
        'Роздача дитячих зимових наборів в розмірі L (WKB3)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_wkb3',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000309_okf\') and selected(${back_office},\'lwo\')',
      'required': true,
      '$autoname': 'nfi_dist_wkb3'
    },
    {
      'name': 'nfi_dist_wkb4',
      'type': 'integer',
      '$kuid': 'IoUgFsMSK',
      'label': [
        'Baby Winter Kits XL distributed (WKB4)',
        'Роздача дитячих зимових наборів в розмірі XL (WKB4)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_dist_wkb4',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000309_okf\') and selected(${back_office},\'lwo\')',
      'required': true,
      '$autoname': 'nfi_dist_wkb4'
    },
    {
      'name': 'nfi_kit_cc',
      'type': 'integer',
      '$kuid': 'ktjUx0vom',
      'label': [
        'NFI Kit for Collective Center distributed',
        'Роздача наборів для колективного центру'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_kit_cc',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000314_uhf4\') and selected(${back_office},\'nlv\')',
      'required': true,
      '$autoname': 'nfi_kit_cc'
    },
    {
      'name': 'nfi_bed',
      'type': 'integer',
      '$kuid': 'l2KN5RMbw',
      'label': [
        'Folding Beds distributed',
        'Роздача розкладних ліжок'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_bed',
      'default': '0',
      'relevant': 'selected(${donor_nfi},\'ukr000314_uhf4\') and selected(${back_office},\'nlv\')',
      'required': true,
      '$autoname': 'nfi_bed'
    },
    {
      'file': '0',
      'name': 'nfi_fks',
      'type': 'integer',
      '$kuid': 'PHzsAiu74',
      'label': [
        'Family kitchen set (FKS)',
        'Сімейний набір кухонного приладдя (FKS)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/nfi_fks',
      'default': '0',
      'relevant': 'selected(${nfi_kit_disitrbuted}, \'yes\') and selected(${back_office},\'nlv\') and selected(${donor_nfi},\'ukr000270_pf\')',
      'required': false,
      '$autoname': 'nfi_fks'
    },
    {
      'file': 'ukr000270_pooledfunds',
      'name': 'donor_nfi_fks',
      'type': 'select_one',
      '$kuid': 'WycDBew7H',
      'label': [
        'Donor Family kitchen set (FKS)',
        'Донор сімейних наборів кухонного приладдя (FKS)'
      ],
      '$xpath': 'nfi/begin_group_LF3jyHrmq/donor_nfi_fks',
      'relevant': 'selected(${nfi_kit_disitrbuted}, \'yes\')  and selected(${donor_nfi},\'ukr000270_pf\') and selected(${back_office},\'nlv\') and ${nfi_fks} > 0',
      'required': false,
      '$autoname': 'donor_nfi_fks',
      'select_from_list_name': 'donor'
    },
    {
      'type': 'end_group',
      '$kuid': 'IIXKIDF5S'
    },
    {
      'type': 'end_group',
      '$kuid': 'n1jbpJ7tu'
    },
    {
      'name': 'Section_4a_ESK',
      'type': 'begin_group',
      '$kuid': '4HtfzN8xh',
      'label': [
        '####4.a. ESK',
        '####4.a. ESK'
      ],
      '$xpath': 'Section_4a_ESK',
      'relevant': 'selected(${back_consent}, \'yes\') and selected(${back_prog_type}, \'esk\')',
      'required': false,
      '$autoname': 'Section_4a_ESK',
      'appearance': 'field-list'
    },
    {
      'name': 'shelter_damage',
      'type': 'select_one',
      '$kuid': 'QaQD8LOWD',
      'label': [
        '4.1 Is there damage to your current shelter?',
        'Чи пошкоджено ваше теперішнє житло?'
      ],
      '$xpath': 'Section_4a_ESK/shelter_damage',
      'required': true,
      '$autoname': 'shelter_damage',
      'select_from_list_name': 'shelter_damage'
    },
    {
      'name': 'note_heavy_damage',
      'type': 'note',
      '$kuid': 'eFAYyNG24',
      'label': [
        'If there is heavy damage to this property, please refer to the shelter team immediately',
        'Якщо цей будинок має серйозні пошкодження, негайно зверніться до команди шелтер'
      ],
      '$xpath': 'Section_4a_ESK/note_heavy_damage',
      'relevant': 'selected(${shelter_damage},\'heavy_damage\')',
      'required': false,
      '$autoname': 'note_heavy_damage'
    },
    {
      'hint': [
        'if the individual cannot estimate, enter 0 and provide Household with one kit',
        'якщо людина не може підрахувати, позначте 0 і видайте домогосподарству один набір'
      ],
      'name': 'estimate_sqm_damage',
      'type': 'integer',
      '$kuid': 'fitwfyDKg',
      'label': [
        '4.2 Can you estimate the square meter or roof or window that is damaged?',
        'Чи можете ви підрахувати площу даху чи вікон, які пошкоджено?'
      ],
      '$xpath': 'Section_4a_ESK/estimate_sqm_damage',
      'relevant': 'selected(${shelter_damage},\'minor_damage\')',
      'required': true,
      '$autoname': 'estimate_sqm_damage'
    },
    {
      'hint': [
        '*Do not read this out to the Household*',
        '*не зачитуйте це домогосподарству*'
      ],
      'name': 'eligibility_summary_esk',
      'type': 'note',
      '$kuid': 'XNrlkseH5',
      'label': [
        'Based upon the answers above, the household is eligible for the following:',
        'Виходячи з наведених вище відповідей, домогосподарство має право на наступне:'
      ],
      '$xpath': 'Section_4a_ESK/eligibility_summary_esk',
      'relevant': 'selected(${shelter_damage},\'minor_damage\')',
      'required': false,
      '$autoname': 'eligibility_summary_esk'
    },
    {
      'hint': [
        'This is based on the HH size and square meters of shelter damage',
        'Це базується на розмірі домогосподарства та площі пошкодженого житла'
      ],
      'name': 'note_eligible_1',
      'type': 'note',
      '$kuid': 'D3dV75x5Z',
      'label': [
        'This household is eligble for One Emergency Shelter kit',
        'Це домогосподарство має право на один набір для домогосподарств'
      ],
      '$xpath': 'Section_4a_ESK/note_eligible_1',
      'relevant': 'selected(${shelter_damage},\'minor_damage\') and ${estimate_sqm_damage}<15',
      'required': false,
      '$autoname': 'note_eligible_1'
    },
    {
      'hint': [
        'This is based on the HH size and square meters of shelter damage',
        'Це базується на розмірі домогосподарства та площі пошкодженого житла'
      ],
      'name': 'note_eligible_2',
      'type': 'note',
      '$kuid': 'SThd6cX30',
      'label': [
        'This household is eligble for Two Emergency Shelter Kits',
        'Це домогосподарство має право на два набори для домогосподарств'
      ],
      '$xpath': 'Section_4a_ESK/note_eligible_2',
      'relevant': 'selected(${shelter_damage},\'minor_damage\') and ${estimate_sqm_damage}>=15',
      'required': false,
      '$autoname': 'note_eligible_2'
    },
    {
      'name': 'cal_numb_esk_kit',
      'type': 'calculate',
      '$kuid': 'MhHcZ3p1P',
      'label': [
        'Number of kits esk',
        'Кількість наборів esk'
      ],
      '$xpath': 'Section_4a_ESK/cal_numb_esk_kit',
      'required': false,
      '$autoname': 'cal_numb_esk_kit',
      'calculation': 'if(${estimate_sqm_damage}>=15,2,1)'
    },
    {
      'name': 'add_photo_esk1',
      'type': 'image',
      '$kuid': '1d2kQyKqx',
      'label': [
        'Additional photos of esk activity',
        'Додаткові фотографії діяльності esk'
      ],
      '$xpath': 'Section_4a_ESK/add_photo_esk1',
      'required': false,
      '$autoname': 'add_photo_esk1'
    },
    {
      'name': 'add_photo_esk2',
      'type': 'image',
      '$kuid': 'Si1PyRQ0q',
      'label': [
        'Additional photos of esk activity',
        'Додаткові фотографії діяльності esk'
      ],
      '$xpath': 'Section_4a_ESK/add_photo_esk2',
      'relevant': 'not(selected(${add_photo_esk1},\'\'))',
      'required': false,
      '$autoname': 'add_photo_esk2'
    },
    {
      'name': 'add_photo_esk3',
      'type': 'image',
      '$kuid': 'nbMinRML1',
      'label': [
        'Additional photos of esk activity',
        'Додаткові фотографії діяльності esk'
      ],
      '$xpath': 'Section_4a_ESK/add_photo_esk3',
      'relevant': 'not(selected(${add_photo_esk2},\'\'))',
      'required': false,
      '$autoname': 'add_photo_esk3'
    },
    {
      'type': 'end_group',
      '$kuid': 'hm4fHpksP'
    },
    {
      'name': 'casf_utilities_fuel',
      'type': 'begin_group',
      '$kuid': 'NykyK44oJ',
      'label': [
        'Section 4.b. Cash for Utilities or Cash for Fuel',
        'Section 4.b. Cash for Utilities or Cash for Fuel'
      ],
      '$xpath': 'casf_utilities_fuel',
      'relevant': 'selected(${back_consent}, \'yes\') and (selected(${back_prog_type}, \'csf\') or selected(${back_prog_type}, \'cfu\'))',
      'required': false,
      '$autoname': 'casf_utilities_fuel',
      'appearance': 'field-list'
    },
    {
      'name': 'current_gov_assist_cff',
      'type': 'select_one',
      '$kuid': 'NC8YpMDIu',
      'label': [
        'Are you currently receiving or expecting to receive financial assistance to cover your fuel/utilities payment needs?',
        'Чи отримуєте ви зараз або очікуєте отримати фінансову допомогу для покриття ваших потреб в оплаті палива/комунальних послуг?'
      ],
      '$xpath': 'casf_utilities_fuel/current_gov_assist_cff',
      'required': true,
      '$autoname': 'current_gov_assist_cff',
      'select_from_list_name': 'current_gov_assist_cff'
    },
    {
      'name': 'gap_assistance_received',
      'type': 'integer',
      '$kuid': 'Cydt0G44D',
      'label': [
        'What is the gap (UAH) between assistance received/ expected to receive and the amount to cover needs?',
        'Яка різниця ( у грн) між отриманою/очікуваною допомогою та сумою, необхідною для покриття потреб?'
      ],
      '$xpath': 'casf_utilities_fuel/gap_assistance_received',
      'relevant': 'selected(${current_gov_assist_cff}, \'yes_but\')',
      'required': true,
      '$autoname': 'gap_assistance_received'
    },
    {
      'name': 'type_property_living',
      'type': 'select_one',
      '$kuid': 'rcp3ERxSv',
      'label': [
        'What type of property are you living in?',
        'В якому стані житла ви живете?'
      ],
      '$xpath': 'casf_utilities_fuel/type_property_living',
      'required': false,
      '$autoname': 'type_property_living',
      'select_from_list_name': 'type_property_living'
    },
    {
      'name': 'utilities_fuel',
      'type': 'select_one',
      '$kuid': 'sRQ9juhXf',
      'label': [
        'This year, what is your primary source of heating (e.g. Piped gas, electric, community heating) or solid fuel (Wood, pellets, charcoal, coal etc)',
        'Яким було ваше основне джерело опалення в цьому році (наприклад, газ, електрика, централізоване опалення) чи від твердого палива (дрова, пелети, деревне вугілля, кам\'яне вугілля тощо)?'
      ],
      '$xpath': 'casf_utilities_fuel/utilities_fuel',
      'relevant': 'selected(${back_prog_type}, \'cfu\')',
      'required': true,
      '$autoname': 'utilities_fuel',
      'choice_filter': 'tag= \'yes\'',
      'select_from_list_name': 'utfu'
    },
    {
      'name': 'utilities_fuel_other',
      'type': 'text',
      '$kuid': 'BFVlLm9Xw',
      'label': [
        'If "Other", please specify',
        'Якщо "Інше", будь ласка, вкажіть'
      ],
      '$xpath': 'casf_utilities_fuel/utilities_fuel_other',
      'relevant': 'selected(${utilities_fuel},\'other\')',
      'required': false,
      '$autoname': 'utilities_fuel_other',
      'appearance': 'multiline'
    },
    {
      'name': 'utilities_fuel_portable_plug_heater',
      'type': 'image',
      '$kuid': 'XoLeMWvQw',
      'label': [
        'Please provide a photo of this portable plug in heater or woodburner',
        'Будь ласка, надайте фото цього портативного обігрівача або дров\'яної печі'
      ],
      '$xpath': 'casf_utilities_fuel/utilities_fuel_portable_plug_heater',
      'relevant': 'selected(${utilities_fuel},\'portable_plug_heater\') or selected(${utilities_fuel},\'fuel\')',
      'required': true,
      '$autoname': 'utilities_fuel_portable_plug_heater'
    },
    {
      'name': 'functioning_fuel_delivery',
      'type': 'select_one',
      '$kuid': 'kkpajmrxN',
      'label': [
        'Is there a functioning fuel delivery/supplier in your area?',
        'Чи є у вашому регіоні функціонуюча доставка/постачальник пального?'
      ],
      '$xpath': 'casf_utilities_fuel/functioning_fuel_delivery',
      'relevant': 'selected(${back_prog_type}, \'csf\')',
      'required': true,
      '$autoname': 'functioning_fuel_delivery',
      'select_from_list_name': 'ynd'
    },
    {
      'name': 'mains_utilities',
      'type': 'select_multiple',
      '$kuid': 'DafvIs5rL',
      'label': [
        'What is your main source of heating from mains utilities?',
        'Яким є ваше основне джерело опалення від комунальних служб?'
      ],
      '$xpath': 'casf_utilities_fuel/mains_utilities',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'mains_utilities',
      'select_from_list_name': 'mains_utilities'
    },
    {
      'name': 'mains_utilities_other',
      'type': 'text',
      '$kuid': 'Zf9E9v9Ng',
      'label': [
        'If "Other", please specify',
        'Якщо "Інше", будь ласка, вкажіть'
      ],
      '$xpath': 'casf_utilities_fuel/mains_utilities_other',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'mains_utilities_other'
    },
    {
      'name': 'mains_fuel',
      'type': 'select_multiple',
      '$kuid': 'm41hud6uv',
      'label': [
        'What is your primary source of solid fuel heating?',
        'Яке ваше основне джерело опалення на твердому паливі?'
      ],
      '$xpath': 'casf_utilities_fuel/mains_fuel',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'mains_fuel',
      'select_from_list_name': 'mains_fuel'
    },
    {
      'name': 'mains_fuel_other',
      'type': 'text',
      '$kuid': 'I9ouPzkaa',
      'label': [
        'If "Other", please specify',
        'Якщо "Інше", будь ласка, вкажіть'
      ],
      '$xpath': 'casf_utilities_fuel/mains_fuel_other',
      'relevant': 'FALSE',
      'required': true,
      '$autoname': 'mains_fuel_other'
    },
    {
      'name': 'cal_scoring_sfu',
      'type': 'calculate',
      '$kuid': 'h2d9wzaQ6',
      'label': [
        'Calculation Scoring System',
        null
      ],
      '$xpath': 'casf_utilities_fuel/cal_scoring_sfu',
      'required': false,
      '$autoname': 'cal_scoring_sfu',
      'calculation': 'if(${ben_det_income} div ${ben_det_hh_size} <= 8000,3,if((${ben_det_income} div ${ben_det_hh_size} >= 8001) and (${ben_det_income} div ${ben_det_hh_size} <= 12000),2,0)) + if(selected(${hh_char_civ_stat},\'single\'),2, if(selected(${hh_char_civ_stat},\'div_sep\'),1, if(selected(${hh_char_civ_stat},\'widow\'),2,0))) + if(selected(${hh_char_preg},\'yes\'),2,0) + if(${calc_tot_student}>0 or ${calc_tot_chi}>0,1,0) + ${cal_tot_scoring_difficulty_level} + if(${calc_tot_eld}>0,3,0) + if((${calc_tot_student} + ${calc_tot_chi})>2,3,0) + if(${calc_tot_calc_u5}>0,3,0)'
    },
    {
      'type': 'end_group',
      '$kuid': 'K7Wif4kSW'
    },
    {
      'name': 'cfr',
      'type': 'begin_group',
      '$kuid': 'd7Kfh7wRF',
      'label': [
        '###5. Cash for Rent',
        '###5. Грошові кошти на оренду'
      ],
      '$xpath': 'cfr',
      'relevant': 'selected(${back_consent}, \'yes\') and selected(${ben_det_res_stat}, \'idp\') and selected(${back_prog_type}, \'cfr\')',
      'required': false,
      '$autoname': 'cfr',
      'appearance': 'field-list'
    },
    {
      'name': 'cfr_curr_accom',
      'type': 'select_one',
      '$kuid': 'WO8oNLn1U',
      'label': [
        '5.1 What is your current accommodation status?',
        '5.1 Який Ваш поточний житловий статус?'
      ],
      '$xpath': 'cfr/cfr_curr_accom',
      'required': true,
      '$autoname': 'cfr_curr_accom',
      'select_from_list_name': 'curr_accom'
    },
    {
      'name': 'cfr_rent_int',
      'type': 'select_one',
      '$kuid': 'dQj7N2281',
      'label': [
        '5.2 Do you intend to continue renting your current accommodation?',
        '5.2 Чи маєте Ви намір продовжувати орендувати своє нинішнє житло?'
      ],
      '$xpath': 'cfr/cfr_rent_int',
      'relevant': 'selected(${cfr_curr_accom},\'rent\')',
      'required': true,
      '$autoname': 'cfr_rent_int',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_rent_stat',
      'type': 'select_one',
      '$kuid': 'GKLU7bA89',
      'label': [
        '5.3 What is the status of your current rental accommodation?',
        '5.3 Який статус вашого поточного орендованого житла?'
      ],
      '$xpath': 'cfr/cfr_rent_stat',
      'relevant': 'selected(${cfr_curr_accom},\'rent\')',
      'required': true,
      '$autoname': 'cfr_rent_stat',
      'select_from_list_name': 'rent_stat'
    },
    {
      'name': 'cfr_accom_int',
      'type': 'select_one',
      '$kuid': 'jnyveZbAu',
      'label': [
        '5.4 What is your future accomodation intentions?',
        '5.4 Які Ваші майбутні наміри щодо житла?'
      ],
      '$xpath': 'cfr/cfr_accom_int',
      'relevant': 'selected(${cfr_curr_accom},\'host\') or selected(${cfr_curr_accom},\'coll_cen\') or selected(${cfr_curr_accom},\'homeless\')',
      'required': true,
      '$autoname': 'cfr_accom_int',
      'select_from_list_name': 'accom_int'
    },
    {
      'name': 'cfr_prev_ass',
      'type': 'select_one',
      '$kuid': 'mh5gGVQek',
      'label': [
        '5.5 Are you currently receiving rent support from another organisation?',
        '5.5 Чи отримуєте Ви зараз підтримку на сплату оренди від іншої організації?'
      ],
      '$xpath': 'cfr/cfr_prev_ass',
      'required': true,
      '$autoname': 'cfr_prev_ass',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond',
      'type': 'begin_group',
      '$kuid': 'Tt6036YsU',
      'label': [
        '####5.6. Accomodation Conditions',
        '####5.6 Житлові умови'
      ],
      '$xpath': 'cfr/cfr_accom_cond',
      'relevant': 'selected(${back_consent}, \'yes\') and selected(${ben_det_res_stat}, \'idp\') and selected(${back_prog_type}, \'cfr\')',
      'required': false,
      '$autoname': 'cfr_accom_cond',
      'appearance': 'field-list'
    },
    {
      'name': 'cfr_accom_cond_occ_rat',
      'type': 'integer',
      '$kuid': 'Sl4RzJNcn',
      'label': [
        '5.6.1 In square metres, what is the total space of your accommodation?',
        '5.6.1 Яка загальна площа Вашого житла у квадратних метрах?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_occ_rat',
      'required': true,
      '$autoname': 'cfr_accom_cond_occ_rat'
    },
    {
      'name': 'cfr_accom_cond_wat_pr',
      'type': 'select_one',
      '$kuid': '1sP7r6XbO',
      'label': [
        '5.6.2 Is your dwelling water proof?',
        '5.6.2 Чи захищене Ваше житло від вологи?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_wat_pr',
      'required': true,
      '$autoname': 'cfr_accom_cond_wat_pr',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond_run_wat',
      'type': 'select_one',
      '$kuid': 'pvFboJeck',
      'label': [
        '5.6.3 Do you have access to running water',
        '5.6.3 Чи є у Вас доступ до проточної води?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_run_wat',
      'required': true,
      '$autoname': 'cfr_accom_cond_run_wat',
      'select_from_list_name': 'serv_reg'
    },
    {
      'name': 'cfr_accom_cond_hot_wat',
      'type': 'select_one',
      '$kuid': 'SL20WpQob',
      'label': [
        '5.6.4 Do you have access to hot water',
        '5.6.4 Чи є у Вас доступ до гарячої води?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_hot_wat',
      'required': true,
      '$autoname': 'cfr_accom_cond_hot_wat',
      'select_from_list_name': 'serv_reg'
    },
    {
      'name': 'cfr_accom_cond_wash',
      'type': 'select_one',
      '$kuid': 'ttvVA0ZaY',
      'label': [
        '5.6.5 Do you have access to adequate washing facilities?',
        '5.6.5 Чи є у вас доступ до здійснення гігієнічних потреб?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_wash',
      'required': true,
      '$autoname': 'cfr_accom_cond_wash',
      'select_from_list_name': 'serv_reg'
    },
    {
      'name': 'cfr_accom_cond_san',
      'type': 'select_one',
      '$kuid': 'xQ2FOeGk8',
      'label': [
        '5.6.6 Do you have access to adequate sanitation facilities?',
        '5.6.6 Чи є у вас доступ до санітарних вузлів?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_san',
      'required': true,
      '$autoname': 'cfr_accom_cond_san',
      'select_from_list_name': 'serv_reg'
    },
    {
      'name': 'cfr_accom_cond_heat',
      'type': 'select_one',
      '$kuid': '4oH0aE4ah',
      'label': [
        '5.6.7 Do you have access to adequate heating?',
        '5.6.7 Чи маєте Ви доступ до належного опалення?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_heat',
      'required': true,
      '$autoname': 'cfr_accom_cond_heat',
      'select_from_list_name': 'serv_reg'
    },
    {
      'name': 'cfr_accom_cond_draft',
      'type': 'select_one',
      '$kuid': '9ZkpmgW61',
      'label': [
        '5.6.8 Does your property have draft proofing?',
        '5.6.8 Чи можлива у Вашому домі герметизація?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_draft',
      'required': true,
      '$autoname': 'cfr_accom_cond_draft',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond_insul',
      'type': 'select_one',
      '$kuid': 'iqqec1VcY',
      'label': [
        '5.6.9 Is your property adequately insulated?',
        '5.6.9 Ваш будинок достатньо ізольований?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_insul',
      'required': true,
      '$autoname': 'cfr_accom_cond_insul',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond_glaz',
      'type': 'select_one',
      '$kuid': 'h3q0qPJgG',
      'label': [
        '5.6.10 Does your property have double-glazed windows?',
        '5.6.10 Чи встановлені у Вашому будинку вікна з подвійним склопакетом?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_glaz',
      'required': true,
      '$autoname': 'cfr_accom_cond_glaz',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond_ten',
      'type': 'select_one',
      '$kuid': 'Xza2tcdff',
      'label': [
        '5.6.11 Does you have formal written agreement of tenancy with your landlord?',
        '5.6.11 Чи укладена у Вас офіційна письмова угода про оренду з орендодавцем?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_ten',
      'required': true,
      '$autoname': 'cfr_accom_cond_ten',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond_lock_doors',
      'type': 'select_one',
      '$kuid': 'WLe25bfPT',
      'label': [
        '5.6.12 Do you have access to external locked doors on your property?',
        '5.6.12  Чи маєте ви доступ до зовнішніх замкнених дверей у вашій власності?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_lock_doors',
      'required': true,
      '$autoname': 'cfr_accom_cond_lock_doors',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'cfr_accom_cond_pri_sp',
      'type': 'select_one',
      '$kuid': '1DdSrzT9Q',
      'label': [
        '5.6.13 Does your houeshold have access to private space (space you don’t share with other households)',
        '5.6.13 Чи є з Вашого домогосподарства доступ до приватного простору (простору, який Ви не ділите з іншими домогосподарствами)?'
      ],
      '$xpath': 'cfr/cfr_accom_cond/cfr_accom_cond_pri_sp',
      'required': true,
      '$autoname': 'cfr_accom_cond_pri_sp',
      'select_from_list_name': 'yn'
    },
    {
      'type': 'end_group',
      '$kuid': '3WWQjPbNh'
    },
    {
      'type': 'end_group',
      '$kuid': 'Zj0yFAL9y'
    },
    {
      'name': 'ass_inc',
      'type': 'begin_group',
      '$kuid': 'ybMGwrY1o',
      'label': [
        '###6. Cash Assistance Inclusion/Exclusion',
        '### 6. Включення/ виключення з програм грошової допомоги'
      ],
      '$xpath': 'ass_inc',
      'relevant': 'selected(${back_consent},\'yes\') and (selected(${back_prog_type}, \'mpca\') or selected(${back_prog_type}, \'cfr\') or selected(${back_prog_type}, \'cfe\') or selected(${back_prog_type}, \'csf\') or selected(${back_prog_type}, \'cfu\'))',
      'required': false,
      '$autoname': 'ass_inc'
    },
    {
      'name': 'ass_inc_note',
      'type': 'note',
      '$kuid': 'ApWDMXGwe',
      'label': [
        '**Based upon your previous answers you will now be informed of your inclusion/exclusion in any cash based programs you have been assessed for.**',
        '**На основі Ваших попередніх відповідей Ви дізнаєтеся про Ваше включення/ виключення з будь-яких програм грошової допомоги, для включення в які Вас оцінювали.**'
      ],
      '$xpath': 'ass_inc/ass_inc_note',
      'required': false,
      '$autoname': 'ass_inc_note'
    },
    {
      'name': 'ass_inc_mpca',
      'type': 'begin_group',
      '$kuid': 'ytuGx1bW3',
      'label': [
        '**MPCA Assessment**',
        '**Оцінювання на предмет участі у програмі багатоцільової грошової допомоги (MPCA)**'
      ],
      '$xpath': 'ass_inc/ass_inc_mpca',
      'relevant': 'selected(${back_prog_type}, \'mpca\')',
      'required': false,
      '$autoname': 'ass_inc_mpca',
      'appearance': 'field-list'
    },
    {
      'name': 'calc_vulnerability',
      'type': 'calculate',
      '$kuid': '3Kz9FMaDI',
      '$xpath': 'ass_inc/ass_inc_mpca/calc_vulnerability',
      'required': false,
      '$autoname': 'calc_vulnerability',
      'calculation': 'if(selected(${back_refer_who},\'prot\') or selected(${back_refer_who},\'legal\') or selected(${back_refer_who},\'shelter\') or selected(${back_refer_who},\'ecrec\') or ${calc_tot_chi} > 2 or ${calc_dis_level} = 1 or ${calc_char_civ_stat} = 1  or selected(${hh_char_preg},\'yes\') or ${calc_tot_eld} > 0,1,0)'
    },
    {
      'name': 'calc_gen_mpca_inc',
      'type': 'calculate',
      '$kuid': 'FyILSthSU',
      '$xpath': 'ass_inc/ass_inc_mpca/calc_gen_mpca_inc',
      'required': false,
      '$autoname': 'calc_gen_mpca_inc',
      'calculation': 'if(selected(${back_prog_type}, \'mpca\') and (${ben_det_income} div ${ben_det_hh_size} <= 5400) and ${calc_vulnerability} = 1, 1, 0)'
    },
    {
      'name': 'ass_inc_mpca_inc',
      'type': 'note',
      '$kuid': 'ccSLn97ES',
      'label': [
        '**You have met the critera for inclusion in the cash assistance programme. We will conduct further internal checks and revert to you with a final result.**\n<span style="color: red">Do not read this out to the household</span>',
        '**Ви відповідаєте критеріям для включення в програму грошової допомоги. Ми проведемо подальші внутрішні перевірки та повідомимо Вам остаточний результат.**'
      ],
      '$xpath': 'ass_inc/ass_inc_mpca/ass_inc_mpca_inc',
      'relevant': '${calc_gen_mpca_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_mpca_inc'
    },
    {
      'hint': [
        'UAH 3,600 is the total monthly benefit per person. Each household will receive this amount for each person in their hosuehold for a period of three months which will all be paid upfront in one instalment.',
        '3600 гривень — це загальна щомісячна допомога на особу. Кожне домогосподарство отримуватиме цю суму на кожну особу, яка є членом цього домогосподарства, упродовж 3 (трьох) місяців у вигляді одного платежу наперед.'
      ],
      'name': 'ass_inc_mpca_ben',
      'type': 'note',
      '$kuid': 'uk32TBEGS',
      'label': [
        'The provisional calculated total benefit for this household (HH Size × UAH 3,600 × 3 Months) will be UAH\n<span style="color: red">Do not read this out to the household</span>',
        '**Попередня розрахована загальна допомога для цього домогосподарства (Розмір домогосподарства × 3600 грн. × 3 місяці) становитиме грн: [Не зачитуйте це домогосподарству]:'
      ],
      '$xpath': 'ass_inc/ass_inc_mpca/ass_inc_mpca_ben',
      'relevant': '${calc_gen_mpca_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_mpca_ben',
      'calculation': '${ben_det_hh_size} * 3600 * 3'
    },
    {
      'name': 'ass_inc_mpca_not_vul',
      'type': 'note',
      '$kuid': 'wv5rOqtIW',
      'label': [
        '**Unfortunately based upon our criteria, you do not qualify for the cash assistance program as you do not meet the threshold for vulnerability.**',
        '**На жаль, за нашими критеріями Ви не відповідаєте вимогам для участі у програмі грошової допомоги, оскільки рівень Ваш рівень не відповідає порогу вразливості.**'
      ],
      '$xpath': 'ass_inc/ass_inc_mpca/ass_inc_mpca_not_vul',
      'relevant': '${calc_gen_mpca_inc} = 0',
      'required': false,
      '$autoname': 'ass_inc_mpca_not_vul'
    },
    {
      'type': 'end_group',
      '$kuid': 'nM6vsttpW'
    },
    {
      'name': 'ass_inc_cfe',
      'type': 'begin_group',
      '$kuid': 't1byOBCiu',
      'label': [
        '**Cash for Education Assessment**',
        '**Гроші на оцінювання освіти**'
      ],
      '$xpath': 'ass_inc/ass_inc_cfe',
      'relevant': 'selected(${back_prog_type}, \'cfe\')',
      'required': false,
      '$autoname': 'ass_inc_cfe',
      'appearance': 'field-list'
    },
    {
      'name': 'ass_inc_cfe_inc',
      'type': 'note',
      '$kuid': 'XYZHtdYMm',
      'label': [
        'Based upon your answers above, you are entitled to Cash for Education grant',
        'Виходячи з ваших відповідей, ви маєте право на отримання гранту "Гроші на освіту"'
      ],
      '$xpath': 'ass_inc/ass_inc_cfe/ass_inc_cfe_inc',
      'relevant': '${calc_tot_ed_age} > 0 and ${calc_vulnerability} > 0',
      'required': false,
      '$autoname': 'ass_inc_cfe_inc'
    },
    {
      'name': 'ass_inc_cfe_ben',
      'type': 'note',
      '$kuid': 'apxrilLxX',
      'label': [
        'You are entitled a Cash for Education Grant of UAH:',
        'Ви маєте право на отримання гранту "Гроші на освіту" у розмірі гривні:'
      ],
      '$xpath': 'ass_inc/ass_inc_cfe/ass_inc_cfe_ben',
      'relevant': '${calc_tot_ed_age} > 0 and ${calc_vulnerability} > 0',
      'required': false,
      '$autoname': 'ass_inc_cfe_ben',
      'calculation': '${calc_tot_ed_age} * 3400'
    },
    {
      'name': 'ass_inc_cfe_not_inc',
      'type': 'note',
      '$kuid': 'aGxkpktFB',
      'label': [
        'You are not entitled to a Cash for Education Grant.',
        'Ви не можете претендувати на отримання гранту "Гроші на освіту".'
      ],
      '$xpath': 'ass_inc/ass_inc_cfe/ass_inc_cfe_not_inc',
      'relevant': 'not(${calc_tot_ed_age} > 0 and ${calc_vulnerability} > 0)',
      'required': false,
      '$autoname': 'ass_inc_cfe_not_inc'
    },
    {
      'type': 'end_group',
      '$kuid': 'Yz7Zw1ggm'
    },
    {
      'name': 'ass_inc_cfr',
      'type': 'begin_group',
      '$kuid': 'wYolZQshm',
      'label': [
        '**Cash for Rent Assessment**',
        '**Оцінювання на предмет участі у програмі грошової допомоги на оплату оренди (CFR)**'
      ],
      '$xpath': 'ass_inc/ass_inc_cfr',
      'relevant': 'selected(${back_prog_type}, \'cfr\')',
      'required': false,
      '$autoname': 'ass_inc_cfr',
      'appearance': 'field-list'
    },
    {
      'name': 'calc_gen_cfr_vul',
      'type': 'calculate',
      '$kuid': 'wqMA2Sugi',
      '$xpath': 'ass_inc/ass_inc_cfr/calc_gen_cfr_vul',
      'required': false,
      '$autoname': 'calc_gen_cfr_vul',
      'calculation': 'if((${calc_tot_chi} > 2 or ${calc_char_civ_stat} = 1 or ${calc_tot_eld} = ${ben_det_hh_size} or ${calc_dis_level} = 1),1,0)'
    },
    {
      'name': 'calc_gen_cfr_inc',
      'type': 'calculate',
      '$kuid': '9r80JbAsS',
      '$xpath': 'ass_inc/ass_inc_cfr/calc_gen_cfr_inc',
      'required': false,
      '$autoname': 'calc_gen_cfr_inc',
      'calculation': 'if(${calc_gen_cfr_vul} = 1 and (selected(${cfr_rent_stat},\'unable_pay\') or selected(${cfr_rent_stat},\'dan_unable_pay\') or selected(${cfr_accom_int},\'rent\')) and selected(${cfr_prev_ass},\'no\'),1,0)'
    },
    {
      'name': 'ass_inc_cfr_inc',
      'type': 'note',
      '$kuid': 'btx4Bdb0N',
      'label': [
        'You have met the criteria for inclusion in the cash for rent program',
        'Ви відповідаєте критеріям для включення в програму грошової допомоги на оплату оренди'
      ],
      '$xpath': 'ass_inc/ass_inc_cfr/ass_inc_cfr_inc',
      'relevant': '${calc_gen_cfr_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_cfr_inc'
    },
    {
      'hint': [
        '*Do not read this out to the Household*',
        '*не зачитуйте це домогосподарству*'
      ],
      'name': 'ass_inc_cfr_ben',
      'type': 'note',
      '$kuid': 'Tg4gBX8fU',
      'label': [
        'Your provisional cash for rent benefit will be a monthly payment of UAH:',
        'Ваша попередня грошова допомога на оплату оренди становитиме щомісячний платіж у такому розмірі (грн):'
      ],
      '$xpath': 'ass_inc/ass_inc_cfr/ass_inc_cfr_ben',
      'relevant': '${calc_gen_cfr_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_cfr_ben',
      'calculation': 'if((${back_office} = \'lwo\'),if((${ben_det_hh_size} <= 3),\'8,500\',if((${ben_det_hh_size} = 4),\'9,000\',if((${ben_det_hh_size} >= 5),\'10,500\',\'\'))),if((${back_office} = \'dnk\'),if((${ben_det_hh_size} <= 3),\'6,500\',if((${ben_det_hh_size} = 4),\'7,000\',if((${ben_det_hh_size} >= 5),\'8,500\',\'\'))),\'\'))'
    },
    {
      'hint': [
        '*Do not read this out to the Household*',
        '*не зачитуйте це домогосподарству*'
      ],
      'name': 'ass_inc_cfr_top_up',
      'type': 'note',
      '$kuid': 'r0DJHNLbl',
      'label': [
        'You will also receive an additional one-off top-up grant of UAH:',
        'Ви також отримаєте додатковий одноразовий грант у такому розмірі (грн):'
      ],
      '$xpath': 'ass_inc/ass_inc_cfr/ass_inc_cfr_top_up',
      'relevant': '${calc_gen_cfr_inc} = 1 and selected(${cfr_accom_int},\'rent\')',
      'required': false,
      '$autoname': 'ass_inc_cfr_top_up',
      'calculation': '5000'
    },
    {
      'name': 'ass_inc_cfr_not_inc',
      'type': 'note',
      '$kuid': 'u7JHccqRa',
      'label': [
        'Unfortunatley based upon our criteria, you not not meet the requirements for cash for rent support',
        'На жаль, за нашими критеріями Ви не відповідаєте вимогам для отримання грошової допомоги на оплату оренди'
      ],
      '$xpath': 'ass_inc/ass_inc_cfr/ass_inc_cfr_not_inc',
      'relevant': '${calc_gen_cfr_inc} = 0',
      'required': false,
      '$autoname': 'ass_inc_cfr_not_inc'
    },
    {
      'type': 'end_group',
      '$kuid': 'sUM1qHVra'
    },
    {
      'name': 'ass_inc_cff',
      'type': 'begin_group',
      '$kuid': 'NHQ02nygv',
      'label': [
        '**Cash for Fuel Assessment**',
        '**Оцінювання на предмет участі у програмі грошової допомоги на паливо (CFF)**'
      ],
      '$xpath': 'ass_inc/ass_inc_cff',
      'relevant': 'selected(${back_prog_type}, \'csf\')',
      'required': false,
      '$autoname': 'ass_inc_cff',
      'appearance': 'field-list'
    },
    {
      'name': 'calc_vulnerability_cff',
      'type': 'calculate',
      '$kuid': 'oNFZDTEkw',
      '$xpath': 'ass_inc/ass_inc_cff/calc_vulnerability_cff',
      'required': false,
      '$autoname': 'calc_vulnerability_cff',
      'calculation': 'if((${calc_tot_eld} >0 and selected(${hh_char_pensioner},\'yes\')) or ${cal_tot_scoring_difficulty_level} >0 or selected(${hh_char_preg},\'yes\') or ${calc_tot_baby_age}>0 or (${calc_tot_chi} + ${calc_tot_student} >2) and ${cal_scoring_sfu}>0,1,0)'
    },
    {
      'name': 'calc_gen_cff_inc',
      'type': 'calculate',
      '$kuid': 'MXc2DLqAl',
      '$xpath': 'ass_inc/ass_inc_cff/calc_gen_cff_inc',
      'required': false,
      '$autoname': 'calc_gen_cff_inc',
      'calculation': 'if(selected(${back_prog_type},\'csf\') and ((${ben_det_income} div ${ben_det_hh_size} <= 8000) or (${ben_det_income} div ${ben_det_hh_size} >= 8001)  and (${ben_det_income} div ${ben_det_hh_size} <= 12000) and ${calc_vulnerability_cff}>0 ) and (selected(${current_gov_assist_cff},\'yes_but\') or selected(${current_gov_assist_cff},\'no\')) ,1,0)'
    },
    {
      'name': 'ass_inc_cff_inc',
      'type': 'note',
      '$kuid': 'AW9oXZDrV',
      'label': [
        '**You have met the critera for inclusion in the cash for fuel assistance programme. We will conduct further internal checks and revert to you with a final result.**\n<span style="color: red">Do not read this out to the household</span>',
        '**Ви відповідаєте критеріям для включення в програму грошової допомоги на паливо. Ми проведемо подальші внутрішні перевірки та повідомимо Вам остаточний результат.**'
      ],
      '$xpath': 'ass_inc/ass_inc_cff/ass_inc_cff_inc',
      'relevant': '${calc_gen_cff_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_cff_inc'
    },
    {
      'name': 'ass_inc_cff_ben',
      'type': 'note',
      '$kuid': 'Az825n3XH',
      'label': [
        'The provisional calculated total benefit for this household\n<span style="color: red">Do not read this out to the household</span>',
        '**Попередня розрахована загальна допомога для цього домогосподарства: \n<span style="color: red">Не зачитуйте це домогосподарству</span>'
      ],
      '$xpath': 'ass_inc/ass_inc_cff/ass_inc_cff_ben',
      'relevant': '${calc_gen_cff_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_cff_ben',
      'calculation': 'if(selected(${back_office},\'chj\') or selected(${back_office},\'umy\'),21000,22000)'
    },
    {
      'name': 'ass_inc_cff_not_vul',
      'type': 'note',
      '$kuid': '8H2l22Qw4',
      'label': [
        '**Unfortunately based upon our criteria, you do not qualify for the cash for fuel assistance program as you do not meet the threshold for vulnerability.**',
        '**На жаль, за нашими критеріями Ви не відповідаєте вимогам для участі у програмі грошової допомоги на паливо, оскільки рівень Ваш рівень не відповідає порогу вразливості.**'
      ],
      '$xpath': 'ass_inc/ass_inc_cff/ass_inc_cff_not_vul',
      'relevant': '${calc_gen_cff_inc} = 0',
      'required': false,
      '$autoname': 'ass_inc_cff_not_vul'
    },
    {
      'type': 'end_group',
      '$kuid': 'WYhCVSali'
    },
    {
      'name': 'ass_inc_cfu',
      'type': 'begin_group',
      '$kuid': 'CzIGhUzfB',
      'label': [
        '**Cash for Utilities**',
        '**Оцінювання на предмет участі у програмі грошової допомоги на комунальні послуги (cfu)**'
      ],
      '$xpath': 'ass_inc/ass_inc_cfu',
      'relevant': 'selected(${back_prog_type}, \'cfu\')',
      'required': false,
      '$autoname': 'ass_inc_cfu',
      'appearance': 'field-list'
    },
    {
      'name': 'calc_vulnerability_cfu',
      'type': 'calculate',
      '$kuid': 'NqgLkt5Yn',
      '$xpath': 'ass_inc/ass_inc_cfu/calc_vulnerability_cfu',
      'required': false,
      '$autoname': 'calc_vulnerability_cfu',
      'calculation': 'if((${calc_tot_eld} >0 and selected(${hh_char_pensioner},\'yes\')) or ${cal_tot_scoring_difficulty_level} >0 or selected(${hh_char_preg},\'yes\') or ${calc_tot_baby_age}>0 or (${calc_tot_chi} + ${calc_tot_student} >2) and ${cal_scoring_sfu}>0,1,0)'
    },
    {
      'name': 'calc_gen_cfu_inc',
      'type': 'calculate',
      '$kuid': 'y9x9gIaPM',
      '$xpath': 'ass_inc/ass_inc_cfu/calc_gen_cfu_inc',
      'required': false,
      '$autoname': 'calc_gen_cfu_inc',
      'calculation': 'if(selected(${back_prog_type}, \'cfu\') and ((${ben_det_income} div ${ben_det_hh_size} <= 8000) or (${ben_det_income} div ${ben_det_hh_size} >= 8001)  and (${ben_det_income} div ${ben_det_hh_size} <= 12000) and ${calc_vulnerability_cfu}>0 ) and (selected(${current_gov_assist_cff},\'yes_but\') or selected(${current_gov_assist_cff},\'no\')),1,0)'
    },
    {
      'name': 'ass_inc_cfu_inc',
      'type': 'note',
      '$kuid': 'ZO3zgVpxb',
      'label': [
        '**You have met the critera for inclusion in the cash for utilities assistance programme. We will conduct further internal checks and revert to you with a final result.**\n<span style="color: red">Do not read this out to the household</span>',
        '**Ви відповідаєте критеріям для включення в програму грошової допомоги на комунальні послуги. Ми проведемо подальші внутрішні перевірки та повідомимо Вам остаточний результат.**'
      ],
      '$xpath': 'ass_inc/ass_inc_cfu/ass_inc_cfu_inc',
      'relevant': '${calc_gen_cfu_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_cfu_inc'
    },
    {
      'name': 'ass_inc_cfu_ben',
      'type': 'note',
      '$kuid': 'ezhcqFmRs',
      'label': [
        'The provisional calculated total benefit for this household\n<span style="color: red">Do not read this out to the household</span>',
        '**Попередня розрахована загальна допомога для цього домогосподарства: \n<span style="color: red">Не зачитуйте це домогосподарству</span>'
      ],
      '$xpath': 'ass_inc/ass_inc_cfu/ass_inc_cfu_ben',
      'relevant': '${calc_gen_cfu_inc} = 1',
      'required': false,
      '$autoname': 'ass_inc_cfu_ben',
      'calculation': 'if(selected(${utilities_fuel},\'portable_plug_heater\'),28520,if(selected(${utilities_fuel},\'fuel\'),21000,if(selected(${utilities_fuel},\'mains_piped_gas \'),14760,if(selected(${utilities_fuel},\'community_heating\'),11600,18160))))'
    },
    {
      'name': 'ass_inc_cfu_not_vul',
      'type': 'note',
      '$kuid': 'fYhHnLsfM',
      'label': [
        '**Unfortunately based upon our criteria, you do not qualify for the cash for utilitie assistance program as you do not meet the threshold for vulnerability.**',
        '**На жаль, за нашими критеріями Ви не відповідаєте вимогам для участі у програмі грошової допомоги на комунальні послуги, оскільки рівень Ваш рівень не відповідає порогу вразливості.**'
      ],
      '$xpath': 'ass_inc/ass_inc_cfu/ass_inc_cfu_not_vul',
      'relevant': '${calc_gen_cfu_inc} = 0',
      'required': false,
      '$autoname': 'ass_inc_cfu_not_vul'
    },
    {
      'type': 'end_group',
      '$kuid': 'ZeFMyHHjk'
    },
    {
      'type': 'end_group',
      '$kuid': 'Q7MVNiEVo'
    },
    {
      'name': 'pay_det',
      'type': 'begin_group',
      '$kuid': 'ekrQCYKA1',
      'label': [
        '###7. Payment Details',
        '###7. Платіжні реквізити'
      ],
      '$xpath': 'pay_det',
      'relevant': '${calc_gen_mpca_inc} = 1 or ${calc_gen_cfr_inc} = 1 or ${calc_gen_cff_inc} = 1 or ${calc_gen_cfu_inc} = 1',
      'required': false,
      '$autoname': 'pay_det',
      'appearance': 'field-list'
    },
    {
      'name': 'pay_consent',
      'type': 'select_one',
      '$kuid': 'mvb0b8bb7',
      'label': [
        '7.0 Thank you for answering the questions above, are you willing to provide your payment details?',
        '7.0 Дякуємо за відповіді на вищезазначені питання, чи готові ви надати свої платіжні реквізити?'
      ],
      '$xpath': 'pay_det/pay_consent',
      'required': true,
      '$autoname': 'pay_consent',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'pay_det_s',
      'type': 'begin_group',
      '$kuid': 'jCxpZaUxP',
      '$xpath': 'pay_det/pay_det_s',
      'relevant': 'selected(${pay_consent},\'yes\')',
      'required': false,
      '$autoname': 'pay_det_s',
      'appearance': 'field-list'
    },
    {
      'name': 'pay_det_id_type',
      'type': 'select_one',
      '$kuid': 'yNcmXEsmC',
      'label': [
        '7.1 Form of ID do you have?',
        '7.1 Яка у Вас форма посвідчення особи?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_id_type',
      'required': true,
      '$autoname': 'pay_det_id_type',
      'select_from_list_name': 'id_type'
    },
    {
      'name': 'pay_det_id_type_oth',
      'type': 'text',
      '$kuid': 'ViKbj1POB',
      'label': [
        '7.1.1 Other form of ID do you have?',
        '7.1.1 Яка інша форма посвідчення особи у Вас є?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_id_type_oth',
      'relevant': 'selected(${pay_det_id_type},\'oth_id\')',
      'required': true,
      '$autoname': 'pay_det_id_type_oth'
    },
    {
      'name': 'pay_det_pass_ser',
      'type': 'text',
      '$kuid': 'UH8YPFsCx',
      'label': [
        '7.2.1 Input Passport Series',
        '7.2.1 Серія паспорта'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_pass_ser',
      'relevant': 'selected(${pay_det_id_type},\'nat_pass_book\')',
      'required': true,
      '$autoname': 'pay_det_pass_ser',
      'constraint': 'regex(., \'^[а-яА-Яa-zA-Z]{2}$\')',
      'constraint_message': [
        'Passport series must contain two letters only',
        'Серія паспорта має містити лише дві букви'
      ]
    },
    {
      'hint': [
        null,
        'This is based on the vulnerability criteria'
      ],
      'name': 'pay_det_pass_num',
      'type': 'text',
      '$kuid': 'v08TSFuZY',
      'label': [
        '7.2.2 Number of ID',
        '7.2.2 Номер ID'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_pass_num',
      'relevant': '${pay_det_id_type} != \'no_id\'',
      'required': true,
      '$autoname': 'pay_det_pass_num'
    },
    {
      'name': 'pay_det_id_ph',
      'type': 'image',
      '$kuid': '9nzh3mkZJ',
      'label': [
        '7.2.3 Take a photo of the ID',
        '7.2.3 Сфотографуйте посвідчення особи'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_id_ph',
      'relevant': '${pay_det_id_type} != \'no_id\'',
      'required': true,
      '$autoname': 'pay_det_id_ph',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'begin_group_vdIM9ogQb',
      'type': 'begin_group',
      '$kuid': '6XlpUYc8W',
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb',
      'relevant': '${pay_det_id_type} != \'\'',
      'required': false,
      '$autoname': 'begin_group_vdIM9ogQb',
      'appearance': 'field-list'
    },
    {
      'name': 'pay_det_tax_id_yn',
      'type': 'select_one',
      '$kuid': 'eC0lYiSAW',
      'label': [
        '7.3.1 Have individual tax number (TIN)?',
        '7.3.1 Чи має бенефіціар індивідуальний податковий номер (ІПН)?'
      ],
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb/pay_det_tax_id_yn',
      'required': true,
      '$autoname': 'pay_det_tax_id_yn',
      'calculation': 'indexed-repeat(${hh_char_tax_id_yn},${hh_char_hh_det} ,1)',
      'select_from_list_name': 'yn'
    },
    {
      'hint': [
        'The TIN contains 10 digits',
        'ІПН містить 10 цифр'
      ],
      'name': 'pay_det_tax_id_num',
      'type': 'text',
      '$kuid': 'zYkU5zhG6',
      'label': [
        '7.3.2 Individual tax number',
        '7.3.2 Ідентифікаційний номер (ІПН) бенефіціара'
      ],
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb/pay_det_tax_id_num',
      'relevant': 'selected(${pay_det_tax_id_yn},\'yes\')',
      'required': true,
      '$autoname': 'pay_det_tax_id_num',
      'appearance': 'numbers',
      'constraint': 'regex(., \'^[0-9]{10}$\')',
      'calculation': 'indexed-repeat(${hh_char_tax_id_num},${hh_char_hh_det} ,1)',
      'constraint_message': [
        'Tax ID number must contain ten digits only',
        'Ідентифікаційний податковий номер має містити лише десять цифр'
      ]
    },
    {
      'name': 'pay_det_tax_id_ph',
      'type': 'image',
      '$kuid': 'jf0q0AzC4',
      'label': [
        '7.3.3 Tax ID photo',
        '7.3.3 Сфотографуйте посвідчення платника податків'
      ],
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb/pay_det_tax_id_ph',
      'relevant': 'selected(${pay_det_tax_id_yn},\'yes\')',
      'required': true,
      '$autoname': 'pay_det_tax_id_ph',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'pay_det_tax_exempt',
      'type': 'select_one',
      '$kuid': 'HCbW6KOiX',
      'label': [
        '7.3.4 Have a tax exemptions?',
        '7.3.4 Підтвердження відсутності ІПН'
      ],
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb/pay_det_tax_exempt',
      'relevant': 'selected(${pay_det_tax_id_yn},\'no\')',
      'required': false,
      '$autoname': 'pay_det_tax_exempt',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'pay_det_tax_exempt_im',
      'type': 'image',
      '$kuid': 'd6mIgXxWQ',
      'label': [
        '7.3.5 Proof of the tax of exemptions photo',
        '7.3.5 Сфотографуйте пільговий документ'
      ],
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb/pay_det_tax_exempt_im',
      'relevant': 'selected(${pay_det_tax_exempt},\'yes\')',
      'required': false,
      '$autoname': 'pay_det_tax_exempt_im'
    },
    {
      'type': 'end_group',
      '$kuid': 'A51aklRxL'
    },
    {
      'hint': [
        'The household cannot request physical-cash, please inform them to provide an alternative transfer mechanism.',
        null
      ],
      'name': 'pay_det_pay_meth',
      'type': 'select_one',
      '$kuid': '292npU6df',
      'label': [
        '7.4.1 Preferred Payment Method',
        '7.4.1 Який у Вас бажаний спосіб оплати?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_pay_meth',
      'required': true,
      '$autoname': 'pay_det_pay_meth',
      'select_from_list_name': 'pay_meth'
    },
    {
      'name': 'pay_det_iban',
      'type': 'text',
      '$kuid': 'EcD09c0jh',
      'label': [
        '7.4.2 IBAN Number',
        '7.4.2 Який у Вас IBAN-код?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_iban',
      'default': 'UA',
      'relevant': 'selected(${pay_det_pay_meth},\'bank_card\')',
      'required': true,
      '$autoname': 'pay_det_iban',
      'constraint': 'regex(., \'^UA\\d{27}$\')',
      'constraint_message': [
        'The IBAN code must contain UA and 27 digits',
        'IBAN-код має містити UA і 27 цифр'
      ]
    },
    {
      'name': 'pay_det_iban_im',
      'type': 'image',
      '$kuid': 'MotQpYgqS',
      'label': [
        '7.4.3 Picture of IBAN Number',
        '7.4.3 Сфотографуйте IBAN-код (якщо такий є)'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_iban_im',
      'relevant': 'selected(${pay_det_pay_meth},\'bank_card\')',
      'required': true,
      '$autoname': 'pay_det_iban_im',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'pay_address',
      'type': 'text',
      '$kuid': 'nPXhUATz4',
      'label': [
        '7.4.4 Address',
        '7.4.4 Яка Ваша адреса?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_address',
      'relevant': 'selected(${pay_det_pay_meth},\'ukrpost\')',
      'required': true,
      '$autoname': 'pay_address'
    },
    {
      'name': 'pay_zip',
      'type': 'text',
      '$kuid': 'rGJurY4e9',
      'label': [
        '7.4.5 ZIP Code',
        '7.4.5 Яким іншим способам оплати Ви віддаєте перевагу?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_zip',
      'relevant': 'selected(${pay_det_pay_meth},\'ukrpost\')',
      'required': true,
      '$autoname': 'pay_zip'
    },
    {
      'name': 'pay_det_add_im',
      'type': 'image',
      '$kuid': 'F2zO3N68X',
      'label': [
        '7.4.6 Picture of Address Page of Passport',
        '7.4.6 Сфотографуйте сторінку з адресою в паспорті'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_add_im',
      'relevant': 'selected(${pay_det_pay_meth},\'ukrpost\')',
      'required': true,
      '$autoname': 'pay_det_add_im',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'pay_det_pay_meth_oth',
      'type': 'text',
      '$kuid': 'njDdXpPhi',
      'label': [
        '7.4.7 Other Preferred Payment Methods',
        '7.4.7 Яким іншим способам оплати Ви віддаєте перевагу?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_pay_meth_oth',
      'relevant': 'selected(${pay_det_pay_meth},\'other_pay\')',
      'required': true,
      '$autoname': 'pay_det_pay_meth_oth'
    },
    {
      'name': 'pay_det_pay_meth_none',
      'type': 'text',
      '$kuid': 'EPkHeTWPz',
      'label': [
        '7.4.8 Reason for Unsuitability of Payment Methods',
        '7.4.8 Чи можете Ви навести головну причину того, що жоден із цих способів оплати Вам не підходить?'
      ],
      '$xpath': 'pay_det/pay_det_s/pay_det_pay_meth_none',
      'relevant': 'selected(${pay_det_pay_meth},\'none_pay\')',
      'required': true,
      '$autoname': 'pay_det_pay_meth_none'
    },
    {
      'type': 'end_group',
      '$kuid': 'bF6wXQaby'
    },
    {
      'type': 'end_group',
      '$kuid': 'vae8SlDIR'
    },
    {
      'name': 'fin_det',
      'type': 'begin_group',
      '$kuid': '6kMkawmt4',
      'label': [
        '###8. Final Details',
        '###8. Кінцеві відомості'
      ],
      '$xpath': 'fin_det',
      'relevant': 'selected(${back_consent},\'yes\')',
      'required': false,
      '$autoname': 'fin_det',
      'appearance': 'field-list'
    },
    {
      'name': 'not_thank_sfu',
      'type': 'note',
      '$kuid': 'I88goNxIu',
      'label': [
        '**Thank you for answering our questions.  We will confirm the details of your registration, and confirm you are not receiving assistance from other parties, please note this could take up to 5-working days.  Once successfully registered, we will confirm if we are able to support you and what level of support you may expect to receive**',
        '**Дякуємо, що відповіли на наші запитання.  Ми підтвердимо деталі вашої реєстрації та підтвердимо, що ви не отримуєте допомогу від інших сторін, будь ласка, зверніть увагу, що це може зайняти до 5 робочих днів.  Після успішної реєстрації ми підтвердимо, чи зможемо ми допомогти вам і на який рівень підтримки ви можете розраховувати**'
      ],
      '$xpath': 'fin_det/not_thank_sfu',
      'relevant': 'selected(${pay_consent},\'yes\') and (${calc_gen_cff_inc} = 1 or ${calc_gen_cfu_inc} = 1)',
      'required': false,
      '$autoname': 'not_thank_sfu'
    },
    {
      'hint': [
        'Please note particularly any complaints the respondent has regarding selection/non selection',
        'Зазначте зокрема ті чи інші скарги респондента щодо того, що його обрали/не обрали'
      ],
      'name': 'fin_det_res',
      'type': 'text',
      '$kuid': 'SNu3O25k0',
      'label': [
        '8.1 Other Comments from Respondent',
        '8.1 Інші коментарі респондента'
      ],
      '$xpath': 'fin_det/fin_det_res',
      'required': false,
      '$autoname': 'fin_det_res',
      'appearance': 'multiline'
    },
    {
      'name': 'fin_det_enum',
      'type': 'text',
      '$kuid': 'ujOz2D1YV',
      'label': [
        '8.2 Other Comments from Enumerator',
        '8.2 Інші коментарі особи, яка проводила оцінювання'
      ],
      '$xpath': 'fin_det/fin_det_enum',
      'required': false,
      '$autoname': 'fin_det_enum',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Only if relevant',
        'Лише у відповідних випадках'
      ],
      'name': 'fin_det_oth_doc_im',
      'type': 'image',
      '$kuid': 'SdhuhY0am',
      'label': [
        '8.3 Please take picture of any other relevant document',
        '8.3 Сфотографуйте будь-який інший відповідний документ'
      ],
      '$xpath': 'fin_det/fin_det_oth_doc_im',
      'required': false,
      '$autoname': 'fin_det_oth_doc_im',
      'parameters': 'max-pixels=1024'
    },
    {
      'hint': [
        'Only if relevant',
        'Лише у відповідних випадках'
      ],
      'name': 'fin_det_oth_doc_im2',
      'type': 'image',
      '$kuid': 'QBtUVoFgt',
      'label': [
        '8.4 Please take picture of any other relevant document',
        '8.4 Сфотографуйте будь-який інший відповідний документ'
      ],
      '$xpath': 'fin_det/fin_det_oth_doc_im2',
      'relevant': 'not(selected(${fin_det_oth_doc_im},\'\'))',
      'required': false,
      '$autoname': 'fin_det_oth_doc_im2',
      'parameters': 'max-pixels=1024'
    },
    {
      'type': 'end_group',
      '$kuid': 'A2aVUedJg'
    }
  ],
  'choices': [
    {
      'name': 'lwo',
      '$kuid': 'C3CGTTjh3',
      'label': [
        'Lviv (LWO)',
        'Lviv (LWO)'
      ],
      'list_name': 'office',
      '$autovalue': 'lwo'
    },
    {
      'tag': 'yes',
      'name': 'chj',
      '$kuid': 'A4GYK7SXd',
      'label': [
        'Chernihiv (CHJ)',
        'Chernihiv (CHJ)'
      ],
      'list_name': 'office',
      '$autovalue': 'chj'
    },
    {
      'tag': 'yes',
      'name': 'dnk',
      '$kuid': 'PpVoJFB45',
      'label': [
        'Dnipro (DNK)',
        'Dnipro (DNK)'
      ],
      'list_name': 'office',
      '$autovalue': 'dnk'
    },
    {
      'tag': 'yes',
      'name': 'hrk',
      '$kuid': 'EBROESkO5',
      'label': [
        'Kharkiv (HRK)',
        'Kharkiv (HRK)'
      ],
      'list_name': 'office',
      '$autovalue': 'hrk'
    },
    {
      'tag': 'yes',
      'name': 'nlv',
      '$kuid': 'qn8SZozty',
      'label': [
        'Mykloaiv (NLV)',
        'Mykloaiv (NLV)'
      ],
      'list_name': 'office',
      '$autovalue': 'nlv'
    },
    {
      'tag': 'yes',
      'name': 'umy',
      '$kuid': 'dlASCRflJ',
      'label': [
        'Sumy (UMY)',
        'Sumy (UMY)'
      ],
      'list_name': 'office',
      '$autovalue': 'umy'
    },
    {
      'name': 'anna_artiukh',
      '$kuid': 'dqSNDTjbB',
      'label': [
        'Anna Artiukh',
        'Анна Артюх'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'anna_artiukh'
    },
    {
      'name': 'yevhenii_musiienko',
      '$kuid': 'g6g7va94a',
      'label': [
        'Yevhenii Musiienko',
        'Євгеній Мусієнко'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'yevhenii_musiienko'
    },
    {
      'name': 'veronika_kaliuzhna',
      '$kuid': 'DZWoTSHCS',
      'label': [
        'Veronika Kaliuzhna',
        'Вероніка Калюжна'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'veronika_kaliuzhna'
    },
    {
      'name': 'vitaliy_grinenko',
      '$kuid': '4E2veZ8dn',
      'label': [
        'Vitaliy Grinenko',
        'Віталій Гриненко'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'vitaliy_grinenko'
    },
    {
      'name': 'halyna_lantukh',
      '$kuid': 'wZKX3Uums',
      'label': [
        'Halyna Lantukh',
        'Галина Лантух'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'halyna_lantukh'
    },
    {
      'name': 'olena_osadcha',
      '$kuid': 'w4mocFI86',
      'label': [
        'Olena Osadcha',
        'Олена Осадча'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'olena_osadcha'
    },
    {
      'name': 'umy_enum1',
      '$kuid': 'qRfu2YYAk',
      'label': [
        'Enumerator 1',
        'Переписувач 1'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'umy_enum1'
    },
    {
      'name': 'umy_enum2',
      '$kuid': '94LK90Xoa',
      'label': [
        'Enumerator 2',
        'Переписувач 2'
      ],
      'office': 'umy',
      'list_name': 'enum',
      '$autovalue': 'umy_enum2'
    },
    {
      'name': 'oleksandr_havrylov',
      '$kuid': 'mNu1Do9U8',
      'label': [
        'Oleksandr Havrylov',
        'Олександр Гаврилов'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'oleksandr_havrylov'
    },
    {
      'name': 'ievgen_kylymenniy',
      '$kuid': 'huvs9gEx9',
      'label': [
        'Ievgen Kylymenniy',
        'Євген Килименний'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'ievgen_kylymenniy'
    },
    {
      'name': 'oleksandr_shmunk',
      '$kuid': '2UFH6jgvF',
      'label': [
        'Oleksandr Shmunk',
        'Олександр Шмунк'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'oleksandr_shmunk'
    },
    {
      'name': 'inna_kovalchuk',
      '$kuid': 'iNE1FiAih',
      'label': [
        'Inna Kovalchuk',
        'Інна Ковальчук'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'inna_kovalchuk'
    },
    {
      'name': 'anna_pastushenko',
      '$kuid': 'ZZ0zzfXqg',
      'label': [
        'Anna Pastushenko',
        'Анна Пастушенко'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'anna_pastushenko'
    },
    {
      'name': 'maksym_savchenko',
      '$kuid': 'ClAAArbBL',
      'label': [
        'Maksym Savchenko',
        'Максим Савченко'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'maksym_savchenko'
    },
    {
      'name': 'vasyl_voitsikhovskyi',
      '$kuid': 'rsJUYcVSc',
      'label': [
        'Vasyl Voitsikhovskyi',
        'Василь Войціховський'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'vasyl_voitsikhovskyi'
    },
    {
      'name': 'dmytro_tsaruk',
      '$kuid': 'oQtypS3MY',
      'label': [
        'Dmytro Tsaruk',
        'Дмитро Царук'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'dmytro_tsaruk'
    },
    {
      'name': 'viktoria_ushan',
      '$kuid': 'y4qrl0eW5',
      'label': [
        'Viktoria Ushan',
        'Вікторія Ушань'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'viktoria_ushan'
    },
    {
      'name': 'artem_chernukha_1',
      '$kuid': '6vQrN7xMI',
      'label': [
        'Artem Chernukha',
        'Чернуха Артем'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'artem_chernukha_1'
    },
    {
      'name': 'henadii_petrychenko',
      '$kuid': '073kc4wCd',
      'label': [
        'Henadii Petrychenko',
        'Петриченко Геннадій'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'henadii_petrychenko'
    },
    {
      'name': 'lwo_ex1',
      '$kuid': 'fbPeACFIM',
      'label': [
        'Extra 1',
        'Додатковий 1'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'lwo_ex1'
    },
    {
      'name': 'lwo_ex2',
      '$kuid': 'ukpEwUlWB',
      'label': [
        'Extra 2',
        'Додатковий 1'
      ],
      'office': 'lwo',
      'list_name': 'enum',
      '$autovalue': 'lwo_ex2'
    },
    {
      'name': 'polina_prusakova',
      '$kuid': 'iYN28bg8h',
      'label': [
        'Polina Prusakova',
        'Поліна Прусакова'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'polina_prusakova'
    },
    {
      'name': 'mykyta_pokynboroda',
      '$kuid': 'loe7wHySU',
      'label': [
        'Mykyta Pokynboroda',
        'Микита Покиньборода'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'mykyta_pokynboroda'
    },
    {
      'name': 'nlv_ex1',
      '$kuid': 'c6Rzdh275',
      'label': [
        'Extra 1',
        'Додатковий 1'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'nlv_ex1'
    },
    {
      'name': 'nlv_ex2',
      '$kuid': 'tQl3BBWN4',
      'label': [
        'Extra 2',
        'Додатковий 1'
      ],
      'office': 'nlv',
      'list_name': 'enum',
      '$autovalue': 'nlv_ex2'
    },
    {
      'name': 'oleh_vyshnevskyi',
      '$kuid': 'q9Pb3PYXg',
      'label': [
        'Oleh Vyshevskyi',
        'Oleh Vyshevskyi'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'oleh_vyshnevskyi'
    },
    {
      'name': 'alina_bondarenko',
      '$kuid': 's1ahg7YEm',
      'label': [
        'Alina Bondarenko',
        'Alina Bondarenko'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'alina_bondarenko'
    },
    {
      'name': 'serhii_dolzhenko',
      '$kuid': 'nTZLgRb3J',
      'label': [
        'Serhii Dolzhenko',
        'Serhii Dolzhenko'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'serhii_dolzhenko'
    },
    {
      'name': 'viktoria_klymenko',
      '$kuid': 'QNIpgY2Jy',
      'label': [
        'Viktoria Klymenko',
        'Viktoria Klymenko'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'viktoria_klymenko'
    },
    {
      'name': 'andrii_zahoruyev',
      '$kuid': 'gwnRMulZe',
      'label': [
        'Andrii Zahoruyev',
        'Андрій Загоруєв'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'andrii_zahoruyev'
    },
    {
      'name': 'oleh_Ivanov',
      '$kuid': '7lJN2beUV',
      'label': [
        'Oleh Ivanov',
        'Олег Іванов'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'oleh_Ivanov'
    },
    {
      'name': 'karina_korzh',
      '$kuid': 'LkAwd9T1V',
      'label': [
        'Karina Korzh',
        'Каріна Корж'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'karina_korzh'
    },
    {
      'name': 'serhii_nevmyvaka',
      '$kuid': '0G76v2TvD',
      'label': [
        'Serhii Nevmyvaka',
        'Сергій Невмивака'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'serhii_nevmyvaka'
    },
    {
      'name': 'olha_osmukha',
      '$kuid': 'yVm1ez0Rl',
      'label': [
        'Olha Osmukha',
        'Ольга Осьмуха'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'olha_osmukha'
    },
    {
      'name': 'halyna_diachenko',
      '$kuid': 'jzRIfk6ir',
      'label': [
        'Halyna Diachenko',
        'Галина Дьяченко'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'halyna_diachenko'
    },
    {
      'name': 'mariia_kozachko',
      '$kuid': 'FMAWROxzM',
      'label': [
        'Mariia Kozachko',
        'Марія Козачко'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'mariia_kozachko'
    },
    {
      'name': 'oleksandr_narsieiev',
      '$kuid': 'sQ0Qca41r',
      'label': [
        'Oleksandr Narsieiev',
        'Олександр Нарсєєв'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'oleksandr_narsieiev'
    },
    {
      'name': 'dnk_ex1',
      '$kuid': 'Lxbdhe7lf',
      'label': [
        'Extra 1',
        'Додатковий 1'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'dnk_ex1'
    },
    {
      'name': 'dnk_ex2',
      '$kuid': 'Jrwf5w9Pc',
      'label': [
        'Extra 2',
        'Додатковий 2'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'dnk_ex2'
    },
    {
      'name': 'dnk_ex3',
      '$kuid': '4OAn5opxp',
      'label': [
        'Extra 3',
        'Додатковий 3'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'dnk_ex3'
    },
    {
      'name': 'dnk_ex4',
      '$kuid': 'aFk5wdjDU',
      'label': [
        'Extra 4',
        'Додатковий 4'
      ],
      'office': 'dnk',
      'list_name': 'enum',
      '$autovalue': 'dnk_ex4'
    },
    {
      'name': 'yurii_volkov',
      '$kuid': 'vqmuTsUQO',
      'label': [
        'Yurii Volkov',
        'Юрій Волков'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'yurii_volkov'
    },
    {
      'name': 'andrii_zagoruiev',
      '$kuid': '2ztnMKUEL',
      'label': [
        'Andrii Zagoruiev',
        'Андрій Загоруєв'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'andrii_zagoruiev'
    },
    {
      'name': 'olena_sydorenko',
      '$kuid': 'bo0rnfNlX',
      'label': [
        'Olena Sydorenko',
        'Олена Сидоренко'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'olena_sydorenko'
    },
    {
      'name': 'svitlana_smyrnova',
      '$kuid': 'wRz86tVUs',
      'label': [
        'Svitlana Smyrnova',
        'Світлана Смирнова'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'svitlana_smyrnova'
    },
    {
      'name': 'tetiana_konovshii',
      '$kuid': 'zbCscP0S2',
      'label': [
        'Tetiana Konovshii',
        'Тетяна Коновшій'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'tetiana_konovshii'
    },
    {
      'name': 'bohdan_taranushchenko',
      '$kuid': 'ONSqGcRSF',
      'label': [
        'Bohdan Taranushchenko',
        'Богдан Таранущенко'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'bohdan_taranushchenko'
    },
    {
      'name': 'olena_sotnychenko',
      '$kuid': 'ziOvgZFqq',
      'label': [
        'Olena Sotnychenko',
        'Олена Сотниченко'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'olena_sotnychenko'
    },
    {
      'name': 'vitalii_shapoval',
      '$kuid': 'TxKG9IkOc',
      'label': [
        'Vitalii Shapoval',
        'Віталій Шаповал'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'vitalii_shapoval'
    },
    {
      'name': 'olena_buglo',
      '$kuid': 'SMf5Y3fIX',
      'label': [
        'Olena Buglo',
        'Олена Бугло'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'olena_buglo'
    },
    {
      'name': 'nataliia_bykova',
      '$kuid': 'e134HFbGc',
      'label': [
        'Nataliia Bykova',
        'Наталія Бикова'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'nataliia_bykova'
    },
    {
      'name': 'oleksii_pohorielov',
      '$kuid': 'QyEbupwnL',
      'label': [
        'Oleksii Pohorielov',
        'Олексій Погорєлов'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'oleksii_pohorielov'
    },
    {
      'name': 'nataliia_yermolova',
      '$kuid': 'z9Y4aQYum',
      'label': [
        'Nataliia Yermolova',
        'Наталія Єрмолова'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'nataliia_yermolova'
    },
    {
      'name': 'ivan_prokopkin',
      '$kuid': 'aF5w4xX1Q',
      'label': [
        'Ivan Prokopkin',
        'Іван Прокопкін'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'ivan_prokopkin'
    },
    {
      'name': 'hrk_ex1',
      '$kuid': 'r0vY9vzHV',
      'label': [
        'Extra 1',
        'Додатковий 1'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'hrk_ex1'
    },
    {
      'name': 'hrk_ex2',
      '$kuid': 'STnNagwI2',
      'label': [
        'Extra 2',
        'Додатковий 1'
      ],
      'office': 'hrk',
      'list_name': 'enum',
      '$autovalue': 'hrk_ex2'
    },
    {
      'name': 'dmytro_chernukha',
      '$kuid': 'ElAZExCw1',
      'label': [
        'Dmytro Chernukha',
        'Дмитро Чернуха'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'dmytro_chernukha'
    },
    {
      'name': 'anastasiia_reshynska',
      '$kuid': 'BGmQoAHEx',
      'label': [
        'Anastasiia Reshynska',
        'Анастасія Решинська'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'anastasiia_reshynska'
    },
    {
      'name': 'nataliia_pushenko',
      '$kuid': 'dkqiQd2Pv',
      'label': [
        'Nataliia Pushenko',
        'Наталія Пушенко'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'nataliia_pushenko'
    },
    {
      'name': 'tetiana_gorbatiuk',
      '$kuid': 'UayCTi04L',
      'label': [
        'Tetiana Gorbatiuk',
        'Горбатюк Тетяна'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'tetiana_gorbatiuk'
    },
    {
      'name': 'oleksandr_lukomets',
      '$kuid': 'ewrwmMNC5',
      'label': [
        'Oleksandr Lukomets',
        'Лукомець Олександр'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'oleksandr_lukomets'
    },
    {
      'name': 'tetiana_kolot',
      '$kuid': 'WXxXutLOT',
      'label': [
        'Tetiana Kolot',
        'Колот Тетяна'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'tetiana_kolot'
    },
    {
      'name': 'katerina_severin',
      '$kuid': 'TvHu99P91',
      'label': [
        'Katerina Severin',
        'Северін Катерина'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'katerina_severin'
    },
    {
      'name': 'maksim_sedun',
      '$kuid': 'FwDs8ws1o',
      'label': [
        'Maksim Sedun',
        'Седун Максим'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'maksim_sedun'
    },
    {
      'name': 'surzhyk_oleksandr',
      '$kuid': 'vzWt1fJVX',
      'label': [
        'Surzhyk Oleksandr',
        'Суржик Олександр'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'surzhyk_oleksandr'
    },
    {
      'name': 'chj_ex1',
      '$kuid': 'Abj17k7yk',
      'label': [
        'Extra 1',
        'Додатковий 1'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_ex1'
    },
    {
      'name': 'chj_ex2',
      '$kuid': 'J4C1gGZMf',
      'label': [
        'Extra 2',
        'Додатковий 1'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_ex2'
    },
    {
      'name': 'chj_enum1',
      '$kuid': 'B1s2VWHHW',
      'label': [
        'Enumerator 1',
        'Переписувач 1'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_enum1'
    },
    {
      'name': 'chj_enum2',
      '$kuid': 'FRvyHANAe',
      'label': [
        'Enumerator 2',
        'Переписувач 2'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_enum2'
    },
    {
      'name': 'chj_enum3',
      '$kuid': 'iLjECdYu3',
      'label': [
        'Enumerator 3',
        'Переписувач 3'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_enum3'
    },
    {
      'name': 'chj_enum4',
      '$kuid': 'vZ8ne9YgX',
      'label': [
        'Enumerator 4',
        'Переписувач 4'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_enum4'
    },
    {
      'name': 'chj_enum5',
      '$kuid': 'aHTvhGjGf',
      'label': [
        'Enumerator 5',
        'Переписувач 5'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_enum5'
    },
    {
      'name': 'chj_enum6',
      '$kuid': 'F4oYZwbAd',
      'label': [
        'Enumerator 6',
        'Переписувач 6'
      ],
      'office': 'chj',
      'list_name': 'enum',
      '$autovalue': 'chj_enum6'
    },
    {
      'name': 'viktoriia_lytvynova',
      '$kuid': 'ax8vxX0FW',
      'label': [
        'Viktoriia Lytvynova',
        'Вікторія Литвинова'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'viktoriia_lytvynova'
    },
    {
      'name': 'valerii_vietrov',
      '$kuid': 'VZyUha5zO',
      'label': [
        'Valerii Vietrov',
        'Валерій Вєтров'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'valerii_vietrov'
    },
    {
      'name': 'lesya_tsaruk',
      '$kuid': 'Zv63U0qMr',
      'label': [
        'Lesya Tsaruk',
        'Леся Царук'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'lesya_tsaruk'
    },
    {
      'name': 'irina_gobchuk',
      '$kuid': 'D6mSzcHMw',
      'label': [
        'Irina Gobchuk',
        'Ірина Гобчук'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'irina_gobchuk'
    },
    {
      'name': 'irina_klimashevskaya',
      '$kuid': 'bSGBcqkpy',
      'label': [
        'Irina Klimashevskaya',
        'Ірина Климашевська'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'irina_klimashevskaya'
    },
    {
      'name': 'julia_bilyansk',
      '$kuid': 'cvHf4ce8y',
      'label': [
        'Julia Bilyansk',
        'Юлія Біляньска'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'julia_bilyansk'
    },
    {
      'name': 'danylo_zyrianov',
      '$kuid': '2kA603w3a',
      'label': [
        'Danylo Zyrianov',
        'Данило Зирянов'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'danylo_zyrianov'
    },
    {
      'name': 'oksana_podolianko',
      '$kuid': 'xwNrWUxRG',
      'label': [
        'Oksana Podolianko',
        'Оксана Подолянко'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'oksana_podolianko'
    },
    {
      'name': 'ivan_volynkin',
      '$kuid': 'Pg3XDNEF5',
      'label': [
        'Ivan Volynkin',
        'Іван Волинкін'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'ivan_volynkin'
    },
    {
      'name': 'nadiia_yudaieva',
      '$kuid': 'EKqENcFE3',
      'label': [
        'Nadiia Yudaieva',
        'Юдаєва Надія'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'nadiia_yudaieva'
    },
    {
      'name': 'dmytro_ivanov',
      '$kuid': 'KGPC4s4xF',
      'label': [
        'Dmytro Ivanov',
        'Іванов Дмитро'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'dmytro_ivanov'
    },
    {
      'name': 'kostiantyn_yefimchuk',
      '$kuid': 'BnOP9meOU',
      'label': [
        'Kostiantyn Yefimchuk',
        'Єфімчук Костянтин'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'kostiantyn_yefimchuk'
    },
    {
      'name': 'daria_kokalia',
      '$kuid': 'n4FVHb251',
      'label': [
        'Daria Kokalia',
        'Кокаля Дар\'я'
      ],
      'office': 'not_working_here_anymore',
      'list_name': 'enum',
      '$autovalue': 'daria_kokalia'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'name': 'ukr000360_novo2',
      '$kuid': 'tomGoX3Mq',
      'label': [
        'UKR-000360 Novo Nordisk',
        'UKR-000360 Novo Nordisk'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000360_novo2'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'name': 'ukr000314_uhf4',
      '$kuid': 'SppbvtBBc',
      'label': [
        'UKR-000314 UHF4',
        'UKR-000314 UHF4'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000314_uhf4'
    },
    {
      'name': 'ukr000284_bha',
      '$kuid': 'STm6FVdH4',
      'label': [
        'UKR-000284 BHA',
        'UKR-000284 BHA'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000284_bha'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'name': 'ukr000269_echo',
      '$kuid': 'bXJGUYAtV',
      'label': [
        'UKR-000269 ECHO1',
        'UKR-000269 ECHO1'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000269_echo'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000322_echo2',
      '$kuid': '9827peAtX',
      'label': [
        'UKR-000322 ECHO2',
        'UKR-000322 ECHO2'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000322_echo2'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000372_echo3',
      '$kuid': 'KoAeMp82s',
      'label': [
        'UKR-000372 ECHO3',
        'UKR-000372 ECHO3'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000372_echo3'
    },
    {
      'nlv': 'nlv',
      'name': 'ukr000298_novo',
      '$kuid': 'Mg333fBeq',
      'label': [
        'UKR-000298 Novo Nordisk',
        'UKR-000298 Novo Nordisk'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000298_novo'
    },
    {
      'lwo': 'lwo',
      'name': 'ukr000309_okf',
      '$kuid': 'KUWyNgU2u',
      'label': [
        'UKR-000309 OKF',
        'UKR-000309 OKF'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000309_okf'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000270_pf',
      '$kuid': 'JDGzPNKqu',
      'label': [
        'UKR-000270 Pooled Funds',
        'UKR-000270 Pooled Funds'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000270_pf'
    },
    {
      'chj': 'chj',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000342_pf2',
      '$kuid': '3GDPhxKmV',
      'label': [
        'UKR-000342 Pooled Funds',
        'UKR-000342 Pooled Funds'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000342_pf2'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000345_bha',
      '$kuid': 'brqrDdsaX',
      'label': [
        'UKR-000345 BHA﻿',
        'UKR-000345 BHA'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000345_bha'
    },
    {
      'chj': 'chj',
      'hrk': 'hrk',
      'umy': 'umy',
      'name': 'ukr000330_sdc2',
      '$kuid': 'N7Li9u1Tt',
      'label': [
        'UKR-000330 SDC2',
        'UKR-000330 SDC2'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000330_sdc2'
    },
    {
      'umy': 'umy',
      'name': 'ukr000267_danida',
      '$kuid': 'IR1z5FSTH',
      'label': [
        'UKR-000267 DANIDA',
        'UKR-000267 DANIDA'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000267_danida'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000336_uhf6',
      '$kuid': 'fnAv1oBCP',
      'label': [
        'UKR-000336 UHF6',
        'UKR-000336 UHF6'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000336_uhf6'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000352_uhf7',
      '$kuid': '2Vtra1Bc9',
      'label': [
        'UKR-000352 UHF7',
        'UKR-000352 UHF7'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000352_uhf7'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000347_danida2',
      '$kuid': 'i8FehNhlD',
      'label': [
        'UKR-000347 DANIDA',
        'UKR-000347 DANIDA'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000347_danida2'
    },
    {
      'hrk': 'hrk',
      'name': 'ukr000341_hoff',
      '$kuid': 'IqA3ZnXJY',
      'label': [
        'UKR-000341 Hoffmans & Husmans',
        'UKR-000341 Hoffmans & Husmans'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000341_hoff'
    },
    {
      'lwo': 'lwo',
      'name': 'ukr000340_aug',
      '$kuid': 'sKfV0pnPt',
      'label': [
        'UKR-000340 Augustinus Fonden',
        'UKR-000340 Augustinus Fonden'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000340_aug'
    },
    {
      'lwo': 'lwo',
      'name': 'ukr000329_sida',
      '$kuid': '9mQfvONfP',
      'label': [
        'UKR-000329 SIDA H2R',
        'UKR-000329 SIDA H2R'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000329_sida'
    },
    {
      'dnk': 'dnk',
      'hrk': 'hrk',
      'umy': 'umy',
      'name': 'ukr000380_danida',
      '$kuid': 'XAxNqjbNo',
      'label': [
        'UKR-000380 DANIDA',
        'UKR-000380 DANIDA'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000380_danida'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000390_uhf9',
      '$kuid': 'NuuqXwYFW',
      'label': [
        'UKR-000390 UHF9',
        'UKR-000390 UHF9'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000390_uhf9'
    },
    {
      'chj': 'chj',
      'hrk': 'hrk',
      'umy': 'umy',
      'name': 'ukr000399_sdc3',
      '$kuid': 'XUfwQwsX8',
      'label': [
        'UKR-000399 SDC3',
        'UKR-000399 SDC3'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000399_sdc3'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'ukr000386_pf3',
      '$kuid': 'XkQSbeukt',
      'label': [
        'UKR-000386 Pooled Funds',
        'UKR-000386 Pooled Funds'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000386_pf3'
    },
    {
      'name': 'zero_one',
      '$kuid': '2e4wsbZpf',
      'label': [
        '0-1 month',
        '0-1 місяць'
      ],
      'list_name': 'idp_time',
      '$autovalue': 'zero_one'
    },
    {
      'name': 'two_three',
      '$kuid': 'KTafqiRBe',
      'label': [
        '2-3 months',
        '2-3 місяці'
      ],
      'list_name': 'idp_time',
      '$autovalue': 'two_three'
    },
    {
      'name': 'over_3',
      '$kuid': 'AUWBaupEu',
      'label': [
        'over 3 mounths',
        'понад 3 місяці'
      ],
      'list_name': 'idp_time',
      '$autovalue': 'over_3'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'mpca',
      '$kuid': 'DdxSRvZGm',
      'label': [
        'MPCA',
        'MPCA'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'mpca'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'csf',
      '$kuid': '3HnAkJlzK',
      'label': [
        'Cash for Fuel',
        'Cash for Fuel'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'csf'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'nfi',
      '$kuid': 't1VjLo5KD',
      'label': [
        'NFI',
        'NFI'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'nfi'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'lwo': 'lwo',
      'name': 'cfr',
      '$kuid': '9ErFOXHwT',
      'label': [
        'Cash for Rent',
        'Cash for Rent'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'cfr'
    },
    {
      'lwo': 'lwo',
      'name': 'cfe',
      '$kuid': 'HgO3a4deC',
      'label': [
        'Cash for Education',
        'Cash for Education'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'cfe'
    },
    {
      'lwo': 'lwo',
      'name': 'iwk',
      '$kuid': 'ZofN2yob4',
      'label': [
        'Infant Winterclothing Kit',
        'Infant Winterclothing Kit'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'iwk'
    },
    {
      'lwo': 'lwo',
      'name': 'ihk',
      '$kuid': '36B44dkab',
      'label': [
        'Infant Hygiene Kit',
        'Infant Hygiene Kit'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'ihk'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'name': 'esk',
      '$kuid': 'jhiV0H9cC',
      'label': [
        'Emergency Shelter Kit',
        'Emergency Shelter Kit'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'esk'
    },
    {
      'chj': 'chj',
      'dnk': 'dnk',
      'hrk': 'hrk',
      'lwo': 'lwo',
      'nlv': 'nlv',
      'umy': 'umy',
      'name': 'cfu',
      '$kuid': 'PD6djvwlM',
      'label': [
        'Cash for Utilities',
        'Cash for Utilities'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'cfu'
    },
    {
      'name': 'yes',
      '$kuid': '24TkuE6s4',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'yn',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      '$kuid': 'qVqwNtLye',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'yn',
      '$autovalue': 'no'
    },
    {
      'name': 'prot',
      '$kuid': 'vFw5M0umi',
      'label': [
        'Protection',
        'Захист'
      ],
      'list_name': 'department',
      '$autovalue': 'prot'
    },
    {
      'name': 'legal',
      '$kuid': 'wSOxNkTcv',
      'label': [
        'Legal',
        'Юридичний'
      ],
      'list_name': 'department',
      '$autovalue': 'legal'
    },
    {
      'name': 'shelter',
      '$kuid': 'QSFa0lCdE',
      'label': [
        'Shelter',
        'Відновлення житла'
      ],
      'list_name': 'department',
      '$autovalue': 'shelter'
    },
    {
      'name': 'ecrec',
      '$kuid': '5HADEDx13',
      'label': [
        'Economic Recovery (EcRec)',
        'Економічного розвитку'
      ],
      'list_name': 'department',
      '$autovalue': 'ecrec'
    },
    {
      'tag': 'yes',
      'name': 'mains_piped_gas',
      '$kuid': 'deUgEpLzE',
      'label': [
        'Mains/piped gas',
        'Мережевий/трубопровідний газ'
      ],
      'list_name': 'utfu',
      '$autovalue': 'mains_piped_gas'
    },
    {
      'tag': 'yes',
      'name': 'community_heating',
      '$kuid': '00MfnaBZZ',
      'label': [
        'Community heating',
        'Громадське опалення'
      ],
      'list_name': 'utfu',
      '$autovalue': 'community_heating'
    },
    {
      'tag': 'yes',
      'name': 'portable_plug_heater',
      '$kuid': 'ICPJ9HfpP',
      'label': [
        'Portable plug-in heater',
        'Портативний обігрівач, що вставляється в розетку'
      ],
      'list_name': 'utfu',
      '$autovalue': 'portable_plug_heater'
    },
    {
      'tag': 'yes',
      'name': 'mains_electricity',
      '$kuid': 'FdAadRwTE',
      'label': [
        'Mains Electricity',
        'Мережева електрика'
      ],
      'list_name': 'utfu',
      '$autovalue': 'mains_electricity'
    },
    {
      'tag': 'yes',
      'name': 'fuel',
      '$kuid': 'IwUVCm9Db',
      'label': [
        'Solid Fuel',
        'Тверде паливо'
      ],
      'list_name': 'utfu',
      '$autovalue': 'fuel'
    },
    {
      'name': 'other',
      '$kuid': 'IJR2ezb8B',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'utfu',
      '$autovalue': 'other'
    },
    {
      'name': 'utilities',
      '$kuid': 'WXGliF7og',
      'label': [
        'Mains utilities',
        'Основні комунальні послуги'
      ],
      'list_name': 'utfu',
      '$autovalue': 'utilities'
    },
    {
      'name': 'electric',
      '$kuid': 'aJBv7ggIS',
      'label': [
        'Electric',
        'Електрика'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'electric'
    },
    {
      'name': 'gas',
      '$kuid': 'FvneseA20',
      'label': [
        'Gas',
        'Газ'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'gas'
    },
    {
      'name': 'cohs',
      '$kuid': 'XFRkEcteK',
      'label': [
        'Community heating system',
        'Система централізованого опалення'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'cohs'
    },
    {
      'name': 'other',
      '$kuid': 'hWxvWzyah',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'other'
    },
    {
      'name': 'wood',
      '$kuid': 'vG8CNWBpx',
      'label': [
        'Wood',
        'Деревина'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'wood'
    },
    {
      'name': 'coal',
      '$kuid': 'UeeTW00fq',
      'label': [
        'Coal',
        'Вугілля'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'coal'
    },
    {
      'name': 'charcoal',
      '$kuid': '8GsMOgyxc',
      'label': [
        'Charcoal',
        'Деревне вугілля'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'charcoal'
    },
    {
      'name': 'pellets',
      '$kuid': 'asl4W9fH6',
      'label': [
        'Pellets',
        'Пелети'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'pellets'
    },
    {
      'name': 'ofmf',
      '$kuid': 'q7jRDdrZk',
      'label': [
        'Oil fed or multi fuel boiler',
        'Мазутний або багатопаливний котел'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'ofmf'
    },
    {
      'name': 'other',
      '$kuid': 'EgZjKcufF',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'other'
    },
    {
      'name': 'yes',
      '$kuid': 'k8hlv47eq',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'ynd',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      '$kuid': '3pjZp1UWc',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'ynd',
      '$autovalue': 'no'
    },
    {
      'name': 'dk',
      '$kuid': 'B4EMqFFcD',
      'label': [
        'Don’t know',
        'Не знаю'
      ],
      'list_name': 'ynd',
      '$autovalue': 'dk'
    },
    {
      'name': 'yes',
      '$kuid': 'lUKPNZOqt',
      'label': [
        'Yes government support',
        'Так, державна підтримка'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'yes'
    },
    {
      'name': 'yes_another_agency',
      '$kuid': 'BgBLTdQzM',
      'label': [
        'Yes, from another humanitarian agency or similar',
        'Так, від іншої гуманітарної організації або подібної'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'yes_another_agency'
    },
    {
      'name': 'yes_but',
      '$kuid': 'gK2dAoW7Z',
      'label': [
        'Yes but not sufficient to cover needs',
        'Так, але недостатньо для покриття потреб'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'yes_but'
    },
    {
      'name': 'no',
      '$kuid': 'zYkKk9wq8',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'no'
    },
    {
      'name': 'cherkaska',
      '$kuid': 'Wq7IfBuG1',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'cherkaska'
    },
    {
      'name': 'chernihivska',
      '$kuid': 'lqo3YJs6x',
      'label': [
        'Chernihivska',
        'Чернігівська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernihivska'
    },
    {
      'name': 'chernivetska',
      '$kuid': '20XaAv5Rk',
      'label': [
        'Chernivetska',
        'Чернівецька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernivetska'
    },
    {
      'name': 'dnipropetrovska',
      '$kuid': 'CVf7jzBEA',
      'label': [
        'Dnipropetrovska',
        'Дніпропетровська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'dnipropetrovska'
    },
    {
      'name': 'donetska',
      '$kuid': 'boi2Utlyl',
      'label': [
        'Donetska',
        'Донецька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'donetska'
    },
    {
      'name': 'ivano-frankivska',
      '$kuid': '1WbpKyb5S',
      'label': [
        'Ivano-Frankivska',
        'Івано-Франківська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'ivano-frankivska'
    },
    {
      'name': 'kharkivska',
      '$kuid': 'Zsm0AiTaz',
      'label': [
        'Kharkivska',
        'Харківська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kharkivska'
    },
    {
      'name': 'khersonska',
      '$kuid': 'I0VwPMPt5',
      'label': [
        'Khersonska',
        'Херсонська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khersonska'
    },
    {
      'name': 'khmelnytska',
      '$kuid': 'kBJ52tjJ2',
      'label': [
        'Khmelnytska',
        'Хмельницька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khmelnytska'
    },
    {
      'name': 'kirovohradska',
      '$kuid': 'AfMJFKjNs',
      'label': [
        'Kirovohradska',
        'Кіровоградська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kirovohradska'
    },
    {
      'name': 'kyivska',
      '$kuid': 'LtajB3YJh',
      'label': [
        'Kyivska',
        'Київська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kyivska'
    },
    {
      'name': 'luhanska',
      '$kuid': 'O1RmiSw1B',
      'label': [
        'Luhanska',
        'Луганська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'luhanska'
    },
    {
      'name': 'lvivska',
      '$kuid': 'BEBWIheo9',
      'label': [
        'Lvivska',
        'Львівська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'lvivska'
    },
    {
      'name': 'mykolaivska',
      '$kuid': 'OlPr0e2hM',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'odeska',
      '$kuid': 'JPJA6iYtf',
      'label': [
        'Odeska',
        'Одеська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'odeska'
    },
    {
      'name': 'poltavska',
      '$kuid': 'rB58AAbby',
      'label': [
        'Poltavska',
        'Полтавська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'poltavska'
    },
    {
      'name': 'rivnenska',
      '$kuid': 'BcgwRqEya',
      'label': [
        'Rivnenska',
        'Рівненська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'rivnenska'
    },
    {
      'name': 'sevastopilska',
      '$kuid': 'IKy2tHjW8',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sevastopilska'
    },
    {
      'name': 'sumska',
      '$kuid': 'JUy2I6c3A',
      'label': [
        'Sumska',
        'Сумська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sumska'
    },
    {
      'name': 'ternopilska',
      '$kuid': 'GcO1vxQnG',
      'label': [
        'Ternopilska',
        'Тернопільська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'ternopilska'
    },
    {
      'name': 'vinnytska',
      '$kuid': 'BY4TY8KaR',
      'label': [
        'Vinnytska',
        'Вінницька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'vinnytska'
    },
    {
      'name': 'volynska',
      '$kuid': '229eJa14o',
      'label': [
        'Volynska',
        'Волинська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'volynska'
    },
    {
      'name': 'zakarpatska',
      '$kuid': 'TwVQT8uwX',
      'label': [
        'Zakarpatska',
        'Закарпатська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zakarpatska'
    },
    {
      'name': 'zaporizka',
      '$kuid': 'PWgSLY3Y0',
      'label': [
        'Zaporizka',
        'Запорізька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zaporizka'
    },
    {
      'name': 'zhytomyrska',
      '$kuid': 'JRVtzzmHl',
      'label': [
        'Zhytomyrska',
        'Житомирська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zhytomyrska'
    },
    {
      'name': 'zvenyhorodskyi',
      '$kuid': 'FHx7H8ZdU',
      'label': [
        'Zvenyhorodskyi',
        'Звенигородський'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'zvenyhorodskyi'
    },
    {
      'name': 'zolotoniskyi',
      '$kuid': 'JeIKUL4MC',
      'label': [
        'Zolotoniskyi',
        'Золотоніський'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'zolotoniskyi'
    },
    {
      'name': 'umanskyi',
      '$kuid': 'm5UTRuOCv',
      'label': [
        'Umanskyi',
        'Уманський'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'umanskyi'
    },
    {
      'name': 'cherkaskyi',
      '$kuid': 'JKwza2taA',
      'label': [
        'Cherkaskyi',
        'Черкаський'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'cherkaskyi'
    },
    {
      'name': 'koriukivskyi',
      '$kuid': 'qIWWabmFs',
      'label': [
        'Koriukivskyi',
        'Корюківський'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'koriukivskyi'
    },
    {
      'name': 'nizhynskyi',
      '$kuid': 'sljX07Nom',
      'label': [
        'Nizhynskyi',
        'Ніжинський'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'nizhynskyi'
    },
    {
      'name': 'novhorod-siverskyi',
      '$kuid': 'QMAzRiE5G',
      'label': [
        'Novhorod-Siverskyi',
        'Новгород-Сіверський'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'novhorod-siverskyi'
    },
    {
      'name': 'prylutskyi',
      '$kuid': 'c58QrEHlJ',
      'label': [
        'Prylutskyi',
        'Прилуцький'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'prylutskyi'
    },
    {
      'name': 'chernihivskyi',
      '$kuid': 'Ef6N6rq3X',
      'label': [
        'Chernihivskyi',
        'Чернігівський'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'chernihivskyi'
    },
    {
      'name': 'vyzhnytskyi',
      '$kuid': 'PzlPND29u',
      'label': [
        'Vyzhnytskyi',
        'Вижницький'
      ],
      'oblast': 'chernivetska',
      'list_name': 'raion',
      '$autovalue': 'vyzhnytskyi'
    },
    {
      'name': 'dnistrovskyi',
      '$kuid': 'I6jm2O8ip',
      'label': [
        'Dnistrovskyi',
        'Дністровський'
      ],
      'oblast': 'chernivetska',
      'list_name': 'raion',
      '$autovalue': 'dnistrovskyi'
    },
    {
      'name': 'cnernivetskyi',
      '$kuid': 'zENnqcDEA',
      'label': [
        'Cnernivetskyi',
        'Чернівецький'
      ],
      'oblast': 'chernivetska',
      'list_name': 'raion',
      '$autovalue': 'cnernivetskyi'
    },
    {
      'name': 'dniprovskyi',
      '$kuid': 'ePpEjvD9v',
      'label': [
        'Dniprovskyi',
        'Дніпровський'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'dniprovskyi'
    },
    {
      'name': 'kamianskyi',
      '$kuid': '0vjR8eKUl',
      'label': [
        'Kamianskyi',
        'Кам’янський'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'kamianskyi'
    },
    {
      'name': 'kryvorizkyi',
      '$kuid': 'GpAcRZffr',
      'label': [
        'Kryvorizkyi',
        'Криворізький'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'kryvorizkyi'
    },
    {
      'name': 'nikopolskyi',
      '$kuid': 'skADV2rsU',
      'label': [
        'Nikopolskyi',
        'Нікопольський'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'nikopolskyi'
    },
    {
      'name': 'novomoskovskyi',
      '$kuid': 'CdzdfK7U4',
      'label': [
        'Novomoskovskyi',
        'Новомосковський'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'novomoskovskyi'
    },
    {
      'name': 'pavlohradskyi',
      '$kuid': 'cimUzHpE4',
      'label': [
        'Pavlohradskyi',
        'Павлоградський'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'pavlohradskyi'
    },
    {
      'name': 'synelnykivskyi',
      '$kuid': 'ral79X5WM',
      'label': [
        'Synelnykivskyi',
        'Синельниківський'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'synelnykivskyi'
    },
    {
      'name': 'bakhmutskyi',
      '$kuid': 'Q0ptdXymX',
      'label': [
        'Bakhmutskyi',
        'Бахмутський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'bakhmutskyi'
    },
    {
      'name': 'volnovaskyi',
      '$kuid': 'YyI0sYQ1x',
      'label': [
        'Volnovaskyi',
        'Волноваський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'volnovaskyi'
    },
    {
      'name': 'horlivskyi',
      '$kuid': 'kMQ8yszvh',
      'label': [
        'Horlivskyi',
        'Горлівський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'horlivskyi'
    },
    {
      'name': 'donetskyi',
      '$kuid': 'zJjh7gZEe',
      'label': [
        'Donetskyi',
        'Донецький'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'donetskyi'
    },
    {
      'name': 'kalmiuskyi',
      '$kuid': '00646P4MB',
      'label': [
        'Kalmiuskyi',
        'Кальміуський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'kalmiuskyi'
    },
    {
      'name': 'kramatorskyi',
      '$kuid': 'i5hYbt3W8',
      'label': [
        'Kramatorskyi',
        'Краматорський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'kramatorskyi'
    },
    {
      'name': 'mariupolskyi',
      '$kuid': 'FGqtKovVT',
      'label': [
        'Mariupolskyi',
        'Маріупольський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'mariupolskyi'
    },
    {
      'name': 'pokrovskyi',
      '$kuid': 'PxpehBUIz',
      'label': [
        'Pokrovskyi',
        'Покровський'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'pokrovskyi'
    },
    {
      'name': 'verkhovynskyi',
      '$kuid': 'X7Eu0BjBT',
      'label': [
        'Verkhovynskyi',
        'Верховинський'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'verkhovynskyi'
    },
    {
      'name': 'ivano-frankivskyi',
      '$kuid': 'DqXWTV8uE',
      'label': [
        'Ivano-Frankivskyi',
        'Івано-Франківський'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'ivano-frankivskyi'
    },
    {
      'name': 'kaluskyi',
      '$kuid': 'syQrPduZL',
      'label': [
        'Kaluskyi',
        'Калуський'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'kaluskyi'
    },
    {
      'name': 'kolomyiskyi',
      '$kuid': 'ZIYUjKpPu',
      'label': [
        'Kolomyiskyi',
        'Коломийський'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'kolomyiskyi'
    },
    {
      'name': 'kosivskyi',
      '$kuid': 'uEpFxNxWM',
      'label': [
        'Kosivskyi',
        'Косівський'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'kosivskyi'
    },
    {
      'name': 'nadvirnianskyi',
      '$kuid': 'C7fb58rxH',
      'label': [
        'Nadvirnianskyi',
        'Надвірнянський'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'nadvirnianskyi'
    },
    {
      'name': 'bohodukhivskyi',
      '$kuid': 'lMhRgxhI5',
      'label': [
        'Bohodukhivskyi',
        'Богодухівський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'bohodukhivskyi'
    },
    {
      'name': 'iziumskyi',
      '$kuid': 'TJJHFuuK8',
      'label': [
        'Iziumskyi',
        'Ізюмський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'iziumskyi'
    },
    {
      'name': 'krasnohradskyi',
      '$kuid': 'Rrck1TqXJ',
      'label': [
        'Krasnohradskyi',
        'Красноградський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'krasnohradskyi'
    },
    {
      'name': 'kupianskyi',
      '$kuid': '1Yyi0MBFI',
      'label': [
        'Kupianskyi',
        'Куп\'янський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'kupianskyi'
    },
    {
      'name': 'lozivskyi',
      '$kuid': 'ES4WBXhMb',
      'label': [
        'Lozivskyi',
        'Лозівський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'lozivskyi'
    },
    {
      'name': 'kharkivskyi',
      '$kuid': 'WTHWucYU9',
      'label': [
        'Kharkivskyi',
        'Харківський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'kharkivskyi'
    },
    {
      'name': 'chuhuivskyi',
      '$kuid': 'SVLAejsid',
      'label': [
        'Chuhuivskyi',
        'Чугуївський'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'chuhuivskyi'
    },
    {
      'name': 'beryslavskyi',
      '$kuid': 'qrsjFDI18',
      'label': [
        'Beryslavskyi',
        'Бериславський'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'beryslavskyi'
    },
    {
      'name': 'henicheskyi',
      '$kuid': 'CwhwrKjaR',
      'label': [
        'Henicheskyi',
        'Генічеський'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'henicheskyi'
    },
    {
      'name': 'kakhovskyi',
      '$kuid': '9NZ3B48Ou',
      'label': [
        'Kakhovskyi',
        'Каховський'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'kakhovskyi'
    },
    {
      'name': 'skadovskyi',
      '$kuid': 'odd0D5PnA',
      'label': [
        'Skadovskyi',
        'Скадовський'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'skadovskyi'
    },
    {
      'name': 'khersonskyi',
      '$kuid': 't0JsRlgZI',
      'label': [
        'Khersonskyi',
        'Херсонський'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'khersonskyi'
    },
    {
      'name': 'kamianets-podilskyi',
      '$kuid': '12vd9kjkr',
      'label': [
        'Kamianets-Podilskyi',
        'Кам\'янець-Подільський'
      ],
      'oblast': 'khmelnytska',
      'list_name': 'raion',
      '$autovalue': 'kamianets-podilskyi'
    },
    {
      'name': 'khmelnytskyi',
      '$kuid': 'rkj6zBeoh',
      'label': [
        'Khmelnytskyi',
        'Хмельницький'
      ],
      'oblast': 'khmelnytska',
      'list_name': 'raion',
      '$autovalue': 'khmelnytskyi'
    },
    {
      'name': 'shepetivskyi',
      '$kuid': 'XIXvT0cUo',
      'label': [
        'Shepetivskyi',
        'Шепетівський'
      ],
      'oblast': 'khmelnytska',
      'list_name': 'raion',
      '$autovalue': 'shepetivskyi'
    },
    {
      'name': 'holovanivskyi',
      '$kuid': 'Oj915sLbh',
      'label': [
        'Holovanivskyi',
        'Голованівський'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'holovanivskyi'
    },
    {
      'name': 'kropyvnytskyi',
      '$kuid': 'xil6s9T4w',
      'label': [
        'Kropyvnytskyi',
        'Кропивницький'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'kropyvnytskyi'
    },
    {
      'name': 'novoukrainskyi',
      '$kuid': 'AZtd8rMER',
      'label': [
        'Novoukrainskyi',
        'Новоукраїнський'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'novoukrainskyi'
    },
    {
      'name': 'oleksandriiskyi',
      '$kuid': 'vTkKYYeCu',
      'label': [
        'Oleksandriiskyi',
        'Олександрійський'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'oleksandriiskyi'
    },
    {
      'name': 'chornobylska zona vidchuzhennia',
      '$kuid': 'ygSgXNuxL',
      'label': [
        'Chornobylska Zona Vidchuzhennia',
        'Чорнобильська зона відчуження'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'chornobylska zona vidchuzhennia'
    },
    {
      'name': 'bilotserkivskyi',
      '$kuid': '4d04db3IT',
      'label': [
        'Bilotserkivskyi',
        'Білоцерківський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'bilotserkivskyi'
    },
    {
      'name': 'boryspilskyi',
      '$kuid': 'xd2J32t65',
      'label': [
        'Boryspilskyi',
        'Бориспільський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'boryspilskyi'
    },
    {
      'name': 'brovarskyi',
      '$kuid': 'pfqWWb3EQ',
      'label': [
        'Brovarskyi',
        'Броварський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'brovarskyi'
    },
    {
      'name': 'buchanskyi',
      '$kuid': 'pyUhBmqZ0',
      'label': [
        'Buchanskyi',
        'Бучанський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'buchanskyi'
    },
    {
      'name': 'vyshhorodskyi',
      '$kuid': 'VSPfBYwZY',
      'label': [
        'Vyshhorodskyi',
        'Вишгородський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'vyshhorodskyi'
    },
    {
      'name': 'obukhivskyi',
      '$kuid': '4SaAWQClk',
      'label': [
        'Obukhivskyi',
        'Обухівський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'obukhivskyi'
    },
    {
      'name': 'fastivskyi',
      '$kuid': 'L7ODNVAWQ',
      'label': [
        'Fastivskyi',
        'Фастівський'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'fastivskyi'
    },
    {
      'name': 'kyivska',
      '$kuid': '8ro6Qay2N',
      'label': [
        'Kyivska',
        'Київська'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'kyivska'
    },
    {
      'name': 'alchevskyi',
      '$kuid': '2OthT1tvm',
      'label': [
        'Alchevskyi',
        'Алчевський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'alchevskyi'
    },
    {
      'name': 'dovzhanskyi',
      '$kuid': 'q1fKQLlLU',
      'label': [
        'Dovzhanskyi',
        'Довжанський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'dovzhanskyi'
    },
    {
      'name': 'luhanskyi',
      '$kuid': 'KUgDwbBaw',
      'label': [
        'Luhanskyi',
        'Луганський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'luhanskyi'
    },
    {
      'name': 'rovenkivskyi',
      '$kuid': '1IqZANWof',
      'label': [
        'Rovenkivskyi',
        'Ровеньківський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'rovenkivskyi'
    },
    {
      'name': 'svativskyi',
      '$kuid': 'gczbXM25O',
      'label': [
        'Svativskyi',
        'Сватівський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'svativskyi'
    },
    {
      'name': 'sievierodonetskyi',
      '$kuid': 'AwPUUBMM5',
      'label': [
        'Sievierodonetskyi',
        'Сєвєродонецький'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'sievierodonetskyi'
    },
    {
      'name': 'starobilskyi',
      '$kuid': 'lVsEl3PVO',
      'label': [
        'Starobilskyi',
        'Старобільський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'starobilskyi'
    },
    {
      'name': 'shchastynskyi',
      '$kuid': 'DageCERux',
      'label': [
        'Shchastynskyi',
        'Щастинський'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'shchastynskyi'
    },
    {
      'name': 'drohobytskyi',
      '$kuid': 'Lx7nGmPrD',
      'label': [
        'Drohobytskyi',
        'Дрогобицький'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'drohobytskyi'
    },
    {
      'name': 'zolochivskyi',
      '$kuid': 'hMieRJGKh',
      'label': [
        'Zolochivskyi',
        'Золочівський'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'zolochivskyi'
    },
    {
      'name': 'lvivskyi',
      '$kuid': 'LJ017Ne54',
      'label': [
        'Lvivskyi',
        'Львівський'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'lvivskyi'
    },
    {
      'name': 'sambirskyi',
      '$kuid': 'CZCzbyzCQ',
      'label': [
        'Sambirskyi',
        'Самбірський'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'sambirskyi'
    },
    {
      'name': 'stryiskyi',
      '$kuid': '5o7vuW7hI',
      'label': [
        'Stryiskyi',
        'Стрийський'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'stryiskyi'
    },
    {
      'name': 'chervonohradskyi',
      '$kuid': 'h1Rf0xqYg',
      'label': [
        'Chervonohradskyi',
        'Червоноградський'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'chervonohradskyi'
    },
    {
      'name': 'yavorivskyi',
      '$kuid': 'N3ilhKCXI',
      'label': [
        'Yavorivskyi',
        'Яворівський'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'yavorivskyi'
    },
    {
      'name': 'bashtanskyi',
      '$kuid': 'UjnYWwdW9',
      'label': [
        'Bashtanskyi',
        'Баштанський'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'bashtanskyi'
    },
    {
      'name': 'voznesenskyi',
      '$kuid': 'wz3AHcHYk',
      'label': [
        'Voznesenskyi',
        'Вознесенський'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'voznesenskyi'
    },
    {
      'name': 'mykolaivskyi',
      '$kuid': 'ew48GRkyr',
      'label': [
        'Mykolaivskyi',
        'Миколаївський'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'mykolaivskyi'
    },
    {
      'name': 'pervomaiskyi',
      '$kuid': 'wetrj6OSz',
      'label': [
        'Pervomaiskyi',
        'Первомайський'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'pervomaiskyi'
    },
    {
      'name': 'berezivskyi',
      '$kuid': 'k5iuAfh1c',
      'label': [
        'Berezivskyi',
        'Березівський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'berezivskyi'
    },
    {
      'name': 'bilhorod-dnistrovskyi',
      '$kuid': 'vZKMtaTn0',
      'label': [
        'Bilhorod-Dnistrovskyi',
        'Білгород-Дністровський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'bilhorod-dnistrovskyi'
    },
    {
      'name': 'bolhradskyi',
      '$kuid': 'hJZ8vMLQe',
      'label': [
        'Bolhradskyi',
        'Болградський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'bolhradskyi'
    },
    {
      'name': 'izmailskyi',
      '$kuid': 'ZK6hns1D9',
      'label': [
        'Izmailskyi',
        'Ізмаїльський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'izmailskyi'
    },
    {
      'name': 'odeskyi',
      '$kuid': 'R60AsVexE',
      'label': [
        'Odeskyi',
        'Одеський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'odeskyi'
    },
    {
      'name': 'podilskyi',
      '$kuid': 'sRWXYwWEe',
      'label': [
        'Podilskyi',
        'Подільський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'podilskyi'
    },
    {
      'name': 'rozdilnianskyi',
      '$kuid': 'UW0AQyLdV',
      'label': [
        'Rozdilnianskyi',
        'Роздільнянський'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'rozdilnianskyi'
    },
    {
      'name': 'kremenchutskyi',
      '$kuid': 'dIPmOaXro',
      'label': [
        'Kremenchutskyi',
        'Кременчуцький'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'kremenchutskyi'
    },
    {
      'name': 'lubenskyi',
      '$kuid': 'XXOJf6eJt',
      'label': [
        'Lubenskyi',
        'Лубенський'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'lubenskyi'
    },
    {
      'name': 'myrhorodskyi',
      '$kuid': 'MWgkk812b',
      'label': [
        'Myrhorodskyi',
        'Миргородський'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'myrhorodskyi'
    },
    {
      'name': 'poltavskyi',
      '$kuid': '0VcxWzsdr',
      'label': [
        'Poltavskyi',
        'Полтавський'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'poltavskyi'
    },
    {
      'name': 'varaskyi',
      '$kuid': '7O2Vi2J7D',
      'label': [
        'Varaskyi',
        'Вараський'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'varaskyi'
    },
    {
      'name': 'dubenskyi',
      '$kuid': 'dzRogUPQ2',
      'label': [
        'Dubenskyi',
        'Дубенський'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'dubenskyi'
    },
    {
      'name': 'rivnenskyi',
      '$kuid': 'uTVR7wtiJ',
      'label': [
        'Rivnenskyi',
        'Рівненський'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'rivnenskyi'
    },
    {
      'name': 'sarnenskyi',
      '$kuid': 'df5CKvfZI',
      'label': [
        'Sarnenskyi',
        'Сарненський'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'sarnenskyi'
    },
    {
      'name': 'sevastopilska',
      '$kuid': 'PuE8C1wDu',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'oblast': 'sevastopilska',
      'list_name': 'raion',
      '$autovalue': 'sevastopilska'
    },
    {
      'name': 'konotopskyi',
      '$kuid': 'HgQ5PoYXB',
      'label': [
        'Konotopskyi',
        'Конотопський'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'konotopskyi'
    },
    {
      'name': 'okhtyrskyi',
      '$kuid': 'U4Ph36PbE',
      'label': [
        'Okhtyrskyi',
        'Охтирський'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'okhtyrskyi'
    },
    {
      'name': 'romenskyi',
      '$kuid': 'EUZSH790p',
      'label': [
        'Romenskyi',
        'Роменський'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'romenskyi'
    },
    {
      'name': 'sumskyi',
      '$kuid': 'VlK28e1KN',
      'label': [
        'Sumskyi',
        'Сумський'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'sumskyi'
    },
    {
      'name': 'shostkynskyi',
      '$kuid': 'rvC3sjQam',
      'label': [
        'Shostkynskyi',
        'Шосткинський'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'shostkynskyi'
    },
    {
      'name': 'kremenetskyi',
      '$kuid': 'yU5YZWuKH',
      'label': [
        'Kremenetskyi',
        'Кременецький'
      ],
      'oblast': 'ternopilska',
      'list_name': 'raion',
      '$autovalue': 'kremenetskyi'
    },
    {
      'name': 'ternopilskyi',
      '$kuid': 'maQZSepL7',
      'label': [
        'Ternopilskyi',
        'Тернопільський'
      ],
      'oblast': 'ternopilska',
      'list_name': 'raion',
      '$autovalue': 'ternopilskyi'
    },
    {
      'name': 'chortkivskyi',
      '$kuid': 'uc6pzbRKN',
      'label': [
        'Chortkivskyi',
        'Чортківський'
      ],
      'oblast': 'ternopilska',
      'list_name': 'raion',
      '$autovalue': 'chortkivskyi'
    },
    {
      'name': 'vinnytskyi',
      '$kuid': 'X6LG6eqwO',
      'label': [
        'Vinnytskyi',
        'Вінницький'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'vinnytskyi'
    },
    {
      'name': 'haisynskyi',
      '$kuid': 'uGPdCIvoS',
      'label': [
        'Haisynskyi',
        'Гайсинський'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'haisynskyi'
    },
    {
      'name': 'zhmerynskyi',
      '$kuid': 'SBpktt14F',
      'label': [
        'Zhmerynskyi',
        'Жмеринський'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'zhmerynskyi'
    },
    {
      'name': 'mohyliv-podilskyi',
      '$kuid': 'syyKVcmPx',
      'label': [
        'Mohyliv-Podilskyi',
        'Могилів-Подільський'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'mohyliv-podilskyi'
    },
    {
      'name': 'tulchynskyi',
      '$kuid': 'so4bdq4ex',
      'label': [
        'Tulchynskyi',
        'Тульчинський'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'tulchynskyi'
    },
    {
      'name': 'khmilnytskyi',
      '$kuid': 'ztTlIEMzN',
      'label': [
        'Khmilnytskyi',
        'Хмільницький'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'khmilnytskyi'
    },
    {
      'name': 'volodymyr-volynskyi',
      '$kuid': 'Zsp74gaUe',
      'label': [
        'Volodymyr-Volynskyi',
        'Володимир-Волинський'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'volodymyr-volynskyi'
    },
    {
      'name': 'kamin-kashyrskyi',
      '$kuid': 'KQ5fvQ3jL',
      'label': [
        'Kamin-Kashyrskyi',
        'Камінь-Каширський'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'kamin-kashyrskyi'
    },
    {
      'name': 'kovelskyi',
      '$kuid': 'BTL66pHjJ',
      'label': [
        'Kovelskyi',
        'Ковельський'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'kovelskyi'
    },
    {
      'name': 'lutskyi',
      '$kuid': 'tzEcTFOd0',
      'label': [
        'Lutskyi',
        'Луцький'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'lutskyi'
    },
    {
      'name': 'berehivskyi',
      '$kuid': 'QHCGJcwK8',
      'label': [
        'Berehivskyi',
        'Берегівський'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'berehivskyi'
    },
    {
      'name': 'mukachivskyi',
      '$kuid': 'QhhfHB18t',
      'label': [
        'Mukachivskyi',
        'Мукачівський'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'mukachivskyi'
    },
    {
      'name': 'rakhivskyi',
      '$kuid': 'xlpbmfOnr',
      'label': [
        'Rakhivskyi',
        'Рахівський'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'rakhivskyi'
    },
    {
      'name': 'tiachivskyi',
      '$kuid': 'F24eg1vn9',
      'label': [
        'Tiachivskyi',
        'Тячівський'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'tiachivskyi'
    },
    {
      'name': 'uzhhorodskyi',
      '$kuid': 'a9dLGKj0c',
      'label': [
        'Uzhhorodskyi',
        'Ужгородський'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'uzhhorodskyi'
    },
    {
      'name': 'khustskyi',
      '$kuid': 'kbtqoYrXz',
      'label': [
        'Khustskyi',
        'Хустський'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'khustskyi'
    },
    {
      'name': 'berdianskyi',
      '$kuid': 'RwIjb6vPx',
      'label': [
        'Berdianskyi',
        'Бердянський'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'berdianskyi'
    },
    {
      'name': 'vasylivskyi',
      '$kuid': 'GPPzcdj3M',
      'label': [
        'Vasylivskyi',
        'Василівський'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'vasylivskyi'
    },
    {
      'name': 'zaporizkyi',
      '$kuid': 'gOBeSgota',
      'label': [
        'Zaporizkyi',
        'Запорізький'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'zaporizkyi'
    },
    {
      'name': 'melitopolskyi',
      '$kuid': 'KfmZpzWhB',
      'label': [
        'Melitopolskyi',
        'Мелітопольський'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'melitopolskyi'
    },
    {
      'name': 'polohivskyi',
      '$kuid': 'lxu382a5d',
      'label': [
        'Polohivskyi',
        'Пологівський'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'polohivskyi'
    },
    {
      'name': 'berdychivskyi',
      '$kuid': 'r7FMG1Y2d',
      'label': [
        'Berdychivskyi',
        'Бердичівський'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'berdychivskyi'
    },
    {
      'name': 'zhytomyrskyi',
      '$kuid': 'lS21u73zf',
      'label': [
        'Zhytomyrskyi',
        'Житомирський'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'zhytomyrskyi'
    },
    {
      'name': 'korostenskyi',
      '$kuid': 'OHd2QN1rf',
      'label': [
        'Korostenskyi',
        'Коростенський'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'korostenskyi'
    },
    {
      'name': 'novohrad-volynskyi',
      '$kuid': 'nFo8PPwBV',
      'label': [
        'Novohrad-Volynskyi',
        'Новоград-Волинський'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'novohrad-volynskyi'
    },
    {
      'name': 'abrykosivska',
      '$kuid': 'bAPL1Uozw',
      'label': [
        'Abrykosivska',
        'Абрикосівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'abrykosivska'
    },
    {
      'name': 'abrykosivska_2',
      '$kuid': 'DuqvidbSt',
      'label': [
        'Abrykosivska',
        'Абрикосівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'abrykosivska_2'
    },
    {
      'name': 'adzhamska',
      '$kuid': '7UKbdvsfu',
      'label': [
        'Adzhamska',
        'Аджамська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'adzhamska'
    },
    {
      'name': 'ahronomichna',
      '$kuid': 'JsrcCP8NE',
      'label': [
        'Ahronomichna',
        'Агрономічна'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ahronomichna'
    },
    {
      'name': 'alchevska',
      '$kuid': 'KLQQMOM9i',
      'label': [
        'Alchevska',
        'Алчевська'
      ],
      'raion': 'alchevskyi',
      'list_name': 'hromada',
      '$autovalue': 'alchevska'
    },
    {
      'name': 'alupkynska',
      '$kuid': 'yTMK3nJji',
      'label': [
        'Alupkynska',
        'Алупкинська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'alupkynska'
    },
    {
      'name': 'alushtynska',
      '$kuid': 'e57PS7jec',
      'label': [
        'Alushtynska',
        'Алуштинська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'alushtynska'
    },
    {
      'name': 'amurska',
      '$kuid': 'eHfcKL1Zs',
      'label': [
        'Amurska',
        'Амурська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'amurska'
    },
    {
      'name': 'amvrosiivska',
      '$kuid': 'tF9DkTmHZ',
      'label': [
        'Amvrosiivska',
        'Амвросіївська'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'amvrosiivska'
    },
    {
      'name': 'ananivska',
      '$kuid': 'LUzjJH9XO',
      'label': [
        'Ananivska',
        'Ананьївська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ananivska'
    },
    {
      'name': 'andriiashivska',
      '$kuid': '1AA3607gn',
      'label': [
        'Andriiashivska',
        'Андріяшівська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriiashivska'
    },
    {
      'name': 'andriievo-ivanivska',
      '$kuid': 'EBFq3cQ6e',
      'label': [
        'Andriievo-Ivanivska',
        'Андрієво-Іванівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriievo-ivanivska'
    },
    {
      'name': 'andriivska',
      '$kuid': 'yPsIcyXk8',
      'label': [
        'Andriivska',
        'Андріївська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriivska'
    },
    {
      'name': 'andriivska_2',
      '$kuid': 'wfWDmetij',
      'label': [
        'Andriivska',
        'Андріївська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriivska_2'
    },
    {
      'name': 'andrivska',
      '$kuid': 'M6Tu5NYFF',
      'label': [
        'Andrivska',
        'Андрівська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'andrivska'
    },
    {
      'name': 'andrushivska',
      '$kuid': 'JVqsVfdmJ',
      'label': [
        'Andrushivska',
        'Андрушівська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'andrushivska'
    },
    {
      'name': 'andrushkivska',
      '$kuid': 'et1WhoJO0',
      'label': [
        'Andrushkivska',
        'Андрушківська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'andrushkivska'
    },
    {
      'name': 'antoninska',
      '$kuid': 'BFH7OXIAE',
      'label': [
        'Antoninska',
        'Антонінська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'antoninska'
    },
    {
      'name': 'antonivska',
      '$kuid': 'BSz1mf1Xk',
      'label': [
        'Antonivska',
        'Антонівська'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'antonivska'
    },
    {
      'name': 'antratsytivska',
      '$kuid': 'hpO1u1fGW',
      'label': [
        'Antratsytivska',
        'Антрацитівська'
      ],
      'raion': 'rovenkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'antratsytivska'
    },
    {
      'name': 'apostolivska',
      '$kuid': 'VceBPyEba',
      'label': [
        'Apostolivska',
        'Апостолівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'apostolivska'
    },
    {
      'name': 'arbuzynska',
      '$kuid': 'in491pwHT',
      'label': [
        'Arbuzynska',
        'Арбузинська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'arbuzynska'
    },
    {
      'name': 'armianska',
      '$kuid': 'jexIb6Yz8',
      'label': [
        'Armianska',
        'Армянська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'armianska'
    },
    {
      'name': 'aromatnenska',
      '$kuid': 'P96HhQ03n',
      'label': [
        'Aromatnenska',
        'Ароматненська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'aromatnenska'
    },
    {
      'name': 'aromatnivska',
      '$kuid': 'zj9XCyiFE',
      'label': [
        'Aromatnivska',
        'Ароматнівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'aromatnivska'
    },
    {
      'name': 'artsyzka',
      '$kuid': 'jjI7yQKVN',
      'label': [
        'Artsyzka',
        'Арцизька'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'artsyzka'
    },
    {
      'name': 'askaniia-nova',
      '$kuid': 'Kfbpb6TNT',
      'label': [
        'Askaniia-Nova',
        'Асканія-Нова'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'askaniia-nova'
    },
    {
      'name': 'avanhardivska',
      '$kuid': 'kP06sGgSE',
      'label': [
        'Avanhardivska',
        'Авангардівська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'avanhardivska'
    },
    {
      'name': 'avdiivska',
      '$kuid': 'NQa0aIEI8',
      'label': [
        'Avdiivska',
        'Авдіївська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'avdiivska'
    },
    {
      'name': 'azovska',
      '$kuid': 'xDPo6hgLC',
      'label': [
        'Azovska',
        'Азовська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'azovska'
    },
    {
      'name': 'babanska',
      '$kuid': 'XcTGzr2Ph',
      'label': [
        'Babanska',
        'Бабанська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'babanska'
    },
    {
      'name': 'babchynetska',
      '$kuid': 'qzdf5bET1',
      'label': [
        'Babchynetska',
        'Бабчинецька'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'babchynetska'
    },
    {
      'name': 'babynska',
      '$kuid': 'BQRHpDD6x',
      'label': [
        'Babynska',
        'Бабинська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'babynska'
    },
    {
      'name': 'bahativska',
      '$kuid': 'xkvIfgTYN',
      'label': [
        'Bahativska',
        'Багатівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'bahativska'
    },
    {
      'name': 'baherivska',
      '$kuid': 'dP97YYhCT',
      'label': [
        'Baherivska',
        'Багерівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'baherivska'
    },
    {
      'name': 'baikovetska',
      '$kuid': 'jn1JxoQA5',
      'label': [
        'Baikovetska',
        'Байковецька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'baikovetska'
    },
    {
      'name': 'bakhchysaraiska',
      '$kuid': 'DJsQDT3WK',
      'label': [
        'Bakhchysaraiska',
        'Бахчисарайська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'bakhchysaraiska'
    },
    {
      'name': 'bakhmatska',
      '$kuid': 'Sz8KPOeQd',
      'label': [
        'Bakhmatska',
        'Бахмацька'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bakhmatska'
    },
    {
      'name': 'bakhmutska',
      '$kuid': 'IvqETK6cT',
      'label': [
        'Bakhmutska',
        'Бахмутська'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'bakhmutska'
    },
    {
      'name': 'balakleivska',
      '$kuid': 'xX1SRMEtb',
      'label': [
        'Balakleivska',
        'Балаклеївська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'balakleivska'
    },
    {
      'name': 'balakliiska',
      '$kuid': 'MEdOYBYpS',
      'label': [
        'Balakliiska',
        'Балаклійська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'balakliiska'
    },
    {
      'name': 'baltska',
      '$kuid': 'X9x9TJWBO',
      'label': [
        'Baltska',
        'Балтська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'baltska'
    },
    {
      'name': 'banylivska',
      '$kuid': 'A5k0DV1d2',
      'label': [
        'Banylivska',
        'Банилівська'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'banylivska'
    },
    {
      'name': 'baranivska',
      '$kuid': 'ayDN3utCl',
      'label': [
        'Baranivska',
        'Баранівська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'baranivska'
    },
    {
      'name': 'baranynska',
      '$kuid': 'qvBPDH4t6',
      'label': [
        'Baranynska',
        'Баранинська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'baranynska'
    },
    {
      'name': 'barashivska',
      '$kuid': 'a1r0dcG6Q',
      'label': [
        'Barashivska',
        'Барашівська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'barashivska'
    },
    {
      'name': 'barska',
      '$kuid': 'nZduefsfm',
      'label': [
        'Barska',
        'Барська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'barska'
    },
    {
      'name': 'barvinkivska',
      '$kuid': 'mHRB27xy6',
      'label': [
        'Barvinkivska',
        'Барвінківська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'barvinkivska'
    },
    {
      'name': 'baryshivska',
      '$kuid': 'MPu1GaQij',
      'label': [
        'Baryshivska',
        'Баришівська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'baryshivska'
    },
    {
      'name': 'bashtanska',
      '$kuid': 'v0lwyAsHb',
      'label': [
        'Bashtanska',
        'Баштанська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bashtanska'
    },
    {
      'name': 'bashtechkivska',
      '$kuid': 'RP77kTS0v',
      'label': [
        'Bashtechkivska',
        'Баштечківська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bashtechkivska'
    },
    {
      'name': 'batalnenska',
      '$kuid': '14PsEglCh',
      'label': [
        'Batalnenska',
        'Батальненська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'batalnenska'
    },
    {
      'name': 'bativska',
      '$kuid': 'tjPKjjnLl',
      'label': [
        'Bativska',
        'Батівська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bativska'
    },
    {
      'name': 'baturynska',
      '$kuid': 'hCTgSxsQg',
      'label': [
        'Baturynska',
        'Батуринська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'baturynska'
    },
    {
      'name': 'bedevlianska',
      '$kuid': 'rQNNQczvs',
      'label': [
        'Bedevlianska',
        'Бедевлянська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bedevlianska'
    },
    {
      'name': 'bekhterska',
      '$kuid': 'DiOjyQ0Pv',
      'label': [
        'Bekhterska',
        'Бехтерська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'bekhterska'
    },
    {
      'name': 'belzka',
      '$kuid': 'VS9I1z3TS',
      'label': [
        'Belzka',
        'Белзька'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'belzka'
    },
    {
      'name': 'berdianska',
      '$kuid': 'EMZHYxLkq',
      'label': [
        'Berdianska',
        'Бердянська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'berdianska'
    },
    {
      'name': 'berdychivska',
      '$kuid': 'W7FqBazku',
      'label': [
        'Berdychivska',
        'Бердичівська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berdychivska'
    },
    {
      'name': 'berehivska',
      '$kuid': 'q0heE6IoB',
      'label': [
        'Berehivska',
        'Берегівська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berehivska'
    },
    {
      'name': 'berehometska',
      '$kuid': 'Dhqj7HPzi',
      'label': [
        'Berehometska',
        'Берегометська'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'berehometska'
    },
    {
      'name': 'berehova',
      '$kuid': 'OBX0dAy1V',
      'label': [
        'Berehova',
        'Берегова'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'berehova'
    },
    {
      'name': 'berestechkivska',
      '$kuid': 'fnHAj4mPA',
      'label': [
        'Berestechkivska',
        'Берестечківська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'berestechkivska'
    },
    {
      'name': 'berestivska',
      '$kuid': 'HziayCp8Y',
      'label': [
        'Berestivska',
        'Берестівська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'berestivska'
    },
    {
      'name': 'berezanska',
      '$kuid': 'TBGr67iDh',
      'label': [
        'Berezanska',
        'Березанська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezanska'
    },
    {
      'name': 'berezanska_2',
      '$kuid': 'K5442ypRS',
      'label': [
        'Berezanska',
        'Березанська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezanska_2'
    },
    {
      'name': 'berezdivska',
      '$kuid': 'sMk1NdEwC',
      'label': [
        'Berezdivska',
        'Берездівська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezdivska'
    },
    {
      'name': 'berezhanska',
      '$kuid': 'sPpmRCNQ1',
      'label': [
        'Berezhanska',
        'Бережанська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezhanska'
    },
    {
      'name': 'berezivska',
      '$kuid': 'Py4S6hXXm',
      'label': [
        'Berezivska',
        'Березівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska'
    },
    {
      'name': 'berezivska_2',
      '$kuid': 'QY3vkUyMn',
      'label': [
        'Berezivska',
        'Березівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_2'
    },
    {
      'name': 'berezivska_3',
      '$kuid': 'exLnbC2Fm',
      'label': [
        'Berezivska',
        'Березівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_3'
    },
    {
      'name': 'berezivska_4',
      '$kuid': 'KhrWSdpPp',
      'label': [
        'Berezivska',
        'Березівська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_4'
    },
    {
      'name': 'berezivska_5',
      '$kuid': 'uQq4qE2R4',
      'label': [
        'Berezivska',
        'Березівська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_5'
    },
    {
      'name': 'bereznehuvatska',
      '$kuid': 'j9gAQ811X',
      'label': [
        'Bereznehuvatska',
        'Березнегуватська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bereznehuvatska'
    },
    {
      'name': 'berezniakivska',
      '$kuid': 'Uw4nrInh9',
      'label': [
        'Berezniakivska',
        'Березняківська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezniakivska'
    },
    {
      'name': 'bereznianska',
      '$kuid': 'x7ttEaYki',
      'label': [
        'Bereznianska',
        'Березнянська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bereznianska'
    },
    {
      'name': 'bereznivska',
      '$kuid': 'iVElp95D6',
      'label': [
        'Bereznivska',
        'Березнівська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bereznivska'
    },
    {
      'name': 'bershadska',
      '$kuid': 'rnvnL3vuv',
      'label': [
        'Bershadska',
        'Бершадська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bershadska'
    },
    {
      'name': 'beryslavska',
      '$kuid': 'e5PZlyG3l',
      'label': [
        'Beryslavska',
        'Бериславська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'beryslavska'
    },
    {
      'name': 'bezdrytska',
      '$kuid': 'vPxjqJHF0',
      'label': [
        'Bezdrytska',
        'Бездрицька'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'bezdrytska'
    },
    {
      'name': 'zvanivska',
      '$kuid': 'J7UtT89io',
      'label': [
        'Zvanivska',
        'Званівська'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'zvanivska'
    },
    {
      'name': 'zvenyhorodska',
      '$kuid': 'UXu2zINx1',
      'label': [
        'Zvenyhorodska',
        'Звенигородська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'zvenyhorodska'
    },
    {
      'name': 'zybynska',
      '$kuid': 'hmwiO4Svo',
      'label': [
        'Zybynska',
        'Зибинська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zybynska'
    },
    {
      'name': 'zymnivska',
      '$kuid': '6N40zVOyA',
      'label': [
        'Zymnivska',
        'Зимнівська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymnivska'
    },
    {
      'name': 'zymnovodivska',
      '$kuid': 'TMzdQy5m6',
      'label': [
        'Zymnovodivska',
        'Зимноводівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymnovodivska'
    },
    {
      'name': 'zymohirivska',
      '$kuid': 'nN6znSrMx',
      'label': [
        'Zymohirivska',
        'Зимогір\'ївська'
      ],
      'raion': 'alchevskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymohirivska'
    },
    {
      'name': 'zymynska',
      '$kuid': 'vO7VNy9V8',
      'label': [
        'Zymynska',
        'Зиминська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymynska'
    },
    {
      'name': 'idp',
      '$kuid': 'HJs99qDaC',
      'label': [
        'A = Internally Displaced Person (IDP)',
        'A = Внутрішньо-переміщена особа (ВПО)'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'idp'
    },
    {
      'name': 'long_res',
      '$kuid': 'JpHP4XWDP',
      'label': [
        'B = Long - Term Resident',
        'B = Довгостроковий мешканець'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'long_res'
    },
    {
      'name': 'ret',
      '$kuid': 'hFwAS312K',
      'label': [
        'C = Returnee',
        'C = Особа, яка повернулася'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'ret'
    },
    {
      'name': 'ref_asy',
      '$kuid': 'bvfl2G5zS',
      'label': [
        'D = Refugee/asylum seeker',
        'D = Біженець/особа, що потребує прихистку'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'ref_asy'
    },
    {
      'name': 'male',
      '$kuid': 'ZOQx7j2fe',
      'label': [
        'A = Male',
        'A = Чоловік'
      ],
      'list_name': 'gender',
      '$autovalue': 'male'
    },
    {
      'name': 'female',
      '$kuid': 'z8ZLZPFx1',
      'label': [
        'B = Female',
        'B = Жінка'
      ],
      'list_name': 'gender',
      '$autovalue': 'female'
    },
    {
      'name': 'single',
      '$kuid': 'ti2S9jowt',
      'label': [
        'A = Single (Never Married)',
        'A = Неодружений(-а) (ніколи не був(-ла) одружений(-а))'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'single'
    },
    {
      'name': 'dom_part',
      '$kuid': 'FQk9SXPNK',
      'label': [
        'B = Not Married but Living in Domestic Partnership',
        'B = Неодружений(-а), але живе у сімейному партнерстві'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'dom_part'
    },
    {
      'name': 'married',
      '$kuid': '6UUDapQAe',
      'label': [
        'C = Married',
        'C = Одружений(-а)'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'married'
    },
    {
      'name': 'div_sep',
      '$kuid': 'ecMSlxqiw',
      'label': [
        'D = Divorced/Seperated',
        'D = Розлучений(-а)/ проживає окремо'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'div_sep'
    },
    {
      'name': 'widow',
      '$kuid': '1V4NeVf1i',
      'label': [
        'E = Widowed',
        'E = Удівець/ вдова'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'widow'
    },
    {
      'name': 'abandoned',
      '$kuid': 'tLZ5qlskY',
      'label': [
        'F = Abandoned',
        'F = Покинутий(-а)'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'abandoned'
    },
    {
      'name': 'diff_see',
      '$kuid': '0rkTO71bV',
      'label': [
        'A = Have difficulty seeing, even if wearing glasses',
        'A = Маєте труднощі із зором, навіть якщо носите окуляри'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_see'
    },
    {
      'name': 'diff_hear',
      '$kuid': 'qqk8UAPCg',
      'label': [
        'B = Have difficulty hearing, even if using a hearing aid',
        'B = Маєте проблеми зі слухом, навіть якщо користуєтеся слуховим апаратом'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_hear'
    },
    {
      'name': 'diff_walk',
      '$kuid': '6aH4GXsVB',
      'label': [
        'C = Have difficulty walking or climbing steps',
        'C = Маєте труднощі з ходьбою або підйомом по сходах'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_walk'
    },
    {
      'name': 'diff_rem',
      '$kuid': 'vZPT2ObBd',
      'label': [
        'D = Have difficulty remembering or concentrating',
        'D = Маєте труднощі з запам\'ятовуванням або концентрацією уваги'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_rem'
    },
    {
      'name': 'diff_care',
      '$kuid': 'Tb0XX2kwE',
      'label': [
        'E = Have difficulty with self-care such as washing all over or dressing',
        'E = Мають труднощі з самообслуговуванням, наприклад, з миттям або одяганням'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_care'
    },
    {
      'name': 'diff_comm',
      '$kuid': 'b3sL6HCj2',
      'label': [
        'F = Have difficulty communicating, for example understanding or being understood',
        'F = Маєте труднощі у спілкуванні, наприклад, у розумінні чи розумінні інших людей'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_comm'
    },
    {
      'name': 'diff_none',
      '$kuid': 'loX0gUT8h',
      'label': [
        'G = None of the above apply',
        'G = Ніщо з перерахованого вище не стосується'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_none'
    },
    {
      'name': 'zero',
      '$kuid': 'IAn9k7b9Z',
      'label': [
        'A = No, no difficulty',
        'A = Ні, труднощі відсутні'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'zero'
    },
    {
      'name': 'one',
      '$kuid': 'FG2ssdGPx',
      'label': [
        'B = Yes, some difficulty',
        'B = Так, є деякі труднощі'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'one'
    },
    {
      'name': 'two',
      '$kuid': 'GAa0F1sqt',
      'label': [
        'C = Yes, a lot of difficulty',
        'C = Так, багато труднощів'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'two'
    },
    {
      'name': 'fri',
      '$kuid': 'E7xJCWrF7',
      'label': [
        'D = Cannot do at all',
        'D = Взагалі не можу(-е) робити'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'fri'
    },
    {
      'name': 'no_damage',
      '$kuid': 'RxMxOJ7wt',
      'label': [
        'No Structural Damage',
        'Відсутність структурних пошкоджень'
      ],
      'list_name': 'shelter_damage',
      '$autovalue': 'no_damage'
    },
    {
      'name': 'minor_damage',
      '$kuid': 'aAD9ol3g9',
      'label': [
        'Minor Damage (light or medium damages such as broken windows and doors, minor roof damage)',
        'незначні пошкодження (легкі або середні пошкодження, такі як розбиті вікна та двері, незначні пошкодження даху)'
      ],
      'list_name': 'shelter_damage',
      '$autovalue': 'minor_damage'
    },
    {
      'name': 'heavy_damage',
      '$kuid': '9zsTf3FKp',
      'label': [
        'Heavy Damage',
        'сильні пошкодження'
      ],
      'list_name': 'shelter_damage',
      '$autovalue': 'heavy_damage'
    },
    {
      'name': 'rent',
      '$kuid': 'jl4v270gw',
      'label': [
        'A = Renting Accommodation',
        'A = Оренда житла'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'rent'
    },
    {
      'name': 'host',
      '$kuid': 'FzEv8rcXL',
      'label': [
        'B = Living with Friends/Family/Host',
        'B = Проживання з друзями/ родиною/ стороною, яка приймає'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'host'
    },
    {
      'name': 'own_prop',
      '$kuid': 'Q7t42vZ9w',
      'label': [
        'C = Living in Own Property',
        'C = Проживання у власному житлі'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'own_prop'
    },
    {
      'name': 'coll_cen',
      '$kuid': 'AlaHttjPY',
      'label': [
        'D = Living in Collective Center',
        'D = Проживання у центрі тимчасового розміщення'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'coll_cen'
    },
    {
      'name': 'homeless',
      '$kuid': 'qSra3oheK',
      'label': [
        'E = Homeless',
        'E = Безхатній(-я)'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'homeless'
    },
    {
      'name': 'other_accom',
      '$kuid': 'hwe0o7H9k',
      'label': [
        'F = Other',
        'F = Інше'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'other_accom'
    },
    {
      'name': 'secure',
      '$kuid': 'VjLNFRtF7',
      'label': [
        'A = Secure for Medium/Long Term',
        'A = Забезпечення на середній/ довгий строк'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'secure'
    },
    {
      'name': 'unable_pay',
      '$kuid': 'cUTIrKoow',
      'label': [
        'B = Currently Unable to Pay Rent/Contribute to Collective Costs',
        'B = Зараз не в змозі сплачувати орендну плату/ платити за центр тимчасового розміщення'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'unable_pay'
    },
    {
      'name': 'dan_unable_pay',
      '$kuid': 'PTH4Vfnxx',
      'label': [
        'C = In Danger of Being Unable to Pay Rent/Contribute to Collective Costs',
        'C = Існує небезпека неможливості сплачувати орендну плату/ платити за центр тимчасового розміщення'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'dan_unable_pay'
    },
    {
      'name': 'unsuit_accom',
      '$kuid': 'prx7043sL',
      'label': [
        'D = Accommodation Unsuitable for my needs',
        'D = Житло, яке не відповідає моїм потребам'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'unsuit_accom'
    },
    {
      'name': 'eviction',
      '$kuid': 'FFu1YKnbu',
      'label': [
        'E = Eviction/Removal for Other Reasons',
        'E = Виселення з інших причин'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'eviction'
    },
    {
      'name': 'remain',
      '$kuid': 'IoQG0YOdE',
      'label': [
        'A = Remain in Current Place',
        'A = Залишатися у поточному місці'
      ],
      'list_name': 'accom_int',
      '$autovalue': 'remain'
    },
    {
      'name': 'rent',
      '$kuid': 'RGa7MvuXH',
      'label': [
        'B = Find Rental Accommodation',
        'B = Орендувати житло'
      ],
      'list_name': 'accom_int',
      '$autovalue': 'rent'
    },
    {
      'name': 'not_sure',
      '$kuid': 'hpjCXUWrM',
      'label': [
        'C = Not Sure/Don’t Know',
        'C = Не впевнений(-а)/ не знаю'
      ],
      'list_name': 'accom_int',
      '$autovalue': 'not_sure'
    },
    {
      'name': 'always',
      '$kuid': 'q9PB5GmAb',
      'label': [
        'A = Always',
        'A = Постійно'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'always'
    },
    {
      'name': 'not_always',
      '$kuid': 'EsDI1zXUz',
      'label': [
        'B = Not always on but comes daily',
        'B = Не постійно, але щодня приходить'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'not_always'
    },
    {
      'name': 'intermittent',
      '$kuid': 'hdRg7bhFk',
      'label': [
        'C = Comes on intermittent days',
        'C = Приходить у різні дні'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'intermittent'
    },
    {
      'name': 'rarely',
      '$kuid': 'T13cJ5WKX',
      'label': [
        'D = Rarely',
        'D = Рідко'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'rarely'
    },
    {
      'name': 'never',
      '$kuid': 'seyM3H0gW',
      'label': [
        'E = Never',
        'E = Ніколи'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'never'
    },
    {
      'name': 'nat_pass_card',
      '$kuid': 'c6N3NTVxt',
      'label': [
        'A = National Passport (card)',
        'A = Національний паспорт (карта)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'nat_pass_card'
    },
    {
      'name': 'nat_pass_book',
      '$kuid': '7Ou9o4z1H',
      'label': [
        'B = National Passport (book)',
        'B = Національний паспорт (книжка)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'nat_pass_book'
    },
    {
      'name': 'nat_pass_diia',
      '$kuid': 'wTOqTdaLL',
      'label': [
        'C = National Passport (Diia app)',
        'C = Національний паспорт (додаток Дія)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'nat_pass_diia'
    },
    {
      'name': 'pass_ussr_red',
      '$kuid': 'fIheox7Xx',
      'label': [
        'D = Passport (USSR red book)',
        'D = Паспорт (Червона книга СРСР)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'pass_ussr_red'
    },
    {
      'name': 'pass_int',
      '$kuid': 'bj8ANldg8',
      'label': [
        'E = Passport for international travel',
        'E = Закордонний паспорт'
      ],
      'list_name': 'id_type',
      '$autovalue': 'pass_int'
    },
    {
      'name': 'birth_certificate',
      '$kuid': 'fhnChMscG',
      'label': [
        'F = Birth certificate',
        'F = Свідоцтво про народження'
      ],
      'list_name': 'id_type',
      '$autovalue': 'birth_certificate'
    },
    {
      'name': 'driver_lic',
      '$kuid': 'wZtiapXw3',
      'label': [
        'G = Driver’s license',
        'G = Водійські права'
      ],
      'list_name': 'id_type',
      '$autovalue': 'driver_lic'
    },
    {
      'name': 'pen_cert',
      '$kuid': 'FNPNPvWsw',
      'label': [
        'H = Pensioner certificate',
        'H = Посвідчення пенсіонера'
      ],
      'list_name': 'id_type',
      '$autovalue': 'pen_cert'
    },
    {
      'name': 'oth_id',
      '$kuid': 'BrzAurJCY',
      'label': [
        'I = Other Form of ID',
        'I = Інша форма ідентифікатора'
      ],
      'list_name': 'id_type',
      '$autovalue': 'oth_id'
    },
    {
      'name': 'no_id',
      '$kuid': 'XVc9aXmDI',
      'label': [
        'J = No ID',
        'J = Немає іншого типу'
      ],
      'list_name': 'id_type',
      '$autovalue': 'no_id'
    },
    {
      'name': 'raiff_trans',
      '$kuid': 'ReIuA7Dja',
      'label': [
        'A = Remittance Raiffaisen AVAL',
        'A = Переказ через «Райффайзен Банк АВАЛЬ»'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'raiff_trans'
    },
    {
      'name': 'ukrpost',
      '$kuid': 'aEbfwui5O',
      'label': [
        'B = Ukrposhta',
        'B = Укрпошта'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'ukrpost'
    },
    {
      'name': 'bank_card',
      '$kuid': 'TbL60aucQ',
      'label': [
        'C = Bank card',
        'C = Банківська картка'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'bank_card'
    },
    {
      'name': 'other_pay',
      '$kuid': 'vK8pqLocr',
      'label': [
        'D = Other Payment Method',
        'D = Інший спосіб оплати'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'other_pay'
    },
    {
      'name': 'none_pay',
      '$kuid': '8DvpTCr1O',
      'label': [
        'E = None of the above fit my needs',
        'E = Жодний з перелічених способів мені не підходить'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'none_pay'
    },
    {
      'name': 'cash_fuel',
      '$kuid': 'nw0JW9sft',
      'label': [
        'Cash for Fuel',
        'Грошова допомога на пальне'
      ],
      'list_name': 'sfu_intervention',
      '$autovalue': 'cash_fuel'
    },
    {
      'name': 'cash_utilities',
      '$kuid': 'aff3zrwF2',
      'label': [
        'Cash for Utilities',
        'Грошова допомога для оплати комунальних послуг'
      ],
      'list_name': 'sfu_intervention',
      '$autovalue': 'cash_utilities'
    },
    {
      'name': 'external_walls',
      '$kuid': 'SzS9Acxkx',
      'label': [
        'Property with external  walls made of wood or compressed soil block/adobe/wattle houses (may include a combination of these)',
        'Житло із зовнішніми стінами з дерева або спресованих ґрунтових блоків/саман/тин (може включати їх комбінацію)'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'external_walls'
    },
    {
      'name': 'damaged_windows',
      '$kuid': '7afRphcon',
      'label': [
        'Property with single glazed or damaged windows',
        'Житло з одинарним склінням або пошкодженими вікнами'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'damaged_windows'
    },
    {
      'name': 'poor_insulation',
      '$kuid': 'CiRGmDYc7',
      'label': [
        'Property with poor insulation, damaged roof or walls',
        'Житло з поганою ізоляцією, пошкодженим дахом або стінами'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'poor_insulation'
    },
    {
      'name': 'substantial_repairs',
      '$kuid': 'S8H1Hr6TC',
      'label': [
        'Property in need of substantial repairs, such as cracked or damaged walls, poor insulation and ineffective thermal envelope.',
        'Житло, що потребує значного ремонту, наприклад, з потрісканими або пошкодженими стінами, поганою ізоляцією та неефективною теплоізоляцією.'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'substantial_repairs'
    },
    {
      'name': 'none',
      '$kuid': 'ICShkCZvz',
      'label': [
        'None of the above',
        'Нічого з перерахованого вище'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'none'
    }
  ],
  'settings': {
    'default_language': 'English (en)'
  },
  'translated': [
    'constraint_message',
    'hint',
    'label'
  ],
  'translations': [
    'English (en)',
    'Ukrainian (uk)'
  ]
} as Kobo.Form['content']