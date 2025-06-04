export const surveyMpca = {
  'schema': '1',
  'survey': [
    {
      'name': 'start',
      'type': 'start',
      '$kuid': 'XtDf0zGwE',
      '$qpath': 'start',
      '$xpath': 'start',
      '$autoname': 'start'
    },
    {
      'name': 'end',
      'type': 'end',
      '$kuid': 'qG02gU6rR',
      '$qpath': 'end',
      '$xpath': 'end',
      '$autoname': 'end'
    },
    {
      'name': 'today',
      'type': 'today',
      '$kuid': 'RfRVVsnF2',
      '$qpath': 'today',
      '$xpath': 'today',
      '$autoname': 'today'
    },
    {
      'name': 'group_xp17b32',
      'type': 'begin_group',
      '$kuid': 'DmXVLU6vi',
      'label': [
        'Providing non-food assistance and support to the most vulnerable households',
        'Надання непродовольчої допомоги та підтримки найбільш незахищених домогосподарств'
      ],
      '$qpath': 'group_xp17b32',
      '$xpath': 'group_xp17b32',
      'required': false,
      '$autoname': 'group_xp17b32'
    },
    {
      'name': 'ID',
      'type': 'calculate',
      '$kuid': 'nY3e1Icl3',
      '$qpath': 'group_xp17b32-ID',
      '$xpath': 'group_xp17b32/ID',
      'required': false,
      '$autoname': 'ID',
      'calculation': 'once(format-date-time(now(), ‘%y%m%d%H%M%S%3’))'
    },
    {
      'name': 'unique_id_view',
      'type': 'note',
      '$kuid': '1BywT9zrf',
      'label': [
        'Unique ID ${ID}',
        'Унікальний персональний код ${ID}'
      ],
      '$qpath': 'group_xp17b32-unique_id_view',
      '$xpath': 'group_xp17b32/unique_id_view',
      'required': false,
      '$autoname': 'unique_id_view'
    },
    {
      'name': 'Programme',
      'type': 'select_one',
      '$kuid': '7t2lWqLr9',
      'label': [
        'Programme',
        'Programme'
      ],
      '$qpath': 'group_xp17b32-Programme',
      '$xpath': 'group_xp17b32/Programme',
      'required': false,
      '$autoname': 'Programme',
      'select_from_list_name': 'ty0dr08'
    },
    {
      'type': 'end_group',
      '$kuid': 'XJO3MqBtu'
    },
    {
      'name': 'module1',
      'type': 'begin_group',
      '$kuid': 'gEUYww9If',
      'label': [
        '1. General information (to be completed before the interview)',
        '1. Загальна інформація (заповнюється перед співбесідою)'
      ],
      '$qpath': 'module1',
      '$xpath': 'module1',
      'required': false,
      '$autoname': 'module1'
    },
    {
      'name': 'DRC_project',
      'type': 'select_one',
      '$kuid': 'CXCDPjfZA',
      'label': [
        'Please select DRC project and donor that the MPCA registration is for',
        'Please select DRC project and donor that the MPCA registration is for'
      ],
      '$qpath': 'module1-DRC_project',
      '$xpath': 'module1/DRC_project',
      'relevant': '${Programme} = \'mpca\' or ${Programme} = \'mpca___nfi\' or ${Programme} = \'cash_for_rent\' or ${Programme} = \'mpca___cash_for_rent\'',
      'required': true,
      '$autoname': 'DRC_project',
      'select_from_list_name': 'cf7xj17'
    },
    {
      'name': 'drc_base',
      'type': 'select_one',
      '$kuid': '0zFBiX5BV',
      'label': [
        'Office in charge of distribution/registration',
        'Офіс, який відповідає за розподіл'
      ],
      '$qpath': 'module1-drc_base',
      '$xpath': 'module1/drc_base',
      'required': true,
      '$autoname': 'drc_base',
      'select_from_list_name': 'drc_base'
    },
    {
      'name': 'location_geopoint',
      'type': 'geopoint',
      '$kuid': 'hNIgCUBNo',
      'label': [
        'Record your current location',
        'Запишіть своє поточне місцезнаходження'
      ],
      '$qpath': 'module1-location_geopoint',
      '$xpath': 'module1/location_geopoint',
      'required': false,
      '$autoname': 'location_geopoint'
    },
    {
      'name': 'staff_names',
      'type': 'select_one',
      '$kuid': 'deYQ8j9dA',
      'label': [
        'Select DRC staff name',
        'Виберіть ім\'я співробітника DRC'
      ],
      '$qpath': 'module1-staff_names',
      '$xpath': 'module1/staff_names',
      'required': true,
      '$autoname': 'staff_names',
      'choice_filter': 'drc_base=${drc_base}',
      'select_from_list_name': 'staff_names'
    },
    {
      'name': 'BHA_area',
      'type': 'select_one',
      '$kuid': 'VVGHb1J6C',
      'label': [
        'Select BHA Consortium geographical area',
        'Виберіть географічну зону BHA'
      ],
      '$qpath': 'module1-BHA_area',
      '$xpath': 'module1/BHA_area',
      'relevant': '${Programme} = \'mpca\' or ${Programme} = \'mpca___nfi\'',
      'required': true,
      '$autoname': 'BHA_area',
      'select_from_list_name': 'ev7gn91'
    },
    {
      'type': 'end_group',
      '$kuid': 'qm7SAe6FI'
    },
    {
      'name': 'module_consent',
      'type': 'begin_group',
      '$kuid': 'jS5kgUK2X',
      'label': [
        '2. Consent',
        '2. Згода'
      ],
      '$qpath': 'module_consent',
      '$xpath': 'module_consent',
      'required': false,
      '$autoname': 'module_consent'
    },
    {
      'name': '__021',
      'type': 'note',
      '$kuid': 'UMOFzmXmW',
      'label': [
        'In order to register your application, we\'d need to ask you a few questions to understand the composition of your household and how to best transfer financial assistance to you if you are eligible. These questions will take between 10-15 minutes. If you are eligible, we’ll need to share some basic details with the bank in order to make the payment. We are also required to share Tax ID numbers of people we provide assistance to with other humanitarian agencies implementing financial assistance programs, to ensure we are not duplicating assistance. All the other information will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.',
        'Щоб зареєструвати вашу заявку, нам потрібно поставити вам кілька запитань, щоб зрозуміти склад вашої сім’ї та як найкраще перерахувати вам фінансову допомогу, якщо ви маєте на це право. Ці запитання займуть 10-15 хвилин. Якщо ви відповідаєте вимогам, нам потрібно буде надати банку деякі основні дані, щоб здійснити платіж. Ми також зобов’язані надавати ідентифікаційні номери платника податків людей, яким ми надаємо допомогу, іншим гуманітарним організаціям, які впроваджують програми фінансової допомоги, щоб гарантувати, що ми не дублюємо допомогу. Вся інша інформація зберігатиметься в безпеці відповідно до Закону про захист персональних даних і не буде передана за межі DRC та його партнерів.'
      ],
      '$qpath': 'module_consent-__021',
      '$xpath': 'module_consent/__021',
      'required': false,
      '$autoname': '__021'
    },
    {
      'name': 'consent_mod_1',
      'type': 'select_one',
      '$kuid': 'cpjlmek5N',
      'label': [
        'Are you happy to proceed with the questionnaire?',
        'Ви бажаєте продовжити заповнення анкети?'
      ],
      '$qpath': 'module_consent-consent_mod_1',
      '$xpath': 'module_consent/consent_mod_1',
      'required': true,
      '$autoname': 'consent_mod_1',
      'select_from_list_name': 'yes_no'
    },
    {
      'type': 'end_group',
      '$kuid': '51bAFGQWb'
    },
    {
      'name': 'module_eligibility_screening',
      'type': 'begin_group',
      '$kuid': 'zzcRru7WL',
      'label': [
        '3. Beneficiary Basic Information',
        '3. Beneficiary Basic Information'
      ],
      '$qpath': 'module_eligibility_screening',
      '$xpath': 'module_eligibility_screening',
      'relevant': '${consent_mod_1} = \'1\'',
      'required': false,
      '$autoname': 'module_eligibility_screening'
    },
    {
      'name': 'oblast',
      'type': 'select_one',
      '$kuid': '228dTVj1n',
      'label': [
        'Select oblast where registration is taking place',
        'Виберіть область, де буде проходити реєстрація'
      ],
      '$qpath': 'module_eligibility_screening-oblast',
      '$xpath': 'module_eligibility_screening/oblast',
      'required': true,
      '$autoname': 'oblast',
      'select_from_list_name': 'oblast'
    },
    {
      'name': 'raion',
      'type': 'select_one',
      '$kuid': 'mSiMJBaDa',
      'label': [
        'Select raion where registration is taking place',
        'Виберіть район, де буде проходити реєстрація'
      ],
      '$qpath': 'module_eligibility_screening-raion',
      '$xpath': 'module_eligibility_screening/raion',
      'required': true,
      '$autoname': 'raion',
      'choice_filter': 'oblast=${oblast}',
      'select_from_list_name': 'raion'
    },
    {
      'name': 'hromada',
      'type': 'select_one',
      '$kuid': 'p5JWNZCr1',
      'label': [
        'Select hromada where registration is taking place',
        'Виберіть громаду, де відбувається реєстрація'
      ],
      '$qpath': 'module_eligibility_screening-hromada',
      '$xpath': 'module_eligibility_screening/hromada',
      'required': true,
      '$autoname': 'hromada',
      'choice_filter': 'raion=${raion}',
      'select_from_list_name': 'hromada'
    },
    {
      'hint': [
        'PLEASE WRITE IN UKRAINIAN',
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ'
      ],
      'name': 'patron',
      'type': 'text',
      '$kuid': 'FHKwnZgSz',
      'label': [
        'What is your surname name (as shown in personal ID)?',
        'Яке ваше прізвище (як вказано в паспорті)?'
      ],
      '$qpath': 'module_eligibility_screening-patron',
      '$xpath': 'module_eligibility_screening/patron',
      'required': true,
      '$autoname': 'patron'
    },
    {
      'hint': [
        'PLEASE WRITE IN UKRAINIAN',
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ'
      ],
      'name': 'name_resp',
      'type': 'text',
      '$kuid': 'PEBv6DAXv',
      'label': [
        'What is your first name (as shown in personal ID)?',
        'Яке ваше ім\'я (як зазначено в паспорті)?'
      ],
      '$qpath': 'module_eligibility_screening-name_resp',
      '$xpath': 'module_eligibility_screening/name_resp',
      'required': true,
      '$autoname': 'name_resp'
    },
    {
      'hint': [
        'PLEASE WRITE IN UKRAINIAN',
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ'
      ],
      'name': 'last_resp',
      'type': 'text',
      '$kuid': 'Ku0gSwJnW',
      'label': [
        'What is your patronymic name?',
        'Яке ваше по-батькові?'
      ],
      '$qpath': 'module_eligibility_screening-last_resp',
      '$xpath': 'module_eligibility_screening/last_resp',
      'required': true,
      '$autoname': 'last_resp'
    },
    {
      'name': 'status',
      'type': 'select_one',
      '$kuid': 'Ry7ue95ag',
      'label': [
        'Select status',
        'Виберіть статус'
      ],
      '$qpath': 'module_eligibility_screening-status',
      '$xpath': 'module_eligibility_screening/status',
      'required': true,
      '$autoname': 'status',
      'select_from_list_name': 'lj3ze00'
    },
    {
      'hint': [
        'DO NOT INCLUDE +380 - ONLY INCLUDE 380 then the phone number',
        'НЕ ВКЛЮЧАЙТЕ +380 - ВКЛЮЧАЙТЕ ЛИШЕ 380, а потім номер телефону'
      ],
      'name': 'phone',
      'type': 'integer',
      '$kuid': 'i069pW0QV',
      'label': [
        'What is your phone number?',
        'Ваш контактний номер телефону?'
      ],
      '$qpath': 'module_eligibility_screening-phone',
      '$xpath': 'module_eligibility_screening/phone',
      'required': true,
      '$autoname': 'phone'
    },
    {
      'name': 'group_jy7pa23',
      'type': 'begin_group',
      '$kuid': '6qb0LHbPn',
      'label': [
        'Beneficiary ID',
        'ID бенефіціара'
      ],
      '$qpath': 'module_eligibility_screening-group_jy7pa23',
      '$xpath': 'module_eligibility_screening/group_jy7pa23',
      'required': false,
      '$autoname': 'group_jy7pa23',
      'appearance': 'field-list'
    },
    {
      'name': 'Does_the_beneficiary_have_an_i',
      'type': 'select_one',
      '$kuid': 'S5Nyi64Dn',
      'label': [
        'Does the beneficiary have an individual tax number (ITN)?',
        'Чи має бенефіціар індивідуальний податковий номер (ІПН)?'
      ],
      '$qpath': 'module_eligibility_screening-group_jy7pa23-Does_the_beneficiary_have_an_i',
      '$xpath': 'module_eligibility_screening/group_jy7pa23/Does_the_beneficiary_have_an_i',
      'required': true,
      '$autoname': 'Does_the_beneficiary_have_an_i',
      'select_from_list_name': 'ITN'
    },
    {
      'name': 'Other_ID_identification',
      'type': 'select_one',
      '$kuid': 'tcrPr5bEu',
      'label': [
        'Other ID identification',
        'Інше посвідчення особи'
      ],
      '$qpath': 'module_eligibility_screening-group_jy7pa23-Other_ID_identification',
      '$xpath': 'module_eligibility_screening/group_jy7pa23/Other_ID_identification',
      'relevant': '${Does_the_beneficiary_have_an_i} = \'no\'',
      'required': false,
      '$autoname': 'Other_ID_identification',
      'choice_filter': '${Does_the_beneficiary_have_an_i} = \'no\'',
      'select_from_list_name': 'ID'
    },
    {
      'name': 'Number_of_ID',
      'type': 'text',
      '$kuid': 'SEOi1puSq',
      'label': [
        'Number of ID',
        'Номер ID'
      ],
      '$qpath': 'module_eligibility_screening-group_jy7pa23-Number_of_ID',
      '$xpath': 'module_eligibility_screening/group_jy7pa23/Number_of_ID',
      'relevant': '${Does_the_beneficiary_have_an_i} = \'no\'',
      'required': true,
      '$autoname': 'Number_of_ID',
      'choice_filter': '${Other_ID_identification} != \'\''
    },
    {
      'hint': [
        'The ITN contains 10 digits',
        'ІПН містить 10 цифр'
      ],
      'name': 'ITN',
      'type': 'text',
      '$kuid': 'R11w3L70l',
      'label': [
        'Individual tax number (ITN) of the HHH',
        'Ідентифікаційний номер (ІПН) голови домогосподарства'
      ],
      '$qpath': 'module_eligibility_screening-group_jy7pa23-ITN',
      '$xpath': 'module_eligibility_screening/group_jy7pa23/ITN',
      'relevant': '${Does_the_beneficiary_have_an_i} = \'yes\'',
      'required': true,
      '$autoname': 'ITN',
      'choice_filter': '${Does_the_beneficiary_have_an_i} = \'yes\''
    },
    {
      'type': 'end_group',
      '$kuid': 'T0hF1di8A'
    },
    {
      'name': 'group_kj9wg97',
      'type': 'begin_group',
      '$kuid': 'npzj9xvWM',
      'label': [
        'Family composition',
        'Склад сім\'ї'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97',
      '$xpath': 'module_eligibility_screening/group_kj9wg97',
      'required': false,
      '$autoname': 'group_kj9wg97'
    },
    {
      'name': 'gender_respondent',
      'type': 'select_one',
      '$kuid': 'GImO3NDhd',
      'label': [
        'Select gender of respondent',
        'Виберіть стать респондента'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-gender_respondent',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/gender_respondent',
      'required': true,
      '$autoname': 'gender_respondent',
      'select_from_list_name': 'lg0he26'
    },
    {
      'name': 'Are_you_the_head_of_your_house',
      'type': 'select_one',
      '$kuid': 'VAD9d1qS9',
      'label': [
        'Are you the head of your household?',
        'Ви голова домогосподарства?'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-Are_you_the_head_of_your_house',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/Are_you_the_head_of_your_house',
      'required': true,
      '$autoname': 'Are_you_the_head_of_your_house',
      'select_from_list_name': 'ap5ml26'
    },
    {
      'hint': [
        null,
        'Може базуватися на спостереженні'
      ],
      'name': 'sex',
      'type': 'select_one',
      '$kuid': 'Lmi5YYg68',
      'label': [
        'If no, what is the gender of head of household?',
        'Якої статі ви ідентифікуєте себе?'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-sex',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/sex',
      'relevant': '${Are_you_the_head_of_your_house} = \'2\'',
      'required': true,
      '$autoname': 'sex',
      'select_from_list_name': 'sex_hh'
    },
    {
      'name': 'hh_elderly_check',
      'type': 'integer',
      '$kuid': '7T7U8TccL',
      'label': [
        'How old is the head of household?',
        'Скільки років голові домогосподарства?'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-hh_elderly_check',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/hh_elderly_check',
      'relevant': '${Are_you_the_head_of_your_house} = \'2\'',
      'required': false,
      '$autoname': 'hh_elderly_check'
    },
    {
      'name': 'agex',
      'type': 'integer',
      '$kuid': 'NAKskrU2l',
      'label': [
        'How old are you?',
        'Скільки Вам років?'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-agex',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/agex',
      'relevant': '${Are_you_the_head_of_your_house} = \'1\'',
      'required': true,
      '$autoname': 'agex'
    },
    {
      'name': 'child_hhh_confirm',
      'type': 'select_one',
      '$kuid': 'uPa11XBTJ',
      'label': [
        'You have stated you are under 18 years, can you confirm you are the head of household?',
        'Ви вказали, що вам менше 18 років, чи можете ви підтвердити, що ви голова домогосподарства?'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-child_hhh_confirm',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/child_hhh_confirm',
      'relevant': '${agex} < 18',
      'required': false,
      '$autoname': 'child_hhh_confirm',
      'select_from_list_name': 'ze9if14'
    },
    {
      'name': 'child_hhh',
      'type': 'note',
      '$kuid': '1JZnYI4XM',
      'label': [
        'This is a child headed household (high risk protection case), please refer immediately to a DRC Protection and complete internal referral form.',
        'Це домогосподарство, яке очолює дитина (випадок захисту з високим рівнем ризику), будь ласка, негайно зверніться до відділу із захисту дітей.'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-child_hhh',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/child_hhh',
      'relevant': '${child_hhh_confirm} = \'1\'',
      'required': false,
      '$autoname': 'child_hhh'
    },
    {
      'name': 'Total_Family',
      'type': 'integer',
      '$kuid': 'dApCWnhj1',
      'label': [
        'Indicate the total number of people in your household, including the HHH',
        'Вкажіть ЗАГАЛЬНУ кількість осіб вашого домогосподарства, ВКЛЮЧАЮЧИ голову домогосподарства'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-Total_Family',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/Total_Family',
      'required': true,
      '$autoname': 'Total_Family'
    },
    {
      'name': 'group_in3fh72',
      'type': 'begin_repeat',
      '$kuid': 'bxHBuEqR8',
      'label': [
        'HH members (excluding HHH)',
        'Члени домогосподарства (крім голову домогосподарства)'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-group_in3fh72',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/group_in3fh72',
      'required': true,
      '$autoname': 'group_in3fh72',
      'repeat_count': '${Total_Family}'
    },
    {
      'name': 'AgeHH',
      'type': 'integer',
      '$kuid': 'rjhOAa5oN',
      'label': [
        'Please indicate the AGE of HH member',
        'Будь ласка, вкажіть ВІК члена домогосподарства'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-group_in3fh72-AgeHH',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/group_in3fh72/AgeHH',
      'required': true,
      '$autoname': 'AgeHH'
    },
    {
      'name': 'GenderHH',
      'type': 'select_one',
      '$kuid': 'TdOqjEmb2',
      'label': [
        'Please indicate the GENDER of HH member',
        'Будь ласка, вкажіть СТАТЬ члена домогосподарства'
      ],
      '$qpath': 'module_eligibility_screening-group_kj9wg97-group_in3fh72-GenderHH',
      '$xpath': 'module_eligibility_screening/group_kj9wg97/group_in3fh72/GenderHH',
      'required': true,
      '$autoname': 'GenderHH',
      'select_from_list_name': 'gp8xs11'
    },
    {
      'type': 'end_repeat',
      '$kuid': 'OLBMFa0iS'
    },
    {
      'type': 'end_group',
      '$kuid': 'hmhHVHAvq'
    },
    {
      'name': 'group_py7qe21',
      'type': 'begin_group',
      '$kuid': '3T0OaW8k7',
      'label': [
        'Disability',
        'Інвалідність'
      ],
      '$qpath': 'module_eligibility_screening-group_py7qe21',
      '$xpath': 'module_eligibility_screening/group_py7qe21',
      'relevant': '${consent_mod_1} = \'1\'',
      'required': false,
      '$autoname': 'group_py7qe21'
    },
    {
      'name': 'Does_anyone_in_your_elect_all_that_apply',
      'type': 'select_multiple',
      '$kuid': 'tPAWeTEgm',
      'label': [
        'Does anyone in your family present with any disability? Select all that apply.',
        'Чи є хтось у Вашій родині з інвалідністю? Виберіть все зі списку.'
      ],
      '$qpath': 'module_eligibility_screening-group_py7qe21-Does_anyone_in_your_elect_all_that_apply',
      '$xpath': 'module_eligibility_screening/group_py7qe21/Does_anyone_in_your_elect_all_that_apply',
      'required': false,
      '$autoname': 'Does_anyone_in_your_elect_all_that_apply',
      'select_from_list_name': 'cm5bv05'
    },
    {
      'type': 'end_group',
      '$kuid': 'yxJeVOyb6'
    },
    {
      'type': 'end_group',
      '$kuid': 'NgftAYAUn'
    },
    {
      'name': 'module_eligibility_screening_001',
      'type': 'begin_group',
      '$kuid': 'EU3Pk32Jk',
      'label': [
        '4. NFI Support',
        '4. NFI Support'
      ],
      '$qpath': 'module_eligibility_screening_001',
      '$xpath': 'module_eligibility_screening_001',
      'relevant': '${Programme} = \'mpca___nfi\' or ${Programme} = \'nfi\'',
      'required': false,
      '$autoname': 'module_eligibility_screening_001'
    },
    {
      'name': 'group_un9ff13_header',
      'type': 'begin_group',
      '$kuid': 'EoaXoB52p',
      'label': [
        'Support to be received',
        'Допомога, яка надається / Assistance to be provided'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header',
      'relevant': '${consent_mod_1} = \'1\'',
      'required': false,
      '$autoname': 'group_un9ff13_header',
      'appearance': 'field-list'
    },
    {
      'name': 'Kits_to_be_provided',
      'type': 'select_multiple',
      '$kuid': 'RIAgdvoFh',
      'label': [
        'Kits to be provided',
        'Kits to be provided'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Kits_to_be_provided',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Kits_to_be_provided',
      'required': true,
      '$autoname': 'Kits_to_be_provided',
      'select_from_list_name': 'eo9av66'
    },
    {
      'name': 'HKMV_',
      'type': 'integer',
      '$kuid': 'BlRq6xVyK',
      'label': [
        'HKMV Family hygiene kit for IDPs on the move: How many?',
        'HKMV Сімейний гігієнічний набір для ВПО в дорозі: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-HKMV_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/HKMV_',
      'relevant': 'selected(${Kits_to_be_provided}, \'hkmv_____________\')',
      'required': true,
      '$autoname': 'HKMV_'
    },
    {
      'name': 'HKF_',
      'type': 'integer',
      '$kuid': '663pWkRsW',
      'label': [
        'HKF Hygiene kit: How many?',
        'HKF Сімейний гігієнічний набір для ВПО без засобів  існування: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-HKF_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/HKF_',
      'relevant': 'selected(${Kits_to_be_provided}, \'hkf_______________\')',
      'required': true,
      '$autoname': 'HKF_'
    },
    {
      'name': 'NFKF_NFI_',
      'type': 'integer',
      '$kuid': '6GP7Ihoy8',
      'label': [
        'NFKF Family NFI Kit: How many?',
        'NFKF Сімейний непродовольчий набір NFI: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-NFKF_NFI_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/NFKF_NFI_',
      'relevant': 'selected(${Kits_to_be_provided}, \'nfkf_______nfi\')',
      'required': true,
      '$autoname': 'NFKF_NFI_'
    },
    {
      'name': 'KS_',
      'type': 'integer',
      '$kuid': 'v8aHk9uWP',
      'label': [
        'KS Family kitchen set: How many?',
        'KS Сімейний кухонний набір: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-KS_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/KS_',
      'relevant': 'selected(${Kits_to_be_provided}, \'ks_____\')',
      'required': true,
      '$autoname': 'KS_'
    },
    {
      'name': 'BK_Baby_Kit_',
      'type': 'integer',
      '$kuid': 'ELTccNHQW',
      'label': [
        'BK1 Baby Hygiene Kit 1: How many?',
        'BK1 Гігієнічний набір для дитини 1: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-BK_Baby_Kit_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_',
      'relevant': 'selected(${Kits_to_be_provided}, \'bk_baby_kit1\')',
      'required': true,
      '$autoname': 'BK_Baby_Kit_'
    },
    {
      'name': 'BK_Baby_Kit',
      'type': 'integer',
      '$kuid': 'D5OPxms0V',
      'label': [
        'BK2 Baby Hygiene Kit 2: How many?',
        'BK2 Гігієнічний набір для дитини 2: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-BK_Baby_Kit',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit',
      'relevant': 'selected(${Kits_to_be_provided}, \'bk_baby_kit2\')',
      'required': true,
      '$autoname': 'BK_Baby_Kit'
    },
    {
      'name': 'BK_Baby_Kit_001',
      'type': 'integer',
      '$kuid': 'M1ZL133lu',
      'label': [
        'BK3 Baby Hygiene Kit 3: How many?',
        'BK3 Гігієнічний набір для дитини 3: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-BK_Baby_Kit_001',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_001',
      'relevant': 'selected(${Kits_to_be_provided}, \'bk_baby_kit3\')',
      'required': true,
      '$autoname': 'BK_Baby_Kit_001'
    },
    {
      'name': 'BK_Baby_Kit_002',
      'type': 'integer',
      '$kuid': 'Q9tDwAEjz',
      'label': [
        'BK4 Baby Hygiene Kit 4: How many?',
        'BK4 Гігієнічний набір для дитини 4: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-BK_Baby_Kit_002',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/BK_Baby_Kit_002',
      'relevant': 'selected(${Kits_to_be_provided}, \'bk_baby_kit4\')',
      'required': true,
      '$autoname': 'BK_Baby_Kit_002'
    },
    {
      'name': 'WKB1_1_',
      'type': 'integer',
      '$kuid': 'dT01kmLb5',
      'label': [
        'WKB1 Baby Winterization Kit 1: How many?',
        'WKB1 Дитячий набір для зимування № 1: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-WKB1_1_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/WKB1_1_',
      'relevant': 'selected(${Kits_to_be_provided}, \'wkb1___________1\')',
      'required': true,
      '$autoname': 'WKB1_1_'
    },
    {
      'name': 'WKB2_2_',
      'type': 'integer',
      '$kuid': 'AKwFKx0eM',
      'label': [
        'WKB1 Baby Winterization Kit 2: How many?',
        'WKB2 Дитячий набір для зимування № 2: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-WKB2_2_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/WKB2_2_',
      'relevant': 'selected(${Kits_to_be_provided}, \'wkb2___________2\')',
      'required': true,
      '$autoname': 'WKB2_2_'
    },
    {
      'name': 'WKB3_3_',
      'type': 'integer',
      '$kuid': 'iQBXzFU39',
      'label': [
        'WKB1 Baby Winterization Kit 3: How many?',
        'WKB3 Дитячий набір для зимування № 3: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-WKB3_3_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/WKB3_3_',
      'relevant': 'selected(${Kits_to_be_provided}, \'wkb3___________3\')',
      'required': true,
      '$autoname': 'WKB3_3_'
    },
    {
      'name': 'WKB4_4_',
      'type': 'integer',
      '$kuid': 'n0WdacrBd',
      'label': [
        'WKB1 Baby Winterization Kit 4: How many?',
        'WKB4 Дитячий набір для зимування № 4: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-WKB4_4_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/WKB4_4_',
      'relevant': 'selected(${Kits_to_be_provided}, \'wkb4___________4\')',
      'required': true,
      '$autoname': 'WKB4_4_'
    },
    {
      'name': 'BLN_',
      'type': 'integer',
      '$kuid': 'J7y1uVCse',
      'label': [
        'BLN High Thermal Blankets: How many?',
        'BLN Термоковдри: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-BLN_',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/BLN_',
      'relevant': 'selected(${Kits_to_be_provided}, \'bln_\')',
      'required': true,
      '$autoname': 'BLN_'
    },
    {
      'name': 'BLN',
      'type': 'integer',
      '$kuid': 'nFkUFbo1C',
      'label': [
        'Solar lamps: How many?',
        'Сонячні лампи: Скільки?'
      ],
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-BLN',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/BLN',
      'relevant': 'selected(${Kits_to_be_provided}, \'__\')',
      'required': true,
      '$autoname': 'BLN'
    },
    {
      'name': 'Total_Kits',
      'type': 'calculate',
      '$kuid': 'xDwvYbE1J',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Kits',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Kits',
      'required': false,
      '$autoname': 'Total_Kits',
      'calculation': 'coalesce(${HKMV_}, 0)+coalesce(${HKF_}, 0)+coalesce(${NFKF_NFI_}, 0)+coalesce(${KS_}, 0)+coalesce(${WKB1_1_}, 0)+coalesce(${WKB2_2_}, 0)+coalesce(${WKB3_3_}, 0)+coalesce(${WKB4_4_}, 0)+coalesce(${BLN_}, 0)+coalesce(${BK_Baby_Kit_}, 0)+coalesce(${BK_Baby_Kit}, 0)+coalesce(${BK_Baby_Kit_001}, 0)+coalesce(${BK_Baby_Kit_002}, 0)'
    },
    {
      'name': 'Total_BBKits',
      'type': 'calculate',
      '$kuid': 'wLqSfIYj1',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_BBKits',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits',
      'required': false,
      '$autoname': 'Total_BBKits',
      'calculation': 'coalesce(${BK_Baby_Kit_}, 0)+coalesce(${BK_Baby_Kit}, 0)+coalesce(${BK_Baby_Kit_001}, 0)+coalesce(${BK_Baby_Kit_002}, 0)+coalesce(${WKB1_1_}, 0)+coalesce(${WKB2_2_}, 0)+coalesce(${WKB3_3_}, 0)+coalesce(${WKB4_4_}, 0)'
    },
    {
      'name': 'Total_BBKits_Hygiene',
      'type': 'calculate',
      '$kuid': 'rCIK7RnLn',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_BBKits_Hygiene',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits_Hygiene',
      'required': false,
      '$autoname': 'Total_BBKits_Hygiene',
      'calculation': 'coalesce(${BK_Baby_Kit_}, 0)+coalesce(${BK_Baby_Kit}, 0)+coalesce(${BK_Baby_Kit_001}, 0)+coalesce(${BK_Baby_Kit_002}, 0)'
    },
    {
      'name': 'Total_BBKits_Winter',
      'type': 'calculate',
      '$kuid': 'b9cdEeRfv',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_BBKits_Winter',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_BBKits_Winter',
      'required': false,
      '$autoname': 'Total_BBKits_Winter',
      'calculation': 'coalesce(${WKB1_1_}, 0)+coalesce(${WKB2_2_}, 0)+coalesce(${WKB3_3_}, 0)+coalesce(${WKB4_4_}, 0)'
    },
    {
      'name': 'Total_Cost_HKMV',
      'type': 'calculate',
      '$kuid': 'F5sNyCbf8',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_HKMV',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKMV',
      'required': false,
      '$autoname': 'Total_Cost_HKMV',
      'calculation': 'coalesce(${HKMV_}, 0)*1374'
    },
    {
      'name': 'Total_Cost_HKF',
      'type': 'calculate',
      '$kuid': 'meq6YVAfi',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_HKF',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_HKF',
      'required': false,
      '$autoname': 'Total_Cost_HKF',
      'calculation': 'coalesce(${HKF_}, 0)*1935'
    },
    {
      'name': 'Total_Cost_NFKF',
      'type': 'calculate',
      '$kuid': 'LT5elZhhc',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_NFKF',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_NFKF',
      'required': false,
      '$autoname': 'Total_Cost_NFKF',
      'calculation': 'coalesce(${NFKF_NFI_}, 0)*3390'
    },
    {
      'name': 'Total_Cost_KS',
      'type': 'calculate',
      '$kuid': 'c9OpZ7dA3',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_KS',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_KS',
      'required': false,
      '$autoname': 'Total_Cost_KS',
      'calculation': 'coalesce(${KS_}, 0)*1000'
    },
    {
      'name': 'Total_Cost_BK',
      'type': 'calculate',
      '$kuid': 'FPiMRqA01',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_BK',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BK',
      'required': false,
      '$autoname': 'Total_Cost_BK',
      'calculation': 'coalesce(${Total_BBKits_Hygiene}, 0)*1780'
    },
    {
      'name': 'Total_Cost_WKB1',
      'type': 'calculate',
      '$kuid': 'JZekOHISu',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_WKB1',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB1',
      'required': false,
      '$autoname': 'Total_Cost_WKB1',
      'calculation': 'coalesce(${WKB1_1_}, 0)*1990'
    },
    {
      'name': 'Total_Cost_WKB2',
      'type': 'calculate',
      '$kuid': '3PTjtyhp0',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_WKB2',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB2',
      'required': false,
      '$autoname': 'Total_Cost_WKB2',
      'calculation': 'coalesce(${WKB2_2_}, 0)*2010'
    },
    {
      'name': 'Total_Cost_WKB3',
      'type': 'calculate',
      '$kuid': 'D6zRHJVfd',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_WKB3',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB3',
      'required': false,
      '$autoname': 'Total_Cost_WKB3',
      'calculation': 'coalesce(${WKB3_3_}, 0)*2010'
    },
    {
      'name': 'Total_Cost_WKB4',
      'type': 'calculate',
      '$kuid': 'I1mI7cK4F',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_WKB4',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_WKB4',
      'required': false,
      '$autoname': 'Total_Cost_WKB4',
      'calculation': 'coalesce(${WKB4_4_}, 0)*2010'
    },
    {
      'name': 'Total_Cost_BLN',
      'type': 'calculate',
      '$kuid': 'WU7N1yCaP',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_BLN',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_BLN',
      'required': false,
      '$autoname': 'Total_Cost_BLN',
      'calculation': 'coalesce(${BLN_}, 0)*310'
    },
    {
      'name': 'Total_Cost_Allkits',
      'type': 'calculate',
      '$kuid': 'gBJC1m2OF',
      '$qpath': 'module_eligibility_screening_001-group_un9ff13_header-Total_Cost_Allkits',
      '$xpath': 'module_eligibility_screening_001/group_un9ff13_header/Total_Cost_Allkits',
      'required': false,
      '$autoname': 'Total_Cost_Allkits',
      'calculation': '(coalesce(${Total_Cost_BLN}, 0)+coalesce(${Total_Cost_WKB4}, 0)+coalesce(${Total_Cost_WKB3}, 0)+coalesce(${Total_Cost_WKB2}, 0)+coalesce(${Total_Cost_WKB1}, 0)+coalesce(${Total_Cost_BK}, 0)+coalesce(${Total_Cost_KS}, 0)+coalesce(${Total_Cost_NFKF}, 0)+coalesce(${Total_Cost_HKF}, 0)+coalesce(${Total_Cost_HKMV}, 0))'
    },
    {
      'type': 'end_group',
      '$kuid': 'aebUNTaEH'
    },
    {
      'name': 'group_checks',
      'type': 'begin_group',
      '$kuid': 'eB4iCyAau',
      'label': [
        'Summary',
        'Резюме'
      ],
      '$qpath': 'module_eligibility_screening_001-group_checks',
      '$xpath': 'module_eligibility_screening_001/group_checks',
      'required': false,
      '$autoname': 'group_checks',
      'appearance': 'field-list'
    },
    {
      'name': 'Kits_Check',
      'type': 'acknowledge',
      '$kuid': 'UErpBEQUK',
      'label': [
        'There are ${Total_Kits} planned for this family.',
        'Для цієї родини заплановано ${Total_Kits} комплектів.'
      ],
      '$qpath': 'module_eligibility_screening_001-group_checks-Kits_Check',
      '$xpath': 'module_eligibility_screening_001/group_checks/Kits_Check',
      'required': false,
      '$autoname': 'Kits_Check'
    },
    {
      'name': 'group_kits_toomanybb_kitstotal_002',
      'type': 'note',
      '$kuid': 'n5wgVtYEm',
      'label': [
        'The total benefit equals ${Total_Cost_Allkits} UAH.',
        'Загальна сума допомоги становить ${Total_Cost_Allkits} UAH.'
      ],
      '$qpath': 'module_eligibility_screening_001-group_checks-group_kits_toomanybb_kitstotal_002',
      '$xpath': 'module_eligibility_screening_001/group_checks/group_kits_toomanybb_kitstotal_002',
      'required': false,
      '$autoname': 'group_kits_toomanybb_kitstotal_002'
    },
    {
      'type': 'end_group',
      '$kuid': 'tfk6dHkNr'
    },
    {
      'type': 'end_group',
      '$kuid': 'ZVHVNHJpi'
    },
    {
      'name': 'inclusion_exclusion_group',
      'type': 'begin_group',
      '$kuid': 'Rj6cRR78o',
      'label': [
        '5. MPCA Criteria',
        '5. MPCA Criteria'
      ],
      '$qpath': 'inclusion_exclusion_group',
      '$xpath': 'inclusion_exclusion_group',
      'relevant': '${Programme} = \'mpca\' or ${Programme} = \'mpca___nfi\' or ${Programme} = \'mpca___cash_for_rent\' or ${Programme} = \'cash_for_rent\'',
      'required': false,
      '$autoname': 'inclusion_exclusion_group'
    },
    {
      'name': 'inclusion_exclusion_group_001',
      'type': 'begin_group',
      '$kuid': '5ra2UQBWU',
      'label': [
        '5.1 MPCA Inclusion Criteria',
        '5.1 MPCA Inclusion Criteria'
      ],
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001',
      'required': false,
      '$autoname': 'inclusion_exclusion_group_001'
    },
    {
      'hint': [
        'Cash assistance from an international or local NGO',
        'Грошова допомога від міжнародної або місцевої НУО'
      ],
      'name': 'ingo',
      'type': 'select_one',
      '$kuid': '2KUOPCXqZ',
      'label': [
        'Are you registered to receive cash from an NGO?',
        'Translation missing - Are you registered to receive cash from an NGO?'
      ],
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001-ingo',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001/ingo',
      'required': true,
      '$autoname': 'ingo',
      'select_from_list_name': 'yes_no'
    },
    {
      'hint': [
        'Include all social protection assistance including IDP benefits in the calculation',
        'Включіть у розрахунок усі види соціальної допомоги, включаючи виплати ВПО'
      ],
      'name': 'income_month',
      'type': 'integer',
      '$kuid': '3TwcEw76A',
      'label': [
        'What was the income of your household in the last 30 days in UAH?',
        'Яким був дохід Вашого домогосподарства за останні 30 днів у гривнях?'
      ],
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001-income_month',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001/income_month',
      'relevant': '${ingo} = \'2\'',
      'required': true,
      '$autoname': 'income_month'
    },
    {
      'name': 'calculation_average_income',
      'type': 'calculate',
      '$kuid': 'ZFCZ1QJtY',
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001-calculation_average_income',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001/calculation_average_income',
      'required': true,
      '$autoname': 'calculation_average_income',
      'calculation': '${income_month} div ${Total_Family}'
    },
    {
      'name': 'The_average_income_o_per_month_per_person',
      'type': 'note',
      '$kuid': 'RFZPBC1Lr',
      'label': [
        'The average income of this household is ${calculation_average_income} per month per person',
        'Середній дохід цієї родини становить ${calculation_average_income} на місяць на особу'
      ],
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001-The_average_income_o_per_month_per_person',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001/The_average_income_o_per_month_per_person',
      'required': false,
      '$autoname': 'The_average_income_o_per_month_per_person'
    },
    {
      'hint': [
        'AUTOMATIC - Just click PROCEED TO NEXT STEP',
        'АВТОМАТИЧНО - просто натисніть ПЕРЕХОДИТИ ДО НАСТУПНОГО КРОКУ'
      ],
      'name': 'exclusion_1',
      'type': 'select_one',
      '$kuid': '9dp6gG9Lk',
      'label': [
        'This household is not eligible for cash assistance because they are receiving or due to receive cash from an NGO.',
        'Translation missing - This household is not eligible for cash assistance because they are receiving or due to receive cash from an NGO.'
      ],
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001-exclusion_1',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001/exclusion_1',
      'relevant': '${ingo} = \'1\'',
      'required': false,
      '$autoname': 'exclusion_1',
      'select_from_list_name': 'me4um32'
    },
    {
      'hint': [
        'AUTOMATIC - Just click PROCEED TO NEXT STEP',
        'АВТОМАТИЧНО - просто натисніть ПЕРЕХОДИТИ ДО НАСТУПНОГО КРОКУ'
      ],
      'name': 'exclusion_2',
      'type': 'select_one',
      '$kuid': 'wCsWmbM0w',
      'label': [
        'This household is not eligible for cash assistance because they earn more than 5,400 UAH per person per month',
        'Це домогосподарство не має права на грошову допомогу, оскільки заробляє понад 5400 грн на одну особу на місяць.'
      ],
      '$qpath': 'inclusion_exclusion_group-inclusion_exclusion_group_001-exclusion_2',
      '$xpath': 'inclusion_exclusion_group/inclusion_exclusion_group_001/exclusion_2',
      'relevant': '${calculation_average_income}>=5401',
      'required': false,
      '$autoname': 'exclusion_2',
      'select_from_list_name': 'vj87o95'
    },
    {
      'type': 'end_group',
      '$kuid': 'gw0sgH5nP'
    },
    {
      'name': 'vul_screen',
      'type': 'select_one',
      '$kuid': 'uaswzaHZk',
      'label': [
        'This household has passed the exclusion criteria and can be screened for inclusion and vulnerability criteria - proceed to next step',
        'Це домогосподарство можна перевірити на критерії вразливості – перейдіть до наступного кроку'
      ],
      '$qpath': 'inclusion_exclusion_group-vul_screen',
      '$xpath': 'inclusion_exclusion_group/vul_screen',
      'relevant': '${ingo} = \'2\' and ${calculation_average_income}<=5400',
      'required': false,
      '$autoname': 'vul_screen',
      'select_from_list_name': 'nw5re00'
    },
    {
      'name': 'group_inclusion_area',
      'type': 'begin_group',
      '$kuid': 'Vp5sZ4InX',
      'label': [
        '5.1. Inclusion Criteria per category of area',
        '5.1. Критерії включення до категорії території'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area',
      'relevant': '${vul_screen} = \'1\'',
      'required': false,
      '$autoname': 'group_inclusion_area'
    },
    {
      'name': 'east_evacuation',
      'type': 'begin_group',
      '$kuid': 'txzSeswsl',
      'label': [
        'Evacuee Hotspots',
        'Гарячі точки для евакуйованих'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-east_evacuation',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/east_evacuation',
      'relevant': '${BHA_area} = \'bha_area_evacuee\'',
      'required': false,
      '$autoname': 'east_evacuation'
    },
    {
      'name': 'recent_displacement',
      'type': 'select_one',
      '$kuid': '4wxTVN71C',
      'label': [
        'Has your household been displaced within in the last 3 days?',
        'Чи була ваша родина переміщена протягом останніх 3 днів?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-east_evacuation-recent_displacement',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/east_evacuation/recent_displacement',
      'required': true,
      '$autoname': 'recent_displacement',
      'select_from_list_name': 'yes_no'
    },
    {
      'type': 'end_group',
      '$kuid': 'nkcWrLx4N'
    },
    {
      'name': 'idp_host',
      'type': 'begin_group',
      '$kuid': 'nEOWTeLYT',
      'label': [
        'IDP Host Location or Other Locations with Conflict-Affected Persons',
        'Місце перебування внутрішньо переміщених осіб або інші місця з постраждалими від конфлікту особами'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-idp_host',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/idp_host',
      'relevant': '${BHA_area} = \'bha_area_idp\'',
      'required': false,
      '$autoname': 'idp_host'
    },
    {
      'name': 'safe_shelter_001',
      'type': 'select_one',
      '$kuid': 'LzkUq2QTq',
      'label': [
        'Where are you currently staying?',
        'Де Ви зараз перебуваєте?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-idp_host-safe_shelter_001',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/idp_host/safe_shelter_001',
      'required': true,
      '$autoname': 'safe_shelter_001',
      'select_from_list_name': 'housing'
    },
    {
      'name': 'Has_this_location_been_damaged',
      'type': 'select_one',
      '$kuid': '2aPfbEhgW',
      'label': [
        'Has this location been damaged or shelled by the conflict since February 2022?',
        'Чи було це місце пошкоджено чи обстріляно внаслідок конфлікту з лютого 2022 року?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-idp_host-Has_this_location_been_damaged',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/idp_host/Has_this_location_been_damaged',
      'required': false,
      '$autoname': 'Has_this_location_been_damaged',
      'select_from_list_name': 'pa1df51'
    },
    {
      'name': 'idp_host_shelter_damaged',
      'type': 'select_one',
      '$kuid': 'XujeDsysc',
      'label': [
        'Was your house damaged or destroyed since Feb. 2022?',
        'Чи був ваш будинок пошкоджений або зруйнований з лютого 2022 року?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-idp_host-idp_host_shelter_damaged',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/idp_host/idp_host_shelter_damaged',
      'relevant': '${Has_this_location_been_damaged} = \'1\'',
      'required': true,
      '$autoname': 'idp_host_shelter_damaged',
      'select_from_list_name': 'zs4qw36'
    },
    {
      'name': 'main_reason_damaged_shelter',
      'type': 'select_one',
      '$kuid': 'qQq2skBf7',
      'label': [
        'Is this the main reason you are not currently living in your house?',
        'Це головна причина, чому ви зараз не живете у своєму будинку?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-idp_host-main_reason_damaged_shelter',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/idp_host/main_reason_damaged_shelter',
      'relevant': '${idp_host_shelter_damaged} = \'1\'',
      'required': false,
      '$autoname': 'main_reason_damaged_shelter',
      'select_from_list_name': 'vn5jh23'
    },
    {
      'type': 'end_group',
      '$kuid': 'XDeqoOTBo'
    },
    {
      'name': 'center',
      'type': 'begin_group',
      '$kuid': 'mg4EapSqC',
      'label': [
        'Formally Occupied Areas',
        'Офіційно окуповані території'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-center',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/center',
      'relevant': '${BHA_area} = \'bha_area_formally\'',
      'required': false,
      '$autoname': 'center'
    },
    {
      'name': 'occupation',
      'type': 'select_one',
      '$kuid': '8SvsartCQ',
      'label': [
        'Has your family lived under occupation?',
        'Ваша родина жила в окупації?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-center-occupation',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/center/occupation',
      'required': true,
      '$autoname': 'occupation',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'returnee',
      'type': 'select_one',
      '$kuid': 'Ya99Z2BbV',
      'label': [
        'Have you been displaced due to the occupation and are now returning to your place of residency?',
        'Чи були ви переселені через окупацію і зараз повертаєтесь на місце проживання?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-center-returnee',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/center/returnee',
      'relevant': '${occupation} = \'2\'',
      'required': true,
      '$autoname': 'returnee',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'safe_shelter',
      'type': 'select_one',
      '$kuid': 'ssbG00SWU',
      'label': [
        'Was your home impacted or destroyed by the conflict?',
        'Чи постраждав/був зруйнований ваш будинок через конфлікт?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-center-safe_shelter',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/center/safe_shelter',
      'relevant': '${returnee} = \'1\'',
      'required': true,
      '$autoname': 'safe_shelter',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'ctr_vuln',
      'type': 'calculate',
      '$kuid': 'tA8ukXcPC',
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-center-ctr_vuln',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/center/ctr_vuln',
      'required': false,
      '$autoname': 'ctr_vuln',
      'calculation': 'if(${occupation}=\'1\' or ${safe_shelter}=\'1\', 1,0)'
    },
    {
      'type': 'end_group',
      '$kuid': '9oiT6qO0w'
    },
    {
      'name': 'east_conflict_location',
      'type': 'begin_group',
      '$kuid': 'ogTKI3cKn',
      'label': [
        'Conflict-affected Locations (within 40km of contact line)',
        'Постраждалі від конфлікту території (в межах 40 км від лінії зіткнення)'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-east_conflict_location',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/east_conflict_location',
      'relevant': '${BHA_area} = \'bha_area_conflict\'',
      'required': false,
      '$autoname': 'east_conflict_location'
    },
    {
      'name': 'displaced_ngca',
      'type': 'select_one',
      '$kuid': 'DPYQWvvgZ',
      'label': [
        'Has your home been damaged or destroyed by shelling?',
        'Ваш будинок був пошкоджений або зруйнований обстрілом?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_inclusion_area-east_conflict_location-displaced_ngca',
      '$xpath': 'inclusion_exclusion_group/group_inclusion_area/east_conflict_location/displaced_ngca',
      'required': true,
      '$autoname': 'displaced_ngca',
      'select_from_list_name': 'damaged'
    },
    {
      'type': 'end_group',
      '$kuid': 'VhKvzWu0j'
    },
    {
      'type': 'end_group',
      '$kuid': 'i8sZrRWFE'
    },
    {
      'name': 'mpca_targeting_criteria',
      'type': 'begin_group',
      '$kuid': 'il6Zduqlh',
      'label': [
        '6. Vulnerability Screening',
        '6. Перевірка вразливості'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria',
      'relevant': '${vul_screen} = \'1\'',
      'required': false,
      '$autoname': 'mpca_targeting_criteria'
    },
    {
      'name': 'For_DRC_staff_only_Was_this_',
      'type': 'select_one',
      '$kuid': 'WzQxeQAMe',
      'label': [
        'For DRC staff only - Was this household referred by DRC Protection?',
        'Лише для персоналу DRC - чи була ця домогосподарство направлена ​​DRC Protection?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-For_DRC_staff_only_Was_this_',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/For_DRC_staff_only_Was_this_',
      'required': false,
      '$autoname': 'For_DRC_staff_only_Was_this_',
      'select_from_list_name': 'ya77k53'
    },
    {
      'name': 'Is_this_household_female_heade',
      'type': 'select_one',
      '$kuid': '35x2QUr45',
      'label': [
        'Is this household female-headed?',
        'Це домогосподарство очолює жінка?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-Is_this_household_female_heade',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/Is_this_household_female_heade',
      'required': false,
      '$autoname': 'Is_this_household_female_heade',
      'select_from_list_name': 'nl99d95'
    },
    {
      'name': 'single_PWD',
      'type': 'select_one',
      '$kuid': 'ijBBbdfot',
      'label': [
        'Is this person living alone and have a chronic illness/disease/disability/temporary impairment?',
        'Чи живе ця особа одна і має хронічну хворобу/хворобу/інвалідність/тимчасове порушення?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-single_PWD',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/single_PWD',
      'required': true,
      '$autoname': 'single_PWD',
      'select_from_list_name': 'st9uz80'
    },
    {
      'hint': [
        'Children = person under 18 years',
        'Діти = особи до 18 років'
      ],
      'name': 'large_hh',
      'type': 'select_one',
      '$kuid': 'cIy1xMUf2',
      'label': [
        'Does this household have 2 or more children?',
        'Чи є в цій родині 2 або більше дітей?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-large_hh',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/large_hh',
      'required': true,
      '$autoname': 'large_hh',
      'select_from_list_name': 'nc6hj06'
    },
    {
      'name': 'child_elderly',
      'type': 'select_one',
      '$kuid': 'zIPlh8E5r',
      'label': [
        'Does this household have at least 1 child (under 18 years) and 1 elderly (60+ years) person?',
        'Чи є в цьому домогосподарстві принаймні 1 дитина (до 18 років) і 1 особа похилого віку (60+ років)?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-child_elderly',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/child_elderly',
      'required': true,
      '$autoname': 'child_elderly',
      'select_from_list_name': 'hq3aw02'
    },
    {
      'name': 'child_pwd',
      'type': 'select_one',
      '$kuid': 'U3mESJwBU',
      'label': [
        'Does this household have at least 1 child (under 18 years) and 1 member with a chronic illness/disease/disability/temporary impairment?',
        'Чи є в цьому домогосподарстві принаймні 1 дитина (до 18 років) і 1 член із хронічною хворобою/захворюванням/інвалідністю/тимчасовим порушенням?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-child_pwd',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/child_pwd',
      'required': true,
      '$autoname': 'child_pwd',
      'select_from_list_name': 'ia6pz20'
    },
    {
      'name': 'plw',
      'type': 'select_one',
      '$kuid': 'eqgiQbWAS',
      'label': [
        'Is there any pregnant or lactating women in your household?',
        'Чи є у вашій родині вагітні або годуючі жінки?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-plw',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/plw',
      'required': true,
      '$autoname': 'plw',
      'select_from_list_name': 'ly1eq87'
    },
    {
      'name': 'displaced_30days',
      'type': 'select_one',
      '$kuid': 'C7IVwiYVB',
      'label': [
        'Has this household been displaced in the last 30 days?',
        'Чи було це домогосподарство переміщено за останні 30 днів?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-displaced_30days',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/displaced_30days',
      'required': true,
      '$autoname': 'displaced_30days',
      'select_from_list_name': 'xv18a98'
    },
    {
      'name': 'child_custody',
      'type': 'select_one',
      '$kuid': '5P7IpTcHW',
      'label': [
        'Is this household caring for other children (guardianship or custody)?',
        'Чи піклується це домогосподарство про інших дітей (опіка чи піклування)?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-child_custody',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/child_custody',
      'required': true,
      '$autoname': 'child_custody',
      'select_from_list_name': 'ey0ar19'
    },
    {
      'name': 'damaged_inclusion_criteria',
      'type': 'select_one',
      '$kuid': '5aBIzt2mm',
      'label': [
        'Is this household affected by sudden shelling including those where people have lost family member, houses, livelihoods (damaged shop/lost, farm, livestock)?',
        'Translation missing - Is this household affected by sudden shelling including those where people have lost family member, houses, livelihoods (damaged shop/lost, farm, livestock)?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-damaged_inclusion_criteria',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/damaged_inclusion_criteria',
      'required': false,
      '$autoname': 'damaged_inclusion_criteria',
      'select_from_list_name': 'sl8zj71'
    },
    {
      'name': 'internal_referral',
      'type': 'select_one',
      '$kuid': '36nPFNeLJ',
      'label': [
        'Should this household be referred to another DRC department?',
        'Чи слід направити це домогосподарство до іншого департаменту ДРК?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-internal_referral',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/internal_referral',
      'required': true,
      '$autoname': 'internal_referral',
      'select_from_list_name': 'bd07e36'
    },
    {
      'hint': [
        'Select as many as applicable',
        'Виберіть стільки, скільки потрібно'
      ],
      'name': 'internal_referral_specific',
      'type': 'select_multiple',
      '$kuid': 'jAJzi1tqU',
      'label': [
        'Select to which DRC department',
        'Виберіть, до якого відділу DRC'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-internal_referral_specific',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/internal_referral_specific',
      'relevant': '${internal_referral} = \'1\'',
      'required': false,
      '$autoname': 'internal_referral_specific',
      'select_from_list_name': 'ob8tn42'
    },
    {
      'name': 'additional_specific_needs',
      'type': 'text',
      '$kuid': 'AubFbdi3M',
      'label': [
        'For DRC staff - Please enter any additional comments regarding specific needs of this household?',
        'Для персоналу DRC - Будь ласка, введіть додаткові коментарі щодо конкретних потреб цього домогосподарства?'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_targeting_criteria-additional_specific_needs',
      '$xpath': 'inclusion_exclusion_group/mpca_targeting_criteria/additional_specific_needs',
      'required': false,
      '$autoname': 'additional_specific_needs'
    },
    {
      'type': 'end_group',
      '$kuid': 'HpQEqOBy5'
    },
    {
      'hint': [
        'AUTOMATIC - Just click PROCEED TO NEXT STEP',
        'АВТОМАТИЧНО - просто натисніть ПЕРЕХОДИТИ ДО НАСТУПНОГО КРОКУ'
      ],
      'name': 'mpca_eligible_inclusion_area',
      'type': 'select_one',
      '$kuid': '468OPRwak',
      'label': [
        'This household is eligible for MPCA because they satisfy the inclusion criteria for the category of area',
        'Це домогосподарство має право на MPCA, оскільки воно відповідає критеріям включення для категорії території'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_eligible_inclusion_area',
      '$xpath': 'inclusion_exclusion_group/mpca_eligible_inclusion_area',
      'relevant': '${recent_displacement} = \'1\' or ${safe_shelter_001} = \'1\' or ${safe_shelter_001} = \'7\' or ${idp_host_shelter_damaged} = \'1\' or ${occupation} = \'1\' or ${returnee} = \'1\' or ${safe_shelter} = \'1\' or ${displaced_ngca} = \'1\' or ${damaged_inclusion_criteria} = \'1\'',
      'required': false,
      '$autoname': 'mpca_eligible_inclusion_area',
      'select_from_list_name': 'px5yb39'
    },
    {
      'hint': [
        'AUTOMATIC - Just click PROCEED TO NEXT STEP',
        'АВТОМАТИЧНО - просто натисніть ПЕРЕХОДИТИ ДО НАСТУПНОГО КРОКУ'
      ],
      'name': 'protection_referral',
      'type': 'select_one',
      '$kuid': '1vhv91bDw',
      'label': [
        'This household is eligible for MPCA because they were referred to from DRC Protection and pass the exclusion criteria',
        'Це домогосподарство має право на участь у програмі MPCA, оскільки воно було направлено з DRC Protection і відповідає критеріям виключення'
      ],
      '$qpath': 'inclusion_exclusion_group-protection_referral',
      '$xpath': 'inclusion_exclusion_group/protection_referral',
      'relevant': '${For_DRC_staff_only_Was_this_} = \'1\'',
      'required': false,
      '$autoname': 'protection_referral',
      'select_from_list_name': 'da7dh44'
    },
    {
      'hint': [
        'AUTOMATIC - Just click PROCEED TO NEXT STEP',
        'АВТОМАТИЧНО - просто натисніть ПЕРЕХОДИТИ ДО НАСТУПНОГО КРОКУ'
      ],
      'name': 'mpca_yes_ehh',
      'type': 'select_one',
      '$kuid': 'vfIpZrlW1',
      'label': [
        'This household is eligible for MPCA because they are elderly-headed.',
        'Це домогосподарство має право на MPCA, оскільки його очолюють люди похилого віку.'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_yes_ehh',
      '$xpath': 'inclusion_exclusion_group/mpca_yes_ehh',
      'relevant': '${hh_elderly_check} >= 60 or ${agex} >= 60',
      'required': false,
      '$autoname': 'mpca_yes_ehh',
      'select_from_list_name': 'iv7kx72'
    },
    {
      'hint': [
        'AUTOMATIC - Just click PROCEED TO NEXT STEP',
        'АВТОМАТИЧНО - просто натисніть ПЕРЕХОДИТИ ДО НАСТУПНОГО КРОКУ'
      ],
      'name': 'mpca_eligible_vul',
      'type': 'select_one',
      '$kuid': 'S9Y5CRSKX',
      'label': [
        'This household is eligible for MPCA because they meet at least one of the vulnerability targeting criteria.',
        'Це домогосподарство має право на MPCA, оскільки воно відповідає принаймні одному з критеріїв націлювання на вразливість.'
      ],
      '$qpath': 'inclusion_exclusion_group-mpca_eligible_vul',
      '$xpath': 'inclusion_exclusion_group/mpca_eligible_vul',
      'relevant': '${single_PWD} = \'1\' or ${large_hh} = \'1\' or ${child_elderly} = \'1\' or ${child_pwd} = \'1\' or ${plw} = \'1\' or ${displaced_30days} = \'1\' or ${child_custody} = \'1\' or ${Is_this_household_female_heade} = \'1\'',
      'required': false,
      '$autoname': 'mpca_eligible_vul',
      'select_from_list_name': 'ps2df75'
    },
    {
      'name': 'group_kk0ko83',
      'type': 'begin_group',
      '$kuid': 'OgF5gloVs',
      'label': [
        'Cash-for-rent',
        null
      ],
      '$qpath': 'inclusion_exclusion_group-group_kk0ko83',
      '$xpath': 'inclusion_exclusion_group/group_kk0ko83',
      'relevant': '${Programme} = \'cash_for_rent\' or ${Programme} = \'mpca___cash_for_rent\'',
      'required': false,
      '$autoname': 'group_kk0ko83'
    },
    {
      'name': 'Is_this_household_currently_re',
      'type': 'select_one',
      '$kuid': '7Q1qrPNE8',
      'label': [
        'Is this household currently renting or planning to rent an apartment/home?',
        'Це домогосподарство зараз орендує квартиру/будинок або тільки планує орендувати ?'
      ],
      '$qpath': 'inclusion_exclusion_group-group_kk0ko83-Is_this_household_currently_re',
      '$xpath': 'inclusion_exclusion_group/group_kk0ko83/Is_this_household_currently_re',
      'required': false,
      '$autoname': 'Is_this_household_currently_re',
      'select_from_list_name': 'dj7dj47'
    },
    {
      'name': 'The_household_is_to_WITH_start_up_grant',
      'type': 'note',
      '$kuid': 'dQvSqHjnC',
      'label': [
        'The household is to be considered to receive cash-for-rent (WITH start-up grant).',
        'Домогосподарство буде розглянуто для отримання Cash for rent гранта (ПЛЮС Start-up)'
      ],
      '$qpath': 'inclusion_exclusion_group-group_kk0ko83-The_household_is_to_WITH_start_up_grant',
      '$xpath': 'inclusion_exclusion_group/group_kk0ko83/The_household_is_to_WITH_start_up_grant',
      'relevant': '${Is_this_household_currently_re} = \'planning\'',
      'required': false,
      '$autoname': 'The_household_is_to_WITH_start_up_grant'
    },
    {
      'name': 'The_household_is_to_t_NO_start_up_grant',
      'type': 'note',
      '$kuid': 'zl01sym1x',
      'label': [
        'The household is to be considered to receive cash-for-rent (NO start-up grant).',
        'Домогосподарство буде розглянуто для отримання Cash for rent гранта (БЕЗ Start-up)'
      ],
      '$qpath': 'inclusion_exclusion_group-group_kk0ko83-The_household_is_to_t_NO_start_up_grant',
      '$xpath': 'inclusion_exclusion_group/group_kk0ko83/The_household_is_to_t_NO_start_up_grant',
      'relevant': '${Is_this_household_currently_re} = \'renting\'',
      'required': false,
      '$autoname': 'The_household_is_to_t_NO_start_up_grant'
    },
    {
      'type': 'end_group',
      '$kuid': '27uXwhcVd'
    },
    {
      'name': 'cash_yes',
      'type': 'begin_group',
      '$kuid': '4v3tOFhwi',
      'label': [
        '7. MPCA HH Personal Transfer Information',
        '7. Інформація про особисті перекази MPCA HH'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes',
      '$xpath': 'inclusion_exclusion_group/cash_yes',
      'relevant': '${mpca_eligible_inclusion_area} = \'1\' or ${protection_referral} = \'1\' or ${mpca_yes_ehh} = \'1\' or ${mpca_eligible_vul} = \'1\'',
      'required': false,
      '$autoname': 'cash_yes'
    },
    {
      'name': 'mpca_tot_transfer_value',
      'type': 'calculate',
      '$kuid': 'emD9tzlkG',
      'label': [
        null,
        'Загальна вартість передачі MPCA'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-mpca_tot_transfer_value',
      '$xpath': 'inclusion_exclusion_group/cash_yes/mpca_tot_transfer_value',
      'required': false,
      '$autoname': 'mpca_tot_transfer_value',
      'calculation': '${Total_Family} * 2220 * 3'
    },
    {
      'name': 'eligible_mpca_tv',
      'type': 'note',
      '$kuid': 'nNkRlhuo8',
      'label': [
        'You are eligible for cash assistance and according to the information provided, your household will receive a total transfer of ${mpca_tot_transfer_value} UAH (total number of people in HH * 2220 UAH * 3 months). We will now ask you some detailed questions about yourself.',
        'Ви маєте право на отримання грошової допомоги, і відповідно до наданої інформації ваша сім’я отримає загальну суму переказу в розмірі ${mpca_tot_transfer_value} грн (загальна кількість людей у ​​ДН * 2220 грн * 3 місяці). Зараз ми поставимо вам кілька детальних запитань про вас.'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-eligible_mpca_tv',
      '$xpath': 'inclusion_exclusion_group/cash_yes/eligible_mpca_tv',
      'relevant': '${Programme} != \'cash_for_rent\'',
      'required': false,
      '$autoname': 'eligible_mpca_tv'
    },
    {
      'name': 'idp_certificate',
      'type': 'select_one',
      '$kuid': 'p0jBHaCy8',
      'label': [
        'Do you have an IDP certificate?',
        'У вас є довідка ВПО?'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-idp_certificate',
      '$xpath': 'inclusion_exclusion_group/cash_yes/idp_certificate',
      'relevant': '${status} = \'status_idp\'',
      'required': false,
      '$autoname': 'idp_certificate',
      'select_from_list_name': 'uz87f42'
    },
    {
      'name': 'reason_no_idp_certificate',
      'type': 'text',
      '$kuid': 'mhOzaVweF',
      'label': [
        'Please state main reason why you do not have an IDP certificate',
        'Будь ласка, вкажіть основну причину, чому у вас немає довідки ВПО'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-reason_no_idp_certificate',
      '$xpath': 'inclusion_exclusion_group/cash_yes/reason_no_idp_certificate',
      'relevant': '${idp_certificate} = \'2\'',
      'required': false,
      '$autoname': 'reason_no_idp_certificate'
    },
    {
      'name': 'resident_permit',
      'type': 'select_one',
      '$kuid': 'OYXMcKlXh',
      'label': [
        'Do you have a resident permit from a conflict-affected location?',
        'Чи Ви зареєстровані в регіоні, що постраждав від конфлікту?'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-resident_permit',
      '$xpath': 'inclusion_exclusion_group/cash_yes/resident_permit',
      'relevant': '${status} = \'status_conflict\'',
      'required': false,
      '$autoname': 'resident_permit',
      'select_from_list_name': 'wj2im30'
    },
    {
      'name': 'For_staff_member_ONL_cabinet_of_ministers',
      'type': 'select_one',
      '$kuid': 'ZDbA60yUl',
      'label': [
        'For staff member ONLY - is this person from a recognized conflict-affected area? (within the decree of cabinet of ministers)',
        'ТІЛЬКИ для співробітника - ця особа з затвердженої в межах постанови Кабінету Міністрів території конфлікту?'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-For_staff_member_ONL_cabinet_of_ministers',
      '$xpath': 'inclusion_exclusion_group/cash_yes/For_staff_member_ONL_cabinet_of_ministers',
      'relevant': '${resident_permit} = \'1\'',
      'required': false,
      '$autoname': 'For_staff_member_ONL_cabinet_of_ministers',
      'select_from_list_name': 'bl1zo37'
    },
    {
      'name': 'no_resident_permit',
      'type': 'text',
      '$kuid': '3siv8sD00',
      'label': [
        'If no, what is the main reason for not having a resident permit?',
        'Якщо ні, яка основна причина відсутності реєстрації?'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-no_resident_permit',
      '$xpath': 'inclusion_exclusion_group/cash_yes/no_resident_permit',
      'relevant': '${resident_permit} = \'2\'',
      'required': false,
      '$autoname': 'no_resident_permit'
    },
    {
      'hint': [
        'Confirm by looking at the passport',
        'Підтвердьте подивившись паспорт'
      ],
      'name': 'passport_serial',
      'type': 'text',
      '$kuid': 'M4Q3pccvW',
      'label': [
        'Enter passport series',
        'Введіть серію паспорта'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-passport_serial',
      '$xpath': 'inclusion_exclusion_group/cash_yes/passport_serial',
      'required': true,
      '$autoname': 'passport_serial'
    },
    {
      'hint': [
        'Confirm by looking at the passport',
        'Підтвердьте подивившись паспорт'
      ],
      'name': 'passport_number',
      'type': 'text',
      '$kuid': 'V6fj8K6Zx',
      'label': [
        'Enter passport number',
        'Введіть номер паспорта'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-passport_number',
      '$xpath': 'inclusion_exclusion_group/cash_yes/passport_number',
      'required': true,
      '$autoname': 'passport_number'
    },
    {
      'hint': [
        'Confirm with respondent',
        'Підтвердьте з респондентом'
      ],
      'name': 'your_id',
      'type': 'text',
      '$kuid': 'h0ii7V4uZ',
      'label': [
        'What is your Tax ID?',
        'Який ваш податковий номер?'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-your_id',
      '$xpath': 'inclusion_exclusion_group/cash_yes/your_id',
      'relevant': '${ITN} = \'\'',
      'required': true,
      '$autoname': 'your_id',
      'appearance': 'numbers',
      'constraint': 'regex(., \'^[0-9]{10}$\')',
      'constraint_message': 'Number should have 10 digits / Номер повинен складатися з 10 цифр'
    },
    {
      'hint': [
        'Confirm with respondent',
        'Підтвердьте з респондентом'
      ],
      'name': 'registration_address',
      'type': 'text',
      '$kuid': '3oopjdoJf',
      'label': [
        'Enter registration address',
        'Введіть адресу реєстрації'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-registration_address',
      '$xpath': 'inclusion_exclusion_group/cash_yes/registration_address',
      'required': true,
      '$autoname': 'registration_address'
    },
    {
      'hint': [
        'Confirm with respondent - do not include +380',
        'Підтвердити з респондентом - не включати +380'
      ],
      'name': 'confirm_phone',
      'type': 'text',
      '$kuid': '439pQb6q0',
      'label': [
        'Confirm phone number of person receiving MPCA',
        'Підтвердьте номер телефону особи, яка отримує MPCA'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-confirm_phone',
      '$xpath': 'inclusion_exclusion_group/cash_yes/confirm_phone',
      'required': true,
      '$autoname': 'confirm_phone'
    },
    {
      'name': 'area_of_origin',
      'type': 'select_one',
      '$kuid': 'nWFf47wSa',
      'label': [
        'What is your area of origin prior to displacement? (Select Oblast)',
        'Який регіон вашого походження до переміщення? (Виберіть область)'
      ],
      '$qpath': 'inclusion_exclusion_group-cash_yes-area_of_origin',
      '$xpath': 'inclusion_exclusion_group/cash_yes/area_of_origin',
      'required': true,
      '$autoname': 'area_of_origin',
      'select_from_list_name': 'vc7it90'
    },
    {
      'type': 'end_group',
      '$kuid': '8ROsstCWH'
    },
    {
      'name': 'delivery_mechanisms',
      'type': 'begin_group',
      '$kuid': 'RcAGNoU3z',
      'label': [
        '8. Access to Delivery Mechanisms',
        '8. Доступ до механізмів доставки'
      ],
      '$qpath': 'inclusion_exclusion_group-delivery_mechanisms',
      '$xpath': 'inclusion_exclusion_group/delivery_mechanisms',
      'relevant': '${mpca_eligible_inclusion_area} = \'1\' or ${protection_referral} = \'1\' or ${mpca_yes_ehh} = \'1\' or ${mpca_eligible_vul} = \'1\'',
      'required': false,
      '$autoname': 'delivery_mechanisms'
    },
    {
      'name': 'What_is_your_preferred_payment',
      'type': 'select_one',
      '$kuid': 'oIg9rJcU3',
      'label': [
        'What is your preferred payment method?',
        'Translation missing - What is your preferred payment method?'
      ],
      '$qpath': 'inclusion_exclusion_group-delivery_mechanisms-What_is_your_preferred_payment',
      '$xpath': 'inclusion_exclusion_group/delivery_mechanisms/What_is_your_preferred_payment',
      'required': false,
      '$autoname': 'What_is_your_preferred_payment',
      'select_from_list_name': 'ks1dl44'
    },
    {
      'name': 'reason',
      'type': 'select_multiple',
      '$kuid': 'b7DgTOXL8',
      'label': [
        'If banks are not an option, for what reason?',
        'Якщо ні, то з якої причини?'
      ],
      '$qpath': 'inclusion_exclusion_group-delivery_mechanisms-reason',
      '$xpath': 'inclusion_exclusion_group/delivery_mechanisms/reason',
      'relevant': '${What_is_your_preferred_payment} = \'ukrposhta\' or ${What_is_your_preferred_payment} = \'none\'',
      'required': false,
      '$autoname': 'reason',
      'select_from_list_name': 'bank_inaccess'
    },
    {
      'name': 'specify',
      'type': 'text',
      '$kuid': 'niqnHNRf8',
      'label': [
        'If none of the options are available, please specify the reason',
        'Якщо інше, вкажіть'
      ],
      '$qpath': 'inclusion_exclusion_group-delivery_mechanisms-specify',
      '$xpath': 'inclusion_exclusion_group/delivery_mechanisms/specify',
      'relevant': '${What_is_your_preferred_payment} = \'none\'',
      'required': false,
      '$autoname': 'specify'
    },
    {
      'type': 'end_group',
      '$kuid': 'qMHiZDlSM'
    },
    {
      'name': 'social_protection',
      'type': 'begin_group',
      '$kuid': 'W4fnJjDpU',
      'label': [
        '9. Social Protection Assistance',
        '9. Соціальні виплати'
      ],
      '$qpath': 'inclusion_exclusion_group-social_protection',
      '$xpath': 'inclusion_exclusion_group/social_protection',
      'relevant': '${mpca_eligible_inclusion_area} = \'1\' or ${protection_referral} = \'1\' or ${mpca_yes_ehh} = \'1\' or ${mpca_eligible_vul} = \'1\'',
      'required': false,
      '$autoname': 'social_protection'
    },
    {
      'name': 'Are_you_currently_enrolled_in_',
      'type': 'select_one',
      '$kuid': 'IC8O3hrCN',
      'label': [
        'Are you currently enrolled in any social protection assistance?',
        'Чи отримуєте Ви зараз будь-яку грошову соціальну допомогу?'
      ],
      '$qpath': 'inclusion_exclusion_group-social_protection-Are_you_currently_enrolled_in_',
      '$xpath': 'inclusion_exclusion_group/social_protection/Are_you_currently_enrolled_in_',
      'required': false,
      '$autoname': 'Are_you_currently_enrolled_in_',
      'select_from_list_name': 'jg4ti33'
    },
    {
      'name': 'Have_you_received_yo_in_the_last_3_months',
      'type': 'select_one',
      '$kuid': '9sY6Q0UHf',
      'label': [
        'Have you received your social protection benefits in the last 3 months?',
        'Чи отримували ви соціальні виплати за останні 3 місяці?'
      ],
      '$qpath': 'inclusion_exclusion_group-social_protection-Have_you_received_yo_in_the_last_3_months',
      '$xpath': 'inclusion_exclusion_group/social_protection/Have_you_received_yo_in_the_last_3_months',
      'required': false,
      '$autoname': 'Have_you_received_yo_in_the_last_3_months',
      'select_from_list_name': 'rw8tu75'
    },
    {
      'name': 'Are_you_able_to_provide_inform',
      'type': 'select_one',
      '$kuid': '2tsYpqrzP',
      'label': [
        'Are you able to provide information on which social protection assistance programe you are enrolled in?',
        'Чи можете ви надати інформацію про те, до якої програми соціального захисту ви зараховані?'
      ],
      '$qpath': 'inclusion_exclusion_group-social_protection-Are_you_able_to_provide_inform',
      '$xpath': 'inclusion_exclusion_group/social_protection/Are_you_able_to_provide_inform',
      'required': false,
      '$autoname': 'Are_you_able_to_provide_inform',
      'select_from_list_name': 'os0ub85'
    },
    {
      'name': 'Please_select_all_th_urrently_enrolled_in',
      'type': 'select_multiple',
      '$kuid': '3mvu4XP2z',
      'label': [
        'Please select all the social protection assistance programs you are currently enrolled in',
        'Будь ласка, виберіть усі програми соціальної допомоги, до яких ви зараз зареєстровані'
      ],
      '$qpath': 'inclusion_exclusion_group-social_protection-Please_select_all_th_urrently_enrolled_in',
      '$xpath': 'inclusion_exclusion_group/social_protection/Please_select_all_th_urrently_enrolled_in',
      'relevant': '${Are_you_able_to_provide_inform} = \'1\'',
      'required': false,
      '$autoname': 'Please_select_all_th_urrently_enrolled_in',
      'select_from_list_name': 'fm4oo83'
    },
    {
      'name': 'Were_you_enrolled_to_before_February_2022',
      'type': 'select_one',
      '$kuid': 'rDMQnW6vN',
      'label': [
        'Were you enrolled to these social assistance benefits before February 2022?',
        'Ви отримували ці соціальні виплати до лютого 2022 року?'
      ],
      '$qpath': 'inclusion_exclusion_group-social_protection-Were_you_enrolled_to_before_February_2022',
      '$xpath': 'inclusion_exclusion_group/social_protection/Were_you_enrolled_to_before_February_2022',
      'relevant': '${Are_you_currently_enrolled_in_} = \'1\'',
      'required': false,
      '$autoname': 'Were_you_enrolled_to_before_February_2022',
      'select_from_list_name': 'yb5ak26'
    },
    {
      'type': 'end_group',
      '$kuid': 'LRDHMbGlL'
    },
    {
      'name': 'multisector_questions',
      'type': 'begin_group',
      '$kuid': 'QOi2DdS4n',
      'label': [
        '10. Shelter/Protection - Eligible (optional)',
        '10. Притулок/Захист – прийнятний (необов’язково)'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions',
      '$xpath': 'inclusion_exclusion_group/multisector_questions',
      'relevant': '${mpca_eligible_inclusion_area} = \'1\' or ${protection_referral} = \'1\' or ${mpca_yes_ehh} = \'1\' or ${mpca_eligible_vul} = \'1\'',
      'required': false,
      '$autoname': 'multisector_questions'
    },
    {
      'name': 'We_would_now_like_to_ask_you_s',
      'type': 'select_one',
      '$kuid': 'PQXnbqNkt',
      'label': [
        'We would now like to ask you some questions about shelter, NFI and protection. Do you agree to proceed with the additional questions?',
        'Зараз ми хотіли б поставити вам кілька запитань про притулок, непрофільну інформацію та захист. Чи згодні ви продовжити відповіді на додаткові запитання?'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions-We_would_now_like_to_ask_you_s',
      '$xpath': 'inclusion_exclusion_group/multisector_questions/We_would_now_like_to_ask_you_s',
      'required': false,
      '$autoname': 'We_would_now_like_to_ask_you_s',
      'select_from_list_name': 'ih6wd18'
    },
    {
      'name': 'group_shelter',
      'type': 'begin_group',
      '$kuid': '0DjpieUR1',
      'label': [
        'Shelter',
        'Притулок'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions-group_shelter',
      '$xpath': 'inclusion_exclusion_group/multisector_questions/group_shelter',
      'relevant': '${We_would_now_like_to_ask_you_s} = \'1\' and ${drc_base} != \'chj\'',
      'required': false,
      '$autoname': 'group_shelter'
    },
    {
      'hint': [
        '\'Shelter repairs\' means when the household need to repair their damaged house',
        '«Ремонт житла» означає, коли родині потрібно відремонтувати свій пошкоджений будинок (з будь-яких причин)'
      ],
      'name': 'rent',
      'type': 'select_one',
      '$kuid': 'Igtt6oAnB',
      'label': [
        'Are you currently paying for rent?',
        'Ви зараз платите за оренду?'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions-group_shelter-rent',
      '$xpath': 'inclusion_exclusion_group/multisector_questions/group_shelter/rent',
      'required': true,
      '$autoname': 'rent',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'rent_2',
      'type': 'select_one',
      '$kuid': '14g34GJjq',
      'label': [
        'Do you anticipate that your household will need to pay rent next month?',
        'Чи очікуєте ви, що вам доведеться платити за оренду в наступному місяці?'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions-group_shelter-rent_2',
      '$xpath': 'inclusion_exclusion_group/multisector_questions/group_shelter/rent_2',
      'relevant': '${rent} = \'2\'',
      'required': true,
      '$autoname': 'rent_2',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'repairs',
      'type': 'select_one',
      '$kuid': '9Fwn5Ewhx',
      'label': [
        'Are you currently paying for any shelter repairs?',
        'Чи оплачуєте ви зараз будь-який ремонт житла?'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions-group_shelter-repairs',
      '$xpath': 'inclusion_exclusion_group/multisector_questions/group_shelter/repairs',
      'required': true,
      '$autoname': 'repairs',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'repairs_2',
      'type': 'select_one',
      '$kuid': 'FVzRVANWg',
      'label': [
        'Do you anticipate that you need to pay for shelter repairs in the next month?',
        'Чи очікуєте ви, що наступного місяця вам доведеться заплатити за ремонт житла?'
      ],
      '$qpath': 'inclusion_exclusion_group-multisector_questions-group_shelter-repairs_2',
      '$xpath': 'inclusion_exclusion_group/multisector_questions/group_shelter/repairs_2',
      'relevant': '${repairs} = \'2\'',
      'required': true,
      '$autoname': 'repairs_2',
      'select_from_list_name': 'yes_no'
    },
    {
      'type': 'end_group',
      '$kuid': 'Kafspaz7U'
    },
    {
      'type': 'end_group',
      '$kuid': 'rGoJrchPq'
    },
    {
      'type': 'end_group',
      '$kuid': 'ictpNpiIM'
    },
    {
      'name': 'group_5_document_collection',
      'type': 'begin_group',
      '$kuid': '9QmPGSH15',
      'label': [
        '11. Document Collection',
        '7. Збір документів'
      ],
      '$qpath': 'group_5_document_collection',
      '$xpath': 'group_5_document_collection',
      'relevant': '${mpca_eligible_inclusion_area} = \'1\' or ${protection_referral} = \'1\' or ${mpca_yes_ehh} = \'1\' or ${mpca_eligible_vul} = \'1\' or ${Kits_to_be_provided} != \'\'',
      'required': false,
      '$autoname': 'group_5_document_collection'
    },
    {
      'name': 'consent_document',
      'type': 'select_one',
      '$kuid': 'KiV4NwCQM',
      'label': [
        'Do you provide DRC consent to take photos or copies of your personal documentation at this time? Following DRC Data Protection Protocols and Ukraine Law on Data Protection, we will not share copies or photos of your documents with anyone outside DRC and these will only be used for the sole purpose of processing your information in order to provide you with cash assistance. You can decide to say no at this time and we will need to collect your documents at a later point in time.',
        'Чи надаєте ви згоду DRC на фотографування або копіювання ваших особистих документів у цей час? Відповідно до протоколів захисту даних ДРК та Закону України «Про захист даних» ми не надаватимемо копії чи фотографії ваших документів нікому за межами ДРК, і вони використовуватимуться лише з єдиною метою обробки вашої інформації, щоб надати вам грошову допомогу. Ви можете відмовитися зараз, і нам потрібно буде забрати ваші документи пізніше.'
      ],
      '$qpath': 'group_5_document_collection-consent_document',
      '$xpath': 'group_5_document_collection/consent_document',
      'required': false,
      '$autoname': 'consent_document',
      'select_from_list_name': 'cu3oy57'
    },
    {
      'name': 'Does_the_respondent_have_perso',
      'type': 'select_one',
      '$kuid': '8ubwXacpL',
      'label': [
        'Does the respondent have personal documentation? (passport or IDP certificate)',
        'Чи є у респондента особисті документи? (паспорт або довідка ВПО)'
      ],
      '$qpath': 'group_5_document_collection-Does_the_respondent_have_perso',
      '$xpath': 'group_5_document_collection/Does_the_respondent_have_perso',
      'required': false,
      '$autoname': 'Does_the_respondent_have_perso',
      'select_from_list_name': 'ei1mn93'
    },
    {
      'name': 'no_documents_refer',
      'type': 'note',
      '$kuid': 'aXdMzs5RS',
      'label': [
        'For DRC Staff: Proceed to completing internal referral form after completion of this registration and refer to DRC Protection',
        'Для персоналу DRC: перейдіть до заповнення внутрішньої форми направлення після завершення цієї реєстрації та зверніться до DRC Protection'
      ],
      '$qpath': 'group_5_document_collection-no_documents_refer',
      '$xpath': 'group_5_document_collection/no_documents_refer',
      'relevant': '${Does_the_respondent_have_perso} = \'2\'',
      'required': false,
      '$autoname': 'no_documents_refer'
    },
    {
      'name': 'DRC_Staff_take_phot_rt_registration_page',
      'type': 'note',
      '$kuid': 'R0ZEQfMgd',
      'label': [
        'DRC Staff: take photo of IDP certificate only. If person does not have IDP certificate, take photo ONLY of passport registration page.',
        'Персонал DRC: фотографуйте лише довідку ВПО. Якщо особа не має довідки ВПО, фотографуйте ЛИШЕ сторінку реєстрації в паспорті.'
      ],
      '$qpath': 'group_5_document_collection-DRC_Staff_take_phot_rt_registration_page',
      '$xpath': 'group_5_document_collection/DRC_Staff_take_phot_rt_registration_page',
      'required': false,
      '$autoname': 'DRC_Staff_take_phot_rt_registration_page'
    },
    {
      'name': 'Photo_of_IDP_Certificate',
      'type': 'image',
      '$kuid': '39nCZLZEw',
      'label': [
        'Photo of IDP Certificate',
        'Фото довідки ВПО'
      ],
      '$qpath': 'group_5_document_collection-Photo_of_IDP_Certificate',
      '$xpath': 'group_5_document_collection/Photo_of_IDP_Certificate',
      'relevant': '${consent_document} = \'1\'',
      'required': false,
      '$autoname': 'Photo_of_IDP_Certificate',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'Photo_of_IDP_Certificate_001',
      'type': 'image',
      '$kuid': '3BRO2goOe',
      'label': [
        'Photo of ITN Certificate',
        'Фото ІПН'
      ],
      '$qpath': 'group_5_document_collection-Photo_of_IDP_Certificate_001',
      '$xpath': 'group_5_document_collection/Photo_of_IDP_Certificate_001',
      'relevant': '${consent_document} = \'1\' and ${Does_the_beneficiary_have_an_i} = \'yes\'',
      'required': false,
      '$autoname': 'Photo_of_IDP_Certificate_001',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'Photo_of_IBAN',
      'type': 'image',
      '$kuid': '6ie0ZIvoI',
      'label': [
        'Photo of IBAN',
        'Фото IBAN'
      ],
      '$qpath': 'group_5_document_collection-Photo_of_IBAN',
      '$xpath': 'group_5_document_collection/Photo_of_IBAN',
      'relevant': '${What_is_your_preferred_payment} = \'bank_card\'',
      'required': false,
      '$autoname': 'Photo_of_IBAN',
      'parameters': 'max-pixels=1024'
    },
    {
      'hint': [
        'Person does not have IDP certificate',
        'Особа не має довідки ВПО'
      ],
      'name': 'photo_reg_passport',
      'type': 'image',
      '$kuid': 'zroI6oNRa',
      'label': [
        'Photo of Passport 1st page',
        'Фото першої сторінки паспорта'
      ],
      '$qpath': 'group_5_document_collection-photo_reg_passport',
      '$xpath': 'group_5_document_collection/photo_reg_passport',
      'relevant': '${consent_document} = \'1\'',
      'required': false,
      '$autoname': 'photo_reg_passport',
      'parameters': 'max-pixels=1024'
    },
    {
      'hint': [
        'Person does not have IDP certificate',
        'Особа не має довідки ВПО'
      ],
      'name': 'photo_reg_passport_001',
      'type': 'image',
      '$kuid': '5OBdfhOBW',
      'label': [
        'Photo of Registration Page in Passport',
        'Фото сторінки реєстрації в паспорті'
      ],
      '$qpath': 'group_5_document_collection-photo_reg_passport_001',
      '$xpath': 'group_5_document_collection/photo_reg_passport_001',
      'relevant': '${consent_document} = \'1\'',
      'required': false,
      '$autoname': 'photo_reg_passport_001',
      'parameters': 'max-pixels=1024'
    },
    {
      'type': 'end_group',
      '$kuid': 'UWyRIhXjB'
    },
    {
      'name': 'not_eligible_note',
      'type': 'select_one',
      '$kuid': 'qiN9Jq1rO',
      'label': [
        'Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter and protection in order to see if you are eligible for other type of assistance, and proceed with the NFI distribution. Do you agree to proceed with the additional questions?',
        'Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter and protection in order to see if you are eligible for other type of assistance, and proceed with the NFI distribution. Do you agree to proceed with the additional questions?'
      ],
      '$qpath': 'not_eligible_note',
      '$xpath': 'not_eligible_note',
      'relevant': '${exclusion_1} = \'1\' or ${exclusion_2} = \'1\'',
      'required': false,
      '$autoname': 'not_eligible_note',
      'select_from_list_name': 'pz2rg37'
    },
    {
      'name': 'not_eligible_note2',
      'type': 'select_one',
      '$kuid': '8LlXFqHu4',
      'label': [
        'Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter and protection in order to see if you are eligible for other type of assistance, and proceed with the NFI distribution. Do you agree to proceed with the additional questions?',
        'Unfortunately, due to our targeting criteria you are not eligible to receive cash assistance from DRC. However, we would like to ask you some questions about shelter and protection in order to see if you are eligible for other type of assistance, and proceed with the NFI distribution. Do you agree to proceed with the additional questions?'
      ],
      '$qpath': 'not_eligible_note2',
      '$xpath': 'not_eligible_note2',
      'relevant': '${single_PWD} = \'2\' and ${large_hh} = \'2\' and ${child_elderly} = \'2\' and ${child_pwd} = \'2\' and ${plw} = \'2\' and ${displaced_30days} = \'2\' and ${child_custody} = \'2\' and ${Is_this_household_female_heade} = \'2\'',
      'required': false,
      '$autoname': 'not_eligible_note2',
      'select_from_list_name': 'yf1sr85'
    },
    {
      'name': 'group_MS_not_eligible',
      'type': 'begin_group',
      '$kuid': 'bwFUNxHjM',
      'label': [
        'Shelter/Protection - not eligible for MPCA (optional)',
        'Притулок/Захист - не відповідає вимогам MPCA (необов’язково)'
      ],
      '$qpath': 'group_MS_not_eligible',
      '$xpath': 'group_MS_not_eligible',
      'relevant': '${not_eligible_note} = \'1\' or ${not_eligible_note2} = \'1\'',
      'required': false,
      '$autoname': 'group_MS_not_eligible'
    },
    {
      'name': 'group_shelter_no_mpca',
      'type': 'begin_group',
      '$kuid': 'G633MxCdP',
      'label': [
        'Shelter',
        'Притулок/NFI/Захист – не відповідає вимогам MPCA'
      ],
      '$qpath': 'group_MS_not_eligible-group_shelter_no_mpca',
      '$xpath': 'group_MS_not_eligible/group_shelter_no_mpca',
      'required': false,
      '$autoname': 'group_shelter_no_mpca'
    },
    {
      'name': 'cfr_no_mpca',
      'type': 'select_one',
      '$kuid': '4n4M4VrLf',
      'label': [
        'Are you currently paying for rent?',
        'Ви зараз сплачуєте орендну плату за житло?'
      ],
      '$qpath': 'group_MS_not_eligible-group_shelter_no_mpca-cfr_no_mpca',
      '$xpath': 'group_MS_not_eligible/group_shelter_no_mpca/cfr_no_mpca',
      'required': false,
      '$autoname': 'cfr_no_mpca',
      'select_from_list_name': 'yq4cz82'
    },
    {
      'name': 'cfr_no_mpca_2',
      'type': 'select_one',
      '$kuid': 'qmUJTPUDb',
      'label': [
        'Do you anticipate that your household will need to pay rent next month?',
        'Чи очікуєте ви, що вам доведеться платити за оренду в наступному місяці?'
      ],
      '$qpath': 'group_MS_not_eligible-group_shelter_no_mpca-cfr_no_mpca_2',
      '$xpath': 'group_MS_not_eligible/group_shelter_no_mpca/cfr_no_mpca_2',
      'relevant': '${cfr_no_mpca} = \'2\'',
      'required': false,
      '$autoname': 'cfr_no_mpca_2',
      'select_from_list_name': 'rp2hl37'
    },
    {
      'name': 'Are_you_currently_pa_any_shelter_repairs',
      'type': 'select_one',
      '$kuid': 'p4dPmGQWw',
      'label': [
        'Are you currently paying any shelter repairs?',
        'Чи оплачуєте ви зараз будь-який ремонт житла?'
      ],
      '$qpath': 'group_MS_not_eligible-group_shelter_no_mpca-Are_you_currently_pa_any_shelter_repairs',
      '$xpath': 'group_MS_not_eligible/group_shelter_no_mpca/Are_you_currently_pa_any_shelter_repairs',
      'required': false,
      '$autoname': 'Are_you_currently_pa_any_shelter_repairs',
      'select_from_list_name': 'su5nd08'
    },
    {
      'name': 'Do_you_anticipate_th_r_repairs_next_month',
      'type': 'select_one',
      '$kuid': 'h9XYiDl6L',
      'label': [
        'Do you anticipate that your household will need to pay for shelter repairs next month?',
        'Чи очікуєте ви, що наступного місяця вам доведеться заплатити за ремонт житла?'
      ],
      '$qpath': 'group_MS_not_eligible-group_shelter_no_mpca-Do_you_anticipate_th_r_repairs_next_month',
      '$xpath': 'group_MS_not_eligible/group_shelter_no_mpca/Do_you_anticipate_th_r_repairs_next_month',
      'required': false,
      '$autoname': 'Do_you_anticipate_th_r_repairs_next_month',
      'select_from_list_name': 'qr5wv99'
    },
    {
      'type': 'end_group',
      '$kuid': 'mrnhTaC22'
    },
    {
      'type': 'end_group',
      '$kuid': 'NX9QzpN4U'
    },
    {
      'name': 'no_consent_note',
      'type': 'note',
      '$kuid': 'CXKnLrBvr',
      'label': [
        'Thank you very much for talking to DRC today. We appreciate your time.',
        'Дуже дякую за сьогоднішню розмову з ДРБ. Ми цінуємо ваш час.'
      ],
      '$qpath': 'no_consent_note',
      '$xpath': 'no_consent_note',
      'relevant': '${consent_mod_1} = \'2\'',
      'required': false,
      '$autoname': 'no_consent_note'
    },
    {
      'name': 'confirm_truth',
      'type': 'select_one',
      '$kuid': '06jCJcPYS',
      'label': [
        'Do you confirm that all of the information you have provided is true and accurate?',
        'Чи підтверджуєте ви, що вся надана вами інформація є правдивою та точною?'
      ],
      '$qpath': 'confirm_truth',
      '$xpath': 'confirm_truth',
      'relevant': '${consent_mod_1} = \'1\'',
      'required': true,
      '$autoname': 'confirm_truth',
      'select_from_list_name': 'yes_no'
    },
    {
      'name': 'consent_to_esign',
      'type': 'select_one',
      '$kuid': 'fAiTfn0b0',
      'label': [
        'DRC staff member ONLY - Can this person provide an e-signature?',
        'ЛИШЕ для співробітника DRC - Чи може ця особа надати електронний підпис?'
      ],
      '$qpath': 'consent_to_esign',
      '$xpath': 'consent_to_esign',
      'relevant': '${mpca_eligible_inclusion_area} = \'1\' or ${protection_referral} = \'1\' or ${mpca_yes_ehh} = \'1\' or ${mpca_eligible_vul} = \'1\'',
      'required': true,
      '$autoname': 'consent_to_esign',
      'select_from_list_name': 'bf9tt95'
    },
    {
      'hint': [
        'READ OUT LOUD TO THE RESPONDENT AND ASK FOR E-SIGNATURE.',
        'ПРОЧИТАЙТЕ ВГОЛОС РЕСПОНДЕНТУ ТА ПОПРОХАЙТЕ ЕЛЕКТРОННИЙ ПІДПИС.'
      ],
      'name': 'consent_signature_payment',
      'type': 'image',
      '$kuid': '2vhLyNfPA',
      'label': [
        'In accordance with the Law of Ukraine "On the Protection of Personal Data" No. 2297-IV of June 1, 2010, we will need your consent for the following statement: "I give consent to the Representative Office of the Danish Refugee Council in Ukraine for the processing, use, access, distribution and transfer of my personal data to third parties that I provide about myself. The purpose of processing personal data to ensure the implementation of Assistance Programs.',
        'Відповідно до Закону України «Про захист персональних даних» № 2297-IV від 01.06.2010, нам знадобиться ваша згода на наступну заяву: «Я дати згоду Представництву Данської ради у справах біженців в Україні на обробку, використання, доступ, поширення та передачу моїх персональних даних третім особам, які я надаю про себе Мета обробки персональних даних для забезпечення виконання Програми допомоги.'
      ],
      '$qpath': 'consent_signature_payment',
      '$xpath': 'consent_signature_payment',
      'relevant': '${consent_to_esign} = \'1\'',
      'required': false,
      '$autoname': 'consent_signature_payment',
      'appearance': 'signature',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'paper_consent',
      'type': 'note',
      '$kuid': '8bmaGPGzv',
      'label': [
        'You have stated this person cannot provide an e-signature. Please have them complete a paper consent form.',
        'Ви заявили, що ця особа не може надати електронний підпис. Будь ласка, попросіть їх заповнити паперову форму згоди.'
      ],
      '$qpath': 'paper_consent',
      '$xpath': 'paper_consent',
      'relevant': '${consent_to_esign} = \'2\'',
      'required': false,
      '$autoname': 'paper_consent'
    },
    {
      'name': 'eligible_end_note',
      'type': 'note',
      '$kuid': 'y1Lbe3PCl',
      'label': [
        'Thank you so much for agreeing to answer the questions. DRC will be reviewing the application and might contact for additional clarification and request for personal documents..',
        'Дуже дякую, що погодилися відповісти на запитання. DRC розгляне заявку та може зв’язатися з Вами для додаткових роз’яснень і запиту на особисті документи.'
      ],
      '$qpath': 'eligible_end_note',
      '$xpath': 'eligible_end_note',
      'relevant': '${confirm_truth} = \'1\'',
      'required': false,
      '$autoname': 'eligible_end_note'
    }
  ],
  'choices': [
    {
      'name': 'mpca',
      '$kuid': 'XN42s4HZU',
      'label': [
        'MPCA',
        'MPCA'
      ],
      'list_name': 'ty0dr08',
      '$autovalue': 'mpca'
    },
    {
      'name': 'mpca___nfi',
      '$kuid': '9Hy3b86mF',
      'label': [
        'MPCA + NFI',
        'MPCA + NFI'
      ],
      'list_name': 'ty0dr08',
      '$autovalue': 'mpca___nfi'
    },
    {
      'name': 'nfi',
      '$kuid': 'BdhRYfcuz',
      'label': [
        'NFI',
        'NFI'
      ],
      'list_name': 'ty0dr08',
      '$autovalue': 'nfi'
    },
    {
      'name': 'cash_for_rent',
      '$kuid': 'HLcERCI2s',
      'label': [
        'Cash-for-rent',
        'Cash-for-rent'
      ],
      'list_name': 'ty0dr08',
      '$autovalue': 'cash_for_rent'
    },
    {
      'name': 'mpca___cash_for_rent',
      '$kuid': 'j3bHuAJ9J',
      'label': [
        'MPCA + Cash-for-rent',
        'MPCA + Cash-for-rent'
      ],
      'list_name': 'ty0dr08',
      '$autovalue': 'mpca___cash_for_rent'
    },
    {
      'name': 'bha_project',
      '$kuid': '6lNWOa5K9',
      'label': [
        'BHA - UKR-000284',
        'BHA - UKR-000284'
      ],
      'list_name': 'cf7xj17',
      '$autovalue': 'bha_project'
    },
    {
      'name': 'lwo',
      '$kuid': '74azmSwYf',
      'label': [
        'Lviv (LWO)',
        'Lviv (LWO)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'lwo'
    },
    {
      'name': 'cwc',
      '$kuid': '2QW9Ebbkb',
      'label': [
        'Chernivtsi (CWC)',
        'Chernivtsi (CWC)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'cwc'
    },
    {
      'name': 'chj',
      '$kuid': 's8gsQYE7C',
      'label': [
        'Chernihiv (CEJ)',
        'Chernihiv (CHJ)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'chj'
    },
    {
      'name': 'plv',
      '$kuid': 'uyKQ8JBUN',
      'label': [
        'Poltava (PLV)',
        'Poltava (PLV)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'plv'
    },
    {
      'name': 'dnk',
      '$kuid': 'Y3wGyrrHS',
      'label': [
        'Dnipro (DNK)',
        'Dnipro (DNK)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'dnk'
    },
    {
      'name': 'iev',
      '$kuid': 'EpvgyJqgq',
      'label': [
        'Kyiv (IEV)',
        'Kyiv (IEV)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'iev'
    },
    {
      'name': 'hrk',
      '$kuid': 'GI4zk4SxU',
      'label': [
        'Kharkiv (HRK)',
        'Kharkiv (HRK)'
      ],
      'list_name': 'drc_base',
      '$autovalue': 'hrk'
    },
    {
      'name': 'dmytro_ivanov',
      '$kuid': 'vGcPWKLXO',
      'label': [
        'Dmytro Ivanov',
        'Іванов Дмитро'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'dmytro_ivanov'
    },
    {
      'name': 'henadii_petrychenko',
      '$kuid': '3OFsmisZN',
      'label': [
        'Henadii Petrychenko',
        'Петриченко Геннадій'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'henadii_petrychenko'
    },
    {
      'name': 'nadiia_yudaieva',
      '$kuid': '5nLjLeW1o',
      'label': [
        'Nadiia Yudaieva',
        'Юдаєва Надія'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'nadiia_yudaieva'
    },
    {
      'name': 'dmytro_tsaruk',
      '$kuid': 'yJD7qV3Wi',
      'label': [
        'Dmytro Tsaruk',
        'Царук Дмитро'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'dmytro_tsaruk'
    },
    {
      'name': 'viktoria_ushan',
      '$kuid': 'u32WHef7m',
      'label': [
        'Viktoria Ushan',
        'Ушань Вікторія'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'viktoria_ushan'
    },
    {
      'name': 'kostiantyn_yefimchuk',
      '$kuid': '5rY1FhWcN',
      'label': [
        'Kostiantyn Yefimchuk',
        'Єфімчук Костянтин'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'kostiantyn_yefimchuk'
    },
    {
      'name': 'viktoriia_lytvynova',
      '$kuid': 'WpE5h43nE',
      'label': [
        'Viktoriia Lytvynova',
        'Вікторія Литвинова'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'viktoriia_lytvynova'
    },
    {
      'name': 'valerii_vietrov',
      '$kuid': '4u3jGG0mF',
      'label': [
        'Valerii Vietrov',
        'Валерій Вєтров'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'valerii_vietrov'
    },
    {
      'name': 'daria_kokalia',
      '$kuid': 'ymj0ejNGR',
      'label': [
        'Daria Kokalia',
        'Кокаля Дар\'я'
      ],
      'drc_base': 'lwo',
      'list_name': 'staff_names',
      '$autovalue': 'daria_kokalia'
    },
    {
      'name': 'oleks_havrylov',
      '$kuid': 'Rg45Wwjjh',
      'label': [
        'Oleks Havrylov',
        'Олександр Гаврилов'
      ],
      'drc_base': 'cwc',
      'list_name': 'staff_names',
      '$autovalue': 'oleks_havrylov'
    },
    {
      'name': 'vlad_zhukov',
      '$kuid': 'VOJfpsRvL',
      'label': [
        'Vlad Zhukov',
        'Влад Жуков'
      ],
      'drc_base': 'cwc',
      'list_name': 'staff_names',
      '$autovalue': 'vlad_zhukov'
    },
    {
      'name': 'artem_chernukha',
      '$kuid': 'qPZxtpKjT',
      'label': [
        'Artem Chernukha',
        'Артем Чернуха'
      ],
      'drc_base': 'cwc',
      'list_name': 'staff_names',
      '$autovalue': 'artem_chernukha'
    },
    {
      'name': 'maryna_dullovska',
      '$kuid': 'NULIiz4Zx',
      'label': [
        'Maryna Dullovska',
        'Марина Дуйловська'
      ],
      'drc_base': 'cwc',
      'list_name': 'staff_names',
      '$autovalue': 'maryna_dullovska'
    },
    {
      'name': 'oleh_vyshnevskyi',
      '$kuid': 'zP0jDuBdf',
      'label': [
        'Oleh Vyshevskyi',
        'Oleh Vyshevskyi'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'oleh_vyshnevskyi'
    },
    {
      'name': 'alina_bondarenko',
      '$kuid': 'IFiOmMEZP',
      'label': [
        'Alina Bondarenko',
        'Alina Bondarenko'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'alina_bondarenko'
    },
    {
      'name': 'danylo_palagno',
      '$kuid': 'JUNuJkGHk',
      'label': [
        'Danylo Palagno',
        'Данило Палагно'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'danylo_palagno'
    },
    {
      'name': 'serhii_dolzhenko',
      '$kuid': '9xXy1D8Li',
      'label': [
        'Serhii Dolzhenko',
        'Serhii Dolzhenko'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'serhii_dolzhenko'
    },
    {
      'name': 'viktoria_klymenko',
      '$kuid': 'ac92GvIoc',
      'label': [
        'Viktoria Klymenko',
        'Viktoria Klymenko'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'viktoria_klymenko'
    },
    {
      'name': 'andrii_zahoruyev',
      '$kuid': '8dZAQeFMs',
      'label': [
        'Andrii Zahoruyev',
        'Андрій Загоруєв'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'andrii_zahoruyev'
    },
    {
      'name': 'oleh_Ivanov',
      '$kuid': 'Ci3iEavJC',
      'label': [
        'Oleh Ivanov',
        'Олег Іванов'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'oleh_Ivanov'
    },
    {
      'name': 'karina_korzh',
      '$kuid': '23g7J3d0Q',
      'label': [
        'Karina Korzh',
        'Каріна Корж'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'karina_korzh'
    },
    {
      'name': 'serhii_nevmyvaka',
      '$kuid': 'LceknusPq',
      'label': [
        'Serhii Nevmyvaka',
        'Сергій Невмивака'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'serhii_nevmyvaka'
    },
    {
      'name': 'olha_osmukha',
      '$kuid': '3TjUH1dgR',
      'label': [
        'Olha Osmukha',
        'Ольга Осьмуха'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'olha_osmukha'
    },
    {
      'name': 'halyna_diachenko',
      '$kuid': '23wwyJzff',
      'label': [
        'Halyna Diachenko',
        'Галина Дьяченко'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'halyna_diachenko'
    },
    {
      'name': 'mariia_kozachko',
      '$kuid': 'qPepXSF54',
      'label': [
        'Mariia Kozachko',
        'Марія Козачко'
      ],
      'drc_base': 'dnk',
      'list_name': 'staff_names',
      '$autovalue': 'mariia_kozachko'
    },
    {
      'name': 'yurii_volkov',
      '$kuid': '2pWnRQEIi',
      'label': [
        'Yurii Volkov',
        'Юрій Волков'
      ],
      'drc_base': 'hrk',
      'list_name': 'staff_names',
      '$autovalue': 'yurii_volkov'
    },
    {
      'name': 'andrii_zagoruiev',
      '$kuid': 'ndwSzEp0R',
      'label': [
        'Andrii Zagoruiev',
        'Андрій Загоруєв'
      ],
      'drc_base': 'hrk',
      'list_name': 'staff_names',
      '$autovalue': 'andrii_zagoruiev'
    },
    {
      'name': 'olena_sydorenko',
      '$kuid': 'vQ8Mj2c26',
      'label': [
        'Olena Sydorenko',
        'Олена Сидоренко'
      ],
      'drc_base': 'hrk',
      'list_name': 'staff_names',
      '$autovalue': 'olena_sydorenko'
    },
    {
      'name': 'svitlana_smyrnova',
      '$kuid': 'KRZyuXx6s',
      'label': [
        'Svitlana Smyrnova',
        'Світлана Смирнова'
      ],
      'drc_base': 'hrk',
      'list_name': 'staff_names',
      '$autovalue': 'svitlana_smyrnova'
    },
    {
      'name': 'hennadii_kotsar',
      '$kuid': 'T1Isaz8TJ',
      'label': [
        'Hennadii Kotsar',
        'Генадій Коцар'
      ],
      'drc_base': 'hrk',
      'list_name': 'staff_names',
      '$autovalue': 'hennadii_kotsar'
    },
    {
      'name': 'dmytro_chernukha',
      '$kuid': 'xfCcPotNX',
      'label': [
        'Dmytro Chernukha',
        'Дмитро Чернуха'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'dmytro_chernukha'
    },
    {
      'name': 'anastasiia_reshynska',
      '$kuid': 'S549eMHa4',
      'label': [
        'Anastasiia Reshynska',
        'Анастасія Решинська'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'anastasiia_reshynska'
    },
    {
      'name': 'nataliia_pushenko',
      '$kuid': 'lEmnMhIer',
      'label': [
        'Nataliia Pushenko',
        'Наталія Пушенко'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'nataliia_pushenko'
    },
    {
      'name': 'tetiana_gorbatiuk',
      '$kuid': 'K7xnYEJIR',
      'label': [
        'Tetiana Gorbatiuk',
        'Горбатюк Тетяна'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'tetiana_gorbatiuk'
    },
    {
      'name': 'oleksandr_lukomets',
      '$kuid': 'UWqkdTIYJ',
      'label': [
        'Oleksandr Lukomets',
        'Лукомець Олександр'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'oleksandr_lukomets'
    },
    {
      'name': 'tetiana_kolot',
      '$kuid': '5M4aocBjY',
      'label': [
        'Tetiana Kolot',
        'Колот Тетяна'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'tetiana_kolot'
    },
    {
      'name': 'katerina_severin',
      '$kuid': 'EWJhQtCMn',
      'label': [
        'Katerina Severin',
        'Северін Катерина'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'katerina_severin'
    },
    {
      'name': 'maksim_sedun',
      '$kuid': 'jg7KwOC8A',
      'label': [
        'Maksim Sedun',
        'Седун Максим'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'maksim_sedun'
    },
    {
      'name': 'ivan_volynkin',
      '$kuid': 'tJ3VwXDRC',
      'label': [
        'Ivan Volynkin',
        'Волинкін Іван'
      ],
      'drc_base': 'chj',
      'list_name': 'staff_names',
      '$autovalue': 'ivan_volynkin'
    },
    {
      'name': 'bha_area_idp',
      '$kuid': 'XMojLeF3L',
      'label': [
        'IDP Host or Other Locations - high concentration of IDPs or conflict-affected persons.',
        'Місце перебування ВПО чи інші місця – висока концентрація ВПО або осіб, які постраждали від конфлікту.'
      ],
      'list_name': 'ev7gn91',
      '$autovalue': 'bha_area_idp'
    },
    {
      'name': 'bha_area_conflict',
      '$kuid': 'BcF3kHSXp',
      'label': [
        'Conflict-Affected location - within 40KM of contact line.',
        'Постраждале від конфлікту місце - в межах 40 км від лінії зіткнення'
      ],
      'order': '1',
      'list_name': 'ev7gn91',
      '$autovalue': 'bha_area_conflict'
    },
    {
      'name': 'bha_area_formally',
      '$kuid': '9xZllphWn',
      'label': [
        'Formally Occupied Area - formally occupied area since Feb. 2022.',
        'Офіційно окупована територія - офіційно окупована територія з лютого 2022 року.'
      ],
      'order': '2',
      'list_name': 'ev7gn91',
      '$autovalue': 'bha_area_formally'
    },
    {
      'name': 'bha_area_evacuee',
      '$kuid': 'oFZb4qroz',
      'label': [
        'Evacuee Hotspot - primary location of arrival from NGCA\'s.',
        'Гаряча точка евакуйованих – основне місце прибуття з непідконтрольних уряду територій.'
      ],
      'order': '3',
      'list_name': 'ev7gn91',
      '$autovalue': 'bha_area_evacuee'
    },
    {
      'name': '1',
      '$kuid': 'lauPjWfKg',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'yes_no',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': '4yY042kEm',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'yes_no',
      '$autovalue': '2'
    },
    {
      'name': 'cherkaska',
      '$kuid': 'quNbJEbgg',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'cherkaska'
    },
    {
      'name': 'chernihivska',
      '$kuid': 'fXUZ2P3eY',
      'label': [
        'Chernihivska',
        'Чернігівська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernihivska'
    },
    {
      'name': 'chernivetska',
      '$kuid': 'eadNyDIyL',
      'label': [
        'Chernivetska',
        'Чернівецька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernivetska'
    },
    {
      'name': 'dnipropetrovska',
      '$kuid': 'veiJRoExG',
      'label': [
        'Dnipropetrovska',
        'Дніпропетровська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'dnipropetrovska'
    },
    {
      'name': 'donetska',
      '$kuid': 'y3OmaADGT',
      'label': [
        'Donetska',
        'Донецька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'donetska'
    },
    {
      'name': 'ivano-frankivska',
      '$kuid': 'PzD8DH2HL',
      'label': [
        'Ivano-Frankivska',
        'Івано-Франківська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'ivano-frankivska'
    },
    {
      'name': 'kharkivska',
      '$kuid': 'tOqGe8VlQ',
      'label': [
        'Kharkivska',
        'Харківська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kharkivska'
    },
    {
      'name': 'khersonska',
      '$kuid': 'MvOo7bk5H',
      'label': [
        'Khersonska',
        'Херсонська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khersonska'
    },
    {
      'name': 'khmelnytska',
      '$kuid': 'iqpMr7DgK',
      'label': [
        'Khmelnytska',
        'Хмельницька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khmelnytska'
    },
    {
      'name': 'kirovohradska',
      '$kuid': 'Tk1XTqs0L',
      'label': [
        'Kirovohradska',
        'Кіровоградська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kirovohradska'
    },
    {
      'name': 'kyivska',
      '$kuid': 'G3jirMlFE',
      'label': [
        'Kyivska',
        'Київська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kyivska'
    },
    {
      'name': 'luhanska',
      '$kuid': 'MEK9UJXG0',
      'label': [
        'Luhanska',
        'Луганська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'luhanska'
    },
    {
      'name': 'lvivska',
      '$kuid': '3K13MEW1b',
      'label': [
        'Lvivska',
        'Львівська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'lvivska'
    },
    {
      'name': 'mykolaivska',
      '$kuid': 'n4ovlkN5O',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'odeska',
      '$kuid': 'xKJsL7T6M',
      'label': [
        'Odeska',
        'Одеська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'odeska'
    },
    {
      'name': 'poltavska',
      '$kuid': '1SlDKuocl',
      'label': [
        'Poltavska',
        'Полтавська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'poltavska'
    },
    {
      'name': 'rivnenska',
      '$kuid': 'ihFbMETat',
      'label': [
        'Rivnenska',
        'Рівненська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'rivnenska'
    },
    {
      'name': 'sevastopilska',
      '$kuid': '6vMrdWTFL',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sevastopilska'
    },
    {
      'name': 'sumska',
      '$kuid': 'bLzpqgLna',
      'label': [
        'Sumska',
        'Сумська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sumska'
    },
    {
      'name': 'ternopilska',
      '$kuid': 'K9pYlJZ7c',
      'label': [
        'Ternopilska',
        'Тернопільська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'ternopilska'
    },
    {
      'name': 'vinnytska',
      '$kuid': '4dWLZIg8d',
      'label': [
        'Vinnytska',
        'Вінницька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'vinnytska'
    },
    {
      'name': 'volynska',
      '$kuid': 'p5VpaioE3',
      'label': [
        'Volynska',
        'Волинська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'volynska'
    },
    {
      'name': 'zakarpatska',
      '$kuid': 'Zxiqlg8IU',
      'label': [
        'Zakarpatska',
        'Закарпатська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zakarpatska'
    },
    {
      'name': 'zaporizka',
      '$kuid': 'RMzDelDq1',
      'label': [
        'Zaporizka',
        'Запорізька'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zaporizka'
    },
    {
      'name': 'zhytomyrska',
      '$kuid': 'VMTyECN1p',
      'label': [
        'Zhytomyrska',
        'Житомирська'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zhytomyrska'
    },
    {
      'name': 'zvenyhorodskyi',
      '$kuid': 'vSK3DW8EA',
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
      '$kuid': 'gMqEvY49D',
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
      '$kuid': 'oWzAlOYms',
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
      '$kuid': 'syzStrdrO',
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
      '$kuid': 'AbJjygnuo',
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
      '$kuid': 'WdM5QhKBs',
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
      '$kuid': 'bA7v7gQNW',
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
      '$kuid': '7chsHtwaz',
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
      '$kuid': 'v7kAzzScd',
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
      '$kuid': 'IErViT7Ph',
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
      '$kuid': 'o2F2btaBn',
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
      '$kuid': 'WSsreuRsB',
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
      '$kuid': '6dC1X8cD9',
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
      '$kuid': 'qJvjJ0PWt',
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
      '$kuid': 'mCkrduJYW',
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
      '$kuid': 'uY17xiaup',
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
      '$kuid': 'uHEHAfuwK',
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
      '$kuid': 'SUSYPXGS6',
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
      '$kuid': 'B2S3KkY79',
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
      '$kuid': 'ing4HXJCt',
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
      '$kuid': 'oz7ACyPFy',
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
      '$kuid': 'u2jgp4UDm',
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
      '$kuid': 'ssvMB5Hxc',
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
      '$kuid': 'EMzlLT6Qq',
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
      '$kuid': 'gTA4sE3wC',
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
      '$kuid': 'gKwOgwQDf',
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
      '$kuid': 'iW0y3Q8cO',
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
      '$kuid': 'T4yBTooDf',
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
      '$kuid': 'fnYFB8WS6',
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
      '$kuid': 'ViajHpVPR',
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
      '$kuid': '6fSwbcV5f',
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
      '$kuid': 'fHjOEOfdq',
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
      '$kuid': 'w7q9FLgCP',
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
      '$kuid': '8h3XdaDEn',
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
      '$kuid': 'Qxt4Xp82e',
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
      '$kuid': 'GcVQPdIc0',
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
      '$kuid': '9WmFCBmTK',
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
      '$kuid': 'uHP5QEdnV',
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
      '$kuid': 'mexT2SqYk',
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
      '$kuid': 'awTRixKiu',
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
      '$kuid': 'ZjBmOC6Zt',
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
      '$kuid': '39TOMyGeK',
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
      '$kuid': 'Kof0pBLC6',
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
      '$kuid': 'vjX1PI1zr',
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
      '$kuid': 'okgHTURQ0',
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
      '$kuid': 'nxrlO5wRS',
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
      '$kuid': 'kwcbbISbp',
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
      '$kuid': 'boc8vKmSy',
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
      '$kuid': 'cU0mQqXcN',
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
      '$kuid': '364HgGxEU',
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
      '$kuid': '5DM9WBmgt',
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
      '$kuid': 'nGGeNzY1X',
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
      '$kuid': '7woD5MalN',
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
      '$kuid': 'sQOTIcdvA',
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
      '$kuid': 'ZPq8t8mi4',
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
      '$kuid': 'vQQ8nhKbg',
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
      '$kuid': 'jOUJtZKQQ',
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
      '$kuid': 'EKUw5A8oq',
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
      '$kuid': 'Rl0p7Iv6U',
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
      '$kuid': 'SPd4W5LG0',
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
      '$kuid': 'pGsB6RgDg',
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
      '$kuid': 'jr9raunkx',
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
      '$kuid': 'yDXHthenA',
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
      '$kuid': 'HKzSfbVnQ',
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
      '$kuid': 'z7y35pslL',
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
      '$kuid': 'pvwy1UKKq',
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
      '$kuid': '2TNRG7v7a',
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
      '$kuid': 'Ng4K4xklr',
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
      '$kuid': 'nzjBauR6R',
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
      '$kuid': 'eXa34rXtn',
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
      '$kuid': 'yIAjq4EKe',
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
      '$kuid': 'Vf8ykvmi3',
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
      '$kuid': 'bsO2nfve0',
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
      '$kuid': 'yg86XAVKC',
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
      '$kuid': '9AjbnFIbH',
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
      '$kuid': '2XaQcaFta',
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
      '$kuid': 'WaC0SEdyG',
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
      '$kuid': 'Mc1Ufh1wc',
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
      '$kuid': '0DNB6QWIw',
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
      '$kuid': 'YZkNFz7HM',
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
      '$kuid': 'spjUgtclc',
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
      '$kuid': 'WZH3ZdlIS',
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
      '$kuid': 'wEU8muP4s',
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
      '$kuid': 'y0bizUjOA',
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
      '$kuid': 'uNNN3Xiwj',
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
      '$kuid': '942C5Z3zY',
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
      '$kuid': 'sqzVKMpEl',
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
      '$kuid': 'ldCvl61P0',
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
      '$kuid': 'dJaS6UXLT',
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
      '$kuid': '1MOnT9eol',
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
      '$kuid': 'Fb6XgsVT7',
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
      '$kuid': 'vdT3RWEvw',
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
      '$kuid': 'CYhmqPBQv',
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
      '$kuid': 'XijnVmL7d',
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
      '$kuid': 'vCDdkjATR',
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
      '$kuid': '4IudBH34u',
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
      '$kuid': 'uOqyYgJR6',
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
      '$kuid': 'pAPCOtu9U',
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
      '$kuid': '5dYNG7mgw',
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
      '$kuid': 'Avaowlbys',
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
      '$kuid': 'iId0wwLE3',
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
      '$kuid': '3kVWI7PRU',
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
      '$kuid': '1YMmHskHF',
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
      '$kuid': 'i5UyromwB',
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
      '$kuid': '1LXYVlRkh',
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
      '$kuid': 'fIaIXi7tx',
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
      '$kuid': '4iYvJbnUE',
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
      '$kuid': '00SjGqkoA',
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
      '$kuid': 'BbzrjdapP',
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
      '$kuid': 'b8IoGQvV2',
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
      '$kuid': '4NicikL0H',
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
      '$kuid': 'FPNFZaJCa',
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
      '$kuid': 'SF9DQGcDY',
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
      '$kuid': 'E1oo5Ka5e',
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
      '$kuid': 'MAdWSfEA0',
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
      '$kuid': 'FAzZxpPgd',
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
      '$kuid': '48VWrFsGI',
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
      '$kuid': 'mI358dC5W',
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
      '$kuid': 'IdxW4SwoQ',
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
      '$kuid': 'l590xwhgd',
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
      '$kuid': 'GikC9T0Wa',
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
      '$kuid': 'iS0AlsTBC',
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
      '$kuid': 'AjrW6mAbK',
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
      '$kuid': 'JjHWvIwaS',
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
      '$kuid': 'GOtT0zPr5',
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
      '$kuid': 'd8EV0jPFN',
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
      '$kuid': 'dV1PFxTl4',
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
      '$kuid': 'nGnmALuNI',
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
      '$kuid': 'ToThma8Rg',
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
      '$kuid': 'VGANd2rK8',
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
      '$kuid': '2ZJCxvpKo',
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
      '$kuid': '1E7N3WRup',
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
      '$kuid': 'eDIjw7Vgq',
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
      '$kuid': '4643G2SVR',
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
      '$kuid': '6xqXltLhM',
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
      '$kuid': 'oIlSwyFGb',
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
      '$kuid': 'EMvfLOwP6',
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
      '$kuid': 'hJrYLGmVh',
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
      '$kuid': 'hq2Tbz3p5',
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
      '$kuid': 'KgfbHjvDT',
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
      '$kuid': 'SeipqVU7g',
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
      '$kuid': 'Y1ln90Yvj',
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
      '$kuid': 'GeIeP85bb',
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
      '$kuid': 'NdYHzKMzz',
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
      '$kuid': 'k5FoLVapQ',
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
      '$kuid': 'sDqdp8VMz',
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
      '$kuid': '1nsAvR65A',
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
      '$kuid': 'lxqhGty4a',
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
      '$kuid': 'weE93h6Ud',
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
      '$kuid': '9odD46u1e',
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
      '$kuid': '3cIUkbBkH',
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
      '$kuid': 'raiIyfbEh',
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
      '$kuid': 'SxiQ7CXqD',
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
      '$kuid': 'nvhnXRlJe',
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
      '$kuid': 'TezQNHVXK',
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
      '$kuid': '8zGJVgxii',
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
      '$kuid': 'bZ5onaUbG',
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
      '$kuid': 'GaOwoiXwg',
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
      '$kuid': 'Dre0W75QV',
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
      '$kuid': 'JcCKNkQ91',
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
      '$kuid': 'VF8BbfSt2',
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
      '$kuid': 'OG38YLEQG',
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
      '$kuid': '9c7zdjovL',
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
      '$kuid': 'dlQQmE6gA',
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
      '$kuid': 'HIrTvLi9n',
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
      '$kuid': 'cyzzZN2U6',
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
      '$kuid': 'OgMJWZNrD',
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
      '$kuid': '2B7N4tky7',
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
      '$kuid': 'x6yWDNS26',
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
      '$kuid': 'eVa599ZBB',
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
      '$kuid': 'DwIdHm4KV',
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
      '$kuid': 'uLrtz8Y65',
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
      '$kuid': 'nCqEmGuiN',
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
      '$kuid': 'dZ490qJJk',
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
      '$kuid': 'jh5PGaG2d',
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
      '$kuid': 'LkKXfBZ1q',
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
      '$kuid': 'CeLP3RJej',
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
      '$kuid': 'Ae0VaQ9Ei',
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
      '$kuid': 'S0j2JSLt7',
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
      '$kuid': '4ZPr68fwo',
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
      '$kuid': 'WFbtf5wV1',
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
      '$kuid': 'A9FioXIvK',
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
      '$kuid': 'hMVHBh7Gl',
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
      '$kuid': 'nzHxOJCl5',
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
      '$kuid': '02NFDyGdD',
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
      '$kuid': 'SwCpJi8E6',
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
      '$kuid': 'x2YfbyNoW',
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
      '$kuid': 'U6vktwphJ',
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
      '$kuid': 'mvvkM1oox',
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
      '$kuid': 'IUNF7ZN8Q',
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
      '$kuid': 'YIdOyKz2C',
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
      '$kuid': 'rsJkUYcGo',
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
      '$kuid': 'fjRyRuAPN',
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
      '$kuid': 'so7k9EGPz',
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
      '$kuid': 'YVaYCKits',
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
      '$kuid': '3wJHD4LBp',
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
      '$kuid': 'fRnYmmn9q',
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
      '$kuid': 'Z0wfxAF24',
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
      '$kuid': 'mWZwHzu8h',
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
      '$kuid': 'mZLWDaU9S',
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
      '$kuid': 'iz9OKrspU',
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
      '$kuid': 'oZveu1qe0',
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
      '$kuid': 'pgi30igaN',
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
      '$kuid': 'TQEzou9rV',
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
      '$kuid': 'T8rnYpWqB',
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
      '$kuid': '5Bqh9yZcf',
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
      '$kuid': '1YmO4zEnj',
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
      '$kuid': '0T067X0rX',
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
      '$kuid': 'N0JAQodf4',
      'label': [
        'Bezdrytska',
        'Бездрицька'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'bezdrytska'
    },
    {
      'name': 'bezliudivska',
      '$kuid': '51ZjQqdUP',
      'label': [
        'Bezliudivska',
        'Безлюдівська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bezliudivska'
    },
    {
      'name': 'bibrska',
      '$kuid': 'OFvKWyG7S',
      'label': [
        'Bibrska',
        'Бібрська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bibrska'
    },
    {
      'name': 'bielinska',
      '$kuid': '4QG0gRrKy',
      'label': [
        'Bielinska',
        'Бєлінська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bielinska'
    },
    {
      'name': 'bilche-zolotetska',
      '$kuid': 'Z6opzPhLn',
      'label': [
        'Bilche-Zolotetska',
        'Більче-Золотецька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilche-zolotetska'
    },
    {
      'name': 'bilenkivska',
      '$kuid': 'QLTzPxrvG',
      'label': [
        'Bilenkivska',
        'Біленьківська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'bilenkivska'
    },
    {
      'name': 'biletska',
      '$kuid': 'KugwmB10Q',
      'label': [
        'Biletska',
        'Білецька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'biletska'
    },
    {
      'name': 'bilhorod-dnistrovska',
      '$kuid': 'OvbRwjFSP',
      'label': [
        'Bilhorod-Dnistrovska',
        'Білгород-Дністровська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilhorod-dnistrovska'
    },
    {
      'name': 'biliaivska',
      '$kuid': '8Yxy8pcfC',
      'label': [
        'Biliaivska',
        'Біляївська'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'biliaivska'
    },
    {
      'name': 'biliaivska_2',
      '$kuid': 'vcWP1GqLH',
      'label': [
        'Biliaivska',
        'Біляївська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'biliaivska_2'
    },
    {
      'name': 'bilkivska',
      '$kuid': 'BnXcB8ToV',
      'label': [
        'Bilkivska',
        'Білківська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilkivska'
    },
    {
      'name': 'bilmatska',
      '$kuid': '0o6KoPh2D',
      'label': [
        'Bilmatska',
        'Більмацька'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilmatska'
    },
    {
      'name': 'biloberizka',
      '$kuid': 'LSSf0XZfr',
      'label': [
        'Biloberizka',
        'Білоберізька'
      ],
      'raion': 'verkhovynskyi',
      'list_name': 'hromada',
      '$autovalue': 'biloberizka'
    },
    {
      'name': 'bilobozhnytska',
      '$kuid': 'XOY2cvI73',
      'label': [
        'Bilobozhnytska',
        'Білобожницька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilobozhnytska'
    },
    {
      'name': 'bilohirska',
      '$kuid': '4qqcnJfqR',
      'label': [
        'Bilohirska',
        'Білогірська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilohirska'
    },
    {
      'name': 'bilohirska_2',
      '$kuid': 'fMEqyZwu6',
      'label': [
        'Bilohirska',
        'Білогірська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilohirska_2'
    },
    {
      'name': 'bilohorodska',
      '$kuid': 'gJYzJ12sV',
      'label': [
        'Bilohorodska',
        'Білогородська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilohorodska'
    },
    {
      'name': 'bilokorovytska',
      '$kuid': 'e0oiwaHyU',
      'label': [
        'Bilokorovytska',
        'Білокоровицька'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilokorovytska'
    },
    {
      'name': 'bilokrynytska',
      '$kuid': 'vJmVyM90K',
      'label': [
        'Bilokrynytska',
        'Білокриницька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilokrynytska'
    },
    {
      'name': 'bilokurakynska',
      '$kuid': 'h4YNQD2bR',
      'label': [
        'Bilokurakynska',
        'Білокуракинська'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilokurakynska'
    },
    {
      'name': 'bilolutska',
      '$kuid': 'XYZvmU54M',
      'label': [
        'Bilolutska',
        'Білолуцька'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilolutska'
    },
    {
      'name': 'bilopilska',
      '$kuid': 'UhlgpRA6O',
      'label': [
        'Bilopilska',
        'Білопільська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilopilska'
    },
    {
      'name': 'bilotserkivska',
      '$kuid': '96AToDiG1',
      'label': [
        'Bilotserkivska',
        'Білоцерківська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilotserkivska'
    },
    {
      'name': 'bilotserkivska_2',
      '$kuid': 'EM6N480nr',
      'label': [
        'Bilotserkivska',
        'Білоцерківська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilotserkivska_2'
    },
    {
      'name': 'bilovodska',
      '$kuid': '7wJ6em39Q',
      'label': [
        'Bilovodska',
        'Біловодська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilovodska'
    },
    {
      'name': 'bilozerska',
      '$kuid': 'CWkzdpVbJ',
      'label': [
        'Bilozerska',
        'Білозерська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilozerska'
    },
    {
      'name': 'bilozerska_2',
      '$kuid': 'XRP3M65Vc',
      'label': [
        'Bilozerska',
        'Білозерська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilozerska_2'
    },
    {
      'name': 'bilozirska',
      '$kuid': '5Kew4sjRl',
      'label': [
        'Bilozirska',
        'Білозірська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilozirska'
    },
    {
      'name': 'bilshivtsivska',
      '$kuid': 'UOpCHnlOi',
      'label': [
        'Bilshivtsivska',
        'Більшівцівська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilshivtsivska'
    },
    {
      'name': 'bilytska',
      '$kuid': '3nqONO7EF',
      'label': [
        'Bilytska',
        'Білицька'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilytska'
    },
    {
      'name': 'biskovytska',
      '$kuid': 'MkbSLIJYM',
      'label': [
        'Biskovytska',
        'Бісковицька'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'biskovytska'
    },
    {
      'name': 'blahodatnenska',
      '$kuid': 'bjFsRea16',
      'label': [
        'Blahodatnenska',
        'Благодатненська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'blahodatnenska'
    },
    {
      'name': 'blahovishchenska',
      '$kuid': 'yukPf2JuM',
      'label': [
        'Blahovishchenska',
        'Благовіщенська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'blahovishchenska'
    },
    {
      'name': 'blahovishchenska_2',
      '$kuid': 'ChgvdsPg6',
      'label': [
        'Blahovishchenska',
        'Благовіщенська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'blahovishchenska_2'
    },
    {
      'name': 'blyzniukivska',
      '$kuid': 'PiwumeeXv',
      'label': [
        'Blyzniukivska',
        'Близнюківська'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'blyzniukivska'
    },
    {
      'name': 'bobrovytska',
      '$kuid': 'MiPWfHZUV',
      'label': [
        'Bobrovytska',
        'Бобровицька'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bobrovytska'
    },
    {
      'name': 'bobrynetska',
      '$kuid': 'vXNGTfe3S',
      'label': [
        'Bobrynetska',
        'Бобринецька'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'bobrynetska'
    },
    {
      'name': 'bobrytska',
      '$kuid': 'nal5L6mTG',
      'label': [
        'Bobrytska',
        'Бобрицька'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'bobrytska'
    },
    {
      'name': 'bochechkivska',
      '$kuid': 'wLGPcYiLd',
      'label': [
        'Bochechkivska',
        'Бочечківська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'bochechkivska'
    },
    {
      'name': 'bohdanivska',
      '$kuid': 'UKIUmb49w',
      'label': [
        'Bohdanivska',
        'Богданівська'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohdanivska'
    },
    {
      'name': 'bohdanska',
      '$kuid': 'lIdFT7XLY',
      'label': [
        'Bohdanska',
        'Богданська'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohdanska'
    },
    {
      'name': 'bohodukhivska',
      '$kuid': 'MAKf1eQkz',
      'label': [
        'Bohodukhivska',
        'Богодухівська'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohodukhivska'
    },
    {
      'name': 'bohorodchanska',
      '$kuid': 'wpDeNQMvi',
      'label': [
        'Bohorodchanska',
        'Богородчанська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohorodchanska'
    },
    {
      'name': 'bohuslavska',
      '$kuid': 'A20bpD13Z',
      'label': [
        'Bohuslavska',
        'Богуславська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohuslavska'
    },
    {
      'name': 'boianska',
      '$kuid': 'BEmX9eeU1',
      'label': [
        'Boianska',
        'Боянська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'boianska'
    },
    {
      'name': 'boiarska',
      '$kuid': 'HnkgcNS3u',
      'label': [
        'Boiarska',
        'Боярська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'boiarska'
    },
    {
      'name': 'boikivska',
      '$kuid': 'KaXhwVpdV',
      'label': [
        'Boikivska',
        'Бойківська'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'boikivska'
    },
    {
      'name': 'bokiimivska',
      '$kuid': '61GvAmsZw',
      'label': [
        'Bokiimivska',
        'Бокіймівська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bokiimivska'
    },
    {
      'name': 'bolekhivska',
      '$kuid': 'KBXz3rL3s',
      'label': [
        'Bolekhivska',
        'Болехівська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'bolekhivska'
    },
    {
      'name': 'bolhradska',
      '$kuid': 'UI7wSwExO',
      'label': [
        'Bolhradska',
        'Болградська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'bolhradska'
    },
    {
      'name': 'boratynska',
      '$kuid': 'kNyV2tXXl',
      'label': [
        'Boratynska',
        'Боратинська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'boratynska'
    },
    {
      'name': 'boremelska',
      '$kuid': 'Ctoma69mY',
      'label': [
        'Boremelska',
        'Боремельська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'boremelska'
    },
    {
      'name': 'borivska',
      '$kuid': 'cDEfpspdy',
      'label': [
        'Borivska',
        'Борівська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'borivska'
    },
    {
      'name': 'borodianska',
      '$kuid': 'RozdbCeKg',
      'label': [
        'Borodianska',
        'Бородянська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'borodianska'
    },
    {
      'name': 'borodinska',
      '$kuid': 'gYRWLcx7s',
      'label': [
        'Borodinska',
        'Бородінська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'borodinska'
    },
    {
      'name': 'boromlianska',
      '$kuid': 'YHfV9TK3R',
      'label': [
        'Boromlianska',
        'Боромлянська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'boromlianska'
    },
    {
      'name': 'borozenska',
      '$kuid': 'RP8fDg9pQ',
      'label': [
        'Borozenska',
        'Борозенська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'borozenska'
    },
    {
      'name': 'borshchahivska',
      '$kuid': 'G2FBQyird',
      'label': [
        'Borshchahivska',
        'Борщагівська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'borshchahivska'
    },
    {
      'name': 'borshchivska',
      '$kuid': 'S6RJ3S5iB',
      'label': [
        'Borshchivska',
        'Борщівська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'borshchivska'
    },
    {
      'name': 'borsukivska',
      '$kuid': 'sVpEDhljR',
      'label': [
        'Borsukivska',
        'Борсуківська'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'borsukivska'
    },
    {
      'name': 'borynska',
      '$kuid': 'kLsLxiRof',
      'label': [
        'Borynska',
        'Боринська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'borynska'
    },
    {
      'name': 'boryslavska',
      '$kuid': 'fOqIoRkOV',
      'label': [
        'Boryslavska',
        'Бориславська'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'boryslavska'
    },
    {
      'name': 'boryspilska',
      '$kuid': 'mhoP6eGjB',
      'label': [
        'Boryspilska',
        'Бориспільська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'boryspilska'
    },
    {
      'name': 'borznianska',
      '$kuid': 'hkxb8DGFq',
      'label': [
        'Borznianska',
        'Борзнянська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'borznianska'
    },
    {
      'name': 'botanichna',
      '$kuid': 'o1iDrvtcZ',
      'label': [
        'Botanichna',
        'Ботанічна'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'botanichna'
    },
    {
      'name': 'bozhedarivska',
      '$kuid': 'Z8S7KoPCu',
      'label': [
        'Bozhedarivska',
        'Божедарівська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'bozhedarivska'
    },
    {
      'name': 'brahynivska',
      '$kuid': '3TKbXjQAh',
      'label': [
        'Brahynivska',
        'Брагинівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'brahynivska'
    },
    {
      'name': 'bratska',
      '$kuid': 'ipwNBDBGb',
      'label': [
        'Bratska',
        'Братська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'bratska'
    },
    {
      'name': 'bratska_2',
      '$kuid': 'jmh6DCHml',
      'label': [
        'Bratska',
        'Братська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bratska_2'
    },
    {
      'name': 'bratslavska',
      '$kuid': 'xNRukENW9',
      'label': [
        'Bratslavska',
        'Брацлавська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bratslavska'
    },
    {
      'name': 'brodivska',
      '$kuid': 'PNnLbdm1Q',
      'label': [
        'Brodivska',
        'Бродівська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'brodivska'
    },
    {
      'name': 'bronykivska',
      '$kuid': 'LYIPoSDPV',
      'label': [
        'Bronykivska',
        'Брониківська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bronykivska'
    },
    {
      'name': 'broshniv-osadska',
      '$kuid': 'yuKcaUKzw',
      'label': [
        'Broshniv-Osadska',
        'Брошнів-Осадська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'broshniv-osadska'
    },
    {
      'name': 'brovarska',
      '$kuid': 'TzQb6Qpyb',
      'label': [
        'Brovarska',
        'Броварська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'brovarska'
    },
    {
      'name': 'brusnytska',
      '$kuid': 'VxnSY8Zhp',
      'label': [
        'Brusnytska',
        'Брусницька'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'brusnytska'
    },
    {
      'name': 'brusylivska',
      '$kuid': 'ULsHyIGIa',
      'label': [
        'Brusylivska',
        'Брусилівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'brusylivska'
    },
    {
      'name': 'buchanska',
      '$kuid': 'XUrQmYb77',
      'label': [
        'Buchanska',
        'Бучанська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'buchanska'
    },
    {
      'name': 'buchatska',
      '$kuid': 'zv3JLrwCh',
      'label': [
        'Buchatska',
        'Бучацька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'buchatska'
    },
    {
      'name': 'budyshchenska',
      '$kuid': 'fLPOJ8yw5',
      'label': [
        'Budyshchenska',
        'Будищенська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'budyshchenska'
    },
    {
      'name': 'buhrynska',
      '$kuid': 'PU4RetjMG',
      'label': [
        'Buhrynska',
        'Бугринська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'buhrynska'
    },
    {
      'name': 'bukachivska',
      '$kuid': 'IQfalZWGp',
      'label': [
        'Bukachivska',
        'Букачівська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bukachivska'
    },
    {
      'name': 'burshtynska',
      '$kuid': '1ViN2pxf4',
      'label': [
        'Burshtynska',
        'Бурштинська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'burshtynska'
    },
    {
      'name': 'burynska',
      '$kuid': 'd4S4mmyCs',
      'label': [
        'Burynska',
        'Буринська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'burynska'
    },
    {
      'name': 'bushtynska',
      '$kuid': '5xzVCDe8Z',
      'label': [
        'Bushtynska',
        'Буштинська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bushtynska'
    },
    {
      'name': 'buska',
      '$kuid': 'YgRTCopNd',
      'label': [
        'Buska',
        'Буська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'buska'
    },
    {
      'name': 'butska',
      '$kuid': 'ByS600u6p',
      'label': [
        'Butska',
        'Буцька'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'butska'
    },
    {
      'name': 'buzhanska',
      '$kuid': 'Mq0yiMpUb',
      'label': [
        'Buzhanska',
        'Бужанська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'buzhanska'
    },
    {
      'name': 'buzka',
      '$kuid': 'IqCz5JLDt',
      'label': [
        'Buzka',
        'Бузька'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'buzka'
    },
    {
      'name': 'byshivska',
      '$kuid': 'oxRl17ArO',
      'label': [
        'Byshivska',
        'Бишівська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'byshivska'
    },
    {
      'name': 'chabanivska',
      '$kuid': 'aUPjooi9k',
      'label': [
        'Chabanivska',
        'Чабанівська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chabanivska'
    },
    {
      'name': 'chahorska',
      '$kuid': 'ICdkA1YbZ',
      'label': [
        'Chahorska',
        'Чагорська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'chahorska'
    },
    {
      'name': 'chaikynska',
      '$kuid': 'ytZT6RvXf',
      'label': [
        'Chaikynska',
        'Чайкинська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chaikynska'
    },
    {
      'name': 'chapaievska',
      '$kuid': 'JKQqzyhao',
      'label': [
        'Chapaievska',
        'Чапаєвська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chapaievska'
    },
    {
      'name': 'chaplynska',
      '$kuid': 'oQnFrwYXv',
      'label': [
        'Chaplynska',
        'Чаплинська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chaplynska'
    },
    {
      'name': 'chasovoiarska',
      '$kuid': '2R0ptL35Y',
      'label': [
        'Chasovoiarska',
        'Часовоярська'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'chasovoiarska'
    },
    {
      'name': 'chechelnytska',
      '$kuid': 'eb32GEj8L',
      'label': [
        'Chechelnytska',
        'Чечельницька'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'chechelnytska'
    },
    {
      'name': 'cheliadinivska',
      '$kuid': 'hW6ROGG55',
      'label': [
        'Cheliadinivska',
        'Челядінівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'cheliadinivska'
    },
    {
      'name': 'chemerovetska',
      '$kuid': 'uokWvIlF7',
      'label': [
        'Chemerovetska',
        'Чемеровецька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'chemerovetska'
    },
    {
      'name': 'cherkaska_2',
      '$kuid': 'iNjHcM05p',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherkaska_2'
    },
    {
      'name': 'cherkaska_3',
      '$kuid': 'VGOblO9KB',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherkaska_3'
    },
    {
      'name': 'cherkaska_4',
      '$kuid': 'CUzwi9nFe',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherkaska_4'
    },
    {
      'name': 'chernechchynska',
      '$kuid': 'uupgcwX8w',
      'label': [
        'Chernechchynska',
        'Чернеччинська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernechchynska'
    },
    {
      'name': 'chernechchynska_2',
      '$kuid': 'WdYvj5KMd',
      'label': [
        'Chernechchynska',
        'Чернеччинська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernechchynska_2'
    },
    {
      'name': 'chernelytska',
      '$kuid': 'CA043ziFa',
      'label': [
        'Chernelytska',
        'Чернелицька'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernelytska'
    },
    {
      'name': 'cherniakhivska',
      '$kuid': 'mvzgQZnF2',
      'label': [
        'Cherniakhivska',
        'Черняхівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherniakhivska'
    },
    {
      'name': 'chernihivska_2',
      '$kuid': 'cdmBlWrDm',
      'label': [
        'Chernihivska',
        'Чернігівська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernihivska_2'
    },
    {
      'name': 'chernihivska_3',
      '$kuid': 'qRZwcxCq1',
      'label': [
        'Chernihivska',
        'Чернігівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernihivska_3'
    },
    {
      'name': 'chernivetska_2',
      '$kuid': 'RHHzH3vyO',
      'label': [
        'Chernivetska',
        'Чернівецька'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernivetska_2'
    },
    {
      'name': 'chernivetska_3',
      '$kuid': 'FhVFc6PhI',
      'label': [
        'Chernivetska',
        'Чернівецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernivetska_3'
    },
    {
      'name': 'chernovska',
      '$kuid': 'qZ01vZtxp',
      'label': [
        'Chernovska',
        'Черновська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernovska'
    },
    {
      'name': 'chernyshivska',
      '$kuid': 'E7FPBpwjr',
      'label': [
        'Chernyshivska',
        'Чернишівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernyshivska'
    },
    {
      'name': 'chervonenska',
      '$kuid': 'vlq5mgUOQ',
      'label': [
        'Chervonenska',
        'Червоненська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonenska'
    },
    {
      'name': 'chervonohradska',
      '$kuid': 'Q6DQhUfYN',
      'label': [
        'Chervonohradska',
        'Червоноградська'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonohradska'
    },
    {
      'name': 'chervonohryhorivska',
      '$kuid': 'SKMi5iNZ4',
      'label': [
        'Chervonohryhorivska',
        'Червоногригорівська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonohryhorivska'
    },
    {
      'name': 'chervonoslobidska',
      '$kuid': 'SpI1f3K1Y',
      'label': [
        'Chervonoslobidska',
        'Червонослобідська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonoslobidska'
    },
    {
      'name': 'chkalovska',
      '$kuid': 'AaGtdaICC',
      'label': [
        'Chkalovska',
        'Чкаловська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'chkalovska'
    },
    {
      'name': 'chkalovska_2',
      '$kuid': 'dRZZBaYmA',
      'label': [
        'Chkalovska',
        'Чкаловська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chkalovska_2'
    },
    {
      'name': 'chkalovska_3',
      '$kuid': 'BAC2YdYn0',
      'label': [
        'Chkalovska',
        'Чкаловська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'chkalovska_3'
    },
    {
      'name': 'chmyrivska',
      '$kuid': '6ajveGno5',
      'label': [
        'Chmyrivska',
        'Чмирівська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'chmyrivska'
    },
    {
      'name': 'chohodarivska',
      '$kuid': 'twy5vfnfq',
      'label': [
        'Chohodarivska',
        'Чогодарівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chohodarivska'
    },
    {
      'name': 'chopovytska',
      '$kuid': '4A5rBH1br',
      'label': [
        'Chopovytska',
        'Чоповицька'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'chopovytska'
    },
    {
      'name': 'chopska',
      '$kuid': 'py2qIZBTy',
      'label': [
        'Chopska',
        'Чопська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'chopska'
    },
    {
      'name': 'chornobaivska',
      '$kuid': '4Lf4jrK0P',
      'label': [
        'Chornobaivska',
        'Чорнобаївська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornobaivska'
    },
    {
      'name': 'chornobaivska_2',
      '$kuid': 'FfFLGoYjT',
      'label': [
        'Chornobaivska',
        'Чорнобаївська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornobaivska_2'
    },
    {
      'name': 'chornobylska zona vidchuzhennia_2',
      '$kuid': 'owjKTY9Ez',
      'label': [
        'Chornobylska zona vidchuzhennia',
        'Чорнобильська зона відчуження'
      ],
      'raion': 'chornobylska zona vidchuzhennia',
      'list_name': 'hromada',
      '$autovalue': 'chornobylska zona vidchuzhennia_2'
    },
    {
      'name': 'chornomorska',
      '$kuid': 'DAbXQvnbp',
      'label': [
        'Chornomorska',
        'Чорноморська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska'
    },
    {
      'name': 'chornomorska_2',
      '$kuid': 'aRZ1sPmZl',
      'label': [
        'Chornomorska',
        'Чорноморська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska_2'
    },
    {
      'name': 'chornomorska_3',
      '$kuid': 'Fprx6XNRm',
      'label': [
        'Chornomorska',
        'Чорноморська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska_3'
    },
    {
      'name': 'chornomorska_4',
      '$kuid': 'WUR4pcoVO',
      'label': [
        'Chornomorska',
        'Чорноморська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska_4'
    },
    {
      'name': 'chornoostrivska',
      '$kuid': '8MlkgGGkg',
      'label': [
        'Chornoostrivska',
        'Чорноострівська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornoostrivska'
    },
    {
      'name': 'chornopilska',
      '$kuid': 'WxvuxfW7z',
      'label': [
        'Chornopilska',
        'Чорнопільська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornopilska'
    },
    {
      'name': 'chornozemnenska',
      '$kuid': 'K0r2XOhHO',
      'label': [
        'Chornozemnenska',
        'Чорноземненська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornozemnenska'
    },
    {
      'name': 'chornukhynska',
      '$kuid': 'CFaw8Er65',
      'label': [
        'Chornukhynska',
        'Чорнухинська'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornukhynska'
    },
    {
      'name': 'chortkivska',
      '$kuid': 'jlllcPs6A',
      'label': [
        'Chortkivska',
        'Чортківська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chortkivska'
    },
    {
      'name': 'chudeiska',
      '$kuid': 'ezjxqKVZP',
      'label': [
        'Chudeiska',
        'Чудейська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'chudeiska'
    },
    {
      'name': 'chudniv',
      '$kuid': 'UPmsbEOak',
      'label': [
        'Chudniv',
        'Чуднівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'chudniv'
    },
    {
      'name': 'chuhuivska',
      '$kuid': 'LFPxcY3IT',
      'label': [
        'Chuhuivska',
        'Чугуївська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chuhuivska'
    },
    {
      'name': 'chulakivska',
      '$kuid': 'yQvXQ5rpm',
      'label': [
        'Chulakivska',
        'Чулаківська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chulakivska'
    },
    {
      'name': 'chumakivska',
      '$kuid': 'bB0hAYvRX',
      'label': [
        'Chumakivska',
        'Чумаківська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chumakivska'
    },
    {
      'name': 'chupakhivska',
      '$kuid': 'jyiELdt7r',
      'label': [
        'Chupakhivska',
        'Чупахівська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'chupakhivska'
    },
    {
      'name': 'chutivska',
      '$kuid': 'YTDRPzQhV',
      'label': [
        'Chutivska',
        'Чутівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'chutivska'
    },
    {
      'name': 'chyhyrynska',
      '$kuid': 'OA4D8DWkG',
      'label': [
        'Chyhyrynska',
        'Чигиринська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'chyhyrynska'
    },
    {
      'name': 'chynadiivska',
      '$kuid': 'WWr3FhEq3',
      'label': [
        'Chynadiivska',
        'Чинадіївська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chynadiivska'
    },
    {
      'name': 'chystenska',
      '$kuid': 'THDAz3I4o',
      'label': [
        'Chystenska',
        'Чистенська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'chystenska'
    },
    {
      'name': 'chystiakivska',
      '$kuid': 'tCzSm4kda',
      'label': [
        'Chystiakivska',
        'Чистяківська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chystiakivska'
    },
    {
      'name': 'chystopilska',
      '$kuid': 'wDmAaCNbC',
      'label': [
        'Chystopilska',
        'Чистопільська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'chystopilska'
    },
    {
      'name': 'chyzhivska',
      '$kuid': 's5pdByiIX',
      'label': [
        'Chyzhivska',
        'Чижівська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'chyzhivska'
    },
    {
      'name': 'dachnenska',
      '$kuid': 'pyY3MqG8g',
      'label': [
        'Dachnenska',
        'Дачненська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'dachnenska'
    },
    {
      'name': 'dachnivska',
      '$kuid': 'nGv9Hmbmr',
      'label': [
        'Dachnivska',
        'Дачнівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dachnivska'
    },
    {
      'name': 'dalekivska',
      '$kuid': 'pHGWmim12',
      'label': [
        'Dalekivska',
        'Далеківська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dalekivska'
    },
    {
      'name': 'dalnytska',
      '$kuid': 'GIELUps3k',
      'label': [
        'Dalnytska',
        'Дальницька'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'dalnytska'
    },
    {
      'name': 'darivska',
      '$kuid': 't4D5aTOMd',
      'label': [
        'Darivska',
        'Дар\'ївська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'darivska'
    },
    {
      'name': 'dashivska',
      '$kuid': 'xstEPpOdo',
      'label': [
        'Dashivska',
        'Дашівська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dashivska'
    },
    {
      'name': 'davydivska',
      '$kuid': 'BQJnJ6vJL',
      'label': [
        'Davydivska',
        'Давидівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'davydivska'
    },
    {
      'name': 'debaltsivska',
      '$kuid': 'lMeH4wDaI',
      'label': [
        'Debaltsivska',
        'Дебальцівська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'debaltsivska'
    },
    {
      'name': 'deliatynska',
      '$kuid': 'p4qnp4NVu',
      'label': [
        'Deliatynska',
        'Делятинська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'deliatynska'
    },
    {
      'name': 'demydivska',
      '$kuid': '46tw3Pzxa',
      'label': [
        'Demydivska',
        'Демидівська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'demydivska'
    },
    {
      'name': 'derazhnenska',
      '$kuid': '4hGojIsyI',
      'label': [
        'Derazhnenska',
        'Деражненська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'derazhnenska'
    },
    {
      'name': 'derazhnianska',
      '$kuid': 'kb9Rx8Yyd',
      'label': [
        'Derazhnianska',
        'Деражнянська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'derazhnianska'
    },
    {
      'name': 'derhachivska',
      '$kuid': 'A5UG2tIkE',
      'label': [
        'Derhachivska',
        'Дергачівська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'derhachivska'
    },
    {
      'name': 'desnianska',
      '$kuid': 'IpmKNu0c8',
      'label': [
        'Desnianska',
        'Деснянська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'desnianska'
    },
    {
      'name': 'devladivska',
      '$kuid': 'UFBgo6PYy',
      'label': [
        'Devladivska',
        'Девладівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'devladivska'
    },
    {
      'name': 'diadkovytska',
      '$kuid': 'o4zgQTTF4',
      'label': [
        'Diadkovytska',
        'Дядьковицька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'diadkovytska'
    },
    {
      'name': 'divychkivska',
      '$kuid': 'Ufo8E9nFn',
      'label': [
        'Divychkivska',
        'Дівичківська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'divychkivska'
    },
    {
      'name': 'dmytrivska',
      '$kuid': 'VFAEB7jFu',
      'label': [
        'Dmytrivska',
        'Дмитрівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska'
    },
    {
      'name': 'dmytrivska_2',
      '$kuid': 'e0Vz3CmND',
      'label': [
        'Dmytrivska',
        'Дмитрівська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska_2'
    },
    {
      'name': 'dmytrivska_3',
      '$kuid': 'WIBObX0qs',
      'label': [
        'Dmytrivska',
        'Дмитрівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska_3'
    },
    {
      'name': 'dmytrivska_4',
      '$kuid': 'vHF4JWgFQ',
      'label': [
        'Dmytrivska',
        'Дмитрівська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska_4'
    },
    {
      'name': 'dmytrushkivska',
      '$kuid': 'qhCS6tSY3',
      'label': [
        'Dmytrushkivska',
        'Дмитрушківська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrushkivska'
    },
    {
      'name': 'dniprorudnenska',
      '$kuid': 'mtz8jECON',
      'label': [
        'Dniprorudnenska',
        'Дніпрорудненська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dniprorudnenska'
    },
    {
      'name': 'dniprovska',
      '$kuid': 'jlpJpd8Jk',
      'label': [
        'Dniprovska',
        'Дніпровська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dniprovska'
    },
    {
      'name': 'dobrianska',
      '$kuid': 'xWFvjFnXv',
      'label': [
        'Dobrianska',
        'Добрянська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrianska'
    },
    {
      'name': 'dobrivska',
      '$kuid': '25wFeIExH',
      'label': [
        'Dobrivska',
        'Добрівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrivska'
    },
    {
      'name': 'dobromylska',
      '$kuid': 'W7SPfI5yv',
      'label': [
        'Dobromylska',
        'Добромильська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobromylska'
    },
    {
      'name': 'dobropilska',
      '$kuid': 'QugpSP2Pu',
      'label': [
        'Dobropilska',
        'Добропільська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobropilska'
    },
    {
      'name': 'dobroslavska',
      '$kuid': 'rCC6HbIMD',
      'label': [
        'Dobroslavska',
        'Доброславська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobroslavska'
    },
    {
      'name': 'dobrosynsko-maherivska',
      '$kuid': '2q8iKMU0y',
      'label': [
        'Dobrosynsko-Maherivska',
        'Добросинсько-Магерівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrosynsko-maherivska'
    },
    {
      'name': 'dobrotvirska',
      '$kuid': 'ucZLu99UZ',
      'label': [
        'Dobrotvirska',
        'Добротвірська'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrotvirska'
    },
    {
      'name': 'dobrovelychkivska',
      '$kuid': '1JVocZ28i',
      'label': [
        'Dobrovelychkivska',
        'Добровеличківська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrovelychkivska'
    },
    {
      'name': 'dobrushynska',
      '$kuid': 'n65IS8cY8',
      'label': [
        'Dobrushynska',
        'Добрушинська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrushynska'
    },
    {
      'name': 'dokuchaievska',
      '$kuid': 'EbP6iykgK',
      'label': [
        'Dokuchaievska',
        'Докучаєвська'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'dokuchaievska'
    },
    {
      'name': 'dolmativska',
      '$kuid': 'hkKflFgR9',
      'label': [
        'Dolmativska',
        'Долматівська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolmativska'
    },
    {
      'name': 'dolynnenska',
      '$kuid': 'k4N0B4etM',
      'label': [
        'Dolynnenska',
        'Долинненська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynnenska'
    },
    {
      'name': 'dolynska',
      '$kuid': 'JaXFWuIJK',
      'label': [
        'Dolynska',
        'Долинська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska'
    },
    {
      'name': 'dolynska_2',
      '$kuid': 'QjjPqET4M',
      'label': [
        'Dolynska',
        'Долинська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska_2'
    },
    {
      'name': 'dolynska_3',
      '$kuid': '3DPsrd0iH',
      'label': [
        'Dolynska',
        'Долинська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska_3'
    },
    {
      'name': 'dolynska_4',
      '$kuid': 'Xk7XWKQHo',
      'label': [
        'Dolynska',
        'Долинська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska_4'
    },
    {
      'name': 'domanivska',
      '$kuid': '0idGL0CEC',
      'label': [
        'Domanivska',
        'Доманівська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'domanivska'
    },
    {
      'name': 'donetska',
      '$kuid': '46SyOUMwC',
      'label': [
        'Donetska',
        'Донецька'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'donetska'
    },
    {
      'name': 'donetska_2',
      '$kuid': 'K681XySdZ',
      'label': [
        'Donetska',
        'Донецька'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'donetska_2'
    },
    {
      'name': 'donska',
      '$kuid': 'dRmM5DSNY',
      'label': [
        'Donska',
        'Донська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'donska'
    },
    {
      'name': 'doroshivska',
      '$kuid': 'ZNPDQmC7P',
      'label': [
        'Doroshivska',
        'Дорошівська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'doroshivska'
    },
    {
      'name': 'dorosynivska',
      '$kuid': 'SIyvJFb9a',
      'label': [
        'Dorosynivska',
        'Доросинівська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'dorosynivska'
    },
    {
      'name': 'dovbyska',
      '$kuid': 'oXSX74L3T',
      'label': [
        'Dovbyska',
        'Довбиська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dovbyska'
    },
    {
      'name': 'dovzhanska',
      '$kuid': 'ntVADpSnM',
      'label': [
        'Dovzhanska',
        'Довжанська'
      ],
      'raion': 'dovzhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'dovzhanska'
    },
    {
      'name': 'dovzhanska_2',
      '$kuid': 'w8WjwF3ao',
      'label': [
        'Dovzhanska',
        'Довжанська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'dovzhanska_2'
    },
    {
      'name': 'drabivska',
      '$kuid': 'o9PrfejQ7',
      'label': [
        'Drabivska',
        'Драбівська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'drabivska'
    },
    {
      'name': 'drabynivska',
      '$kuid': 'YJzZR23pR',
      'label': [
        'Drabynivska',
        'Драбинівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'drabynivska'
    },
    {
      'name': 'drahivska',
      '$kuid': 'Epb9mdnho',
      'label': [
        'Drahivska',
        'Драгівська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'drahivska'
    },
    {
      'name': 'drofynska',
      '$kuid': 'bG8CAKEYs',
      'label': [
        'Drofynska',
        'Дрофинська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'drofynska'
    },
    {
      'name': 'drohobytska',
      '$kuid': 'ocFTQCBB3',
      'label': [
        'Drohobytska',
        'Дрогобицька'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'drohobytska'
    },
    {
      'name': 'druzhbivska',
      '$kuid': 'mlrvQOF1h',
      'label': [
        'Druzhbivska',
        'Дружбівська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'druzhbivska'
    },
    {
      'name': 'druzhkivska',
      '$kuid': 'nQM48W4zb',
      'label': [
        'Druzhkivska',
        'Дружківська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'druzhkivska'
    },
    {
      'name': 'dubechnenska',
      '$kuid': 'aOESwp67G',
      'label': [
        'Dubechnenska',
        'Дубечненська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubechnenska'
    },
    {
      'name': 'dubenska',
      '$kuid': 'iSOXJXa1E',
      'label': [
        'Dubenska',
        'Дубенська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubenska'
    },
    {
      'name': 'dubivska',
      '$kuid': 'AxwsCb9Ja',
      'label': [
        'Dubivska',
        'Дубівська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubivska'
    },
    {
      'name': 'dubivska_2',
      '$kuid': 'mKjz0xSw6',
      'label': [
        'Dubivska',
        'Дубівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubivska_2'
    },
    {
      'name': 'dubivska_3',
      '$kuid': 'Z6CztXLyL',
      'label': [
        'Dubivska',
        'Дубівська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubivska_3'
    },
    {
      'name': 'dubovetska',
      '$kuid': 'LLxNS6nlA',
      'label': [
        'Dubovetska',
        'Дубовецька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubovetska'
    },
    {
      'name': 'duboviazivska',
      '$kuid': 'iUgcLLoGk',
      'label': [
        'Duboviazivska',
        'Дубов\'язівська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'duboviazivska'
    },
    {
      'name': 'dubovykivska',
      '$kuid': 'BwETUNwUu',
      'label': [
        'Dubovykivska',
        'Дубовиківська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubovykivska'
    },
    {
      'name': 'dubrivska',
      '$kuid': 'oqXDOpEFx',
      'label': [
        'Dubrivska',
        'Дубрівська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubrivska'
    },
    {
      'name': 'dubrovytska',
      '$kuid': 'evT2DLKG4',
      'label': [
        'Dubrovytska',
        'Дубровицька'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubrovytska'
    },
    {
      'name': 'dubrynytska-malobereznianska',
      '$kuid': 'vPcTUFHXF',
      'label': [
        'Dubrynytska-Malobereznianska',
        'Дубриницько-Малоберезнянська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubrynytska-malobereznianska'
    },
    {
      'name': 'dunaievetska',
      '$kuid': 'DHuiAfdkx',
      'label': [
        'Dunaievetska',
        'Дунаєвецька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'dunaievetska'
    },
    {
      'name': 'dvorichanska',
      '$kuid': 'P5OMOhUtB',
      'label': [
        'Dvorichanska',
        'Дворічанська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'dvorichanska'
    },
    {
      'name': 'dykanska',
      '$kuid': 'FvzsmNVen',
      'label': [
        'Dykanska',
        'Диканська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'dykanska'
    },
    {
      'name': 'dymerska',
      '$kuid': '7NSzA8AHY',
      'label': [
        'Dymerska',
        'Димерська'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'dymerska'
    },
    {
      'name': 'dyviziiska',
      '$kuid': 'tvnkfuJlc',
      'label': [
        'Dyviziiska',
        'Дивізійська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dyviziiska'
    },
    {
      'name': 'dzhankoiska',
      '$kuid': 'J0F1AfKWI',
      'label': [
        'Dzhankoiska',
        'Джанкойська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzhankoiska'
    },
    {
      'name': 'dzhulynska',
      '$kuid': 'Mf6MUAT0j',
      'label': [
        'Dzhulynska',
        'Джулинська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzhulynska'
    },
    {
      'name': 'dzhurynska',
      '$kuid': 'VpFfk0ZVp',
      'label': [
        'Dzhurynska',
        'Джуринська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzhurynska'
    },
    {
      'name': 'dzvyniatska',
      '$kuid': 'aKlOlB9La',
      'label': [
        'Dzvyniatska',
        'Дзвиняцька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzvyniatska'
    },
    {
      'name': 'enerhodarska',
      '$kuid': 'yg0qQ5wdf',
      'label': [
        'Enerhodarska',
        'Енергодарська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'enerhodarska'
    },
    {
      'name': 'esmanska',
      '$kuid': 'UHWLjYBhW',
      'label': [
        'Esmanska',
        'Есманьська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'esmanska'
    },
    {
      'name': 'fastivska',
      '$kuid': 'kTSGy2J3W',
      'label': [
        'Fastivska',
        'Фастівська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'fastivska'
    },
    {
      'name': 'fedorivska',
      '$kuid': 'FFheJIqmA',
      'label': [
        'Fedorivska',
        'Федорівська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'fedorivska'
    },
    {
      'name': 'feodosiiska',
      '$kuid': 'YTFxXbh4W',
      'label': [
        'Feodosiiska',
        'Феодосійська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'feodosiiska'
    },
    {
      'name': 'feodosiivska',
      '$kuid': 'KSNzV8AuR',
      'label': [
        'Feodosiivska',
        'Феодосіївська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'feodosiivska'
    },
    {
      'name': 'filativska',
      '$kuid': 'OJYA4GHZG',
      'label': [
        'Filativska',
        'Філатівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'filativska'
    },
    {
      'name': 'fontanska',
      '$kuid': 'lvL0ztMvq',
      'label': [
        'Fontanska',
        'Фонтанська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'fontanska'
    },
    {
      'name': 'foroska',
      '$kuid': 'NRImNtDR2',
      'label': [
        'Foroska',
        'Фороська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'foroska'
    },
    {
      'name': 'frunzenska',
      '$kuid': 'mHRYXXZTF',
      'label': [
        'Frunzenska',
        'Фрунзенська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'frunzenska'
    },
    {
      'name': 'fursivska',
      '$kuid': 'iJSTJox1P',
      'label': [
        'Fursivska',
        'Фурсівська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'fursivska'
    },
    {
      'name': 'hadiatska',
      '$kuid': 'ZlrpHF7mJ',
      'label': [
        'Hadiatska',
        'Гадяцька'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'hadiatska'
    },
    {
      'name': 'haisynska',
      '$kuid': 'enut33ALT',
      'label': [
        'Haisynska',
        'Гайсинська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'haisynska'
    },
    {
      'name': 'haivoronska',
      '$kuid': 'o9nlwiGJ3',
      'label': [
        'Haivoronska',
        'Гайворонська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'haivoronska'
    },
    {
      'name': 'halytska',
      '$kuid': 'T2OOrvhjD',
      'label': [
        'Halytska',
        'Галицька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'halytska'
    },
    {
      'name': 'halytsynivska',
      '$kuid': 'CfLD82JuE',
      'label': [
        'Halytsynivska',
        'Галицинівська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'halytsynivska'
    },
    {
      'name': 'hannivska',
      '$kuid': '2hwFp0uyn',
      'label': [
        'Hannivska',
        'Ганнівська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'hannivska'
    },
    {
      'name': 'hannopilska',
      '$kuid': 'NNSAK1fKd',
      'label': [
        'Hannopilska',
        'Ганнопільська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hannopilska'
    },
    {
      'name': 'hasprynska',
      '$kuid': 'N8ixyqKbf',
      'label': [
        'Hasprynska',
        'Гаспринська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hasprynska'
    },
    {
      'name': 'hatnenska',
      '$kuid': '5vFHkMj86',
      'label': [
        'Hatnenska',
        'Гатненська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hatnenska'
    },
    {
      'name': 'helmiazivska',
      '$kuid': '3eG647Bs0',
      'label': [
        'Helmiazivska',
        'Гельмязівська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'helmiazivska'
    },
    {
      'name': 'henicheska',
      '$kuid': '3wBeSIWJy',
      'label': [
        'Henicheska',
        'Генічеська'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'henicheska'
    },
    {
      'name': 'heroiska',
      '$kuid': 'WA51BF4Bb',
      'label': [
        'Heroiska',
        'Геройська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'heroiska'
    },
    {
      'name': 'hertsaivska',
      '$kuid': 'QfKqfzUcF',
      'label': [
        'Hertsaivska',
        'Герцаївська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'hertsaivska'
    },
    {
      'name': 'hirska',
      '$kuid': 'RrmE9JZyb',
      'label': [
        'Hirska',
        'Гірська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'hirska'
    },
    {
      'name': 'hirska_2',
      '$kuid': 'unuJNF45H',
      'label': [
        'Hirska',
        'Гірська'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'hirska_2'
    },
    {
      'name': 'hladkovytska',
      '$kuid': '6wFWvc65f',
      'label': [
        'Hladkovytska',
        'Гладковицька'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'hladkovytska'
    },
    {
      'name': 'hlazivska',
      '$kuid': 'vEDDD814c',
      'label': [
        'Hlazivska',
        'Глазівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlazivska'
    },
    {
      'name': 'hleiuvatska',
      '$kuid': 'I5pse1fhI',
      'label': [
        'Hleiuvatska',
        'Глеюватська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'hleiuvatska'
    },
    {
      'name': 'hlevakhivska',
      '$kuid': 'VfBnXbEFn',
      'label': [
        'Hlevakhivska',
        'Глевахівська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlevakhivska'
    },
    {
      'name': 'hlobynska',
      '$kuid': 'lLGwGampG',
      'label': [
        'Hlobynska',
        'Глобинська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlobynska'
    },
    {
      'name': 'hlodoska',
      '$kuid': 'PyH69CnZF',
      'label': [
        'Hlodoska',
        'Глодоська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlodoska'
    },
    {
      'name': 'hlukhivska',
      '$kuid': 'Q2M1QkfZo',
      'label': [
        'Hlukhivska',
        'Глухівська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlukhivska'
    },
    {
      'name': 'hlukhovetska',
      '$kuid': 'wFiY4SGr6',
      'label': [
        'Hlukhovetska',
        'Глуховецька'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlukhovetska'
    },
    {
      'name': 'hlybochytska',
      '$kuid': '9B6YlXapH',
      'label': [
        'Hlybochytska',
        'Глибочицька'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlybochytska'
    },
    {
      'name': 'hlybotska',
      '$kuid': 'QwEodf5v3',
      'label': [
        'Hlybotska',
        'Глибоцька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlybotska'
    },
    {
      'name': 'hlynianska',
      '$kuid': 'q0pxlaY7m',
      'label': [
        'Hlynianska',
        'Глинянська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlynianska'
    },
    {
      'name': 'hnivanska',
      '$kuid': 'IEHzGaHAH',
      'label': [
        'Hnivanska',
        'Гніванська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hnivanska'
    },
    {
      'name': 'hnizdychivska',
      '$kuid': 'fgGGPamQx',
      'label': [
        'Hnizdychivska',
        'Гніздичівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hnizdychivska'
    },
    {
      'name': 'hoholivska',
      '$kuid': 'Tqj2jBiz5',
      'label': [
        'Hoholivska',
        'Гоголівська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'hoholivska'
    },
    {
      'name': 'holobska',
      '$kuid': 'rbX7xEH2t',
      'label': [
        'Holobska',
        'Голобська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'holobska'
    },
    {
      'name': 'holoprystanska',
      '$kuid': 'zFIPKpAbo',
      'label': [
        'Holoprystanska',
        'Голопристанська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'holoprystanska'
    },
    {
      'name': 'holovanivska',
      '$kuid': 'u4KjLFJJR',
      'label': [
        'Holovanivska',
        'Голованівська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'holovanivska'
    },
    {
      'name': 'holovnenska',
      '$kuid': '2kgDU54Rc',
      'label': [
        'Holovnenska',
        'Головненська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'holovnenska'
    },
    {
      'name': 'holovynska',
      '$kuid': 'LK8Tnumr0',
      'label': [
        'Holovynska',
        'Головинська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'holovynska'
    },
    {
      'name': 'holubynska',
      '$kuid': '7Npxf4y0j',
      'label': [
        'Holubynska',
        'Голубинська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'holubynska'
    },
    {
      'name': 'honcharivska',
      '$kuid': 'NuFIhRNlp',
      'label': [
        'Honcharivska',
        'Гончарівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'honcharivska'
    },
    {
      'name': 'horinchivska',
      '$kuid': 'l4MmRDp4u',
      'label': [
        'Horinchivska',
        'Горінчівська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'horinchivska'
    },
    {
      'name': 'horishnoplavnivska',
      '$kuid': 'qwqyBB4nC',
      'label': [
        'Horishnoplavnivska',
        'Горішньоплавнівська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'horishnoplavnivska'
    },
    {
      'name': 'horishnosherovetska',
      '$kuid': 'cm6KzTu5N',
      'label': [
        'Horishnosherovetska',
        'Горішньошеровецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'horishnosherovetska'
    },
    {
      'name': 'horlivska',
      '$kuid': 'TgGX6mjBu',
      'label': [
        'Horlivska',
        'Горлівська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horlivska'
    },
    {
      'name': 'hornostaivska',
      '$kuid': 'jrLKnQkYm',
      'label': [
        'Hornostaivska',
        'Горностаївська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hornostaivska'
    },
    {
      'name': 'hornostaivska_2',
      '$kuid': 'b1hFkJZMY',
      'label': [
        'Hornostaivska',
        'Горностаївська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'hornostaivska_2'
    },
    {
      'name': 'horodenkivska',
      '$kuid': 'bbS3Alyht',
      'label': [
        'Horodenkivska',
        'Городенківська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodenkivska'
    },
    {
      'name': 'horodkivska',
      '$kuid': 'nPMF3hb6q',
      'label': [
        'Horodkivska',
        'Городківська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodkivska'
    },
    {
      'name': 'horodnenska',
      '$kuid': 'QgHZ7iHYx',
      'label': [
        'Horodnenska',
        'Городненська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodnenska'
    },
    {
      'name': 'horodnianska',
      '$kuid': 'XzM4CiztZ',
      'label': [
        'Horodnianska',
        'Городнянська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodnianska'
    },
    {
      'name': 'horodnytska',
      '$kuid': '4CDh0ZCtL',
      'label': [
        'Horodnytska',
        'Городницька'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodnytska'
    },
    {
      'name': 'horodotska',
      '$kuid': 'DS97qKKd1',
      'label': [
        'Horodotska',
        'Городоцька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska'
    },
    {
      'name': 'horodotska_2',
      '$kuid': 'oiiGviWEI',
      'label': [
        'Horodotska',
        'Городоцька'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska_2'
    },
    {
      'name': 'horodotska_3',
      '$kuid': 'cuzYvyLyY',
      'label': [
        'Horodotska',
        'Городоцька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska_3'
    },
    {
      'name': 'horodotska_4',
      '$kuid': 'fYNk2Py2u',
      'label': [
        'Horodotska',
        'Городоцька'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska_4'
    },
    {
      'name': 'horodyshchenska',
      '$kuid': 'mLyUHByH9',
      'label': [
        'Horodyshchenska',
        'Городищенська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodyshchenska'
    },
    {
      'name': 'horodyshchenska_2',
      '$kuid': 'sUcoStfFj',
      'label': [
        'Horodyshchenska',
        'Городищенська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodyshchenska_2'
    },
    {
      'name': 'horokhivska',
      '$kuid': 'yH2rIR0Eq',
      'label': [
        'Horokhivska',
        'Горохівська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'horokhivska'
    },
    {
      'name': 'horokhivska_2',
      '$kuid': 'TLq73n1gT',
      'label': [
        'Horokhivska',
        'Горохівська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'horokhivska_2'
    },
    {
      'name': 'horondivska',
      '$kuid': 'X2zHmngL2',
      'label': [
        'Horondivska',
        'Горондівська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horondivska'
    },
    {
      'name': 'horshchykivska',
      '$kuid': 'Up3MWLUor',
      'label': [
        'Horshchykivska',
        'Горщиківська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'horshchykivska'
    },
    {
      'name': 'hoshchanska',
      '$kuid': 'S1g1EojXg',
      'label': [
        'Hoshchanska',
        'Гощанська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'hoshchanska'
    },
    {
      'name': 'hostomelska',
      '$kuid': 'PgngRMbaX',
      'label': [
        'Hostomelska',
        'Гостомельська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'hostomelska'
    },
    {
      'name': 'hrabovetsko-dulibivska',
      '$kuid': 'P7VoqS8iT',
      'label': [
        'Hrabovetsko-Dulibivska',
        'Грабовецько-Дулібівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrabovetsko-dulibivska'
    },
    {
      'name': 'hradyzka',
      '$kuid': 'Qbnp9gRov',
      'label': [
        'Hradyzka',
        'Градизька'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'hradyzka'
    },
    {
      'name': 'hrebinkivska',
      '$kuid': 'S4x2ul4B1',
      'label': [
        'Hrebinkivska',
        'Гребінківська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrebinkivska'
    },
    {
      'name': 'hrebinkivska_2',
      '$kuid': '9QTTjpeM0',
      'label': [
        'Hrebinkivska',
        'Гребінківська'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrebinkivska_2'
    },
    {
      'name': 'hrechanopodivska',
      '$kuid': 'loJO92kiY',
      'label': [
        'Hrechanopodivska',
        'Гречаноподівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'hrechanopodivska'
    },
    {
      'name': 'hresivska',
      '$kuid': '5sFu2SoMT',
      'label': [
        'Hresivska',
        'Гресівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'hresivska'
    },
    {
      'name': 'hrodivska',
      '$kuid': 'pOJQh5qmH',
      'label': [
        'Hrodivska',
        'Гродівська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrodivska'
    },
    {
      'name': 'hrunska',
      '$kuid': 'Q4Yhn0E4N',
      'label': [
        'Hrunska',
        'Грунська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrunska'
    },
    {
      'name': 'hrushivska',
      '$kuid': 'mHy9L1zjE',
      'label': [
        'Hrushivska',
        'Грушівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrushivska'
    },
    {
      'name': 'hrushivska_2',
      '$kuid': 'ar5ip4pok',
      'label': [
        'Hrushivska',
        'Грушівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'hrushivska_2'
    },
    {
      'name': 'hrymailivska',
      '$kuid': 'ilp9P60jN',
      'label': [
        'Hrymailivska',
        'Гримайлівська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrymailivska'
    },
    {
      'name': 'hryshkovetska',
      '$kuid': 'ZkHBLRcJ7',
      'label': [
        'Hryshkovetska',
        'Гришковецька'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hryshkovetska'
    },
    {
      'name': 'hryshynska',
      '$kuid': 'Mh7zxjDg6',
      'label': [
        'Hryshynska',
        'Гришинська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'hryshynska'
    },
    {
      'name': 'hrytsivska',
      '$kuid': 'ofnDcaZXQ',
      'label': [
        'Hrytsivska',
        'Грицівська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrytsivska'
    },
    {
      'name': 'hubynyska',
      '$kuid': 'YUpIpfw3R',
      'label': [
        'Hubynyska',
        'Губиниська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'hubynyska'
    },
    {
      'name': 'hukivska',
      '$kuid': 'bK6VEoTki',
      'label': [
        'Hukivska',
        'Гуківська'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'hukivska'
    },
    {
      'name': 'huliaipilska',
      '$kuid': 'f424XTDut',
      'label': [
        'Huliaipilska',
        'Гуляйпільська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'huliaipilska'
    },
    {
      'name': 'humenetska',
      '$kuid': 'fc6cQTSZc',
      'label': [
        'Humenetska',
        'Гуменецька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'humenetska'
    },
    {
      'name': 'hurivska',
      '$kuid': '7XKAUy67h',
      'label': [
        'Hurivska',
        'Гурівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hurivska'
    },
    {
      'name': 'hurzufska',
      '$kuid': 'SFVdsRjXG',
      'label': [
        'Hurzufska',
        'Гурзуфська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hurzufska'
    },
    {
      'name': 'husiatynska',
      '$kuid': 'IddaHZr09',
      'label': [
        'Husiatynska',
        'Гусятинська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'husiatynska'
    },
    {
      'name': 'hvardiiska',
      '$kuid': '0cA6ZcW60',
      'label': [
        'Hvardiiska',
        'Гвардійська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvardiiska'
    },
    {
      'name': 'hvardiiska_2',
      '$kuid': 'nuHtED0oX',
      'label': [
        'Hvardiiska',
        'Гвардійська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvardiiska_2'
    },
    {
      'name': 'hvardiiska_3',
      '$kuid': '0My9GRByF',
      'label': [
        'Hvardiiska',
        'Гвардійська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvardiiska_3'
    },
    {
      'name': 'hvizdetska',
      '$kuid': 'eHvr1oDdZ',
      'label': [
        'Hvizdetska',
        'Гвіздецька'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvizdetska'
    },
    {
      'name': 'ichnianska',
      '$kuid': '6DKwcUG6x',
      'label': [
        'Ichnianska',
        'Ічнянська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'ichnianska'
    },
    {
      'name': 'ilarionivska',
      '$kuid': 'uUwb0YQPm',
      'label': [
        'Ilarionivska',
        'Іларіонівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ilarionivska'
    },
    {
      'name': 'illichivska',
      '$kuid': 'Zv2gjzjS4',
      'label': [
        'Illichivska',
        'Іллічівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'illichivska'
    },
    {
      'name': 'illichivska_2',
      '$kuid': 'CpUchwVMY',
      'label': [
        'Illichivska',
        'Іллічівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'illichivska_2'
    },
    {
      'name': 'illinetska',
      '$kuid': 'WdcnWpIqU',
      'label': [
        'Illinetska',
        'Іллінецька'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'illinetska'
    },
    {
      'name': 'illinivska',
      '$kuid': 'oE92M8x4A',
      'label': [
        'Illinivska',
        'Іллінівська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'illinivska'
    },
    {
      'name': 'illinska',
      '$kuid': 'hrqA1U6gK',
      'label': [
        'Illinska',
        'Іллінська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'illinska'
    },
    {
      'name': 'ilovaiska',
      '$kuid': 'lDzF7vbCl',
      'label': [
        'Ilovaiska',
        'Іловайська'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'ilovaiska'
    },
    {
      'name': 'inhulska',
      '$kuid': 'V429L9RZp',
      'label': [
        'Inhulska',
        'Інгульська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'inhulska'
    },
    {
      'name': 'irkliivska',
      '$kuid': 'Xo4axcGqQ',
      'label': [
        'Irkliivska',
        'Іркліївська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'irkliivska'
    },
    {
      'name': 'irpinska',
      '$kuid': '7YFwpHzDl',
      'label': [
        'Irpinska',
        'Ірпінська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'irpinska'
    },
    {
      'name': 'irshanska',
      '$kuid': 'UDpsbPvab',
      'label': [
        'Irshanska',
        'Іршанська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'irshanska'
    },
    {
      'name': 'irshavska',
      '$kuid': 'Q9kqH7Rem',
      'label': [
        'Irshavska',
        'Іршавська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'irshavska'
    },
    {
      'name': 'ishunska',
      '$kuid': 'cngfGHSB3',
      'label': [
        'Ishunska',
        'Ішунська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'ishunska'
    },
    {
      'name': 'ivane-pustenska',
      '$kuid': 'EVZCdtYHA',
      'label': [
        'Ivane-Pustenska',
        'Іване-Пустенська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivane-pustenska'
    },
    {
      'name': 'ivanivska',
      '$kuid': 'gpxF731r4',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska'
    },
    {
      'name': 'ivanivska_2',
      '$kuid': '2qLzagcm8',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_2'
    },
    {
      'name': 'ivanivska_3',
      '$kuid': 'UtcxF2vCS',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_3'
    },
    {
      'name': 'ivanivska_4',
      '$kuid': 'eUFjmEJzv',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_4'
    },
    {
      'name': 'ivanivska_5',
      '$kuid': 'WPHAFZ6Ot',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_5'
    },
    {
      'name': 'ivanivska_6',
      '$kuid': 'l8muus0f8',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_6'
    },
    {
      'name': 'ivanivska_7',
      '$kuid': '2wXFR7EtG',
      'label': [
        'Ivanivska',
        'Іванівська'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_7'
    },
    {
      'name': 'ivankivska_8',
      '$kuid': 'GRlpnBPnD',
      'label': [
        'Ivankivska',
        'Іваньківська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivankivska_8'
    },
    {
      'name': 'ivankivska_9',
      '$kuid': '6cENHDFx4',
      'label': [
        'Ivankivska',
        'Іванківська'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivankivska_9'
    },
    {
      'name': 'ivano-frankivska_2',
      '$kuid': '2EUIc1B9e',
      'label': [
        'Ivano-Frankivska',
        'Івано-Франківська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivano-frankivska_2'
    },
    {
      'name': 'ivano-frankivska_3',
      '$kuid': 'jnrUepMTJ',
      'label': [
        'Ivano-Frankivska',
        'Івано-Франківська'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivano-frankivska_3'
    },
    {
      'name': 'ivanovetska',
      '$kuid': 'l0AtIWtAh',
      'label': [
        'Ivanovetska',
        'Івановецька'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanovetska'
    },
    {
      'name': 'ivanychivska',
      '$kuid': 'KYjSCCwpA',
      'label': [
        'Ivanychivska',
        'Іваничівська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanychivska'
    },
    {
      'name': 'iziaslavska',
      '$kuid': 'yVOn00vRq',
      'label': [
        'Iziaslavska',
        'Ізяславська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'iziaslavska'
    },
    {
      'name': 'iziumska',
      '$kuid': 'Ku5rMy3KA',
      'label': [
        'Iziumska',
        'Ізюмська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'iziumska'
    },
    {
      'name': 'izmailska',
      '$kuid': '9og81Oeg6',
      'label': [
        'Izmailska',
        'Ізмаїльська'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'izmailska'
    },
    {
      'name': 'izobilnenska',
      '$kuid': 'Fo5cFwoaw',
      'label': [
        'Izobilnenska',
        'Ізобільненська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'izobilnenska'
    },
    {
      'name': 'izobilnenska_2',
      '$kuid': 'WtRGLzeB6',
      'label': [
        'Izobilnenska',
        'Ізобільненська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'izobilnenska_2'
    },
    {
      'name': 'izumrudnivska',
      '$kuid': 'LBiHBztD0',
      'label': [
        'Izumrudnivska',
        'Ізумруднівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'izumrudnivska'
    },
    {
      'name': 'kadiivska',
      '$kuid': 'U1hPNlATC',
      'label': [
        'Kadiivska',
        'Кадіївська'
      ],
      'raion': 'alchevskyi',
      'list_name': 'hromada',
      '$autovalue': 'kadiivska'
    },
    {
      'name': 'kadubovetska',
      '$kuid': 'ieqnnXgNi',
      'label': [
        'Kadubovetska',
        'Кадубовецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kadubovetska'
    },
    {
      'name': 'kaharlytska',
      '$kuid': 'uAVwx7jeB',
      'label': [
        'Kaharlytska',
        'Кагарлицька'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kaharlytska'
    },
    {
      'name': 'kakhovska',
      '$kuid': 'j1SCt32MR',
      'label': [
        'Kakhovska',
        'Каховська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kakhovska'
    },
    {
      'name': 'kalanchatska',
      '$kuid': 'THiS2M3To',
      'label': [
        'Kalanchatska',
        'Каланчацька'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalanchatska'
    },
    {
      'name': 'kalchytska',
      '$kuid': 'BDbgPNZnC',
      'label': [
        'Kalchytska',
        'Кальчицька'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalchytska'
    },
    {
      'name': 'kalininska',
      '$kuid': 'JoUfz0VWJ',
      'label': [
        'Kalininska',
        'Калінінська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalininska'
    },
    {
      'name': 'kalininska_2',
      '$kuid': 'TpsoB2N3X',
      'label': [
        'Kalininska',
        'Калінінська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalininska_2'
    },
    {
      'name': 'kalmiuska',
      '$kuid': 'PrfuIOLAV',
      'label': [
        'Kalmiuska',
        'Кальміуська'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalmiuska'
    },
    {
      'name': 'kaluska',
      '$kuid': 'A2WBq0Q7O',
      'label': [
        'Kaluska',
        'Калуська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'kaluska'
    },
    {
      'name': 'kalynivska',
      '$kuid': 'ddReCngMM',
      'label': [
        'Kalynivska',
        'Калинівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska'
    },
    {
      'name': 'kalynivska_2',
      '$kuid': 'SX6u2KeWw',
      'label': [
        'Kalynivska',
        'Калинівська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_2'
    },
    {
      'name': 'kalynivska_3',
      '$kuid': 'oHJvKVvRh',
      'label': [
        'Kalynivska',
        'Калинівська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_3'
    },
    {
      'name': 'kalynivska_4',
      '$kuid': 'AGguzjO0Z',
      'label': [
        'Kalynivska',
        'Калинівська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_4'
    },
    {
      'name': 'kalynivska_5',
      '$kuid': 'lDmGaDI0I',
      'label': [
        'Kalynivska',
        'Калинівська'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_5'
    },
    {
      'name': 'kalytianska',
      '$kuid': 'W3rUIJFpi',
      'label': [
        'Kalytianska',
        'Калитянська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalytianska'
    },
    {
      'name': 'kamianetska',
      '$kuid': '25rzMxTGj',
      'label': [
        'Kamianetska',
        'Кам\'янецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianetska'
    },
    {
      'name': 'kamianets-podilska',
      '$kuid': 'i6N2bDno3',
      'label': [
        'Kamianets-Podilska',
        'Кам\'янець-Подільська'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianets-podilska'
    },
    {
      'name': 'kamianka-buzka',
      '$kuid': 'Qykkfacs6',
      'label': [
        'Kamianka-Buzka',
        'Кам\'янка-Бузька'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianka-buzka'
    },
    {
      'name': 'kamianomostivska',
      '$kuid': 'HiGtMcrtS',
      'label': [
        'Kamianomostivska',
        'Кам\'яномостівська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianomostivska'
    },
    {
      'name': 'kamianopotokivska',
      '$kuid': '7L8oZCz9m',
      'label': [
        'Kamianopotokivska',
        'Кам\'янопотоківська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianopotokivska'
    },
    {
      'name': 'kamianska',
      '$kuid': 'mQAhOW0na',
      'label': [
        'Kamianska',
        'Кам\'янська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska'
    },
    {
      'name': 'kamianska_2',
      '$kuid': 'DpDEVkwFo',
      'label': [
        'Kamianska',
        'Кам\'янська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska_2'
    },
    {
      'name': 'kamianska_3',
      '$kuid': 'A7WcSmSOU',
      'label': [
        'Kamianska',
        'Кам\'янська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska_3'
    },
    {
      'name': 'kamianska_4',
      '$kuid': 'L80AsJQbL',
      'label': [
        'Kamianska',
        'Кам\'янська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska_4'
    },
    {
      'name': 'kamiansko-dniprovska',
      '$kuid': 'LArbP151O',
      'label': [
        'Kamiansko-Dniprovska',
        'Кам\'янсько-Дніпровська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamiansko-dniprovska'
    },
    {
      'name': 'kamin-kashyrska',
      '$kuid': 'LVSvvG82Y',
      'label': [
        'Kamin-Kashyrska',
        'Камінь-Каширська'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamin-kashyrska'
    },
    {
      'name': 'kanivska',
      '$kuid': 'eWu7Mgbzq',
      'label': [
        'Kanivska',
        'Канівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'kanivska'
    },
    {
      'name': 'kanonytska',
      '$kuid': 'Rnbc09UIU',
      'label': [
        'Kanonytska',
        'Каноницька'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'kanonytska'
    },
    {
      'name': 'karapchivska',
      '$kuid': 'gJjWMvWv2',
      'label': [
        'Karapchivska',
        'Карапчівська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'karapchivska'
    },
    {
      'name': 'karlivska',
      '$kuid': 'ELtKPnLqb',
      'label': [
        'Karlivska',
        'Карлівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'karlivska'
    },
    {
      'name': 'karolino-buhazka',
      '$kuid': 'qgI29sNT9',
      'label': [
        'Karolino-Buhazka',
        'Кароліно-Бугазька'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'karolino-buhazka'
    },
    {
      'name': 'karpivska',
      '$kuid': 'LbfN0vxSM',
      'label': [
        'Karpivska',
        'Карпівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'karpivska'
    },
    {
      'name': 'kashtanivska',
      '$kuid': 'EeqcD3Rs7',
      'label': [
        'Kashtanivska',
        'Каштанівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kashtanivska'
    },
    {
      'name': 'katerynivska',
      '$kuid': 'C10uiFhbP',
      'label': [
        'Katerynivska',
        'Катеринівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'katerynivska'
    },
    {
      'name': 'katerynopilska',
      '$kuid': 'KoTxmrbnu',
      'label': [
        'Katerynopilska',
        'Катеринопільська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'katerynopilska'
    },
    {
      'name': 'kazankivska',
      '$kuid': '0gx8g9e2B',
      'label': [
        'Kazankivska',
        'Казанківська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kazankivska'
    },
    {
      'name': 'kehychivska',
      '$kuid': 'hN6oWT6du',
      'label': [
        'Kehychivska',
        'Кегичівська'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'kehychivska'
    },
    {
      'name': 'kelmenetska',
      '$kuid': 'pO53xJlZd',
      'label': [
        'Kelmenetska',
        'Кельменецька'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kelmenetska'
    },
    {
      'name': 'kerchenska',
      '$kuid': 'd5y6Z7X0l',
      'label': [
        'Kerchenska',
        'Керченська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kerchenska'
    },
    {
      'name': 'keretskivska',
      '$kuid': 'b5DqWeMMu',
      'label': [
        'Keretskivska',
        'Керецьківська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'keretskivska'
    },
    {
      'name': 'ketrysanivska',
      '$kuid': 'ske9MX2gT',
      'label': [
        'Ketrysanivska',
        'Кетрисанівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ketrysanivska'
    },
    {
      'name': 'kharkivska_2',
      '$kuid': '69uIKNqM9',
      'label': [
        'Kharkivska',
        'Харківська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kharkivska_2'
    },
    {
      'name': 'khartsyzka',
      '$kuid': 'OTYzhnQhq',
      'label': [
        'Khartsyzka',
        'Харцизька'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'khartsyzka'
    },
    {
      'name': 'kharytonivska',
      '$kuid': '794K19a2o',
      'label': [
        'Kharytonivska',
        'Харитонівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kharytonivska'
    },
    {
      'name': 'khersonska_2',
      '$kuid': 'czf45Thud',
      'label': [
        'Khersonska',
        'Херсонська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'khersonska_2'
    },
    {
      'name': 'khlibodarivska',
      '$kuid': 'oQFNudI5a',
      'label': [
        'Khlibodarivska',
        'Хлібодарівська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'khlibodarivska'
    },
    {
      'name': 'khmelivska',
      '$kuid': 'PwIcatdxt',
      'label': [
        'Khmelivska',
        'Хмелівська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'khmelivska'
    },
    {
      'name': 'khmelnytska_2',
      '$kuid': 'gIRiKUAhI',
      'label': [
        'Khmelnytska',
        'Хмельницька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'khmelnytska_2'
    },
    {
      'name': 'khmilnytska',
      '$kuid': 'QcHRixOwB',
      'label': [
        'Khmilnytska',
        'Хмільницька'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'khmilnytska'
    },
    {
      'name': 'khodorivska',
      '$kuid': 'iPPorVVDJ',
      'label': [
        'Khodorivska',
        'Ходорівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'khodorivska'
    },
    {
      'name': 'kholmkivska',
      '$kuid': 'XGnax5Kta',
      'label': [
        'Kholmkivska',
        'Холмківська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'kholmkivska'
    },
    {
      'name': 'kholmynska',
      '$kuid': '2yYSaKLQA',
      'label': [
        'Kholmynska',
        'Холминська'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kholmynska'
    },
    {
      'name': 'khorolska',
      '$kuid': 'AoFVGVR69',
      'label': [
        'Khorolska',
        'Хорольська'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'khorolska'
    },
    {
      'name': 'khoroshivska',
      '$kuid': 'RlMGghufy',
      'label': [
        'Khoroshivska',
        'Хорошівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'khoroshivska'
    },
    {
      'name': 'khorostkivska',
      '$kuid': 'QGeP5uonN',
      'label': [
        'Khorostkivska',
        'Хоростківська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'khorostkivska'
    },
    {
      'name': 'khotinska',
      '$kuid': 'APy1nQARx',
      'label': [
        'Khotinska',
        'Хотінська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'khotinska'
    },
    {
      'name': 'khotynska',
      '$kuid': '5zXIT9PLi',
      'label': [
        'Khotynska',
        'Хотинська'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'khotynska'
    },
    {
      'name': 'khrestivska',
      '$kuid': 'VWHAQYJ80',
      'label': [
        'Khrestivska',
        'Хрестівська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrestivska'
    },
    {
      'name': 'khrestivska_2',
      '$kuid': 'lkUQTCnu5',
      'label': [
        'Khrestivska',
        'Хрестівська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrestivska_2'
    },
    {
      'name': 'khrustalnenska',
      '$kuid': 'Tpf126snU',
      'label': [
        'Khrustalnenska',
        'Хрустальненська'
      ],
      'raion': 'rovenkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrustalnenska'
    },
    {
      'name': 'khrystynivska',
      '$kuid': 'XcP7n79tD',
      'label': [
        'Khrystynivska',
        'Христинівська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrystynivska'
    },
    {
      'name': 'khustska',
      '$kuid': 'i7qlYErBF',
      'label': [
        'Khustska',
        'Хустська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'khustska'
    },
    {
      'name': 'khyrivska',
      '$kuid': 'Cp6Wyro7l',
      'label': [
        'Khyrivska',
        'Хирівська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'khyrivska'
    },
    {
      'name': 'kiliiska',
      '$kuid': 'JNapH3iPp',
      'label': [
        'Kiliiska',
        'Кілійська'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'kiliiska'
    },
    {
      'name': 'kindrashivska',
      '$kuid': 'KC1UPVkGY',
      'label': [
        'Kindrashivska',
        'Кіндрашівська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kindrashivska'
    },
    {
      'name': 'kindrativska',
      '$kuid': 'AE1zEv7PS',
      'label': [
        'Kindrativska',
        'Кіндратівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kindrativska'
    },
    {
      'name': 'kiptivska',
      '$kuid': 'NwmJrWlxo',
      'label': [
        'Kiptivska',
        'Кіптівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kiptivska'
    },
    {
      'name': 'kirovska',
      '$kuid': 'SuD4Fu5w5',
      'label': [
        'Kirovska',
        'Кіровська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kirovska'
    },
    {
      'name': 'kirovska_2',
      '$kuid': 'qdM089ziD',
      'label': [
        'Kirovska',
        'Кіровська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kirovska_2'
    },
    {
      'name': 'kirovska_3',
      '$kuid': 'RLfFupLdP',
      'label': [
        'Kirovska',
        'Кіровська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kirovska_3'
    },
    {
      'name': 'kistochkivska',
      '$kuid': 'Z1rkGI9VW',
      'label': [
        'Kistochkivska',
        'Кісточківська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'kistochkivska'
    },
    {
      'name': 'kitsmanska',
      '$kuid': 'fF89lkoNU',
      'label': [
        'Kitsmanska',
        'Кіцманська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kitsmanska'
    },
    {
      'name': 'kivertsivska',
      '$kuid': 'LQ7M6AYsl',
      'label': [
        'Kivertsivska',
        'Ківерцівська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kivertsivska'
    },
    {
      'name': 'klepyninska',
      '$kuid': 'u54KzhASm',
      'label': [
        'Klepyninska',
        'Клепинінська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'klepyninska'
    },
    {
      'name': 'klesivska',
      '$kuid': 'Z64pSUTlB',
      'label': [
        'Klesivska',
        'Клесівська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'klesivska'
    },
    {
      'name': 'klevanska',
      '$kuid': 'yll1ZZwsd',
      'label': [
        'Klevanska',
        'Клеванська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'klevanska'
    },
    {
      'name': 'klishkovetska',
      '$kuid': '77kXRk963',
      'label': [
        'Klishkovetska',
        'Клішковецька'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'klishkovetska'
    },
    {
      'name': 'kobeliatska',
      '$kuid': 'myuwA84e5',
      'label': [
        'Kobeliatska',
        'Кобеляцька'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kobeliatska'
    },
    {
      'name': 'koblivska',
      '$kuid': 'hHAWUNr43',
      'label': [
        'Koblivska',
        'Коблівська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'koblivska'
    },
    {
      'name': 'kochubeivska',
      '$kuid': 'PVTUGbQYg',
      'label': [
        'Kochubeivska',
        'Кочубеївська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kochubeivska'
    },
    {
      'name': 'kodymska',
      '$kuid': 'B86HvVBjK',
      'label': [
        'Kodymska',
        'Кодимська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kodymska'
    },
    {
      'name': 'koktebelska',
      '$kuid': 'pR8huoKGL',
      'label': [
        'Koktebelska',
        'Коктебельська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'koktebelska'
    },
    {
      'name': 'kolarivska',
      '$kuid': 'nEU2f4Dee',
      'label': [
        'Kolarivska',
        'Коларівська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolarivska'
    },
    {
      'name': 'kolchuhynska',
      '$kuid': '8jc1XVWDO',
      'label': [
        'Kolchuhynska',
        'Кольчугинська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolchuhynska'
    },
    {
      'name': 'kolchynska',
      '$kuid': 'TczXlLPJg',
      'label': [
        'Kolchynska',
        'Кольчинська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolchynska'
    },
    {
      'name': 'kolkivska',
      '$kuid': 'aMjvQ0uo0',
      'label': [
        'Kolkivska',
        'Колківська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolkivska'
    },
    {
      'name': 'kolochavska',
      '$kuid': 'rzrt3sd49',
      'label': [
        'Kolochavska',
        'Колочавська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolochavska'
    },
    {
      'name': 'kolodiazhnenska',
      '$kuid': 'ZCALFhse6',
      'label': [
        'Kolodiazhnenska',
        'Колодяжненська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolodiazhnenska'
    },
    {
      'name': 'kolodiazianska',
      '$kuid': 'AZFRQYE6s',
      'label': [
        'Kolodiazianska',
        'Колодязянська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolodiazianska'
    },
    {
      'name': 'kolomatska',
      '$kuid': '4pabH3Zso',
      'label': [
        'Kolomatska',
        'Коломацька'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomatska'
    },
    {
      'name': 'kolomatska_2',
      '$kuid': 'yLa4yqpBV',
      'label': [
        'Kolomatska',
        'Коломацька'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomatska_2'
    },
    {
      'name': 'kolomyichyska',
      '$kuid': 'es2PQNh8X',
      'label': [
        'Kolomyichyska',
        'Коломийчиська'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomyichyska'
    },
    {
      'name': 'kolomyiska',
      '$kuid': 'EQ2OHxJ7d',
      'label': [
        'Kolomyiska',
        'Коломийська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomyiska'
    },
    {
      'name': 'koltsovska',
      '$kuid': '36TPrNb2j',
      'label': [
        'Koltsovska',
        'Кольцовська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'koltsovska'
    },
    {
      'name': 'kolyndianska',
      '$kuid': 'zWWci5cCv',
      'label': [
        'Kolyndianska',
        'Колиндянська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolyndianska'
    },
    {
      'name': 'komarivska',
      '$kuid': '4Fq0WVaGa',
      'label': [
        'Komarivska',
        'Комарівська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'komarivska'
    },
    {
      'name': 'komarnivska',
      '$kuid': 'lpBA7TWGU',
      'label': [
        'Komarnivska',
        'Комарнівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'komarnivska'
    },
    {
      'name': 'komarska',
      '$kuid': 'WZfCaOrRF',
      'label': [
        'Komarska',
        'Комарська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'komarska'
    },
    {
      'name': 'kompaniivska',
      '$kuid': 'BITdNcNH2',
      'label': [
        'Kompaniivska',
        'Компаніївська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'kompaniivska'
    },
    {
      'name': 'komyshanska',
      '$kuid': 'rio4cMmE4',
      'label': [
        'Komyshanska',
        'Комишанська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'komyshanska'
    },
    {
      'name': 'komyshnianska',
      '$kuid': 'ZvHH4EaaH',
      'label': [
        'Komyshnianska',
        'Комишнянська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'komyshnianska'
    },
    {
      'name': 'komyshuvaska',
      '$kuid': 'uJKmXA6w4',
      'label': [
        'Komyshuvaska',
        'Комишуваська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'komyshuvaska'
    },
    {
      'name': 'komysh-zorianska',
      '$kuid': 'gGAA7OkOK',
      'label': [
        'Komysh-Zorianska',
        'Комиш-Зорянська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'komysh-zorianska'
    },
    {
      'name': 'koniatynska',
      '$kuid': 'as9IC6TA7',
      'label': [
        'Koniatynska',
        'Конятинська'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'koniatynska'
    },
    {
      'name': 'konoplianska',
      '$kuid': 'vTiflhDqY',
      'label': [
        'Konoplianska',
        'Коноплянська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'konoplianska'
    },
    {
      'name': 'konotopska',
      '$kuid': 'qc2SiigGZ',
      'label': [
        'Konotopska',
        'Конотопська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'konotopska'
    },
    {
      'name': 'kopachivska',
      '$kuid': 'Nq5JfSPCS',
      'label': [
        'Kopachivska',
        'Копачівська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kopachivska'
    },
    {
      'name': 'kopaihorodska',
      '$kuid': '5LwaqMWTY',
      'label': [
        'Kopaihorodska',
        'Копайгородська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kopaihorodska'
    },
    {
      'name': 'kopychynetska',
      '$kuid': 'vHouno32X',
      'label': [
        'Kopychynetska',
        'Копичинецька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kopychynetska'
    },
    {
      'name': 'koreizka',
      '$kuid': 'n2aCc9zD0',
      'label': [
        'Koreizka',
        'Кореїзька'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'koreizka'
    },
    {
      'name': 'koretska',
      '$kuid': 'jljpBzEJy',
      'label': [
        'Koretska',
        'Корецька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'koretska'
    },
    {
      'name': 'koriukivska',
      '$kuid': 'gi9kBPoxJ',
      'label': [
        'Koriukivska',
        'Корюківська'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'koriukivska'
    },
    {
      'name': 'kormivska',
      '$kuid': 'RhUoZKHQL',
      'label': [
        'Kormivska',
        'Кормівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kormivska'
    },
    {
      'name': 'kornynska',
      '$kuid': 'z4UJtHnvh',
      'label': [
        'Kornynska',
        'Корнинська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'kornynska'
    },
    {
      'name': 'kornynska_2',
      '$kuid': '9LpwuqrLt',
      'label': [
        'Kornynska',
        'Корнинська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kornynska_2'
    },
    {
      'name': 'korolivska',
      '$kuid': 'pa1SyCCf4',
      'label': [
        'Korolivska',
        'Королівська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'korolivska'
    },
    {
      'name': 'koropetska',
      '$kuid': 'OEa7HPXWy',
      'label': [
        'Koropetska',
        'Коропецька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'koropetska'
    },
    {
      'name': 'koropska',
      '$kuid': 'CrWr0iFOP',
      'label': [
        'Koropska',
        'Коропська'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'koropska'
    },
    {
      'name': 'korostenska',
      '$kuid': 'jEzoSnYF9',
      'label': [
        'Korostenska',
        'Коростенська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'korostenska'
    },
    {
      'name': 'korostyshivska',
      '$kuid': '0AdolYmEJ',
      'label': [
        'Korostyshivska',
        'Коростишівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'korostyshivska'
    },
    {
      'name': 'korovynska',
      '$kuid': 'J7eQvYBSQ',
      'label': [
        'Korovynska',
        'Коровинська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'korovynska'
    },
    {
      'name': 'korshivska',
      '$kuid': 'M09015jnJ',
      'label': [
        'Korshivska',
        'Коршівська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'korshivska'
    },
    {
      'name': 'korsun-shevchenkivska',
      '$kuid': 'y6zJZ4Hb6',
      'label': [
        'Korsun-Shevchenkivska',
        'Корсунь-Шевченківська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'korsun-shevchenkivska'
    },
    {
      'name': 'kosivska',
      '$kuid': 'nOjxCkzQ0',
      'label': [
        'Kosivska',
        'Косівська'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kosivska'
    },
    {
      'name': 'kosmatska',
      '$kuid': 'X3Hqx63oU',
      'label': [
        'Kosmatska',
        'Космацька'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kosmatska'
    },
    {
      'name': 'kosonska',
      '$kuid': '4qZ1ywAbJ',
      'label': [
        'Kosonska',
        'Косоньська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kosonska'
    },
    {
      'name': 'kostiantynivska',
      '$kuid': '7DdnqkdDB',
      'label': [
        'Kostiantynivska',
        'Костянтинівська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska'
    },
    {
      'name': 'kostiantynivska_2',
      '$kuid': '7P5cVjqlU',
      'label': [
        'Kostiantynivska',
        'Костянтинівська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska_2'
    },
    {
      'name': 'kostiantynivska_3',
      '$kuid': 'ipIwyr6nc',
      'label': [
        'Kostiantynivska',
        'Костянтинівська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska_3'
    },
    {
      'name': 'kostiantynivska_4',
      '$kuid': 'XsUebLO8g',
      'label': [
        'Kostiantynivska',
        'Костянтинівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska_4'
    },
    {
      'name': 'kostopilska',
      '$kuid': '471QkTlQd',
      'label': [
        'Kostopilska',
        'Костопільська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostopilska'
    },
    {
      'name': 'kostrynska',
      '$kuid': '6FcLkASwI',
      'label': [
        'Kostrynska',
        'Костринська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostrynska'
    },
    {
      'name': 'kostryzhivska',
      '$kuid': 'PrBQKM95h',
      'label': [
        'Kostryzhivska',
        'Кострижівська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostryzhivska'
    },
    {
      'name': 'kotelevska',
      '$kuid': '6vwg51lTL',
      'label': [
        'Kotelevska',
        'Котелевська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kotelevska'
    },
    {
      'name': 'kotelnykivska',
      '$kuid': 'P3GFp7FE7',
      'label': [
        'Kotelnykivska',
        'Котельниківська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kotelnykivska'
    },
    {
      'name': 'kotsiubynska',
      '$kuid': 'iMUVzsdtS',
      'label': [
        'Kotsiubynska',
        'Коцюбинська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kotsiubynska'
    },
    {
      'name': 'kovalivska',
      '$kuid': 'cnr7xFkD0',
      'label': [
        'Kovalivska',
        'Ковалівська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kovalivska'
    },
    {
      'name': 'kovelska',
      '$kuid': 'aEYv3c4zu',
      'label': [
        'Kovelska',
        'Ковельська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'kovelska'
    },
    {
      'name': 'kovylnivska',
      '$kuid': '7vzoqolaD',
      'label': [
        'Kovylnivska',
        'Ковильнівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'kovylnivska'
    },
    {
      'name': 'kozeletska',
      '$kuid': 'RcZZn6IET',
      'label': [
        'Kozeletska',
        'Козелецька'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozeletska'
    },
    {
      'name': 'kozelshchynska',
      '$kuid': '8nTCKQDlt',
      'label': [
        'Kozelshchynska',
        'Козельщинська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozelshchynska'
    },
    {
      'name': 'kozhanska',
      '$kuid': '6JDWUlh7I',
      'label': [
        'Kozhanska',
        'Кожанська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozhanska'
    },
    {
      'name': 'koziatynska',
      '$kuid': 'LJw7bFHRu',
      'label': [
        'Koziatynska',
        'Козятинська'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'koziatynska'
    },
    {
      'name': 'kozivska',
      '$kuid': 'E6jh3ax8C',
      'label': [
        'Kozivska',
        'Козівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozivska'
    },
    {
      'name': 'kozivska_2',
      '$kuid': 'gAtk1qcVT',
      'label': [
        'Kozivska',
        'Козівська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozivska_2'
    },
    {
      'name': 'kozlivska',
      '$kuid': '8GWi50waT',
      'label': [
        'Kozlivska',
        'Козлівська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozlivska'
    },
    {
      'name': 'kozynska',
      '$kuid': '4OBRyfn2N',
      'label': [
        'Kozynska',
        'Козинська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozynska'
    },
    {
      'name': 'kozynska_3',
      '$kuid': 'NWniTcZCX',
      'label': [
        'Kozynska',
        'Козинська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozynska_3'
    },
    {
      'name': 'krainenska',
      '$kuid': 'MsZmY4UFk',
      'label': [
        'Krainenska',
        'Крайненська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krainenska'
    },
    {
      'name': 'kramatorska',
      '$kuid': '5UujteU1E',
      'label': [
        'Kramatorska',
        'Краматорська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'kramatorska'
    },
    {
      'name': 'krasnenska',
      '$kuid': 'XJI3Zg51B',
      'label': [
        'Krasnenska',
        'Красненська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnenska'
    },
    {
      'name': 'krasnoarmiiska',
      '$kuid': 'Vh1h5GGNm',
      'label': [
        'Krasnoarmiiska',
        'Красноармійська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoarmiiska'
    },
    {
      'name': 'krasnoflotska',
      '$kuid': 'tDxqn3NsW',
      'label': [
        'Krasnoflotska',
        'Краснофлотська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoflotska'
    },
    {
      'name': 'krasnohirska',
      '$kuid': 'FjEXzuxjJ',
      'label': [
        'Krasnohirska',
        'Красногірська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohirska'
    },
    {
      'name': 'krasnohradska',
      '$kuid': 'onocapU4V',
      'label': [
        'Krasnohradska',
        'Красноградська'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohradska'
    },
    {
      'name': 'krasnohvardiiska',
      '$kuid': '7gG8DzgoY',
      'label': [
        'Krasnohvardiiska',
        'Красногвардійська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohvardiiska'
    },
    {
      'name': 'krasnohvardiiska_2',
      '$kuid': 'WwKHD9bY2',
      'label': [
        'Krasnohvardiiska',
        'Красногвардійська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohvardiiska_2'
    },
    {
      'name': 'krasnoiarska',
      '$kuid': 'dagLXLqBp',
      'label': [
        'Krasnoiarska',
        'Красноярська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoiarska'
    },
    {
      'name': 'krasnoilska',
      '$kuid': '2BoUC4wxe',
      'label': [
        'Krasnoilska',
        'Красноїльська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoilska'
    },
    {
      'name': 'krasnokutska',
      '$kuid': 'yohUB4Sft',
      'label': [
        'Krasnokutska',
        'Краснокутська'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnokutska'
    },
    {
      'name': 'krasnolutska',
      '$kuid': '2FBgt6mat',
      'label': [
        'Krasnolutska',
        'Краснолуцька'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnolutska'
    },
    {
      'name': 'krasnomatska',
      '$kuid': '6U3X7FdbN',
      'label': [
        'Krasnomatska',
        'Красномацька'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnomatska'
    },
    {
      'name': 'krasnoperekopska',
      '$kuid': 'xTZ5RIcmu',
      'label': [
        'Krasnoperekopska',
        'Красноперекопська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoperekopska'
    },
    {
      'name': 'krasnopilska',
      '$kuid': 'oxHVeViNT',
      'label': [
        'Krasnopilska',
        'Краснопільська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopilska'
    },
    {
      'name': 'krasnopilska_2',
      '$kuid': 'mQl3iq8x5',
      'label': [
        'Krasnopilska',
        'Краснопільська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopilska_2'
    },
    {
      'name': 'krasnopilska_3',
      '$kuid': 'Wa581d56x',
      'label': [
        'Krasnopilska',
        'Краснопільська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopilska_3'
    },
    {
      'name': 'krasnopolianska',
      '$kuid': 'DvszliZCs',
      'label': [
        'Krasnopolianska',
        'Краснополянська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopolianska'
    },
    {
      'name': 'krasnorichenska',
      '$kuid': '8ADSfxLrd',
      'label': [
        'Krasnorichenska',
        'Красноріченська'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnorichenska'
    },
    {
      'name': 'krasnosilska',
      '$kuid': 'j6GQJ3TdC',
      'label': [
        'Krasnosilska',
        'Красносільська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnosilska'
    },
    {
      'name': 'krasnoznamianska',
      '$kuid': 'lyVmt5zIj',
      'label': [
        'Krasnoznamianska',
        'Краснознам\'янська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoznamianska'
    },
    {
      'name': 'krasylivska',
      '$kuid': 'l7hjRuujq',
      'label': [
        'Krasylivska',
        'Красилівська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasylivska'
    },
    {
      'name': 'kremenchutska',
      '$kuid': 'wF4qxO0Dl',
      'label': [
        'Kremenchutska',
        'Кременчуцька'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kremenchutska'
    },
    {
      'name': 'kremenetska',
      '$kuid': 'TZpkAYYce',
      'label': [
        'Kremenetska',
        'Кременецька'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kremenetska'
    },
    {
      'name': 'kreminska',
      '$kuid': 'sjvSYfhpj',
      'label': [
        'Kreminska',
        'Кремінська'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kreminska'
    },
    {
      'name': 'krestianivska',
      '$kuid': 'dybs0fJmU',
      'label': [
        'Krestianivska',
        'Крестянівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'krestianivska'
    },
    {
      'name': 'krolevetska',
      '$kuid': '7B4jCXPnW',
      'label': [
        'Krolevetska',
        'Кролевецька'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'krolevetska'
    },
    {
      'name': 'kropyvnytskyi_2',
      '$kuid': 'ir31TNI2O',
      'label': [
        'Kropyvnytskyi',
        'Кропивницька'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'kropyvnytskyi_2'
    },
    {
      'name': 'krupetska',
      '$kuid': 'GrdQ3ozdH',
      'label': [
        'Krupetska',
        'Крупецька'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'krupetska'
    },
    {
      'name': 'krupetska_2',
      '$kuid': 'm8iSIrYEu',
      'label': [
        'Krupetska',
        'Крупецька'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krupetska_2'
    },
    {
      'name': 'krutivska',
      '$kuid': '4KKqIrgFB',
      'label': [
        'Krutivska',
        'Крутівська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'krutivska'
    },
    {
      'name': 'krymkivska',
      '$kuid': 'cLynHuyTP',
      'label': [
        'Krymkivska',
        'Кримківська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krymkivska'
    },
    {
      'name': 'krymska',
      '$kuid': 'iTlns0wV5',
      'label': [
        'Krymska',
        'Кримська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krymska'
    },
    {
      'name': 'krymskorozivska',
      '$kuid': 'kLgMhuPW3',
      'label': [
        'Krymskorozivska',
        'Кримськорозівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'krymskorozivska'
    },
    {
      'name': 'krynychanska',
      '$kuid': '4XlDqo91g',
      'label': [
        'Krynychanska',
        'Криничанська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'krynychanska'
    },
    {
      'name': 'krynychnenska',
      '$kuid': 'jnOmpk5FO',
      'label': [
        'Krynychnenska',
        'Криничненська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'krynychnenska'
    },
    {
      'name': 'krynychnenska_2',
      '$kuid': 'VDISWrNMe',
      'label': [
        'Krynychnenska',
        'Криничненська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'krynychnenska_2'
    },
    {
      'name': 'kryvoozerska',
      '$kuid': 'FOwWgneXD',
      'label': [
        'Kryvoozerska',
        'Кривоозерська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kryvoozerska'
    },
    {
      'name': 'kryvorizka',
      '$kuid': 'SgVZR3Thu',
      'label': [
        'Kryvorizka',
        'Криворізька'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'kryvorizka'
    },
    {
      'name': 'kryvorizka_2',
      '$kuid': 'wprLYlbmp',
      'label': [
        'Kryvorizka',
        'Криворізька'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kryvorizka_2'
    },
    {
      'name': 'kryzhopilska',
      '$kuid': 'EhC4a58ph',
      'label': [
        'Kryzhopilska',
        'Крижопільська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kryzhopilska'
    },
    {
      'name': 'kubeiska',
      '$kuid': 'wokW4oV02',
      'label': [
        'Kubeiska',
        'Кубейська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'kubeiska'
    },
    {
      'name': 'kuialnytska',
      '$kuid': 'JhuUlM00e',
      'label': [
        'Kuialnytska',
        'Куяльницька'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kuialnytska'
    },
    {
      'name': 'kuibyshevska',
      '$kuid': 'b8SwGAqeb',
      'label': [
        'Kuibyshevska',
        'Куйбишевська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kuibyshevska'
    },
    {
      'name': 'kukushkinska',
      '$kuid': 'Wwg6XPbmv',
      'label': [
        'Kukushkinska',
        'Кукушкінська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'kukushkinska'
    },
    {
      'name': 'kulevchanska',
      '$kuid': 'uyHsvHCM3',
      'label': [
        'Kulevchanska',
        'Кулевчанська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kulevchanska'
    },
    {
      'name': 'kulykivska',
      '$kuid': '807WxjVkO',
      'label': [
        'Kulykivska',
        'Куликівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kulykivska'
    },
    {
      'name': 'kulykivska_2',
      '$kuid': 'vJaM0r09Q',
      'label': [
        'Kulykivska',
        'Куликівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kulykivska_2'
    },
    {
      'name': 'kunievska',
      '$kuid': 'M8sx16cxF',
      'label': [
        'Kunievska',
        'Куньєвська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'kunievska'
    },
    {
      'name': 'kunkivska',
      '$kuid': 'mS4h3p2cc',
      'label': [
        'Kunkivska',
        'Кунківська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kunkivska'
    },
    {
      'name': 'kupchynetska',
      '$kuid': 'nBeP3tFj9',
      'label': [
        'Kupchynetska',
        'Купчинецька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kupchynetska'
    },
    {
      'name': 'kupianska',
      '$kuid': 'CTm4lgRxh',
      'label': [
        'Kupianska',
        'Куп\'янська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kupianska'
    },
    {
      'name': 'kurakhivska',
      '$kuid': 'qgyYRK6u7',
      'label': [
        'Kurakhivska',
        'Курахівська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurakhivska'
    },
    {
      'name': 'kurisovska',
      '$kuid': 'LwmnZDdVs',
      'label': [
        'Kurisovska',
        'Курісовська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurisovska'
    },
    {
      'name': 'kurnenska',
      '$kuid': 'Io33PkJiA',
      'label': [
        'Kurnenska',
        'Курненська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurnenska'
    },
    {
      'name': 'kurska',
      '$kuid': 'CZHo2QxE7',
      'label': [
        'Kurska',
        'Курська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurska'
    },
    {
      'name': 'kurylivska',
      '$kuid': 'oz9Wv0wME',
      'label': [
        'Kurylivska',
        'Курилівська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurylivska'
    },
    {
      'name': 'kushuhumska',
      '$kuid': 'Dg838q9cv',
      'label': [
        'Kushuhumska',
        'Кушугумська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'kushuhumska'
    },
    {
      'name': 'kutska',
      '$kuid': 'qsO4MhOfd',
      'label': [
        'Kutska',
        'Кутська'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kutska'
    },
    {
      'name': 'kutsurubska',
      '$kuid': 'BriIGptJ6',
      'label': [
        'Kutsurubska',
        'Куцурубська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kutsurubska'
    },
    {
      'name': 'kvitneva',
      '$kuid': 'onermSbbK',
      'label': [
        'Kvitneva',
        'Квітнева'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kvitneva'
    },
    {
      'name': 'kyinska',
      '$kuid': 'szLelPqvE',
      'label': [
        'Kyinska',
        'Киїнська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyinska'
    },
    {
      'name': 'kyivska_2',
      '$kuid': '5ZVP5QfMq',
      'label': [
        'Kyivska',
        'Київська'
      ],
      'raion': 'kyivska',
      'list_name': 'hromada',
      '$autovalue': 'kyivska_2'
    },
    {
      'name': 'kyrykivska',
      '$kuid': 'nOskXYcaP',
      'label': [
        'Kyrykivska',
        'Кириківська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyrykivska'
    },
    {
      'name': 'kyrylivska',
      '$kuid': 'ylt07rCdG',
      'label': [
        'Kyrylivska',
        'Кирилівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyrylivska'
    },
    {
      'name': 'kyselivska',
      '$kuid': 'eZrGigmbo',
      'label': [
        'Kyselivska',
        'Киселівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyselivska'
    },
    {
      'name': 'kytaihorodska',
      '$kuid': '2vnNQXxgZ',
      'label': [
        'Kytaihorodska',
        'Китайгородська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kytaihorodska'
    },
    {
      'name': 'kytaihorodska_2',
      '$kuid': 'dBn2zUxhE',
      'label': [
        'Kytaihorodska',
        'Китайгородська'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kytaihorodska_2'
    },
    {
      'name': 'ladanska',
      '$kuid': 'IQDfPoSaU',
      'label': [
        'Ladanska',
        'Ладанська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'ladanska'
    },
    {
      'name': 'ladyzhynska',
      '$kuid': 'uOxxhOL32',
      'label': [
        'Ladyzhynska',
        'Ладижинська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'ladyzhynska'
    },
    {
      'name': 'ladyzhynska_2',
      '$kuid': 'FwPO4iOQl',
      'label': [
        'Ladyzhynska',
        'Ладижинська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ladyzhynska_2'
    },
    {
      'name': 'lanchynska',
      '$kuid': 'oCPlxz7W2',
      'label': [
        'Lanchynska',
        'Ланчинська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'lanchynska'
    },
    {
      'name': 'lannivska',
      '$kuid': 'vwcEKIFUk',
      'label': [
        'Lannivska',
        'Ланнівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'lannivska'
    },
    {
      'name': 'lanovetska',
      '$kuid': 'Foso8JFHp',
      'label': [
        'Lanovetska',
        'Лановецька'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'lanovetska'
    },
    {
      'name': 'lazurnenska',
      '$kuid': 'wFG8ZW8c7',
      'label': [
        'Lazurnenska',
        'Лазурненська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'lazurnenska'
    },
    {
      'name': 'lebedynska',
      '$kuid': 'NDVL9v3vb',
      'label': [
        'Lebedynska',
        'Лебединська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'lebedynska'
    },
    {
      'name': 'leninska',
      '$kuid': 'nm14N9tHW',
      'label': [
        'Leninska',
        'Ленінська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'leninska'
    },
    {
      'name': 'leninska_2',
      '$kuid': 'tmN8tWULX',
      'label': [
        'Leninska',
        'Ленінська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'leninska_2'
    },
    {
      'name': 'leninska_3',
      '$kuid': 'rXJjEpwVW',
      'label': [
        'Leninska',
        'Ленінська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'leninska_3'
    },
    {
      'name': 'lenkovetska',
      '$kuid': 'kGFYiHF0O',
      'label': [
        'Lenkovetska',
        'Ленковецька'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lenkovetska'
    },
    {
      'name': 'leskivska',
      '$kuid': 'iQ746dTA3',
      'label': [
        'Leskivska',
        'Леськівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'leskivska'
    },
    {
      'name': 'letychivska',
      '$kuid': 'oOrdzhmf8',
      'label': [
        'Letychivska',
        'Летичівська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'letychivska'
    },
    {
      'name': 'lhovska',
      '$kuid': 'xUsTNlAxj',
      'label': [
        'Lhovska',
        'Льговська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'lhovska'
    },
    {
      'name': 'liashkivska',
      '$kuid': 'Hkh4e3kVg',
      'label': [
        'Liashkivska',
        'Ляшківська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'liashkivska'
    },
    {
      'name': 'lipliavska',
      '$kuid': 'FtsIMpGeQ',
      'label': [
        'Lipliavska',
        'Ліплявська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'lipliavska'
    },
    {
      'name': 'lisnivska',
      '$kuid': 'U13N3zXLL',
      'label': [
        'Lisnivska',
        'Ліснівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'lisnivska'
    },
    {
      'name': 'lisovohrynivetska',
      '$kuid': 'LY0d6yRpm',
      'label': [
        'Lisovohrynivetska',
        'Лісовогринівецька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'lisovohrynivetska'
    },
    {
      'name': 'litynska',
      '$kuid': 'hNAfQx44Z',
      'label': [
        'Litynska',
        'Літинська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'litynska'
    },
    {
      'name': 'liubarska',
      '$kuid': 'Fn29WbREe',
      'label': [
        'Liubarska',
        'Любарська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubarska'
    },
    {
      'name': 'liubashivska',
      '$kuid': 'jTZ850kXv',
      'label': [
        'Liubashivska',
        'Любашівська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubashivska'
    },
    {
      'name': 'liubeshivska',
      '$kuid': 'VijuVYXdd',
      'label': [
        'Liubeshivska',
        'Любешівська'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubeshivska'
    },
    {
      'name': 'liubetska',
      '$kuid': 'pSdf1Lw35',
      'label': [
        'Liubetska',
        'Любецька'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubetska'
    },
    {
      'name': 'liublynetska',
      '$kuid': 'L5iDEDFkY',
      'label': [
        'Liublynetska',
        'Люблинецька'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'liublynetska'
    },
    {
      'name': 'liubomlska',
      '$kuid': 'XOoiLRM9n',
      'label': [
        'Liubomlska',
        'Любомльська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubomlska'
    },
    {
      'name': 'liubotynska',
      '$kuid': 'geRL3EJ9N',
      'label': [
        'Liubotynska',
        'Люботинська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubotynska'
    },
    {
      'name': 'liubymivska',
      '$kuid': '3bXQtyLOr',
      'label': [
        'Liubymivska',
        'Любимівська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubymivska'
    },
    {
      'name': 'liubymivska_2',
      '$kuid': 'B2zFAMmBQ',
      'label': [
        'Liubymivska',
        'Любимівська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubymivska_2'
    },
    {
      'name': 'liutenska',
      '$kuid': 'DiYKRUUgT',
      'label': [
        'Liutenska',
        'Лютенська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'liutenska'
    },
    {
      'name': 'livadiiska',
      '$kuid': 'RMBQJenUi',
      'label': [
        'Livadiiska',
        'Лівадійська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'livadiiska'
    },
    {
      'name': 'livynetska',
      '$kuid': 'ez3Gpj5fQ',
      'label': [
        'Livynetska',
        'Лівинецька'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'livynetska'
    },
    {
      'name': 'lobanivska',
      '$kuid': 'uRaAdXFdw',
      'label': [
        'Lobanivska',
        'Лобанівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'lobanivska'
    },
    {
      'name': 'lokachynska',
      '$kuid': '9NK3Xqi5b',
      'label': [
        'Lokachynska',
        'Локачинська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'lokachynska'
    },
    {
      'name': 'lokhvytska',
      '$kuid': 'X4GQCBVw2',
      'label': [
        'Lokhvytska',
        'Лохвицька'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'lokhvytska'
    },
    {
      'name': 'loknytska',
      '$kuid': '4bGF4kq5y',
      'label': [
        'Loknytska',
        'Локницька'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'loknytska'
    },
    {
      'name': 'lopatynska',
      '$kuid': 'WTvzPKR2U',
      'label': [
        'Lopatynska',
        'Лопатинська'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'lopatynska'
    },
    {
      'name': 'lopushnenska',
      '$kuid': 'EVjgcrRYG',
      'label': [
        'Lopushnenska',
        'Лопушненська'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'lopushnenska'
    },
    {
      'name': 'losynivska',
      '$kuid': 'sF9Y3QukM',
      'label': [
        'Losynivska',
        'Лосинівська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'losynivska'
    },
    {
      'name': 'lozivska',
      '$kuid': 'z3dt69Yl8',
      'label': [
        'Lozivska',
        'Лозівська'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lozivska'
    },
    {
      'name': 'lozno-oleksandrivska',
      '$kuid': 'FaWrCqOnA',
      'label': [
        'Lozno-Oleksandrivska',
        'Лозно-Олександрівська'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'lozno-oleksandrivska'
    },
    {
      'name': 'lozuvatska',
      '$kuid': 'FFmiosWVe',
      'label': [
        'Lozuvatska',
        'Лозуватська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'lozuvatska'
    },
    {
      'name': 'lubenska',
      '$kuid': '2PfK6eOHo',
      'label': [
        'Lubenska',
        'Лубенська'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'lubenska'
    },
    {
      'name': 'luchystivska',
      '$kuid': '7nnAtmbYy',
      'label': [
        'Luchystivska',
        'Лучистівська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'luchystivska'
    },
    {
      'name': 'luhanska_2',
      '$kuid': 'WXVMC8dF3',
      'label': [
        'Luhanska',
        'Луганська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhanska_2'
    },
    {
      'name': 'luhanska_3',
      '$kuid': 'vdzrjnbS7',
      'label': [
        'Luhanska',
        'Луганська'
      ],
      'raion': 'luhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhanska_3'
    },
    {
      'name': 'luhivska',
      '$kuid': 'lzOVIn73F',
      'label': [
        'Luhivska',
        'Лугівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhivska'
    },
    {
      'name': 'luhynska',
      '$kuid': 'EIHaMDRMe',
      'label': [
        'Luhynska',
        'Лугинська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhynska'
    },
    {
      'name': 'luka-meleshkivska',
      '$kuid': 'AWVezrQEA',
      'label': [
        'Luka-Meleshkivska',
        'Лука-Мелешківська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'luka-meleshkivska'
    },
    {
      'name': 'lukivska',
      '$kuid': 'i2JcSb7jF',
      'label': [
        'Lukivska',
        'Луківська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'lukivska'
    },
    {
      'name': 'lutska',
      '$kuid': 'WGLoQR8M4',
      'label': [
        'Lutska',
        'Луцька'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'lutska'
    },
    {
      'name': 'lutuhynska',
      '$kuid': 'kpm4QVotJ',
      'label': [
        'Lutuhynska',
        'Лутугинська'
      ],
      'raion': 'luhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'lutuhynska'
    },
    {
      'name': 'lvivska_2',
      '$kuid': '6DXnzYPbN',
      'label': [
        'Lvivska',
        'Львівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lvivska_2'
    },
    {
      'name': 'lychkivska',
      '$kuid': 'MQyu3suQC',
      'label': [
        'Lychkivska',
        'Личківська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'lychkivska'
    },
    {
      'name': 'lykhivska',
      '$kuid': 'lUL43qtph',
      'label': [
        'Lykhivska',
        'Лихівська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'lykhivska'
    },
    {
      'name': 'lymanska',
      '$kuid': 'XKOJcoeoO',
      'label': [
        'Lymanska',
        'Лиманська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'lymanska'
    },
    {
      'name': 'lymanska_2',
      '$kuid': 'dcSKpnn9h',
      'label': [
        'Lymanska',
        'Лиманська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'lymanska_2'
    },
    {
      'name': 'lymanska_3',
      '$kuid': 'fanXSq1Q7',
      'label': [
        'Lymanska',
        'Лиманська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'lymanska_3'
    },
    {
      'name': 'lynovytska',
      '$kuid': 'jPzXSCrYH',
      'label': [
        'Lynovytska',
        'Линовицька'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'lynovytska'
    },
    {
      'name': 'lypetska',
      '$kuid': 'VSKVw9RmF',
      'label': [
        'Lypetska',
        'Липецька'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypetska'
    },
    {
      'name': 'lypianska',
      '$kuid': 'bROBkrvQN',
      'label': [
        'Lypianska',
        'Лип\'янська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypianska'
    },
    {
      'name': 'lypovetska',
      '$kuid': 'G58cQc9Ns',
      'label': [
        'Lypovetska',
        'Липовецька'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypovetska'
    },
    {
      'name': 'lypovodolynska',
      '$kuid': '0ZxI3Imm9',
      'label': [
        'Lypovodolynska',
        'Липоводолинська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypovodolynska'
    },
    {
      'name': 'lysetska',
      '$kuid': 'kLD6PKr0N',
      'label': [
        'Lysetska',
        'Лисецька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lysetska'
    },
    {
      'name': 'lysianska',
      '$kuid': 'JBddhvhoa',
      'label': [
        'Lysianska',
        'Лисянська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'lysianska'
    },
    {
      'name': 'lystvynska',
      '$kuid': 'p1kDzmNjF',
      'label': [
        'Lystvynska',
        'Листвинська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'lystvynska'
    },
    {
      'name': 'lysychanska',
      '$kuid': 'JB8DUrdJj',
      'label': [
        'Lysychanska',
        'Лисичанська'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'lysychanska'
    },
    {
      'name': 'lytovezka',
      '$kuid': 'szi37uJYX',
      'label': [
        'Lytovezka',
        'Литовезька'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'lytovezka'
    },
    {
      'name': 'machukhivska',
      '$kuid': 'ZYWvWrpe9',
      'label': [
        'Machukhivska',
        'Мачухівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'machukhivska'
    },
    {
      'name': 'mahalska',
      '$kuid': 'QBaYtx8lK',
      'label': [
        'Mahalska',
        'Магальська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'mahalska'
    },
    {
      'name': 'mahazynska',
      '$kuid': 'LinafDiJt',
      'label': [
        'Mahazynska',
        'Магазинська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'mahazynska'
    },
    {
      'name': 'mahdalynivska',
      '$kuid': 'w0VjB3Ugp',
      'label': [
        'Mahdalynivska',
        'Магдалинівська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mahdalynivska'
    },
    {
      'name': 'maiakivska',
      '$kuid': 'yekd6mB6r',
      'label': [
        'Maiakivska',
        'Маяківська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'maiakivska'
    },
    {
      'name': 'maiska',
      '$kuid': 'iIR3by21Z',
      'label': [
        'Maiska',
        'Майська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'maiska'
    },
    {
      'name': 'makarivska',
      '$kuid': 'YA0NMhv9D',
      'label': [
        'Makarivska',
        'Макарівська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'makarivska'
    },
    {
      'name': 'makhnivska',
      '$kuid': 'pMdoDPztI',
      'label': [
        'Makhnivska',
        'Махнівська'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'makhnivska'
    },
    {
      'name': 'makiivska',
      '$kuid': 'p5Pdk4czp',
      'label': [
        'Makiivska',
        'Макіївська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'makiivska'
    },
    {
      'name': 'makiivska_2',
      '$kuid': 'uawurRACE',
      'label': [
        'Makiivska',
        'Макіївська'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'makiivska_2'
    },
    {
      'name': 'makivska',
      '$kuid': 'DN0ssnRWI',
      'label': [
        'Makivska',
        'Маківська'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'makivska'
    },
    {
      'name': 'malobilozerska',
      '$kuid': 'uW8l7twSC',
      'label': [
        'Malobilozerska',
        'Малобілозерська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malobilozerska'
    },
    {
      'name': 'malodanylivska',
      '$kuid': 'z8YabuVUk',
      'label': [
        'Malodanylivska',
        'Малоданилівська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malodanylivska'
    },
    {
      'name': 'malodivytska',
      '$kuid': 'tUO4XNknu',
      'label': [
        'Malodivytska',
        'Малодівицька'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'malodivytska'
    },
    {
      'name': 'maloliubashanska',
      '$kuid': 'mC0SeHVyV',
      'label': [
        'Maloliubashanska',
        'Малолюбашанська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'maloliubashanska'
    },
    {
      'name': 'malomaiatska',
      '$kuid': 'xJnqaDPYu',
      'label': [
        'Malomaiatska',
        'Маломаяцька'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'malomaiatska'
    },
    {
      'name': 'malomykhailivska',
      '$kuid': 'VRiP2r9LK',
      'label': [
        'Malomykhailivska',
        'Маломихайлівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malomykhailivska'
    },
    {
      'name': 'malorichenska',
      '$kuid': 'BM7uAJCSC',
      'label': [
        'Malorichenska',
        'Малоріченська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'malorichenska'
    },
    {
      'name': 'malotokmachanska',
      '$kuid': '1Z4GjIbfh',
      'label': [
        'Malotokmachanska',
        'Малотокмачанська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malotokmachanska'
    },
    {
      'name': 'malovilshanska',
      '$kuid': 'NmwWti8at',
      'label': [
        'Malovilshanska',
        'Маловільшанська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malovilshanska'
    },
    {
      'name': 'malovyskivska',
      '$kuid': 'IGngljjWr',
      'label': [
        'Malovyskivska',
        'Маловисківська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'malovyskivska'
    },
    {
      'name': 'malynivska',
      '$kuid': 'h6fJXiwQy',
      'label': [
        'Malynivska',
        'Малинівська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynivska'
    },
    {
      'name': 'malynivska_2',
      '$kuid': '1uvxO6LB8',
      'label': [
        'Malynivska',
        'Малинівська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynivska_2'
    },
    {
      'name': 'malynska',
      '$kuid': 'Jv4z0R0j5',
      'label': [
        'Malynska',
        'Малинська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynska'
    },
    {
      'name': 'malynska_2',
      '$kuid': 'QetFrvbM4',
      'label': [
        'Malynska',
        'Малинська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynska_2'
    },
    {
      'name': 'mamaivska',
      '$kuid': 'MvKmAipyf',
      'label': [
        'Mamaivska',
        'Мамаївська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'mamaivska'
    },
    {
      'name': 'mamalyhivska',
      '$kuid': 'u5AtJSdbC',
      'label': [
        'Mamalyhivska',
        'Мамалигівська'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mamalyhivska'
    },
    {
      'name': 'manevytska',
      '$kuid': 'n5tPtNEQx',
      'label': [
        'Manevytska',
        'Маневицька'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'manevytska'
    },
    {
      'name': 'manhushska',
      '$kuid': 'uLHjHdlsP',
      'label': [
        'Manhushska',
        'Мангушська'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'manhushska'
    },
    {
      'name': 'mankivska',
      '$kuid': 'Q2AIayqNN',
      'label': [
        'Mankivska',
        'Маньківська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'mankivska'
    },
    {
      'name': 'marazliivska',
      '$kuid': 'ukLd6y1Jc',
      'label': [
        'Marazliivska',
        'Маразліївська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'marazliivska'
    },
    {
      'name': 'marfivska',
      '$kuid': 'NZChb29i1',
      'label': [
        'Marfivska',
        'Марфівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'marfivska'
    },
    {
      'name': 'marhanetska',
      '$kuid': 'wEDes4xZK',
      'label': [
        'Marhanetska',
        'Марганецька'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'marhanetska'
    },
    {
      'name': 'marianivska',
      '$kuid': 'uCyLNsCRZ',
      'label': [
        'Marianivska',
        'Мар\'янівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'marianivska'
    },
    {
      'name': 'marianivska_2',
      '$kuid': 'N53YXp7YF',
      'label': [
        'Marianivska',
        'Мар\'янівська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'marianivska_2'
    },
    {
      'name': 'marianivska_3',
      '$kuid': '5fAkMjrNv',
      'label': [
        'Marianivska',
        'Мар\'янівська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'marianivska_3'
    },
    {
      'name': 'marinska',
      '$kuid': '0pq83ETam',
      'label': [
        'Marinska',
        'Мар\'їнська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'marinska'
    },
    {
      'name': 'mariupolska',
      '$kuid': 'WsMZkmAoC',
      'label': [
        'Mariupolska',
        'Маріупольська'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'mariupolska'
    },
    {
      'name': 'marivska',
      '$kuid': 'zGSnI3l4O',
      'label': [
        'Marivska',
        'Мар\'ївська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'marivska'
    },
    {
      'name': 'markivska',
      '$kuid': 'BswbAFFqs',
      'label': [
        'Markivska',
        'Марківська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'markivska'
    },
    {
      'name': 'martynivska',
      '$kuid': 'LNqRayJpD',
      'label': [
        'Martynivska',
        'Мартинівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'martynivska'
    },
    {
      'name': 'masandrivska',
      '$kuid': 'uOB62rIKA',
      'label': [
        'Masandrivska',
        'Масандрівська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'masandrivska'
    },
    {
      'name': 'mashivska',
      '$kuid': 'Zfai0A1TP',
      'label': [
        'Mashivska',
        'Машівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'mashivska'
    },
    {
      'name': 'maslivska',
      '$kuid': 'LnhHHq1ty',
      'label': [
        'Maslivska',
        'Маслівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'maslivska'
    },
    {
      'name': 'mateievetska',
      '$kuid': 'Hazj3s3Pm',
      'label': [
        'Mateievetska',
        'Матеївецька'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mateievetska'
    },
    {
      'name': 'matusivska',
      '$kuid': 'GhZK1pQXQ',
      'label': [
        'Matusivska',
        'Матусівська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'matusivska'
    },
    {
      'name': 'matviivska',
      '$kuid': 'd2f7wdfB6',
      'label': [
        'Matviivska',
        'Матвіївська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'matviivska'
    },
    {
      'name': 'mazanska',
      '$kuid': 'L5KJ1ODaX',
      'label': [
        'Mazanska',
        'Мазанська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'mazanska'
    },
    {
      'name': 'medenytska',
      '$kuid': 'qxnXHgOLZ',
      'label': [
        'Medenytska',
        'Меденицька'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'medenytska'
    },
    {
      'name': 'medvedivska',
      '$kuid': 'FLrtgs0yh',
      'label': [
        'Medvedivska',
        'Медведівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvedivska'
    },
    {
      'name': 'medvedivska_2',
      '$kuid': 'UxbKBFp2j',
      'label': [
        'Medvedivska',
        'Медведівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvedivska_2'
    },
    {
      'name': 'medvedivska_3',
      '$kuid': 'ikeWmSHh8',
      'label': [
        'Medvedivska',
        'Медведівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvedivska_3'
    },
    {
      'name': 'medvynska',
      '$kuid': 'cTbHLp3YP',
      'label': [
        'Medvynska',
        'Медвинська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvynska'
    },
    {
      'name': 'medzhybizka',
      '$kuid': 'MSBv5jYYp',
      'label': [
        'Medzhybizka',
        'Меджибізька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'medzhybizka'
    },
    {
      'name': 'melitopolska',
      '$kuid': 'wvSESaExS',
      'label': [
        'Melitopolska',
        'Мелітопольська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'melitopolska'
    },
    {
      'name': 'melnychna',
      '$kuid': 'x3BPw4PAJ',
      'label': [
        'Melnychna',
        'Мельнична'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'melnychna'
    },
    {
      'name': 'melnytse-podilska',
      '$kuid': 'HSBvdlYue',
      'label': [
        'Melnytse-Podilska',
        'Мельнице-Подільська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'melnytse-podilska'
    },
    {
      'name': 'menska',
      '$kuid': 'VbWWYTJwr',
      'label': [
        'Menska',
        'Менська'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'menska'
    },
    {
      'name': 'merefianska',
      '$kuid': 'YdKAXmQsZ',
      'label': [
        'Merefianska',
        'Мереф\'янська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'merefianska'
    },
    {
      'name': 'mezhivska',
      '$kuid': 'Nffo1M7n7',
      'label': [
        'Mezhivska',
        'Межівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mezhivska'
    },
    {
      'name': 'mezhyritska',
      '$kuid': 'Pc35l1sb6',
      'label': [
        'Mezhyritska',
        'Межиріцька'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'mezhyritska'
    },
    {
      'name': 'michurinska',
      '$kuid': '2AFUFCVPt',
      'label': [
        'Michurinska',
        'Мічурінська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'michurinska'
    },
    {
      'name': 'milovska',
      '$kuid': 'gci7hK2hj',
      'label': [
        'Milovska',
        'Міловська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'milovska'
    },
    {
      'name': 'mishkovo-pohorilivska',
      '$kuid': 'uj1QK2xsH',
      'label': [
        'Mishkovo-Pohorilivska',
        'Мішково-Погорілівська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mishkovo-pohorilivska'
    },
    {
      'name': 'mizhhirska',
      '$kuid': 'Zb6m0JHr3',
      'label': [
        'Mizhhirska',
        'Міжгірська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizhhirska'
    },
    {
      'name': 'mizhrichenska',
      '$kuid': 'ZjwJygQbl',
      'label': [
        'Mizhrichenska',
        'Міжріченська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizhrichenska'
    },
    {
      'name': 'mizhvodnenska',
      '$kuid': '0cyY9Snj6',
      'label': [
        'Mizhvodnenska',
        'Міжводненська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizhvodnenska'
    },
    {
      'name': 'mizotska',
      '$kuid': 'JpB5Zmrhu',
      'label': [
        'Mizotska',
        'Мізоцька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizotska'
    },
    {
      'name': 'mliivska',
      '$kuid': 'kdJGdaJr5',
      'label': [
        'Mliivska',
        'Мліївська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'mliivska'
    },
    {
      'name': 'mlynivska',
      '$kuid': '7OFVGtpft',
      'label': [
        'Mlynivska',
        'Млинівська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'mlynivska'
    },
    {
      'name': 'mohyliv-podilska',
      '$kuid': 'qnluKcsgW',
      'label': [
        'Mohyliv-Podilska',
        'Могилів-Подільська'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'mohyliv-podilska'
    },
    {
      'name': 'mohylivska',
      '$kuid': 'jwoJxkTIP',
      'label': [
        'Mohylivska',
        'Могилівська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mohylivska'
    },
    {
      'name': 'mokrokalyhirska',
      '$kuid': 'gWfRwBP02',
      'label': [
        'Mokrokalyhirska',
        'Мокрокалигірська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'mokrokalyhirska'
    },
    {
      'name': 'molochanska',
      '$kuid': 'ot91g379v',
      'label': [
        'Molochanska',
        'Молочанська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'molochanska'
    },
    {
      'name': 'molochnenska',
      '$kuid': 'XArbqBmh6',
      'label': [
        'Molochnenska',
        'Молочненська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'molochnenska'
    },
    {
      'name': 'molodizhnenska',
      '$kuid': 'lawUhw3XX',
      'label': [
        'Molodizhnenska',
        'Молодіжненська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'molodizhnenska'
    },
    {
      'name': 'molodohvardiiska',
      '$kuid': 'tlnWtlAYf',
      'label': [
        'Molodohvardiiska',
        'Молодогвардійська'
      ],
      'raion': 'luhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'molodohvardiiska'
    },
    {
      'name': 'molohivska',
      '$kuid': 'OdbHneTkw',
      'label': [
        'Molohivska',
        'Мологівська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'molohivska'
    },
    {
      'name': 'monastyryshchenska',
      '$kuid': 'TwZQ3MDga',
      'label': [
        'Monastyryshchenska',
        'Монастирищенська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'monastyryshchenska'
    },
    {
      'name': 'monastyryska',
      '$kuid': '3oomAw1Ob',
      'label': [
        'Monastyryska',
        'Монастириська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'monastyryska'
    },
    {
      'name': 'morshynska',
      '$kuid': 'TrB8dxP3x',
      'label': [
        'Morshynska',
        'Моршинська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'morshynska'
    },
    {
      'name': 'morska',
      '$kuid': 'Jlnz5PjFL',
      'label': [
        'Morska',
        'Морська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'morska'
    },
    {
      'name': 'moshnivska',
      '$kuid': 'e1tCmvitc',
      'label': [
        'Moshnivska',
        'Мошнівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'moshnivska'
    },
    {
      'name': 'mostivska',
      '$kuid': 'iBlO6w4jG',
      'label': [
        'Mostivska',
        'Мостівська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'mostivska'
    },
    {
      'name': 'mostyska',
      '$kuid': '4LR0L53DV',
      'label': [
        'Mostyska',
        'Мостиська'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mostyska'
    },
    {
      'name': 'mrynska',
      '$kuid': 'Nf29T62Vt',
      'label': [
        'Mrynska',
        'Мринська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'mrynska'
    },
    {
      'name': 'mukachivska',
      '$kuid': 'WR96cnaUN',
      'label': [
        'Mukachivska',
        'Мукачівська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mukachivska'
    },
    {
      'name': 'murafska',
      '$kuid': 'AI96nXIlc',
      'label': [
        'Murafska',
        'Мурафська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'murafska'
    },
    {
      'name': 'muromska',
      '$kuid': 'OSUKWwvBJ',
      'label': [
        'Muromska',
        'Муромська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'muromska'
    },
    {
      'name': 'murovanokurylovetska',
      '$kuid': 'gBYAAk4dC',
      'label': [
        'Murovanokurylovetska',
        'Мурованокуриловецька'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'murovanokurylovetska'
    },
    {
      'name': 'murovanska',
      '$kuid': 'WhyrX6eVU',
      'label': [
        'Murovanska',
        'Мурованська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'murovanska'
    },
    {
      'name': 'muzykivska',
      '$kuid': 'TrBWmGfNy',
      'label': [
        'Muzykivska',
        'Музиківська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'muzykivska'
    },
    {
      'name': 'myhiivska',
      '$kuid': 'HZc9tyQwl',
      'label': [
        'Myhiivska',
        'Мигіївська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'myhiivska'
    },
    {
      'name': 'mykhailiutska',
      '$kuid': 'wHwU45kTc',
      'label': [
        'Mykhailiutska',
        'Михайлюцька'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailiutska'
    },
    {
      'name': 'mykhailivska',
      '$kuid': 'KpXR6P5TK',
      'label': [
        'Mykhailivska',
        'Михайлівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska'
    },
    {
      'name': 'mykhailivska_2',
      '$kuid': '3JFIhjYm9',
      'label': [
        'Mykhailivska',
        'Михайлівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_2'
    },
    {
      'name': 'mykhailivska_3',
      '$kuid': '8CnoyoW1e',
      'label': [
        'Mykhailivska',
        'Михайлівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_3'
    },
    {
      'name': 'mykhailivska_4',
      '$kuid': 'E3CAjbMdk',
      'label': [
        'Mykhailivska',
        'Михайлівська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_4'
    },
    {
      'name': 'mykhailivska_5',
      '$kuid': 'CxmTf7Ebz',
      'label': [
        'Mykhailivska',
        'Михайлівська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_5'
    },
    {
      'name': 'mykhailo-kotsiubynska',
      '$kuid': 'n7jRGE1Yz',
      'label': [
        'Mykhailo-Kotsiubynska',
        'Михайло-Коцюбинська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailo-kotsiubynska'
    },
    {
      'name': 'mykhailo-lukashivska',
      '$kuid': 'vqbvY4gE9',
      'label': [
        'Mykhailo-Lukashivska',
        'Михайло-Лукашівська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailo-lukashivska'
    },
    {
      'name': 'mykolaivska',
      '$kuid': 'STAYpiwHa',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'mykolaivska_2',
      '$kuid': 'V0Dy8VjnX',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_2'
    },
    {
      'name': 'mykolaivska_3',
      '$kuid': '3NkPCWzFZ',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_3'
    },
    {
      'name': 'mykolaivska_4',
      '$kuid': 'mNLBJCuiZ',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_4'
    },
    {
      'name': 'mykolaivska_5',
      '$kuid': 'gr4L8JUMp',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_5'
    },
    {
      'name': 'mykolaivska_6',
      '$kuid': 'msxlWVqIL',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_6'
    },
    {
      'name': 'mykolaivska_7',
      '$kuid': 'uxNignHHR',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_7'
    },
    {
      'name': 'mykolaivska_8',
      '$kuid': 'SbK6zf9ia',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_8'
    },
    {
      'name': 'mykolaivska_9',
      '$kuid': 'sYrmEMnDa',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_9'
    },
    {
      'name': 'mykulynetska',
      '$kuid': 'eFkFcV9Nf',
      'label': [
        'Mykulynetska',
        'Микулинецька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykulynetska'
    },
    {
      'name': 'myliatska',
      '$kuid': 'km6iHRN1p',
      'label': [
        'Myliatska',
        'Миляцька'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'myliatska'
    },
    {
      'name': 'mylivska',
      '$kuid': 'dIoH2zOJs',
      'label': [
        'Mylivska',
        'Милівська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'mylivska'
    },
    {
      'name': 'myrhorodska',
      '$kuid': 'Jpmi3Fmio',
      'label': [
        'Myrhorodska',
        'Миргородська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrhorodska'
    },
    {
      'name': 'myrivska',
      '$kuid': 'HakJqiOxF',
      'label': [
        'Myrivska',
        'Мирівська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrivska'
    },
    {
      'name': 'myrnenska',
      '$kuid': 'HRwfml7yu',
      'label': [
        'Myrnenska',
        'Мирненська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnenska'
    },
    {
      'name': 'myrnenska_2',
      '$kuid': '9L3SHrE67',
      'label': [
        'Myrnenska',
        'Мирненська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnenska_2'
    },
    {
      'name': 'myrnenska_3',
      '$kuid': 'gCfi2VB7L',
      'label': [
        'Myrnenska',
        'Мирненська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnenska_3'
    },
    {
      'name': 'myrnivska',
      '$kuid': 'd8E5fqSA9',
      'label': [
        'Myrnivska',
        'Мирнівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnivska'
    },
    {
      'name': 'myrnivska_2',
      '$kuid': 'MGxFpJUvr',
      'label': [
        'Myrnivska',
        'Мирнівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnivska_2'
    },
    {
      'name': 'myrnivska_3',
      '$kuid': 'kBEow8owu',
      'label': [
        'Myrnivska',
        'Мирнівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnivska_3'
    },
    {
      'name': 'myrnohradska',
      '$kuid': '9sEXIHhLt',
      'label': [
        'Myrnohradska',
        'Мирноградська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnohradska'
    },
    {
      'name': 'myrohoshchanska',
      '$kuid': '6XV2EPz3u',
      'label': [
        'Myrohoshchanska',
        'Мирогощанська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrohoshchanska'
    },
    {
      'name': 'myroliubnenska',
      '$kuid': 'GT3mhz6mO',
      'label': [
        'Myroliubnenska',
        'Миролюбненська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'myroliubnenska'
    },
    {
      'name': 'myronivska',
      '$kuid': 'i90cBevWI',
      'label': [
        'Myronivska',
        'Миронівська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'myronivska'
    },
    {
      'name': 'myropilska',
      '$kuid': 'phXvL08R9',
      'label': [
        'Myropilska',
        'Миропільська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'myropilska'
    },
    {
      'name': 'myropilska_2',
      '$kuid': 'bsXlussYe',
      'label': [
        'Myropilska',
        'Миропільська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'myropilska_2'
    },
    {
      'name': 'mysivska',
      '$kuid': 'WR4QLIpbN',
      'label': [
        'Mysivska',
        'Мисівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'mysivska'
    },
    {
      'name': 'mytiaivska',
      '$kuid': 'kqsZuqsYr',
      'label': [
        'Mytiaivska',
        'Митяївська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mytiaivska'
    },
    {
      'name': 'mytrofanivska',
      '$kuid': '974dJw5NZ',
      'label': [
        'Mytrofanivska',
        'Митрофанівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'mytrofanivska'
    },
    {
      'name': 'nabutivska',
      '$kuid': '0txbZLwVL',
      'label': [
        'Nabutivska',
        'Набутівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'nabutivska'
    },
    {
      'name': 'nadlatska',
      '$kuid': 'HlVzsdSmT',
      'label': [
        'Nadlatska',
        'Надлацька'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nadlatska'
    },
    {
      'name': 'nadvirnianska',
      '$kuid': 'u452qnAMp',
      'label': [
        'Nadvirnianska',
        'Надвірнянська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'nadvirnianska'
    },
    {
      'name': 'nahirianska',
      '$kuid': 'SazwMXOcC',
      'label': [
        'Nahirianska',
        'Нагірянська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nahirianska'
    },
    {
      'name': 'naidonivska',
      '$kuid': 'cRP9HaP4K',
      'label': [
        'Naidonivska',
        'Найдьонівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'naidonivska'
    },
    {
      'name': 'naraivska',
      '$kuid': '52oxkEMT3',
      'label': [
        'Naraivska',
        'Нараївська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'naraivska'
    },
    {
      'name': 'narkevytska',
      '$kuid': 'UJHmDKPyc',
      'label': [
        'Narkevytska',
        'Наркевицька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'narkevytska'
    },
    {
      'name': 'narodytska',
      '$kuid': '9VuoSvwyx',
      'label': [
        'Narodytska',
        'Народицька'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'narodytska'
    },
    {
      'name': 'nasypnivska',
      '$kuid': 'KOyCNo9ax',
      'label': [
        'Nasypnivska',
        'Насипнівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'nasypnivska'
    },
    {
      'name': 'natalynska',
      '$kuid': '5rXMRRk0R',
      'label': [
        'Natalynska',
        'Наталинська'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'natalynska'
    },
    {
      'name': 'nechaianska',
      '$kuid': 'UCwuLc6Ev',
      'label': [
        'Nechaianska',
        'Нечаянська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nechaianska'
    },
    {
      'name': 'nedoboivska',
      '$kuid': 'GqO0miIcN',
      'label': [
        'Nedoboivska',
        'Недобоївська'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'nedoboivska'
    },
    {
      'name': 'nedryhailivska',
      '$kuid': 'pykPCqiUE',
      'label': [
        'Nedryhailivska',
        'Недригайлівська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'nedryhailivska'
    },
    {
      'name': 'nekhvoroshchanska',
      '$kuid': 'ZA7RO5xdu',
      'label': [
        'Nekhvoroshchanska',
        'Нехворощанська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'nekhvoroshchanska'
    },
    {
      'name': 'nekrasovska',
      '$kuid': 'BWyY8v19M',
      'label': [
        'Nekrasovska',
        'Некрасовська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'nekrasovska'
    },
    {
      'name': 'nelipynska',
      '$kuid': 'N6GnLGB4B',
      'label': [
        'Nelipynska',
        'Неліпинська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nelipynska'
    },
    {
      'name': 'nemishaivska',
      '$kuid': '7G7pTmvod',
      'label': [
        'Nemishaivska',
        'Немішаївська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'nemishaivska'
    },
    {
      'name': 'nemovytska',
      '$kuid': 'DCxNwXwyU',
      'label': [
        'Nemovytska',
        'Немовицька'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'nemovytska'
    },
    {
      'name': 'nemyrivska',
      '$kuid': 'VDlAuZNrb',
      'label': [
        'Nemyrivska',
        'Немирівська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'nemyrivska'
    },
    {
      'name': 'nepolokovetska',
      '$kuid': '1XkYvxKjM',
      'label': [
        'Nepolokovetska',
        'Неполоковецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'nepolokovetska'
    },
    {
      'name': 'neresnytska',
      '$kuid': '8PcUHaKeX',
      'label': [
        'Neresnytska',
        'Нересницька'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'neresnytska'
    },
    {
      'name': 'nerubaiska',
      '$kuid': 'R7sa4yyNA',
      'label': [
        'Nerubaiska',
        'Нерубайська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'nerubaiska'
    },
    {
      'name': 'netishynska',
      '$kuid': 'TPlFDb9H2',
      'label': [
        'Netishynska',
        'Нетішинська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'netishynska'
    },
    {
      'name': 'nikolska',
      '$kuid': 'I1R5mo2cF',
      'label': [
        'Nikolska',
        'Нікольська'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'nikolska'
    },
    {
      'name': 'nikopolska',
      '$kuid': 'Ko8r2ZgXu',
      'label': [
        'Nikopolska',
        'Нікопольська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'nikopolska'
    },
    {
      'name': 'nizhynska',
      '$kuid': 'oi5NifEth',
      'label': [
        'Nizhynska',
        'Ніжинська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'nizhynska'
    },
    {
      'name': 'nosivska',
      '$kuid': 'WHPrbOVlC',
      'label': [
        'Nosivska',
        'Носівська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'nosivska'
    },
    {
      'name': 'novenska',
      '$kuid': 'vWp2WMs3e',
      'label': [
        'Novenska',
        'Новенська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novenska'
    },
    {
      'name': 'novhorodkivska',
      '$kuid': 'A1RfmliXK',
      'label': [
        'Novhorodkivska',
        'Новгородківська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'novhorodkivska'
    },
    {
      'name': 'novhorod-siverska',
      '$kuid': '2FWH45JKA',
      'label': [
        'Novhorod-Siverska',
        'Новгород-Сіверська'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'novhorod-siverska'
    },
    {
      'name': 'novoaidarska',
      '$kuid': 'iPyDdUq5L',
      'label': [
        'Novoaidarska',
        'Новоайдарська'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoaidarska'
    },
    {
      'name': 'novoandriivska',
      '$kuid': 'Ufl8SmLKz',
      'label': [
        'Novoandriivska',
        'Новоандріївська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoandriivska'
    },
    {
      'name': 'novoarkhanhelska',
      '$kuid': '4av68F5Zw',
      'label': [
        'Novoarkhanhelska',
        'Новоархангельська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoarkhanhelska'
    },
    {
      'name': 'novoazovska',
      '$kuid': '5ujqPkCwk',
      'label': [
        'Novoazovska',
        'Новоазовська'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoazovska'
    },
    {
      'name': 'novobasanska',
      '$kuid': 'vNoL7eHkM',
      'label': [
        'Novobasanska',
        'Новобасанська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobasanska'
    },
    {
      'name': 'novobilouska',
      '$kuid': 'BYvwWyMUS',
      'label': [
        'Novobilouska',
        'Новобілоуська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobilouska'
    },
    {
      'name': 'novobohdanivska',
      '$kuid': '6rVDBc69F',
      'label': [
        'Novobohdanivska',
        'Новобогданівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobohdanivska'
    },
    {
      'name': 'novoborivska',
      '$kuid': 'hyAx12HY2',
      'label': [
        'Novoborivska',
        'Новоборівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoborivska'
    },
    {
      'name': 'novoborysivska',
      '$kuid': 'WBUGD90Ms',
      'label': [
        'Novoborysivska',
        'Новоборисівська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoborysivska'
    },
    {
      'name': 'novobuzka',
      '$kuid': 'aX5CzNymJ',
      'label': [
        'Novobuzka',
        'Новобузька'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobuzka'
    },
    {
      'name': 'novodmytrivska',
      '$kuid': 'UygilJdI4',
      'label': [
        'Novodmytrivska',
        'Новодмитрівська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'novodmytrivska'
    },
    {
      'name': 'novodnistrovska',
      '$kuid': 'AsJUJ3HB4',
      'label': [
        'Novodnistrovska',
        'Новодністровська'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novodnistrovska'
    },
    {
      'name': 'novodonetska',
      '$kuid': 'j9NV7Wyd0',
      'label': [
        'Novodonetska',
        'Новодонецька'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'novodonetska'
    },
    {
      'name': 'novofedorivska',
      '$kuid': 'SdvRdGX4T',
      'label': [
        'Novofedorivska',
        'Новофедорівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novofedorivska'
    },
    {
      'name': 'novohaleshchynska',
      '$kuid': 'nYNNiQKKA',
      'label': [
        'Novohaleshchynska',
        'Новогалещинська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohaleshchynska'
    },
    {
      'name': 'novohrad-volynska',
      '$kuid': 'RrLnn3HoC',
      'label': [
        'Novohrad-Volynska',
        'Новоград-Волинська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohrad-volynska'
    },
    {
      'name': 'novohrodivska',
      '$kuid': 'qDzfqEjPe',
      'label': [
        'Novohrodivska',
        'Новогродівська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohrodivska'
    },
    {
      'name': 'novohryhorivska',
      '$kuid': 'zOXBqUmMR',
      'label': [
        'Novohryhorivska',
        'Новогригорівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohryhorivska'
    },
    {
      'name': 'novohuivynska',
      '$kuid': 'c6UzV9RVW',
      'label': [
        'Novohuivynska',
        'Новогуйвинська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohuivynska'
    },
    {
      'name': 'novoiarychivska',
      '$kuid': 'OWAlpNj0T',
      'label': [
        'Novoiarychivska',
        'Новояричівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoiarychivska'
    },
    {
      'name': 'novoiavorivska',
      '$kuid': 'EO8HWZTrc',
      'label': [
        'Novoiavorivska',
        'Новояворівська'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoiavorivska'
    },
    {
      'name': 'novoivanivska',
      '$kuid': 'ibzfwoziH',
      'label': [
        'Novoivanivska',
        'Новоіванівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoivanivska'
    },
    {
      'name': 'novokakhovska',
      '$kuid': 'mj9OYlwpO',
      'label': [
        'Novokakhovska',
        'Новокаховська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokakhovska'
    },
    {
      'name': 'novokalchevska',
      '$kuid': '6izgUDA5h',
      'label': [
        'Novokalchevska',
        'Новокальчевська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokalchevska'
    },
    {
      'name': 'novokalynivska',
      '$kuid': 'DFed6uOGC',
      'label': [
        'Novokalynivska',
        'Новокалинівська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokalynivska'
    },
    {
      'name': 'novokrymska',
      '$kuid': 'n14xgAinP',
      'label': [
        'Novokrymska',
        'Новокримська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokrymska'
    },
    {
      'name': 'novolativska',
      '$kuid': '5U3lRwHoj',
      'label': [
        'Novolativska',
        'Новолатівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novolativska'
    },
    {
      'name': 'novomarivska',
      '$kuid': 'dM5Ml9C3Q',
      'label': [
        'Novomarivska',
        'Новомар\'ївська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomarivska'
    },
    {
      'name': 'novomoskovska',
      '$kuid': 'V06f8AYsM',
      'label': [
        'Novomoskovska',
        'Новомосковська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomoskovska'
    },
    {
      'name': 'novomykolaivska',
      '$kuid': '7KT8rUe1a',
      'label': [
        'Novomykolaivska',
        'Новомиколаївська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomykolaivska'
    },
    {
      'name': 'novomykolaivska_2',
      '$kuid': 'Rga9VWQIV',
      'label': [
        'Novomykolaivska',
        'Новомиколаївська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomykolaivska_2'
    },
    {
      'name': 'novomykolaivska_3',
      '$kuid': 'CUd6Uon4Q',
      'label': [
        'Novomykolaivska',
        'Новомиколаївська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novomykolaivska_3'
    },
    {
      'name': 'novomyrhorodska',
      '$kuid': 'dme5tL1jJ',
      'label': [
        'Novomyrhorodska',
        'Новомиргородська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomyrhorodska'
    },
    {
      'name': 'novoodeska',
      '$kuid': 'PZHCtyaji',
      'label': [
        'Novoodeska',
        'Новоодеська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoodeska'
    },
    {
      'name': 'novooleksandrivska',
      '$kuid': 'mLYgaoqyV',
      'label': [
        'Novooleksandrivska',
        'Новоолександрівська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novooleksandrivska'
    },
    {
      'name': 'novooleksandrivska_2',
      '$kuid': 'wlhvXaJi3',
      'label': [
        'Novooleksandrivska',
        'Новоолександрівська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novooleksandrivska_2'
    },
    {
      'name': 'novooleksandrivska_3',
      '$kuid': '6SsZkVOzj',
      'label': [
        'Novooleksandrivska',
        'Новоолександрівська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novooleksandrivska_3'
    },
    {
      'name': 'novoorzhytska',
      '$kuid': '5GgMkoy8a',
      'label': [
        'Novoorzhytska',
        'Новооржицька'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoorzhytska'
    },
    {
      'name': 'novoozernivska',
      '$kuid': 'OUUKL7pAK',
      'label': [
        'Novoozernivska',
        'Новоозернівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoozernivska'
    },
    {
      'name': 'novopavlivska',
      '$kuid': '6eQOr4wYY',
      'label': [
        'Novopavlivska',
        'Новопавлівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopavlivska'
    },
    {
      'name': 'novopavlivska_2',
      '$kuid': 'mlzmQ7RWc',
      'label': [
        'Novopavlivska',
        'Новопавлівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopavlivska_2'
    },
    {
      'name': 'novopilska',
      '$kuid': 'TyzVIq42Y',
      'label': [
        'Novopilska',
        'Новопільська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novopilska'
    },
    {
      'name': 'novopokrovska',
      '$kuid': '5pxlpJp7e',
      'label': [
        'Novopokrovska',
        'Новопокровська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopokrovska'
    },
    {
      'name': 'novopokrovska_3',
      '$kuid': 'AsmOEsdYg',
      'label': [
        'Novopokrovska',
        'Новопокровська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopokrovska_3'
    },
    {
      'name': 'novopokrovska_4',
      '$kuid': 'FVEIcrt8M',
      'label': [
        'Novopokrovska',
        'Новопокровська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopokrovska_4'
    },
    {
      'name': 'novoprazka',
      '$kuid': 'e7pWusGWs',
      'label': [
        'Novoprazka',
        'Новопразька'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoprazka'
    },
    {
      'name': 'novopskovska',
      '$kuid': '8bnDJ9QiH',
      'label': [
        'Novopskovska',
        'Новопсковська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopskovska'
    },
    {
      'name': 'novoraiska',
      '$kuid': 'eBpOlxEaw',
      'label': [
        'Novoraiska',
        'Новорайська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoraiska'
    },
    {
      'name': 'novorozdilska',
      '$kuid': 'gFdjuLt0l',
      'label': [
        'Novorozdilska',
        'Новороздільська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novorozdilska'
    },
    {
      'name': 'novosanzharska',
      '$kuid': '1JnoVDZQM',
      'label': [
        'Novosanzharska',
        'Новосанжарська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novosanzharska'
    },
    {
      'name': 'novoselivska',
      '$kuid': 'iiWq388lR',
      'label': [
        'Novoselivska',
        'Новоселівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselivska'
    },
    {
      'name': 'novoselivska_2',
      '$kuid': 'CitMIjlbU',
      'label': [
        'Novoselivska',
        'Новоселівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselivska_2'
    },
    {
      'name': 'novoselivska_3',
      '$kuid': 'BIIMNLL0v',
      'label': [
        'Novoselivska',
        'Новоселівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselivska_3'
    },
    {
      'name': 'novoselytska',
      '$kuid': 'SHUIOhk65',
      'label': [
        'Novoselytska',
        'Новоселицька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselytska'
    },
    {
      'name': 'novosilska',
      '$kuid': 'oZcG0t3TI',
      'label': [
        'Novosilska',
        'Новосільська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novosilska'
    },
    {
      'name': 'novoslobidska',
      '$kuid': 'mBkXKuasT',
      'label': [
        'Novoslobidska',
        'Новослобідська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoslobidska'
    },
    {
      'name': 'novosvitska',
      '$kuid': 'gRBhibzgb',
      'label': [
        'Novosvitska',
        'Новосвітська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novosvitska'
    },
    {
      'name': 'novotroitska',
      '$kuid': 'LsXAFHDNG',
      'label': [
        'Novotroitska',
        'Новотроїцька'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'novotroitska'
    },
    {
      'name': 'novoukrainska',
      '$kuid': 'PGoFn2koF',
      'label': [
        'Novoukrainska',
        'Новоукраїнська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoukrainska'
    },
    {
      'name': 'novounaievetska',
      '$kuid': 'ZaPeZnmZI',
      'label': [
        'Novounaievetska',
        'Новодунаєвецька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'novounaievetska'
    },
    {
      'name': 'novoushytska',
      '$kuid': 'EZhUQzR3j',
      'label': [
        'Novoushytska',
        'Новоушицька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoushytska'
    },
    {
      'name': 'novouspenivska',
      '$kuid': 'Zyum9FaOW',
      'label': [
        'Novouspenivska',
        'Новоуспенівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novouspenivska'
    },
    {
      'name': 'novovasylivska',
      '$kuid': 'TFVrlOkSu',
      'label': [
        'Novovasylivska',
        'Нововасилівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovasylivska'
    },
    {
      'name': 'novovodolazka',
      '$kuid': 'k9fO5ziFA',
      'label': [
        'Novovodolazka',
        'Нововодолазька'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovodolazka'
    },
    {
      'name': 'novovolynska',
      '$kuid': 'EO4MRix7H',
      'label': [
        'Novovolynska',
        'Нововолинська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovolynska'
    },
    {
      'name': 'novovorontsovska',
      '$kuid': 'lda3uC193',
      'label': [
        'Novovorontsovska',
        'Нововоронцовська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovorontsovska'
    },
    {
      'name': 'novozhylivska',
      '$kuid': 'NCh0raqCQ',
      'label': [
        'Novozhylivska',
        'Новожилівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'novozhylivska'
    },
    {
      'name': 'novytska',
      '$kuid': 'tVKpNtrcc',
      'label': [
        'Novytska',
        'Новицька'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'novytska'
    },
    {
      'name': 'nyvotrudivska',
      '$kuid': 'RAttb3F3X',
      'label': [
        'Nyvotrudivska',
        'Нивотрудівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'nyvotrudivska'
    },
    {
      'name': 'nyzhnoduvanska',
      '$kuid': 'l6xXsnVWh',
      'label': [
        'Nyzhnoduvanska',
        'Нижньодуванська'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnoduvanska'
    },
    {
      'name': 'nyzhnohirska',
      '$kuid': 'oVrQHu5H6',
      'label': [
        'Nyzhnohirska',
        'Нижньогірська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnohirska'
    },
    {
      'name': 'nyzhnosirohozka',
      '$kuid': 'HFZo4uyiu',
      'label': [
        'Nyzhnosirohozka',
        'Нижньосірогозька'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnosirohozka'
    },
    {
      'name': 'nyzhnosyrovatska',
      '$kuid': 'bTYYeFgcE',
      'label': [
        'Nyzhnosyrovatska',
        'Нижньосироватська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnosyrovatska'
    },
    {
      'name': 'nyzhnoteplivska',
      '$kuid': 'p0rN6jHgt',
      'label': [
        'Nyzhnoteplivska',
        'Нижньотеплівська'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnoteplivska'
    },
    {
      'name': 'nyzhnoverbizka',
      '$kuid': 'UoxJwTuzz',
      'label': [
        'Nyzhnoverbizka',
        'Нижньовербізька'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnoverbizka'
    },
    {
      'name': 'nyzhnovoritska',
      '$kuid': 'aHJnIRaMV',
      'label': [
        'Nyzhnovoritska',
        'Нижньоворітська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnovoritska'
    },
    {
      'name': 'obertynska',
      '$kuid': 'ytHb6e1bj',
      'label': [
        'Obertynska',
        'Обертинська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'obertynska'
    },
    {
      'name': 'obodivska',
      '$kuid': 'bFPZgNAIP',
      'label': [
        'Obodivska',
        'Ободівська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'obodivska'
    },
    {
      'name': 'obolonska',
      '$kuid': 'UUGg7amLS',
      'label': [
        'Obolonska',
        'Оболонська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'obolonska'
    },
    {
      'name': 'obroshynska',
      '$kuid': 'lJW0axJjQ',
      'label': [
        'Obroshynska',
        'Оброшинська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'obroshynska'
    },
    {
      'name': 'obukhivska',
      '$kuid': 'La7jaT7Fw',
      'label': [
        'Obukhivska',
        'Обухівська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'obukhivska'
    },
    {
      'name': 'obukhivska_2',
      '$kuid': '8WftITN3i',
      'label': [
        'Obukhivska',
        'Обухівська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'obukhivska_2'
    },
    {
      'name': 'ochakivska',
      '$kuid': 'P9aC1Gax3',
      'label': [
        'Ochakivska',
        'Очаківська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ochakivska'
    },
    {
      'name': 'ocheretynska',
      '$kuid': 'KbOxKe7EF',
      'label': [
        'Ocheretynska',
        'Очеретинська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'ocheretynska'
    },
    {
      'name': 'odeska',
      '$kuid': 'j5RKJ8F0N',
      'label': [
        'Odeska',
        'Одеська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'odeska'
    },
    {
      'name': 'okhotnykivska',
      '$kuid': 'SebGPIFcr',
      'label': [
        'Okhotnykivska',
        'Охотниківська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'okhotnykivska'
    },
    {
      'name': 'okhotska',
      '$kuid': 'nbiChbnBP',
      'label': [
        'Okhotska',
        'Охотська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'okhotska'
    },
    {
      'name': 'okhtyrska',
      '$kuid': 'vgT36uVBj',
      'label': [
        'Okhtyrska',
        'Охтирська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'okhtyrska'
    },
    {
      'name': 'oknianska',
      '$kuid': '4xYx9Ntog',
      'label': [
        'Oknianska',
        'Окнянська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'oknianska'
    },
    {
      'name': 'oktiabrska',
      '$kuid': 'kVD9lzuzO',
      'label': [
        'Oktiabrska',
        'Октябрська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'oktiabrska'
    },
    {
      'name': 'oktiabrska_2',
      '$kuid': 'C5G5t41Mw',
      'label': [
        'Oktiabrska',
        'Октябрська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oktiabrska_2'
    },
    {
      'name': 'oktiabrska_3',
      '$kuid': 'eYoUuS6uN',
      'label': [
        'Oktiabrska',
        'Октябрська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oktiabrska_3'
    },
    {
      'name': 'okunivska',
      '$kuid': 'hT5aH4W11',
      'label': [
        'Okunivska',
        'Окунівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'okunivska'
    },
    {
      'name': 'oleksandriiska',
      '$kuid': 'JP5Q0J7pS',
      'label': [
        'Oleksandriiska',
        'Олександрійська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandriiska'
    },
    {
      'name': 'oleksandriiska_2',
      '$kuid': 'BAeGiZkl0',
      'label': [
        'Oleksandriiska',
        'Олександрійська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandriiska_2'
    },
    {
      'name': 'oleksandrivska',
      '$kuid': 'y5Gz9I7Er',
      'label': [
        'Oleksandrivska',
        'Олександрівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska'
    },
    {
      'name': 'oleksandrivska_3',
      '$kuid': 'bdoiqXwvZ',
      'label': [
        'Oleksandrivska',
        'Олександрівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_3'
    },
    {
      'name': 'oleksandrivska_4',
      '$kuid': 'bniZlEDeQ',
      'label': [
        'Oleksandrivska',
        'Олександрівська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_4'
    },
    {
      'name': 'oleksandrivska_5',
      '$kuid': 'lljWIwe9v',
      'label': [
        'Oleksandrivska',
        'Олександрівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_5'
    },
    {
      'name': 'oleksandrivska_6',
      '$kuid': 'OIxfuZuNw',
      'label': [
        'Oleksandrivska',
        'Олександрівська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_6'
    },
    {
      'name': 'oleksiivska',
      '$kuid': 'fO3ZvRrY3',
      'label': [
        'Oleksiivska',
        'Олексіївська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksiivska'
    },
    {
      'name': 'oleksiivska_2',
      '$kuid': 'OUJGrFNK0',
      'label': [
        'Oleksiivska',
        'Олексіївська'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksiivska_2'
    },
    {
      'name': 'olenivska',
      '$kuid': '5UqHHfATy',
      'label': [
        'Olenivska',
        'Оленівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'olenivska'
    },
    {
      'name': 'oleshanska',
      '$kuid': 'DCQxpgAph',
      'label': [
        'Oleshanska',
        'Олешанська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleshanska'
    },
    {
      'name': 'oleshkivska',
      '$kuid': 'PKH6RupFB',
      'label': [
        'Oleshkivska',
        'Олешківська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleshkivska'
    },
    {
      'name': 'olevska',
      '$kuid': '69drJYEfr',
      'label': [
        'Olevska',
        'Олевська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'olevska'
    },
    {
      'name': 'olhopilska',
      '$kuid': '8Wri9jaBu',
      'label': [
        'Olhopilska',
        'Ольгопільська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'olhopilska'
    },
    {
      'name': 'olhynska',
      '$kuid': 'OhSHh9E72',
      'label': [
        'Olhynska',
        'Ольгинська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'olhynska'
    },
    {
      'name': 'oliivska',
      '$kuid': 'sIIX43M4I',
      'label': [
        'Oliivska',
        'Оліївська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'oliivska'
    },
    {
      'name': 'olshanska',
      '$kuid': 'mSdFAA8na',
      'label': [
        'Olshanska',
        'Ольшанська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'olshanska'
    },
    {
      'name': 'olyshivska',
      '$kuid': 'Rz6qrP4EB',
      'label': [
        'Olyshivska',
        'Олишівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'olyshivska'
    },
    {
      'name': 'olytska',
      '$kuid': 'Owqqlommz',
      'label': [
        'Olytska',
        'Олицька'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'olytska'
    },
    {
      'name': 'omelianivska',
      '$kuid': 'UqvXqwJ52',
      'label': [
        'Omelianivska',
        'Омелянівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'omelianivska'
    },
    {
      'name': 'omelnytska',
      '$kuid': '8iNjWHfPW',
      'label': [
        'Omelnytska',
        'Омельницька'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'omelnytska'
    },
    {
      'name': 'onokivska',
      '$kuid': 'Mz9z8Ehof',
      'label': [
        'Onokivska',
        'Оноківська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'onokivska'
    },
    {
      'name': 'onufriivska',
      '$kuid': 'AL1jLQXyc',
      'label': [
        'Onufriivska',
        'Онуфріївська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'onufriivska'
    },
    {
      'name': 'opishnianska',
      '$kuid': 'tuLwHDk37',
      'label': [
        'Opishnianska',
        'Опішнянська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'opishnianska'
    },
    {
      'name': 'orativska',
      '$kuid': 'ozr8D0qj6',
      'label': [
        'Orativska',
        'Оратівська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'orativska'
    },
    {
      'name': 'ordzhonikidzevska',
      '$kuid': 'cqhQUspUc',
      'label': [
        'Ordzhonikidzevska',
        'Орджонікідзевська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'ordzhonikidzevska'
    },
    {
      'name': 'orikhivska',
      '$kuid': '40Rv7qEiB',
      'label': [
        'Orikhivska',
        'Оріхівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'orikhivska'
    },
    {
      'name': 'orikhivska_2',
      '$kuid': '2TVeHZLY7',
      'label': [
        'Orikhivska',
        'Оріхівська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'orikhivska_2'
    },
    {
      'name': 'orlivska',
      '$kuid': 'qN4JHjN8H',
      'label': [
        'Orlivska',
        'Орлівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'orlivska'
    },
    {
      'name': 'orynynska',
      '$kuid': 'SCFUczyY9',
      'label': [
        'Orynynska',
        'Орининська'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'orynynska'
    },
    {
      'name': 'orzhytska',
      '$kuid': 'F13sfJDXc',
      'label': [
        'Orzhytska',
        'Оржицька'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'orzhytska'
    },
    {
      'name': 'oskilska',
      '$kuid': 'T7hcL7Bdj',
      'label': [
        'Oskilska',
        'Оскільська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'oskilska'
    },
    {
      'name': 'ostaninska',
      '$kuid': 'V1yEpn3Ql',
      'label': [
        'Ostaninska',
        'Останінська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostaninska'
    },
    {
      'name': 'osterska',
      '$kuid': '4irRHwVsI',
      'label': [
        'Osterska',
        'Остерська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'osterska'
    },
    {
      'name': 'ostrovska',
      '$kuid': 'qYT079lMl',
      'label': [
        'Ostrovska',
        'Островська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrovska'
    },
    {
      'name': 'ostrozhetska',
      '$kuid': 'hYuRRkBeg',
      'label': [
        'Ostrozhetska',
        'Острожецька'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrozhetska'
    },
    {
      'name': 'ostrozka',
      '$kuid': 'bn7Zj9zgh',
      'label': [
        'Ostrozka',
        'Острозька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrozka'
    },
    {
      'name': 'ostrytska',
      '$kuid': 'dCkIA2AVe',
      'label': [
        'Ostrytska',
        'Острицька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrytska'
    },
    {
      'name': 'osypenkivska',
      '$kuid': '6QieIQttt',
      'label': [
        'Osypenkivska',
        'Осипенківська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'osypenkivska'
    },
    {
      'name': 'otyniiska',
      '$kuid': '6T1CwOgPq',
      'label': [
        'Otyniiska',
        'Отинійська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'otyniiska'
    },
    {
      'name': 'ovadnivska',
      '$kuid': 'pImUVIu4q',
      'label': [
        'Ovadnivska',
        'Оваднівська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ovadnivska'
    },
    {
      'name': 'ovidiopolska',
      '$kuid': 'I1ilnuEZX',
      'label': [
        'Ovidiopolska',
        'Овідіопольська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'ovidiopolska'
    },
    {
      'name': 'ovrutska',
      '$kuid': 'Q9RkhgkLB',
      'label': [
        'Ovrutska',
        'Овруцька'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ovrutska'
    },
    {
      'name': 'ozernianska',
      '$kuid': 'PyzCyA2i7',
      'label': [
        'Ozernianska',
        'Озернянська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ozernianska'
    },
    {
      'name': 'pakharivska',
      '$kuid': 'yw7AAvToQ',
      'label': [
        'Pakharivska',
        'Пахарівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pakharivska'
    },
    {
      'name': 'palanska',
      '$kuid': 'wKkybiEQQ',
      'label': [
        'Palanska',
        'Паланська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'palanska'
    },
    {
      'name': 'pantaivska',
      '$kuid': 'A6SOUxLcq',
      'label': [
        'Pantaivska',
        'Пантаївська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pantaivska'
    },
    {
      'name': 'parafiivska',
      '$kuid': 'EvyOspLTM',
      'label': [
        'Parafiivska',
        'Парафіївська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'parafiivska'
    },
    {
      'name': 'partenitska',
      '$kuid': 'RQ1rDiv6J',
      'label': [
        'Partenitska',
        'Партенітська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'partenitska'
    },
    {
      'name': 'partyzanska',
      '$kuid': '4TKv0bjKs',
      'label': [
        'Partyzanska',
        'Партизанська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'partyzanska'
    },
    {
      'name': 'pasichnianska',
      '$kuid': 'c1sJw67OB',
      'label': [
        'Pasichnianska',
        'Пасічнянська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'pasichnianska'
    },
    {
      'name': 'pavlivska',
      '$kuid': 'Ed5mw4WdF',
      'label': [
        'Pavlivska',
        'Павлівська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlivska'
    },
    {
      'name': 'pavlivska_2',
      '$kuid': 'NzXQTIbEb',
      'label': [
        'Pavlivska',
        'Павлівська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlivska_2'
    },
    {
      'name': 'pavlivska_3',
      '$kuid': 'bDO4jhIq2',
      'label': [
        'Pavlivska',
        'Павлівська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlivska_3'
    },
    {
      'name': 'pavlohradska',
      '$kuid': 'wKJ7CCLyw',
      'label': [
        'Pavlohradska',
        'Павлоградська'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlohradska'
    },
    {
      'name': 'pechenizhynska',
      '$kuid': 'eTK0tRYWl',
      'label': [
        'Pechenizhynska',
        'Печеніжинська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pechenizhynska'
    },
    {
      'name': 'pechenizka',
      '$kuid': '44e0UjOuf',
      'label': [
        'Pechenizka',
        'Печенізька'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pechenizka'
    },
    {
      'name': 'perechynska',
      '$kuid': 'f7SgfgIgS',
      'label': [
        'Perechynska',
        'Перечинська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'perechynska'
    },
    {
      'name': 'perehinska',
      '$kuid': 'c5CIWb4eh',
      'label': [
        'Perehinska',
        'Перегінська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'perehinska'
    },
    {
      'name': 'perehonivska',
      '$kuid': 'd9xwlRzGb',
      'label': [
        'Perehonivska',
        'Перегонівська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'perehonivska'
    },
    {
      'name': 'pereiaslavсska',
      '$kuid': '1F0RHcykO',
      'label': [
        'Pereiaslavсska',
        'Переяславська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pereiaslavсska'
    },
    {
      'name': 'peremyshlianska',
      '$kuid': '0DuJIT2fM',
      'label': [
        'Peremyshlianska',
        'Перемишлянська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'peremyshlianska'
    },
    {
      'name': 'pererislianska',
      '$kuid': 'JBH33FBDX',
      'label': [
        'Pererislianska',
        'Переріслянська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'pererislianska'
    },
    {
      'name': 'pereshchepynska',
      '$kuid': 'cFaNbvsin',
      'label': [
        'Pereshchepynska',
        'Перещепинська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pereshchepynska'
    },
    {
      'name': 'perovska',
      '$kuid': 'A2SVNu9co',
      'label': [
        'Perovska',
        'Перовська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'perovska'
    },
    {
      'name': 'pershotravenska',
      '$kuid': 'h8wWkQ4Bu',
      'label': [
        'Pershotravenska',
        'Першотравенська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pershotravenska'
    },
    {
      'name': 'pershotravnevska',
      '$kuid': 'R9onkK9VH',
      'label': [
        'Pershotravnevska',
        'Першотравневська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pershotravnevska'
    },
    {
      'name': 'pervomaiska',
      '$kuid': 'lBEOZgzPx',
      'label': [
        'Pervomaiska',
        'Первомайська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska'
    },
    {
      'name': 'pervomaiska_2',
      '$kuid': 'ZssvoDKD6',
      'label': [
        'Pervomaiska',
        'Первомайська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_2'
    },
    {
      'name': 'pervomaiska_3',
      '$kuid': 'amFgg0Qud',
      'label': [
        'Pervomaiska',
        'Первомайська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_3'
    },
    {
      'name': 'pervomaiska_4',
      '$kuid': 'ONpm2fvts',
      'label': [
        'Pervomaiska',
        'Первомайська'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_4'
    },
    {
      'name': 'pervomaiska_5',
      '$kuid': 'h9MrF67jx',
      'label': [
        'Pervomaiska',
        'Первомайська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_5'
    },
    {
      'name': 'pervomaiska_6',
      '$kuid': 'bKRETh8Wg',
      'label': [
        'Pervomaiska',
        'Первомайська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_6'
    },
    {
      'name': 'pervozvanivska',
      '$kuid': 'vOYDDMABx',
      'label': [
        'Pervozvanivska',
        'Первозванівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervozvanivska'
    },
    {
      'name': 'petrivska',
      '$kuid': 'whQADRrnB',
      'label': [
        'Petrivska',
        'Петрівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivska'
    },
    {
      'name': 'petrivska_2',
      '$kuid': 'n2WjXn7ju',
      'label': [
        'Petrivska',
        'Петрівська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivska_2'
    },
    {
      'name': 'petrivska_3',
      '$kuid': 'UWF1OIxMM',
      'label': [
        'Petrivska',
        'Петрівська'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivska_3'
    },
    {
      'name': 'petrivsko-romenska',
      '$kuid': 'ELRfgAnUp',
      'label': [
        'Petrivsko-Romenska',
        'Петрівсько-Роменська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivsko-romenska'
    },
    {
      'name': 'petro-mykhailivska',
      '$kuid': 'ddV6iUtm1',
      'label': [
        'Petro-Mykhailivska',
        'Петро-Михайлівська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'petro-mykhailivska'
    },
    {
      'name': 'petropavlivska',
      '$kuid': '7b1Hwzdy2',
      'label': [
        'Petropavlivska',
        'Петропавлівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'petropavlivska'
    },
    {
      'name': 'petropavlivska_2',
      '$kuid': 'g4DqLFOGD',
      'label': [
        'Petropavlivska',
        'Петропавлівська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'petropavlivska_2'
    },
    {
      'name': 'petropavlivska_3',
      '$kuid': 'M939kAR0g',
      'label': [
        'Petropavlivska',
        'Петропавлівська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'petropavlivska_3'
    },
    {
      'name': 'petrovetska',
      '$kuid': 'xxl3GXzDj',
      'label': [
        'Petrovetska',
        'Петровецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrovetska'
    },
    {
      'name': 'petrovirivska',
      '$kuid': 'D5gAne1MC',
      'label': [
        'Petrovirivska',
        'Петровірівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrovirivska'
    },
    {
      'name': 'petrykivska',
      '$kuid': 'AgWunb4Oz',
      'label': [
        'Petrykivska',
        'Петриківська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrykivska'
    },
    {
      'name': 'piadytska',
      '$kuid': 'JzlxISbrg',
      'label': [
        'Piadytska',
        'П\'ядицька'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'piadytska'
    },
    {
      'name': 'piatykhatska',
      '$kuid': 'KCBfxoZzQ',
      'label': [
        'Piatykhatska',
        'П\'ятихатська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'piatykhatska'
    },
    {
      'name': 'piatykhatska_2',
      '$kuid': '4oE52OWKO',
      'label': [
        'Piatykhatska',
        'П\'ятихатська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'piatykhatska_2'
    },
    {
      'name': 'pidberiztsivska',
      '$kuid': 'kmKUhkxui',
      'label': [
        'Pidberiztsivska',
        'Підберізцівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidberiztsivska'
    },
    {
      'name': 'pidhaichykivska',
      '$kuid': '1gtdqBFiG',
      'label': [
        'Pidhaichykivska',
        'Підгайчиківська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhaichykivska'
    },
    {
      'name': 'pidhaietska',
      '$kuid': '9Zogq3HsO',
      'label': [
        'Pidhaietska',
        'Підгаєцька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhaietska'
    },
    {
      'name': 'pidhaitsivska',
      '$kuid': '7cAhsl4EB',
      'label': [
        'Pidhaitsivska',
        'Підгайцівська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhaitsivska'
    },
    {
      'name': 'pidhorodnenska',
      '$kuid': '04MFUUKwq',
      'label': [
        'Pidhorodnenska',
        'Підгородненська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhorodnenska'
    },
    {
      'name': 'pidhorodnianska',
      '$kuid': 'MjEQkzWJn',
      'label': [
        'Pidhorodnianska',
        'Підгороднянська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhorodnianska'
    },
    {
      'name': 'pidkaminska',
      '$kuid': 'nbVmtAGeB',
      'label': [
        'Pidkaminska',
        'Підкамінська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidkaminska'
    },
    {
      'name': 'pidloztsivska',
      '$kuid': 'UIHzFmzep',
      'label': [
        'Pidloztsivska',
        'Підлозцівська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidloztsivska'
    },
    {
      'name': 'pidvolochyska',
      '$kuid': 'MMHZeIH3i',
      'label': [
        'Pidvolochyska',
        'Підволочиська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidvolochyska'
    },
    {
      'name': 'pidvysotska',
      '$kuid': 'bgRBLlSG3',
      'label': [
        'Pidvysotska',
        'Підвисоцька'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidvysotska'
    },
    {
      'name': 'pirnivska',
      '$kuid': '4gIPlv0Ei',
      'label': [
        'Pirnivska',
        'Пірнівська'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'pirnivska'
    },
    {
      'name': 'pishchanivska',
      '$kuid': 'lfcBrajx9',
      'label': [
        'Pishchanivska',
        'Піщанівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanivska'
    },
    {
      'name': 'pishchanobridska',
      '$kuid': 'eUgnfT3D5',
      'label': [
        'Pishchanobridska',
        'Піщанобрідська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanobridska'
    },
    {
      'name': 'pishchanska',
      '$kuid': 'KndMRy0Tt',
      'label': [
        'Pishchanska',
        'Піщанська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska'
    },
    {
      'name': 'pishchanska_2',
      '$kuid': 'Y8UyDeIqw',
      'label': [
        'Pishchanska',
        'Піщанська'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_2'
    },
    {
      'name': 'pishchanska_3',
      '$kuid': 'Hv8waRKey',
      'label': [
        'Pishchanska',
        'Піщанська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_3'
    },
    {
      'name': 'pishchanska_4',
      '$kuid': 'xe64G0fIM',
      'label': [
        'Pishchanska',
        'Піщанська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_4'
    },
    {
      'name': 'pishchanska_5',
      '$kuid': '4HuTeGtR3',
      'label': [
        'Pishchanska',
        'Піщанська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_5'
    },
    {
      'name': 'pishchivska',
      '$kuid': 'HnGYZK8Jq',
      'label': [
        'Pishchivska',
        'Піщівська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchivska'
    },
    {
      'name': 'piskivska',
      '$kuid': 'SoYwCszw2',
      'label': [
        'Piskivska',
        'Пісківська'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'piskivska'
    },
    {
      'name': 'pisochynska',
      '$kuid': 'XyUAdRv5A',
      'label': [
        'Pisochynska',
        'Пісочинська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pisochynska'
    },
    {
      'name': 'pivdennomiska',
      '$kuid': 'L8xGx6sgr',
      'label': [
        'Pivdennomiska',
        'Південноміська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pivdennomiska'
    },
    {
      'name': 'plakhtiivska',
      '$kuid': 'JHmjDgfcE',
      'label': [
        'Plakhtiivska',
        'Плахтіївська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'plakhtiivska'
    },
    {
      'name': 'plodivska',
      '$kuid': 'cRCTydzx2',
      'label': [
        'Plodivska',
        'Плодівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'plodivska'
    },
    {
      'name': 'plodorodnenska',
      '$kuid': 'kptNRwvCt',
      'label': [
        'Plodorodnenska',
        'Плодородненська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'plodorodnenska'
    },
    {
      'name': 'pluzhnenska',
      '$kuid': 'IS4KOT9nl',
      'label': [
        'Pluzhnenska',
        'Плужненська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pluzhnenska'
    },
    {
      'name': 'plyskivska',
      '$kuid': 'ARLczNd2b',
      'label': [
        'Plyskivska',
        'Плисківська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'plyskivska'
    },
    {
      'name': 'pobiednenska',
      '$kuid': 'HC2lLnUqK',
      'label': [
        'Pobiednenska',
        'Побєдненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pobiednenska'
    },
    {
      'name': 'pobuzka',
      '$kuid': 'VJxfqWzWA',
      'label': [
        'Pobuzka',
        'Побузька'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pobuzka'
    },
    {
      'name': 'pochaivska',
      '$kuid': 'QwVGUVjOE',
      'label': [
        'Pochaivska',
        'Почаївська'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'pochaivska'
    },
    {
      'name': 'pochetnenska',
      '$kuid': 'Jw0DeZA6B',
      'label': [
        'Pochetnenska',
        'Почетненська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'pochetnenska'
    },
    {
      'name': 'podilska',
      '$kuid': 'Df5NvfD0a',
      'label': [
        'Podilska',
        'Подільська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'podilska'
    },
    {
      'name': 'pohrebyshchenska',
      '$kuid': 'UJdM7dGi8',
      'label': [
        'Pohrebyshchenska',
        'Погребищенська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'pohrebyshchenska'
    },
    {
      'name': 'pokrovska',
      '$kuid': 'B8ftScBli',
      'label': [
        'Pokrovska',
        'Покровська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska'
    },
    {
      'name': 'pokrovska_2',
      '$kuid': 'kU9ToAxha',
      'label': [
        'Pokrovska',
        'Покровська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska_2'
    },
    {
      'name': 'pokrovska_3',
      '$kuid': 'yr83hJi0r',
      'label': [
        'Pokrovska',
        'Покровська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska_3'
    },
    {
      'name': 'pokrovska_4',
      '$kuid': 'mhGsHkIgi',
      'label': [
        'Pokrovska',
        'Покровська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska_4'
    },
    {
      'name': 'polianska',
      '$kuid': 'svavJ2fQr',
      'label': [
        'Polianska',
        'Полянська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'polianska'
    },
    {
      'name': 'polianytska',
      '$kuid': 'nNcaWkovU',
      'label': [
        'Polianytska',
        'Поляницька'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'polianytska'
    },
    {
      'name': 'poliska',
      '$kuid': 'kd8eLgkmU',
      'label': [
        'Poliska',
        'Поліська'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'poliska'
    },
    {
      'name': 'polohivska',
      '$kuid': 'tSIJeKpqv',
      'label': [
        'Polohivska',
        'Пологівська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'polohivska'
    },
    {
      'name': 'polonska',
      '$kuid': '9i7Ho1RDR',
      'label': [
        'Polonska',
        'Полонська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'polonska'
    },
    {
      'name': 'poltavska_2',
      '$kuid': 'BVvGOugUZ',
      'label': [
        'Poltavska',
        'Полтавська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'poltavska_2'
    },
    {
      'name': 'poltavska_3',
      '$kuid': 'j1mPufas2',
      'label': [
        'Poltavska',
        'Полтавська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'poltavska_3'
    },
    {
      'name': 'polytska',
      '$kuid': 'Gmf04IxhQ',
      'label': [
        'Polytska',
        'Полицька'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'polytska'
    },
    {
      'name': 'pomichnianska',
      '$kuid': 'huyQyLu6U',
      'label': [
        'Pomichnianska',
        'Помічнянська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'pomichnianska'
    },
    {
      'name': 'pomorianska',
      '$kuid': '3u71acngw',
      'label': [
        'Pomorianska',
        'Поморянська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pomorianska'
    },
    {
      'name': 'poninkivska',
      '$kuid': 'vXk3O19sx',
      'label': [
        'Poninkivska',
        'Понінківська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'poninkivska'
    },
    {
      'name': 'ponornytska',
      '$kuid': 'Rxqgc1cqs',
      'label': [
        'Ponornytska',
        'Понорницька'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'ponornytska'
    },
    {
      'name': 'popasnianska',
      '$kuid': 'lNIICi2KQ',
      'label': [
        'Popasnianska',
        'Попаснянська'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'popasnianska'
    },
    {
      'name': 'popelnastivska',
      '$kuid': 'eAUUdrKsN',
      'label': [
        'Popelnastivska',
        'Попельнастівська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'popelnastivska'
    },
    {
      'name': 'popilnianska',
      '$kuid': 'vMmq5PFW1',
      'label': [
        'Popilnianska',
        'Попільнянська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'popilnianska'
    },
    {
      'name': 'popivska',
      '$kuid': 'Hg8bnRljw',
      'label': [
        'Popivska',
        'Попівська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'popivska'
    },
    {
      'name': 'poromivska',
      '$kuid': 'Bw7VDbqyM',
      'label': [
        'Poromivska',
        'Поромівська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'poromivska'
    },
    {
      'name': 'poshtivska',
      '$kuid': '8LkyAgXTp',
      'label': [
        'Poshtivska',
        'Поштівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'poshtivska'
    },
    {
      'name': 'potiivska',
      '$kuid': '93Lx78GOg',
      'label': [
        'Potiivska',
        'Потіївська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'potiivska'
    },
    {
      'name': 'povchanska',
      '$kuid': 'iX01vaeag',
      'label': [
        'Povchanska',
        'Повчанська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'povchanska'
    },
    {
      'name': 'povorska',
      '$kuid': '94TZ2yfCE',
      'label': [
        'Povorska',
        'Поворська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'povorska'
    },
    {
      'name': 'pozharska',
      '$kuid': 'Gf70EK2wp',
      'label': [
        'Pozharska',
        'Пожарська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pozharska'
    },
    {
      'name': 'pravdivska',
      '$kuid': 'QspyOhDhv',
      'label': [
        'Pravdivska',
        'Правдівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'pravdivska'
    },
    {
      'name': 'preobrazhenska',
      '$kuid': 'pEujrEDyJ',
      'label': [
        'Preobrazhenska',
        'Преображенська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'preobrazhenska'
    },
    {
      'name': 'prostornenska',
      '$kuid': 'QKLN6a0r3',
      'label': [
        'Prostornenska',
        'Просторненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'prostornenska'
    },
    {
      'name': 'prudivska',
      '$kuid': 'Rn8AAyQ9q',
      'label': [
        'Prudivska',
        'Прудівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'prudivska'
    },
    {
      'name': 'pryazovska',
      '$kuid': 'whMMJNVjc',
      'label': [
        'Pryazovska',
        'Приазовська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryazovska'
    },
    {
      'name': 'prybuzhanivska',
      '$kuid': '1QAyc9w6r',
      'label': [
        'Prybuzhanivska',
        'Прибужанівська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'prybuzhanivska'
    },
    {
      'name': 'prybuzka',
      '$kuid': '3RBfVHMr0',
      'label': [
        'Prybuzka',
        'Прибузька'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'prybuzka'
    },
    {
      'name': 'pryiutivska',
      '$kuid': '4fuMK8Cf9',
      'label': [
        'Pryiutivska',
        'Приютівська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryiutivska'
    },
    {
      'name': 'prylisnenska',
      '$kuid': '8yLGeHkKX',
      'label': [
        'Prylisnenska',
        'Прилісненська'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'prylisnenska'
    },
    {
      'name': 'prylutska',
      '$kuid': 'Ej8zjdhcg',
      'label': [
        'Prylutska',
        'Прилуцька'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'prylutska'
    },
    {
      'name': 'prymorska',
      '$kuid': 'TJpq7pUDF',
      'label': [
        'Prymorska',
        'Приморська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'prymorska'
    },
    {
      'name': 'prymorska_2',
      '$kuid': 'AHmDBekoT',
      'label': [
        'Prymorska',
        'Приморська'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'prymorska_2'
    },
    {
      'name': 'pryozernivska',
      '$kuid': 'vM5rf2dHC',
      'label': [
        'Pryozernivska',
        'Приозернівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryozernivska'
    },
    {
      'name': 'pryshybska',
      '$kuid': '8UeliPCQc',
      'label': [
        'Pryshybska',
        'Пришибська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryshybska'
    },
    {
      'name': 'prystolychna',
      '$kuid': '8aNG06g9T',
      'label': [
        'Prystolychna',
        'Пристолична'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'prystolychna'
    },
    {
      'name': 'prysyvaska',
      '$kuid': 'hmNGIsZSC',
      'label': [
        'Prysyvaska',
        'Присиваська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'prysyvaska'
    },
    {
      'name': 'pryvilnenska',
      '$kuid': 'aJXHwOjSN',
      'label': [
        'Pryvilnenska',
        'Привільненська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvilnenska'
    },
    {
      'name': 'pryvilnenska_2',
      '$kuid': '4hgcB1ui8',
      'label': [
        'Pryvilnenska',
        'Привільненська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvilnenska_2'
    },
    {
      'name': 'pryvitnenska_3',
      '$kuid': 'bWpSUXirl',
      'label': [
        'Pryvitnenska',
        'Привітненська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvitnenska_3'
    },
    {
      'name': 'pryvitnenska_4',
      '$kuid': 'si8gEpeNX',
      'label': [
        'Pryvitnenska',
        'Привітненська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvitnenska_4'
    },
    {
      'name': 'pshenychnenska',
      '$kuid': 'Rpf8kOFME',
      'label': [
        'Pshenychnenska',
        'Пшеничненська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'pshenychnenska'
    },
    {
      'name': 'pulynska',
      '$kuid': 'UQeQWlYNr',
      'label': [
        'Pulynska',
        'Пулинська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'pulynska'
    },
    {
      'name': 'pushkinska',
      '$kuid': 'udiESIwRz',
      'label': [
        'Pushkinska',
        'Пушкінська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pushkinska'
    },
    {
      'name': 'pustomytivska',
      '$kuid': 'y2qg1EOzp',
      'label': [
        'Pustomytivska',
        'Пустомитівська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pustomytivska'
    },
    {
      'name': 'putylska',
      '$kuid': 'fEYIxuiP6',
      'label': [
        'Putylska',
        'Путильська'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'putylska'
    },
    {
      'name': 'putyvlska',
      '$kuid': 'hHxARRYVt',
      'label': [
        'Putyvlska',
        'Путивльська'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'putyvlska'
    },
    {
      'name': 'pyiterfolvivska',
      '$kuid': 'cEu6Ilc60',
      'label': [
        'Pyiterfolvivska',
        'Пийтерфолвівська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pyiterfolvivska'
    },
    {
      'name': 'pylypetska',
      '$kuid': '4bZ6Rv2Le',
      'label': [
        'Pylypetska',
        'Пилипецька'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'pylypetska'
    },
    {
      'name': 'pyriatynska',
      '$kuid': 'DJwDvrgQA',
      'label': [
        'Pyriatynska',
        'Пирятинська'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'pyriatynska'
    },
    {
      'name': 'radekhivska',
      '$kuid': 'X0MWO8tsC',
      'label': [
        'Radekhivska',
        'Радехівська'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'radekhivska'
    },
    {
      'name': 'radomyshlska',
      '$kuid': 'NiQq2XsuN',
      'label': [
        'Radomyshlska',
        'Радомишльська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'radomyshlska'
    },
    {
      'name': 'radsadivska',
      '$kuid': '0DNS9M0mz',
      'label': [
        'Radsadivska',
        'Радсадівська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'radsadivska'
    },
    {
      'name': 'radyvylivska',
      '$kuid': 'r2kE7Nxmi',
      'label': [
        'Radyvylivska',
        'Радивилівська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'radyvylivska'
    },
    {
      'name': 'rafalivska',
      '$kuid': 'BG7Whj6mG',
      'label': [
        'Rafalivska',
        'Рафалівська'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'rafalivska'
    },
    {
      'name': 'raihorodotska',
      '$kuid': 'Y5SigxS5K',
      'label': [
        'Raihorodotska',
        'Райгородоцька'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'raihorodotska'
    },
    {
      'name': 'raihorodska',
      '$kuid': 'CY5JrJSCO',
      'label': [
        'Raihorodska',
        'Райгородська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'raihorodska'
    },
    {
      'name': 'raivska',
      '$kuid': 'Utbhc9PMb',
      'label': [
        'Raivska',
        'Раївська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'raivska'
    },
    {
      'name': 'rakhivska',
      '$kuid': 'NlaLum6a0',
      'label': [
        'Rakhivska',
        'Рахівська'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rakhivska'
    },
    {
      'name': 'ralivska',
      '$kuid': 'so3055g2A',
      'label': [
        'Ralivska',
        'Ралівська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'ralivska'
    },
    {
      'name': 'ratnivska',
      '$kuid': 'eZHxmyBHQ',
      'label': [
        'Ratnivska',
        'Ратнівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'ratnivska'
    },
    {
      'name': 'raukhivska',
      '$kuid': 'HitPhi7mh',
      'label': [
        'Raukhivska',
        'Раухівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'raukhivska'
    },
    {
      'name': 'rava-ruska',
      '$kuid': '0lYLYzxTs',
      'label': [
        'Rava-Ruska',
        'Рава-Руська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rava-ruska'
    },
    {
      'name': 'reniiska',
      '$kuid': 'rtXffEkQr',
      'label': [
        'Reniiska',
        'Ренійська'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'reniiska'
    },
    {
      'name': 'reshetylivska',
      '$kuid': 'ziIjGUaZB',
      'label': [
        'Reshetylivska',
        'Решетилівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'reshetylivska'
    },
    {
      'name': 'richkivska',
      '$kuid': 'cJ9GPSBy9',
      'label': [
        'Richkivska',
        'Річківська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'richkivska'
    },
    {
      'name': 'ripkynska',
      '$kuid': 'H4HYHFlGH',
      'label': [
        'Ripkynska',
        'Ріпкинська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ripkynska'
    },
    {
      'name': 'rivnenska_2',
      '$kuid': 'GzjspTkkk',
      'label': [
        'Rivnenska',
        'Рівненська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnenska_2'
    },
    {
      'name': 'rivnenska_3',
      '$kuid': 'pyDT6AbCR',
      'label': [
        'Rivnenska',
        'Рівненська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnenska_3'
    },
    {
      'name': 'rivnianska',
      '$kuid': 'Q6IIPQ3R7',
      'label': [
        'Rivnianska',
        'Рівнянська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnianska'
    },
    {
      'name': 'rivnivska',
      '$kuid': 'IllQMaVda',
      'label': [
        'Rivnivska',
        'Рівнівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnivska'
    },
    {
      'name': 'rodnykivska',
      '$kuid': 'w5xmzDNIA',
      'label': [
        'Rodnykivska',
        'Родниківська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'rodnykivska'
    },
    {
      'name': 'rohanska',
      '$kuid': 'F8ZbTh840',
      'label': [
        'Rohanska',
        'Роганська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rohanska'
    },
    {
      'name': 'rohatynska',
      '$kuid': 'b0NS5zUla',
      'label': [
        'Rohatynska',
        'Рогатинська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rohatynska'
    },
    {
      'name': 'rokytnianska',
      '$kuid': 'HxmxORXzb',
      'label': [
        'Rokytnianska',
        'Рокитнянська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rokytnianska'
    },
    {
      'name': 'rokytnivska',
      '$kuid': '2yGzVWBNM',
      'label': [
        'Rokytnivska',
        'Рокитнівська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'rokytnivska'
    },
    {
      'name': 'romanivska',
      '$kuid': 'GOpGFJhTl',
      'label': [
        'Romanivska',
        'Романівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'romanivska'
    },
    {
      'name': 'romashkinska',
      '$kuid': 'Kudirq7eB',
      'label': [
        'Romashkinska',
        'Ромашкінська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'romashkinska'
    },
    {
      'name': 'romenska',
      '$kuid': 'AyAwUQ6We',
      'label': [
        'Romenska',
        'Роменська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'romenska'
    },
    {
      'name': 'romodanivska',
      '$kuid': 'tbT2WzRTB',
      'label': [
        'Romodanivska',
        'Ромоданівська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'romodanivska'
    },
    {
      'name': 'roshchynska',
      '$kuid': 'IsbEEnd7q',
      'label': [
        'Roshchynska',
        'Рощинська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'roshchynska'
    },
    {
      'name': 'rotmistrivska',
      '$kuid': 'Gr1pNWAZs',
      'label': [
        'Rotmistrivska',
        'Ротмістрівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'rotmistrivska'
    },
    {
      'name': 'rovenkivska',
      '$kuid': 'jgZm5WmVS',
      'label': [
        'Rovenkivska',
        'Ровеньківська'
      ],
      'raion': 'rovenkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rovenkivska'
    },
    {
      'name': 'rozdilnianska',
      '$kuid': '81ipUE9V5',
      'label': [
        'Rozdilnianska',
        'Роздільнянська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdilnianska'
    },
    {
      'name': 'rozdolnenska',
      '$kuid': 'VIijsQpxF',
      'label': [
        'Rozdolnenska',
        'Роздольненська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdolnenska'
    },
    {
      'name': 'rozdolska',
      '$kuid': 'BOFtTdogW',
      'label': [
        'Rozdolska',
        'Роздольська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdolska'
    },
    {
      'name': 'rozdorska',
      '$kuid': 'pdL5ZB6VI',
      'label': [
        'Rozdorska',
        'Роздорська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdorska'
    },
    {
      'name': 'rozhniativska',
      '$kuid': 'Tmy7xXf9R',
      'label': [
        'Rozhniativska',
        'Рожнятівська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozhniativska'
    },
    {
      'name': 'rozhnivska',
      '$kuid': 'BB6y2NaVy',
      'label': [
        'Rozhnivska',
        'Рожнівська'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozhnivska'
    },
    {
      'name': 'rozhyshchenska',
      '$kuid': 'rhsHBgxl6',
      'label': [
        'Rozhyshchenska',
        'Рожищенська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozhyshchenska'
    },
    {
      'name': 'rozivska',
      '$kuid': '2bJyRwWnJ',
      'label': [
        'Rozivska',
        'Розівська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozivska'
    },
    {
      'name': 'rozkishnenska',
      '$kuid': 'GRtqRslDh',
      'label': [
        'Rozkishnenska',
        'Розкішненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozkishnenska'
    },
    {
      'name': 'rozkvitivska',
      '$kuid': '28Tdy98qr',
      'label': [
        'Rozkvitivska',
        'Розквітівська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozkvitivska'
    },
    {
      'name': 'rozsoshanska',
      '$kuid': 'rHDC309A5',
      'label': [
        'Rozsoshanska',
        'Розсошанська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozsoshanska'
    },
    {
      'name': 'rozvadivska',
      '$kuid': 'FY8bBqE6Y',
      'label': [
        'Rozvadivska',
        'Розвадівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozvadivska'
    },
    {
      'name': 'rubanivska',
      '$kuid': 'a79pyVufB',
      'label': [
        'Rubanivska',
        'Рубанівська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'rubanivska'
    },
    {
      'name': 'rubizhanska',
      '$kuid': 'aNvNPPYjk',
      'label': [
        'Rubizhanska',
        'Рубіжанська'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'rubizhanska'
    },
    {
      'name': 'ruchivska',
      '$kuid': '6cPJ08CI9',
      'label': [
        'Ruchivska',
        'Руч\'ївська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'ruchivska'
    },
    {
      'name': 'rudkivska',
      '$kuid': 'NuLc9gV6M',
      'label': [
        'Rudkivska',
        'Рудківська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'rudkivska'
    },
    {
      'name': 'rukshynska',
      '$kuid': 'ndd9LxuR9',
      'label': [
        'Rukshynska',
        'Рукшинська'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'rukshynska'
    },
    {
      'name': 'rusakivska',
      '$kuid': 'IGXnTFhWa',
      'label': [
        'Rusakivska',
        'Русаківська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'rusakivska'
    },
    {
      'name': 'ruskopolianska',
      '$kuid': 'Auf5GFZZV',
      'label': [
        'Ruskopolianska',
        'Руськополянська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'ruskopolianska'
    },
    {
      'name': 'ruzhynska',
      '$kuid': 'saOzCdGQr',
      'label': [
        'Ruzhynska',
        'Ружинська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ruzhynska'
    },
    {
      'name': 'rzhyshchivska',
      '$kuid': 'J3s95zxAi',
      'label': [
        'Rzhyshchivska',
        'Ржищівська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rzhyshchivska'
    },
    {
      'name': 'sadivska',
      '$kuid': 'JItpHcElP',
      'label': [
        'Sadivska',
        'Садівська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'sadivska'
    },
    {
      'name': 'sadova',
      '$kuid': 'YbLs67fa0',
      'label': [
        'Sadova',
        'Садова'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'sadova'
    },
    {
      'name': 'safianivska',
      '$kuid': 'tCxeLbmZe',
      'label': [
        'Safianivska',
        'Саф\'янівська'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'safianivska'
    },
    {
      'name': 'sahunivska',
      '$kuid': 'e6J2R2fRG',
      'label': [
        'Sahunivska',
        'Сагунівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'sahunivska'
    },
    {
      'name': 'sakhnovetska',
      '$kuid': 'eqMFoGF8X',
      'label': [
        'Sakhnovetska',
        'Сахновецька'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sakhnovetska'
    },
    {
      'name': 'sakhnovshchynska',
      '$kuid': 'aDR8411Ay',
      'label': [
        'Sakhnovshchynska',
        'Сахновщинська'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'sakhnovshchynska'
    },
    {
      'name': 'saksahanska',
      '$kuid': 'aNhXy8X5y',
      'label': [
        'Saksahanska',
        'Саксаганська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'saksahanska'
    },
    {
      'name': 'sakska',
      '$kuid': 'YQWddymsx',
      'label': [
        'Sakska',
        'Сакська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sakska'
    },
    {
      'name': 'samarivska',
      '$kuid': 'MGtnrUTVK',
      'label': [
        'Samarivska',
        'Самарівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'samarivska'
    },
    {
      'name': 'sambirska',
      '$kuid': 'xXFSkQaif',
      'label': [
        'Sambirska',
        'Самбірська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'sambirska'
    },
    {
      'name': 'samhorodotska',
      '$kuid': '8GtoySsE6',
      'label': [
        'Samhorodotska',
        'Самгородоцька'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'samhorodotska'
    },
    {
      'name': 'saranchukivska',
      '$kuid': 'TZGWtVrz8',
      'label': [
        'Saranchukivska',
        'Саранчуківська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'saranchukivska'
    },
    {
      'name': 'saratska',
      '$kuid': '7idhLFEJl',
      'label': [
        'Saratska',
        'Саратська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'saratska'
    },
    {
      'name': 'sarnenska',
      '$kuid': 'i4C91prQ0',
      'label': [
        'Sarnenska',
        'Сарненська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'sarnenska'
    },
    {
      'name': 'sartanska',
      '$kuid': 'yP9tdwHPH',
      'label': [
        'Sartanska',
        'Сартанська'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'sartanska'
    },
    {
      'name': 'sarybashivska',
      '$kuid': 'H1dRT8SVJ',
      'label': [
        'Sarybashivska',
        'Сарибашівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'sarybashivska'
    },
    {
      'name': 'satanivska',
      '$kuid': 'u4xtyEuSo',
      'label': [
        'Satanivska',
        'Сатанівська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'satanivska'
    },
    {
      'name': 'savranska',
      '$kuid': 'JfjYWyzfS',
      'label': [
        'Savranska',
        'Савранська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'savranska'
    },
    {
      'name': 'savynska',
      '$kuid': 'WNCgGNIr6',
      'label': [
        'Savynska',
        'Савинська'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'savynska'
    },
    {
      'name': 'sednivska',
      '$kuid': 'Wihsufsb9',
      'label': [
        'Sednivska',
        'Седнівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sednivska'
    },
    {
      'name': 'seliatynska',
      '$kuid': 'jPDC8wI83',
      'label': [
        'Seliatynska',
        'Селятинська'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'seliatynska'
    },
    {
      'name': 'selydivska',
      '$kuid': 'bGcURpi3l',
      'label': [
        'Selydivska',
        'Селидівська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'selydivska'
    },
    {
      'name': 'selyshchenska',
      '$kuid': 'BrU9JFMk1',
      'label': [
        'Selyshchenska',
        'Селищенська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'selyshchenska'
    },
    {
      'name': 'semenivska',
      '$kuid': 'WbipcgFRr',
      'label': [
        'Semenivska',
        'Семенівська'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska'
    },
    {
      'name': 'semenivska_2',
      '$kuid': 'b9Pt5LlEL',
      'label': [
        'Semenivska',
        'Семенівська'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska_2'
    },
    {
      'name': 'semenivska_3',
      '$kuid': '69g69U0eV',
      'label': [
        'Semenivska',
        'Семенівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska_3'
    },
    {
      'name': 'semenivska_4',
      '$kuid': 'Bmt9WDCkb',
      'label': [
        'Semenivska',
        'Семенівська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska_4'
    },
    {
      'name': 'semydubska',
      '$kuid': 'ajEyCiRDM',
      'label': [
        'Semydubska',
        'Семидубська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'semydubska'
    },
    {
      'name': 'semysotska',
      '$kuid': 'VAuyZ4hhC',
      'label': [
        'Semysotska',
        'Семисотська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'semysotska'
    },
    {
      'name': 'senchanska',
      '$kuid': 'VkacvabAg',
      'label': [
        'Senchanska',
        'Сенчанська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'senchanska'
    },
    {
      'name': 'serebrianska',
      '$kuid': '36g6QmfSg',
      'label': [
        'Serebrianska',
        'Серебрянська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'serebrianska'
    },
    {
      'name': 'serednianska',
      '$kuid': '6E92Mu6FT',
      'label': [
        'Serednianska',
        'Середнянська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'serednianska'
    },
    {
      'name': 'seredyno-budska',
      '$kuid': 's9AEjJcRA',
      'label': [
        'Seredyno-Budska',
        'Середино-Будська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'seredyno-budska'
    },
    {
      'name': 'serekhovychivska',
      '$kuid': 'DQeQRXJKP',
      'label': [
        'Serekhovychivska',
        'Сереховичівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'serekhovychivska'
    },
    {
      'name': 'serhiivska',
      '$kuid': 'SM58dxKje',
      'label': [
        'Serhiivska',
        'Сергіївська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'serhiivska'
    },
    {
      'name': 'serhiivska_2',
      '$kuid': '6P1QSmnX0',
      'label': [
        'Serhiivska',
        'Сергіївська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'serhiivska_2'
    },
    {
      'name': 'sevastopilska_2',
      '$kuid': '1ICOYbxW8',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'raion': 'sevastopilska',
      'list_name': 'hromada',
      '$autovalue': 'sevastopilska_2'
    },
    {
      'name': 'sevastopilska_3',
      '$kuid': 'OxV1CPHmK',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sevastopilska_3'
    },
    {
      'name': 'severynivska',
      '$kuid': 'drFjrA1Dp',
      'label': [
        'Severynivska',
        'Северинівська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'severynivska'
    },
    {
      'name': 'shabivska',
      '$kuid': 'MkQTb8jUC',
      'label': [
        'Shabivska',
        'Шабівська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'shabivska'
    },
    {
      'name': 'shakhivska',
      '$kuid': 'NLKfVqHML',
      'label': [
        'Shakhivska',
        'Шахівська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'shakhivska'
    },
    {
      'name': 'shakhtarska',
      '$kuid': 'YIMl0vb6A',
      'label': [
        'Shakhtarska',
        'Шахтарська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shakhtarska'
    },
    {
      'name': 'shalyhynska',
      '$kuid': 'I7EmG2GtY',
      'label': [
        'Shalyhynska',
        'Шалигинська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shalyhynska'
    },
    {
      'name': 'sharhorodska',
      '$kuid': 'gxTOKo74m',
      'label': [
        'Sharhorodska',
        'Шаргородська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'sharhorodska'
    },
    {
      'name': 'shatska',
      '$kuid': '13qrGPhO6',
      'label': [
        'Shatska',
        'Шацька'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'shatska'
    },
    {
      'name': 'shchastynska',
      '$kuid': 'FrDVL4jZb',
      'label': [
        'Shchastynska',
        'Щастинська'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchastynska'
    },
    {
      'name': 'shchebetovska',
      '$kuid': 'jPsVZP9ID',
      'label': [
        'Shchebetovska',
        'Щебетовська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchebetovska'
    },
    {
      'name': 'shcherbanivska',
      '$kuid': '5X9u0AIV0',
      'label': [
        'Shcherbanivska',
        'Щербанівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'shcherbanivska'
    },
    {
      'name': 'shcholkinska',
      '$kuid': 'RFE6R5XCE',
      'label': [
        'Shcholkinska',
        'Щолкінська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shcholkinska'
    },
    {
      'name': 'shchyborivska',
      '$kuid': '6Fdw7TUyY',
      'label': [
        'Shchyborivska',
        'Щиборівська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchyborivska'
    },
    {
      'name': 'shchyretska',
      '$kuid': 'k8KBETR6a',
      'label': [
        'Shchyretska',
        'Щирецька'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchyretska'
    },
    {
      'name': 'shehynivska',
      '$kuid': '8eqLmo63O',
      'label': [
        'Shehynivska',
        'Шегинівська'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shehynivska'
    },
    {
      'name': 'shepetivska',
      '$kuid': '1TPJ5FAfv',
      'label': [
        'Shepetivska',
        'Шепетівська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shepetivska'
    },
    {
      'name': 'shevchenkivska',
      '$kuid': 'TsestUnqX',
      'label': [
        'Shevchenkivska',
        'Шевченківська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'shevchenkivska'
    },
    {
      'name': 'shevchenkivska_2',
      '$kuid': '6Ev1NaGk6',
      'label': [
        'Shevchenkivska',
        'Шевченківська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'shevchenkivska_2'
    },
    {
      'name': 'shevchenkivska_3',
      '$kuid': 'KMVbW4Ow1',
      'label': [
        'Shevchenkivska',
        'Шевченківська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shevchenkivska_3'
    },
    {
      'name': 'shkilnenska',
      '$kuid': 'OE6BIHhPa',
      'label': [
        'Shkilnenska',
        'Шкільненська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'shkilnenska'
    },
    {
      'name': 'shostkynska',
      '$kuid': 'heQcWsPFF',
      'label': [
        'Shostkynska',
        'Шосткинська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shostkynska'
    },
    {
      'name': 'shpanivska',
      '$kuid': 'fTeyXMKZk',
      'label': [
        'Shpanivska',
        'Шпанівська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'shpanivska'
    },
    {
      'name': 'shpolianska',
      '$kuid': '6IawnLEnW',
      'label': [
        'Shpolianska',
        'Шполянська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'shpolianska'
    },
    {
      'name': 'shpykivska',
      '$kuid': '1TWmLBR9o',
      'label': [
        'Shpykivska',
        'Шпиківська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shpykivska'
    },
    {
      'name': 'shramkivska',
      '$kuid': 'ZA0qv5sod',
      'label': [
        'Shramkivska',
        'Шрамківська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'shramkivska'
    },
    {
      'name': 'shtormivska',
      '$kuid': '1Q4RRtsGT',
      'label': [
        'Shtormivska',
        'Штормівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'shtormivska'
    },
    {
      'name': 'shulhynska',
      '$kuid': 'CBTU8Y5wL',
      'label': [
        'Shulhynska',
        'Шульгинська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'shulhynska'
    },
    {
      'name': 'shumska',
      '$kuid': 'hWJWIdGeB',
      'label': [
        'Shumska',
        'Шумська'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'shumska'
    },
    {
      'name': 'shvaikivska',
      '$kuid': '8ESsJpPRL',
      'label': [
        'Shvaikivska',
        'Швайківська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shvaikivska'
    },
    {
      'name': 'shyriaivska',
      '$kuid': 'f7oP9JPk1',
      'label': [
        'Shyriaivska',
        'Ширяївська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyriaivska'
    },
    {
      'name': 'shyrokivska',
      '$kuid': 'pFvV2VcWp',
      'label': [
        'Shyrokivska',
        'Широківська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska'
    },
    {
      'name': 'shyrokivska_2',
      '$kuid': 'cG6Niue3P',
      'label': [
        'Shyrokivska',
        'Широківська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_2'
    },
    {
      'name': 'shyrokivska_3',
      '$kuid': 'hQpLEbJyl',
      'label': [
        'Shyrokivska',
        'Широківська'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_3'
    },
    {
      'name': 'shyrokivska_4',
      '$kuid': 'n8VMg70ru',
      'label': [
        'Shyrokivska',
        'Широківська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_4'
    },
    {
      'name': 'shyrokivska_5',
      '$kuid': 'S7IA5qaSx',
      'label': [
        'Shyrokivska',
        'Широківська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_5'
    },
    {
      'name': 'shyshatska',
      '$kuid': 'FWE9y8DPh',
      'label': [
        'Shyshatska',
        'Шишацька'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyshatska'
    },
    {
      'name': 'sievierodonetska',
      '$kuid': '9BNyWa4WG',
      'label': [
        'Sievierodonetska',
        'Сєвєродонецька'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'sievierodonetska'
    },
    {
      'name': 'simeizka',
      '$kuid': '4zJCuTQh3',
      'label': [
        'Simeizka',
        'Сімеїзька'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'simeizka'
    },
    {
      'name': 'simferopolska',
      '$kuid': 'Hil3q8NTq',
      'label': [
        'Simferopolska',
        'Сімферопольська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'simferopolska'
    },
    {
      'name': 'siurtivska',
      '$kuid': 'TnpJo7wSE',
      'label': [
        'Siurtivska',
        'Сюртівська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'siurtivska'
    },
    {
      'name': 'siverska',
      '$kuid': 'LaS5sz0QU',
      'label': [
        'Siverska',
        'Сіверська'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'siverska'
    },
    {
      'name': 'skadovska',
      '$kuid': 'zPhjjLmO2',
      'label': [
        'Skadovska',
        'Скадовська'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'skadovska'
    },
    {
      'name': 'skala-podilska',
      '$kuid': 'nO6K5T9tL',
      'label': [
        'Skala-Podilska',
        'Скала-Подільська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'skala-podilska'
    },
    {
      'name': 'skalatska',
      '$kuid': 'X2JZKZM1O',
      'label': [
        'Skalatska',
        'Скалатська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'skalatska'
    },
    {
      'name': 'skalystivska',
      '$kuid': 'Mty7McQom',
      'label': [
        'Skalystivska',
        'Скалистівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'skalystivska'
    },
    {
      'name': 'skhidnytska',
      '$kuid': 'QFc2sJNwz',
      'label': [
        'Skhidnytska',
        'Східницька'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'skhidnytska'
    },
    {
      'name': 'skolivska',
      '$kuid': 'NcSrrwFkd',
      'label': [
        'Skolivska',
        'Сколівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'skolivska'
    },
    {
      'name': 'skorokhodivska',
      '$kuid': 'xCre1WbBA',
      'label': [
        'Skorokhodivska',
        'Скороходівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'skorokhodivska'
    },
    {
      'name': 'skorykivska',
      '$kuid': 'GhTb2xuHo',
      'label': [
        'Skorykivska',
        'Скориківська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'skorykivska'
    },
    {
      'name': 'skvortsivska',
      '$kuid': 'ga3X7ZNxA',
      'label': [
        'Skvortsivska',
        'Скворцівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'skvortsivska'
    },
    {
      'name': 'skvyrska',
      '$kuid': 'kG2k0ahZ1',
      'label': [
        'Skvyrska',
        'Сквирська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'skvyrska'
    },
    {
      'name': 'slavhorodska',
      '$kuid': 'jOZrlVScr',
      'label': [
        'Slavhorodska',
        'Славгородська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavhorodska'
    },
    {
      'name': 'slavnivska',
      '$kuid': 'DMCUQSvgl',
      'label': [
        'Slavnivska',
        'Славнівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavnivska'
    },
    {
      'name': 'slavska',
      '$kuid': 'jrncp6fcX',
      'label': [
        'Slavska',
        'Славська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavska'
    },
    {
      'name': 'slavutska',
      '$kuid': '2nU1kmEgL',
      'label': [
        'Slavutska',
        'Славутська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavutska'
    },
    {
      'name': 'slavutytska',
      '$kuid': 'QvyhKUguR',
      'label': [
        'Slavutytska',
        'Славутицька'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavutytska'
    },
    {
      'name': 'slobidska',
      '$kuid': '7Ww8bYXyW',
      'label': [
        'Slobidska',
        'Слобідська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobidska'
    },
    {
      'name': 'slobidsko-kulchiievetska',
      '$kuid': 'ckgGmRmNd',
      'label': [
        'Slobidsko-Kulchiievetska',
        'Слобідсько-Кульчієвецька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobidsko-kulchiievetska'
    },
    {
      'name': 'slobozhanska',
      '$kuid': 'gXi764dGM',
      'label': [
        'Slobozhanska',
        'Слобожанська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobozhanska'
    },
    {
      'name': 'slobozhanska_2',
      '$kuid': 'q45MoUcVZ',
      'label': [
        'Slobozhanska',
        'Слобожанська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobozhanska_2'
    },
    {
      'name': 'slovechanska',
      '$kuid': 'SeH7WQLUV',
      'label': [
        'Slovechanska',
        'Словечанська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovechanska'
    },
    {
      'name': 'slovianska',
      '$kuid': '9kS1AQdBx',
      'label': [
        'Slovianska',
        'Слов\'янська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovianska'
    },
    {
      'name': 'slovianska_2',
      '$kuid': 'GgwQmjT6D',
      'label': [
        'Slovianska',
        'Слов\'янська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovianska_2'
    },
    {
      'name': 'slovianska_3',
      '$kuid': 'xWa8noR5v',
      'label': [
        'Slovianska',
        'Слов\'янська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovianska_3'
    },
    {
      'name': 'smidynska',
      '$kuid': 'twr97XUuG',
      'label': [
        'Smidynska',
        'Смідинська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'smidynska'
    },
    {
      'name': 'smilianska',
      '$kuid': 'xNu0NYO2U',
      'label': [
        'Smilianska',
        'Смілянська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'smilianska'
    },
    {
      'name': 'smolinska',
      '$kuid': '4dNcLbpRW',
      'label': [
        'Smolinska',
        'Смолінська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'smolinska'
    },
    {
      'name': 'smotrytska',
      '$kuid': 'zIFFCBL8V',
      'label': [
        'Smotrytska',
        'Смотрицька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'smotrytska'
    },
    {
      'name': 'smyrnovska',
      '$kuid': 'c3v4Te4Gs',
      'label': [
        'Smyrnovska',
        'Смирновська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'smyrnovska'
    },
    {
      'name': 'smyzka',
      '$kuid': 'NFPO8qX6b',
      'label': [
        'Smyzka',
        'Смизька'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'smyzka'
    },
    {
      'name': 'sniatynska',
      '$kuid': '94dZImjMN',
      'label': [
        'Sniatynska',
        'Снятинська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sniatynska'
    },
    {
      'name': 'snihurivska',
      '$kuid': 'tommvuPWn',
      'label': [
        'Snihurivska',
        'Снігурівська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'snihurivska'
    },
    {
      'name': 'snizhnianska',
      '$kuid': 'CO3eB25fS',
      'label': [
        'Snizhnianska',
        'Сніжнянська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'snizhnianska'
    },
    {
      'name': 'snovska',
      '$kuid': 'qQtu4XFKa',
      'label': [
        'Snovska',
        'Сновська'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'snovska'
    },
    {
      'name': 'sobolivska',
      '$kuid': 'AOF2gwOLp',
      'label': [
        'Sobolivska',
        'Соболівська'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'sobolivska'
    },
    {
      'name': 'sofiivska',
      '$kuid': 'WMk1tWlsu',
      'label': [
        'Sofiivska',
        'Софіївська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'sofiivska'
    },
    {
      'name': 'sofiivska_2',
      '$kuid': 'n7G1R3PIr',
      'label': [
        'Sofiivska',
        'Софіївська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'sofiivska_2'
    },
    {
      'name': 'sokalska',
      '$kuid': 'Ex98amaSy',
      'label': [
        'Sokalska',
        'Сокальська'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokalska'
    },
    {
      'name': 'sokilnytska',
      '$kuid': 'k4ASItMsK',
      'label': [
        'Sokilnytska',
        'Сокільницька'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokilnytska'
    },
    {
      'name': 'sokolivska',
      '$kuid': 'oeI5KZery',
      'label': [
        'Sokolivska',
        'Соколівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokolivska'
    },
    {
      'name': 'sokyrianska',
      '$kuid': 'XnG6FKUzc',
      'label': [
        'Sokyrianska',
        'Сокирянська'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokyrianska'
    },
    {
      'name': 'soledarska',
      '$kuid': '9gcJ7D6tw',
      'label': [
        'Soledarska',
        'Соледарська'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'soledarska'
    },
    {
      'name': 'solobkovetska',
      '$kuid': 'qzjQE2j4c',
      'label': [
        'Solobkovetska',
        'Солобковецька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'solobkovetska'
    },
    {
      'name': 'solonianska',
      '$kuid': '1iziwun0A',
      'label': [
        'Solonianska',
        'Солонянська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'solonianska'
    },
    {
      'name': 'solonkivska',
      '$kuid': 'tmxrYlVVM',
      'label': [
        'Solonkivska',
        'Солонківська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solonkivska'
    },
    {
      'name': 'solonytsivska',
      '$kuid': 'EJHgD2Zib',
      'label': [
        'Solonytsivska',
        'Солоницівська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solonytsivska'
    },
    {
      'name': 'solotvynska',
      '$kuid': 'hXcX3sgxP',
      'label': [
        'Solotvynska',
        'Солотвинська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solotvynska'
    },
    {
      'name': 'solotvynska_2',
      '$kuid': '9gHH0NNk1',
      'label': [
        'Solotvynska',
        'Солотвинська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solotvynska_2'
    },
    {
      'name': 'soniachnodolynska',
      '$kuid': '1cWkmlL08',
      'label': [
        'Soniachnodolynska',
        'Сонячнодолинська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'soniachnodolynska'
    },
    {
      'name': 'sorokynska',
      '$kuid': 'UGqoYCYp3',
      'label': [
        'Sorokynska',
        'Сорокинська'
      ],
      'raion': 'dovzhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'sorokynska'
    },
    {
      'name': 'soshychnenska',
      '$kuid': 'z75zyzZ2z',
      'label': [
        'Soshychnenska',
        'Сошичненська'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'soshychnenska'
    },
    {
      'name': 'sosnivska',
      '$kuid': 'RWe9G28f7',
      'label': [
        'Sosnivska',
        'Соснівська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'sosnivska'
    },
    {
      'name': 'sosnytska',
      '$kuid': 'uoMcM6Rac',
      'label': [
        'Sosnytska',
        'Сосницька'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sosnytska'
    },
    {
      'name': 'sovietska',
      '$kuid': 'NyVBR1ABN',
      'label': [
        'Sovietska',
        'Совєтська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sovietska'
    },
    {
      'name': 'sovkhoznenska',
      '$kuid': 'I9QAiT49a',
      'label': [
        'Sovkhoznenska',
        'Совхозненська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'sovkhoznenska'
    },
    {
      'name': 'spaska',
      '$kuid': 'tf0rD3az1',
      'label': [
        'Spaska',
        'Спаська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'spaska'
    },
    {
      'name': 'sribnianska',
      '$kuid': 'bic92OrIo',
      'label': [
        'Sribnianska',
        'Срібнянська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'sribnianska'
    },
    {
      'name': 'stakhanovska',
      '$kuid': 'ebxmQ0seA',
      'label': [
        'Stakhanovska',
        'Стахановська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'stakhanovska'
    },
    {
      'name': 'stalnenska',
      '$kuid': 'PnCl17arM',
      'label': [
        'Stalnenska',
        'Стальненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'stalnenska'
    },
    {
      'name': 'stanislavchytska',
      '$kuid': 'x05wZw1h1',
      'label': [
        'Stanislavchytska',
        'Станіславчицька'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanislavchytska'
    },
    {
      'name': 'stanislavska',
      '$kuid': 'EbIGxNvI8',
      'label': [
        'Stanislavska',
        'Станіславська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanislavska'
    },
    {
      'name': 'stanychno-luhanska',
      '$kuid': 'oiiydYgzg',
      'label': [
        'Stanychno-Luhanska',
        'Станично-Луганська'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanychno-luhanska'
    },
    {
      'name': 'stanyshivska',
      '$kuid': 'Va4DGgeSg',
      'label': [
        'Stanyshivska',
        'Станишівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanyshivska'
    },
    {
      'name': 'starobeshivska',
      '$kuid': 'mwTMCpN7Y',
      'label': [
        'Starobeshivska',
        'Старобешівська'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'starobeshivska'
    },
    {
      'name': 'starobilska',
      '$kuid': 'l46rds66o',
      'label': [
        'Starobilska',
        'Старобільська'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'starobilska'
    },
    {
      'name': 'starobohorodchanska',
      '$kuid': 't2NOe7zMF',
      'label': [
        'Starobohorodchanska',
        'Старобогородчанська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'starobohorodchanska'
    },
    {
      'name': 'starokostiantynivska',
      '$kuid': 'PNLZDBFoq',
      'label': [
        'Starokostiantynivska',
        'Старокостянтинівська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'starokostiantynivska'
    },
    {
      'name': 'starokozatska',
      '$kuid': 'linXrTqqT',
      'label': [
        'Starokozatska',
        'Старокозацька'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'starokozatska'
    },
    {
      'name': 'starokrymska',
      '$kuid': '5vJhCJyPQ',
      'label': [
        'Starokrymska',
        'Старокримська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'starokrymska'
    },
    {
      'name': 'staromaiakivska',
      '$kuid': 'vUU0aBAF8',
      'label': [
        'Staromaiakivska',
        'Старомаяківська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'staromaiakivska'
    },
    {
      'name': 'staromlynivska',
      '$kuid': 'yylYfYNiv',
      'label': [
        'Staromlynivska',
        'Старомлинівська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'staromlynivska'
    },
    {
      'name': 'staroostropilska',
      '$kuid': 'wSfsltKp6',
      'label': [
        'Staroostropilska',
        'Староостропільська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'staroostropilska'
    },
    {
      'name': 'starosaltivska',
      '$kuid': 'AWPGtfcVf',
      'label': [
        'Starosaltivska',
        'Старосалтівська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosaltivska'
    },
    {
      'name': 'starosambirska',
      '$kuid': 'vWpLNbpm9',
      'label': [
        'Starosambirska',
        'Старосамбірська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosambirska'
    },
    {
      'name': 'starosiletska',
      '$kuid': 'POPHmFbdL',
      'label': [
        'Starosiletska',
        'Старосілецька'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosiletska'
    },
    {
      'name': 'starosilska',
      '$kuid': 'At7QELC1Y',
      'label': [
        'Starosilska',
        'Старосільська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosilska'
    },
    {
      'name': 'starosyniavska',
      '$kuid': 'iV0bB3kZB',
      'label': [
        'Starosyniavska',
        'Старосинявська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosyniavska'
    },
    {
      'name': 'staroushytska',
      '$kuid': 'RrED90OQg',
      'label': [
        'Staroushytska',
        'Староушицька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'staroushytska'
    },
    {
      'name': 'starovirivska',
      '$kuid': 'DlQojFDK6',
      'label': [
        'Starovirivska',
        'Старовірівська'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'starovirivska'
    },
    {
      'name': 'starovyzhivska',
      '$kuid': 'FQYd6B4ky',
      'label': [
        'Starovyzhivska',
        'Старовижівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'starovyzhivska'
    },
    {
      'name': 'stavchanska',
      '$kuid': 'FW7tgmnQH',
      'label': [
        'Stavchanska',
        'Ставчанська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'stavchanska'
    },
    {
      'name': 'stavnenska',
      '$kuid': 'IhdqW9RvM',
      'label': [
        'Stavnenska',
        'Ставненська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'stavnenska'
    },
    {
      'name': 'stavyshchenska',
      '$kuid': 'J13Fe05Zj',
      'label': [
        'Stavyshchenska',
        'Ставищенська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'stavyshchenska'
    },
    {
      'name': 'steblivska',
      '$kuid': 'cMmSpN6zp',
      'label': [
        'Steblivska',
        'Стеблівська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'steblivska'
    },
    {
      'name': 'stepanetska',
      '$kuid': '3FKm1qSri',
      'label': [
        'Stepanetska',
        'Степанецька'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanetska'
    },
    {
      'name': 'stepanivska',
      '$kuid': 'KFu27ch3D',
      'label': [
        'Stepanivska',
        'Степанівська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanivska'
    },
    {
      'name': 'stepanivska_2',
      '$kuid': 'Mr2NmAje1',
      'label': [
        'Stepanivska',
        'Степанівська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanivska_2'
    },
    {
      'name': 'stepankivska',
      '$kuid': 'xUgw3dFYg',
      'label': [
        'Stepankivska',
        'Степанківська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepankivska'
    },
    {
      'name': 'stepanska',
      '$kuid': 'nlVC4wFJA',
      'label': [
        'Stepanska',
        'Степанська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanska'
    },
    {
      'name': 'stepivska',
      '$kuid': 'CX9tzH5xK',
      'label': [
        'Stepivska',
        'Степівська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepivska'
    },
    {
      'name': 'stepnenska',
      '$kuid': 'IinFXLJuj',
      'label': [
        'Stepnenska',
        'Степненська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'stepnenska'
    },
    {
      'name': 'stepnivska',
      '$kuid': 'W54Xr7lo6',
      'label': [
        'Stepnivska',
        'Степнівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepnivska'
    },
    {
      'name': 'stepnohirska',
      '$kuid': 'n35YL2hPa',
      'label': [
        'Stepnohirska',
        'Степногірська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepnohirska'
    },
    {
      'name': 'storozhynetska',
      '$kuid': 'Ux518poCu',
      'label': [
        'Storozhynetska',
        'Сторожинецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'storozhynetska'
    },
    {
      'name': 'stovpivska',
      '$kuid': 'dh8EHdfYM',
      'label': [
        'Stovpivska',
        'Стовпівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'stovpivska'
    },
    {
      'name': 'strilkivska',
      '$kuid': 'HzKNkEAc2',
      'label': [
        'Strilkivska',
        'Стрілківська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'strilkivska'
    },
    {
      'name': 'striukivska',
      '$kuid': 'VqNw9Al37',
      'label': [
        'Striukivska',
        'Стрюківська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'striukivska'
    },
    {
      'name': 'stryiska',
      '$kuid': '92uXIWVKm',
      'label': [
        'Stryiska',
        'Стрийська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'stryiska'
    },
    {
      'name': 'stryivska',
      '$kuid': 'WOZdgLbJ8',
      'label': [
        'Stryivska',
        'Стриївська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'stryivska'
    },
    {
      'name': 'stryzhavska',
      '$kuid': 'sCWV2u7Yn',
      'label': [
        'Stryzhavska',
        'Стрижавська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'stryzhavska'
    },
    {
      'name': 'studenianska',
      '$kuid': 'iotLb37sG',
      'label': [
        'Studenianska',
        'Студенянська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'studenianska'
    },
    {
      'name': 'studenykivska',
      '$kuid': 'bgs5GOgpz',
      'label': [
        'Studenykivska',
        'Студениківська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'studenykivska'
    },
    {
      'name': 'subottsivska',
      '$kuid': 'X0UUA1ChR',
      'label': [
        'Subottsivska',
        'Суботцівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'subottsivska'
    },
    {
      'name': 'suchevenska',
      '$kuid': 'U4t3NI5zp',
      'label': [
        'Suchevenska',
        'Сучевенська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'suchevenska'
    },
    {
      'name': 'sudatska',
      '$kuid': 'GSUMELp7J',
      'label': [
        'Sudatska',
        'Судацька'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sudatska'
    },
    {
      'name': 'sudovovyshnianska',
      '$kuid': 'zufTlKGWb',
      'label': [
        'Sudovovyshnianska',
        'Судововишнянська'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sudovovyshnianska'
    },
    {
      'name': 'sudylkivska',
      '$kuid': '9ga3ODdpU',
      'label': [
        'Sudylkivska',
        'Судилківська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sudylkivska'
    },
    {
      'name': 'sukhoielanetska',
      '$kuid': 'nRJFOtD11',
      'label': [
        'Sukhoielanetska',
        'Сухоєланецька'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sukhoielanetska'
    },
    {
      'name': 'sukhopolovianska',
      '$kuid': 'cnculVZBW',
      'label': [
        'Sukhopolovianska',
        'Сухополов\'янська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'sukhopolovianska'
    },
    {
      'name': 'sumska_3',
      '$kuid': '6mF2aIb0e',
      'label': [
        'Sumska',
        'Сумська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'sumska_3'
    },
    {
      'name': 'sursko-lytovska',
      '$kuid': '82NJKUChl',
      'label': [
        'Sursko-Lytovska',
        'Сурсько-Литовська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'sursko-lytovska'
    },
    {
      'name': 'susaninska',
      '$kuid': 'nc9x1AYDE',
      'label': [
        'Susaninska',
        'Сусанінська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'susaninska'
    },
    {
      'name': 'sutyskivska',
      '$kuid': 'iTnk5soM2',
      'label': [
        'Sutyskivska',
        'Сутисківська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'sutyskivska'
    },
    {
      'name': 'suvorovska',
      '$kuid': 'gTr00RF5U',
      'label': [
        'Suvorovska',
        'Суворовська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'suvorovska'
    },
    {
      'name': 'suvorovska_2',
      '$kuid': '7JSUIgzXf',
      'label': [
        'Suvorovska',
        'Суворовська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'suvorovska_2'
    },
    {
      'name': 'suvorovska_3',
      '$kuid': 'MHqApkXUD',
      'label': [
        'Suvorovska',
        'Суворовська'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'suvorovska_3'
    },
    {
      'name': 'svaliavska',
      '$kuid': 'UiMaIYDaG',
      'label': [
        'Svaliavska',
        'Свалявська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'svaliavska'
    },
    {
      'name': 'svativska',
      '$kuid': 'pO4xS0Z0n',
      'label': [
        'Svativska',
        'Сватівська'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'svativska'
    },
    {
      'name': 'sveska',
      '$kuid': 'C0sGXKZWU',
      'label': [
        'Sveska',
        'Свеська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'sveska'
    },
    {
      'name': 'sviatohirska',
      '$kuid': '3JLhsttDA',
      'label': [
        'Sviatohirska',
        'Святогірська'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'sviatohirska'
    },
    {
      'name': 'sviatovasylivska',
      '$kuid': 'm6F22q8Bb',
      'label': [
        'Sviatovasylivska',
        'Святовасилівська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'sviatovasylivska'
    },
    {
      'name': 'svitlivska',
      '$kuid': 'nq7Ra6rOY',
      'label': [
        'Svitlivska',
        'Світлівська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'svitlivska'
    },
    {
      'name': 'svitlodarska',
      '$kuid': '0qXtcW1J5',
      'label': [
        'Svitlodarska',
        'Світлодарська'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'svitlodarska'
    },
    {
      'name': 'svitlovodska',
      '$kuid': 'U5FxE2Dlz',
      'label': [
        'Svitlovodska',
        'Світловодська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'svitlovodska'
    },
    {
      'name': 'synelnykivska',
      '$kuid': 'jh46ihUpJ',
      'label': [
        'Synelnykivska',
        'Синельниківська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'synelnykivska'
    },
    {
      'name': 'synevyrska',
      '$kuid': 'Va1rIAhiH',
      'label': [
        'Synevyrska',
        'Синевирська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'synevyrska'
    },
    {
      'name': 'syniukhynobridska',
      '$kuid': 'bdFVWPvN5',
      'label': [
        'Syniukhynobridska',
        'Синюхинобрідська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'syniukhynobridska'
    },
    {
      'name': 'synivska',
      '$kuid': 'PUAIA9CCp',
      'label': [
        'Synivska',
        'Синівська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'synivska'
    },
    {
      'name': 'synytsynska',
      '$kuid': '8XIy20Qch',
      'label': [
        'Synytsynska',
        'Синицинська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'synytsynska'
    },
    {
      'name': 'syzivska',
      '$kuid': 'd0QLPhpCZ',
      'label': [
        'Syzivska',
        'Сизівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'syzivska'
    },
    {
      'name': 'tabachnenska',
      '$kuid': 'wW3r5LUJa',
      'label': [
        'Tabachnenska',
        'Табачненська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tabachnenska'
    },
    {
      'name': 'tabachnenska_2',
      '$kuid': '0NSpUBJtG',
      'label': [
        'Tabachnenska',
        'Табачненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tabachnenska_2'
    },
    {
      'name': 'tairovska',
      '$kuid': 'em5ZQqeYM',
      'label': [
        'Tairovska',
        'Таїровська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'tairovska'
    },
    {
      'name': 'talalaivska',
      '$kuid': 'gVLNCi2Rc',
      'label': [
        'Talalaivska',
        'Талалаївська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'talalaivska'
    },
    {
      'name': 'talalaivska_2',
      '$kuid': 'gZd2fTfVn',
      'label': [
        'Talalaivska',
        'Талалаївська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'talalaivska_2'
    },
    {
      'name': 'talnivska',
      '$kuid': 'wo6GF3537',
      'label': [
        'Talnivska',
        'Тальнівська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'talnivska'
    },
    {
      'name': 'tarakanivska',
      '$kuid': 'SCQ58OfgQ',
      'label': [
        'Tarakanivska',
        'Тараканівська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarakanivska'
    },
    {
      'name': 'tarashanska',
      '$kuid': 'uWQr6MKUJ',
      'label': [
        'Tarashanska',
        'Тарашанська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarashanska'
    },
    {
      'name': 'tarashchanska',
      '$kuid': 'd2GWD6nHt',
      'label': [
        'Tarashchanska',
        'Таращанська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarashchanska'
    },
    {
      'name': 'tarutynska',
      '$kuid': 'QYyfdxrUE',
      'label': [
        'Tarutynska',
        'Тарутинська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarutynska'
    },
    {
      'name': 'tashanska',
      '$kuid': 'vA1Ki6WiW',
      'label': [
        'Tashanska',
        'Ташанська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'tashanska'
    },
    {
      'name': 'tatarbunarska',
      '$kuid': 'XOSh80JjW',
      'label': [
        'Tatarbunarska',
        'Татарбунарська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tatarbunarska'
    },
    {
      'name': 'tavriiska',
      '$kuid': 'SXXxz8B1A',
      'label': [
        'Tavriiska',
        'Таврійська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tavriiska'
    },
    {
      'name': 'tavriiska_3',
      '$kuid': 'BnmJrqyXN',
      'label': [
        'Tavriiska',
        'Таврійська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'tavriiska_3'
    },
    {
      'name': 'tavrychanska',
      '$kuid': 'cRbjXh6UZ',
      'label': [
        'Tavrychanska',
        'Тавричанська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tavrychanska'
    },
    {
      'name': 'teofipolska',
      '$kuid': 'ZU1QmL9Fb',
      'label': [
        'Teofipolska',
        'Теофіпольська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'teofipolska'
    },
    {
      'name': 'teplodarska',
      '$kuid': 'WjzOwljQv',
      'label': [
        'Teplodarska',
        'Теплодарська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'teplodarska'
    },
    {
      'name': 'teplytska',
      '$kuid': '0PjpXskyx',
      'label': [
        'Teplytska',
        'Теплицька'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'teplytska'
    },
    {
      'name': 'teplytska_2',
      '$kuid': '84J32M1jP',
      'label': [
        'Teplytska',
        'Теплицька'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'teplytska_2'
    },
    {
      'name': 'tereblechenska',
      '$kuid': 'EXaSVQcfN',
      'label': [
        'Tereblechenska',
        'Тереблеченська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'tereblechenska'
    },
    {
      'name': 'terebovlianska',
      '$kuid': 'kM6dxwErf',
      'label': [
        'Terebovlianska',
        'Теребовлянська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'terebovlianska'
    },
    {
      'name': 'tereshkivska',
      '$kuid': 'bnudiJTiZ',
      'label': [
        'Tereshkivska',
        'Терешківська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'tereshkivska'
    },
    {
      'name': 'teresvianska',
      '$kuid': 'PCOOB79Bn',
      'label': [
        'Teresvianska',
        'Тересвянська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'teresvianska'
    },
    {
      'name': 'ternivska',
      '$kuid': 'UhuFvb6VO',
      'label': [
        'Ternivska',
        'Тернівська'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'ternivska'
    },
    {
      'name': 'ternivska_2',
      '$kuid': 'B0eEuWMLJ',
      'label': [
        'Ternivska',
        'Тернівська'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'ternivska_2'
    },
    {
      'name': 'ternopilska_3',
      '$kuid': 'DBbhK7BMj',
      'label': [
        'Ternopilska',
        'Тернопільська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ternopilska_3'
    },
    {
      'name': 'ternuvatska',
      '$kuid': 'JBdJTvDd9',
      'label': [
        'Ternuvatska',
        'Тернуватська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'ternuvatska'
    },
    {
      'name': 'terpinnivska',
      '$kuid': 'Aia724dut',
      'label': [
        'Terpinnivska',
        'Терпіннівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'terpinnivska'
    },
    {
      'name': 'teterivska',
      '$kuid': 'wsaGEjtdO',
      'label': [
        'Teterivska',
        'Тетерівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'teterivska'
    },
    {
      'name': 'tetiivska',
      '$kuid': '5clsgHXZs',
      'label': [
        'Tetiivska',
        'Тетіївська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tetiivska'
    },
    {
      'name': 'tiachivska',
      '$kuid': 'sYSD10EZj',
      'label': [
        'Tiachivska',
        'Тячівська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tiachivska'
    },
    {
      'name': 'tiahynska',
      '$kuid': 'XNE0VS7G7',
      'label': [
        'Tiahynska',
        'Тягинська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'tiahynska'
    },
    {
      'name': 'tinystivska',
      '$kuid': 'XyuQhZQp7',
      'label': [
        'Tinystivska',
        'Тінистівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tinystivska'
    },
    {
      'name': 'tlumatska',
      '$kuid': 'ALm6q0YeO',
      'label': [
        'Tlumatska',
        'Тлумацька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tlumatska'
    },
    {
      'name': 'tokarievska',
      '$kuid': 'x1dwqWHUb',
      'label': [
        'Tokarievska',
        'Токарєвська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tokarievska'
    },
    {
      'name': 'tokmatska',
      '$kuid': 'mO9auhyAZ',
      'label': [
        'Tokmatska',
        'Токмацька'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tokmatska'
    },
    {
      'name': 'tomakivska',
      '$kuid': 'KfOQtl5eA',
      'label': [
        'Tomakivska',
        'Томаківська'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'tomakivska'
    },
    {
      'name': 'tomashivska',
      '$kuid': 'SfnCphqhW',
      'label': [
        'Tomashivska',
        'Томашівська'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tomashivska'
    },
    {
      'name': 'tomashpilska',
      '$kuid': 'EybgmBGYB',
      'label': [
        'Tomashpilska',
        'Томашпільська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'tomashpilska'
    },
    {
      'name': 'toporivska',
      '$kuid': 'KJuuMpOlS',
      'label': [
        'Toporivska',
        'Топорівська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'toporivska'
    },
    {
      'name': 'torchynska',
      '$kuid': '9OutBcmER',
      'label': [
        'Torchynska',
        'Торчинська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'torchynska'
    },
    {
      'name': 'toretska',
      '$kuid': 'hcXYaHPOi',
      'label': [
        'Toretska',
        'Торецька'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'toretska'
    },
    {
      'name': 'tovstenska',
      '$kuid': 'emySzzJ8Y',
      'label': [
        'Tovstenska',
        'Товстенська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tovstenska'
    },
    {
      'name': 'troitska',
      '$kuid': '7v73Zc9RA',
      'label': [
        'Troitska',
        'Троїцька'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'troitska'
    },
    {
      'name': 'troitska_2',
      '$kuid': 'TVlFUZdzg',
      'label': [
        'Troitska',
        'Троїцька'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'troitska_2'
    },
    {
      'name': 'trostianetska',
      '$kuid': 'XZyLHDlSX',
      'label': [
        'Trostianetska',
        'Тростянецька'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'trostianetska'
    },
    {
      'name': 'trostianetska_2',
      '$kuid': '0leGMTQZj',
      'label': [
        'Trostianetska',
        'Тростянецька'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'trostianetska_2'
    },
    {
      'name': 'trostianetska_3',
      '$kuid': 'Oo7aNqrKV',
      'label': [
        'Trostianetska',
        'Тростянецька'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'trostianetska_3'
    },
    {
      'name': 'trudivska',
      '$kuid': 'jdHtLpWb5',
      'label': [
        'Trudivska',
        'Трудівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'trudivska'
    },
    {
      'name': 'truskavetska',
      '$kuid': 'gDC1FpVpQ',
      'label': [
        'Truskavetska',
        'Трускавецька'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'truskavetska'
    },
    {
      'name': 'trybukhivska',
      '$kuid': 'rkgGbSOjS',
      'label': [
        'Trybukhivska',
        'Трибухівська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'trybukhivska'
    },
    {
      'name': 'tsarychanska',
      '$kuid': 'RQfSrO1gS',
      'label': [
        'Tsarychanska',
        'Царичанська'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsarychanska'
    },
    {
      'name': 'tsebrykivska',
      '$kuid': 'IZ6h84Y45',
      'label': [
        'Tsebrykivska',
        'Цебриківська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsebrykivska'
    },
    {
      'name': 'tsilynna',
      '$kuid': 'Ocve9gq8H',
      'label': [
        'Tsilynna',
        'Цілинна'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsilynna'
    },
    {
      'name': 'tsumanska',
      '$kuid': 'JXPqPK6Io',
      'label': [
        'Tsumanska',
        'Цуманська'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsumanska'
    },
    {
      'name': 'tsvitochnenska',
      '$kuid': 'f646EU8RV',
      'label': [
        'Tsvitochnenska',
        'Цвіточненська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsvitochnenska'
    },
    {
      'name': 'tsyblivska',
      '$kuid': 'e3j4jU7Nu',
      'label': [
        'Tsyblivska',
        'Циблівська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsyblivska'
    },
    {
      'name': 'tsyrkunivska',
      '$kuid': '3dMxSWORp',
      'label': [
        'Tsyrkunivska',
        'Циркунівська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsyrkunivska'
    },
    {
      'name': 'tulchynska',
      '$kuid': 'bxekLrzqz',
      'label': [
        'Tulchynska',
        'Тульчинська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'tulchynska'
    },
    {
      'name': 'tupychivska',
      '$kuid': 'qIRKi2NxH',
      'label': [
        'Tupychivska',
        'Тупичівська'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tupychivska'
    },
    {
      'name': 'turbivska',
      '$kuid': 's2nVIUvNG',
      'label': [
        'Turbivska',
        'Турбівська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'turbivska'
    },
    {
      'name': 'turie-remetivska',
      '$kuid': 'amVGAdMl9',
      'label': [
        'Turie-Remetivska',
        'Тур\'є-Реметівська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'turie-remetivska'
    },
    {
      'name': 'turiiska',
      '$kuid': 'pPZP7J5Jg',
      'label': [
        'Turiiska',
        'Турійська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'turiiska'
    },
    {
      'name': 'turkivska',
      '$kuid': 'Y3CYRqJCe',
      'label': [
        'Turkivska',
        'Турківська'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'turkivska'
    },
    {
      'name': 'tuzlivska',
      '$kuid': 'EKD9t8PAy',
      'label': [
        'Tuzlivska',
        'Тузлівська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tuzlivska'
    },
    {
      'name': 'tyshkivska',
      '$kuid': 'fawVftRju',
      'label': [
        'Tyshkivska',
        'Тишківська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'tyshkivska'
    },
    {
      'name': 'tysmenytska',
      '$kuid': '3XucRVulj',
      'label': [
        'Tysmenytska',
        'Тисменицька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tysmenytska'
    },
    {
      'name': 'tyvrivska',
      '$kuid': 'IV9vJGWlN',
      'label': [
        'Tyvrivska',
        'Тиврівська'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'tyvrivska'
    },
    {
      'name': 'udachnenska',
      '$kuid': 'wOuAGWgt2',
      'label': [
        'Udachnenska',
        'Удачненська'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'udachnenska'
    },
    {
      'name': 'uhlianska',
      '$kuid': 'j590P8pgI',
      'label': [
        'Uhlianska',
        'Углянська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'uhlianska'
    },
    {
      'name': 'uhlivska',
      '$kuid': 'vvwIPB5oX',
      'label': [
        'Uhlivska',
        'Углівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'uhlivska'
    },
    {
      'name': 'uhrynivska',
      '$kuid': 'fL1I74xwe',
      'label': [
        'Uhrynivska',
        'Угринівська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'uhrynivska'
    },
    {
      'name': 'uiutnenska',
      '$kuid': 'ca8kkj2b8',
      'label': [
        'Uiutnenska',
        'Уютненська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'uiutnenska'
    },
    {
      'name': 'ukrainska',
      '$kuid': 'tljxCbx0c',
      'label': [
        'Ukrainska',
        'Українська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ukrainska'
    },
    {
      'name': 'ukrainska_2',
      '$kuid': 'wadWioNGH',
      'label': [
        'Ukrainska',
        'Українська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ukrainska_2'
    },
    {
      'name': 'ukromnivska',
      '$kuid': 'oV7YXoBVD',
      'label': [
        'Ukromnivska',
        'Укромнівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'ukromnivska'
    },
    {
      'name': 'ulanivska',
      '$kuid': 'dOShEwSp4',
      'label': [
        'Ulanivska',
        'Уланівська'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ulanivska'
    },
    {
      'name': 'ulashanivska',
      '$kuid': 'Vp55nuGYG',
      'label': [
        'Ulashanivska',
        'Улашанівська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ulashanivska'
    },
    {
      'name': 'umanska',
      '$kuid': '2wKRlypwD',
      'label': [
        'Umanska',
        'Уманська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'umanska'
    },
    {
      'name': 'urozhainivska',
      '$kuid': 'ubWMZx2KR',
      'label': [
        'Urozhainivska',
        'Урожайнівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'urozhainivska'
    },
    {
      'name': 'urozhainivska_2',
      '$kuid': 'p05WxTFfA',
      'label': [
        'Urozhainivska',
        'Урожайнівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'urozhainivska_2'
    },
    {
      'name': 'usativska',
      '$kuid': 'i8qFEOcQG',
      'label': [
        'Usativska',
        'Усатівська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'usativska'
    },
    {
      'name': 'ushomyrska',
      '$kuid': 'zrk0f5o2p',
      'label': [
        'Ushomyrska',
        'Ушомирська'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ushomyrska'
    },
    {
      'name': 'uspenivska',
      '$kuid': 'QCv5yVAyc',
      'label': [
        'Uspenivska',
        'Успенівська'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'uspenivska'
    },
    {
      'name': 'ust-chornianska',
      '$kuid': 'syZIdLCrk',
      'label': [
        'Ust-Chornianska',
        'Усть-Чорнянська'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ust-chornianska'
    },
    {
      'name': 'ust-putylska',
      '$kuid': 'RJGaJyPqU',
      'label': [
        'Ust-Putylska',
        'Усть-Путильська'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ust-putylska'
    },
    {
      'name': 'ustyluzka',
      '$kuid': '1MYnSW5yz',
      'label': [
        'Ustyluzka',
        'Устилузька'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ustyluzka'
    },
    {
      'name': 'ustynivska',
      '$kuid': 'KCFfOzrHH',
      'label': [
        'Ustynivska',
        'Устинівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ustynivska'
    },
    {
      'name': 'uvarivska',
      '$kuid': 'rU5g3AFSm',
      'label': [
        'Uvarivska',
        'Уварівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'uvarivska'
    },
    {
      'name': 'uvarivska_2',
      '$kuid': 'y9SmpAiKj',
      'label': [
        'Uvarivska',
        'Уварівська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'uvarivska_2'
    },
    {
      'name': 'uzhhorodska',
      '$kuid': 'TeXoiX6Gh',
      'label': [
        'Uzhhorodska',
        'Ужгородська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'uzhhorodska'
    },
    {
      'name': 'uzynska',
      '$kuid': 'MuEpD6NUe',
      'label': [
        'Uzynska',
        'Узинська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'uzynska'
    },
    {
      'name': 'vakulivska',
      '$kuid': 'JtK1A5Yet',
      'label': [
        'Vakulivska',
        'Вакулівська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'vakulivska'
    },
    {
      'name': 'valkivska',
      '$kuid': 'CqPJpjWIW',
      'label': [
        'Valkivska',
        'Валківська'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'valkivska'
    },
    {
      'name': 'vanchykovetska',
      '$kuid': 'eRfh1lNh3',
      'label': [
        'Vanchykovetska',
        'Ванчиковецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'vanchykovetska'
    },
    {
      'name': 'vapniarska',
      '$kuid': 'K11lhHxVq',
      'label': [
        'Vapniarska',
        'Вапнярська'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vapniarska'
    },
    {
      'name': 'varaska',
      '$kuid': 'HfyfBGCFT',
      'label': [
        'Varaska',
        'Вараська'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'varaska'
    },
    {
      'name': 'varkovytska',
      '$kuid': 'eSdtDSLWQ',
      'label': [
        'Varkovytska',
        'Варковицька'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'varkovytska'
    },
    {
      'name': 'varvynska',
      '$kuid': 'fhFcjZhwk',
      'label': [
        'Varvynska',
        'Варвинська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'varvynska'
    },
    {
      'name': 'vashkivetska',
      '$kuid': 'bWRWHvciJ',
      'label': [
        'Vashkivetska',
        'Вашківецька'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vashkivetska'
    },
    {
      'name': 'vashkovetska',
      '$kuid': 'WxVYjaRdk',
      'label': [
        'Vashkovetska',
        'Вашковецька'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'vashkovetska'
    },
    {
      'name': 'vasylivska',
      '$kuid': 'b8mTPOqye',
      'label': [
        'Vasylivska',
        'Василівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylivska'
    },
    {
      'name': 'vasylivska_2',
      '$kuid': 'EwQWZiboo',
      'label': [
        'Vasylivska',
        'Василівська'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylivska_2'
    },
    {
      'name': 'vasylivska_3',
      '$kuid': 'A77OIhQ6s',
      'label': [
        'Vasylivska',
        'Василівська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylivska_3'
    },
    {
      'name': 'vasylkivska_4',
      '$kuid': 'vKl3wfOdP',
      'label': [
        'Vasylkivska',
        'Васильківська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylkivska_4'
    },
    {
      'name': 'vasylkivska_5',
      '$kuid': 'zQHDwjJZb',
      'label': [
        'Vasylkivska',
        'Васильківська'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylkivska_5'
    },
    {
      'name': 'vasylkovetska',
      '$kuid': 'jaeEPb7zr',
      'label': [
        'Vasylkovetska',
        'Васильковецька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylkovetska'
    },
    {
      'name': 'vatutinska',
      '$kuid': 'WB1aYIlcm',
      'label': [
        'Vatutinska',
        'Ватутінська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vatutinska'
    },
    {
      'name': 'vchoraishenska',
      '$kuid': 'h6sW5xw0Y',
      'label': [
        'Vchoraishenska',
        'Вчорайшенська'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vchoraishenska'
    },
    {
      'name': 'velykoandrusivska',
      '$kuid': '0GOmm0Rzv',
      'label': [
        'Velykoandrusivska',
        'Великоандрусівська'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoandrusivska'
    },
    {
      'name': 'velykobahachanska',
      '$kuid': 'ObDa62pNJ',
      'label': [
        'Velykobahachanska',
        'Великобагачанська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobahachanska'
    },
    {
      'name': 'velykoberezka',
      '$kuid': 'zMCV4Qjg9',
      'label': [
        'Velykoberezka',
        'Великоберезька'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoberezka'
    },
    {
      'name': 'velykobereznianska',
      '$kuid': 'i3J7IfujJ',
      'label': [
        'Velykobereznianska',
        'Великоберезнянська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobereznianska'
    },
    {
      'name': 'velykoberezovytska',
      '$kuid': '6018FDFkd',
      'label': [
        'Velykoberezovytska',
        'Великоберезовицька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoberezovytska'
    },
    {
      'name': 'velykobilozerska',
      '$kuid': 'OlUA1K3DB',
      'label': [
        'Velykobilozerska',
        'Великобілозерська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobilozerska'
    },
    {
      'name': 'velykobirkivska',
      '$kuid': '7DKekyDTa',
      'label': [
        'Velykobirkivska',
        'Великобірківська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobirkivska'
    },
    {
      'name': 'velykobudyshchanska',
      '$kuid': 'RwbWzu284',
      'label': [
        'Velykobudyshchanska',
        'Великобудищанська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobudyshchanska'
    },
    {
      'name': 'velykobuialytska',
      '$kuid': 'qJhsUtPTX',
      'label': [
        'Velykobuialytska',
        'Великобуялицька'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobuialytska'
    },
    {
      'name': 'velykoburlutska',
      '$kuid': 'Y6OvYn2H9',
      'label': [
        'Velykoburlutska',
        'Великобурлуцька'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoburlutska'
    },
    {
      'name': 'velykobychkivska',
      '$kuid': 'CzzvpAftk',
      'label': [
        'Velykobychkivska',
        'Великобичківська'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobychkivska'
    },
    {
      'name': 'velykobyihanska',
      '$kuid': 'Ppx5SjLTE',
      'label': [
        'Velykobyihanska',
        'Великобийганська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobyihanska'
    },
    {
      'name': 'velykodalnytska',
      '$kuid': 'Y0rWD47MW',
      'label': [
        'Velykodalnytska',
        'Великодальницька'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodalnytska'
    },
    {
      'name': 'velykodederkalska',
      '$kuid': 'uGtf81lQg',
      'label': [
        'Velykodederkalska',
        'Великодедеркальська'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodederkalska'
    },
    {
      'name': 'velykodobronska',
      '$kuid': 'NcDH3uh1d',
      'label': [
        'Velykodobronska',
        'Великодобронська'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodobronska'
    },
    {
      'name': 'velykodolynska',
      '$kuid': '6KU0Bu0l9',
      'label': [
        'Velykodolynska',
        'Великодолинська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodolynska'
    },
    {
      'name': 'velykodymerska',
      '$kuid': 'pyPQ8cVej',
      'label': [
        'Velykodymerska',
        'Великодимерська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodymerska'
    },
    {
      'name': 'velykohaivska',
      '$kuid': 'Nlf3c0KjL',
      'label': [
        'Velykohaivska',
        'Великогаївська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykohaivska'
    },
    {
      'name': 'velykokhutirska',
      '$kuid': 'G9jCTQoJ0',
      'label': [
        'Velykokhutirska',
        'Великохутірська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykokhutirska'
    },
    {
      'name': 'velykokopanivska',
      '$kuid': 'UhEGXceaG',
      'label': [
        'Velykokopanivska',
        'Великокопанівська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykokopanivska'
    },
    {
      'name': 'velykokuchurivska',
      '$kuid': 'RFdIy3K5y',
      'label': [
        'Velykokuchurivska',
        'Великокучурівська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykokuchurivska'
    },
    {
      'name': 'velykolepetyska',
      '$kuid': 'voW8rdMOp',
      'label': [
        'Velykolepetyska',
        'Великолепетиська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykolepetyska'
    },
    {
      'name': 'velykoliubinska',
      '$kuid': 'cWwVR2fC8',
      'label': [
        'Velykoliubinska',
        'Великолюбінська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoliubinska'
    },
    {
      'name': 'velykoluchkivska',
      '$kuid': 'U9cZCJuYJ',
      'label': [
        'Velykoluchkivska',
        'Великолучківська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoluchkivska'
    },
    {
      'name': 'velykomezhyritska',
      '$kuid': 'ttXp9iZC8',
      'label': [
        'Velykomezhyritska',
        'Великомежиріцька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomezhyritska'
    },
    {
      'name': 'velykomostivska',
      '$kuid': 'YKoQfPXYO',
      'label': [
        'Velykomostivska',
        'Великомостівська'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomostivska'
    },
    {
      'name': 'velykomykhailivska',
      '$kuid': 'PtZCEvrBe',
      'label': [
        'Velykomykhailivska',
        'Великомихайлівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomykhailivska'
    },
    {
      'name': 'velykomykhailivska_2',
      '$kuid': 'RiRSpotWX',
      'label': [
        'Velykomykhailivska',
        'Великомихайлівська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomykhailivska_2'
    },
    {
      'name': 'velykonovosilkivska',
      '$kuid': 'yGJ79lXGw',
      'label': [
        'Velykonovosilkivska',
        'Великоновосілківська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykonovosilkivska'
    },
    {
      'name': 'velykooleksandrivska',
      '$kuid': 'L1uLTPNEj',
      'label': [
        'Velykooleksandrivska',
        'Великоолександрівська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykooleksandrivska'
    },
    {
      'name': 'velykoomelianska',
      '$kuid': '7Mabf6XE2',
      'label': [
        'Velykoomelianska',
        'Великоомелянська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoomelianska'
    },
    {
      'name': 'velykoploskivska',
      '$kuid': '9ve9UYrUg',
      'label': [
        'Velykoploskivska',
        'Великоплосківська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoploskivska'
    },
    {
      'name': 'velykopysarivska',
      '$kuid': 'b9889MALv',
      'label': [
        'Velykopysarivska',
        'Великописарівська'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykopysarivska'
    },
    {
      'name': 'velykorublivska',
      '$kuid': 'unXDpsHUs',
      'label': [
        'Velykorublivska',
        'Великорублівська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykorublivska'
    },
    {
      'name': 'velykoseverynivska',
      '$kuid': 'zhpeF38ic',
      'label': [
        'Velykoseverynivska',
        'Великосеверинівська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoseverynivska'
    },
    {
      'name': 'velykosorochynska',
      '$kuid': 'GCKIm5lJS',
      'label': [
        'Velykosorochynska',
        'Великосорочинська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykosorochynska'
    },
    {
      'name': 'velymchenska',
      '$kuid': '2c2yYF13V',
      'label': [
        'Velymchenska',
        'Велимченська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'velymchenska'
    },
    {
      'name': 'velytska',
      '$kuid': '17cVfCCj7',
      'label': [
        'Velytska',
        'Велицька'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'velytska'
    },
    {
      'name': 'vendychanska',
      '$kuid': 'n9ulmej6e',
      'label': [
        'Vendychanska',
        'Вендичанська'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'vendychanska'
    },
    {
      'name': 'verbkivska',
      '$kuid': 'RVwjdHt6L',
      'label': [
        'Verbkivska',
        'Вербківська'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'verbkivska'
    },
    {
      'name': 'verbska',
      '$kuid': 'gBLLpfULv',
      'label': [
        'Verbska',
        'Вербська'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'verbska'
    },
    {
      'name': 'verenchanska',
      '$kuid': 'CYJ7n4nhJ',
      'label': [
        'Verenchanska',
        'Веренчанська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'verenchanska'
    },
    {
      'name': 'veresaievska',
      '$kuid': 'recfRb9yb',
      'label': [
        'Veresaievska',
        'Вересаєвська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'veresaievska'
    },
    {
      'name': 'verkhivtsivska',
      '$kuid': 'rWKQIbOHL',
      'label': [
        'Verkhivtsivska',
        'Верхівцівська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhivtsivska'
    },
    {
      'name': 'verkhnianska',
      '$kuid': 'aWspHW7Rv',
      'label': [
        'Verkhnianska',
        'Верхнянська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnianska'
    },
    {
      'name': 'verkhnodniprovska',
      '$kuid': 'zy9mqyoiS',
      'label': [
        'Verkhnodniprovska',
        'Верхньодніпровська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnodniprovska'
    },
    {
      'name': 'verkhnokoropetska',
      '$kuid': '4EWlPihDL',
      'label': [
        'Verkhnokoropetska',
        'Верхньокоропецька'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnokoropetska'
    },
    {
      'name': 'verkhnorohachytska',
      '$kuid': 'zwocndAb9',
      'label': [
        'Verkhnorohachytska',
        'Верхньорогачицька'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnorohachytska'
    },
    {
      'name': 'verkhnosyrovatska',
      '$kuid': 'fmKX9bPYH',
      'label': [
        'Verkhnosyrovatska',
        'Верхньосироватська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnosyrovatska'
    },
    {
      'name': 'verkhorichenska',
      '$kuid': 's7RbMrgm0',
      'label': [
        'Verkhorichenska',
        'Верхоріченська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhorichenska'
    },
    {
      'name': 'verkhovynska',
      '$kuid': '4sNiwJUUp',
      'label': [
        'Verkhovynska',
        'Верховинська'
      ],
      'raion': 'verkhovynskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhovynska'
    },
    {
      'name': 'vertiivska',
      '$kuid': 'FwgPtXe8X',
      'label': [
        'Vertiivska',
        'Вертіївська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vertiivska'
    },
    {
      'name': 'veselivska',
      '$kuid': 'y4NRIoA08',
      'label': [
        'Veselivska',
        'Веселівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselivska'
    },
    {
      'name': 'veselivska_2',
      '$kuid': '7RFVJZm3x',
      'label': [
        'Veselivska',
        'Веселівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselivska_2'
    },
    {
      'name': 'veselivska_3',
      '$kuid': 'SVWjdKTRE',
      'label': [
        'Veselivska',
        'Веселівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselivska_3'
    },
    {
      'name': 'veselynivska',
      '$kuid': 'NUl8dxd7P',
      'label': [
        'Veselynivska',
        'Веселинівська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselynivska'
    },
    {
      'name': 'vesnianska',
      '$kuid': 'V2sSMRUHO',
      'label': [
        'Vesnianska',
        'Веснянська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vesnianska'
    },
    {
      'name': 'viitovetska',
      '$kuid': 'v1diUJdSx',
      'label': [
        'Viitovetska',
        'Війтовецька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'viitovetska'
    },
    {
      'name': 'viknianska',
      '$kuid': 'eELMmeTjk',
      'label': [
        'Viknianska',
        'Вікнянська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'viknianska'
    },
    {
      'name': 'vilinska',
      '$kuid': 'OCEEX8f5X',
      'label': [
        'Vilinska',
        'Вілінська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilinska'
    },
    {
      'name': 'vilkhivska',
      '$kuid': '8Vv9N5icK',
      'label': [
        'Vilkhivska',
        'Вільхівська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilkhivska'
    },
    {
      'name': 'vilkhovetska',
      '$kuid': '6hTvGXjJm',
      'label': [
        'Vilkhovetska',
        'Вільховецька'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilkhovetska'
    },
    {
      'name': 'vilkhuvatska',
      '$kuid': 'kqXooL4mR',
      'label': [
        'Vilkhuvatska',
        'Вільхуватська'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilkhuvatska'
    },
    {
      'name': 'vilnenska',
      '$kuid': 'xZYZwPG7Y',
      'label': [
        'Vilnenska',
        'Вільненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnenska'
    },
    {
      'name': 'vilnianska',
      '$kuid': 'op8Pq6ev9',
      'label': [
        'Vilnianska',
        'Вільнянська'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnianska'
    },
    {
      'name': 'vilnohirska',
      '$kuid': 'PsmRRRP4H',
      'label': [
        'Vilnohirska',
        'Вільногірська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnohirska'
    },
    {
      'name': 'vilnozaporizka',
      '$kuid': 'UaAgyv5Kn',
      'label': [
        'Vilnozaporizka',
        'Вільнозапорізька'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnozaporizka'
    },
    {
      'name': 'vilshanska',
      '$kuid': 'sq48QZCdr',
      'label': [
        'Vilshanska',
        'Вільшанська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska'
    },
    {
      'name': 'vilshanska_2',
      '$kuid': 'xjhuTJcpe',
      'label': [
        'Vilshanska',
        'Вільшанська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska_2'
    },
    {
      'name': 'vilshanska_3',
      '$kuid': 'hw0SEKxnG',
      'label': [
        'Vilshanska',
        'Вільшанська'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska_3'
    },
    {
      'name': 'vilshanska_4',
      '$kuid': 'bwgRFNE3S',
      'label': [
        'Vilshanska',
        'Вільшанська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska_4'
    },
    {
      'name': 'vinkovetska',
      '$kuid': 'bRHO2IiER',
      'label': [
        'Vinkovetska',
        'Віньковецька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vinkovetska'
    },
    {
      'name': 'vinnytska_2',
      '$kuid': 'L9Yls5mZ9',
      'label': [
        'Vinnytska',
        'Вінницька'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vinnytska_2'
    },
    {
      'name': 'vladyslavivska',
      '$kuid': 'osHXMxF0B',
      'label': [
        'Vladyslavivska',
        'Владиславівська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vladyslavivska'
    },
    {
      'name': 'vodianska',
      '$kuid': '9Q97SDClA',
      'label': [
        'Vodianska',
        'Водянська'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vodianska'
    },
    {
      'name': 'vodianytska',
      '$kuid': 'kLkxTjX9U',
      'label': [
        'Vodianytska',
        'Водяницька'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vodianytska'
    },
    {
      'name': 'voikovska',
      '$kuid': '49M36k2tj',
      'label': [
        'Voikovska',
        'Войковська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'voikovska'
    },
    {
      'name': 'voikovska_2',
      '$kuid': 'iA1frsAlE',
      'label': [
        'Voikovska',
        'Войковська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'voikovska_2'
    },
    {
      'name': 'voinska',
      '$kuid': 'b5VJigfaj',
      'label': [
        'Voinska',
        'Воїнська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'voinska'
    },
    {
      'name': 'voinylivska',
      '$kuid': 'DnSQBwoF1',
      'label': [
        'Voinylivska',
        'Войнилівська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'voinylivska'
    },
    {
      'name': 'volnovaska',
      '$kuid': 'YcKqxANj6',
      'label': [
        'Volnovaska',
        'Волноваська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'volnovaska'
    },
    {
      'name': 'volochyska',
      '$kuid': 'M7vaQCgMZ',
      'label': [
        'Volochyska',
        'Волочиська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'volochyska'
    },
    {
      'name': 'volodarska',
      '$kuid': 'u1FvHk28Q',
      'label': [
        'Volodarska',
        'Володарська'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodarska'
    },
    {
      'name': 'volodymyretska',
      '$kuid': 'Hntv4kAcI',
      'label': [
        'Volodymyretska',
        'Володимирецька'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodymyretska'
    },
    {
      'name': 'volodymyrivska',
      '$kuid': 'Ql63QO1Bj',
      'label': [
        'Volodymyrivska',
        'Володимирівська'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodymyrivska'
    },
    {
      'name': 'volodymyr-volynska',
      '$kuid': '0iRwFUFXq',
      'label': [
        'Volodymyr-Volynska',
        'Володимир-Волинська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodymyr-volynska'
    },
    {
      'name': 'volokivska',
      '$kuid': 'vJgCNFtWg',
      'label': [
        'Volokivska',
        'Волоківська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'volokivska'
    },
    {
      'name': 'volovetska',
      '$kuid': 'wIqUjdFuX',
      'label': [
        'Volovetska',
        'Воловецька'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'volovetska'
    },
    {
      'name': 'volytska',
      '$kuid': 'DczEoPlNT',
      'label': [
        'Volytska',
        'Волицька'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'volytska'
    },
    {
      'name': 'vorobiovska',
      '$kuid': 'Y73rKmbxk',
      'label': [
        'Vorobiovska',
        'Воробйовська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vorobiovska'
    },
    {
      'name': 'vorokhtianska',
      '$kuid': '4kGtpYppE',
      'label': [
        'Vorokhtianska',
        'Ворохтянська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vorokhtianska'
    },
    {
      'name': 'voronkivska',
      '$kuid': 'JJZ6Pgltc',
      'label': [
        'Voronkivska',
        'Вороньківська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'voronkivska'
    },
    {
      'name': 'voronovytska',
      '$kuid': 'c6v8xwTXR',
      'label': [
        'Voronovytska',
        'Вороновицька'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'voronovytska'
    },
    {
      'name': 'vorozhbianska',
      '$kuid': 'mQgQdnu72',
      'label': [
        'Vorozhbianska',
        'Ворожбянська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'vorozhbianska'
    },
    {
      'name': 'voskhodnenska',
      '$kuid': '3IFBb8uvJ',
      'label': [
        'Voskhodnenska',
        'Восходненська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'voskhodnenska'
    },
    {
      'name': 'voskresenska',
      '$kuid': 'cXgrIlD35',
      'label': [
        'Voskresenska',
        'Воскресенська'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'voskresenska'
    },
    {
      'name': 'voskresenska_2',
      '$kuid': 'MuUIfpPWQ',
      'label': [
        'Voskresenska',
        'Воскресенська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'voskresenska_2'
    },
    {
      'name': 'vovchanska',
      '$kuid': 'uU2w13kMf',
      'label': [
        'Vovchanska',
        'Вовчанська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vovchanska'
    },
    {
      'name': 'vovkovynetska',
      '$kuid': 'JOCRPONYm',
      'label': [
        'Vovkovynetska',
        'Вовковинецька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vovkovynetska'
    },
    {
      'name': 'vozdvyzhivska',
      '$kuid': 'LBa6DddHZ',
      'label': [
        'Vozdvyzhivska',
        'Воздвижівська'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vozdvyzhivska'
    },
    {
      'name': 'voznesenska',
      '$kuid': 'UMRF9GUHZ',
      'label': [
        'Voznesenska',
        'Вознесенська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'voznesenska'
    },
    {
      'name': 'voznesenska_2',
      '$kuid': 'cq9UPtUbE',
      'label': [
        'Voznesenska',
        'Вознесенська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'voznesenska_2'
    },
    {
      'name': 'vradiivska',
      '$kuid': 'iC0r8GSJk',
      'label': [
        'Vradiivska',
        'Врадіївська'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vradiivska'
    },
    {
      'name': 'vuhledarska',
      '$kuid': 'sQWhPlyH7',
      'label': [
        'Vuhledarska',
        'Вугледарська'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'vuhledarska'
    },
    {
      'name': 'vuhlehirska',
      '$kuid': 'pEOg6aDMX',
      'label': [
        'Vuhlehirska',
        'Вуглегірська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vuhlehirska'
    },
    {
      'name': 'vyhodianska',
      '$kuid': 'A6ik3mJIS',
      'label': [
        'Vyhodianska',
        'Вигодянська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyhodianska'
    },
    {
      'name': 'vyhodska',
      '$kuid': 'xGC1wvykj',
      'label': [
        'Vyhodska',
        'Вигодська'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyhodska'
    },
    {
      'name': 'vylkivska',
      '$kuid': 'qPgR70I5H',
      'label': [
        'Vylkivska',
        'Вилківська'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'vylkivska'
    },
    {
      'name': 'vylotska',
      '$kuid': 'UY8ozqCJP',
      'label': [
        'Vylotska',
        'Вилоцька'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vylotska'
    },
    {
      'name': 'vynohradivska',
      '$kuid': 'MI5jjOAN2',
      'label': [
        'Vynohradivska',
        'Виноградівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradivska'
    },
    {
      'name': 'vynohradivska_2',
      '$kuid': 'z80VDojhK',
      'label': [
        'Vynohradivska',
        'Виноградівська'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradivska_2'
    },
    {
      'name': 'vynohradivska_3',
      '$kuid': 'GF8RKVEli',
      'label': [
        'Vynohradivska',
        'Виноградівська'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradivska_3'
    },
    {
      'name': 'vynohradnenska',
      '$kuid': 'zGLHLTf7f',
      'label': [
        'Vynohradnenska',
        'Виноградненська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradnenska'
    },
    {
      'name': 'vynohradska',
      '$kuid': 'OugoDPUXH',
      'label': [
        'Vynohradska',
        'Виноградська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradska'
    },
    {
      'name': 'vyrivska',
      '$kuid': 'Txv9Nvzaw',
      'label': [
        'Vyrivska',
        'Вирівська'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyrivska'
    },
    {
      'name': 'vyshenska',
      '$kuid': 'xGCWqOr2Q',
      'label': [
        'Vyshenska',
        'Вишенська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshenska'
    },
    {
      'name': 'vyshevytska',
      '$kuid': 'r5JqYWxAi',
      'label': [
        'Vyshevytska',
        'Вишевицька'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshevytska'
    },
    {
      'name': 'vyshhorodska',
      '$kuid': 'gAQtD5goB',
      'label': [
        'Vyshhorodska',
        'Вишгородська'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshhorodska'
    },
    {
      'name': 'vyshkivska',
      '$kuid': 'kIAdgbXxR',
      'label': [
        'Vyshkivska',
        'Вишківська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshkivska'
    },
    {
      'name': 'vyshneva',
      '$kuid': 'HIUGvJXBS',
      'label': [
        'Vyshneva',
        'Вишнева'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshneva'
    },
    {
      'name': 'vyshnivetska',
      '$kuid': '8T9LPlagR',
      'label': [
        'Vyshnivetska',
        'Вишнівецька'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivetska'
    },
    {
      'name': 'vyshnivska',
      '$kuid': 'adSeR4IuA',
      'label': [
        'Vyshnivska',
        'Вишнівська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivska'
    },
    {
      'name': 'vyshnivska_2',
      '$kuid': 'BBeY14Ql6',
      'label': [
        'Vyshnivska',
        'Вишнівська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivska_2'
    },
    {
      'name': 'vyshnivska_3',
      '$kuid': 'Gk7ue5mIY',
      'label': [
        'Vyshnivska',
        'Вишнівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivska_3'
    },
    {
      'name': 'vysochanska',
      '$kuid': 'arvMNtOqx',
      'label': [
        'Vysochanska',
        'Височанська'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysochanska'
    },
    {
      'name': 'vysochanska_2',
      '$kuid': 'feYFYQsG0',
      'label': [
        'Vysochanska',
        'Височанська'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysochanska_2'
    },
    {
      'name': 'vysokivska',
      '$kuid': 'jTNBL2wVo',
      'label': [
        'Vysokivska',
        'Високівська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysokivska'
    },
    {
      'name': 'vysokopilska',
      '$kuid': 'Wq0uteiAp',
      'label': [
        'Vysokopilska',
        'Високопільська'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysokopilska'
    },
    {
      'name': 'vysotska',
      '$kuid': 'QGtnphldZ',
      'label': [
        'Vysotska',
        'Висоцька'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysotska'
    },
    {
      'name': 'vytvytska',
      '$kuid': 'NArq2Imj8',
      'label': [
        'Vytvytska',
        'Витвицька'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'vytvytska'
    },
    {
      'name': 'vyzhnytska',
      '$kuid': 'MDuPoSZpx',
      'label': [
        'Vyzhnytska',
        'Вижницька'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyzhnytska'
    },
    {
      'name': 'vyzyrska',
      '$kuid': '5K0tJGBF7',
      'label': [
        'Vyzyrska',
        'Визирська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyzyrska'
    },
    {
      'name': 'yablunivska',
      '$kuid': 'QQhGCfkAH',
      'label': [
        'Yablunivska',
        'Яблунівська'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'yablunivska'
    },
    {
      'name': 'yablunivska_2',
      '$kuid': 'p5KoU8PHA',
      'label': [
        'Yablunivska',
        'Яблунівська'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yablunivska_2'
    },
    {
      'name': 'yahotynska',
      '$kuid': '9TOicaE6Q',
      'label': [
        'Yahotynska',
        'Яготинська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'yahotynska'
    },
    {
      'name': 'yakushynetska',
      '$kuid': 'XRWCQI6pt',
      'label': [
        'Yakushynetska',
        'Якушинецька'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'yakushynetska'
    },
    {
      'name': 'yakymivska',
      '$kuid': '3sxPfqC6U',
      'label': [
        'Yakymivska',
        'Якимівська'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'yakymivska'
    },
    {
      'name': 'yakymivska_3',
      '$kuid': 'Wl6fHq68W',
      'label': [
        'Yakymivska',
        'Якимівська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'yakymivska_3'
    },
    {
      'name': 'yaltynska',
      '$kuid': 'AChzOSnhW',
      'label': [
        'Yaltynska',
        'Ялтинська'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaltynska'
    },
    {
      'name': 'yamnytska',
      '$kuid': 'nOFCMWbBV',
      'label': [
        'Yamnytska',
        'Ямницька'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yamnytska'
    },
    {
      'name': 'yampilska',
      '$kuid': 'f6OuSYsMO',
      'label': [
        'Yampilska',
        'Ямпільська'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yampilska'
    },
    {
      'name': 'yampilska_2',
      '$kuid': 'zKX9bhEzQ',
      'label': [
        'Yampilska',
        'Ямпільська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yampilska_2'
    },
    {
      'name': 'yampilska_3',
      '$kuid': 'G8ljG6btu',
      'label': [
        'Yampilska',
        'Ямпільська'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'yampilska_3'
    },
    {
      'name': 'yantarnenska',
      '$kuid': 'xH5Nc8ezB',
      'label': [
        'Yantarnenska',
        'Янтарненська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'yantarnenska'
    },
    {
      'name': 'yaremchanska',
      '$kuid': 'NuYWW2hX5',
      'label': [
        'Yaremchanska',
        'Яремчанська'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaremchanska'
    },
    {
      'name': 'yarkivska',
      '$kuid': '6zXxdnaqI',
      'label': [
        'Yarkivska',
        'Ярківська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarkivska'
    },
    {
      'name': 'yarkopolenska',
      '$kuid': 'UCcJp2D0F',
      'label': [
        'Yarkopolenska',
        'Яркополенська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarkopolenska'
    },
    {
      'name': 'yarkopolenska_2',
      '$kuid': 'lZe1RTUiR',
      'label': [
        'Yarkopolenska',
        'Яркополенська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarkopolenska_2'
    },
    {
      'name': 'yarmolynetska',
      '$kuid': '1p8Omoirk',
      'label': [
        'Yarmolynetska',
        'Ярмолинецька'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarmolynetska'
    },
    {
      'name': 'yaroslavytska',
      '$kuid': '1ELIziwWQ',
      'label': [
        'Yaroslavytska',
        'Ярославицька'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaroslavytska'
    },
    {
      'name': 'yarunska',
      '$kuid': 'Mk1qplStV',
      'label': [
        'Yarunska',
        'Ярунська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarunska'
    },
    {
      'name': 'yaryshivska',
      '$kuid': 'LhdwD7oKm',
      'label': [
        'Yaryshivska',
        'Яришівська'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaryshivska'
    },
    {
      'name': 'yasinianska',
      '$kuid': 'ayiaWecxd',
      'label': [
        'Yasinianska',
        'Ясінянська'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yasinianska'
    },
    {
      'name': 'yaskivska',
      '$kuid': 'N9QTdJ4Ee',
      'label': [
        'Yaskivska',
        'Яськівська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaskivska'
    },
    {
      'name': 'yasnopolianska',
      '$kuid': '6uxCQYmps',
      'label': [
        'Yasnopolianska',
        'Яснополянська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yasnopolianska'
    },
    {
      'name': 'yasynuvatska',
      '$kuid': 'gXqbH6Rz0',
      'label': [
        'Yasynuvatska',
        'Ясинуватська'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'yasynuvatska'
    },
    {
      'name': 'yavorivska',
      '$kuid': 'wxCB5pCp2',
      'label': [
        'Yavorivska',
        'Яворівська'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yavorivska'
    },
    {
      'name': 'yelanetska',
      '$kuid': 'PQwytLPxF',
      'label': [
        'Yelanetska',
        'Єланецька'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'yelanetska'
    },
    {
      'name': 'yemilchynska',
      '$kuid': 'Gyks02NDr',
      'label': [
        'Yemilchynska',
        'Ємільчинська'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yemilchynska'
    },
    {
      'name': 'yenakiievska',
      '$kuid': 'ghCgoH3TL',
      'label': [
        'Yenakiievska',
        'Єнакієвська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yenakiievska'
    },
    {
      'name': 'yerkivska',
      '$kuid': 'bn3m9hTYR',
      'label': [
        'Yerkivska',
        'Єрківська'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'yerkivska'
    },
    {
      'name': 'yermakivska',
      '$kuid': 'HPFUAfOKt',
      'label': [
        'Yermakivska',
        'Єрмаківська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yermakivska'
    },
    {
      'name': 'yevpatoriiska',
      '$kuid': 'n1HsZEurw',
      'label': [
        'Yevpatoriiska',
        'Євпаторійська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yevpatoriiska'
    },
    {
      'name': 'yezupilska',
      '$kuid': '0ocMuSwgD',
      'label': [
        'Yezupilska',
        'Єзупільська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yezupilska'
    },
    {
      'name': 'yunakivska',
      '$kuid': 'edUlZ8APv',
      'label': [
        'Yunakivska',
        'Юнаківська'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'yunakivska'
    },
    {
      'name': 'yurivska',
      '$kuid': 'Q4cymJKpo',
      'label': [
        'Yurivska',
        'Юр\'ївська'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'yurivska'
    },
    {
      'name': 'yurkovetska',
      '$kuid': 'DQOKsVoxK',
      'label': [
        'Yurkovetska',
        'Юрковецька'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'yurkovetska'
    },
    {
      'name': 'yuvileina',
      '$kuid': 'PRszHwfSf',
      'label': [
        'Yuvileina',
        'Ювілейна'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'yuvileina'
    },
    {
      'name': 'yuzhnenska',
      '$kuid': '5uYg6JXeJ',
      'label': [
        'Yuzhnenska',
        'Южненська'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'yuzhnenska'
    },
    {
      'name': 'yuzhnoukrainska',
      '$kuid': 'PYOADMS9y',
      'label': [
        'Yuzhnoukrainska',
        'Южноукраїнська'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'yuzhnoukrainska'
    },
    {
      'name': 'zabolotivska',
      '$kuid': 'eR5H5M8zp',
      'label': [
        'Zabolotivska',
        'Заболотівська'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabolotivska'
    },
    {
      'name': 'zabolottivska',
      '$kuid': 'JU2sm06QR',
      'label': [
        'Zabolottivska',
        'Заболоттівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabolottivska'
    },
    {
      'name': 'zabolottsivska',
      '$kuid': 'LblwDJ4Gt',
      'label': [
        'Zabolottsivska',
        'Заболотцівська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabolottsivska'
    },
    {
      'name': 'zabrodivska',
      '$kuid': 'G1nvvbdpa',
      'label': [
        'Zabrodivska',
        'Забродівська'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabrodivska'
    },
    {
      'name': 'zachepylivska',
      '$kuid': '8qBJ24WhS',
      'label': [
        'Zachepylivska',
        'Зачепилівська'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'zachepylivska'
    },
    {
      'name': 'zahvizdianska',
      '$kuid': '8U1evxK4E',
      'label': [
        'Zahvizdianska',
        'Загвіздянська'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zahvizdianska'
    },
    {
      'name': 'zaitsivska',
      '$kuid': 'ykDnCilSE',
      'label': [
        'Zaitsivska',
        'Зайцівська'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaitsivska'
    },
    {
      'name': 'zakharivska',
      '$kuid': 'B9L7QoPzW',
      'label': [
        'Zakharivska',
        'Захарівська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zakharivska'
    },
    {
      'name': 'zakupnenska',
      '$kuid': 'ycLyvkmBH',
      'label': [
        'Zakupnenska',
        'Закупненська'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zakupnenska'
    },
    {
      'name': 'zalishchytska',
      '$kuid': 'FCYJSPFhQ',
      'label': [
        'Zalishchytska',
        'Заліщицька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zalishchytska'
    },
    {
      'name': 'zaliznychnenska',
      '$kuid': 'SVd12cqVg',
      'label': [
        'Zaliznychnenska',
        'Залізничненська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaliznychnenska'
    },
    {
      'name': 'zalozetska',
      '$kuid': 'GVWzrIRmn',
      'label': [
        'Zalozetska',
        'Залозецька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zalozetska'
    },
    {
      'name': 'zaozernenska',
      '$kuid': 'fg9FXy54Y',
      'label': [
        'Zaozernenska',
        'Заозерненська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaozernenska'
    },
    {
      'name': 'zaporizka_2',
      '$kuid': '44VzJxgih',
      'label': [
        'Zaporizka',
        'Запорізька'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'zaporizka_2'
    },
    {
      'name': 'zarichanska',
      '$kuid': 'gUM8HjBXx',
      'label': [
        'Zarichanska',
        'Зарічанська'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'zarichanska'
    },
    {
      'name': 'zarichnenska',
      '$kuid': 'Oo0H75u54',
      'label': [
        'Zarichnenska',
        'Зарічненська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zarichnenska'
    },
    {
      'name': 'zarichnenska_2',
      '$kuid': 'WI1EZPvkg',
      'label': [
        'Zarichnenska',
        'Зарічненська'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'zarichnenska_2'
    },
    {
      'name': 'zasluchnenska',
      '$kuid': 'CWiWGJKdb',
      'label': [
        'Zasluchnenska',
        'Заслучненська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'zasluchnenska'
    },
    {
      'name': 'zastavnivska',
      '$kuid': '8Mi1LyQkx',
      'label': [
        'Zastavnivska',
        'Заставнівська'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'zastavnivska'
    },
    {
      'name': 'zaturtsivska',
      '$kuid': 'QAY7aiwr2',
      'label': [
        'Zaturtsivska',
        'Затурцівська'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaturtsivska'
    },
    {
      'name': 'zatyshanska',
      '$kuid': 'r1gByjG2c',
      'label': [
        'Zatyshanska',
        'Затишанська'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zatyshanska'
    },
    {
      'name': 'zatyshnianska',
      '$kuid': 'yPzsjl6g0',
      'label': [
        'Zatyshnianska',
        'Затишнянська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zatyshnianska'
    },
    {
      'name': 'zavallivska',
      '$kuid': 'TDlPH4IOA',
      'label': [
        'Zavallivska',
        'Заваллівська'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavallivska'
    },
    {
      'name': 'zavitnenska',
      '$kuid': 'e17WAfx9g',
      'label': [
        'Zavitnenska',
        'Завітненська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavitnenska'
    },
    {
      'name': 'zavitnenska_2',
      '$kuid': 'ZOuFW8JTQ',
      'label': [
        'Zavitnenska',
        'Завітненська'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavitnenska_2'
    },
    {
      'name': 'zavito-leninska',
      '$kuid': 'pWlQhBUjD',
      'label': [
        'Zavito-Leninska',
        'Завіто-Ленінська'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavito-leninska'
    },
    {
      'name': 'zavodska',
      '$kuid': 'G3sjEk4pp',
      'label': [
        'Zavodska',
        'Заводська'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavodska'
    },
    {
      'name': 'zavodska_2',
      '$kuid': '8E9VdDUzm',
      'label': [
        'Zavodska',
        'Заводська'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavodska_2'
    },
    {
      'name': 'zazymska',
      '$kuid': 'pyep5Oc2M',
      'label': [
        'Zazymska',
        'Зазимська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'zazymska'
    },
    {
      'name': 'zbarazka',
      '$kuid': 'vJpPUCDAS',
      'label': [
        'Zbarazka',
        'Збаразька'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zbarazka'
    },
    {
      'name': 'zborivska',
      '$kuid': 'yjvtsU5cl',
      'label': [
        'Zborivska',
        'Зборівська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zborivska'
    },
    {
      'name': 'zdolbunivska',
      '$kuid': '2pt7urqrv',
      'label': [
        'Zdolbunivska',
        'Здолбунівська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'zdolbunivska'
    },
    {
      'name': 'zdovbytska',
      '$kuid': 'EF1XXZ96n',
      'label': [
        'Zdovbytska',
        'Здовбицька'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'zdovbytska'
    },
    {
      'name': 'zelenivska',
      '$kuid': 'tgf6lOeSK',
      'label': [
        'Zelenivska',
        'Зеленівська'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenivska'
    },
    {
      'name': 'zelenodolska',
      '$kuid': 'TMIhRqaA7',
      'label': [
        'Zelenodolska',
        'Зеленодольська'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenodolska'
    },
    {
      'name': 'zelenohirska',
      '$kuid': 'rz8y1n6Ba',
      'label': [
        'Zelenohirska',
        'Зеленогірська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenohirska'
    },
    {
      'name': 'zelenohirska_2',
      '$kuid': 'eSF7YTjEZ',
      'label': [
        'Zelenohirska',
        'Зеленогірська'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenohirska_2'
    },
    {
      'name': 'zelenopidska',
      '$kuid': 'SnH8L4Nha',
      'label': [
        'Zelenopidska',
        'Зеленопідська'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenopidska'
    },
    {
      'name': 'zelenska',
      '$kuid': 'G864hp1tk',
      'label': [
        'Zelenska',
        'Зеленська'
      ],
      'raion': 'verkhovynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenska'
    },
    {
      'name': 'zemlianychnenska',
      '$kuid': '7hIX7oqtw',
      'label': [
        'Zemlianychnenska',
        'Земляничненська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zemlianychnenska'
    },
    {
      'name': 'zernivska',
      '$kuid': '5VWeVYVgG',
      'label': [
        'Zernivska',
        'Зернівська'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'zernivska'
    },
    {
      'name': 'zernivska_2',
      '$kuid': '79s7S4VUe',
      'label': [
        'Zernivska',
        'Зернівська'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zernivska_2'
    },
    {
      'name': 'zghurivska',
      '$kuid': 'tsyESyN2k',
      'label': [
        'Zghurivska',
        'Згурівська'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'zghurivska'
    },
    {
      'name': 'zhashkivska',
      '$kuid': 'yHnEPsfq3',
      'label': [
        'Zhashkivska',
        'Жашківська'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhashkivska'
    },
    {
      'name': 'zhdanivska',
      '$kuid': 't8ASmakWO',
      'label': [
        'Zhdanivska',
        'Жданівська'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhdanivska'
    },
    {
      'name': 'zhdanivska_3',
      '$kuid': 'BPyQxkk84',
      'label': [
        'Zhdanivska',
        'Жданівська'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhdanivska_3'
    },
    {
      'name': 'zhdeniivska',
      '$kuid': '0ex1V25FZ',
      'label': [
        'Zhdeniivska',
        'Жденіївська'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhdeniivska'
    },
    {
      'name': 'zheliabovska',
      '$kuid': 'Cf66rnooK',
      'label': [
        'Zheliabovska',
        'Желябовська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zheliabovska'
    },
    {
      'name': 'zhemchuzhynska',
      '$kuid': 'VQoYQKJ7s',
      'label': [
        'Zhemchuzhynska',
        'Жемчужинська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhemchuzhynska'
    },
    {
      'name': 'zhmerynska',
      '$kuid': 'jCmUij0Fl',
      'label': [
        'Zhmerynska',
        'Жмеринська'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhmerynska'
    },
    {
      'name': 'zhovkivska',
      '$kuid': 'gkgy6OokV',
      'label': [
        'Zhovkivska',
        'Жовківська'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhovkivska'
    },
    {
      'name': 'zhovtanetska',
      '$kuid': 'iyFCFukxD',
      'label': [
        'Zhovtanetska',
        'Жовтанецька'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhovtanetska'
    },
    {
      'name': 'zhovtovodska',
      '$kuid': 'LweUdeoAT',
      'label': [
        'Zhovtovodska',
        'Жовтоводська'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhovtovodska'
    },
    {
      'name': 'zhuravlivska',
      '$kuid': 'EnHziTpkP',
      'label': [
        'Zhuravlivska',
        'Журавлівська'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhuravlivska'
    },
    {
      'name': 'zhuravnenska',
      '$kuid': 'hzhakgNn2',
      'label': [
        'Zhuravnenska',
        'Журавненська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhuravnenska'
    },
    {
      'name': 'zhuravska',
      '$kuid': '7PmxAfBgY',
      'label': [
        'Zhuravska',
        'Журавська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhuravska'
    },
    {
      'name': 'zhvanetska',
      '$kuid': 'HsEhgAzRy',
      'label': [
        'Zhvanetska',
        'Жванецька'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhvanetska'
    },
    {
      'name': 'zhydachivska',
      '$kuid': 'kvQ9SMJHz',
      'label': [
        'Zhydachivska',
        'Жидачівська'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhydachivska'
    },
    {
      'name': 'zhytomyrska_2',
      '$kuid': '4KflfXLms',
      'label': [
        'Zhytomyrska',
        'Житомирська'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhytomyrska_2'
    },
    {
      'name': 'zinkivska',
      '$kuid': 'UFlbtnzH5',
      'label': [
        'Zinkivska',
        'Зіньківська'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'zinkivska'
    },
    {
      'name': 'zinkivska_2',
      '$kuid': 'RkbDYm8Ak',
      'label': [
        'Zinkivska',
        'Зіньківська'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'zinkivska_2'
    },
    {
      'name': 'zlynska',
      '$kuid': '6zAMDKJqU',
      'label': [
        'Zlynska',
        'Злинська'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'zlynska'
    },
    {
      'name': 'zmiivska',
      '$kuid': 'Kev9LzgRq',
      'label': [
        'Zmiivska',
        'Зміївська'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zmiivska'
    },
    {
      'name': 'znamianska',
      '$kuid': 'w8T6k2l7H',
      'label': [
        'Znamianska',
        'Знам\'янська'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'znamianska'
    },
    {
      'name': 'znamianska_2',
      '$kuid': '3PHYctjVw',
      'label': [
        'Znamianska',
        'Знам\'янська'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'znamianska_2'
    },
    {
      'name': 'znob-novhorodska',
      '$kuid': '8vO6i8FMA',
      'label': [
        'Znob-Novhorodska',
        'Зноб-Новгородська'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'znob-novhorodska'
    },
    {
      'name': 'zolochivska',
      '$kuid': 'oEVn85YoF',
      'label': [
        'Zolochivska',
        'Золочівська'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolochivska'
    },
    {
      'name': 'zolochivska_2',
      '$kuid': 'luWuWQCSL',
      'label': [
        'Zolochivska',
        'Золочівська'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolochivska_2'
    },
    {
      'name': 'zolochivska_3',
      '$kuid': 'dU5gsBcOI',
      'label': [
        'Zolochivska',
        'Золочівська'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolochivska_3'
    },
    {
      'name': 'zolotnykivska',
      '$kuid': 'cEZ3LzdOg',
      'label': [
        'Zolotnykivska',
        'Золотниківська'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotnykivska'
    },
    {
      'name': 'zolotoniska',
      '$kuid': 'pfkahD78Q',
      'label': [
        'Zolotoniska',
        'Золотоніська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotoniska'
    },
    {
      'name': 'zolotopolenska',
      '$kuid': '7XfTDueIE',
      'label': [
        'Zolotopolenska',
        'Золотополенська'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotopolenska'
    },
    {
      'name': 'zolotopotitska',
      '$kuid': 'v08Wb2sJl',
      'label': [
        'Zolotopotitska',
        'Золотопотіцька'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotopotitska'
    },
    {
      'name': 'zorianska',
      '$kuid': 'Iab1Gfbo9',
      'label': [
        'Zorianska',
        'Зорянська'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'zorianska'
    },
    {
      'name': 'zorivska',
      '$kuid': 'WDuUrCiiR',
      'label': [
        'Zorivska',
        'Зорівська'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'zorivska'
    },
    {
      'name': 'zorkinska',
      '$kuid': 'qB6Dh44sO',
      'label': [
        'Zorkinska',
        'Зоркінська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zorkinska'
    },
    {
      'name': 'zuiska',
      '$kuid': 'tzVStHG1y',
      'label': [
        'Zuiska',
        'Зуйська'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zuiska'
    },
    {
      'name': 'zvanivska',
      '$kuid': '4Hp8gz6y4',
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
      '$kuid': 'OGE4iJjZj',
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
      '$kuid': '3YIwr8zTl',
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
      '$kuid': 's6UR3E4Ne',
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
      '$kuid': 'lZWHqryPc',
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
      '$kuid': 'X3owyM2DN',
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
      '$kuid': 'HXDeZOkZx',
      'label': [
        'Zymynska',
        'Зиминська'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymynska'
    },
    {
      'name': 'status_idp',
      '$kuid': 'vpmwxNb0i',
      'label': [
        'Internally Displaced Person (IDP)',
        'Внутрішньо-переміщена особа (ВПО)'
      ],
      'list_name': 'lj3ze00',
      '$autovalue': 'status_idp'
    },
    {
      'name': 'status_conflict',
      '$kuid': 'PCLvGahZo',
      'label': [
        'Conflict-Affected person',
        'Особа, постраждала від конфлікту'
      ],
      'list_name': 'lj3ze00',
      '$autovalue': 'status_conflict'
    },
    {
      'name': 'status_returnee',
      '$kuid': 'MOKIIAswu',
      'label': [
        'Returnee',
        'Особа, яка повернулася'
      ],
      'list_name': 'lj3ze00',
      '$autovalue': 'status_returnee'
    },
    {
      'name': 'status_refugee',
      '$kuid': 'xwCOH5bHD',
      'label': [
        'Refugee/asylum seeker',
        'Біженець/особа, що потребує прихистку'
      ],
      'list_name': 'lj3ze00',
      '$autovalue': 'status_refugee'
    },
    {
      'name': 'yes',
      '$kuid': 'lP1UdLETj',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'ITN',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      '$kuid': 'p6oIom4RB',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'ITN',
      '$autovalue': 'no'
    },
    {
      'name': 'national_passport__book',
      '$kuid': 'BCGqqVAEa',
      'label': [
        'National Passport (book)',
        'Національний паспорт (книжка)'
      ],
      'list_name': 'ID',
      '$autovalue': 'national_passport__book'
    },
    {
      'name': 'national_passport__card',
      '$kuid': 'CrVGMvEfe',
      'label': [
        'National Passport (card)',
        'Національний паспорт (карта)'
      ],
      'list_name': 'ID',
      '$autovalue': 'national_passport__card'
    },
    {
      'name': 'national_passport__diia_app',
      '$kuid': 'LGRnksZza',
      'label': [
        'National Passport (Diia app)',
        'Національний паспорт (додаток Дія)'
      ],
      'list_name': 'ID',
      '$autovalue': 'national_passport__diia_app'
    },
    {
      'name': 'passport__ussr_red_book',
      '$kuid': 'fBqEYq5GT',
      'label': [
        'Passport (USSR red book)',
        'Паспорт (Червона книга СРСР)'
      ],
      'list_name': 'ID',
      '$autovalue': 'passport__ussr_red_book'
    },
    {
      'name': 'passport_for_international_travel',
      '$kuid': '86WoWU4S7',
      'label': [
        'Passport for international travel',
        'Закордонний паспорт'
      ],
      'list_name': 'ID',
      '$autovalue': 'passport_for_international_travel'
    },
    {
      'name': 'certificate_issued_on_birth',
      '$kuid': '1snuUjhR3',
      'label': [
        'Certificate issued on birth',
        'Свідоцтво про народження'
      ],
      'list_name': 'ID',
      '$autovalue': 'certificate_issued_on_birth'
    },
    {
      'name': 'birth_certificate',
      '$kuid': '1zNZq1pv1',
      'label': [
        'Birth certificate',
        'Свідоцтво про народження'
      ],
      'list_name': 'ID',
      '$autovalue': 'birth_certificate'
    },
    {
      'name': 'driver_s_license',
      '$kuid': 'mbIFTcf4w',
      'label': [
        'Driver’s license',
        'Водійські права'
      ],
      'list_name': 'ID',
      '$autovalue': 'driver_s_license'
    },
    {
      'name': 'pensioner_certificate',
      '$kuid': 'LJi3ZwOhG',
      'label': [
        'Pensioner certificate',
        'Посвідчення пенсіонера'
      ],
      'list_name': 'ID',
      '$autovalue': 'pensioner_certificate'
    },
    {
      'name': 'other',
      '$kuid': 'n5ZuiUIIv',
      'label': [
        'Other',
        'Інший'
      ],
      'list_name': 'ID',
      '$autovalue': 'other'
    },
    {
      'name': '1',
      '$kuid': 'F6hvGu11V',
      'label': [
        'Female',
        'Жінка'
      ],
      'list_name': 'lg0he26',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'NJLb6wMmw',
      'label': [
        'Male',
        'Чоловік'
      ],
      'list_name': 'lg0he26',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'Dqz4DiCjY',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ap5ml26',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'mEyQRQ0GY',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ap5ml26',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'flITSu7XV',
      'label': [
        'Male',
        'Чоловік'
      ],
      'list_name': 'sex_hh',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'lAcjicGaV',
      'label': [
        'Female',
        'Жінка'
      ],
      'list_name': 'sex_hh',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'rahL60p9w',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ze9if14',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'dw4x07frT',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ze9if14',
      '$autovalue': '2'
    },
    {
      'name': 'female',
      '$kuid': 'Ef35KyLpk',
      'label': [
        'Female',
        'Жінка'
      ],
      'list_name': 'gp8xs11',
      '$autovalue': 'female'
    },
    {
      'name': 'male',
      '$kuid': '3yalgFIqT',
      'label': [
        'Male',
        'Чоловік'
      ],
      'list_name': 'gp8xs11',
      '$autovalue': 'male'
    },
    {
      'name': 'nogender',
      '$kuid': 'db52fyJNG',
      'label': [
        'Does not wish to identify',
        'Не бажає ідентифікувати'
      ],
      'list_name': 'gp8xs11',
      '$autovalue': 'nogender'
    },
    {
      'name': 'eyesight',
      '$kuid': 'Bj6RclULZ',
      'label': [
        'Eyesight',
        'Зір'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'eyesight'
    },
    {
      'name': 'hearing',
      '$kuid': 'peuXmajwy',
      'label': [
        'Hearing',
        'Слух'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'hearing'
    },
    {
      'name': 'mobility',
      '$kuid': 'aGCxHpGbe',
      'label': [
        'Mobility',
        'Рухливість'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'mobility'
    },
    {
      'name': 'difficulty_to_carry_heavy_weights',
      '$kuid': 'Di1giKTI4',
      'label': [
        'Difficulty to carry heavy weights',
        'Складність піднімати важкі предмети'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'difficulty_to_carry_heavy_weights'
    },
    {
      'name': 'memory_and_concentration',
      '$kuid': 'NPSnHFIHc',
      'label': [
        'Memory and concentration',
        'Пам\'ять та концентрація'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'memory_and_concentration'
    },
    {
      'name': 'self_care__such_as_washing_all_over_or_d',
      '$kuid': '2zfE4rWGq',
      'label': [
        'Self-care, such as washing all over or dressing',
        'Догляд за собою, особиста гігієна та складність вдягнутися'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'self_care__such_as_washing_all_over_or_d'
    },
    {
      'name': 'communication',
      '$kuid': 'BFAUrQ1QG',
      'label': [
        'Communication',
        'Комунікація'
      ],
      'list_name': 'cm5bv05',
      '$autovalue': 'communication'
    },
    {
      'name': 'hkmv_____________',
      '$kuid': '6evBrssFU',
      'label': [
        'HKMV Family hygiene kit for IDPs on the move',
        'HKMV Сімейний гігієнічний набір для ВПО в дорозі'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'hkmv_____________'
    },
    {
      'name': 'hkf_______________',
      '$kuid': 'ugo8tj0wK',
      'label': [
        'HKF Hygiene kit',
        'HKF Сімейний гігієнічний набір для ВПО без засобів  існування'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'hkf_______________'
    },
    {
      'name': 'nfkf_______nfi',
      '$kuid': '0y2QzukLj',
      'label': [
        'NFKF Family NFI Kit',
        'NFKF Сімейний непродовольчий набір NFI'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'nfkf_______nfi'
    },
    {
      'name': 'ks_____',
      '$kuid': 'JsAy8DJ7p',
      'label': [
        'KS Family kitchen set',
        'KS Сімейний кухонний набір'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'ks_____'
    },
    {
      'name': 'bk_baby_kit1',
      '$kuid': 'OftPM2mOL',
      'label': [
        'BK1 Baby Hygiene Kit 1',
        'BK1 Гігієнічний набір для дитини 1'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'bk_baby_kit1'
    },
    {
      'name': 'bk_baby_kit2',
      '$kuid': 'KkgLBawOP',
      'label': [
        'BK2 Baby Hygiene Kit 2',
        'BK2 Гігієнічний набір для дитини 2'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'bk_baby_kit2'
    },
    {
      'name': 'bk_baby_kit3',
      '$kuid': 'NVTy7ASFc',
      'label': [
        'BK3 Baby Hygiene Kit 3',
        'BK3 Гігієнічний набір для дитини 3'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'bk_baby_kit3'
    },
    {
      'name': 'bk_baby_kit4',
      '$kuid': 'BAN5zWGcL',
      'label': [
        'BK4 Baby Hygiene Kit 4',
        'BK4 Гігієнічний набір для дитини 4'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'bk_baby_kit4'
    },
    {
      'name': 'wkb1___________1',
      '$kuid': 'qQd6GJSXx',
      'label': [
        'WKB1 Baby Winterization Kit 1',
        'WKB1 Дитячий набір для зимування № 1'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'wkb1___________1'
    },
    {
      'name': 'wkb2___________2',
      '$kuid': 'GZponSb0p',
      'label': [
        'WKB2 Baby Winterization Kit 2',
        'WKB2 Дитячий набір для зимування № 2'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'wkb2___________2'
    },
    {
      'name': 'wkb3___________3',
      '$kuid': 'lt3tu194c',
      'label': [
        'WKB3 Baby Winterization Kit 3',
        'WKB3 Дитячий набір для зимування № 3'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'wkb3___________3'
    },
    {
      'name': 'wkb4___________4',
      '$kuid': 'wYsOawxdt',
      'label': [
        'WKB4 Baby Winterization Kit 4',
        'WKB4 Дитячий набір для зимування № 4'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'wkb4___________4'
    },
    {
      'name': 'bln_',
      '$kuid': '94EvS2Slj',
      'label': [
        'BLN High Thermal Blankets',
        'BLN Термоковдри'
      ],
      'list_name': 'eo9av66',
      '$autovalue': 'bln_'
    },
    {
      'name': '__',
      '$kuid': 'inzx6TLPp',
      'label': [
        'Solar lamps',
        'Сонячні лампи'
      ],
      'list_name': 'eo9av66',
      '$autovalue': '__'
    },
    {
      'name': '1',
      '$kuid': 'tQdVkcrC8',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'me4um32',
      '$autovalue': '1'
    },
    {
      'name': '1',
      '$kuid': '8JbkjSAWg',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'vj87o95',
      '$autovalue': '1'
    },
    {
      'name': '1',
      '$kuid': 'trvhnjf44',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'nw5re00',
      '$autovalue': '1'
    },
    {
      'name': '1',
      '$kuid': '67DNcRHeQ',
      'label': [
        'At a collective/transit center',
        'У колективному/транзитному центрі'
      ],
      'list_name': 'housing',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'KCOqyGxEx',
      'label': [
        'I\'m hosted by relatives or friends',
        'Мене приймають родичі чи друзі'
      ],
      'list_name': 'housing',
      '$autovalue': '2'
    },
    {
      'name': '3',
      '$kuid': 'IUslS7DRl',
      'label': [
        'I\'m hosted by people I didn’t know before',
        'Мене приймають люди, яких я раніше не знав'
      ],
      'list_name': 'housing',
      '$autovalue': '3'
    },
    {
      'name': '4',
      '$kuid': 'pKQt6ZPAC',
      'label': [
        'I\'m renting an apartment',
        'Я знімаю квартиру'
      ],
      'list_name': 'housing',
      '$autovalue': '4'
    },
    {
      'name': '5',
      '$kuid': 'ZiYJMwobo',
      'label': [
        'I\'m at hotel/hostel',
        'Я перебуваю в готелі/хостелі'
      ],
      'list_name': 'housing',
      '$autovalue': '5'
    },
    {
      'name': '6',
      '$kuid': 'Sz1zBTNCU',
      'label': [
        'I\'m at my own house',
        'Я перебуваю у власному будинку'
      ],
      'list_name': 'housing',
      '$autovalue': '6'
    },
    {
      'name': '7',
      '$kuid': 'hBAhcrKSz',
      'label': [
        'I don’t have housing yet - I don\'t know where I\'ll be living',
        'У мене ще немає житла - я не знаю, де я буду жити'
      ],
      'list_name': 'housing',
      '$autovalue': '7'
    },
    {
      'name': '1',
      '$kuid': 'OguqcU7pK',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'pa1df51',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'BSjTYUl0q',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'pa1df51',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'r9KwSY2Pf',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'zs4qw36',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'kRC8yxcJI',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'zs4qw36',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'lawF4EQNT',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'vn5jh23',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'cncRUTBX7',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'vn5jh23',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'gdnlXGqIJ',
      'label': [
        'Yes, totally or partially damaged',
        'Так, повністю або частково пошкоджено'
      ],
      'list_name': 'damaged',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'mpliGZggT',
      'label': [
        'Not damaged',
        'Не пошкоджений'
      ],
      'list_name': 'damaged',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'eD7yBJyxq',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ya77k53',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': '5UMhoVOCp',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ya77k53',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'ypQfCqMwL',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'nl99d95',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'E70Blc54o',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'nl99d95',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'QnlrdMN3i',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'st9uz80',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'MpBI4ouBH',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'st9uz80',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'dp1I6dV49',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'nc6hj06',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'y2ECstTWY',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'nc6hj06',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'JgSeUp2Y9',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'hq3aw02',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': '85qp9dTCK',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'hq3aw02',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'rlg4bMoSi',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ia6pz20',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'xOG1JE3pD',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ia6pz20',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'uhy0z5xVY',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ly1eq87',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'NjiVXR1bm',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ly1eq87',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'BxJMuH3ZD',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'xv18a98',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'xANkhin02',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'xv18a98',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'dwCjzDung',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ey0ar19',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'CPTKznPHc',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ey0ar19',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'FQpPd5zdA',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'sl8zj71',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'hMtgKpHRD',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'sl8zj71',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'kMMEJt0Yf',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'bd07e36',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': '30QuFNDGI',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'bd07e36',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'XA9oX8YOE',
      'label': [
        'DRC Protection',
        'DRC Protection'
      ],
      'list_name': 'ob8tn42',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'kzmMU3LK1',
      'label': [
        'DRC NFI',
        'DRC NFI'
      ],
      'list_name': 'ob8tn42',
      '$autovalue': '2'
    },
    {
      'name': '3',
      '$kuid': 'Hc3All5Hm',
      'label': [
        'DRC Legal',
        'DRC Legal'
      ],
      'list_name': 'ob8tn42',
      '$autovalue': '3'
    },
    {
      'name': '4',
      '$kuid': '5CdjVSyFN',
      'label': [
        'DRC Shelter',
        'DRC Shelter'
      ],
      'list_name': 'ob8tn42',
      '$autovalue': '4'
    },
    {
      'name': '1',
      '$kuid': 'xD5M73Uo8',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'px5yb39',
      '$autovalue': '1'
    },
    {
      'name': '1',
      '$kuid': 'OgApRE3tp',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'da7dh44',
      '$autovalue': '1'
    },
    {
      'name': '1',
      '$kuid': 'vDFtmmCaJ',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'iv7kx72',
      '$autovalue': '1'
    },
    {
      'name': '1',
      '$kuid': 'x3sGK5yaR',
      'label': [
        'Proceed to next step',
        'Перейти до наступного кроку'
      ],
      'list_name': 'ps2df75',
      '$autovalue': '1'
    },
    {
      'name': 'renting',
      '$kuid': 'tWodqAiHQ',
      'label': [
        'Renting',
        'Я знімаю квартиру'
      ],
      'list_name': 'dj7dj47',
      '$autovalue': 'renting'
    },
    {
      'name': 'planning',
      '$kuid': 'eug59zgC5',
      'label': [
        'Planning to rent',
        'Планую оренду'
      ],
      'list_name': 'dj7dj47',
      '$autovalue': 'planning'
    },
    {
      'name': 'no_support',
      '$kuid': 'Xpt8juH0c',
      'label': [
        'No support',
        'Ні'
      ],
      'list_name': 'dj7dj47',
      '$autovalue': 'no_support'
    },
    {
      'name': '1',
      '$kuid': 'GP2m0AeGk',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'uz87f42',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'XiF0Jsscj',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'uz87f42',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'wdRwCxyee',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'wj2im30',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'yL5AkC0Xo',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'wj2im30',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': '5OI0JbMSf',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'bl1zo37',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'QJdWuNi62',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'bl1zo37',
      '$autovalue': '2'
    },
    {
      'name': 'cherkaska',
      '$kuid': 'S04cDy3Lg',
      'label': [
        'Cherkaska',
        'Черкаська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'cherkaska'
    },
    {
      'name': 'chernihivska',
      '$kuid': 'zkiviNBls',
      'label': [
        'Chernihivska',
        'Чернігівська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'chernihivska'
    },
    {
      'name': 'chernivetska',
      '$kuid': '8ld6wdVlx',
      'label': [
        'Chernivetska',
        'Чернівецька'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'chernivetska'
    },
    {
      'name': 'dnipropetrovska',
      '$kuid': 'SnzvEXa8S',
      'label': [
        'Dnipropetrovska',
        'Дніпропетровська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'dnipropetrovska'
    },
    {
      'name': 'donetska',
      '$kuid': 'GdQST7Wm8',
      'label': [
        'Donetska',
        'Донецька'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'donetska'
    },
    {
      'name': 'ivano_frankivska',
      '$kuid': '8oSLk2LU6',
      'label': [
        'Ivano-Frankivska',
        'Івано-Франківська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'ivano_frankivska'
    },
    {
      'name': 'kharkivska',
      '$kuid': 'Fb8wjOrxb',
      'label': [
        'Kharkivska',
        'Харківська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'kharkivska'
    },
    {
      'name': 'khersonska',
      '$kuid': 'QOPs3QOvu',
      'label': [
        'Khersonska',
        'Херсонська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'khersonska'
    },
    {
      'name': 'khmelnytska',
      '$kuid': 'xqmUrTji1',
      'label': [
        'Khmelnytska',
        'Хмельницька'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'khmelnytska'
    },
    {
      'name': 'kirovohradska',
      '$kuid': 'KZN9Ig0OG',
      'label': [
        'Kirovohradska',
        'Кіровоградська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'kirovohradska'
    },
    {
      'name': 'kyivska',
      '$kuid': 'yUAQl3lgj',
      'label': [
        'Kyivska',
        'Київська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'kyivska'
    },
    {
      'name': 'luhanska',
      '$kuid': '9Vmxw7Nmv',
      'label': [
        'Luhanska',
        'Луганська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'luhanska'
    },
    {
      'name': 'lvivska',
      '$kuid': 'u1OWaxo68',
      'label': [
        'Lvivska',
        'Львівська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'lvivska'
    },
    {
      'name': 'mykolaivska',
      '$kuid': 'IQmIUtDtP',
      'label': [
        'Mykolaivska',
        'Миколаївська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'odeska',
      '$kuid': 'nmyMgco77',
      'label': [
        'Odeska',
        'Одеська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'odeska'
    },
    {
      'name': 'poltavska',
      '$kuid': 'cvOC50A1P',
      'label': [
        'Poltavska',
        'Полтавська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'poltavska'
    },
    {
      'name': 'rivnenska',
      '$kuid': 'W44dBq057',
      'label': [
        'Rivnenska',
        'Рівненська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'rivnenska'
    },
    {
      'name': 'sevastopilska',
      '$kuid': '6VeGGae5O',
      'label': [
        'Sevastopilska',
        'Севастопільська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'sevastopilska'
    },
    {
      'name': 'sumska',
      '$kuid': 'vXOLhwBgi',
      'label': [
        'Sumska',
        'Сумська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'sumska'
    },
    {
      'name': 'ternopilska',
      '$kuid': 'seYCRljIf',
      'label': [
        'Ternopilska',
        'Тернопільська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'ternopilska'
    },
    {
      'name': 'vinnytska',
      '$kuid': 'X0i2YA8n5',
      'label': [
        'Vinnytska',
        'Вінницька'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'vinnytska'
    },
    {
      'name': 'volynska',
      '$kuid': 'vuMBGMcUC',
      'label': [
        'Volynska',
        'Волинська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'volynska'
    },
    {
      'name': 'zakarpatska',
      '$kuid': 'XVId4Lk3B',
      'label': [
        'Zakarpatska',
        'Закарпатська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'zakarpatska'
    },
    {
      'name': 'zaporizka',
      '$kuid': 'IXjqHopcx',
      'label': [
        'Zaporizka',
        'Запорізька'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'zaporizka'
    },
    {
      'name': 'zhytomyrska',
      '$kuid': 'I4DkgnAf1',
      'label': [
        'Zhytomyrska',
        'Житомирська'
      ],
      'list_name': 'vc7it90',
      '$autovalue': 'zhytomyrska'
    },
    {
      'name': 'raiffaisen_1',
      '$kuid': 'kWSCPHp63',
      'label': [
        'Remittance Raiffaisen AVAL',
        'Translation missing - Remittance Raiffaisen AVAL'
      ],
      'list_name': 'ks1dl44',
      '$autovalue': 'raiffaisen_1'
    },
    {
      'name': 'ukrposhta',
      '$kuid': 'gAi8FoB1T',
      'label': [
        'Ukrposhta',
        'Translation missing - Ukrposhta'
      ],
      'list_name': 'ks1dl44',
      '$autovalue': 'ukrposhta'
    },
    {
      'name': 'bank_card',
      '$kuid': 'k7QrIB9aV',
      'label': [
        'Bank card',
        'Translation missing - Bank card'
      ],
      'list_name': 'ks1dl44',
      '$autovalue': 'bank_card'
    },
    {
      'name': 'none',
      '$kuid': 'ak3qbrxq3',
      'label': [
        'None of the above fit my needs',
        'Translation missing - None of the above fit my needs'
      ],
      'list_name': 'ks1dl44',
      '$autovalue': 'none'
    },
    {
      'name': '1',
      '$kuid': 'sIjNERHMh',
      'label': [
        'No ATMs/Banks in the locality',
        'Немає банкоматів/банків у цьому районі'
      ],
      'list_name': 'bank_inaccess',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'gtnZj6BRt',
      'label': [
        'No physical ability to get to an ATM/bank branch (for health reasons)',
        'Відсутність фізичної можливості дістатися до банкомату/відділення банку (за станом здоров\'я)'
      ],
      'list_name': 'bank_inaccess',
      '$autovalue': '2'
    },
    {
      'name': '3',
      '$kuid': 'PFHuQh3Cf',
      'label': [
        'No transport possibilities to get to ATM/bank branch (no public transport)',
        'Немає транспортних можливостей, щоб дістатися до банкомату/відділення банку (немає громадського транспорту)'
      ],
      'list_name': 'bank_inaccess',
      '$autovalue': '3'
    },
    {
      'name': '4',
      '$kuid': 'XMuCp7Gup',
      'label': [
        'No financial possibility to reach ATM / bank branch',
        'Немає фінансової можливості дістатися до банкомату / відділення банку'
      ],
      'list_name': 'bank_inaccess',
      '$autovalue': '4'
    },
    {
      'name': 'other',
      '$kuid': '6q6xTbhF3',
      'label': [
        'Other',
        'Інше'
      ],
      'list_name': 'bank_inaccess',
      '$autovalue': 'other'
    },
    {
      'name': '1',
      '$kuid': 'PfloqOFLZ',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'jg4ti33',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'v7CSpRYjm',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'jg4ti33',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'sZNjMgByz',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'rw8tu75',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'nPvV0AHlJ',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'rw8tu75',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'xU3jBbAZQ',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'os0ub85',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'zTaEa9syW',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'os0ub85',
      '$autovalue': '2'
    },
    {
      'name': 'sp_edopomoga',
      '$kuid': 'aTxAOrfyD',
      'label': [
        'IDP and conflict-affected people Emergency Support Programme (e-Dopomoga)',
        'Програма екстреної підтримки ВПО та постраждалим від конфлікту (е-Допомога)'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_edopomoga'
    },
    {
      'name': 'sp_epidtrymka',
      '$kuid': 'oAMn6DayJ',
      'label': [
        'ePidtrymka',
        'ePidtrymka'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_epidtrymka'
    },
    {
      'name': 'sp_entrepreneur_idps',
      '$kuid': '0IueqgDDN',
      'label': [
        'Compensation to entrepreneur for the employment of idps',
        'Компенсація підприємцю за працевлаштування ВПО'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_entrepreneur_idps'
    },
    {
      'name': 'sp_idp_shelter',
      '$kuid': 'd8g13Jhlp',
      'label': [
        'IDP Shelter support programe',
        'Програма підтримки притулків для ВПО'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_idp_shelter'
    },
    {
      'name': 'sp_prykhystok',
      '$kuid': 'wFdnP3qC1',
      'label': [
        'Host Shelter Subsidy and Rent support (Prykhystok)',
        'Субсидія на житло та орендна плата (Прихисток)'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_prykhystok'
    },
    {
      'name': 'sp_unicef',
      '$kuid': 'FtiJdic4A',
      'label': [
        'Emergency Hot Spot Payment Programe',
        'Програма екстрених платежів через хот-спот'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_unicef'
    },
    {
      'name': 'sp_returnees',
      '$kuid': 'HMD58s2Au',
      'label': [
        'Cash Support for Returnees',
        'Грошова допомога репатріантам'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp_returnees'
    },
    {
      'name': 'sp2_meb',
      '$kuid': 'yavBTlz4e',
      'label': [
        'Guaranteed Minimum Income',
        'Гарантований мінімальний дохід'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_meb'
    },
    {
      'name': 'sp2_pensions',
      '$kuid': 'qB3chRGUt',
      'label': [
        'Pensions',
        'Пенсії'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_pensions'
    },
    {
      'name': 'sp2_hus',
      '$kuid': '0xfmUVl4I',
      'label': [
        'The Housing and Utility Subsidy program (HUS)',
        'Програма житлово-комунальних субсидій (ЖКС)'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_hus'
    },
    {
      'name': 'sp2_child_birth',
      '$kuid': '4Q7wA8O6k',
      'label': [
        'Universal Child Birth Grant',
        'Універсальна допомога при народженні дитини'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_child_birth'
    },
    {
      'name': 'sp2_child_support',
      '$kuid': 's5Q2saL9y',
      'label': [
        'Child Support',
        'Аліменти'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_child_support'
    },
    {
      'name': 'sp2_child_pwd',
      '$kuid': 'DoSLWSqjP',
      'label': [
        'Assistance for children with severe disabilities and/or other health issues',
        'Допомога дітям з тяжкими вадами здоров\'я та/або іншими проблемами зі здоров\'ям'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_child_pwd'
    },
    {
      'name': 'sp2_child_guardian',
      '$kuid': 'HYZQ9SFa5',
      'label': [
        'Assistance for children over whom guardianship or guardianship is established',
        'Допомога на дітей, над якими встановлено опіку чи піклування'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_child_guardian'
    },
    {
      'name': 'sp2_health',
      '$kuid': 'OU2OV9Uqb',
      'label': [
        'Sickness Benefit',
        'Допомога по хворобі'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_health'
    },
    {
      'name': 'sp2_unemployment',
      '$kuid': 'gysL5MGaw',
      'label': [
        'Unemployment',
        'Допомога по безробіттю'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_unemployment'
    },
    {
      'name': 'sp2_caregiver',
      '$kuid': '5ENR8kCUt',
      'label': [
        'Caregiver\'s allowance (old age)',
        'Допомога по догляду за особами похилого віку'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_caregiver'
    },
    {
      'name': 'sp2_social_pension',
      '$kuid': 'hg7UpaNgo',
      'label': [
        'Social Pension (old age)',
        'Соціальна пенсія (за віком)'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_social_pension'
    },
    {
      'name': 'sp2_pwd',
      '$kuid': 'zMrnpUkDO',
      'label': [
        'Disability person',
        'Пенсія по інвалідності'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_pwd'
    },
    {
      'name': 'sp2_funeral_grant',
      '$kuid': 'ybkHxOHKt',
      'label': [
        'Funeral Grant',
        'Допомога на поховання'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_funeral_grant'
    },
    {
      'name': 'sp2_maternity_benefits',
      '$kuid': 'KvMbyZ0o5',
      'label': [
        'Maternity benefits',
        'Допомога по вагітності та пологах'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_maternity_benefits'
    },
    {
      'name': 'sp2_childcare',
      '$kuid': 'ixLyjYO3G',
      'label': [
        'Childcare Benefit (non-contributory)',
        'Допомога по догляду за дитиною (без внесків)'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_childcare'
    },
    {
      'name': 'sp2_educational_social',
      '$kuid': 'Wj5ekkWME',
      'label': [
        'Educational social benefits',
        'Освітні соціальні пільги'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_educational_social'
    },
    {
      'name': 'sp2_survivors_pension',
      '$kuid': 'THrqL1hfb',
      'label': [
        'Survivor\'s pension',
        'Пенсія по втраті годувальника'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_survivors_pension'
    },
    {
      'name': 'sp2_state_social',
      '$kuid': 'dLjlk2IMq',
      'label': [
        'State social assistance (support to the pension fund)',
        'Державна соціальна допомога (підтримка пенсійного фонду)'
      ],
      'list_name': 'fm4oo83',
      '$autovalue': 'sp2_state_social'
    },
    {
      'name': '1',
      '$kuid': 'LAojLvxdh',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'yb5ak26',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'IpmX1eydB',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'yb5ak26',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'WXwd6Mn6R',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ih6wd18',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'igc3nLLF2',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ih6wd18',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'zGrn7rYys',
      'label': [
        'Yes',
        'Так'
      ],
      'list_name': 'cu3oy57',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'nO2K3JVVf',
      'label': [
        'No',
        'Ні'
      ],
      'list_name': 'cu3oy57',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'a52xLR1dC',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'ei1mn93',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'GJJa0E27S',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'ei1mn93',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'jofa2VAS5',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'pz2rg37',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'l6AVz5Y7X',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'pz2rg37',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'PUYGO36JS',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'yf1sr85',
      '$autovalue': '1'
    },
    {
      'name': 'no',
      '$kuid': 'BEahdpdIq',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'yf1sr85',
      '$autovalue': 'no'
    },
    {
      'name': '1',
      '$kuid': 'fFX87YyLP',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'yq4cz82',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'vzx4RD8uH',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'yq4cz82',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': '4B5wtTZ2m',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'rp2hl37',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'ctZHhxdwR',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'rp2hl37',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'yGVAl8x3U',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'su5nd08',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'ibtGi5h2i',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'su5nd08',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 't3bzisPIC',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'qr5wv99',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'kG9bEtEMt',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'qr5wv99',
      '$autovalue': '2'
    },
    {
      'name': '1',
      '$kuid': 'S2m5ZLpXu',
      'label': [
        'Yes',
        'Tak'
      ],
      'list_name': 'bf9tt95',
      '$autovalue': '1'
    },
    {
      'name': '2',
      '$kuid': 'NSEASxRvq',
      'label': [
        'No',
        'Hi'
      ],
      'list_name': 'bf9tt95',
      '$autovalue': '2'
    }
  ],
  'settings': {
    'style': 'theme-grid no-text-transform',
    'version': '15 (2022-12-12 11:41:31)',
    'default_language': 'English'
  },
  'translated': [
    'hint',
    'label'
  ],
  'translations': [
    'English',
    'Ukrainian'
  ]
} as const