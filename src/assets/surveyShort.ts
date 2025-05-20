import {Kobo} from 'kobo-sdk'

export const surveyShort: Kobo.Form['content'] = {
  'schema': '1',
  'survey': [
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
      'required': false,
      '$autoname': 'hh_char_hh_det',
      'appearance': 'field-list',
      'repeat_count': '${ben_det_hh_size}'
    },
    // {
    //   'name': 'hh_chart_note_resp',
    //   'type': 'note',
    //   'label': [
    //     '**Should be respondant**',
    //     '**Має бути отримувачем допомоги**'
    //   ],
    //   '$xpath': 'hh_char/hh_char_hh_det/hh_chart_note_resp',
    //   'relevant': 'position(..) = 1',
    //   'required': false,
    //   '$autoname': 'hh_chart_note_resp'
    // },
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
    ///END
    {
      'type': 'end_repeat',
    },
    // {
    //   'name': 'hh_char_chh',
    //   'type': 'note',
    //   'label': [
    //     'This is a child headed household (high risk protection case), please refer immediately to a DRC Protection colleague and complete internal referral form.',
    //     'Це домогосподарство, яке очолює дитина (ситуація з високим рівнем ризику у сфері соціального захисту), будь ласка, негайно зверніться до колеги з відділу соцыально-правового захисту ДРБ та заповніть внутрішню форму перенаправлення .'
    //   ],
    //   '$xpath': 'hh_char/hh_char_chh',
    //   'relevant': 'indexed-repeat(${hh_char_hh_det_age},${hh_char_hh_det} ,1) <18',
    //   'required': false,
    //   '$autoname': 'hh_char_chh'
    // },
    // {
    //   'hint': [
    //     'Please read all options',
    //     'Будь ласка, прочитайте всі варіанти'
    //   ],
    //   'name': 'hh_char_res_dis_select',
    //   'type': 'select_multiple',
    //   'label': [
    //     '3.1.3 Respondent Characteristics',
    //     '3.1.3 Будь ласка, оберіть будь-який з наведених нижче пунктів, які стосуються респондента'
    //   ],
    //   '$xpath': 'hh_char/hh_char_res_dis_select',
    //   'required': false,
    //   '$autoname': 'hh_char_res_dis_select',
    //   'constraint': 'not(selected(.,\'diff_none\') and count-selected(.)>1)',
    //   'constraint_message': [
    //     'Cannot have these options checked together',
    //     'Ці параметри не можна перевіряти разом'
    //   ],
    //   'select_from_list_name': 'dis'
    // },
    // {
    //   'name': 'pay_det_id_type',
    //   'type': 'select_one',
    //   'label': [
    //     '7.1 Form of ID do you have?',
    //     '7.1 Яка у Вас форма посвідчення особи?'
    //   ],
    //   '$xpath': 'pay_det/pay_det_s/pay_det_id_type',
    //   'required': true,
    //   '$autoname': 'pay_det_id_type',
    //   'select_from_list_name': 'id_type'
    // },
    // {
    //   'name': 'pay_det_pass_ser',
    //   'type': 'text',
    //   'label': [
    //     '7.2.1 Input Passport Series',
    //     '7.2.1 Серія паспорта'
    //   ],
    //   '$xpath': 'pay_det/pay_det_s/pay_det_pass_ser',
    //   'relevant': 'selected(${pay_det_id_type},\'nat_pass_book\')',
    //   'required': true,
    //   '$autoname': 'pay_det_pass_ser',
    //   'constraint': 'regex(., \'^[а-яА-Яa-zA-Z]{2}$\')',
    //   'constraint_message': [
    //     'Passport series must contain two letters only',
    //     'Серія паспорта має містити лише дві букви'
    //   ]
    // },
    // {
    //   'name': 'calc_u5',
    //   'type': 'note',
    //   '$xpath': 'hh_char/hh_char_hh_det/calc_u5',
    //   'required': false,
    //   '$autoname': 'calc_u5',
    //   'calculation': 'if(${pay_det_pass_ser}=\'\',1,0)'
    // },
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
} as unknown as Kobo.Form['content']