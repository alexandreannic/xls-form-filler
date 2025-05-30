import {Kobo} from 'kobo-sdk'

export const survey = {
  'schema': '1',
  'survey': [
    {
      'name': 'start',
      'type': 'start',
      '$xpath': 'start',
      '$autoname': 'start'
    },
    {
      'name': 'end',
      'type': 'end',
      '$xpath': 'end',
      '$autoname': 'end'
    },
    {
      'name': 'date',
      'type': 'date',
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
    },
    {
      'name': 'ben_det',
      'type': 'begin_group',
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
    },
    {
      'name': 'hh_char',
      'type': 'begin_group',
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
      '$xpath': 'hh_char/calc_hhh_res_dis_level',
      'relevant': 'FALSE',
      'required': false,
      '$autoname': 'calc_hhh_res_dis_level',
      'calculation': 'if(selected(${hh_char_res_dis_level},\'one\') or selected(${hh_char_res_dis_level},\'two\') or selected(${hh_char_res_dis_level},\'fri\') or selected(${hh_char_hhh_dis_level},\'one\') or selected(${hh_char_hhh_dis_level},\'two\') or selected(${hh_char_hhh_dis_level},\'fri\'),1,0)'
    },
    {
      'name': 'hh_char_civ_stat',
      'type': 'select_one',
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
      '$xpath': 'hh_char/calc_char_civ_stat',
      'required': false,
      '$autoname': 'calc_char_civ_stat',
      'calculation': 'if(selected(${hh_char_civ_stat},\'single\') or selected(${hh_char_civ_stat},\'div_sep\') or selected(${hh_char_civ_stat},\'widow\') or selected(${hh_char_civ_stat},\'abandoned\'),1,0)'
    },
    {
      'name': 'cal_head_tax',
      'label': ['cal_head_tax'],
      'type': 'note',
      '$xpath': 'hh_char/cal_head_tax',
      'required': false,
      '$autoname': 'cal_head_tax',
      'calculation': 'indexed-repeat(${hh_char_tax_id_num},${hh_char_hh_det} ,1)'
    },
    // REPEAT
    {
      'hint': [
        '**DO NOT INCLUDE HH MEMBERS ALREADY REFERRED TO ABOVE**',
        '**НЕ ЗАЗНАЧАЙТЕ ЧЛЕНІВ ДОМОГОСПОДАРСТВА, ПРО ЯКИХ УЖЕ ЙШЛОСЯ ВИЩЕ**'
      ],
      'name': 'hh_char_hh_det',
      'type': 'begin_repeat',
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
      '$xpath': 'hh_char/hh_char_hh_det/taxid_weightedsum',
      'required': false,
      '$autoname': 'taxid_weightedsum',
      'calculation': 'substr(${hh_char_tax_id_num}, 0, 1) * (-1) + substr(${hh_char_tax_id_num}, 1, 2) * 5 + substr(${hh_char_tax_id_num}, 2, 3) * 7 + substr(${hh_char_tax_id_num}, 3, 4) * 9 + substr(${hh_char_tax_id_num}, 4, 5) * 4 + substr(${hh_char_tax_id_num}, 5, 6) * 6 + substr(${hh_char_tax_id_num}, 6, 7) * 10 + substr(${hh_char_tax_id_num}, 7, 8) * 5 + substr(${hh_char_tax_id_num}, 8, 9) * 7 + substr(${hh_char_tax_id_num}, 9, 10) * 0'
    },
    {
      'name': 'taxid_roundedsum',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/taxid_roundedsum',
      'required': false,
      '$autoname': 'taxid_roundedsum',
      'calculation': '(${taxid_weightedsum} div 11 - ((${taxid_weightedsum} div 11) mod 1)) * 11'
    },
    {
      'name': 'hh_char_hh_det_gender',
      'type': 'select_one',
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
      '$xpath': 'hh_char/hh_char_hh_det/calc_u5',
      'required': false,
      '$autoname': 'calc_u5',
      'calculation': 'if(${hh_char_hh_det_age}<5,1,0)'
    },
    {
      'name': 'calc_u18',
      'label': ['calc_u18'],
      'type': 'note',
      '$xpath': 'hh_char/hh_char_hh_det/calc_u18',
      'required': false,
      '$autoname': 'calc_u18',
      'calculation': 'if(${hh_char_hh_det_age}<18,1,0)'
    },
    {
      'name': 'calc_o60',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/calc_o60',
      'required': false,
      '$autoname': 'calc_o60',
      'calculation': 'if(${hh_char_hh_det_age}>59,1,0)'
    },
    {
      'name': 'calc_ed_age',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/calc_ed_age',
      'required': false,
      '$autoname': 'calc_ed_age',
      'calculation': 'if(${hh_char_hh_det_age} > 5 and ${hh_char_hh_det_age} < 18,1,0)'
    },
    {
      'name': 'calc_baby_age',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/calc_baby_age',
      'required': false,
      '$autoname': 'calc_baby_age',
      'calculation': 'if(${hh_char_hh_det_age} < 3, 1, 0)'
    },
    {
      'name': 'calc_preg',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/calc_preg',
      'required': false,
      '$autoname': 'calc_preg',
      'calculation': 'if(${hh_char_hh_det_gender} = \'female\' and ${hh_char_hh_det_age}>15 and ${hh_char_hh_det_age}<46,1,0)'
    },
    {
      'name': 'calc_det_dis_level',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/calc_det_dis_level',
      'required': false,
      '$autoname': 'calc_det_dis_level',
      'calculation': 'if(selected(${hh_char_hh_det_dis_level},\'one\') or selected(${hh_char_hh_det_dis_level},\'two\') or selected(${hh_char_hh_det_dis_level},\'fri\'),1,0)'
    },
    {
      'name': 'cal_student',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/cal_student',
      'required': false,
      '$autoname': 'cal_student',
      'calculation': 'if(selected(${hh_char_student},\'yes\'),1,0)'
    },
    {
      'name': 'cal_scoring_difficulty_level',
      'type': 'calculate',
      '$xpath': 'hh_char/hh_char_hh_det/cal_scoring_difficulty_level',
      'required': false,
      '$autoname': 'cal_scoring_difficulty_level',
      'calculation': 'if(selected(${hh_char_hh_det_dis_level},\'one\'),1, if(selected(${hh_char_hh_det_dis_level},\'two\'),2, if(selected(${hh_char_hh_det_dis_level},\'fri\'),3,0)))'
    },
    ///END
    {
      'type': 'end_repeat',
    },
    {
      'name': 'hh_char_chh',
      'type': 'note',
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
      '$xpath': 'hh_char/calc_tot_baby_age',
      'required': false,
      '$autoname': 'calc_tot_baby_age',
      'calculation': 'sum(${calc_baby_age})'
    },
    {
      'name': 'calc_tot_calc_u5',
      'type': 'calculate',
      '$xpath': 'hh_char/calc_tot_calc_u5',
      'required': false,
      '$autoname': 'calc_tot_calc_u5',
      'calculation': 'sum(${calc_u5})'
    },
    {
      label: ['sum(${calc_u18}) + (if(${hh_char_res_age}<18,1,0)) + (if(${hh_char_hhh_age}<18,1,0))'],
      'name': 'calc_tot_chi',
      'type': 'note',
      '$xpath': 'hh_char/calc_tot_chi',
      'required': false,
      '$autoname': 'calc_tot_chi',
      'calculation': 'sum(${calc_u18}) + (if(${hh_char_res_age}<18,1,0)) + (if(${hh_char_hhh_age}<18,1,0))'
    },
    {
      'name': 'calc_tot_ed_age',
      'type': 'calculate',
      '$xpath': 'hh_char/calc_tot_ed_age',
      'required': false,
      '$autoname': 'calc_tot_ed_age',
      'calculation': 'sum(${calc_ed_age}) + (if((${hh_char_res_age}>5 and ${hh_char_res_age}<18),1,0)) + (if((${hh_char_hhh_age}>5 and ${hh_char_hhh_age}<18),1,0))'
    },
    {
      'name': 'calc_tot_eld',
      'type': 'calculate',
      '$xpath': 'hh_char/calc_tot_eld',
      'required': false,
      '$autoname': 'calc_tot_eld',
      'calculation': 'sum(${calc_o60}) + (if(${hh_char_res_age}>59,1,0)) + (if(${hh_char_hhh_age}>59,1,0))'
    },
    {
      'name': 'calc_tot_student',
      'type': 'calculate',
      '$xpath': 'hh_char/calc_tot_student',
      'required': false,
      '$autoname': 'calc_tot_student',
      'calculation': 'sum(${cal_student})'
    },
    {
      'name': 'cal_tot_scoring_difficulty_level',
      'type': 'calculate',
      '$xpath': 'hh_char/cal_tot_scoring_difficulty_level',
      'required': false,
      '$autoname': 'cal_tot_scoring_difficulty_level',
      'calculation': 'sum(${cal_scoring_difficulty_level})'
    },
    {
      'name': 'hh_char_dis_note',
      'type': 'note',
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
      '$xpath': 'hh_char/calc_dis_level',
      'required': false,
      '$autoname': 'calc_dis_level',
      'calculation': 'if(selected(${hh_char_dis_level},\'one\') or selected(${hh_char_dis_level},\'two\') or selected(${hh_char_dis_level},\'fri\') or ${calc_hhh_res_dis_level} >0 or sum(${calc_det_dis_level}) >0,1,0)'
    },
    {
      'name': 'receive_financial_assistance',
      'type': 'select_one',
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
    },
    {
      'name': 'nfi',
      'type': 'begin_group',
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
    },
    {
      'type': 'end_group',
    },
    {
      'name': 'Section_4a_ESK',
      'type': 'begin_group',
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
    },
    {
      'name': 'casf_utilities_fuel',
      'type': 'begin_group',
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
    },
    {
      'name': 'cfr',
      'type': 'begin_group',
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
    },
    {
      'type': 'end_group',
    },
    {
      'name': 'ass_inc',
      'type': 'begin_group',
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
      '$xpath': 'ass_inc/ass_inc_mpca/calc_vulnerability',
      'required': false,
      '$autoname': 'calc_vulnerability',
      'calculation': 'if(selected(${back_refer_who},\'prot\') or selected(${back_refer_who},\'legal\') or selected(${back_refer_who},\'shelter\') or selected(${back_refer_who},\'ecrec\') or ${calc_tot_chi} > 2 or ${calc_dis_level} = 1 or ${calc_char_civ_stat} = 1  or selected(${hh_char_preg},\'yes\') or ${calc_tot_eld} > 0,1,0)'
    },
    {
      'name': 'calc_gen_mpca_inc',
      'type': 'calculate',
      '$xpath': 'ass_inc/ass_inc_mpca/calc_gen_mpca_inc',
      'required': false,
      '$autoname': 'calc_gen_mpca_inc',
      'calculation': 'if(selected(${back_prog_type}, \'mpca\') and (${ben_det_income} div ${ben_det_hh_size} <= 5400) and ${calc_vulnerability} = 1, 1, 0)'
    },
    {
      'name': 'ass_inc_mpca_inc',
      'type': 'note',
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
    },
    {
      'name': 'ass_inc_cfe',
      'type': 'begin_group',
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
    },
    {
      'name': 'ass_inc_cfr',
      'type': 'begin_group',
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
      '$xpath': 'ass_inc/ass_inc_cfr/calc_gen_cfr_vul',
      'required': false,
      '$autoname': 'calc_gen_cfr_vul',
      'calculation': 'if((${calc_tot_chi} > 2 or ${calc_char_civ_stat} = 1 or ${calc_tot_eld} = ${ben_det_hh_size} or ${calc_dis_level} = 1),1,0)'
    },
    {
      'name': 'calc_gen_cfr_inc',
      'type': 'calculate',
      '$xpath': 'ass_inc/ass_inc_cfr/calc_gen_cfr_inc',
      'required': false,
      '$autoname': 'calc_gen_cfr_inc',
      'calculation': 'if(${calc_gen_cfr_vul} = 1 and (selected(${cfr_rent_stat},\'unable_pay\') or selected(${cfr_rent_stat},\'dan_unable_pay\') or selected(${cfr_accom_int},\'rent\')) and selected(${cfr_prev_ass},\'no\'),1,0)'
    },
    {
      'name': 'ass_inc_cfr_inc',
      'type': 'note',
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
    },
    {
      'name': 'ass_inc_cff',
      'type': 'begin_group',
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
      '$xpath': 'ass_inc/ass_inc_cff/calc_vulnerability_cff',
      'required': false,
      '$autoname': 'calc_vulnerability_cff',
      'calculation': 'if((${calc_tot_eld} >0 and selected(${hh_char_pensioner},\'yes\')) or ${cal_tot_scoring_difficulty_level} >0 or selected(${hh_char_preg},\'yes\') or ${calc_tot_baby_age}>0 or (${calc_tot_chi} + ${calc_tot_student} >2) and ${cal_scoring_sfu}>0,1,0)'
    },
    {
      'name': 'calc_gen_cff_inc',
      'type': 'calculate',
      '$xpath': 'ass_inc/ass_inc_cff/calc_gen_cff_inc',
      'required': false,
      '$autoname': 'calc_gen_cff_inc',
      'calculation': 'if(selected(${back_prog_type},\'csf\') and ((${ben_det_income} div ${ben_det_hh_size} <= 8000) or (${ben_det_income} div ${ben_det_hh_size} >= 8001)  and (${ben_det_income} div ${ben_det_hh_size} <= 12000) and ${calc_vulnerability_cff}>0 ) and (selected(${current_gov_assist_cff},\'yes_but\') or selected(${current_gov_assist_cff},\'no\')) ,1,0)'
    },
    {
      'name': 'ass_inc_cff_inc',
      'type': 'note',
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
    },
    {
      'name': 'ass_inc_cfu',
      'type': 'begin_group',
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
      '$xpath': 'ass_inc/ass_inc_cfu/calc_vulnerability_cfu',
      'required': false,
      '$autoname': 'calc_vulnerability_cfu',
      'calculation': 'if((${calc_tot_eld} >0 and selected(${hh_char_pensioner},\'yes\')) or ${cal_tot_scoring_difficulty_level} >0 or selected(${hh_char_preg},\'yes\') or ${calc_tot_baby_age}>0 or (${calc_tot_chi} + ${calc_tot_student} >2) and ${cal_scoring_sfu}>0,1,0)'
    },
    {
      'name': 'calc_gen_cfu_inc',
      'type': 'calculate',
      '$xpath': 'ass_inc/ass_inc_cfu/calc_gen_cfu_inc',
      'required': false,
      '$autoname': 'calc_gen_cfu_inc',
      'calculation': 'if(selected(${back_prog_type}, \'cfu\') and ((${ben_det_income} div ${ben_det_hh_size} <= 8000) or (${ben_det_income} div ${ben_det_hh_size} >= 8001)  and (${ben_det_income} div ${ben_det_hh_size} <= 12000) and ${calc_vulnerability_cfu}>0 ) and (selected(${current_gov_assist_cff},\'yes_but\') or selected(${current_gov_assist_cff},\'no\')),1,0)'
    },
    {
      'name': 'ass_inc_cfu_inc',
      'type': 'note',
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
    },
    {
      'type': 'end_group',
    },
    {
      'name': 'pay_det',
      'type': 'begin_group',
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
      '$xpath': 'pay_det/pay_det_s',
      'relevant': 'selected(${pay_consent},\'yes\')',
      'required': false,
      '$autoname': 'pay_det_s',
      'appearance': 'field-list'
    },
    {
      'name': 'pay_det_id_type',
      'type': 'select_one',
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
      '$xpath': 'pay_det/pay_det_s/begin_group_vdIM9ogQb',
      'relevant': '${pay_det_id_type} != \'\'',
      'required': false,
      '$autoname': 'begin_group_vdIM9ogQb',
      'appearance': 'field-list'
    },
    {
      'name': 'pay_det_tax_id_yn',
      'type': 'select_one',
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
    },
    {
      'hint': [
        'The household cannot request physical-cash, please inform them to provide an alternative transfer mechanism.',
        null
      ],
      'name': 'pay_det_pay_meth',
      'type': 'select_one',
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
    },
    {
      'type': 'end_group',
    },
    {
      'name': 'fin_det',
      'type': 'begin_group',
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
    }
  ],
  'choices': [
    {
      'name': 'lwo',
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
      'label': [
        'Sumy (UMY)',
        'Sumy (UMY)'
      ],
      'list_name': 'office',
      '$autovalue': 'umy'
    },
    {
      'name': 'anna_artiukh',
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
      'label': [
        'UKR-000314 UHF4',
        'UKR-000314 UHF4'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000314_uhf4'
    },
    {
      'name': 'ukr000284_bha',
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
      'label': [
        'UKR-000386 Pooled Funds',
        'UKR-000386 Pooled Funds'
      ],
      'list_name': 'donor',
      '$autovalue': 'ukr000386_pf3'
    },
    {
      'name': 'zero_one',
      'label': [
        '0-1 month',
        '0-1 місяць'
      ],
      'list_name': 'idp_time',
      '$autovalue': 'zero_one'
    },
    {
      'name': 'two_three',
      'label': [
        '2-3 months',
        '2-3 місяці'
      ],
      'list_name': 'idp_time',
      '$autovalue': 'two_three'
    },
    {
      'name': 'over_3',
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
      'label': [
        'Cash for Utilities',
        'Cash for Utilities'
      ],
      'list_name': 'prog_type',
      '$autovalue': 'cfu'
    },
    {
      'name': 'yes',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'yn',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'yn',
      '$autovalue': 'no'
    },
    {
      'name': 'prot',
      'label': [
        'Protection',
        'Захист'
      ],
      'list_name': 'department',
      '$autovalue': 'prot'
    },
    {
      'name': 'legal',
      'label': [
        'Legal',
        'Юридичний'
      ],
      'list_name': 'department',
      '$autovalue': 'legal'
    },
    {
      'name': 'shelter',
      'label': [
        'Shelter',
        'Відновлення житла'
      ],
      'list_name': 'department',
      '$autovalue': 'shelter'
    },
    {
      'name': 'ecrec',
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
      'label': [
        'Solid Fuel',
        'Тверде паливо'
      ],
      'list_name': 'utfu',
      '$autovalue': 'fuel'
    },
    {
      'name': 'other',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'utfu',
      '$autovalue': 'other'
    },
    {
      'name': 'utilities',
      'label': [
        'Mains utilities',
        'Основні комунальні послуги'
      ],
      'list_name': 'utfu',
      '$autovalue': 'utilities'
    },
    {
      'name': 'electric',
      'label': [
        'Electric',
        'Електрика'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'electric'
    },
    {
      'name': 'gas',
      'label': [
        'Gas',
        'Газ'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'gas'
    },
    {
      'name': 'cohs',
      'label': [
        'Community heating system',
        'Система централізованого опалення'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'cohs'
    },
    {
      'name': 'other',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'mains_utilities',
      '$autovalue': 'other'
    },
    {
      'name': 'wood',
      'label': [
        'Wood',
        'Деревина'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'wood'
    },
    {
      'name': 'coal',
      'label': [
        'Coal',
        'Вугілля'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'coal'
    },
    {
      'name': 'charcoal',
      'label': [
        'Charcoal',
        'Деревне вугілля'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'charcoal'
    },
    {
      'name': 'pellets',
      'label': [
        'Pellets',
        'Пелети'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'pellets'
    },
    {
      'name': 'ofmf',
      'label': [
        'Oil fed or multi fuel boiler',
        'Мазутний або багатопаливний котел'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'ofmf'
    },
    {
      'name': 'other',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'mains_fuel',
      '$autovalue': 'other'
    },
    {
      'name': 'yes',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'ynd',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'ynd',
      '$autovalue': 'no'
    },
    {
      'name': 'dk',
      'label': [
        'Don’t know',
        'Не знаю'
      ],
      'list_name': 'ynd',
      '$autovalue': 'dk'
    },
    {
      'name': 'yes',
      'label': [
        'Yes government support',
        'Так, державна підтримка'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'yes'
    },
    {
      'name': 'yes_another_agency',
      'label': [
        'Yes, from another humanitarian agency or similar',
        'Так, від іншої гуманітарної організації або подібної'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'yes_another_agency'
    },
    {
      'name': 'yes_but',
      'label': [
        'Yes but not sufficient to cover needs',
        'Так, але недостатньо для покриття потреб'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'yes_but'
    },
    {
      'name': 'no',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'current_gov_assist_cff',
      '$autovalue': 'no'
    },
    {
      'name': 'cherkaska',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'cherkaska'
    },
    {
      'name': 'chernihivska',
      'label': [
        'Chernihivska',
        'Чернігівська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernihivska'
    },
    {
      'name': 'chernivetska',
      'label': [
        'Chernivetska',
        'Чернівецька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernivetska'
    },
    {
      'name': 'dnipropetrovska',
      'label': [
        'Dnipropetrovska',
        'Дніпропетровська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'dnipropetrovska'
    },
    {
      'name': 'donetska',
      'label': [
        'Donetska',
        'Донецька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'donetska'
    },
    {
      'name': 'ivano-frankivska',
      'label': [
        'Ivano-Frankivska',
        'Івано-Франківська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'ivano-frankivska'
    },
    {
      'name': 'kharkivska',
      'label': [
        'Kharkivska',
        'Харківська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kharkivska'
    },
    {
      'name': 'khersonska',
      'label': [
        'Khersonska',
        'Херсонська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khersonska'
    },
    {
      'name': 'khmelnytska',
      'label': [
        'Khmelnytska',
        'Хмельницька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khmelnytska'
    },
    {
      'name': 'kirovohradska',
      'label': [
        'Kirovohradska',
        'Кіровоградська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kirovohradska'
    },
    {
      'name': 'kyivska',
      'label': [
        'Kyivska',
        'Київська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kyivska'
    },
    {
      'name': 'luhanska',
      'label': [
        'Luhanska',
        'Луганська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'luhanska'
    },
    {
      'name': 'lvivska',
      'label': [
        'Lvivska',
        'Львівська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'lvivska'
    },
    {
      'name': 'mykolaivska',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'odeska',
      'label': [
        'Odeska',
        'Одеська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'odeska'
    },
    {
      'name': 'poltavska',
      'label': [
        'Poltavska',
        'Полтавська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'poltavska'
    },
    {
      'name': 'rivnenska',
      'label': [
        'Rivnenska',
        'Рівненська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'rivnenska'
    },
    {
      'name': 'sevastopilska',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sevastopilska'
    },
    {
      'name': 'sumska',
      'label': [
        'Sumska',
        'Сумська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sumska'
    },
    {
      'name': 'ternopilska',
      'label': [
        'Ternopilska',
        'Тернопільська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'ternopilska'
    },
    {
      'name': 'vinnytska',
      'label': [
        'Vinnytska',
        'Вінницька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'vinnytska'
    },
    {
      'name': 'volynska',
      'label': [
        'Volynska',
        'Волинська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'volynska'
    },
    {
      'name': 'zakarpatska',
      'label': [
        'Zakarpatska',
        'Закарпатська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zakarpatska'
    },
    {
      'name': 'zaporizka',
      'label': [
        'Zaporizka',
        'Запорізька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zaporizka'
    },
    {
      'name': 'zhytomyrska',
      'label': [
        'Zhytomyrska',
        'Житомирська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zhytomyrska'
    },
    {
      'name': 'zvenyhorodskyi',
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
      'label': [
        'A = Internally Displaced Person (IDP)',
        'A = Внутрішньо-переміщена особа (ВПО)'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'idp'
    },
    {
      'name': 'long_res',
      'label': [
        'B = Long - Term Resident',
        'B = Довгостроковий мешканець'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'long_res'
    },
    {
      'name': 'ret',
      'label': [
        'C = Returnee',
        'C = Особа, яка повернулася'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'ret'
    },
    {
      'name': 'ref_asy',
      'label': [
        'D = Refugee/asylum seeker',
        'D = Біженець/особа, що потребує прихистку'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'ref_asy'
    },
    {
      'name': 'male',
      'label': [
        'A = Male',
        'A = Чоловік'
      ],
      'list_name': 'gender',
      '$autovalue': 'male'
    },
    {
      'name': 'female',
      'label': [
        'B = Female',
        'B = Жінка'
      ],
      'list_name': 'gender',
      '$autovalue': 'female'
    },
    {
      'name': 'single',
      'label': [
        'A = Single (Never Married)',
        'A = Неодружений(-а) (ніколи не був(-ла) одружений(-а))'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'single'
    },
    {
      'name': 'dom_part',
      'label': [
        'B = Not Married but Living in Domestic Partnership',
        'B = Неодружений(-а), але живе у сімейному партнерстві'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'dom_part'
    },
    {
      'name': 'married',
      'label': [
        'C = Married',
        'C = Одружений(-а)'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'married'
    },
    {
      'name': 'div_sep',
      'label': [
        'D = Divorced/Seperated',
        'D = Розлучений(-а)/ проживає окремо'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'div_sep'
    },
    {
      'name': 'widow',
      'label': [
        'E = Widowed',
        'E = Удівець/ вдова'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'widow'
    },
    {
      'name': 'abandoned',
      'label': [
        'F = Abandoned',
        'F = Покинутий(-а)'
      ],
      'list_name': 'civ_stat',
      '$autovalue': 'abandoned'
    },
    {
      'name': 'diff_see',
      'label': [
        'A = Have difficulty seeing, even if wearing glasses',
        'A = Маєте труднощі із зором, навіть якщо носите окуляри'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_see'
    },
    {
      'name': 'diff_hear',
      'label': [
        'B = Have difficulty hearing, even if using a hearing aid',
        'B = Маєте проблеми зі слухом, навіть якщо користуєтеся слуховим апаратом'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_hear'
    },
    {
      'name': 'diff_walk',
      'label': [
        'C = Have difficulty walking or climbing steps',
        'C = Маєте труднощі з ходьбою або підйомом по сходах'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_walk'
    },
    {
      'name': 'diff_rem',
      'label': [
        'D = Have difficulty remembering or concentrating',
        'D = Маєте труднощі з запам\'ятовуванням або концентрацією уваги'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_rem'
    },
    {
      'name': 'diff_care',
      'label': [
        'E = Have difficulty with self-care such as washing all over or dressing',
        'E = Мають труднощі з самообслуговуванням, наприклад, з миттям або одяганням'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_care'
    },
    {
      'name': 'diff_comm',
      'label': [
        'F = Have difficulty communicating, for example understanding or being understood',
        'F = Маєте труднощі у спілкуванні, наприклад, у розумінні чи розумінні інших людей'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_comm'
    },
    {
      'name': 'diff_none',
      'label': [
        'G = None of the above apply',
        'G = Ніщо з перерахованого вище не стосується'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_none'
    },
    {
      'name': 'zero',
      'label': [
        'A = No, no difficulty',
        'A = Ні, труднощі відсутні'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'zero'
    },
    {
      'name': 'one',
      'label': [
        'B = Yes, some difficulty',
        'B = Так, є деякі труднощі'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'one'
    },
    {
      'name': 'two',
      'label': [
        'C = Yes, a lot of difficulty',
        'C = Так, багато труднощів'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'two'
    },
    {
      'name': 'fri',
      'label': [
        'D = Cannot do at all',
        'D = Взагалі не можу(-е) робити'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'fri'
    },
    {
      'name': 'no_damage',
      'label': [
        'No Structural Damage',
        'Відсутність структурних пошкоджень'
      ],
      'list_name': 'shelter_damage',
      '$autovalue': 'no_damage'
    },
    {
      'name': 'minor_damage',
      'label': [
        'Minor Damage (light or medium damages such as broken windows and doors, minor roof damage)',
        'незначні пошкодження (легкі або середні пошкодження, такі як розбиті вікна та двері, незначні пошкодження даху)'
      ],
      'list_name': 'shelter_damage',
      '$autovalue': 'minor_damage'
    },
    {
      'name': 'heavy_damage',
      'label': [
        'Heavy Damage',
        'сильні пошкодження'
      ],
      'list_name': 'shelter_damage',
      '$autovalue': 'heavy_damage'
    },
    {
      'name': 'rent',
      'label': [
        'A = Renting Accommodation',
        'A = Оренда житла'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'rent'
    },
    {
      'name': 'host',
      'label': [
        'B = Living with Friends/Family/Host',
        'B = Проживання з друзями/ родиною/ стороною, яка приймає'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'host'
    },
    {
      'name': 'own_prop',
      'label': [
        'C = Living in Own Property',
        'C = Проживання у власному житлі'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'own_prop'
    },
    {
      'name': 'coll_cen',
      'label': [
        'D = Living in Collective Center',
        'D = Проживання у центрі тимчасового розміщення'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'coll_cen'
    },
    {
      'name': 'homeless',
      'label': [
        'E = Homeless',
        'E = Безхатній(-я)'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'homeless'
    },
    {
      'name': 'other_accom',
      'label': [
        'F = Other',
        'F = Інше'
      ],
      'list_name': 'curr_accom',
      '$autovalue': 'other_accom'
    },
    {
      'name': 'secure',
      'label': [
        'A = Secure for Medium/Long Term',
        'A = Забезпечення на середній/ довгий строк'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'secure'
    },
    {
      'name': 'unable_pay',
      'label': [
        'B = Currently Unable to Pay Rent/Contribute to Collective Costs',
        'B = Зараз не в змозі сплачувати орендну плату/ платити за центр тимчасового розміщення'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'unable_pay'
    },
    {
      'name': 'dan_unable_pay',
      'label': [
        'C = In Danger of Being Unable to Pay Rent/Contribute to Collective Costs',
        'C = Існує небезпека неможливості сплачувати орендну плату/ платити за центр тимчасового розміщення'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'dan_unable_pay'
    },
    {
      'name': 'unsuit_accom',
      'label': [
        'D = Accommodation Unsuitable for my needs',
        'D = Житло, яке не відповідає моїм потребам'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'unsuit_accom'
    },
    {
      'name': 'eviction',
      'label': [
        'E = Eviction/Removal for Other Reasons',
        'E = Виселення з інших причин'
      ],
      'list_name': 'rent_stat',
      '$autovalue': 'eviction'
    },
    {
      'name': 'remain',
      'label': [
        'A = Remain in Current Place',
        'A = Залишатися у поточному місці'
      ],
      'list_name': 'accom_int',
      '$autovalue': 'remain'
    },
    {
      'name': 'rent',
      'label': [
        'B = Find Rental Accommodation',
        'B = Орендувати житло'
      ],
      'list_name': 'accom_int',
      '$autovalue': 'rent'
    },
    {
      'name': 'not_sure',
      'label': [
        'C = Not Sure/Don’t Know',
        'C = Не впевнений(-а)/ не знаю'
      ],
      'list_name': 'accom_int',
      '$autovalue': 'not_sure'
    },
    {
      'name': 'always',
      'label': [
        'A = Always',
        'A = Постійно'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'always'
    },
    {
      'name': 'not_always',
      'label': [
        'B = Not always on but comes daily',
        'B = Не постійно, але щодня приходить'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'not_always'
    },
    {
      'name': 'intermittent',
      'label': [
        'C = Comes on intermittent days',
        'C = Приходить у різні дні'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'intermittent'
    },
    {
      'name': 'rarely',
      'label': [
        'D = Rarely',
        'D = Рідко'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'rarely'
    },
    {
      'name': 'never',
      'label': [
        'E = Never',
        'E = Ніколи'
      ],
      'list_name': 'serv_reg',
      '$autovalue': 'never'
    },
    {
      'name': 'nat_pass_card',
      'label': [
        'A = National Passport (card)',
        'A = Національний паспорт (карта)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'nat_pass_card'
    },
    {
      'name': 'nat_pass_book',
      'label': [
        'B = National Passport (book)',
        'B = Національний паспорт (книжка)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'nat_pass_book'
    },
    {
      'name': 'nat_pass_diia',
      'label': [
        'C = National Passport (Diia app)',
        'C = Національний паспорт (додаток Дія)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'nat_pass_diia'
    },
    {
      'name': 'pass_ussr_red',
      'label': [
        'D = Passport (USSR red book)',
        'D = Паспорт (Червона книга СРСР)'
      ],
      'list_name': 'id_type',
      '$autovalue': 'pass_ussr_red'
    },
    {
      'name': 'pass_int',
      'label': [
        'E = Passport for international travel',
        'E = Закордонний паспорт'
      ],
      'list_name': 'id_type',
      '$autovalue': 'pass_int'
    },
    {
      'name': 'birth_certificate',
      'label': [
        'F = Birth certificate',
        'F = Свідоцтво про народження'
      ],
      'list_name': 'id_type',
      '$autovalue': 'birth_certificate'
    },
    {
      'name': 'driver_lic',
      'label': [
        'G = Driver’s license',
        'G = Водійські права'
      ],
      'list_name': 'id_type',
      '$autovalue': 'driver_lic'
    },
    {
      'name': 'pen_cert',
      'label': [
        'H = Pensioner certificate',
        'H = Посвідчення пенсіонера'
      ],
      'list_name': 'id_type',
      '$autovalue': 'pen_cert'
    },
    {
      'name': 'oth_id',
      'label': [
        'I = Other Form of ID',
        'I = Інша форма ідентифікатора'
      ],
      'list_name': 'id_type',
      '$autovalue': 'oth_id'
    },
    {
      'name': 'no_id',
      'label': [
        'J = No ID',
        'J = Немає іншого типу'
      ],
      'list_name': 'id_type',
      '$autovalue': 'no_id'
    },
    {
      'name': 'raiff_trans',
      'label': [
        'A = Remittance Raiffaisen AVAL',
        'A = Переказ через «Райффайзен Банк АВАЛЬ»'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'raiff_trans'
    },
    {
      'name': 'ukrpost',
      'label': [
        'B = Ukrposhta',
        'B = Укрпошта'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'ukrpost'
    },
    {
      'name': 'bank_card',
      'label': [
        'C = Bank card',
        'C = Банківська картка'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'bank_card'
    },
    {
      'name': 'other_pay',
      'label': [
        'D = Other Payment Method',
        'D = Інший спосіб оплати'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'other_pay'
    },
    {
      'name': 'none_pay',
      'label': [
        'E = None of the above fit my needs',
        'E = Жодний з перелічених способів мені не підходить'
      ],
      'list_name': 'pay_meth',
      '$autovalue': 'none_pay'
    },
    {
      'name': 'cash_fuel',
      'label': [
        'Cash for Fuel',
        'Грошова допомога на пальне'
      ],
      'list_name': 'sfu_intervention',
      '$autovalue': 'cash_fuel'
    },
    {
      'name': 'cash_utilities',
      'label': [
        'Cash for Utilities',
        'Грошова допомога для оплати комунальних послуг'
      ],
      'list_name': 'sfu_intervention',
      '$autovalue': 'cash_utilities'
    },
    {
      'name': 'external_walls',
      'label': [
        'Property with external  walls made of wood or compressed soil block/adobe/wattle houses (may include a combination of these)',
        'Житло із зовнішніми стінами з дерева або спресованих ґрунтових блоків/саман/тин (може включати їх комбінацію)'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'external_walls'
    },
    {
      'name': 'damaged_windows',
      'label': [
        'Property with single glazed or damaged windows',
        'Житло з одинарним склінням або пошкодженими вікнами'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'damaged_windows'
    },
    {
      'name': 'poor_insulation',
      'label': [
        'Property with poor insulation, damaged roof or walls',
        'Житло з поганою ізоляцією, пошкодженим дахом або стінами'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'poor_insulation'
    },
    {
      'name': 'substantial_repairs',
      'label': [
        'Property in need of substantial repairs, such as cracked or damaged walls, poor insulation and ineffective thermal envelope.',
        'Житло, що потребує значного ремонту, наприклад, з потрісканими або пошкодженими стінами, поганою ізоляцією та неефективною теплоізоляцією.'
      ],
      'list_name': 'type_property_living',
      '$autovalue': 'substantial_repairs'
    },
    {
      'name': 'none',
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
} as unknown as Kobo.Form['content']