export const surveyMsme: any = {
  'schema': '1',
  'survey': [
    {
      'name': 'start',
      'type': 'start',
      '$kuid': 'h4cEFmxPc',
      '$xpath': 'start',
      '$autoname': 'start'
    },
    {
      'name': 'end',
      'type': 'end',
      '$kuid': '0azSx4TMI',
      '$xpath': 'end',
      '$autoname': 'end'
    },
    {
      'hint': [
        'Дякуємо, що знайшли час, щоб надати свою інформацію DRC. Ми успішно отримали вашу заявку і повідомимо вас про результати розгляду та будь-які подальші кроки (якщо такі будуть) протягом трьох місяців./ Thank you for taking the time to provide your information to DRC. We have received your your submission successfully and will notify you about the outcome and any next steps (if any) within three months.',
        null
      ],
      'name': '__IP__TRIGGER_EMAIL',
      'type': 'calculate',
      '$kuid': 'm2yP5wwlo',
      'label': [
        'Confirmation of Your Submission',
        null
      ],
      '$xpath': '__IP__TRIGGER_EMAIL',
      '$autoname': '__IP__TRIGGER_EMAIL',
      'calculation': '${email}'
    },
    {
      'hint': [
        '####Дане питання не потребує заповнення',
        '####This question is not required'
      ],
      'name': 'shortlisted',
      'type': 'select_one',
      '$kuid': 'PbPvubEiX',
      'label': [
        'Відібрано до шорт-листу',
        'Shortlisted'
      ],
      '$xpath': 'shortlisted',
      'relevant': 'selected(${consent},\'yes\')',
      'required': false,
      '$autoname': 'shortlisted',
      'read_only': 'true',
      'appearance': 'minimal',
      'select_from_list_name': 'shortlisted'
    },
    {
      'hint': [
        '####Дане питання не потребує заповнення',
        '####This question is not required'
      ],
      'name': 'cal_office',
      'type': 'select_one',
      '$kuid': 'S4dwwcDcO',
      'label': [
        'Відповідальний офіс',
        'Responsible office'
      ],
      '$xpath': 'cal_office',
      'relevant': 'not(selected(${oblast},\'\'))',
      'required': false,
      '$autoname': 'cal_office',
      'read_only': 'true',
      'appearance': 'minimal',
      'calculation': 'if(selected(${oblast},\'mykolaivska\') or selected(${oblast},\'khersonska\'),\'mykovaiv\',if(selected(${oblast},\'dnipropetrovska\') or selected(${oblast},\'zaporizka\'),\'dnipro\',if(selected(${oblast},\'donetska\') or selected(${oblast},\'kharkivska\'),\'kharkiv\',if(selected(${oblast},\'chernihivska\'),\'chernihiv\',if(selected(${oblast},\'sumska\'),\'sumy\',\'\')))))',
      'select_from_list_name': 'office'
    },
    {
      'name': 'vetting_status',
      'type': 'select_one',
      '$kuid': 'jhynZ6C2k',
      'label': [
        'Статус перевірки',
        'Vetting status'
      ],
      '$xpath': 'vetting_status',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'vetting_status',
      'appearance': 'minimal',
      'select_from_list_name': 'vetting_status'
    },
    {
      'name': 'validation_visit',
      'type': 'select_one',
      '$kuid': 'B7t64vkXI',
      'label': [
        'Валідаційний візит',
        'Validation visit'
      ],
      '$xpath': 'validation_visit',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'validation_visit',
      'appearance': 'minimal',
      'select_from_list_name': 'validation_visit'
    },
    {
      'name': 'committee_decision',
      'type': 'select_one',
      '$kuid': 'vpnMf0SzY',
      'label': [
        'Рішення комітету',
        'Committee decision'
      ],
      '$xpath': 'committee_decision',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'committee_decision',
      'appearance': 'minimal',
      'select_from_list_name': 'committee_decision'
    },
    {
      'name': 'cal_scoring_business',
      'type': 'calculate',
      '$kuid': '8WLiFsGkn',
      'label': [
        'Бали фінальної оцінки',
        'Points of the final evaluation'
      ],
      '$xpath': 'cal_scoring_business',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'cal_scoring_business',
      'calculation': 'coalesce(${scor_use_grant},0) + coalesce(${scor_plan_clearly},0) + coalesce(${scor_compete_market},0) + coalesce(${scor_financially_healthy},0) + coalesce(${scor_business_owner},0) + coalesce(${scor_spent_sustainably},0) + coalesce(${scor_owner_degree},0)'
    },
    {
      'name': 'grant_agreement_upload',
      'type': 'file',
      '$kuid': '79ijbOy6r',
      'label': [
        'Завантаження договору про надання гранту',
        'Grant agreement upload'
      ],
      '$xpath': 'grant_agreement_upload',
      'relevant': 'selected(${shortlisted},\'yes\') and selected(${committee_decision},\'approved\')',
      'required': false,
      '$autoname': 'grant_agreement_upload'
    },
    {
      'name': 'status_first_tranche',
      'type': 'select_one',
      '$kuid': 'f4EvhXwlB',
      'label': [
        'Статус виконання першого траншу',
        'Payment status first tranche'
      ],
      '$xpath': 'status_first_tranche',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'status_first_tranche',
      'appearance': 'minimal',
      'select_from_list_name': 'first_tranche'
    },
    {
      'name': 'date_first_tranche',
      'type': 'date',
      '$kuid': 'dviFJ4a2j',
      'label': [
        'Дата першого траншу',
        'Payment date first tranche'
      ],
      '$xpath': 'date_first_tranche',
      'relevant': 'selected(${shortlisted},\'yes\') and (selected(${status_first_tranche},\'done\') or selected(${status_first_tranche},\'only_first_tranche\'))',
      'required': false,
      '$autoname': 'date_first_tranche'
    },
    {
      'name': 'status_second_tranche',
      'type': 'select_one',
      '$kuid': 'YtduDWSMH',
      'label': [
        'Статус виконання другого траншу',
        'Payment status second tranche'
      ],
      '$xpath': 'status_second_tranche',
      'relevant': 'selected(${shortlisted},\'yes\') and selected(${status_first_tranche},\'done\')',
      'required': false,
      '$autoname': 'status_second_tranche',
      'appearance': 'minimal',
      'select_from_list_name': 'second_tranche'
    },
    {
      'name': 'date_second_tranche',
      'type': 'date',
      '$kuid': 'f8q0iOXHY',
      'label': [
        'Дата другого траншу',
        'Payment date second tranche'
      ],
      '$xpath': 'date_second_tranche',
      'relevant': 'selected(${shortlisted},\'yes\') and selected(${status_second_tranche},\'done\')',
      'required': false,
      '$autoname': 'date_second_tranche'
    },
    {
      'name': 'business_consultancy',
      'type': 'select_one',
      '$kuid': 'pWD52FwiX',
      'label': [
        'Бізнес консультації',
        'Business consultancy'
      ],
      '$xpath': 'business_consultancy',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'business_consultancy',
      'appearance': 'minimal',
      'select_from_list_name': 'business_consultancy'
    },
    {
      'name': 'post_distribution',
      'type': 'select_one',
      '$kuid': 'TvsUJKY6X',
      'label': [
        'Подальший супровід після дистрибуції',
        'Post-distribution follow up'
      ],
      '$xpath': 'post_distribution',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'post_distribution',
      'appearance': 'minimal',
      'select_from_list_name': 'post_distribution'
    },
    {
      'name': 'business_category',
      'type': 'select_one',
      '$kuid': 'uHq6XJ5fC',
      'label': [
        'Категорія бизнеса',
        'Business category'
      ],
      '$xpath': 'business_category',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'business_category',
      'appearance': 'minimal',
      'select_from_list_name': 'business_category'
    },
    {
      'name': 'comments_case_management',
      'type': 'text',
      '$kuid': 'cgHIpEB5E',
      'label': [
        'Коментарі',
        'Comments'
      ],
      '$xpath': 'comments_case_management',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'comments_case_management',
      'appearance': 'multiline'
    },
    {
      'name': 'note_hello',
      'type': 'note',
      '$kuid': 'IxnxGlJki',
      'label': [
        'Дякуємо за інтерес до бізнес-програми Данської ради у справах біженців (ДРБ). Ця програма має на меті допомогти малим і середнім підприємствам та підприємцям подолати наслідки ескалації війни, щоб вони могли відновити або продовжити свою діяльність. Ми приймаємо заявки від підприємств та підприємців з Дніпропетровської, Херсонської, Миколаївської, Запорізької, Харківської, Сумської та Чернігівської областей. Будь ласка, заповнюйте аплікаційну форму повністю і правдиво. Ми не розглядатимемо заявки від третіх осіб або осіб, які не мають прямого відношення до бізнесу, що звертається за підтримкою. Якщо вам потрібна допомога у заповненні заявки або якщо вам щось незрозуміло, будь ласка, звертайтеся за підтримкою безпосередньо до ДРБ (контактна інформація вказана нижче).\n\n**Критерії прийнятності**\nЩоб претендувати на отримання бізнес-гранту, ви повинні бути зареєстрованим підприємством з макс. 20 працівників; мати щонайменше два роки досвіду роботи у вашій сфері бізнесу; сплачувати податки протягом останніх шести місяців (навіть якщо ви не мали змоги зробити це останнім часом). Вам також потрібно буде подати чіткий бізнес-план з детальним описом того, як ви будете використовувати грант, продемонструвати, що ваші продукти/послуги відповідають ринковому попиту, а також продемонструвати деякі маркетингові дослідження для обґрунтування використання гранту. Підприємство також не повинно мати жодних юридичних перешкод для отримання гранту і не повинно отримувати подібну допомогу протягом останніх шести місяців. Сума гранту залежить від розміру та бізнес-плану кожного підприємства, але не може перевищувати 5 000 доларів США.\n\n**Процес подання заявки**\nБудь ласка, скористайтеся можливістю повністю висловити свою мотивацію подати заявку на отримання бізнес-гранту та заповнити всю інформацію правдиво і повністю. Ваша детальна заявка дозволить нам краще зрозуміти ваші прагнення та прийняти обґрунтоване рішення. Ми маємо обмежену кількість грантів, і посилання на реєстрацію може бути закрите, якщо буде досягнуто максимальної кількості місць. Будь ласка, зверніть увагу, що подання заявки не означає, що ви автоматично отримаєте бізнес-грант, а лише те, що ваша заявка буде оцінена на основі критеріїв відбору для цієї програми. Команда DRC зв\'яжеться з підприємствами, що потрапили до короткого списку, для проходження наступних етапів процесу відбору. \n\n** Кінцевий термін подачі заявок**\nБудь ласка, подайте заявку до **31 січня 2025 року**. Ми очікуємо отримати велику кількість заявок. Будь ласка, наберіться терпіння, ми опрацюємо вашу заявку і повідомимо вам, чи потрапили ви до шорт-листа, протягом максимум трьох місяців.\n\nDRC високо цінує будь-який зворотній зв\'язок щодо наших програм. **Ваші скарги, звернення та пропозиції направляйте на пошту: UKR-feedback@drc.ngo або телефонуйте 0 800 33 95 18 (пн-пт 9:00-17:00).**\nПрограма реалізується завдяки щедрій підтримці американського народу, наданій через Бюро з гуманітарної допомоги Агентства США з міжнародного розвитку (USAID).',
        'Thank you for your interest in the business programme of the Danish Refugee Council (DRC). This programme aims to help small and medium-sized enterprises and entrepreneurs overcome the impact of the escalation of the war so they can restore or continue their operations. We are accepting applications from businesses and entrepreneurs located in Dnipropetrovsk, Kherson, Mykolaiv, Zaporizhzhia, Kharkiv, Sumy, and Chernihiv regions. Please complete the application form completely and truthfully. We will not consider any applications from third parties or individuals not directly linked to the business that is applying for support. If you do need any support completing the application or if anything is unclear, please reach out to DRC directly for support (contact info below).\n\n**Eligibility criteria**\nTo qualify for a business grant you must be a registered business with max. 20 employees; have at least two years of experience in your business area; and have paid taxes in the past six months (even if perhaps you have not been able to do so more recently). You will also need to submit a clear business plan detailing how you would use the grant, demonstrate that your products/services are aligned with market demand, and show some market research to justify your grant utilisation. The business must also not face any legal obstacles to receive the grant and must not have received similar assistance within the past six months. The grant amount depends on the size and business plan of each business, with a ceiling of 5,000 USD.\n\n**Application process**\nPlease take the opportunity to fully express your motivation to apply for a business grant and complete all information truthfully and completely. Your detailed application will allow us to better understand your aspirations and make an informed decision. We have a limited number of grants and the registration link may be closed if the maximum number of places is reached. Please also note that submitting an application does not mean that you will automatically be accepted for a business grant, but that your application with be assessed based on the selection criteria for this programme. The DRC team will reach out to shortlisted businesses to go through the next steps of the selection process. \n\n**Application deadline**\nPlease submit your application by **31 January 2025**. We expect to receive a large number of applications. Please be patient as we process your application and let you know whether you have been shortlisted within a timeframe of maximum three months.\n\nDRC highly values any feedback related to our programmes. **Your complaints, inquiries, and suggestions can be sent to the email: UKR-feedback@drc.ngo or by calling 0 800 33 95 18 (Mon-Fri, 9:00-17:00).**\nThe programme is being implemented thanks to the generous support of the American people through the United States Agency for International Development (USAID) Bureau for Humanitarian Assistance.'
      ],
      '$xpath': 'note_hello',
      'required': false,
      '$autoname': 'note_hello'
    },
    {
      'name': 'consent_personal_data',
      'type': 'begin_group',
      '$kuid': 'NWUrWJj4P',
      'label': [
        'Згода на обробку персональних даних DRC',
        'Consent to DRC processing personal data'
      ],
      '$xpath': 'consent_personal_data',
      'required': false,
      '$autoname': 'consent_personal_data',
      'appearance': 'field-list'
    },
    {
      'name': 'date',
      'type': 'date',
      '$kuid': 'DPx4pJGOU',
      'label': [
        'Дата реєстрації',
        'Date of Registration'
      ],
      '$xpath': 'consent_personal_data/date',
      'default': 'today()',
      'required': true,
      '$autoname': 'date'
    },
    {
      'hint': [
        'Жодна надана інформація не буде передана за межі ДРБ, окрім вашого податкового номеру, який ми зобов\'язані передавати уряду за законом. Податкові номери також передаються анонімно іншим організаціям, щоб уникнути дублювання допомоги. Якщо вас буде обрано для отримання гранту, ваші дані також будуть передані обраному платіжному провайдеру для обробки вашого платежу. Всі інші дані будуть зберігатися безпечно, відповідно до Закону про захист персональних даних, і не будуть передані за межі ДРБ та її партнерів. Будь ласка, вкажіть, чи згодні ви з цим.',
        'No individual data provided will be shared outside of DRC aside from your tax number which we are required by law to share with the government. Tax numbers are also shared anonymously with other organisations to ensure that there is no duplication of assistance. Should you be selected for the grant distribution, then your details will also be shared with the selected payment provider in order to process your payment. All other data will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners. Please indicate whether you consent to this.'
      ],
      'name': 'consent',
      'type': 'select_one',
      '$kuid': '9IviC9icZ',
      'label': [
        'Чи надаєте Ви згоду на обробку ДРБ Ваших персональних даних?',
        'Do you provide your consent to DRC processing your personal data?'
      ],
      '$xpath': 'consent_personal_data/consent',
      'required': true,
      '$autoname': 'consent',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'business_owner',
      'type': 'select_one',
      '$kuid': 'RDkdw1UzY',
      'label': [
        'Ви є власником бізнесу, на який подаєте заявку?',
        'Are you the business owner for the business that you are applying for?'
      ],
      '$xpath': 'consent_personal_data/business_owner',
      'required': true,
      '$autoname': 'business_owner',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'business_owner_no',
      'type': 'select_one',
      '$kuid': 'IQQRv3XUJ',
      'label': [
        'Якщо «Ні», то чи належите Ви до однієї з наступних категорій?',
        'If no, are you one of the following?'
      ],
      '$xpath': 'consent_personal_data/business_owner_no',
      'relevant': 'selected(${business_owner},\'no\')',
      'required': true,
      '$autoname': 'business_owner_no',
      'select_from_list_name': 'business_owner_no'
    },
    {
      'name': 'res_describe_role',
      'type': 'text',
      '$kuid': '2G5qnkPVM',
      'label': [
        'Будь ласка, опишіть вашу роль',
        'Please describe your role'
      ],
      '$xpath': 'consent_personal_data/res_describe_role',
      'relevant': 'selected(${business_owner},\'no\') and selected(${business_owner_no},\'no\')',
      'required': true,
      '$autoname': 'res_describe_role'
    },
    {
      'type': 'end_group',
      '$kuid': 'n9ksulr0M'
    },
    {
      'name': 'business_owner_details',
      'type': 'begin_group',
      '$kuid': 'wq0p4TqcR',
      'label': [
        'Інформація про власника бізнесу',
        'Business Owner detail'
      ],
      '$xpath': 'business_owner_details',
      'relevant': 'selected(${consent},\'yes\') and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'business_owner_details',
      'appearance': 'field-list'
    },
    {
      'hint': [
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ',
        'PLEASE WRITE IN UKRAINIAN'
      ],
      'name': 'surname',
      'type': 'text',
      '$kuid': '8JhQZ6Psr',
      'label': [
        'Ваше прізвище?',
        'Your surname'
      ],
      '$xpath': 'business_owner_details/surname',
      'required': true,
      '$autoname': 'surname'
    },
    {
      'hint': [
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ',
        'PLEASE WRITE IN UKRAINIAN'
      ],
      'name': 'first_name',
      'type': 'text',
      '$kuid': 'O7eKkBwOW',
      'label': [
        'Ваше ім\'я?',
        'Your first name'
      ],
      '$xpath': 'business_owner_details/first_name',
      'required': true,
      '$autoname': 'first_name'
    },
    {
      'hint': [
        'БУДЬ ЛАСКА НАПИШІТЬ УКРАЇНСЬКОЮ',
        'PLEASE WRITE IN UKRAINIAN'
      ],
      'name': 'pat_name',
      'type': 'text',
      '$kuid': 'nRu0gvEO5',
      'label': [
        'По батькові?',
        'Your patronymic name?'
      ],
      '$xpath': 'business_owner_details/pat_name',
      'required': true,
      '$autoname': 'pat_name'
    },
    {
      'hint': [
        'Де фактичне місцезнаходження бізнесу',
        'Where the actual location of the business'
      ],
      'name': 'oblast',
      'type': 'select_one',
      '$kuid': 'PBDd2NWd1',
      'label': [
        'Область',
        'Oblast'
      ],
      '$xpath': 'business_owner_details/oblast',
      'required': true,
      '$autoname': 'oblast',
      'appearance': 'minimal',
      'choice_filter': 'key= \'yes\'',
      'select_from_list_name': 'oblast'
    },
    {
      'hint': [
        'Де фактичне місцезнаходження бізнесу',
        'Where the actual location of the business'
      ],
      'name': 'raion',
      'type': 'select_one',
      '$kuid': 'F6ADYg5GP',
      'label': [
        'Район',
        'Raion'
      ],
      '$xpath': 'business_owner_details/raion',
      'required': true,
      '$autoname': 'raion',
      'appearance': 'minimal',
      'choice_filter': 'oblast=${oblast}',
      'select_from_list_name': 'raion'
    },
    {
      'hint': [
        'Де фактичне місцезнаходження бізнесу',
        'Where the actual location of the business'
      ],
      'name': 'hromada',
      'type': 'select_one',
      '$kuid': '0md8k5EvK',
      'label': [
        'Громада',
        'Hromada'
      ],
      '$xpath': 'business_owner_details/hromada',
      'required': true,
      '$autoname': 'hromada',
      'appearance': 'minimal',
      'choice_filter': 'raion=${raion}',
      'select_from_list_name': 'hromada'
    },
    {
      'file': 'kobo_settlements_activityinfo_name.csv',
      'hint': [
        'Де фактичне місцезнаходження бізнесу',
        'Where the actual location of the business'
      ],
      'name': 'settlement',
      'type': 'select_one_from_file',
      '$kuid': 'YFA0e29Fn',
      'label': [
        'Населений пункт',
        'Settlement'
      ],
      '$xpath': 'business_owner_details/settlement',
      'required': false,
      '$autoname': 'settlement',
      'appearance': 'minimal',
      'choice_filter': 'hromada=${hromada}'
    },
    {
      'name': 'res_stat',
      'type': 'select_one',
      '$kuid': 'LTidfpGlg',
      'label': [
        'Статус проживання',
        'Residential status'
      ],
      '$xpath': 'business_owner_details/res_stat',
      'required': true,
      '$autoname': 'res_stat',
      'select_from_list_name': 'res_stat'
    },
    {
      'name': 'res_stat_other',
      'type': 'text',
      '$kuid': 'jxIH9mCba',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть Ваш статус',
        'If Other, please specify'
      ],
      '$xpath': 'business_owner_details/res_stat_other',
      'relevant': 'selected(${res_stat},\'other\')',
      'required': true,
      '$autoname': 'res_stat_other'
    },
    {
      'name': 'idp_certificate',
      'type': 'select_one',
      '$kuid': 'wZJK8dJsz',
      'label': [
        'Чи маєте Ви дійсну довідку ВПО?',
        'Do you have an valid IDP certificate?'
      ],
      '$xpath': 'business_owner_details/idp_certificate',
      'relevant': 'selected(${res_stat},\'idp\')',
      'required': true,
      '$autoname': 'idp_certificate',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'gender',
      'type': 'select_one',
      '$kuid': 'HVftjTj0n',
      'label': [
        'Ваша стать?',
        'Gender'
      ],
      '$xpath': 'business_owner_details/gender',
      'required': true,
      '$autoname': 'gender',
      'select_from_list_name': 'gender'
    },
    {
      'name': 'date_birth',
      'type': 'date',
      '$kuid': 'n3wB745tC',
      'label': [
        'Дата народження',
        'Date of Birth'
      ],
      '$xpath': 'business_owner_details/date_birth',
      'required': true,
      '$autoname': 'date_birth'
    },
    {
      'name': 'age',
      'type': 'integer',
      '$kuid': 'egKuMvxu8',
      'label': [
        'Вік',
        'Age'
      ],
      '$xpath': 'business_owner_details/age',
      'required': true,
      '$autoname': 'age',
      'read_only': 'true',
      'calculation': 'if(${date_birth} != \'\', int((${date} - ${date_birth}) div 365.25), \'\')'
    },
    {
      'hint': [
        'Не вводьте префікс +380. Номер повинен складатися з 9 цифр\nЦе має бути номер телефону, за яким в подальшому ми зв\'яжемося з Вами щодо Вашої заяви.',
        'Do not inlcude +380 prefix. Number must contain 9 digits\nThis will be the phone number that we will contact you on for your application'
      ],
      'name': 'ph_number',
      'type': 'integer',
      '$kuid': 'NJ3MrXaJn',
      'label': [
        'Будь ласка, вкажіть Ваш номер телефону',
        'Please provide your phone number'
      ],
      '$xpath': 'business_owner_details/ph_number',
      'required': true,
      '$autoname': 'ph_number',
      'constraint': '. > 100000000 and . < 1000000000',
      'constraint_message': [
        'Номер телефону повинен складатися з дев\'яти цифр',
        'Phone number must be nine digits'
      ]
    },
    {
      'hint': [
        'Ми попросимо Вас надати відповідні бізнес-документи до Вашої заявки електронною поштою. Будь ласка, переконайтеся, що у Вас є чинна та робоча адреса електронної пошти, щоб ми могли продовжити роботу з Вашою заявою.',
        'We will ask you to provide relevant business documents to your application via email. Please ensure that you have a valid and working email address, for us to proceed with your application'
      ],
      'name': 'email',
      'type': 'text',
      '$kuid': 'kIfsDKv72',
      'label': [
        'Будь ласка, вкажіть свою електронну адресу',
        'Please provide your email address'
      ],
      '$xpath': 'business_owner_details/email',
      'required': true,
      '$autoname': 'email',
      'constraint': 'regex(., \'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\')'
    },
    {
      'hint': [
        'ІПН має містить 10 цифр\n${tax_length}/10\nЯкщо у вас немає індивідуального податкового номеру, введіть 10 нулів',
        'The TIN contains 10 digits\n${tax_length}/10\nIf you do not have an Individual Tax ID, enter 10 zeros'
      ],
      'name': 'tax_id_num',
      'type': 'text',
      '$kuid': 'p9kA3J431',
      'label': [
        'Індивідуальний податковий номер (ІПН)',
        'Individual Tax ID'
      ],
      '$xpath': 'business_owner_details/tax_id_num',
      'required': true,
      '$autoname': 'tax_id_num',
      'appearance': 'numbers',
      'constraint': 'regex(., \'^[0-9]{10}$\')',
      'constraint_message': [
        'Ідентифікаційний податковий номер має містити лише десять цифр',
        'Tax ID number must contain ten digits only'
      ]
    },
    {
      'name': 'tax_length',
      'type': 'calculate',
      '$kuid': 'tlQAfkgjS',
      '$xpath': 'business_owner_details/tax_length',
      'required': false,
      '$autoname': 'tax_length',
      'calculation': 'string-length(${tax_id_num})'
    },
    {
      'type': 'end_group',
      '$kuid': 'R9FE0L0dd'
    },
    {
      'name': 'family_details',
      'type': 'begin_group',
      '$kuid': 'xttI15luW',
      'label': [
        'Інформація про сім\'ю',
        'Family Details'
      ],
      '$xpath': 'family_details',
      'relevant': 'selected(${consent},\'yes\') and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'family_details'
    },
    {
      'hint': [
        'Будь ласка, не враховуйте дохід від соціальних виплат, тобто пенсії, стипендії, соціальної допомоги від держави тощо',
        'Please exclude any income from social benefit i.e pension, scolarship, social assistance from government etc'
      ],
      'name': 'household_income',
      'type': 'integer',
      '$kuid': '1SlpEgI8u',
      'label': [
        'Який ваш загальний щомісячний дохід домогосподарства в гривнях?',
        'What is your overall monthly household income in UAH?'
      ],
      '$xpath': 'family_details/household_income',
      'required': true,
      '$autoname': 'household_income'
    },
    {
      'hint': [
        'Будь ласка, враховуйте себе як частину загальної кількості членів домогосподарства',
        'Please also count yourself as part of the overall number of household members'
      ],
      'name': 'number_people',
      'type': 'integer',
      '$kuid': '4dq0r7dHB',
      'label': [
        'Будь ласка, вкажіть скільки людей проживає у Вашому домогосподарстві (включно з Вами)',
        'Please indicate the number of people in your household (Including yourself)'
      ],
      '$xpath': 'family_details/number_people',
      'required': true,
      '$autoname': 'number_people'
    },
    {
      'name': 'not_idicate_member',
      'type': 'note',
      '$kuid': 'vNqJhWmkh',
      'label': [
        '**Будь ласка, надайте інформацію про членів вашої вашому домогосподарстві**',
        '**Please provide information about your family members.**'
      ],
      '$xpath': 'family_details/not_idicate_member',
      'relevant': '${number_people} >1',
      'required': false,
      '$autoname': 'not_idicate_member'
    },
    {
      'name': 'hh_member',
      'type': 'begin_repeat',
      '$kuid': '2OzBip9tQ',
      'label': [
        'Члени домогосподарства',
        'HH members'
      ],
      '$xpath': 'family_details/hh_member',
      'relevant': '${number_people} >0',
      'required': false,
      '$autoname': 'hh_member',
      'appearance': 'field-list',
      'repeat_count': '${number_people} -1'
    },
    {
      'name': 'hh_char_tax_id_yn',
      'type': 'select_one',
      '$kuid': 'pvw6FmnsR',
      'label': [
        'Чи має член домогосподарства індивідуальний податковий номер (ІПН)?',
        'Have individual tax number (TIN)?'
      ],
      '$xpath': 'family_details/hh_member/hh_char_tax_id_yn',
      'required': true,
      '$autoname': 'hh_char_tax_id_yn',
      'select_from_list_name': 'yn'
    },
    {
      'hint': [
        'ІПН містить 10 цифр',
        'The TIN contains 10 digits'
      ],
      'name': 'hh_char_tax_id_num',
      'type': 'text',
      '$kuid': 'D7xQpEMgs',
      'label': [
        'Ідентифікаційний номер (ІПН) бенефіціара',
        'Individual tax number'
      ],
      '$xpath': 'family_details/hh_member/hh_char_tax_id_num',
      'relevant': 'selected(${hh_char_tax_id_yn},\'yes\')',
      'required': true,
      '$autoname': 'hh_char_tax_id_num',
      'appearance': 'numbers',
      'constraint': 'regex(., \'^[0-9]{10}$\') and (${taxid_weightedsum} - ${taxid_roundedsum} = substr(${hh_char_tax_id_num}, 9, 10) or ${taxid_weightedsum} - ${taxid_roundedsum} - 10 = substr(${hh_char_tax_id_num}, 9, 10))',
      'constraint_message': [
        'Недійсний податковий номер',
        'Invalid Tax ID'
      ]
    },
    {
      'name': 'taxid_weightedsum',
      'type': 'calculate',
      '$kuid': 'xdVF4kVGF',
      '$xpath': 'family_details/hh_member/taxid_weightedsum',
      'required': false,
      '$autoname': 'taxid_weightedsum',
      'calculation': 'substr(${hh_char_tax_id_num}, 0, 1) * (-1) + substr(${hh_char_tax_id_num}, 1, 2) * 5 + substr(${hh_char_tax_id_num}, 2, 3) * 7 + substr(${hh_char_tax_id_num}, 3, 4) * 9 + substr(${hh_char_tax_id_num}, 4, 5) * 4 + substr(${hh_char_tax_id_num}, 5, 6) * 6 + substr(${hh_char_tax_id_num}, 6, 7) * 10 + substr(${hh_char_tax_id_num}, 7, 8) * 5 + substr(${hh_char_tax_id_num}, 8, 9) * 7 + substr(${hh_char_tax_id_num}, 9, 10) * 0'
    },
    {
      'name': 'taxid_roundedsum',
      'type': 'calculate',
      '$kuid': 'Vq0IohE4v',
      '$xpath': 'family_details/hh_member/taxid_roundedsum',
      'required': false,
      '$autoname': 'taxid_roundedsum',
      'calculation': '(${taxid_weightedsum} div 11 - ((${taxid_weightedsum} div 11) mod 1)) * 11'
    },
    {
      'name': 'hh_char_hh_det_gender',
      'type': 'select_one',
      '$kuid': 'bcadGzOjx',
      'label': [
        'Будь ласка, вкажіть СТАТЬ члена домогосподарства',
        'Gender'
      ],
      '$xpath': 'family_details/hh_member/hh_char_hh_det_gender',
      'required': true,
      '$autoname': 'hh_char_hh_det_gender',
      'select_from_list_name': 'gender'
    },
    {
      'name': 'hh_char_hh_det_age',
      'type': 'integer',
      '$kuid': 'TYjuKKEw2',
      'label': [
        'ВІК члена домогосподарства',
        'Age'
      ],
      '$xpath': 'family_details/hh_member/hh_char_hh_det_age',
      'required': true,
      '$autoname': 'hh_char_hh_det_age'
    },
    {
      'type': 'end_repeat',
      '$kuid': 'zA8etVz8X'
    },
    {
      'hint': [
        'Будь ласка, прочитайте всі варіанти',
        'Please read all options'
      ],
      'name': 'dis_select',
      'type': 'select_multiple',
      '$kuid': 'GLipReT3i',
      'label': [
        'Будь ласка, оберіть будь-який з наведених варіантів, який стосується власника бізнесу',
        'Please select any of the below that apply to business owner'
      ],
      '$xpath': 'family_details/dis_select',
      'required': true,
      '$autoname': 'dis_select',
      'constraint': 'not(selected(.,\'diff_none\') and count-selected(.)>1)',
      'constraint_message': [
        'Ці параметри не можна перевіряти разом',
        'Cannot have these options checked together'
      ],
      'select_from_list_name': 'dis'
    },
    {
      'name': 'dis_level',
      'type': 'select_one',
      '$kuid': 'AVmumrxna',
      'label': [
        'Який рівень складності обраних варіантів відповідей на попередні запитання?',
        'What is the level of difficulty for the selected options in the previous questions?'
      ],
      '$xpath': 'family_details/dis_level',
      'relevant': 'selected(${dis_select},\'diff_see\') or selected(${dis_select},\'diff_hear\') or selected(${dis_select},\'diff_walk\') or selected(${dis_select},\'diff_rem\') or selected(${dis_select},\'diff_care\') or selected(${dis_select},\'diff_comm\')',
      'required': true,
      '$autoname': 'dis_level',
      'select_from_list_name': 'dis_level'
    },
    {
      'name': 'impact_ability_household',
      'type': 'select_one',
      '$kuid': 'zyTF7Kjue',
      'label': [
        'Чи впливає щось з перерахованого вище на здатність Вашого домогосподарства займатися діяльністю, що забезпечує засоби до існування?',
        'Does any of the above impact the ability of your household to engage in livelihood activities?'
      ],
      '$xpath': 'family_details/impact_ability_household',
      'relevant': '(selected(${dis_select},\'diff_see\') or selected(${dis_select},\'diff_hear\') or selected(${dis_select},\'diff_walk\') or selected(${dis_select},\'diff_rem\') or selected(${dis_select},\'diff_care\') or selected(${dis_select},\'diff_comm\')) and (selected(${dis_level},\'one\') or selected(${dis_level},\'two\') or selected(${dis_level},\'fri\'))',
      'required': true,
      '$autoname': 'impact_ability_household',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'household_contain_excombatants',
      'type': 'select_one',
      '$kuid': 'XGvh7jYit',
      'label': [
        'Чи є у Вашому домогосподарстві колишні учасники бойових дій?',
        'Does your household contain any ex-combatants?'
      ],
      '$xpath': 'family_details/household_contain_excombatants',
      'required': true,
      '$autoname': 'household_contain_excombatants',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'many_excombatants',
      'type': 'integer',
      '$kuid': 'Kqj3hKJMv',
      'label': [
        'Будь ласка, вкажіть, кількість таких осіб',
        'Please specify how many'
      ],
      '$xpath': 'family_details/many_excombatants',
      'default': '1',
      'relevant': 'selected(${household_contain_excombatants},\'yes\')',
      'required': true,
      '$autoname': 'many_excombatants'
    },
    {
      'name': 'certification_status_excombatants',
      'type': 'select_one',
      '$kuid': '1rE6Cbl2V',
      'label': [
        'Чи мають вони посвідчення, що підтверджують їхній статус учасника бойових дій?',
        'Do they possess certification to confirm their status as ex-combatants?'
      ],
      '$xpath': 'family_details/certification_status_excombatants',
      'relevant': 'selected(${household_contain_excombatants},\'yes\')',
      'required': true,
      '$autoname': 'certification_status_excombatants',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'household_chronic_diseases',
      'type': 'select_one',
      '$kuid': 'i13WXT4ia',
      'label': [
        'Чи є у Вашому домогосподарстві люди з хронічними захворюваннями, які роблять їх непрацездатними або які потребують постійного догляду?',
        'Does your household contain any people with chronic diseases leaving them unable to work or requiring full-time care?'
      ],
      '$xpath': 'family_details/household_chronic_diseases',
      'required': true,
      '$autoname': 'household_chronic_diseases',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'many_chronic_diseases',
      'type': 'integer',
      '$kuid': 'nQ6tMtp17',
      'label': [
        'Будь ласка, вкажіть, кількість таких осіб',
        'Please specify how many'
      ],
      '$xpath': 'family_details/many_chronic_diseases',
      'default': '1',
      'relevant': 'selected(${household_chronic_diseases},\'yes\')',
      'required': true,
      '$autoname': 'many_chronic_diseases'
    },
    {
      'name': 'household_pregnant_that_breastfeeding',
      'type': 'select_one',
      '$kuid': '3SGThCoEM',
      'label': [
        'Чи є у Вашому домогосподарстві вагітні або жінки, які годують груддю?',
        'Does your household contain any pregnant or women that are breastfeeding?'
      ],
      '$xpath': 'family_details/household_pregnant_that_breastfeeding',
      'required': true,
      '$autoname': 'household_pregnant_that_breastfeeding',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'many_pregnant_that_breastfeeding',
      'type': 'integer',
      '$kuid': 'KzhxsuwKW',
      'label': [
        'Будь ласка, вкажіть, кількість таких осіб',
        'Please specify how many'
      ],
      '$xpath': 'family_details/many_pregnant_that_breastfeeding',
      'default': '1',
      'relevant': 'selected(${household_pregnant_that_breastfeeding},\'yes\')',
      'required': true,
      '$autoname': 'many_pregnant_that_breastfeeding'
    },
    {
      'name': 'business_primary_source_income',
      'type': 'select_one',
      '$kuid': 'y7SzOUCNA',
      'label': [
        'Чи є підприємницька діяльність основним джерелом доходу домогосподарства?',
        'Is the business activity the primary source of income in the household?'
      ],
      '$xpath': 'family_details/business_primary_source_income',
      'required': true,
      '$autoname': 'business_primary_source_income',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'business_primary_source_income_no',
      'type': 'text',
      '$kuid': 'pqWkbRdhi',
      'label': [
        'Якщо «Ні», будь ласка, вкажіть, які ще джерела доходу має Ваше домогосподарство',
        'If no, please specify  what other sources of income your household has'
      ],
      '$xpath': 'family_details/business_primary_source_income_no',
      'relevant': 'selected(${business_primary_source_income},\'no\')',
      'required': true,
      '$autoname': 'business_primary_source_income_no',
      'appearance': 'multiline'
    },
    {
      'type': 'end_group',
      '$kuid': 'SyUb9Z00U'
    },
    {
      'name': 'business_details',
      'type': 'begin_group',
      '$kuid': 'M913kgcgb',
      'label': [
        'Інформація про підприємство',
        'Business Details'
      ],
      '$xpath': 'business_details',
      'relevant': 'selected(${consent},\'yes\') and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'business_details'
    },
    {
      'name': 'business_name',
      'type': 'text',
      '$kuid': 'tMK1nklwS',
      'label': [
        'Назва бізнесу',
        'Business Name'
      ],
      '$xpath': 'business_details/business_name',
      '$autoname': 'business_name'
    },
    {
      'name': 'business_type',
      'type': 'select_one',
      '$kuid': 'iyMnLGTzM',
      'label': [
        'Тип реєстрації підприємства',
        'Business registration type'
      ],
      '$xpath': 'business_details/business_type',
      'required': true,
      '$autoname': 'business_type',
      'select_from_list_name': 'business_type'
    },
    {
      'name': 'business_type_other',
      'type': 'text',
      '$kuid': 'Ky1ieTF8l',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_details/business_type_other',
      'relevant': 'selected(${business_type},\'other\')',
      'required': true,
      '$autoname': 'business_type_other'
    },
    {
      'hint': [
        'Або повторити індивідуальний податковий номер, якщо немає податкового номера підприємства',
        'Or repeat individual tax ID if there is no enterprise tax ID'
      ],
      'name': 'enterprise_tax_id',
      'type': 'text',
      '$kuid': 'pUevQmYZt',
      'label': [
        'Податковий номер підприємства (ЄДРПОУ)',
        'Enterprise Tax ID'
      ],
      '$xpath': 'business_details/enterprise_tax_id',
      'required': true,
      '$autoname': 'enterprise_tax_id',
      'appearance': 'numbers',
      'calculation': 'if(selected(${business_type},\'fop1\') or selected(${business_type},\'fop2\') or selected(${business_type},\'fop3\') or selected(${business_type},\'fop4\'),${tax_id_num},\'\')'
    },
    {
      'name': 'many_owners_business',
      'type': 'integer',
      '$kuid': 'hNkR6sEsT',
      'label': [
        'Скільки власників має підприємство?',
        'How many owners does the business have?'
      ],
      '$xpath': 'business_details/many_owners_business',
      'required': true,
      '$autoname': 'many_owners_business'
    },
    {
      'name': 'business_owners',
      'type': 'begin_repeat',
      '$kuid': 'NgHgOB7Nv',
      'label': [
        'Власники підприємства',
        'Business owners'
      ],
      '$xpath': 'business_details/business_owners',
      'relevant': 'selected(${consent},\'yes\') and ${many_owners_business}>1 and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'business_owners',
      'appearance': 'field-list',
      'repeat_count': '${many_owners_business} -1'
    },
    {
      'hint': [
        'ІПН має містить 10 цифр\n${taxid_owner_length}/10',
        'The TIN contains 10 digits\n${taxid_owner_length}/10'
      ],
      'name': 'tax_id_owner',
      'type': 'integer',
      '$kuid': 'SmIhA7ZTq',
      'label': [
        'Будь ласка, надайте реєстраційні номери облікової картки платника податків одного з власників',
        'Please provide tax Tax ID of one of the owners'
      ],
      '$xpath': 'business_details/business_owners/tax_id_owner',
      'required': true,
      '$autoname': 'tax_id_owner'
    },
    {
      'name': 'taxid_owner_length',
      'type': 'calculate',
      '$kuid': 'HSvdPquXW',
      '$xpath': 'business_details/business_owners/taxid_owner_length',
      'required': false,
      '$autoname': 'taxid_owner_length',
      'calculation': 'string-length(${tax_id_owner})'
    },
    {
      'type': 'end_repeat',
      '$kuid': 'KGPa7QL9v',
      'required': false
    },
    {
      'name': 'confirm_receive_grant',
      'type': 'select_one',
      '$kuid': 'RA38fWgYx',
      'label': [
        'Будь ласка, підтвердіть, яка особа буде отримувати грант',
        'Please also confirm which person would receive the grant'
      ],
      '$xpath': 'business_details/confirm_receive_grant',
      'relevant': '${many_owners_business}>1',
      'required': true,
      '$autoname': 'confirm_receive_grant',
      'select_from_list_name': 'confirm_receive_grant'
    },
    {
      'hint': [
        'Будь ласка, переконайтеся, що це та сама адреса, яка вказана у вашому свідоцтві про реєстрацію підприємства',
        'Please ensure that this is the business address on you business registration certificate'
      ],
      'name': 'legal_address_business',
      'type': 'text',
      '$kuid': 'ws4DxpIwy',
      'label': [
        'Юридична адреса підприємства',
        'Legal registered address of the business'
      ],
      '$xpath': 'business_details/legal_address_business',
      'required': true,
      '$autoname': 'legal_address_business'
    },
    {
      'name': 'date_business_registration',
      'type': 'date',
      '$kuid': 'sFWlxrWeu',
      'label': [
        'Дата реєстрації підприємства',
        'Date of business registration'
      ],
      '$xpath': 'business_details/date_business_registration',
      'required': true,
      '$autoname': 'date_business_registration'
    },
    {
      'hint': [
        'Якщо ви сплачували податки за останні 6 місяців, будь ласка, вкажіть "так"',
        'If you have paid taxes over your business activities the last 6 months, please indicate as yes'
      ],
      'name': 'business_currently_operational',
      'type': 'select_one',
      '$kuid': 'hDgMYpzKr',
      'label': [
        'Чи працює Ваше підприємство зараз?',
        'Is your business currently operational?'
      ],
      '$xpath': 'business_details/business_currently_operational',
      'required': true,
      '$autoname': 'business_currently_operational',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'business_currently_operational_no',
      'type': 'text',
      '$kuid': '1XbwVmLUV',
      'label': [
        'Будь ласка, надайте додаткову інформацію, чому Ваше підприємство зараз не працює',
        'Please provide some more informaton why your business is not currently operational'
      ],
      '$xpath': 'business_details/business_currently_operational_no',
      'relevant': 'selected(${business_currently_operational},\'no\')',
      'required': true,
      '$autoname': 'business_currently_operational_no',
      'appearance': 'multiline'
    },
    {
      'name': 'reason_pause_activity',
      'type': 'select_multiple',
      '$kuid': 'viQG4R5nj',
      'label': [
        'Будь ласка, вкажіть причину призупинення діяльності',
        'Please indicate reason of the pause of business activity'
      ],
      '$xpath': 'business_details/reason_pause_activity',
      'relevant': 'selected(${business_currently_operational},\'no\')',
      'required': true,
      '$autoname': 'reason_pause_activity',
      'select_from_list_name': 'reason_pause_activity'
    },
    {
      'name': 'reason_pause_activity_other',
      'type': 'text',
      '$kuid': 'XqBfros5w',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_details/reason_pause_activity_other',
      'relevant': 'selected(${business_currently_operational},\'no\') and selected(${reason_pause_activity},\'other\')',
      'required': false,
      '$autoname': 'reason_pause_activity_other',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Комунальні послуги можуть включати сантехнічні, механічні, електричні. Косметичні послуги можуть включати перукарню, салон краси тощо.',
        'Utility services may include plumbing, mechanic, electrical. Beauty services may include hairdressing, beauty salon etc.'
      ],
      'name': 'key_business_activities',
      'type': 'select_multiple',
      '$kuid': 'ORsJizob1',
      'label': [
        'Будь ласка, вкажіть основні види діяльності Вашого підприємства',
        'Please indicate key business activities'
      ],
      '$xpath': 'business_details/key_business_activities',
      'required': true,
      '$autoname': 'key_business_activities',
      'select_from_list_name': 'key_business_activities'
    },
    {
      'name': 'key_business_activities_other',
      'type': 'text',
      '$kuid': 'S02vERxuS',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_details/key_business_activities_other',
      'relevant': 'selected(${key_business_activities},\'other\')',
      'required': false,
      '$autoname': 'key_business_activities_other',
      'appearance': 'multiline'
    },
    {
      'name': 'years_experience_business',
      'type': 'integer',
      '$kuid': 'YzABUPNPp',
      'label': [
        'Який Ваш загальний стаж роботи в обраному Вами виді діяльності?',
        'What is your overall years of experience in your targeted business activity?'
      ],
      '$xpath': 'business_details/years_experience_business',
      'required': true,
      '$autoname': 'years_experience_business'
    },
    {
      'name': 'number_employees_business',
      'type': 'integer',
      '$kuid': 'QTjwYMq97',
      'label': [
        'Будь ласка, вкажіть кількість працівників на Вашому підприємстві',
        'Please indicate the number of employees in your business'
      ],
      '$xpath': 'business_details/number_employees_business',
      'required': true,
      '$autoname': 'number_employees_business'
    },
    {
      'hint': [
        'Оборот (або дохід) - це загальна сума грошей, яку бізнес отримує від своєї діяльності, наприклад, від продажу товарів або послуг, до вирахування будь-яких витрат.',
        'Turnover (or revenue) is the total amount of money a business generates from its operations, such as sales of goods or services, before any expenses are deducted'
      ],
      'name': 'turnover_past12',
      'type': 'integer',
      '$kuid': 'X4SpMlGqM',
      'label': [
        'Яким був оборот від вашої бізнес-діяльності за останні 12 місяців у гривнях?',
        'What was the turnover from your business activities over the past 12 months in UAH?'
      ],
      '$xpath': 'business_details/turnover_past12',
      'required': true,
      '$autoname': 'turnover_past12'
    },
    {
      'hint': [
        'Дохід - це гроші, які ваш бізнес заробляє після вирахування витрат, таких як вартість товарів, заробітна плата та інші операційні витрати. Це ваш прибуток або заробіток',
        'Income refers to the money your business earns after deducting expenses, such as costs of goods, salaries, and other operational costs. It represents your profit or earnings'
      ],
      'name': 'income_past12',
      'type': 'integer',
      '$kuid': 'hRQYXfuIH',
      'label': [
        'Яким був дохід від Вашої підприємницької діяльності за останні 12 місяців у гривнях?',
        'What was the income from your business activities over the past 12 months in UAH?'
      ],
      '$xpath': 'business_details/income_past12',
      'required': true,
      '$autoname': 'income_past12'
    },
    {
      'name': 'turnover_past12_scale_invasion',
      'type': 'integer',
      '$kuid': 'HuXs4N7z2',
      'label': [
        'Яким був Ваш обіг за 12 місяців до повномасштабного вторгнення?',
        'What was your turnover in the 12 months before the full scale invasion?'
      ],
      '$xpath': 'business_details/turnover_past12_scale_invasion',
      'relevant': '${years_experience_business}>3',
      'required': true,
      '$autoname': 'turnover_past12_scale_invasion'
    },
    {
      'name': 'income_past12_scale_invasion',
      'type': 'integer',
      '$kuid': 'RDw6QaF3f',
      'label': [
        'Яким був ваш дохід за 12 місяців до повномасштабного вторгнення?',
        'What was your income over the 12 months before the full scale invasion?'
      ],
      '$xpath': 'business_details/income_past12_scale_invasion',
      'relevant': '${years_experience_business}>3',
      'required': true,
      '$autoname': 'income_past12_scale_invasion'
    },
    {
      'hint': [
        'Включаючи всі витрати, такі як оренда, зарплати, послуги тощо.',
        'Including all expenses like rent, salaries, services, etc.'
      ],
      'name': 'monthly_business_expenditure',
      'type': 'integer',
      '$kuid': '9hMvmUF5R',
      'label': [
        'Які ваші середньомісячні витрати на ведення бізнесу в гривнях?',
        'What is your average monthly business expenditure in UAH'
      ],
      '$xpath': 'business_details/monthly_business_expenditure',
      'required': true,
      '$autoname': 'monthly_business_expenditure'
    },
    {
      'name': 'have_debt_repayment',
      'type': 'select_one',
      '$kuid': 'LXEzpluei',
      'label': [
        'Чи є у вас боргові зобов\'язання або зобов\'язання з погашення кредиту?',
        'Do you have any debt or loan repayment obligation?'
      ],
      '$xpath': 'business_details/have_debt_repayment',
      'required': true,
      '$autoname': 'have_debt_repayment',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'repayment_debt_loan',
      'type': 'select_one',
      '$kuid': 'qL5RPtcDV',
      'label': [
        'Будь ласка, вкажіть, чи є у Вас затримка з виплатами за цим боргом або кредитом',
        'Please indicate whether you are caught up on repayments for this debt or loan'
      ],
      '$xpath': 'business_details/repayment_debt_loan',
      'relevant': 'selected(${have_debt_repayment},\'yes\')',
      'required': true,
      '$autoname': 'repayment_debt_loan',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'access_business_loans',
      'type': 'select_one',
      '$kuid': 'VKk3F4PKa',
      'label': [
        'Чи маєте Ви доступ до бізнес-позик або кредитів?',
        'Do you have access to business loans or credit?'
      ],
      '$xpath': 'business_details/access_business_loans',
      'required': true,
      '$autoname': 'access_business_loans',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'not_access_business_loans',
      'type': 'select_one',
      '$kuid': 'SUEwXBZz3',
      'label': [
        'Якщо «Ні», то чому?',
        'If not, why?'
      ],
      '$xpath': 'business_details/not_access_business_loans',
      'relevant': 'selected(${access_business_loans},\'no\')',
      'required': true,
      '$autoname': 'not_access_business_loans',
      'select_from_list_name': 'not_access_business_loans'
    },
    {
      'name': 'not_access_business_loans_other',
      'type': 'text',
      '$kuid': 'OL3mu3btC',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_details/not_access_business_loans_other',
      'relevant': 'selected(${access_business_loans},\'no\') and selected(${not_access_business_loans},\'other\')',
      'required': false,
      '$autoname': 'not_access_business_loans_other',
      'appearance': 'multiline'
    },
    {
      'name': 'your_main_customers',
      'type': 'text',
      '$kuid': 'P2YBuaByg',
      'label': [
        'Хто є Вашими основними клієнтами?',
        'Who are your main customers?'
      ],
      '$xpath': 'business_details/your_main_customers',
      'required': true,
      '$autoname': 'your_main_customers'
    },
    {
      'hint': [
        'Сюди входить нерухомість, транспортні засоби, обладнання тощо. Ви можете просто надати список, і він не буде оприлюднений.',
        'This includes real estate, vehicles, equipment etc. You can simply provide a list and this will not be made public.'
      ],
      'name': 'asset_business_own',
      'type': 'text',
      '$kuid': 'voqRwV3TV',
      'label': [
        'Якими активами володіє Ваш бізнес?',
        'What asset does your business own?'
      ],
      '$xpath': 'business_details/asset_business_own',
      'required': true,
      '$autoname': 'asset_business_own',
      'appearance': 'multiline'
    },
    {
      'name': 'main_barriers_business',
      'type': 'select_multiple',
      '$kuid': '8QvPzY6C6',
      'label': [
        'Які існують основні перешкоди для відновлення або продовження Вашого підприємства?',
        'What are the main barriers for the restoration or continuation of your business?'
      ],
      '$xpath': 'business_details/main_barriers_business',
      'required': true,
      '$autoname': 'main_barriers_business',
      'select_from_list_name': 'main_barriers_business'
    },
    {
      'name': 'main_barriers_business_other',
      'type': 'text',
      '$kuid': 'EQA13FWu1',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_details/main_barriers_business_other',
      'relevant': 'selected(${main_barriers_business},\'other\')',
      'required': false,
      '$autoname': 'main_barriers_business_other',
      'appearance': 'multiline'
    },
    {
      'type': 'end_group',
      '$kuid': 'EuOzR7Nf1'
    },
    {
      'name': 'business_plan',
      'type': 'begin_group',
      '$kuid': 'QDMg6l0eE',
      'label': [
        'Бізнес-план',
        'Business Plan'
      ],
      '$xpath': 'business_plan',
      'relevant': 'selected(${consent},\'yes\') and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'business_plan',
      'appearance': 'field-list'
    },
    {
      'name': 'escalation_conflict_affected_business',
      'type': 'select_multiple',
      '$kuid': 'RIdLJsxfs',
      'label': [
        'Як ескалація конфлікту вплинула на Ваше підприємство?',
        'How has the escalation of the conflict affected your business?'
      ],
      '$xpath': 'business_plan/escalation_conflict_affected_business',
      'required': true,
      '$autoname': 'escalation_conflict_affected_business',
      'select_from_list_name': 'escalation_conflict_affected_business'
    },
    {
      'name': 'escalation_conflict_affected_business_other',
      'type': 'text',
      '$kuid': 'YWrG9PNwA',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_plan/escalation_conflict_affected_business_other',
      'relevant': 'selected(${escalation_conflict_affected_business},\'other\')',
      'required': false,
      '$autoname': 'escalation_conflict_affected_business_other',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Чи не могли б ви надати більш детальну інформацію про те, як ескалація конфлікту в лютому 2022 року вплинула на Вашу підприємницьку діяльність? Чи був прямий вплив на Ваше підприємство, наприклад, пошкодження або забруднення вибухонебезпечними предметами? Чи це більш широкий економічний контекст, який вплинув на Вашу діяльність, і що в цьому контексті мало найбільш значний вплив? Будь ласка, також опишіть, як цей вплив проявив себе? Наприклад, чи довелося Вам скоротити або зупинити свою діяльність, взяти позику або застосувати будь-який інший механізм подолання наслідків?',
        'Could you please provide some more detail on how the escalation of the conflict in February 2022 has affected your business operations? Has there been any direct impact on your business e.g. damage or contamination? Or is it the larger economic context that has impacted your operations, and what about this has had the most significant impact? Please also outline how this impact has been felt? For example, have you had to reduce or halt your operations, take on a loan or adopt any other coping mechanism?'
      ],
      'name': 'escalation_conflict_detail',
      'type': 'text',
      '$kuid': 'LJ4cNg73m',
      'label': [
        'Будь ласка, надайте більш детальну інформацію про це',
        'Please provide some more detail on this'
      ],
      '$xpath': 'business_plan/escalation_conflict_detail',
      'required': true,
      '$autoname': 'escalation_conflict_detail',
      'appearance': 'multiline'
    },
    {
      'hint': [
        '"Будь ласка, надайте нам загальну інформацію про середньо- та довгостроковий план і бачення Вашої підприємницької діяльності. Ви можете викласти її наступним чином:\n-Короткострокові цілі (наступні 6-12 місяців):\n-Довгострокові цілі (1-3 роки):\n-Ключові показники ефективності: продажі, зростання кількості клієнтів тощо.\n"',
        '"Please give us some general information about the medium- to long-term plan and vision you have for your business. You can structure it in the following way:\n-Short-term Goals (Next 6-12 months):\n-Long-term Goals (1-3 years):\n-Key Metrics for Success: Sales, customer growth, etc."'
      ],
      'name': 'current_strategy_business',
      'type': 'text',
      '$kuid': 'UoiUdCoG8',
      'label': [
        'Будь ласка, опишіть поточну стратегію, яку Ви маєте для Вашого підприємства?',
        'Please describe the current strategy you have for your business?'
      ],
      '$xpath': 'business_plan/current_strategy_business',
      'required': true,
      '$autoname': 'current_strategy_business',
      'appearance': 'multiline'
    },
    {
      'name': 'grant_purpose_use',
      'type': 'select_one',
      '$kuid': 'WMnNQnaab',
      'label': [
        'Якщо Ви відповідатимете критеріям для отримання бізнес-гранту від ДРБ, на які цілі Ви плануєте його використати?',
        'If you are eligible to receive a business grant from DRC, what purpose would you use it for?'
      ],
      '$xpath': 'business_plan/grant_purpose_use',
      'required': true,
      '$autoname': 'grant_purpose_use',
      'select_from_list_name': 'grant_purpose_use'
    },
    {
      'hint': [
        'В ідеалі ваш бізнес-план повинен містити щонайменше наступну інформацію: \n- Перелік конкретних товарів/послуг (включаючи їх конкретну вартість та модель, якщо це можливо), на які буде витрачено грант\n- Для чого ці товари/послуги будуть використані і як вони сприятимуть продовженню або відновленню вашого бізнесу у сталий спосіб. \n- Детальна інформація про прогнозований вплив отримання гранту на оборот та дохід бізнесу, включаючи збільшення одного або обох показників, якщо це можливо',
        'Ideally your business plan should include at minimum the following information: \n- A list of the exact goods/services (including their specific costs and model if applicable) the grant would be spent on\n- What these goods/services would be used for and how they continue the continuation or restoration of your business in a sustainable way. \n- Details on the projected impact business turnover and income of receiving the grant, including increases in either or both if applicable'
      ],
      'name': 'grant_purpose_use_describe',
      'type': 'text',
      '$kuid': 'k5RW5smze',
      'label': [
        'Будь ласка, опишіть, як ви плануєте витратити грант, якщо ви отримаєте право на його отримання?',
        'Please describe how you plan to spend the grant if you qualify to receive it?'
      ],
      '$xpath': 'business_plan/grant_purpose_use_describe',
      'required': true,
      '$autoname': 'grant_purpose_use_describe',
      'appearance': 'multiline'
    },
    {
      'name': 'amount_implement_plan',
      'type': 'integer',
      '$kuid': 'jwPMiGpkR',
      'label': [
        'Будь ласка, вкажіть суму в гривнях, необхідну для реалізації цього бізнес-плану?',
        'Please state the amount of UAH required to implement this business plan?'
      ],
      '$xpath': 'business_plan/amount_implement_plan',
      'required': true,
      '$autoname': 'amount_implement_plan'
    },
    {
      'name': 'able_spend_grant_6m',
      'type': 'select_one',
      '$kuid': '9IDK3HWZ3',
      'label': [
        'Зважаючи на характер проєкту, Ви повинні бути в змозі витратити грант протягом 6 місяців після його отримання, але не пізніше кінця серпня 2025 року. Чи можете Ви підтвердити, що зможете це зробити?',
        'Due to the nature of the project you would have to be able to spend the grant within 6 months after receiving it and by the end of August  2025 at the latest. Can you confirm you will be able to do this?'
      ],
      '$xpath': 'business_plan/able_spend_grant_6m',
      'required': true,
      '$autoname': 'able_spend_grant_6m',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'about_market_research',
      'type': 'text',
      '$kuid': 'nHn2vdvH2',
      'label': [
        'Розкажіть, будь ласка, трохи більше про дослідження ринку, яке ви провели для підтримки вашого бізнес-плану? Це має включати інформацію про (потенційних) конкурентів',
        'Please tell us a bit more about the market research you have done to support your business plan? This should include information about (potential) competitors'
      ],
      '$xpath': 'business_plan/about_market_research',
      'required': true,
      '$autoname': 'about_market_research',
      'appearance': 'multiline'
    },
    {
      'name': 'creating_additional_jobs',
      'type': 'select_one',
      '$kuid': 'ksVeMZKB0',
      'label': [
        'Чи плануєте ви створити додаткові робочі місця в рамках Вашого бізнес-плану?',
        'Are you planning on creating any additional jobs as part of your business plan?'
      ],
      '$xpath': 'business_plan/creating_additional_jobs',
      'required': true,
      '$autoname': 'creating_additional_jobs',
      'select_from_list_name': 'yn'
    },
    {
      'hint': [
        'Зверніть увагу, що попередня підтримка, отримана 6 або більше місяців тому, не позбавляє вас права на отримання цього гранту.',
        'Please note that previous support received 6 or more months ago does not disqualify you from receiving this grant.'
      ],
      'name': 'received_previous_support',
      'type': 'select_one',
      '$kuid': '4j2RYPvh9',
      'label': [
        'Чи отримував ваш бізнес будь-яку раніше підтримку від уряду, неурядових організацій або інших суб\'єктів?',
        'Has your business received any previous support from the government, NGO, or other entity?'
      ],
      '$xpath': 'business_plan/received_previous_support',
      'required': true,
      '$autoname': 'received_previous_support',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'who_previous_support',
      'type': 'select_one',
      '$kuid': 'N2viLPBfn',
      'label': [
        'Хто надавав цю підтримку?',
        'Who provided this support?'
      ],
      '$xpath': 'business_plan/who_previous_support',
      'relevant': 'selected(${received_previous_support},\'yes\')',
      'required': true,
      '$autoname': 'who_previous_support',
      'select_from_list_name': 'provided_support'
    },
    {
      'name': 'who_previous_support_other',
      'type': 'text',
      '$kuid': 'mIdQAAfXi',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_plan/who_previous_support_other',
      'relevant': 'selected(${received_previous_support},\'yes\') and selected(${who_previous_support},\'other\')',
      'required': false,
      '$autoname': 'who_previous_support_other',
      'appearance': 'multiline'
    },
    {
      'name': 'amount_previous_support',
      'type': 'integer',
      '$kuid': 'cUU9ESHEv',
      'label': [
        'Якою була її сума?',
        'What was the amount?'
      ],
      '$xpath': 'business_plan/amount_previous_support',
      'relevant': 'selected(${received_previous_support},\'yes\')',
      'required': true,
      '$autoname': 'amount_previous_support'
    },
    {
      'name': 'when_previous_support',
      'type': 'date',
      '$kuid': '7rlgtumyQ',
      'label': [
        'Коли вона була надана?',
        'When was it provided?'
      ],
      '$xpath': 'business_plan/when_previous_support',
      'relevant': 'selected(${received_previous_support},\'yes\')',
      'required': true,
      '$autoname': 'when_previous_support',
      'appearance': 'month-year'
    },
    {
      'type': 'end_group',
      '$kuid': 'Gy3oZ1Mr8'
    },
    {
      'name': 'business_consultancy_001',
      'type': 'begin_group',
      '$kuid': 'KVklQpPz3',
      'label': [
        'Бізнес-консультації',
        'Business Consultancy'
      ],
      '$xpath': 'business_consultancy_001',
      'relevant': 'selected(${consent},\'yes\') and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'business_consultancy_001',
      'appearance': 'field-list'
    },
    {
      'hint': [
        'Оберіть до 3 відповідей',
        'Select up to 3 answers'
      ],
      'name': 'topic_business_consultancy',
      'type': 'select_multiple',
      '$kuid': 'LTPakLc3p',
      'label': [
        'Частина грантової підтримки, що надається обраним підприємствам, включає 5 годин бізнес-консультацій. Будь ласка, вкажіть тему(и), якій(им) ви надаєте перевагу під час консультації. Будь ласка, зверніть увагу, що ви не зможете отримати консультацію на обрану вами тему, і що, швидше за все, ви зможете отримати консультацію лише в одній конкретній сфері.',
        'Part of the grant support provided to selected businesses includes 5 hours of business consultancy services. Please indicate your preferred topic(s) for the consultancy. Please note that you may not be able to receive consulting on your topic of choice and that most likely you will only be able to receive consulting in one particular area.'
      ],
      '$xpath': 'business_consultancy_001/topic_business_consultancy',
      'required': true,
      '$autoname': 'topic_business_consultancy',
      'constraint': 'count-selected(.) <= 3',
      'constraint_message': [
        'Вибрано більше 3 варіантів відповіді',
        'More than 3 answers were selected'
      ],
      'select_from_list_name': 'topic_business_consultancy'
    },
    {
      'name': 'topic_business_consultancy_other',
      'type': 'text',
      '$kuid': 'DbTzpdDuI',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'business_consultancy_001/topic_business_consultancy_other',
      'relevant': 'selected(${topic_business_consultancy},\'other\')',
      'required': false,
      '$autoname': 'topic_business_consultancy_other',
      'appearance': 'multiline'
    },
    {
      'type': 'end_group',
      '$kuid': 'VBLaQHSIk'
    },
    {
      'name': 'comments_documents',
      'type': 'begin_group',
      '$kuid': '5yKafoApx',
      'label': [
        'Додаткові коментарі та документи',
        'Additional comments and documents'
      ],
      '$xpath': 'comments_documents',
      'relevant': 'selected(${consent},\'yes\') and (selected(${business_owner},\'yes\') or selected(${business_owner_no},\'family_member\') or selected(${business_owner_no},\'accountant_business\') or selected(${business_owner_no},\'director_business\'))',
      'required': false,
      '$autoname': 'comments_documents',
      'appearance': 'field-list'
    },
    {
      'hint': [
        'Нам це потрібно для того, щоб встановити, чи працює Ваш бізнес або працював останнім часом, що є необхідною умовою для надання допомоги.',
        'We need this to establish that your business is active or has recently been active, which is a requirement for assistance.'
      ],
      'name': 'file_tax_statement',
      'type': 'file',
      '$kuid': 'gmCeFq7bf',
      'label': [
        'Будь ласка, додайте податкову декларацію, яка показує податкові платежі (як мінімум) за останні шість місяців',
        'Please attach a tax statement that shows tax payments (at least) the past six months'
      ],
      '$xpath': 'comments_documents/file_tax_statement',
      'required': true,
      '$autoname': 'file_tax_statement'
    },
    {
      'hint': [
        'Скріншоти або виписки з OpenData Bot не приймаються',
        'Screenshots or extracts from OpenData Bot are not accepted'
      ],
      'name': 'file_business_document',
      'type': 'file',
      '$kuid': 'CNlBiNTZw',
      'label': [
        'Свідоцтво про державну реєстрацію бізнесу або виписка з Єдиного державного реєстру',
        'Certificate of state registration of business or extract from the Unified State Register'
      ],
      '$xpath': 'comments_documents/file_business_document',
      'required': false,
      '$autoname': 'file_business_document'
    },
    {
      'name': 'have_other_documents',
      'type': 'select_one',
      '$kuid': 'hlQbT6SNm',
      'label': [
        'Чи є у вас ще якісь документи, якими ви хотіли б поділитися з нами?',
        'Do you have any other documents you would like to share with us?’'
      ],
      '$xpath': 'comments_documents/have_other_documents',
      'required': true,
      '$autoname': 'have_other_documents',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'other_documents1',
      'type': 'file',
      '$kuid': 'e3CQiAc2q',
      'label': [
        'Додайте більше фотографій/документів',
        'Attach more photos/documents.'
      ],
      '$xpath': 'comments_documents/other_documents1',
      'relevant': 'selected(${have_other_documents},\'yes\')',
      'required': false,
      '$autoname': 'other_documents1'
    },
    {
      'name': 'other_documents2',
      'type': 'file',
      '$kuid': 'E5bnWYzQ3',
      'label': [
        'Додайте більше фотографій/документів',
        'Attach more photos/documents.'
      ],
      '$xpath': 'comments_documents/other_documents2',
      'relevant': 'selected(${have_other_documents},\'yes\') and not(selected(${other_documents1},\'\'))',
      'required': false,
      '$autoname': 'other_documents2'
    },
    {
      'name': 'other_documents3',
      'type': 'file',
      '$kuid': 'BI7Qyz8Fu',
      'label': [
        'Додайте більше фотографій/документів',
        'Attach more photos/documents.'
      ],
      '$xpath': 'comments_documents/other_documents3',
      'relevant': 'selected(${have_other_documents},\'yes\') and not(selected(${other_documents2},\'\'))',
      'required': false,
      '$autoname': 'other_documents3'
    },
    {
      'name': 'other_documents4',
      'type': 'file',
      '$kuid': 'FoLUPyrbh',
      'label': [
        'Додайте більше фотографій/документів',
        'Attach more photos/documents.'
      ],
      '$xpath': 'comments_documents/other_documents4',
      'relevant': 'selected(${have_other_documents},\'yes\') and not(selected(${other_documents3},\'\'))',
      'required': false,
      '$autoname': 'other_documents4'
    },
    {
      'name': 'other_documents5',
      'type': 'file',
      '$kuid': 'YnaOPJJFa',
      'label': [
        'Додайте більше фотографій/документів',
        'Attach more photos/documents.'
      ],
      '$xpath': 'comments_documents/other_documents5',
      'relevant': 'selected(${have_other_documents},\'yes\') and not(selected(${other_documents4},\'\'))',
      'required': false,
      '$autoname': 'other_documents5'
    },
    {
      'name': 'comments',
      'type': 'text',
      '$kuid': 'yHzf8KVpo',
      'label': [
        'Чи є у Вас інші коментарі або інформація, якою ви хотіли б поділитися з ДРБ? Ми були б особливо зацікавлені почути, чи працевлаштовуєте ви людей з високим рівнем вразливості, наприклад, людей з інвалідністю або колишніх комбатантів',
        'Do you have any other comments or information you would like to share with DRC? We would be particularly interested to hear whether you employ people with a strong vulnerability profile, such as people with a disability or ex-combatants'
      ],
      '$xpath': 'comments_documents/comments',
      'required': false,
      '$autoname': 'comments',
      'appearance': 'multiline'
    },
    {
      'name': 'hear_program',
      'type': 'select_one',
      '$kuid': '5PJQkwsPX',
      'label': [
        'Як ви дізналися про цю програму?',
        'How did you hear about this program?'
      ],
      '$xpath': 'comments_documents/hear_program',
      'required': true,
      '$autoname': 'hear_program',
      'select_from_list_name': 'hear_program'
    },
    {
      'name': 'hear_program_other',
      'type': 'text',
      '$kuid': 'Yl4bRuwsN',
      'label': [
        'Якщо «Інше», будь ласка, вкажіть',
        'If Other, please specify'
      ],
      '$xpath': 'comments_documents/hear_program_other',
      'relevant': 'selected(${hear_program},\'other\')',
      'required': false,
      '$autoname': 'hear_program_other'
    },
    {
      'type': 'end_group',
      '$kuid': 'oSKUqsSA3'
    },
    {
      'name': 'not_thank',
      'type': 'note',
      '$kuid': 'YXV4KlqE5',
      'label': [
        '**Дякуємо, що знайшли час, щоб надати цю інформацію. Якщо ви натиснете кнопку «Надіслати», ми успішно отримаємо вашу заявку. Ми повідомимо вас про результат і будь-які подальші кроки (якщо такі будуть) протягом трьох місяців.  (але, сподіваємось, раніше)**',
        '**Thank you for taking the time to provide this information. If you click ‘Submit’ we will receive your submission successfully. We will notify you about the outcome and any next steps (if any) within three months (but hopefully sooner)**'
      ],
      '$xpath': 'not_thank',
      'required': false,
      '$autoname': 'not_thank'
    },
    {
      'name': 'verification_information',
      'type': 'begin_group',
      '$kuid': 'AVAjOgYV8',
      'label': [
        'Перевірка наданої інформації',
        'Verification of information provided'
      ],
      '$xpath': 'verification_information',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'verification_information'
    },
    {
      'name': 'date_visit',
      'type': 'date',
      '$kuid': '5tnLsnVrC',
      'label': [
        'Дата візиту',
        'Date of visit'
      ],
      '$xpath': 'verification_information/date_visit',
      'required': true,
      '$autoname': 'date_visit'
    },
    {
      'name': 'enumerator_name',
      'type': 'text',
      '$kuid': 'DlJsyg1hv',
      'label': [
        'Відповідальна особа',
        'Enumerator name'
      ],
      '$xpath': 'verification_information/enumerator_name',
      'required': true,
      '$autoname': 'enumerator_name'
    },
    {
      'name': 'business_name_validation',
      'type': 'text',
      '$kuid': 'OoMjhTaNq',
      'label': [
        'Назва підприємства',
        'Business name'
      ],
      '$xpath': 'verification_information/business_name_validation',
      'required': true,
      '$autoname': 'business_name_validation'
    },
    {
      'name': 'business_type_validation',
      'type': 'select_one',
      '$kuid': '0HT37egR4',
      'label': [
        'Тип бізнесу',
        'Business type'
      ],
      '$xpath': 'verification_information/business_type_validation',
      'required': true,
      '$autoname': 'business_type_validation',
      'calculation': '${business_type}',
      'select_from_list_name': 'business_type'
    },
    {
      'name': 'business_type_validation_other',
      'type': 'text',
      '$kuid': 'lkSuy4c1A',
      'label': [
        'Якщо інше, будь ласка, поясніть',
        'Other, specify:'
      ],
      '$xpath': 'verification_information/business_type_validation_other',
      'relevant': 'selected(${business_type},\'other\')',
      'required': true,
      '$autoname': 'business_type_validation_other'
    },
    {
      'name': 'validation_visit_001',
      'type': 'select_one',
      '$kuid': '8vFs9HBBb',
      'label': [
        'Як проходив перевірочний візит:',
        'How did the validation visit take place:'
      ],
      '$xpath': 'verification_information/validation_visit_001',
      'required': true,
      '$autoname': 'validation_visit_001',
      'select_from_list_name': 'validation_visit_val'
    },
    {
      'name': 'business_premises',
      'type': 'select_one',
      '$kuid': 'CxaswM8HO',
      'label': [
        'Чи має підприємство приміщення?',
        'Does the business have premises?'
      ],
      '$xpath': 'verification_information/business_premises',
      'required': true,
      '$autoname': 'business_premises',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'business_premises_no',
      'type': 'select_one',
      '$kuid': 'tddN4lPnf',
      'label': [
        'Якщо ні, то чому?',
        'If no, why not'
      ],
      '$xpath': 'verification_information/business_premises_no',
      'relevant': 'selected(${business_premises},\'no\')',
      'required': true,
      '$autoname': 'business_premises_no',
      'select_from_list_name': 'business_premises'
    },
    {
      'name': 'business_premises_no_other',
      'type': 'text',
      '$kuid': 'mx3jmCy80',
      'label': [
        'Якщо інше, будь ласка, поясніть',
        'Other, specify:'
      ],
      '$xpath': 'verification_information/business_premises_no_other',
      'relevant': 'selected(${business_premises},\'no\') and selected(${business_premises_no},\'other\')',
      'required': false,
      '$autoname': 'business_premises_no_other',
      'appearance': 'multiline'
    },
    {
      'name': 'primary_goods_services',
      'type': 'select_multiple',
      '$kuid': 'aIMsLtbzO',
      'label': [
        'Основні товари або послуги, які пропонує бізнес',
        'Primary goods or services offered by business'
      ],
      '$xpath': 'verification_information/primary_goods_services',
      'required': true,
      '$autoname': 'primary_goods_services',
      'select_from_list_name': 'primary_goods_services'
    },
    {
      'name': 'primary_goods_services_other',
      'type': 'text',
      '$kuid': '9PhnPGprW',
      'label': [
        'Якщо інше, будь ласка, поясніть',
        'Other, specify:'
      ],
      '$xpath': 'verification_information/primary_goods_services_other',
      'relevant': 'selected(${primary_goods_services},\'other\')',
      'required': true,
      '$autoname': 'primary_goods_services_other'
    },
    {
      'hint': [
        'Перевірте відповідність особи та реєстраційного номера облікової картки платника податків\nЯкщо компанія - ФОП, реєстраційний номер облікової картки платника податків збігається з індивідуальним реєстраційний номером. Якщо компанія - це ТОВ або сімейне/звичайне фермерське господарство, будь ласка, вкажіть код ЄДРПОУ.',
        'Verify identity versus tax ID\nIf the business is a FOP, the tax ID is the same as their individual tax number. If the business is an LLC or family/regular farming enterprise, please provide the registration number.'
      ],
      'name': 'ownership_details',
      'type': 'text',
      '$kuid': 't0RO0ZBKB',
      'label': [
        'Інформація про власника',
        'Ownership details'
      ],
      '$xpath': 'verification_information/ownership_details',
      'required': true,
      '$autoname': 'ownership_details',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Перевірте бізнес-ліцензію або будь-які інші докази, які можуть бути надані, наприклад, достовірну присутність в Інтернеті',
        'Check business license or any other evidence that can be provided e.g. credible online presence'
      ],
      'name': 'years_experience',
      'type': 'integer',
      '$kuid': 'zeQIQxMRh',
      'label': [
        'Роки досвіду роботи',
        'Years of experience'
      ],
      '$xpath': 'verification_information/years_experience',
      'required': true,
      '$autoname': 'years_experience'
    },
    {
      'hint': [
        'Це стосується як офіційно працевлаштованих, так і неофіційних працівників. Будь ласка, ввічливо запитайте про це, але не наполягайте на показі офіційних контрактів або документації.',
        'This includes both formal and informal employees. Please politely inquire about this but don’t insist on seeing any formal contracts or documentation.'
      ],
      'name': 'number_employees',
      'type': 'integer',
      '$kuid': 'VG5Ya8Q73',
      'label': [
        'Кількість співробітників',
        'Number of employees'
      ],
      '$xpath': 'verification_information/number_employees',
      'required': true,
      '$autoname': 'number_employees',
      'calculation': '${number_employees_business}'
    },
    {
      'hint': [
        'Перевірте приміщення, щоб підтвердити (присутність персоналу, клієнтів (якщо це можливо) та продукти/послуги, що пропонуються)',
        'Check premises to confirm (staff present, customers present (if applicable) and products/services being offered)'
      ],
      'name': 'currently_operational',
      'type': 'select_one',
      '$kuid': 'RumOV1112',
      'label': [
        'Наразі працює',
        'Currently operational'
      ],
      '$xpath': 'verification_information/currently_operational',
      'required': true,
      '$autoname': 'currently_operational',
      'calculation': '${business_currently_operational}',
      'select_from_list_name': 'yn'
    },
    {
      'hint': [
        'Запитання та спостереження',
        'Question and observation'
      ],
      'name': 'business_have_assets',
      'type': 'select_one',
      '$kuid': 'qLINVQVgR',
      'label': [
        'Якщо бізнес не працює, чи збереглися його активи?',
        'If not operational, does the business still have its assets?'
      ],
      '$xpath': 'verification_information/business_have_assets',
      'relevant': 'selected(${currently_operational},\'no\')',
      'required': true,
      '$autoname': 'business_have_assets',
      'select_from_list_name': 'yn'
    },
    {
      'hint': [
        'Спостереження за приміщенням та працівниками, присутніми під час візиту',
        'Observation of premises and employees present during visit'
      ],
      'name': 'protection_risk_employees',
      'type': 'select_one',
      '$kuid': 'kQrxlHOHr',
      'label': [
        'Ризик захисту працівників?',
        'Protection risk to employees?'
      ],
      '$xpath': 'verification_information/protection_risk_employees',
      'required': true,
      '$autoname': 'protection_risk_employees',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'confirm_not_working_sectors',
      'type': 'select_multiple',
      '$kuid': 'Oo1UQUpMP',
      'label': [
        'Якщо можливо, підтвердіть, що вони не працюють у наступних секторах, які не можуть розглядатися для виділення грантів.',
        'If possible confirm that they are not working in the following sectors, which cannot be considered for grants allocation.'
      ],
      '$xpath': 'verification_information/confirm_not_working_sectors',
      'required': true,
      '$autoname': 'confirm_not_working_sectors',
      'select_from_list_name': 'not_working_sectors'
    },
    {
      'hint': [
        'Додайте фотографії екстер\'єру, інтер\'єру та ключових операційних зон.',
        'Include photos of exterior, interior, and key operational areas.'
      ],
      'name': 'photos_premises1',
      'type': 'image',
      '$kuid': 'wD8yigOg6',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises1',
      'required': false,
      '$autoname': 'photos_premises1',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises2',
      'type': 'image',
      '$kuid': 'MQ3wlSZJv',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises2',
      'relevant': 'not(selected(${photos_premises1},\'\'))',
      'required': false,
      '$autoname': 'photos_premises2',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises3',
      'type': 'image',
      '$kuid': 'azUWIz5OS',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises3',
      'relevant': 'not(selected(${photos_premises2},\'\'))',
      'required': false,
      '$autoname': 'photos_premises3',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises4',
      'type': 'image',
      '$kuid': 'ShcyU0toK',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises4',
      'relevant': 'not(selected(${photos_premises3},\'\'))',
      'required': false,
      '$autoname': 'photos_premises4',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises5',
      'type': 'image',
      '$kuid': 'SzkdjmxZa',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises5',
      'relevant': 'not(selected(${photos_premises4},\'\'))',
      'required': false,
      '$autoname': 'photos_premises5',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises6',
      'type': 'image',
      '$kuid': 'sPoDJMKyM',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises6',
      'relevant': 'not(selected(${photos_premises5},\'\'))',
      'required': false,
      '$autoname': 'photos_premises6',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises7',
      'type': 'image',
      '$kuid': 'iXjiJcDhs',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises7',
      'relevant': 'not(selected(${photos_premises6},\'\'))',
      'required': false,
      '$autoname': 'photos_premises7',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises8',
      'type': 'image',
      '$kuid': 'sWnWWslar',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises8',
      'relevant': 'not(selected(${photos_premises7},\'\'))',
      'required': false,
      '$autoname': 'photos_premises8',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises9',
      'type': 'image',
      '$kuid': '50JYWPETQ',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises9',
      'relevant': 'not(selected(${photos_premises8},\'\'))',
      'required': false,
      '$autoname': 'photos_premises9',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'photos_premises10',
      'type': 'image',
      '$kuid': 'hVRMMqJX0',
      'label': [
        'Фотографії приміщень',
        'Photos of premises'
      ],
      '$xpath': 'verification_information/photos_premises10',
      'relevant': 'not(selected(${photos_premises9},\'\'))',
      'required': false,
      '$autoname': 'photos_premises10',
      'parameters': 'max-pixels=1024'
    },
    {
      'name': 'company_engages_socially',
      'type': 'select_one',
      '$kuid': '9hnMMQ3F8',
      'label': [
        'На основі вашого візиту на підприємство, чи вважаєте ви, що ця компанія займається соціально та екологічно відповідальним підприємництвом?',
        'Based on your visit of the enterprise, do you feel this company engages in socially and environmentally responsible entrepreneurship?'
      ],
      '$xpath': 'verification_information/company_engages_socially',
      'required': true,
      '$autoname': 'company_engages_socially',
      'select_from_list_name': 'yn'
    },
    {
      'name': 'comments_001',
      'type': 'text',
      '$kuid': 'JEWS2a82Z',
      'label': [
        'Будь-які інші коментарі/зауваження',
        'Any other comments/observations'
      ],
      '$xpath': 'verification_information/comments_001',
      'required': false,
      '$autoname': 'comments_001',
      'appearance': 'multiline'
    },
    {
      'name': 'comments_authorities_community',
      'type': 'text',
      '$kuid': '59DtEjZuW',
      'label': [
        'Будь-які коментарі/спостереження з боку органів влади або членів громади щодо підприємства',
        'Any comments/observations about the business from authorities or community members?'
      ],
      '$xpath': 'verification_information/comments_authorities_community',
      'required': false,
      '$autoname': 'comments_authorities_community',
      'appearance': 'multiline'
    },
    {
      'type': 'end_group',
      '$kuid': 'elmIC0Kfa'
    },
    {
      'name': 'scoring_business',
      'type': 'begin_group',
      '$kuid': '8VkWnJYxI',
      'label': [
        'Фінальна оцінка',
        'Final Evaluation'
      ],
      '$xpath': 'scoring_business',
      'relevant': 'selected(${shortlisted},\'yes\')',
      'required': false,
      '$autoname': 'scoring_business'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 10',
        'Score this question in the range from 0 to 10'
      ],
      'name': 'scor_use_grant',
      'type': 'integer',
      '$kuid': 'aInNNGy68',
      'label': [
        'Грант буде використано для пом\'якшення або подолання шоку, спричиненого ескалацією конфлікту.',
        'The grant will be used to mitigate or overcome a shock created by the escalation of the conflict.'
      ],
      '$xpath': 'scoring_business/scor_use_grant',
      'required': false,
      '$autoname': 'scor_use_grant',
      'constraint': '. >= 0 and . <= 10',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 10',
        'Score this question in the range from 0 to 10'
      ]
    },
    {
      'name': 'com_scor_use_grant',
      'type': 'text',
      '$kuid': 'mu5bESZjm',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_use_grant',
      'relevant': 'not(selected(${scor_use_grant},\'\'))',
      'required': false,
      '$autoname': 'com_scor_use_grant',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ],
      'name': 'scor_plan_clearly',
      'type': 'integer',
      '$kuid': 'qNomnppfx',
      'label': [
        'Бізнес-план чітко сформульований, обґрунтований та відповідає ринковому попиту.',
        'Business plan is clearly articulated and justified and aligns with market demand.'
      ],
      '$xpath': 'scoring_business/scor_plan_clearly',
      'required': false,
      '$autoname': 'scor_plan_clearly',
      'constraint': '. >= 0 and . <= 5',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ]
    },
    {
      'name': 'com_scor_plan_clearly',
      'type': 'text',
      '$kuid': 'Apy0aibnB',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_plan_clearly',
      'relevant': 'not(selected(${scor_plan_clearly},\'\'))',
      'required': false,
      '$autoname': 'com_scor_plan_clearly',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ],
      'name': 'scor_compete_market',
      'type': 'integer',
      '$kuid': 'IcDFhTXV3',
      'label': [
        'Бізнес може конкурувати на ринку',
        'Business can compete in the market'
      ],
      '$xpath': 'scoring_business/scor_compete_market',
      'required': false,
      '$autoname': 'scor_compete_market',
      'constraint': '. >= 0 and . <= 5',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ]
    },
    {
      'name': 'com_scor_compete_market',
      'type': 'text',
      '$kuid': '8jOyHJdrL',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_compete_market',
      'relevant': 'not(selected(${scor_compete_market},\'\'))',
      'required': false,
      '$autoname': 'com_scor_compete_market',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 10',
        'Score this question in the range from 0 to 10'
      ],
      'name': 'scor_financially_healthy',
      'type': 'integer',
      '$kuid': 'PKFY0hNIj',
      'label': [
        'Бізнес є фінансово спроможним',
        'Business is financially healthy'
      ],
      '$xpath': 'scoring_business/scor_financially_healthy',
      'required': false,
      '$autoname': 'scor_financially_healthy',
      'constraint': '. >= 0 and . <= 10',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 10',
        'Score this question in the range from 0 to 10'
      ]
    },
    {
      'name': 'com_scor_financially_healthy',
      'type': 'text',
      '$kuid': 'GRsO6HoIC',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_financially_healthy',
      'relevant': 'not(selected(${scor_financially_healthy},\'\'))',
      'required': false,
      '$autoname': 'com_scor_financially_healthy',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ],
      'name': 'scor_business_owner',
      'type': 'integer',
      '$kuid': 'VeSPNoKJ0',
      'label': [
        'Власник/ця бізнесу має значний і відповідний технічний та підприємницький досвід для реалізації бізнес-плану',
        'Business owner has significant and relevant technical and entrepreneurial experience to implement the business plan'
      ],
      '$xpath': 'scoring_business/scor_business_owner',
      'required': false,
      '$autoname': 'scor_business_owner',
      'constraint': '. >= 0 and . <= 5',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ]
    },
    {
      'name': 'com_scor_business_owner',
      'type': 'text',
      '$kuid': 'QZW6jYRom',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_business_owner',
      'relevant': 'not(selected(${scor_business_owner},\'\'))',
      'required': false,
      '$autoname': 'com_scor_business_owner',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 10',
        'Score this question in the range from 0 to 10'
      ],
      'name': 'scor_spent_sustainably',
      'type': 'integer',
      '$kuid': 'YFwuHG33b',
      'label': [
        'Грант буде витрачено раціонально',
        'Grant will be spent sustainably'
      ],
      '$xpath': 'scoring_business/scor_spent_sustainably',
      'required': false,
      '$autoname': 'scor_spent_sustainably',
      'constraint': '. >= 0 and . <= 10',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 10',
        'Score this question in the range from 0 to 10'
      ]
    },
    {
      'name': 'com_scor_spent_sustainably',
      'type': 'text',
      '$kuid': 'APQjrffev',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_spent_sustainably',
      'relevant': 'not(selected(${scor_spent_sustainably},\'\'))',
      'required': false,
      '$autoname': 'com_scor_spent_sustainably',
      'appearance': 'multiline'
    },
    {
      'hint': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ],
      'name': 'scor_owner_degree',
      'type': 'integer',
      '$kuid': 'ji0Dn3OL5',
      'label': [
        'Домогосподарство власника/ці бізнесу демонструє високий ступінь вразливості',
        'The household of the business owner shows a high degree of vulnerability'
      ],
      '$xpath': 'scoring_business/scor_owner_degree',
      'required': false,
      '$autoname': 'scor_owner_degree',
      'constraint': '. >= 0 and . <= 5',
      'constraint_message': [
        'Оцінка даного питання у інтервалі з 0 до 5',
        'Score this question in the range from 0 to 5'
      ]
    },
    {
      'name': 'com_scor_owner_degree',
      'type': 'text',
      '$kuid': 'vdscKUABD',
      'label': [
        'Коментар до попереднього запитання',
        'Comment on the previous question'
      ],
      '$xpath': 'scoring_business/com_scor_owner_degree',
      'relevant': 'not(selected(${scor_owner_degree},\'\'))',
      'required': false,
      '$autoname': 'com_scor_owner_degree',
      'appearance': 'multiline'
    },
    {
      'type': 'end_group',
      '$kuid': 'SwRQzG70y'
    }
  ],
  'choices': [
    {
      'name': 'yes',
      '$kuid': 'LtBPN8Xm0',
      'label': [
        '✅ Так',
        '✅ Yes'
      ],
      'list_name': 'shortlisted',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      '$kuid': 'bMGVDOdJo',
      'label': [
        '❌ Ні',
        '❌ No'
      ],
      'list_name': 'shortlisted',
      '$autovalue': 'no'
    },
    {
      'name': 'deduplication',
      '$kuid': 'q3bgx99J2',
      'label': [
        '⚠️ Дедуплікація',
        '⚠️ Deduplication'
      ],
      'list_name': 'shortlisted',
      '$autovalue': 'deduplication'
    },
    {
      'name': 'pending',
      '$kuid': '5mo7rC03C',
      'label': [
        '🕓 Очікує на розгляд',
        '🕓 Pending'
      ],
      'list_name': 'shortlisted',
      '$autovalue': 'pending'
    },
    {
      'name': 'completed',
      '$kuid': 'gIi2Ls1gb',
      'label': [
        '✅ Завершено',
        '✅ Completed'
      ],
      'list_name': 'vetting_status',
      '$autovalue': 'completed'
    },
    {
      'name': 'ongoing',
      '$kuid': '6XgNOlMDy',
      'label': [
        '🕓 Триває',
        '🕓 Ongoin'
      ],
      'list_name': 'vetting_status',
      '$autovalue': 'ongoing'
    },
    {
      'name': 'rejected',
      '$kuid': 'jPo2gcpVx',
      'label': [
        '❌ Відхилено',
        '❌ Rejected'
      ],
      'list_name': 'vetting_status',
      '$autovalue': 'rejected'
    },
    {
      'name': 'completed',
      '$kuid': 'eMAlfZ1cU',
      'label': [
        '✅ Завершено',
        '✅ Completed'
      ],
      'list_name': 'validation_visit',
      '$autovalue': 'completed'
    },
    {
      'name': 'rejected',
      '$kuid': 'WAxrPC6II',
      'label': [
        '❌ Відхилено',
        '❌ Rejected'
      ],
      'list_name': 'validation_visit',
      '$autovalue': 'rejected'
    },
    {
      'name': 'follow_up_required',
      '$kuid': 'S8LNDiuod',
      'label': [
        '🕓 Потрібні подальші дії',
        '🕓 Follow-up required'
      ],
      'list_name': 'validation_visit',
      '$autovalue': 'follow_up_required'
    },
    {
      'name': 'approved',
      '$kuid': 'QM5G3wymB',
      'label': [
        '✅ Затверджено',
        '✅ Approved'
      ],
      'list_name': 'committee_decision',
      '$autovalue': 'approved'
    },
    {
      'name': 'rejected',
      '$kuid': '37eJl34IV',
      'label': [
        '❌ Відхилено',
        '❌ Rejected'
      ],
      'list_name': 'committee_decision',
      '$autovalue': 'rejected'
    },
    {
      'name': 'waiting_list',
      '$kuid': 'L5Q7ljtwU',
      'label': [
        '🕓 Очікується лист',
        '🕓 Waiting list'
      ],
      'list_name': 'committee_decision',
      '$autovalue': 'waiting_list'
    },
    {
      'name': 'done',
      '$kuid': 'f1l5qcqow',
      'label': [
        '✅ Виконано',
        '✅ Done'
      ],
      'list_name': 'first_tranche',
      '$autovalue': 'done'
    },
    {
      'name': 'pending',
      '$kuid': 'AtWbfumrK',
      'label': [
        '🕓 На розгляді',
        '🕓 Pending'
      ],
      'list_name': 'first_tranche',
      '$autovalue': 'pending'
    },
    {
      'name': 'only_first_tranche',
      '$kuid': 'ZQg7pqLvc',
      'label': [
        '❎ Тільки перший транш',
        '❎ Only first tranche'
      ],
      'list_name': 'first_tranche',
      '$autovalue': 'only_first_tranche'
    },
    {
      'name': 'done',
      '$kuid': 'SHwLzIlWn',
      'label': [
        '✅ Виконано',
        '✅ Done'
      ],
      'list_name': 'second_tranche',
      '$autovalue': 'done'
    },
    {
      'name': 'pending',
      '$kuid': '5WF8hBqKt',
      'label': [
        '🕓 На розгляді',
        '🕓 Pending'
      ],
      'list_name': 'second_tranche',
      '$autovalue': 'pending'
    },
    {
      'name': 'na',
      '$kuid': '9bIGvrlZ9',
      'label': [
        '❎ N/A',
        '❎ N/A'
      ],
      'list_name': 'second_tranche',
      '$autovalue': 'na'
    },
    {
      'name': 'done',
      '$kuid': 'psvnrBqOH',
      'label': [
        '✅ Виконано',
        '✅ Done'
      ],
      'list_name': 'business_consultancy',
      '$autovalue': 'done'
    },
    {
      'name': 'ongoing',
      '$kuid': 'CDxEd941p',
      'label': [
        '🕓 Триває',
        '🕓 Ongoin'
      ],
      'list_name': 'business_consultancy',
      '$autovalue': 'ongoing'
    },
    {
      'name': 'rejected',
      '$kuid': 'eZXhiZFTI',
      'label': [
        '❌ Відхилено',
        '❌ Rejected'
      ],
      'list_name': 'business_consultancy',
      '$autovalue': 'rejected'
    },
    {
      'name': 'completed',
      '$kuid': 'iOedjKuzI',
      'label': [
        '✅ Завершено',
        '✅ Completed'
      ],
      'list_name': 'post_distribution',
      '$autovalue': 'completed'
    },
    {
      'name': 'ongoing',
      '$kuid': '5sLdCtovy',
      'label': [
        '🕓 Триває',
        '🕓 Ongoin'
      ],
      'list_name': 'post_distribution',
      '$autovalue': 'ongoing'
    },
    {
      'name': 'rank1',
      '$kuid': 'wBxSrRRFK',
      'label': [
        'Rank 1',
        'Rank 1'
      ],
      'list_name': 'business_category',
      '$autovalue': 'rank1'
    },
    {
      'name': 'rank2',
      '$kuid': 'r8kSKBQWW',
      'label': [
        'Rank 2',
        'Rank 2'
      ],
      'list_name': 'business_category',
      '$autovalue': 'rank2'
    },
    {
      'name': 'rank3',
      '$kuid': 'FEtVytEc3',
      'label': [
        'Rank 3',
        'Rank 3'
      ],
      'list_name': 'business_category',
      '$autovalue': 'rank3'
    },
    {
      'name': 'yes',
      '$kuid': 'SVijsbPJu',
      'label': [
        'Так',
        'Yes'
      ],
      'list_name': 'yn',
      '$autovalue': 'yes'
    },
    {
      'name': 'no',
      '$kuid': 'LoOzpJwcB',
      'label': [
        'Ні',
        'No'
      ],
      'list_name': 'yn',
      '$autovalue': 'no'
    },
    {
      'name': 'family_member',
      '$kuid': '52u0gYxNS',
      'label': [
        'Член сім\'ї власника бізнесу',
        'Family member of the business owner'
      ],
      'list_name': 'business_owner_no',
      '$autovalue': 'family_member'
    },
    {
      'name': 'third_party_agency',
      '$kuid': 'ZofODHs1n',
      'label': [
        'Стороннє агентство',
        'Third Party Agency'
      ],
      'list_name': 'business_owner_no',
      '$autovalue': 'third_party_agency'
    },
    {
      'name': 'accountant_business',
      '$kuid': 'mdepq3GDA',
      'label': [
        'Бухгалтер/ка бізнесу',
        'Accountant of the business'
      ],
      'list_name': 'business_owner_no',
      '$autovalue': 'accountant_business'
    },
    {
      'name': 'director_business',
      '$kuid': '4aRO0ZAy4',
      'label': [
        'Директор/ка бізнесу',
        'Director of the business'
      ],
      'list_name': 'business_owner_no',
      '$autovalue': 'director_business'
    },
    {
      'name': 'no',
      '$kuid': 'Od4CeQesf',
      'label': [
        'Ні',
        'No'
      ],
      'list_name': 'business_owner_no',
      '$autovalue': 'no'
    },
    {
      'name': 'idp',
      '$kuid': 'Lowld0oNe',
      'label': [
        'Внутрішньо-переміщена особа (ВПО)',
        'Internally Displaced Person (IDP)'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'idp'
    },
    {
      'name': 'long_res',
      '$kuid': 'EIbQPqW4z',
      'label': [
        'Довгостроковий мешканець',
        'Long - Term Resident'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'long_res'
    },
    {
      'name': 'ret',
      '$kuid': 'UVVeHteIS',
      'label': [
        'Особа, яка повернулася',
        'Returnee'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'ret'
    },
    {
      'name': 'other',
      '$kuid': 'zW5pF1YEz',
      'label': [
        'Інший',
        'Other'
      ],
      'list_name': 'res_stat',
      '$autovalue': 'other'
    },
    {
      'name': 'diff_see',
      '$kuid': '9mJt0pdMJ',
      'label': [
        'Маєте труднощі із зором, навіть якщо носите окуляри',
        'Have difficulty seeing, even if wearing glasses'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_see'
    },
    {
      'name': 'diff_hear',
      '$kuid': 'nTKh6EVis',
      'label': [
        'Маєте проблеми зі слухом, навіть якщо користуєтеся слуховим апаратом',
        'Have difficulty hearing, even if using a hearing aid'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_hear'
    },
    {
      'name': 'diff_walk',
      '$kuid': 'pwkwaP8CC',
      'label': [
        'Маєте труднощі з ходьбою або підйомом по сходах',
        'Have difficulty walking or climbing steps'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_walk'
    },
    {
      'name': 'diff_rem',
      '$kuid': 'bNNfPArpr',
      'label': [
        'Маєте труднощі з запам\'ятовуванням або концентрацією уваги',
        'Have difficulty remembering or concentrating'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_rem'
    },
    {
      'name': 'diff_care',
      '$kuid': 'NX7PHqwIy',
      'label': [
        'Маєте труднощі з самообслуговуванням, наприклад, з миттям або одяганням',
        'Have difficulty with self-care such as washing all over or dressing'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_care'
    },
    {
      'name': 'diff_comm',
      '$kuid': 'iRBPS9BXC',
      'label': [
        'Маєте труднощі у спілкуванні, наприклад, у розумінні чи розумінні інших людей',
        'Have difficulty communicating, for example understanding or being understood'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_comm'
    },
    {
      'name': 'diff_none',
      '$kuid': '8Gs0P1iPm',
      'label': [
        'Ніщо з перерахованого вище не стосується',
        'None of the above apply'
      ],
      'list_name': 'dis',
      '$autovalue': 'diff_none'
    },
    {
      'name': 'zero',
      '$kuid': '32zLL4Yp3',
      'label': [
        'Ні, труднощі відсутні',
        'No, no difficulty'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'zero'
    },
    {
      'name': 'one',
      '$kuid': '93Zvg18rB',
      'label': [
        'Так, є деякі труднощі',
        'Yes, some difficulty'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'one'
    },
    {
      'name': 'two',
      '$kuid': 'yHqNYqVgF',
      'label': [
        'Так, багато труднощів',
        'Yes, a lot of difficulty'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'two'
    },
    {
      'name': 'fri',
      '$kuid': '62UufwpU4',
      'label': [
        'Взагалі не можу(-е) робити',
        'Cannot do at all'
      ],
      'list_name': 'dis_level',
      '$autovalue': 'fri'
    },
    {
      'name': 'kharkiv',
      '$kuid': 'vT98yY4FA',
      'label': [
        'Харків',
        'Kharkiv'
      ],
      'list_name': 'office',
      '$autovalue': 'kharkiv'
    },
    {
      'name': 'dnipro',
      '$kuid': 'i3aoD2Kzb',
      'label': [
        'Дніпро',
        'Dnipro'
      ],
      'list_name': 'office',
      '$autovalue': 'dnipro'
    },
    {
      'name': 'mykovaiv',
      '$kuid': 'dt4URCOUk',
      'label': [
        'Миколаїв',
        'Mykolaiv'
      ],
      'list_name': 'office',
      '$autovalue': 'mykovaiv'
    },
    {
      'name': 'chernihiv',
      '$kuid': 'dF5XhdbJp',
      'label': [
        'Chernihiv',
        'Chernihiv'
      ],
      'list_name': 'office',
      '$autovalue': 'chernihiv'
    },
    {
      'name': 'sumy',
      '$kuid': 'xVLASgBkW',
      'label': [
        'Sumy',
        'Sumy'
      ],
      'list_name': 'office',
      '$autovalue': 'sumy'
    },
    {
      'name': 'myself',
      '$kuid': 'MZitsv0LU',
      'label': [
        'Я',
        'myself'
      ],
      'list_name': 'confirm_receive_grant',
      '$autovalue': 'myself'
    },
    {
      'name': 'someone_else',
      '$kuid': 'c6Fwm3aFo',
      'label': [
        'Хтось інший',
        'someone else'
      ],
      'list_name': 'confirm_receive_grant',
      '$autovalue': 'someone_else'
    },
    {
      'name': 'fop1',
      '$kuid': '8HZkUvN5X',
      'label': [
        'ФОП 1',
        'FOP 1'
      ],
      'list_name': 'business_type',
      '$autovalue': 'fop1'
    },
    {
      'name': 'fop2',
      '$kuid': 'VYers01Tf',
      'label': [
        'ФОП 2',
        'FOP 2'
      ],
      'list_name': 'business_type',
      '$autovalue': 'fop2'
    },
    {
      'name': 'fop3',
      '$kuid': 'K9DgJXlKa',
      'label': [
        'ФОП 3',
        'FOP 3'
      ],
      'list_name': 'business_type',
      '$autovalue': 'fop3'
    },
    {
      'name': 'fop4',
      '$kuid': 'ITFOu47lf',
      'label': [
        'ФОП 4',
        'FOP 4'
      ],
      'list_name': 'business_type',
      '$autovalue': 'fop4'
    },
    {
      'name': 'entrepreneurs',
      '$kuid': 'GiSqCRzlp',
      'label': [
        'Підприємці на загальній системі оподаткування',
        'Entrepreneurs under the general taxation system'
      ],
      'list_name': 'business_type',
      '$autovalue': 'entrepreneurs'
    },
    {
      'name': 'llc',
      '$kuid': 'LG8ScMm8X',
      'label': [
        'ТОВ',
        'LLC'
      ],
      'list_name': 'business_type',
      '$autovalue': 'llc'
    },
    {
      'name': 'farming_enterprise',
      '$kuid': 'WWCMunRo6',
      'label': [
        'Фермерське господарство',
        'Farming Enterprise'
      ],
      'list_name': 'business_type',
      '$autovalue': 'farming_enterprise'
    },
    {
      'name': 'family_farming_enterprise',
      '$kuid': 'kpsFcfBt2',
      'label': [
        'Сімейне фермерське господарство',
        'Family Farming Enterprise'
      ],
      'list_name': 'business_type',
      '$autovalue': 'family_farming_enterprise'
    },
    {
      'name': 'other',
      '$kuid': 'WLrivcX6m',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'business_type',
      '$autovalue': 'other'
    },
    {
      'name': 'relocation_business',
      '$kuid': '9v9b4euRO',
      'label': [
        'Географічне переміщення бізнесу',
        'Geographical relocation of the business'
      ],
      'list_name': 'reason_pause_activity',
      '$autovalue': 'relocation_business'
    },
    {
      'name': 'mine_contamination',
      '$kuid': 'kqMLvq8FY',
      'label': [
        'Мінне забруднення',
        'Mine contamination'
      ],
      'list_name': 'reason_pause_activity',
      '$autovalue': 'mine_contamination'
    },
    {
      'name': 'damaged_assets',
      '$kuid': 'D1YR9M0WT',
      'label': [
        'Пошкодження або знищення активів внаслідок обстрілів',
        'Damaged or detroyed assets due to shelling'
      ],
      'list_name': 'reason_pause_activity',
      '$autovalue': 'damaged_assets'
    },
    {
      'name': 'other',
      '$kuid': 'NP8OmrSyU',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'reason_pause_activity',
      '$autovalue': 'other'
    },
    {
      'name': 'retail',
      '$kuid': 'bkGxTbKFK',
      'label': [
        'Роздрібна торгівля',
        'Retail'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'retail'
    },
    {
      'name': 'construction',
      '$kuid': 'iKz1clCjW',
      'label': [
        'Будівництво',
        'Construction'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'construction'
    },
    {
      'name': 'it',
      '$kuid': 'lk4IhehxT',
      'label': [
        'ІТ',
        'IT'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'it'
    },
    {
      'name': 'transportation',
      '$kuid': 'azyTnuIm4',
      'label': [
        'Транспорт',
        'Transportation'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'transportation'
    },
    {
      'name': 'telecommunication',
      '$kuid': 'q1hAqWE4I',
      'label': [
        'Телекомунікації',
        'Telecommunication'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'telecommunication'
    },
    {
      'name': 'education',
      '$kuid': 'GinY6srYa',
      'label': [
        'Освіта',
        'Education'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'education'
    },
    {
      'name': 'healthcare',
      '$kuid': 'N3dZJwblK',
      'label': [
        'Охорона здоров\'я',
        'Healthcare'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'healthcare'
    },
    {
      'name': 'finance_legal_services',
      '$kuid': 'HuGrEBXwF',
      'label': [
        'Фінансові та юридичні послуги',
        'Finance and Legal Services'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'finance_legal_services'
    },
    {
      'name': 'marketing_services',
      '$kuid': '2AJ0y5AIN',
      'label': [
        'Маркетингові послуги',
        'Marketing Services'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'marketing_services'
    },
    {
      'name': 'agriculture',
      '$kuid': '4METyLdrI',
      'label': [
        'Сільське господарство',
        'Agriculture'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'agriculture'
    },
    {
      'name': 'petty_trade',
      '$kuid': 'VCKB4AcwU',
      'label': [
        'Дрібна торгівля',
        'Petty trade'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'petty_trade'
    },
    {
      'name': 'wholesale_trade',
      '$kuid': 'vDR2hLSYX',
      'label': [
        'Оптова торгівля',
        'Wholesale trade'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'wholesale_trade'
    },
    {
      'name': 'food_service',
      '$kuid': 'jzndM2IyY',
      'label': [
        'Харчова промисловість',
        'Food Service'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'food_service'
    },
    {
      'name': 'small_manufacturing',
      '$kuid': 'mXj8Pf1H9',
      'label': [
        'Мале виробництво',
        'Small manufacturing'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'small_manufacturing'
    },
    {
      'name': 'beauty_services',
      '$kuid': 'D8hBNNPfj',
      'label': [
        'Косметичні послуги',
        'Beauty Services'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'beauty_services'
    },
    {
      'name': 'sewing_tailoring',
      '$kuid': 'OSQV59ctA',
      'label': [
        'Шиття та кравецькі послуги',
        'Sewing and tailoring'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'sewing_tailoring'
    },
    {
      'name': 'car_repairs_maintanence',
      '$kuid': 'xxpdM9YuQ',
      'label': [
        'Ремонт та обслуговування автомобілів',
        'Car repairs and maintanence'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'car_repairs_maintanence'
    },
    {
      'name': 'utility_services',
      '$kuid': 'bnbqngQ4q',
      'label': [
        'Комунальні послуги',
        'Utility Services'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'utility_services'
    },
    {
      'name': 'other',
      '$kuid': 'PSrlkE1HT',
      'label': [
        'Інші',
        'Others'
      ],
      'list_name': 'key_business_activities',
      '$autovalue': 'other'
    },
    {
      'name': 'rate_high',
      '$kuid': 'UZsBQudRM',
      'label': [
        'Занадто висока процентна ставка',
        'Interest rate too high'
      ],
      'list_name': 'not_access_business_loans',
      '$autovalue': 'rate_high'
    },
    {
      'name': 'lack_assets',
      '$kuid': '3S6IGLfnR',
      'label': [
        'Брак активів',
        'Lack of assets'
      ],
      'list_name': 'not_access_business_loans',
      '$autovalue': 'lack_assets'
    },
    {
      'name': 'lack_information',
      '$kuid': 'KU5J5wAGr',
      'label': [
        'Брак інформації',
        'Lack of information'
      ],
      'list_name': 'not_access_business_loans',
      '$autovalue': 'lack_information'
    },
    {
      'name': 'other',
      '$kuid': '7XOYKDmjq',
      'label': [
        'Інші',
        'Others'
      ],
      'list_name': 'not_access_business_loans',
      '$autovalue': 'other'
    },
    {
      'name': 'access_financial_aid',
      '$kuid': '5x1c7qdeP',
      'label': [
        'Доступ до фінансової допомоги для підприємницької діяльності',
        'Access to financial aid for business'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'access_financial_aid'
    },
    {
      'name': 'lack_skilled_workers',
      '$kuid': 'nnetZrGZf',
      'label': [
        'Брак кваліфікованих працівників',
        'Lack of skilled workers'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'lack_skilled_workers'
    },
    {
      'name': 'increased_prices_materials',
      '$kuid': '5b5Gfkdji',
      'label': [
        'Зростання цін на матеріали',
        'Increased prices of materials'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'increased_prices_materials'
    },
    {
      'name': 'infrastructure_transportation',
      '$kuid': 'xGbCM5afG',
      'label': [
        'Інфраструктурні та транспортні бар\'єри',
        'Infrastructure and transportation barriers'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'infrastructure_transportation'
    },
    {
      'name': 'inability_compete_competitors',
      '$kuid': 'tFETNPrVD',
      'label': [
        'Неможливість конкурувати з конкурентами',
        'Inability to compete with competitors'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'inability_compete_competitors'
    },
    {
      'name': 'monopolization_business',
      '$kuid': 'GaFyuVas4',
      'label': [
        'Монополізація цієї сфери підприємницької діяльності',
        'Monopolization of this business sphere'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'monopolization_business'
    },
    {
      'name': 'legal_regulatory_environment',
      '$kuid': 'xSKfKb46A',
      'label': [
        'Законодавче та регуляторне середовище',
        'Legal and regulatory environment'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'legal_regulatory_environment'
    },
    {
      'name': 'lack_customers',
      '$kuid': 'pFnedc45g',
      'label': [
        'Відсутність клієнтів',
        'Lack of customers'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'lack_customers'
    },
    {
      'name': 'safety_concerns_related',
      '$kuid': 'RG0uYfyZV',
      'label': [
        'Занепокоєння щодо безпеки, пов\'язані з ескалацією конфлікту',
        'Safety and security concerns related to the escalation of the conflict'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'safety_concerns_related'
    },
    {
      'name': 'lack_governmental_support',
      '$kuid': 'ef9iyf7hv',
      'label': [
        'Відсутність державної підтримки власників малого та середнього бізнесу',
        'Lack of governmental support to small and medium business owners'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'lack_governmental_support'
    },
    {
      'name': 'lack_financial_resource',
      '$kuid': 'CsIB1y6Eo',
      'label': [
        'Відсутність фінансового ресурсу для облаштування підприємницької діяльності',
        'Lack of financial resource to equip the business'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'lack_financial_resource'
    },
    {
      'name': 'damage_business_premises',
      '$kuid': 'wLJUymWu9',
      'label': [
        'Руйнування або пошкодження приміщення підприємства та/або обладнання',
        'Destruction or damage to the business premises and /or equipnent'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'damage_business_premises'
    },
    {
      'name': 'other',
      '$kuid': 'FJMSILDzy',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'main_barriers_business',
      '$autovalue': 'other'
    },
    {
      'name': 'loss_customers',
      '$kuid': 'vA430mD6w',
      'label': [
        'Втрата клієнтів',
        'Loss of customers'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'loss_customers'
    },
    {
      'name': 'increased_prices_materials',
      '$kuid': 'rQzjT7isg',
      'label': [
        'Зростання цін на матеріали',
        'Increased price of materials'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'increased_prices_materials'
    },
    {
      'name': 'disrupted_supply_chain',
      '$kuid': '3LC6iLedR',
      'label': [
        'Порушення ланцюжка поставок',
        'Disrupted supply chain'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'disrupted_supply_chain'
    },
    {
      'name': 'decreased_purchasing_customer',
      '$kuid': 'GFDGNKfys',
      'label': [
        'Зниження купівельної спроможності клієнтів',
        'Decreased purchasing power of customer base'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'decreased_purchasing_customer'
    },
    {
      'name': 'relocation_escalation_security',
      '$kuid': 'OGqs2oFmO',
      'label': [
        'Переїзд у зв\'язку з погіршення безпеки в регіоні',
        'Relocation due to escalation of security in the area'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'relocation_escalation_security'
    },
    {
      'name': 'damage',
      '$kuid': 'yOsiq9YgF',
      'label': [
        'Пошкодження або знищення внаслідок обстрілів приміщень та/або обладнання',
        'Damage or destruction caused by shelling to the premises and / or equipment'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'damage'
    },
    {
      'name': 'other',
      '$kuid': 'zvlagV7Oq',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'escalation_conflict_affected_business',
      '$autovalue': 'other'
    },
    {
      'name': 'restoration',
      '$kuid': 'Meds9X4CP',
      'label': [
        'Відновлення бізнесу',
        'Business restoration'
      ],
      'list_name': 'grant_purpose_use',
      '$autovalue': 'restoration'
    },
    {
      'name': 'continuation',
      '$kuid': 'VdmIHXUcQ',
      'label': [
        'Продовження бізнесу',
        'Business continuation'
      ],
      'list_name': 'grant_purpose_use',
      '$autovalue': 'continuation'
    },
    {
      'name': 'expansion',
      '$kuid': 'P8Bq4hc6W',
      'label': [
        'Розширення бізнесу',
        'Business expansion'
      ],
      'list_name': 'grant_purpose_use',
      '$autovalue': 'expansion'
    },
    {
      'name': 'government',
      '$kuid': '2xdLbcZBO',
      'label': [
        'Уряд',
        'Government'
      ],
      'list_name': 'provided_support',
      '$autovalue': 'government'
    },
    {
      'name': 'ngo',
      '$kuid': 'zu7CJgN1Q',
      'label': [
        'Неурядова організація',
        'NGO'
      ],
      'list_name': 'provided_support',
      '$autovalue': 'ngo'
    },
    {
      'name': 'other',
      '$kuid': 'z1AtEyA9F',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'provided_support',
      '$autovalue': 'other'
    },
    {
      'name': 'marketing_sales',
      '$kuid': 'UZiIkQ2Tj',
      'label': [
        'Маркетинг і продажі (включаючи інтернет-маркетинг)',
        'Marketing and sales (including Internet marketing)'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'marketing_sales'
    },
    {
      'name': 'customer_relationships_management',
      '$kuid': 'qRx3XeFFG',
      'label': [
        'Управління взаємовідносинами з клієнтами (CRM-системи)',
        'Customer relationships management (CRM systems)'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'customer_relationships_management'
    },
    {
      'name': 'legal_regulatory_compliance',
      '$kuid': 'kQEbmYIgt',
      'label': [
        'Дотримання правових та регуляторних норм',
        'Legal and regulatory compliance'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'legal_regulatory_compliance'
    },
    {
      'name': 'human_resources',
      '$kuid': 'Oh8h2r2tw',
      'label': [
        'Управління персоналом',
        'Human resources'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'human_resources'
    },
    {
      'name': 'financial_including_pricing',
      '$kuid': 'GcohenPSn',
      'label': [
        'Управління фінансами (включаючи ціноутворення)',
        'Financial management (including pricing)'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'financial_including_pricing'
    },
    {
      'name': 'issues_development_professional',
      '$kuid': 'UNf9VMbPD',
      'label': [
        'Актуальні питання щодо розвитку (специфічні професійні питання)',
        'Issues for development (specific professional issues)'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'issues_development_professional'
    },
    {
      'name': 'attracting_additional_financing',
      '$kuid': 'MrePVxpM4',
      'label': [
        'Залучення подальшого фінансування (залучення додаткового фінансування)',
        'Attracting further funding (attract additional financing)'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'attracting_additional_financing'
    },
    {
      'name': 'export',
      '$kuid': 'KUnoj3M6P',
      'label': [
        'Експорт',
        'Export'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'export'
    },
    {
      'name': 'other',
      '$kuid': 'EvA1L0oUR',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'topic_business_consultancy',
      '$autovalue': 'other'
    },
    {
      'name': 'female',
      '$kuid': 'DhSd6NpJB',
      'label': [
        'Жінка',
        'Female'
      ],
      'list_name': 'gender',
      '$autovalue': 'female'
    },
    {
      'name': 'male',
      '$kuid': 'UlAwSGfW8',
      'label': [
        'Чоловік',
        'Male'
      ],
      'list_name': 'gender',
      '$autovalue': 'male'
    },
    {
      'name': 'other_pns',
      '$kuid': 'QGvBqrwOG',
      'label': [
        'Інша / Не бажаю відповідати',
        'Other / Preferred not to say'
      ],
      'list_name': 'gender',
      '$autovalue': 'other_pns'
    },
    {
      'name': 'drc_staff',
      '$kuid': 'DpfueUeqS',
      'label': [
        'Персонал ДРБ',
        'DRC staff'
      ],
      'list_name': 'hear_program',
      '$autovalue': 'drc_staff'
    },
    {
      'name': 'local_authorities',
      '$kuid': 'Ed8lUIY3c',
      'label': [
        'Місцеві органи влади',
        'Local authorities'
      ],
      'list_name': 'hear_program',
      '$autovalue': 'local_authorities'
    },
    {
      'name': 'employment_centre',
      '$kuid': 'N4WC2mkRZ',
      'label': [
        'Центр зайнятості',
        'Employment centre'
      ],
      'list_name': 'hear_program',
      '$autovalue': 'employment_centre'
    },
    {
      'name': 'other',
      '$kuid': 'A3oErUMnQ',
      'label': [
        'Інші',
        'Other'
      ],
      'list_name': 'hear_program',
      '$autovalue': 'other'
    },
    {
      'name': 'agro_processing',
      '$kuid': 'KOLlhL9dE',
      'label': [
        'Переробка сільськогосподарської продукції',
        'Agro-processing'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'agro_processing'
    },
    {
      'name': 'agriculture',
      '$kuid': '1FaFLuMeZ',
      'label': [
        'Сільське господарство (рослинництво та/або тваринництво)',
        'Agriculture (crop and/or livestock)'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'agriculture'
    },
    {
      'name': 'transport_services',
      '$kuid': 'i2hWKb1ko',
      'label': [
        'Транспортні послуги',
        'Transport services'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'transport_services'
    },
    {
      'name': 'construction',
      '$kuid': 'zyjfAk2XU',
      'label': [
        'Будівництво',
        'Construction'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'construction'
    },
    {
      'name': 'food_services',
      '$kuid': '7ODjumRc3',
      'label': [
        'Харчові послуги',
        'Food services'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'food_services'
    },
    {
      'name': 'electrical',
      '$kuid': 'bVyr6ZRUf',
      'label': [
        'Електрика',
        'Electrical'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'electrical'
    },
    {
      'name': 'mechanics',
      '$kuid': 'eTo9dpm5r',
      'label': [
        'Механіка',
        'Mechanics'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'mechanics'
    },
    {
      'name': 'plumber',
      '$kuid': 'QrykKhACR',
      'label': [
        'Сантехнік',
        'Plumber'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'plumber'
    },
    {
      'name': 'petty_trade',
      '$kuid': 'aKsiRWzTH',
      'label': [
        'Дрібна торгівля',
        'Petty trade'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'petty_trade'
    },
    {
      'name': 'retail_wholesale',
      '$kuid': 'JPEZe3swB',
      'label': [
        'Роздрібна та оптова торгівля',
        'Retail and wholesale trade'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'retail_wholesale'
    },
    {
      'name': 'sewing_shoe_repair',
      '$kuid': 'XotuDJZGW',
      'label': [
        'Пошиття / ремонт взуття',
        'Sewing/Shoe repair'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'sewing_shoe_repair'
    },
    {
      'name': 'small_manufacturing',
      '$kuid': 'i9ZT909L3',
      'label': [
        'Мале виробництво',
        'Small manufacturing'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'small_manufacturing'
    },
    {
      'name': 'hairdressing',
      '$kuid': 'LifjzhskA',
      'label': [
        'Перукарня/барбер',
        'Hairdressing/barber'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'hairdressing'
    },
    {
      'name': 'it',
      '$kuid': 'RubfIluch',
      'label': [
        'ІТ',
        'IT'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'it'
    },
    {
      'name': 'other',
      '$kuid': 'syx40IvOG',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'primary_goods_services',
      '$autovalue': 'other'
    },
    {
      'name': 'weapons_ammunition',
      '$kuid': '2068ZAFaN',
      'label': [
        'Виробництво або торгівля зброєю та боєприпасами',
        'Manufacture or trade in weapons and ammunition'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'weapons_ammunition'
    },
    {
      'name': 'alcoholic_beverages',
      '$kuid': 'p3j4ZLp6D',
      'label': [
        'Виробництво або торгівля алкогольними напоями (за винятком супермаркетів або продуктових магазинів, які продають алкоголь серед інших товарів)',
        'Production or trade of alcoholic beverages (excluding supermarkets or grocery store that sell alcohol amongst other products)'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'alcoholic_beverages'
    },
    {
      'name': 'tobacco_products',
      '$kuid': '1cVQ1VqKL',
      'label': [
        'Виробництво або торгівля тютюновими виробами (за винятком супермаркетів або продуктових магазинів, які продають тютюнові вироби серед інших товарів)',
        'Manufacture or trade in tobacco products (excluding supermarkets or grocery store that sell tobacco products amongst other products)'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'tobacco_products'
    },
    {
      'name': 'radioactive_materials',
      '$kuid': 'wQxQaEGqe',
      'label': [
        'Виробництво або торгівля радіоактивними матеріалами',
        'Production or trade in radioactive materials'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'radioactive_materials'
    },
    {
      'name': 'unbound_asbestos_fibres',
      '$kuid': 'an2VeXLVC',
      'label': [
        'Виробництво, торгівля або використання незв\'язаних азбестових волокон.',
        'Production, trade or use of unbound asbestos fibres'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'unbound_asbestos_fibres'
    },
    {
      'name': 'pesticides_herbicides',
      '$kuid': 'Xa0kob3in',
      'label': [
        'Виробництво або торгівля пестицидами/гербіцидами',
        'Production or trade of pesticides/herbicides'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'pesticides_herbicides'
    },
    {
      'name': 'illegal_harmful_activities',
      '$kuid': '6GOBnOIM8',
      'label': [
        'Компанії підтримують будь-яку незаконну та/або шкідливу діяльність і сприяють забрудненню навколишнього середовища.',
        'Companies support any illegal and/or harmful activities and contribute to environmental pollution'
      ],
      'list_name': 'not_working_sectors',
      '$autovalue': 'illegal_harmful_activities'
    },
    {
      'name': 'in_person',
      '$kuid': 'FT79QGP7U',
      'label': [
        'Особисто',
        'In person'
      ],
      'list_name': 'validation_visit_val',
      '$autovalue': 'in_person'
    },
    {
      'name': 'remotely',
      '$kuid': '18HjLjUcd',
      'label': [
        'Дистанційно',
        'Remotely'
      ],
      'list_name': 'validation_visit_val',
      '$autovalue': 'remotely'
    },
    {
      'name': 'relocated',
      '$kuid': 'TxvFLDELF',
      'label': [
        'Підприємство змінило місцезнаходження',
        'Is has relocated'
      ],
      'list_name': 'business_premises',
      '$autovalue': 'relocated'
    },
    {
      'name': 'online',
      '$kuid': 'mdYJy4XDt',
      'label': [
        'Підприємство працює онлайн',
        'It operates online'
      ],
      'list_name': 'business_premises',
      '$autovalue': 'online'
    },
    {
      'name': 'other',
      '$kuid': 'A2ieP7E4w',
      'label': [
        'Інше',
        'Other'
      ],
      'list_name': 'business_premises',
      '$autovalue': 'other'
    },
    {
      'key': 'yes',
      'name': 'dnipropetrovska',
      '$kuid': 'sbCnd0hDY',
      'label': [
        'Дніпропетровська',
        'Dnipropetrovska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'dnipropetrovska'
    },
    {
      'name': 'donetska',
      '$kuid': '2W6bEeixO',
      'label': [
        'Донецька',
        'Donetska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'donetska'
    },
    {
      'key': 'yes',
      'name': 'zaporizka',
      '$kuid': 'UbadFWuck',
      'label': [
        'Запорізька',
        'Zaporizka'
      ],
      'list_name': 'oblast',
      '$autovalue': 'zaporizka'
    },
    {
      'name': 'luhanska',
      '$kuid': 'eypU4RqgZ',
      'label': [
        'Луганська',
        'Luhanska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'luhanska'
    },
    {
      'key': 'yes',
      'name': 'mykolaivska',
      '$kuid': 'LnJih728d',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'odeska',
      '$kuid': 'QQ1kyGrcO',
      'label': [
        'Одеська',
        'Odeska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'odeska'
    },
    {
      'key': 'yes',
      'name': 'kharkivska',
      '$kuid': 'ZyeDFZX87',
      'label': [
        'Харківська',
        'Kharkivska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'kharkivska'
    },
    {
      'key': 'yes',
      'name': 'khersonska',
      '$kuid': 'dkPGtANKm',
      'label': [
        'Херсонська',
        'Khersonska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'khersonska'
    },
    {
      'name': 'lvivska',
      '$kuid': 'fWwb3hByM',
      'label': [
        'Львівська',
        'Lvivska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'lvivska'
    },
    {
      'key': 'yes',
      'name': 'chernihivska',
      '$kuid': '8vkjLF75R',
      'label': [
        'Чернігівська',
        'Chernihivska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'chernihivska'
    },
    {
      'name': 'sumska',
      '$kuid': 'jsj0Ay6vG',
      'label': [
        'Сумська',
        'Sumska'
      ],
      'list_name': 'oblast',
      '$autovalue': 'sumska'
    },
    {
      'name': 'zvenyhorodskyi',
      '$kuid': 'MV3ygrxx3',
      'label': [
        'Звенигородський',
        'Zvenyhorodskyi'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'zvenyhorodskyi'
    },
    {
      'name': 'zolotoniskyi',
      '$kuid': 'IrgQkLOoc',
      'label': [
        'Золотоніський',
        'Zolotoniskyi'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'zolotoniskyi'
    },
    {
      'name': 'umanskyi',
      '$kuid': 'YtifwrBrX',
      'label': [
        'Уманський',
        'Umanskyi'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'umanskyi'
    },
    {
      'name': 'cherkaskyi',
      '$kuid': 'faV6oIEKZ',
      'label': [
        'Черкаський',
        'Cherkaskyi'
      ],
      'oblast': 'cherkaska',
      'list_name': 'raion',
      '$autovalue': 'cherkaskyi'
    },
    {
      'name': 'koriukivskyi',
      '$kuid': 'E72BC7emm',
      'label': [
        'Корюківський',
        'Koriukivskyi'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'koriukivskyi'
    },
    {
      'name': 'nizhynskyi',
      '$kuid': 'ax7xf2hkG',
      'label': [
        'Ніжинський',
        'Nizhynskyi'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'nizhynskyi'
    },
    {
      'name': 'novhorod-siverskyi',
      '$kuid': 'gdLoGut51',
      'label': [
        'Новгород-Сіверський',
        'Novhorod-Siverskyi'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'novhorod-siverskyi'
    },
    {
      'name': 'prylutskyi',
      '$kuid': 'ToO2Fl2JP',
      'label': [
        'Прилуцький',
        'Prylutskyi'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'prylutskyi'
    },
    {
      'name': 'chernihivskyi',
      '$kuid': 'PpRvQcMs5',
      'label': [
        'Чернігівський',
        'Chernihivskyi'
      ],
      'oblast': 'chernihivska',
      'list_name': 'raion',
      '$autovalue': 'chernihivskyi'
    },
    {
      'name': 'vyzhnytskyi',
      '$kuid': 'xq4x31ces',
      'label': [
        'Вижницький',
        'Vyzhnytskyi'
      ],
      'oblast': 'chernivetska',
      'list_name': 'raion',
      '$autovalue': 'vyzhnytskyi'
    },
    {
      'name': 'dnistrovskyi',
      '$kuid': 'U3oP3FRZO',
      'label': [
        'Дністровський',
        'Dnistrovskyi'
      ],
      'oblast': 'chernivetska',
      'list_name': 'raion',
      '$autovalue': 'dnistrovskyi'
    },
    {
      'name': 'cnernivetskyi',
      '$kuid': 'rBYreqmnJ',
      'label': [
        'Чернівецький',
        'Cnernivetskyi'
      ],
      'oblast': 'chernivetska',
      'list_name': 'raion',
      '$autovalue': 'cnernivetskyi'
    },
    {
      'name': 'dniprovskyi',
      '$kuid': 'XFOlK3DBh',
      'label': [
        'Дніпровський',
        'Dniprovskyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'dniprovskyi'
    },
    {
      'name': 'kamianskyi',
      '$kuid': 'sIjyzmNKV',
      'label': [
        'Кам’янський',
        'Kamianskyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'kamianskyi'
    },
    {
      'name': 'kryvorizkyi',
      '$kuid': 'HOblU95nY',
      'label': [
        'Криворізький',
        'Kryvorizkyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'kryvorizkyi'
    },
    {
      'name': 'nikopolskyi',
      '$kuid': '7wTT9dJzx',
      'label': [
        'Нікопольський',
        'Nikopolskyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'nikopolskyi'
    },
    {
      'name': 'novomoskovskyi',
      '$kuid': 'KvF5FyklU',
      'label': [
        'Новомосковський',
        'Novomoskovskyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'novomoskovskyi'
    },
    {
      'name': 'pavlohradskyi',
      '$kuid': 'QA3Tpv44p',
      'label': [
        'Павлоградський',
        'Pavlohradskyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'pavlohradskyi'
    },
    {
      'name': 'synelnykivskyi',
      '$kuid': 'KakYApKOG',
      'label': [
        'Синельниківський',
        'Synelnykivskyi'
      ],
      'oblast': 'dnipropetrovska',
      'list_name': 'raion',
      '$autovalue': 'synelnykivskyi'
    },
    {
      'name': 'bakhmutskyi',
      '$kuid': 'FDq9UyaCh',
      'label': [
        'Бахмутський',
        'Bakhmutskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'bakhmutskyi'
    },
    {
      'name': 'volnovaskyi',
      '$kuid': '6Cef8JzQT',
      'label': [
        'Волноваський',
        'Volnovaskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'volnovaskyi'
    },
    {
      'name': 'horlivskyi',
      '$kuid': 'TDZ1QMDor',
      'label': [
        'Горлівський',
        'Horlivskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'horlivskyi'
    },
    {
      'name': 'donetskyi',
      '$kuid': '0ZooYggEH',
      'label': [
        'Донецький',
        'Donetskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'donetskyi'
    },
    {
      'name': 'kalmiuskyi',
      '$kuid': 'KQ2qB78pK',
      'label': [
        'Кальміуський',
        'Kalmiuskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'kalmiuskyi'
    },
    {
      'name': 'kramatorskyi',
      '$kuid': 'oGhIPRNM8',
      'label': [
        'Краматорський',
        'Kramatorskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'kramatorskyi'
    },
    {
      'name': 'mariupolskyi',
      '$kuid': 'bbKgEiobV',
      'label': [
        'Маріупольський',
        'Mariupolskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'mariupolskyi'
    },
    {
      'name': 'pokrovskyi',
      '$kuid': 'JNCrND6r8',
      'label': [
        'Покровський',
        'Pokrovskyi'
      ],
      'oblast': 'donetska',
      'list_name': 'raion',
      '$autovalue': 'pokrovskyi'
    },
    {
      'name': 'verkhovynskyi',
      '$kuid': 'RnSq8IpXp',
      'label': [
        'Верховинський',
        'Verkhovynskyi'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'verkhovynskyi'
    },
    {
      'name': 'ivano-frankivskyi',
      '$kuid': 'JJmrIFKRT',
      'label': [
        'Івано-Франківський',
        'Ivano-Frankivskyi'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'ivano-frankivskyi'
    },
    {
      'name': 'kaluskyi',
      '$kuid': '58MkR3bBT',
      'label': [
        'Калуський',
        'Kaluskyi'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'kaluskyi'
    },
    {
      'name': 'kolomyiskyi',
      '$kuid': 'JFjasc4rE',
      'label': [
        'Коломийський',
        'Kolomyiskyi'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'kolomyiskyi'
    },
    {
      'name': 'kosivskyi',
      '$kuid': 'ixuXXXI3A',
      'label': [
        'Косівський',
        'Kosivskyi'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'kosivskyi'
    },
    {
      'name': 'nadvirnianskyi',
      '$kuid': 'g3ea5n9nb',
      'label': [
        'Надвірнянський',
        'Nadvirnianskyi'
      ],
      'oblast': 'ivano-frankivska',
      'list_name': 'raion',
      '$autovalue': 'nadvirnianskyi'
    },
    {
      'name': 'bohodukhivskyi',
      '$kuid': 'QXf3NxOct',
      'label': [
        'Богодухівський',
        'Bohodukhivskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'bohodukhivskyi'
    },
    {
      'name': 'iziumskyi',
      '$kuid': 'DtbYE5Myn',
      'label': [
        'Ізюмський',
        'Iziumskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'iziumskyi'
    },
    {
      'name': 'krasnohradskyi',
      '$kuid': 'msypHiOMp',
      'label': [
        'Красноградський',
        'Krasnohradskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'krasnohradskyi'
    },
    {
      'name': 'kupianskyi',
      '$kuid': 'v338gX4eE',
      'label': [
        'Куп\'янський',
        'Kupianskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'kupianskyi'
    },
    {
      'name': 'lozivskyi',
      '$kuid': 'DhoSn0nMq',
      'label': [
        'Лозівський',
        'Lozivskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'lozivskyi'
    },
    {
      'name': 'kharkivskyi',
      '$kuid': 'sQ43xSK0k',
      'label': [
        'Харківський',
        'Kharkivskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'kharkivskyi'
    },
    {
      'name': 'chuhuivskyi',
      '$kuid': 'HF0Xi50U5',
      'label': [
        'Чугуївський',
        'Chuhuivskyi'
      ],
      'oblast': 'kharkivska',
      'list_name': 'raion',
      '$autovalue': 'chuhuivskyi'
    },
    {
      'name': 'beryslavskyi',
      '$kuid': 'VX7B2oNOG',
      'label': [
        'Бериславський',
        'Beryslavskyi'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'beryslavskyi'
    },
    {
      'name': 'henicheskyi',
      '$kuid': 'jdIGXjbP8',
      'label': [
        'Генічеський',
        'Henicheskyi'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'henicheskyi'
    },
    {
      'name': 'kakhovskyi',
      '$kuid': 'd5MoptZtH',
      'label': [
        'Каховський',
        'Kakhovskyi'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'kakhovskyi'
    },
    {
      'name': 'skadovskyi',
      '$kuid': '6Lh51pQAY',
      'label': [
        'Скадовський',
        'Skadovskyi'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'skadovskyi'
    },
    {
      'name': 'khersonskyi',
      '$kuid': 'eOlQE13Ys',
      'label': [
        'Херсонський',
        'Khersonskyi'
      ],
      'oblast': 'khersonska',
      'list_name': 'raion',
      '$autovalue': 'khersonskyi'
    },
    {
      'name': 'kamianets-podilskyi',
      '$kuid': '9AiWWZTOI',
      'label': [
        'Кам\'янець-Подільський',
        'Kamianets-Podilskyi'
      ],
      'oblast': 'khmelnytska',
      'list_name': 'raion',
      '$autovalue': 'kamianets-podilskyi'
    },
    {
      'name': 'khmelnytskyi',
      '$kuid': '7c47oPe4G',
      'label': [
        'Хмельницький',
        'Khmelnytskyi'
      ],
      'oblast': 'khmelnytska',
      'list_name': 'raion',
      '$autovalue': 'khmelnytskyi'
    },
    {
      'name': 'shepetivskyi',
      '$kuid': '5TXNSNp7u',
      'label': [
        'Шепетівський',
        'Shepetivskyi'
      ],
      'oblast': 'khmelnytska',
      'list_name': 'raion',
      '$autovalue': 'shepetivskyi'
    },
    {
      'name': 'holovanivskyi',
      '$kuid': '51Abtq1Ze',
      'label': [
        'Голованівський',
        'Holovanivskyi'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'holovanivskyi'
    },
    {
      'name': 'kropyvnytskyi',
      '$kuid': 'xfJhCbQxK',
      'label': [
        'Кропивницький',
        'Kropyvnytskyi'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'kropyvnytskyi'
    },
    {
      'name': 'novoukrainskyi',
      '$kuid': 'k46h77t5u',
      'label': [
        'Новоукраїнський',
        'Novoukrainskyi'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'novoukrainskyi'
    },
    {
      'name': 'oleksandriiskyi',
      '$kuid': 'LUhMIrAmU',
      'label': [
        'Олександрійський',
        'Oleksandriiskyi'
      ],
      'oblast': 'kirovohradska',
      'list_name': 'raion',
      '$autovalue': 'oleksandriiskyi'
    },
    {
      'name': 'chornobylska zona vidchuzhennia',
      '$kuid': '0SnP0BxEP',
      'label': [
        'Чорнобильська зона відчуження',
        'Chornobylska Zona Vidchuzhennia'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'chornobylska zona vidchuzhennia'
    },
    {
      'name': 'bilotserkivskyi',
      '$kuid': 'WNdKVHafJ',
      'label': [
        'Білоцерківський',
        'Bilotserkivskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'bilotserkivskyi'
    },
    {
      'name': 'boryspilskyi',
      '$kuid': 'Vbv8Gza3a',
      'label': [
        'Бориспільський',
        'Boryspilskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'boryspilskyi'
    },
    {
      'name': 'brovarskyi',
      '$kuid': 'RsGuShzL5',
      'label': [
        'Броварський',
        'Brovarskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'brovarskyi'
    },
    {
      'name': 'buchanskyi',
      '$kuid': 'UBIv971r0',
      'label': [
        'Бучанський',
        'Buchanskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'buchanskyi'
    },
    {
      'name': 'vyshhorodskyi',
      '$kuid': 'AE2RGkv7f',
      'label': [
        'Вишгородський',
        'Vyshhorodskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'vyshhorodskyi'
    },
    {
      'name': 'obukhivskyi',
      '$kuid': 'Jed84KBgA',
      'label': [
        'Обухівський',
        'Obukhivskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'obukhivskyi'
    },
    {
      'name': 'fastivskyi',
      '$kuid': 'M8hfyvxSo',
      'label': [
        'Фастівський',
        'Fastivskyi'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'fastivskyi'
    },
    {
      'name': 'kyivska',
      '$kuid': '8khCT0bHH',
      'label': [
        'Київська',
        'Kyivska'
      ],
      'oblast': 'kyivska',
      'list_name': 'raion',
      '$autovalue': 'kyivska'
    },
    {
      'name': 'alchevskyi',
      '$kuid': 'LVNJ0aE7p',
      'label': [
        'Алчевський',
        'Alchevskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'alchevskyi'
    },
    {
      'name': 'dovzhanskyi',
      '$kuid': 'AH0DcyODT',
      'label': [
        'Довжанський',
        'Dovzhanskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'dovzhanskyi'
    },
    {
      'name': 'luhanskyi',
      '$kuid': 'uF9HsPUu1',
      'label': [
        'Луганський',
        'Luhanskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'luhanskyi'
    },
    {
      'name': 'rovenkivskyi',
      '$kuid': 'Kv07MHo6d',
      'label': [
        'Ровеньківський',
        'Rovenkivskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'rovenkivskyi'
    },
    {
      'name': 'svativskyi',
      '$kuid': 'A3bHea7jd',
      'label': [
        'Сватівський',
        'Svativskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'svativskyi'
    },
    {
      'name': 'sievierodonetskyi',
      '$kuid': '0adjPBYj7',
      'label': [
        'Сєвєродонецький',
        'Sievierodonetskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'sievierodonetskyi'
    },
    {
      'name': 'starobilskyi',
      '$kuid': 'oxh2xXP2Q',
      'label': [
        'Старобільський',
        'Starobilskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'starobilskyi'
    },
    {
      'name': 'shchastynskyi',
      '$kuid': 'gtTtk3Ch2',
      'label': [
        'Щастинський',
        'Shchastynskyi'
      ],
      'oblast': 'luhanska',
      'list_name': 'raion',
      '$autovalue': 'shchastynskyi'
    },
    {
      'name': 'drohobytskyi',
      '$kuid': '7QNfsyc7Y',
      'label': [
        'Дрогобицький',
        'Drohobytskyi'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'drohobytskyi'
    },
    {
      'name': 'stryiskyi',
      '$kuid': 'ZoQb4AC7T',
      'label': [
        'Стрийський',
        'Stryiskyi'
      ],
      'oblast': 'lvivska',
      'list_name': 'raion',
      '$autovalue': 'stryiskyi'
    },
    {
      'name': 'bashtanskyi',
      '$kuid': 'r0SGCB04X',
      'label': [
        'Баштанський',
        'Bashtanskyi'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'bashtanskyi'
    },
    {
      'name': 'voznesenskyi',
      '$kuid': 'Pj96kAQKw',
      'label': [
        'Вознесенський',
        'Voznesenskyi'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'voznesenskyi'
    },
    {
      'name': 'mykolaivskyi',
      '$kuid': 'CRoWY27Vm',
      'label': [
        'Миколаївський',
        'Mykolaivskyi'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'mykolaivskyi'
    },
    {
      'name': 'pervomaiskyi',
      '$kuid': 'JzVzixsWV',
      'label': [
        'Первомайський',
        'Pervomaiskyi'
      ],
      'oblast': 'mykolaivska',
      'list_name': 'raion',
      '$autovalue': 'pervomaiskyi'
    },
    {
      'name': 'berezivskyi',
      '$kuid': 'HaqPMmVS4',
      'label': [
        'Березівський',
        'Berezivskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'berezivskyi'
    },
    {
      'name': 'bilhorod-dnistrovskyi',
      '$kuid': 'Drm2EYTTf',
      'label': [
        'Білгород-Дністровський',
        'Bilhorod-Dnistrovskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'bilhorod-dnistrovskyi'
    },
    {
      'name': 'bolhradskyi',
      '$kuid': 'g618Y6O4Z',
      'label': [
        'Болградський',
        'Bolhradskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'bolhradskyi'
    },
    {
      'name': 'izmailskyi',
      '$kuid': 'vqkQtGG66',
      'label': [
        'Ізмаїльський',
        'Izmailskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'izmailskyi'
    },
    {
      'name': 'odeskyi',
      '$kuid': 'w0YZ1lSk0',
      'label': [
        'Одеський',
        'Odeskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'odeskyi'
    },
    {
      'name': 'podilskyi',
      '$kuid': 'O5YlVVBqt',
      'label': [
        'Подільський',
        'Podilskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'podilskyi'
    },
    {
      'name': 'rozdilnianskyi',
      '$kuid': 'nly6LJjGK',
      'label': [
        'Роздільнянський',
        'Rozdilnianskyi'
      ],
      'oblast': 'odeska',
      'list_name': 'raion',
      '$autovalue': 'rozdilnianskyi'
    },
    {
      'name': 'kremenchutskyi',
      '$kuid': 'veQaYL71m',
      'label': [
        'Кременчуцький',
        'Kremenchutskyi'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'kremenchutskyi'
    },
    {
      'name': 'lubenskyi',
      '$kuid': 'RI7HbIpxq',
      'label': [
        'Лубенський',
        'Lubenskyi'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'lubenskyi'
    },
    {
      'name': 'myrhorodskyi',
      '$kuid': 'aZRghYFgf',
      'label': [
        'Миргородський',
        'Myrhorodskyi'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'myrhorodskyi'
    },
    {
      'name': 'poltavskyi',
      '$kuid': 'a4BhEQdDz',
      'label': [
        'Полтавський',
        'Poltavskyi'
      ],
      'oblast': 'poltavska',
      'list_name': 'raion',
      '$autovalue': 'poltavskyi'
    },
    {
      'name': 'varaskyi',
      '$kuid': 'KFw6VnYam',
      'label': [
        'Вараський',
        'Varaskyi'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'varaskyi'
    },
    {
      'name': 'dubenskyi',
      '$kuid': 'wpRuIOH9c',
      'label': [
        'Дубенський',
        'Dubenskyi'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'dubenskyi'
    },
    {
      'name': 'rivnenskyi',
      '$kuid': 'tCngpemsh',
      'label': [
        'Рівненський',
        'Rivnenskyi'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'rivnenskyi'
    },
    {
      'name': 'sarnenskyi',
      '$kuid': 'SOuaXOh09',
      'label': [
        'Сарненський',
        'Sarnenskyi'
      ],
      'oblast': 'rivnenska',
      'list_name': 'raion',
      '$autovalue': 'sarnenskyi'
    },
    {
      'name': 'sevastopilska',
      '$kuid': 'JZjAWS8fU',
      'label': [
        'Севастопільська',
        'Sevastopilska'
      ],
      'oblast': 'sevastopilska',
      'list_name': 'raion',
      '$autovalue': 'sevastopilska'
    },
    {
      'name': 'konotopskyi',
      '$kuid': '6G5KVGNT5',
      'label': [
        'Конотопський',
        'Konotopskyi'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'konotopskyi'
    },
    {
      'name': 'okhtyrskyi',
      '$kuid': '2gxTsuWCe',
      'label': [
        'Охтирський',
        'Okhtyrskyi'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'okhtyrskyi'
    },
    {
      'name': 'romenskyi',
      '$kuid': 'DlN3IIW1G',
      'label': [
        'Роменський',
        'Romenskyi'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'romenskyi'
    },
    {
      'name': 'sumskyi',
      '$kuid': 'ifcSsxjmS',
      'label': [
        'Сумський',
        'Sumskyi'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'sumskyi'
    },
    {
      'name': 'shostkynskyi',
      '$kuid': 'P93kFew06',
      'label': [
        'Шосткинський',
        'Shostkynskyi'
      ],
      'oblast': 'sumska',
      'list_name': 'raion',
      '$autovalue': 'shostkynskyi'
    },
    {
      'name': 'kremenetskyi',
      '$kuid': '4zOPUOvVy',
      'label': [
        'Кременецький',
        'Kremenetskyi'
      ],
      'oblast': 'ternopilska',
      'list_name': 'raion',
      '$autovalue': 'kremenetskyi'
    },
    {
      'name': 'ternopilskyi',
      '$kuid': 'VDiKgIFQD',
      'label': [
        'Тернопільський',
        'Ternopilskyi'
      ],
      'oblast': 'ternopilska',
      'list_name': 'raion',
      '$autovalue': 'ternopilskyi'
    },
    {
      'name': 'chortkivskyi',
      '$kuid': 'mQj8OElHk',
      'label': [
        'Чортківський',
        'Chortkivskyi'
      ],
      'oblast': 'ternopilska',
      'list_name': 'raion',
      '$autovalue': 'chortkivskyi'
    },
    {
      'name': 'vinnytskyi',
      '$kuid': 'vYXHpT8Lg',
      'label': [
        'Вінницький',
        'Vinnytskyi'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'vinnytskyi'
    },
    {
      'name': 'haisynskyi',
      '$kuid': 'UYLMZ5VeS',
      'label': [
        'Гайсинський',
        'Haisynskyi'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'haisynskyi'
    },
    {
      'name': 'zhmerynskyi',
      '$kuid': 'CMJWoyrbx',
      'label': [
        'Жмеринський',
        'Zhmerynskyi'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'zhmerynskyi'
    },
    {
      'name': 'mohyliv-podilskyi',
      '$kuid': 'xo5VSLl4m',
      'label': [
        'Могилів-Подільський',
        'Mohyliv-Podilskyi'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'mohyliv-podilskyi'
    },
    {
      'name': 'tulchynskyi',
      '$kuid': 'mY3yTnm9Q',
      'label': [
        'Тульчинський',
        'Tulchynskyi'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'tulchynskyi'
    },
    {
      'name': 'khmilnytskyi',
      '$kuid': '1iZDhyRkS',
      'label': [
        'Хмільницький',
        'Khmilnytskyi'
      ],
      'oblast': 'vinnytska',
      'list_name': 'raion',
      '$autovalue': 'khmilnytskyi'
    },
    {
      'name': 'volodymyr-volynskyi',
      '$kuid': 'fs530RJuk',
      'label': [
        'Володимир-Волинський',
        'Volodymyr-Volynskyi'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'volodymyr-volynskyi'
    },
    {
      'name': 'kamin-kashyrskyi',
      '$kuid': 'PmwG90JA1',
      'label': [
        'Камінь-Каширський',
        'Kamin-Kashyrskyi'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'kamin-kashyrskyi'
    },
    {
      'name': 'kovelskyi',
      '$kuid': 'SwYuYK8c8',
      'label': [
        'Ковельський',
        'Kovelskyi'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'kovelskyi'
    },
    {
      'name': 'lutskyi',
      '$kuid': 'JWVsTUpRm',
      'label': [
        'Луцький',
        'Lutskyi'
      ],
      'oblast': 'volynska',
      'list_name': 'raion',
      '$autovalue': 'lutskyi'
    },
    {
      'name': 'berehivskyi',
      '$kuid': 'Vl71ucI0g',
      'label': [
        'Берегівський',
        'Berehivskyi'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'berehivskyi'
    },
    {
      'name': 'mukachivskyi',
      '$kuid': '2uHUU8M0J',
      'label': [
        'Мукачівський',
        'Mukachivskyi'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'mukachivskyi'
    },
    {
      'name': 'rakhivskyi',
      '$kuid': '4QpozV3e0',
      'label': [
        'Рахівський',
        'Rakhivskyi'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'rakhivskyi'
    },
    {
      'name': 'tiachivskyi',
      '$kuid': 'BLKzwV583',
      'label': [
        'Тячівський',
        'Tiachivskyi'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'tiachivskyi'
    },
    {
      'name': 'uzhhorodskyi',
      '$kuid': 'nizkfGKK9',
      'label': [
        'Ужгородський',
        'Uzhhorodskyi'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'uzhhorodskyi'
    },
    {
      'name': 'khustskyi',
      '$kuid': 'mO6cxR4H4',
      'label': [
        'Хустський',
        'Khustskyi'
      ],
      'oblast': 'zakarpatska',
      'list_name': 'raion',
      '$autovalue': 'khustskyi'
    },
    {
      'name': 'berdianskyi',
      '$kuid': 'YyrF4r0De',
      'label': [
        'Бердянський',
        'Berdianskyi'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'berdianskyi'
    },
    {
      'name': 'vasylivskyi',
      '$kuid': 'ewxQImym8',
      'label': [
        'Василівський',
        'Vasylivskyi'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'vasylivskyi'
    },
    {
      'name': 'zaporizkyi',
      '$kuid': 'wWXD39iCB',
      'label': [
        'Запорізький',
        'Zaporizkyi'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'zaporizkyi'
    },
    {
      'name': 'melitopolskyi',
      '$kuid': 'AHbIyzmi9',
      'label': [
        'Мелітопольський',
        'Melitopolskyi'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'melitopolskyi'
    },
    {
      'name': 'polohivskyi',
      '$kuid': '6BPJYggzN',
      'label': [
        'Пологівський',
        'Polohivskyi'
      ],
      'oblast': 'zaporizka',
      'list_name': 'raion',
      '$autovalue': 'polohivskyi'
    },
    {
      'name': 'berdychivskyi',
      '$kuid': 'Drmlsj4RV',
      'label': [
        'Бердичівський',
        'Berdychivskyi'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'berdychivskyi'
    },
    {
      'name': 'zhytomyrskyi',
      '$kuid': 'Pw75MTgJ9',
      'label': [
        'Житомирський',
        'Zhytomyrskyi'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'zhytomyrskyi'
    },
    {
      'name': 'korostenskyi',
      '$kuid': 'UUHh28xrL',
      'label': [
        'Коростенський',
        'Korostenskyi'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'korostenskyi'
    },
    {
      'name': 'novohrad-volynskyi',
      '$kuid': 'fJ1BQjoHZ',
      'label': [
        'Новоград-Волинський',
        'Novohrad-Volynskyi'
      ],
      'oblast': 'zhytomyrska',
      'list_name': 'raion',
      '$autovalue': 'novohrad-volynskyi'
    },
    {
      'name': 'abrykosivska',
      '$kuid': 'wHEVvth9y',
      'label': [
        'Абрикосівська',
        'Abrykosivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'abrykosivska'
    },
    {
      'name': 'abrykosivska_2',
      '$kuid': 'bmkY1kvDc',
      'label': [
        'Абрикосівська',
        'Abrykosivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'abrykosivska_2'
    },
    {
      'name': 'adzhamska',
      '$kuid': '2oXNUD8qQ',
      'label': [
        'Аджамська',
        'Adzhamska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'adzhamska'
    },
    {
      'name': 'ahronomichna',
      '$kuid': 'C9sYXm4ba',
      'label': [
        'Агрономічна',
        'Ahronomichna'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ahronomichna'
    },
    {
      'name': 'alchevska',
      '$kuid': 'BfRdxDbaz',
      'label': [
        'Алчевська',
        'Alchevska'
      ],
      'raion': 'alchevskyi',
      'list_name': 'hromada',
      '$autovalue': 'alchevska'
    },
    {
      'name': 'alupkynska',
      '$kuid': 'AukCzB8Cd',
      'label': [
        'Алупкинська',
        'Alupkynska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'alupkynska'
    },
    {
      'name': 'alushtynska',
      '$kuid': 'DDdNyJIGV',
      'label': [
        'Алуштинська',
        'Alushtynska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'alushtynska'
    },
    {
      'name': 'amurska',
      '$kuid': '7Qizlifkf',
      'label': [
        'Амурська',
        'Amurska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'amurska'
    },
    {
      'name': 'amvrosiivska',
      '$kuid': 'bAdydHCjt',
      'label': [
        'Амвросіївська',
        'Amvrosiivska'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'amvrosiivska'
    },
    {
      'name': 'ananivska',
      '$kuid': 'QcMPF9ZTj',
      'label': [
        'Ананьївська',
        'Ananivska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ananivska'
    },
    {
      'name': 'andriiashivska',
      '$kuid': 'gNdQoYBbD',
      'label': [
        'Андріяшівська',
        'Andriiashivska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriiashivska'
    },
    {
      'name': 'andriievo-ivanivska',
      '$kuid': '48oIJjCFD',
      'label': [
        'Андрієво-Іванівська',
        'Andriievo-Ivanivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriievo-ivanivska'
    },
    {
      'name': 'andriivska',
      '$kuid': 't8SZGTPx9',
      'label': [
        'Андріївська',
        'Andriivska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriivska'
    },
    {
      'name': 'andriivska_2',
      '$kuid': 'FipHKIjZI',
      'label': [
        'Андріївська',
        'Andriivska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'andriivska_2'
    },
    {
      'name': 'andrivska',
      '$kuid': 'Uef3ttV2p',
      'label': [
        'Андрівська',
        'Andrivska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'andrivska'
    },
    {
      'name': 'andrushivska',
      '$kuid': 'wSl7bPGwb',
      'label': [
        'Андрушівська',
        'Andrushivska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'andrushivska'
    },
    {
      'name': 'andrushkivska',
      '$kuid': 'xNTgHptQX',
      'label': [
        'Андрушківська',
        'Andrushkivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'andrushkivska'
    },
    {
      'name': 'antoninska',
      '$kuid': 'fMu4E5hh4',
      'label': [
        'Антонінська',
        'Antoninska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'antoninska'
    },
    {
      'name': 'antonivska',
      '$kuid': 'pIkqcQsGH',
      'label': [
        'Антонівська',
        'Antonivska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'antonivska'
    },
    {
      'name': 'antratsytivska',
      '$kuid': 'ARXXVghGR',
      'label': [
        'Антрацитівська',
        'Antratsytivska'
      ],
      'raion': 'rovenkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'antratsytivska'
    },
    {
      'name': 'apostolivska',
      '$kuid': 'HBw2QGdhy',
      'label': [
        'Апостолівська',
        'Apostolivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'apostolivska'
    },
    {
      'name': 'arbuzynska',
      '$kuid': 'bdCccYON9',
      'label': [
        'Арбузинська',
        'Arbuzynska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'arbuzynska'
    },
    {
      'name': 'armianska',
      '$kuid': 'iR8tGL8ee',
      'label': [
        'Армянська',
        'Armianska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'armianska'
    },
    {
      'name': 'aromatnenska',
      '$kuid': 'iLKH7y9Ck',
      'label': [
        'Ароматненська',
        'Aromatnenska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'aromatnenska'
    },
    {
      'name': 'aromatnivska',
      '$kuid': 'a1MGPPS0I',
      'label': [
        'Ароматнівська',
        'Aromatnivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'aromatnivska'
    },
    {
      'name': 'artsyzka',
      '$kuid': 'XSrgAivXb',
      'label': [
        'Арцизька',
        'Artsyzka'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'artsyzka'
    },
    {
      'name': 'askaniia-nova',
      '$kuid': 'IJB6yA6LX',
      'label': [
        'Асканія-Нова',
        'Askaniia-Nova'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'askaniia-nova'
    },
    {
      'name': 'avanhardivska',
      '$kuid': 'RTIP7H3qA',
      'label': [
        'Авангардівська',
        'Avanhardivska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'avanhardivska'
    },
    {
      'name': 'avdiivska',
      '$kuid': 'xnIAvgbWa',
      'label': [
        'Авдіївська',
        'Avdiivska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'avdiivska'
    },
    {
      'name': 'azovska',
      '$kuid': '0JRrtz3ZO',
      'label': [
        'Азовська',
        'Azovska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'azovska'
    },
    {
      'name': 'babanska',
      '$kuid': 'B41vuKPmn',
      'label': [
        'Бабанська',
        'Babanska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'babanska'
    },
    {
      'name': 'babchynetska',
      '$kuid': 'uWwc1zj1k',
      'label': [
        'Бабчинецька',
        'Babchynetska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'babchynetska'
    },
    {
      'name': 'babynska',
      '$kuid': 'R1cIN4iqB',
      'label': [
        'Бабинська',
        'Babynska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'babynska'
    },
    {
      'name': 'bahativska',
      '$kuid': 'pceAYoCI2',
      'label': [
        'Багатівська',
        'Bahativska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'bahativska'
    },
    {
      'name': 'baherivska',
      '$kuid': 'nHLi6Eyo4',
      'label': [
        'Багерівська',
        'Baherivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'baherivska'
    },
    {
      'name': 'baikovetska',
      '$kuid': 'Sc37yf81Z',
      'label': [
        'Байковецька',
        'Baikovetska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'baikovetska'
    },
    {
      'name': 'bakhchysaraiska',
      '$kuid': '6RTm3bndO',
      'label': [
        'Бахчисарайська',
        'Bakhchysaraiska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'bakhchysaraiska'
    },
    {
      'name': 'bakhmatska',
      '$kuid': 'tZeK4sNqe',
      'label': [
        'Бахмацька',
        'Bakhmatska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bakhmatska'
    },
    {
      'name': 'bakhmutska',
      '$kuid': 'P1qbtXJIF',
      'label': [
        'Бахмутська',
        'Bakhmutska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'bakhmutska'
    },
    {
      'name': 'balakleivska',
      '$kuid': 'WhZ6jldCF',
      'label': [
        'Балаклеївська',
        'Balakleivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'balakleivska'
    },
    {
      'name': 'balakliiska',
      '$kuid': 'P7BJ7GCZn',
      'label': [
        'Балаклійська',
        'Balakliiska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'balakliiska'
    },
    {
      'name': 'baltska',
      '$kuid': 'XsIDvxUw3',
      'label': [
        'Балтська',
        'Baltska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'baltska'
    },
    {
      'name': 'banylivska',
      '$kuid': 'OS79wvSW4',
      'label': [
        'Банилівська',
        'Banylivska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'banylivska'
    },
    {
      'name': 'baranivska',
      '$kuid': 'Vu9eZX3IE',
      'label': [
        'Баранівська',
        'Baranivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'baranivska'
    },
    {
      'name': 'baranynska',
      '$kuid': 'yawn9W3aj',
      'label': [
        'Баранинська',
        'Baranynska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'baranynska'
    },
    {
      'name': 'barashivska',
      '$kuid': 'IjtaRUYuS',
      'label': [
        'Барашівська',
        'Barashivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'barashivska'
    },
    {
      'name': 'barska',
      '$kuid': 'iaHwU3311',
      'label': [
        'Барська',
        'Barska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'barska'
    },
    {
      'name': 'barvinkivska',
      '$kuid': 'FTCRZKTmS',
      'label': [
        'Барвінківська',
        'Barvinkivska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'barvinkivska'
    },
    {
      'name': 'baryshivska',
      '$kuid': 'SMkg5eGvn',
      'label': [
        'Баришівська',
        'Baryshivska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'baryshivska'
    },
    {
      'name': 'bashtanska',
      '$kuid': '6qOPkZvS1',
      'label': [
        'Баштанська',
        'Bashtanska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bashtanska'
    },
    {
      'name': 'bashtechkivska',
      '$kuid': 'v0bj828dI',
      'label': [
        'Баштечківська',
        'Bashtechkivska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bashtechkivska'
    },
    {
      'name': 'batalnenska',
      '$kuid': 's57kp8xsc',
      'label': [
        'Батальненська',
        'Batalnenska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'batalnenska'
    },
    {
      'name': 'bativska',
      '$kuid': 'vQReHTAnE',
      'label': [
        'Батівська',
        'Bativska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bativska'
    },
    {
      'name': 'baturynska',
      '$kuid': 'yGhP2wtnG',
      'label': [
        'Батуринська',
        'Baturynska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'baturynska'
    },
    {
      'name': 'bedevlianska',
      '$kuid': 'R51KeLdBL',
      'label': [
        'Бедевлянська',
        'Bedevlianska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bedevlianska'
    },
    {
      'name': 'bekhterska',
      '$kuid': '7tHYfQXB9',
      'label': [
        'Бехтерська',
        'Bekhterska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'bekhterska'
    },
    {
      'name': 'belzka',
      '$kuid': 'FDP9YXkya',
      'label': [
        'Белзька',
        'Belzka'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'belzka'
    },
    {
      'name': 'berdianska',
      '$kuid': 'Yvfth0DHX',
      'label': [
        'Бердянська',
        'Berdianska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'berdianska'
    },
    {
      'name': 'berdychivska',
      '$kuid': 'XFOxNXWQ5',
      'label': [
        'Бердичівська',
        'Berdychivska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berdychivska'
    },
    {
      'name': 'berehivska',
      '$kuid': 'mbkaSIICE',
      'label': [
        'Берегівська',
        'Berehivska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berehivska'
    },
    {
      'name': 'berehometska',
      '$kuid': 'fcdkOpFcT',
      'label': [
        'Берегометська',
        'Berehometska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'berehometska'
    },
    {
      'name': 'berehova',
      '$kuid': 'AIu3wqUJ6',
      'label': [
        'Берегова',
        'Berehova'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'berehova'
    },
    {
      'name': 'berestechkivska',
      '$kuid': 'kl25aE9ae',
      'label': [
        'Берестечківська',
        'Berestechkivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'berestechkivska'
    },
    {
      'name': 'berestivska',
      '$kuid': 'CC6U61m7n',
      'label': [
        'Берестівська',
        'Berestivska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'berestivska'
    },
    {
      'name': 'berezanska',
      '$kuid': 'jXSEqwEyb',
      'label': [
        'Березанська',
        'Berezanska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezanska'
    },
    {
      'name': 'berezanska_2',
      '$kuid': 'nqFCGJC0P',
      'label': [
        'Березанська',
        'Berezanska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezanska_2'
    },
    {
      'name': 'berezdivska',
      '$kuid': 'ojLVa1Mb4',
      'label': [
        'Берездівська',
        'Berezdivska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezdivska'
    },
    {
      'name': 'berezhanska',
      '$kuid': 'uj224WcX4',
      'label': [
        'Бережанська',
        'Berezhanska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezhanska'
    },
    {
      'name': 'berezivska',
      '$kuid': 'dD1VbBqcu',
      'label': [
        'Березівська',
        'Berezivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska'
    },
    {
      'name': 'berezivska_2',
      '$kuid': 'YJ5JhMZMX',
      'label': [
        'Березівська',
        'Berezivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_2'
    },
    {
      'name': 'berezivska_3',
      '$kuid': '9yijjGVqj',
      'label': [
        'Березівська',
        'Berezivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_3'
    },
    {
      'name': 'berezivska_4',
      '$kuid': '3F8PZSMsW',
      'label': [
        'Березівська',
        'Berezivska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_4'
    },
    {
      'name': 'berezivska_5',
      '$kuid': 'kpk3Q84TI',
      'label': [
        'Березівська',
        'Berezivska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezivska_5'
    },
    {
      'name': 'bereznehuvatska',
      '$kuid': 'yoDCJap4K',
      'label': [
        'Березнегуватська',
        'Bereznehuvatska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bereznehuvatska'
    },
    {
      'name': 'berezniakivska',
      '$kuid': 'UHkZOe5FD',
      'label': [
        'Березняківська',
        'Berezniakivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'berezniakivska'
    },
    {
      'name': 'bereznianska',
      '$kuid': 'xjWJbWxgd',
      'label': [
        'Березнянська',
        'Bereznianska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bereznianska'
    },
    {
      'name': 'bereznivska',
      '$kuid': 'isrkcDdqM',
      'label': [
        'Березнівська',
        'Bereznivska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bereznivska'
    },
    {
      'name': 'bershadska',
      '$kuid': '3eOZeQj44',
      'label': [
        'Бершадська',
        'Bershadska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bershadska'
    },
    {
      'name': 'beryslavska',
      '$kuid': 'qSX4fom1u',
      'label': [
        'Бериславська',
        'Beryslavska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'beryslavska'
    },
    {
      'name': 'bezdrytska',
      '$kuid': 'wWAKHPpmw',
      'label': [
        'Бездрицька',
        'Bezdrytska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'bezdrytska'
    },
    {
      'name': 'bezliudivska',
      '$kuid': 'EesqyEGPc',
      'label': [
        'Безлюдівська',
        'Bezliudivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bezliudivska'
    },
    {
      'name': 'bibrska',
      '$kuid': 'KOV6FppKs',
      'label': [
        'Бібрська',
        'Bibrska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bibrska'
    },
    {
      'name': 'bielinska',
      '$kuid': '91vx8W2ty',
      'label': [
        'Бєлінська',
        'Bielinska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bielinska'
    },
    {
      'name': 'bilche-zolotetska',
      '$kuid': 'YihFw0Rl9',
      'label': [
        'Більче-Золотецька',
        'Bilche-Zolotetska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilche-zolotetska'
    },
    {
      'name': 'bilenkivska',
      '$kuid': 'EDzMxVOSS',
      'label': [
        'Біленьківська',
        'Bilenkivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'bilenkivska'
    },
    {
      'name': 'biletska',
      '$kuid': 'tUSaaIQWc',
      'label': [
        'Білецька',
        'Biletska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'biletska'
    },
    {
      'name': 'bilhorod-dnistrovska',
      '$kuid': 'zYENoPZ11',
      'label': [
        'Білгород-Дністровська',
        'Bilhorod-Dnistrovska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilhorod-dnistrovska'
    },
    {
      'name': 'biliaivska',
      '$kuid': 'cPY0WCVso',
      'label': [
        'Біляївська',
        'Biliaivska'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'biliaivska'
    },
    {
      'name': 'biliaivska_2',
      '$kuid': 'T4cMgsjlA',
      'label': [
        'Біляївська',
        'Biliaivska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'biliaivska_2'
    },
    {
      'name': 'bilkivska',
      '$kuid': 'sp35YchH2',
      'label': [
        'Білківська',
        'Bilkivska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilkivska'
    },
    {
      'name': 'bilmatska',
      '$kuid': 'gX1uCCIY7',
      'label': [
        'Більмацька',
        'Bilmatska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilmatska'
    },
    {
      'name': 'biloberizka',
      '$kuid': '1W5FFDfKy',
      'label': [
        'Білоберізька',
        'Biloberizka'
      ],
      'raion': 'verkhovynskyi',
      'list_name': 'hromada',
      '$autovalue': 'biloberizka'
    },
    {
      'name': 'bilobozhnytska',
      '$kuid': 'sbmIG7zbE',
      'label': [
        'Білобожницька',
        'Bilobozhnytska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilobozhnytska'
    },
    {
      'name': 'bilohirska',
      '$kuid': 'K26ftp1zd',
      'label': [
        'Білогірська',
        'Bilohirska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilohirska'
    },
    {
      'name': 'bilohirska_2',
      '$kuid': 'jOeQhFQQz',
      'label': [
        'Білогірська',
        'Bilohirska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilohirska_2'
    },
    {
      'name': 'bilohorodska',
      '$kuid': 'WHqmpJxlz',
      'label': [
        'Білогородська',
        'Bilohorodska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilohorodska'
    },
    {
      'name': 'bilokorovytska',
      '$kuid': 'DywWe20XG',
      'label': [
        'Білокоровицька',
        'Bilokorovytska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilokorovytska'
    },
    {
      'name': 'bilokrynytska',
      '$kuid': 'pnVnyMFmA',
      'label': [
        'Білокриницька',
        'Bilokrynytska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilokrynytska'
    },
    {
      'name': 'bilokurakynska',
      '$kuid': 'XnxqA7INM',
      'label': [
        'Білокуракинська',
        'Bilokurakynska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilokurakynska'
    },
    {
      'name': 'bilolutska',
      '$kuid': 'cPUEZYJVC',
      'label': [
        'Білолуцька',
        'Bilolutska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilolutska'
    },
    {
      'name': 'bilopilska',
      '$kuid': 'BzcqEgRxb',
      'label': [
        'Білопільська',
        'Bilopilska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilopilska'
    },
    {
      'name': 'bilotserkivska',
      '$kuid': 'CfcaezgJs',
      'label': [
        'Білоцерківська',
        'Bilotserkivska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilotserkivska'
    },
    {
      'name': 'bilotserkivska_2',
      '$kuid': 'UfuTVCzZq',
      'label': [
        'Білоцерківська',
        'Bilotserkivska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilotserkivska_2'
    },
    {
      'name': 'bilovodska',
      '$kuid': '9NMPRaNWA',
      'label': [
        'Біловодська',
        'Bilovodska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilovodska'
    },
    {
      'name': 'bilozerska',
      '$kuid': 'heFONRdf3',
      'label': [
        'Білозерська',
        'Bilozerska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilozerska'
    },
    {
      'name': 'bilozerska_2',
      '$kuid': '1jj7Lqlv9',
      'label': [
        'Білозерська',
        'Bilozerska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilozerska_2'
    },
    {
      'name': 'bilozirska',
      '$kuid': '9grgABy5O',
      'label': [
        'Білозірська',
        'Bilozirska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilozirska'
    },
    {
      'name': 'bilshivtsivska',
      '$kuid': 'seoYs7JSC',
      'label': [
        'Більшівцівська',
        'Bilshivtsivska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilshivtsivska'
    },
    {
      'name': 'bilytska',
      '$kuid': 'xhOeyv20k',
      'label': [
        'Білицька',
        'Bilytska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'bilytska'
    },
    {
      'name': 'biskovytska',
      '$kuid': 'jm4Wy40pQ',
      'label': [
        'Бісковицька',
        'Biskovytska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'biskovytska'
    },
    {
      'name': 'blahodatnenska',
      '$kuid': 'zN0AxkTXS',
      'label': [
        'Благодатненська',
        'Blahodatnenska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'blahodatnenska'
    },
    {
      'name': 'blahovishchenska',
      '$kuid': 'jCiXExCLl',
      'label': [
        'Благовіщенська',
        'Blahovishchenska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'blahovishchenska'
    },
    {
      'name': 'blahovishchenska_2',
      '$kuid': 'nu0wF1Sdu',
      'label': [
        'Благовіщенська',
        'Blahovishchenska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'blahovishchenska_2'
    },
    {
      'name': 'blyzniukivska',
      '$kuid': 'SFT4qQ7Fa',
      'label': [
        'Близнюківська',
        'Blyzniukivska'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'blyzniukivska'
    },
    {
      'name': 'bobrovytska',
      '$kuid': 'WUVM1dWWl',
      'label': [
        'Бобровицька',
        'Bobrovytska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bobrovytska'
    },
    {
      'name': 'bobrynetska',
      '$kuid': 'mUkbNXsPv',
      'label': [
        'Бобринецька',
        'Bobrynetska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'bobrynetska'
    },
    {
      'name': 'bobrytska',
      '$kuid': 'TwUsaFWqW',
      'label': [
        'Бобрицька',
        'Bobrytska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'bobrytska'
    },
    {
      'name': 'bochechkivska',
      '$kuid': 'Z7y0yH0Rg',
      'label': [
        'Бочечківська',
        'Bochechkivska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'bochechkivska'
    },
    {
      'name': 'bohdanivska',
      '$kuid': 'NH0oELUsy',
      'label': [
        'Богданівська',
        'Bohdanivska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohdanivska'
    },
    {
      'name': 'bohdanska',
      '$kuid': '8xV9tKBJa',
      'label': [
        'Богданська',
        'Bohdanska'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohdanska'
    },
    {
      'name': 'bohodukhivska',
      '$kuid': 'taapjQ5ei',
      'label': [
        'Богодухівська',
        'Bohodukhivska'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohodukhivska'
    },
    {
      'name': 'bohorodchanska',
      '$kuid': 'a3q8L0e0i',
      'label': [
        'Богородчанська',
        'Bohorodchanska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohorodchanska'
    },
    {
      'name': 'bohuslavska',
      '$kuid': 'RSR0rOxeX',
      'label': [
        'Богуславська',
        'Bohuslavska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bohuslavska'
    },
    {
      'name': 'boianska',
      '$kuid': 'kBQ2B3fkD',
      'label': [
        'Боянська',
        'Boianska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'boianska'
    },
    {
      'name': 'boiarska',
      '$kuid': 'XqfFdwtJA',
      'label': [
        'Боярська',
        'Boiarska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'boiarska'
    },
    {
      'name': 'boikivska',
      '$kuid': 'xixApCf7J',
      'label': [
        'Бойківська',
        'Boikivska'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'boikivska'
    },
    {
      'name': 'bokiimivska',
      '$kuid': 'uyNvRB8Yl',
      'label': [
        'Бокіймівська',
        'Bokiimivska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bokiimivska'
    },
    {
      'name': 'bolekhivska',
      '$kuid': 'kPf0tiVkJ',
      'label': [
        'Болехівська',
        'Bolekhivska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'bolekhivska'
    },
    {
      'name': 'bolhradska',
      '$kuid': 'ymJc68jIq',
      'label': [
        'Болградська',
        'Bolhradska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'bolhradska'
    },
    {
      'name': 'boratynska',
      '$kuid': 'b1zxx6KIz',
      'label': [
        'Боратинська',
        'Boratynska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'boratynska'
    },
    {
      'name': 'boremelska',
      '$kuid': 'btVszgpTh',
      'label': [
        'Боремельська',
        'Boremelska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'boremelska'
    },
    {
      'name': 'borivska',
      '$kuid': 'bB6FwMhzz',
      'label': [
        'Борівська',
        'Borivska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'borivska'
    },
    {
      'name': 'borodianska',
      '$kuid': 'gUtbaWsYa',
      'label': [
        'Бородянська',
        'Borodianska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'borodianska'
    },
    {
      'name': 'borodinska',
      '$kuid': 'KbpeeEgK0',
      'label': [
        'Бородінська',
        'Borodinska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'borodinska'
    },
    {
      'name': 'boromlianska',
      '$kuid': 'exLHXQUZN',
      'label': [
        'Боромлянська',
        'Boromlianska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'boromlianska'
    },
    {
      'name': 'borozenska',
      '$kuid': 'XuoA7ILEf',
      'label': [
        'Борозенська',
        'Borozenska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'borozenska'
    },
    {
      'name': 'borshchahivska',
      '$kuid': 'qmnNhrTHX',
      'label': [
        'Борщагівська',
        'Borshchahivska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'borshchahivska'
    },
    {
      'name': 'borshchivska',
      '$kuid': 'aknNRS5er',
      'label': [
        'Борщівська',
        'Borshchivska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'borshchivska'
    },
    {
      'name': 'borsukivska',
      '$kuid': 'sTbU7HLPk',
      'label': [
        'Борсуківська',
        'Borsukivska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'borsukivska'
    },
    {
      'name': 'borynska',
      '$kuid': 'uwT1rjGcf',
      'label': [
        'Боринська',
        'Borynska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'borynska'
    },
    {
      'name': 'boryslavska',
      '$kuid': 'foDt8q6vL',
      'label': [
        'Бориславська',
        'Boryslavska'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'boryslavska'
    },
    {
      'name': 'boryspilska',
      '$kuid': 'DAI6lKBBR',
      'label': [
        'Бориспільська',
        'Boryspilska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'boryspilska'
    },
    {
      'name': 'borznianska',
      '$kuid': 'iKe2gLpdC',
      'label': [
        'Борзнянська',
        'Borznianska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'borznianska'
    },
    {
      'name': 'botanichna',
      '$kuid': 'NAAKB9ahe',
      'label': [
        'Ботанічна',
        'Botanichna'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'botanichna'
    },
    {
      'name': 'bozhedarivska',
      '$kuid': 'kgQAFOcwt',
      'label': [
        'Божедарівська',
        'Bozhedarivska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'bozhedarivska'
    },
    {
      'name': 'brahynivska',
      '$kuid': 'Zk6QJua1H',
      'label': [
        'Брагинівська',
        'Brahynivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'brahynivska'
    },
    {
      'name': 'bratska',
      '$kuid': 'f3QkDZJLl',
      'label': [
        'Братська',
        'Bratska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'bratska'
    },
    {
      'name': 'bratska_2',
      '$kuid': '5AChvlRco',
      'label': [
        'Братська',
        'Bratska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'bratska_2'
    },
    {
      'name': 'bratslavska',
      '$kuid': 'PZEM0crxO',
      'label': [
        'Брацлавська',
        'Bratslavska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bratslavska'
    },
    {
      'name': 'brodivska',
      '$kuid': 'mkShnyL7L',
      'label': [
        'Бродівська',
        'Brodivska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'brodivska'
    },
    {
      'name': 'bronykivska',
      '$kuid': 'ka8MnXiNs',
      'label': [
        'Брониківська',
        'Bronykivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'bronykivska'
    },
    {
      'name': 'broshniv-osadska',
      '$kuid': 'PS6vFzWG3',
      'label': [
        'Брошнів-Осадська',
        'Broshniv-Osadska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'broshniv-osadska'
    },
    {
      'name': 'brovarska',
      '$kuid': 'JR49nfvDc',
      'label': [
        'Броварська',
        'Brovarska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'brovarska'
    },
    {
      'name': 'brusnytska',
      '$kuid': '3RR8VhMWL',
      'label': [
        'Брусницька',
        'Brusnytska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'brusnytska'
    },
    {
      'name': 'brusylivska',
      '$kuid': 'MxzR32iys',
      'label': [
        'Брусилівська',
        'Brusylivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'brusylivska'
    },
    {
      'name': 'buchanska',
      '$kuid': 'w9QfsdG9T',
      'label': [
        'Бучанська',
        'Buchanska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'buchanska'
    },
    {
      'name': 'buchatska',
      '$kuid': 'lEtHh8R2N',
      'label': [
        'Бучацька',
        'Buchatska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'buchatska'
    },
    {
      'name': 'budyshchenska',
      '$kuid': 'xb3GwIlUV',
      'label': [
        'Будищенська',
        'Budyshchenska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'budyshchenska'
    },
    {
      'name': 'buhrynska',
      '$kuid': 'OmjLsPtDN',
      'label': [
        'Бугринська',
        'Buhrynska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'buhrynska'
    },
    {
      'name': 'bukachivska',
      '$kuid': 'YjX5GFWdX',
      'label': [
        'Букачівська',
        'Bukachivska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bukachivska'
    },
    {
      'name': 'burshtynska',
      '$kuid': 'zpDeEDjt4',
      'label': [
        'Бурштинська',
        'Burshtynska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'burshtynska'
    },
    {
      'name': 'burynska',
      '$kuid': 'sPVr9V1sq',
      'label': [
        'Буринська',
        'Burynska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'burynska'
    },
    {
      'name': 'bushtynska',
      '$kuid': 'ICDGYeXO1',
      'label': [
        'Буштинська',
        'Bushtynska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'bushtynska'
    },
    {
      'name': 'buska',
      '$kuid': 'yhgCGKDcg',
      'label': [
        'Буська',
        'Buska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'buska'
    },
    {
      'name': 'butska',
      '$kuid': 'V6f9jyqOd',
      'label': [
        'Буцька',
        'Butska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'butska'
    },
    {
      'name': 'buzhanska',
      '$kuid': 'AGkLGb6Wx',
      'label': [
        'Бужанська',
        'Buzhanska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'buzhanska'
    },
    {
      'name': 'buzka',
      '$kuid': 'dAY6SJ9ir',
      'label': [
        'Бузька',
        'Buzka'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'buzka'
    },
    {
      'name': 'byshivska',
      '$kuid': 'CZVwARxYj',
      'label': [
        'Бишівська',
        'Byshivska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'byshivska'
    },
    {
      'name': 'chabanivska',
      '$kuid': 'uiay5Jbuy',
      'label': [
        'Чабанівська',
        'Chabanivska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chabanivska'
    },
    {
      'name': 'chahorska',
      '$kuid': 'Eg47Gzkfw',
      'label': [
        'Чагорська',
        'Chahorska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'chahorska'
    },
    {
      'name': 'chaikynska',
      '$kuid': 'CqViwu7ho',
      'label': [
        'Чайкинська',
        'Chaikynska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chaikynska'
    },
    {
      'name': 'chapaievska',
      '$kuid': 'inLU9sXqJ',
      'label': [
        'Чапаєвська',
        'Chapaievska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chapaievska'
    },
    {
      'name': 'chaplynska',
      '$kuid': 'TNHH9NICQ',
      'label': [
        'Чаплинська',
        'Chaplynska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chaplynska'
    },
    {
      'name': 'chasovoiarska',
      '$kuid': 'pMZ7bM2fh',
      'label': [
        'Часовоярська',
        'Chasovoiarska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'chasovoiarska'
    },
    {
      'name': 'chechelnytska',
      '$kuid': 'tmmgX1oGi',
      'label': [
        'Чечельницька',
        'Chechelnytska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'chechelnytska'
    },
    {
      'name': 'cheliadinivska',
      '$kuid': 'xgg7BbpB1',
      'label': [
        'Челядінівська',
        'Cheliadinivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'cheliadinivska'
    },
    {
      'name': 'chemerovetska',
      '$kuid': '0wgkq9rLq',
      'label': [
        'Чемеровецька',
        'Chemerovetska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'chemerovetska'
    },
    {
      'name': 'cherkaska_2',
      '$kuid': 'pIzyYqqqP',
      'label': [
        'Черкаська',
        'Cherkaska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherkaska_2'
    },
    {
      'name': 'cherkaska_3',
      '$kuid': '8YhsddgK4',
      'label': [
        'Черкаська',
        'Cherkaska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherkaska_3'
    },
    {
      'name': 'cherkaska_4',
      '$kuid': 'BnEfyM5b4',
      'label': [
        'Черкаська',
        'Cherkaska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherkaska_4'
    },
    {
      'name': 'chernechchynska',
      '$kuid': 'yz4VFlj1N',
      'label': [
        'Чернеччинська',
        'Chernechchynska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernechchynska'
    },
    {
      'name': 'chernechchynska_2',
      '$kuid': 'IiKSE2qXb',
      'label': [
        'Чернеччинська',
        'Chernechchynska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernechchynska_2'
    },
    {
      'name': 'chernelytska',
      '$kuid': 'uODVkKfOs',
      'label': [
        'Чернелицька',
        'Chernelytska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernelytska'
    },
    {
      'name': 'cherniakhivska',
      '$kuid': '4pZ3wK74X',
      'label': [
        'Черняхівська',
        'Cherniakhivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'cherniakhivska'
    },
    {
      'name': 'chernihivska_2',
      '$kuid': 'FVFwwtlm6',
      'label': [
        'Чернігівська',
        'Chernihivska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernihivska_2'
    },
    {
      'name': 'chernihivska_3',
      '$kuid': 'lavTH4z7r',
      'label': [
        'Чернігівська',
        'Chernihivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernihivska_3'
    },
    {
      'name': 'chernivetska_2',
      '$kuid': 'Jk23lgbna',
      'label': [
        'Чернівецька',
        'Chernivetska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernivetska_2'
    },
    {
      'name': 'chernivetska_3',
      '$kuid': 'oridzkvqF',
      'label': [
        'Чернівецька',
        'Chernivetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernivetska_3'
    },
    {
      'name': 'chernovska',
      '$kuid': 'AjYGQ85Vm',
      'label': [
        'Черновська',
        'Chernovska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernovska'
    },
    {
      'name': 'chernyshivska',
      '$kuid': 'jWmdC7Skl',
      'label': [
        'Чернишівська',
        'Chernyshivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'chernyshivska'
    },
    {
      'name': 'chervonenska',
      '$kuid': '9DglX1dhw',
      'label': [
        'Червоненська',
        'Chervonenska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonenska'
    },
    {
      'name': 'chervonohradska',
      '$kuid': 'TJG7tTlJ5',
      'label': [
        'Червоноградська',
        'Chervonohradska'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonohradska'
    },
    {
      'name': 'chervonohryhorivska',
      '$kuid': 'DqZFhTtCW',
      'label': [
        'Червоногригорівська',
        'Chervonohryhorivska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonohryhorivska'
    },
    {
      'name': 'chervonoslobidska',
      '$kuid': 'BcJ9y9MaF',
      'label': [
        'Червонослобідська',
        'Chervonoslobidska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'chervonoslobidska'
    },
    {
      'name': 'chkalovska',
      '$kuid': 'V0qyhIMlB',
      'label': [
        'Чкаловська',
        'Chkalovska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'chkalovska'
    },
    {
      'name': 'chkalovska_2',
      '$kuid': 'qATlW8scg',
      'label': [
        'Чкаловська',
        'Chkalovska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chkalovska_2'
    },
    {
      'name': 'chkalovska_3',
      '$kuid': 'QWIEMEQ4u',
      'label': [
        'Чкаловська',
        'Chkalovska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'chkalovska_3'
    },
    {
      'name': 'chmyrivska',
      '$kuid': 'NhF8fXVKF',
      'label': [
        'Чмирівська',
        'Chmyrivska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'chmyrivska'
    },
    {
      'name': 'chohodarivska',
      '$kuid': 'FMo86v2fn',
      'label': [
        'Чогодарівська',
        'Chohodarivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chohodarivska'
    },
    {
      'name': 'chopovytska',
      '$kuid': 'd4bmjIdC0',
      'label': [
        'Чоповицька',
        'Chopovytska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'chopovytska'
    },
    {
      'name': 'chopska',
      '$kuid': 'DgG5gr3xk',
      'label': [
        'Чопська',
        'Chopska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'chopska'
    },
    {
      'name': 'chornobaivska',
      '$kuid': 'jZf0sqtjt',
      'label': [
        'Чорнобаївська',
        'Chornobaivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornobaivska'
    },
    {
      'name': 'chornobaivska_2',
      '$kuid': '7DqUmmuxR',
      'label': [
        'Чорнобаївська',
        'Chornobaivska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornobaivska_2'
    },
    {
      'name': 'chornobylska zona vidchuzhennia_2',
      '$kuid': 'dmmbNKwrM',
      'label': [
        'Чорнобильська зона відчуження',
        'Chornobylska zona vidchuzhennia'
      ],
      'raion': 'chornobylska zona vidchuzhennia',
      'list_name': 'hromada',
      '$autovalue': 'chornobylska zona vidchuzhennia_2'
    },
    {
      'name': 'chornomorska',
      '$kuid': 'eKX5mCVnV',
      'label': [
        'Чорноморська',
        'Chornomorska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska'
    },
    {
      'name': 'chornomorska_2',
      '$kuid': 'Pm34kRfQ0',
      'label': [
        'Чорноморська',
        'Chornomorska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska_2'
    },
    {
      'name': 'chornomorska_3',
      '$kuid': 'nOPgTGMH8',
      'label': [
        'Чорноморська',
        'Chornomorska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska_3'
    },
    {
      'name': 'chornomorska_4',
      '$kuid': 'ycDJAmAqk',
      'label': [
        'Чорноморська',
        'Chornomorska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornomorska_4'
    },
    {
      'name': 'chornoostrivska',
      '$kuid': 'xUMTWsPJM',
      'label': [
        'Чорноострівська',
        'Chornoostrivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornoostrivska'
    },
    {
      'name': 'chornopilska',
      '$kuid': 'J81mB5Ty9',
      'label': [
        'Чорнопільська',
        'Chornopilska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornopilska'
    },
    {
      'name': 'chornozemnenska',
      '$kuid': 'NZ12uGiH1',
      'label': [
        'Чорноземненська',
        'Chornozemnenska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornozemnenska'
    },
    {
      'name': 'chornukhynska',
      '$kuid': 'Cioi1Ay6b',
      'label': [
        'Чорнухинська',
        'Chornukhynska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'chornukhynska'
    },
    {
      'name': 'chortkivska',
      '$kuid': 'aCnIsn3iU',
      'label': [
        'Чортківська',
        'Chortkivska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chortkivska'
    },
    {
      'name': 'chudeiska',
      '$kuid': 'zI8FIUUTj',
      'label': [
        'Чудейська',
        'Chudeiska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'chudeiska'
    },
    {
      'name': 'chudniv',
      '$kuid': 'qF4XiwKB3',
      'label': [
        'Чуднівська',
        'Chudniv'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'chudniv'
    },
    {
      'name': 'chuhuivska',
      '$kuid': 'WStENZnlZ',
      'label': [
        'Чугуївська',
        'Chuhuivska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chuhuivska'
    },
    {
      'name': 'chulakivska',
      '$kuid': 'v8U6pDWSD',
      'label': [
        'Чулаківська',
        'Chulakivska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chulakivska'
    },
    {
      'name': 'chumakivska',
      '$kuid': 'YSYhsFJvQ',
      'label': [
        'Чумаківська',
        'Chumakivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'chumakivska'
    },
    {
      'name': 'chupakhivska',
      '$kuid': 'HWcEzSbZq',
      'label': [
        'Чупахівська',
        'Chupakhivska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'chupakhivska'
    },
    {
      'name': 'chutivska',
      '$kuid': 'LdV51Sehf',
      'label': [
        'Чутівська',
        'Chutivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'chutivska'
    },
    {
      'name': 'chyhyrynska',
      '$kuid': 'Fj8VH6G5O',
      'label': [
        'Чигиринська',
        'Chyhyrynska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'chyhyrynska'
    },
    {
      'name': 'chynadiivska',
      '$kuid': 'LSbbSaOW1',
      'label': [
        'Чинадіївська',
        'Chynadiivska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chynadiivska'
    },
    {
      'name': 'chystenska',
      '$kuid': 'vE8L6INHP',
      'label': [
        'Чистенська',
        'Chystenska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'chystenska'
    },
    {
      'name': 'chystiakivska',
      '$kuid': '72LkXARsG',
      'label': [
        'Чистяківська',
        'Chystiakivska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'chystiakivska'
    },
    {
      'name': 'chystopilska',
      '$kuid': 'tidx5jD2c',
      'label': [
        'Чистопільська',
        'Chystopilska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'chystopilska'
    },
    {
      'name': 'chyzhivska',
      '$kuid': 'Y4m5ryOAv',
      'label': [
        'Чижівська',
        'Chyzhivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'chyzhivska'
    },
    {
      'name': 'dachnenska',
      '$kuid': 'mak2aoNYe',
      'label': [
        'Дачненська',
        'Dachnenska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'dachnenska'
    },
    {
      'name': 'dachnivska',
      '$kuid': 'zi1xLjfQF',
      'label': [
        'Дачнівська',
        'Dachnivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dachnivska'
    },
    {
      'name': 'dalekivska',
      '$kuid': 'qssGBhnBR',
      'label': [
        'Далеківська',
        'Dalekivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dalekivska'
    },
    {
      'name': 'dalnytska',
      '$kuid': 't4RazhITP',
      'label': [
        'Дальницька',
        'Dalnytska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'dalnytska'
    },
    {
      'name': 'darivska',
      '$kuid': '0MGEg7b5B',
      'label': [
        'Дар\'ївська',
        'Darivska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'darivska'
    },
    {
      'name': 'dashivska',
      '$kuid': 'VOue8u1wQ',
      'label': [
        'Дашівська',
        'Dashivska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dashivska'
    },
    {
      'name': 'davydivska',
      '$kuid': 'IPRrr8cps',
      'label': [
        'Давидівська',
        'Davydivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'davydivska'
    },
    {
      'name': 'debaltsivska',
      '$kuid': '5hJthTG2O',
      'label': [
        'Дебальцівська',
        'Debaltsivska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'debaltsivska'
    },
    {
      'name': 'deliatynska',
      '$kuid': 'wbH7jqhAr',
      'label': [
        'Делятинська',
        'Deliatynska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'deliatynska'
    },
    {
      'name': 'demydivska',
      '$kuid': 'EONpUpnQj',
      'label': [
        'Демидівська',
        'Demydivska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'demydivska'
    },
    {
      'name': 'derazhnenska',
      '$kuid': 'Oh88EYNkd',
      'label': [
        'Деражненська',
        'Derazhnenska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'derazhnenska'
    },
    {
      'name': 'derazhnianska',
      '$kuid': 'AbaJSEgzM',
      'label': [
        'Деражнянська',
        'Derazhnianska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'derazhnianska'
    },
    {
      'name': 'derhachivska',
      '$kuid': 'JmWayoUpy',
      'label': [
        'Дергачівська',
        'Derhachivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'derhachivska'
    },
    {
      'name': 'desnianska',
      '$kuid': 'phNsAsXLr',
      'label': [
        'Деснянська',
        'Desnianska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'desnianska'
    },
    {
      'name': 'devladivska',
      '$kuid': 'LVtkmY0Xq',
      'label': [
        'Девладівська',
        'Devladivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'devladivska'
    },
    {
      'name': 'diadkovytska',
      '$kuid': '4fCL2PcFw',
      'label': [
        'Дядьковицька',
        'Diadkovytska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'diadkovytska'
    },
    {
      'name': 'divychkivska',
      '$kuid': '9AgHI5mVH',
      'label': [
        'Дівичківська',
        'Divychkivska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'divychkivska'
    },
    {
      'name': 'dmytrivska',
      '$kuid': '9bgKoW4w5',
      'label': [
        'Дмитрівська',
        'Dmytrivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska'
    },
    {
      'name': 'dmytrivska_2',
      '$kuid': 'VleUn0ryO',
      'label': [
        'Дмитрівська',
        'Dmytrivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska_2'
    },
    {
      'name': 'dmytrivska_3',
      '$kuid': 'zFgvbMF7Y',
      'label': [
        'Дмитрівська',
        'Dmytrivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska_3'
    },
    {
      'name': 'dmytrivska_4',
      '$kuid': '4mCNRGco2',
      'label': [
        'Дмитрівська',
        'Dmytrivska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrivska_4'
    },
    {
      'name': 'dmytrushkivska',
      '$kuid': 'ti4hSVWF9',
      'label': [
        'Дмитрушківська',
        'Dmytrushkivska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'dmytrushkivska'
    },
    {
      'name': 'dniprorudnenska',
      '$kuid': 'KFEmzg7H8',
      'label': [
        'Дніпрорудненська',
        'Dniprorudnenska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dniprorudnenska'
    },
    {
      'name': 'dniprovska',
      '$kuid': 'MdN1IRZpu',
      'label': [
        'Дніпровська',
        'Dniprovska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dniprovska'
    },
    {
      'name': 'dobrianska',
      '$kuid': 'lTgW9o28v',
      'label': [
        'Добрянська',
        'Dobrianska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrianska'
    },
    {
      'name': 'dobrivska',
      '$kuid': '2DWNwbuLV',
      'label': [
        'Добрівська',
        'Dobrivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrivska'
    },
    {
      'name': 'dobromylska',
      '$kuid': 'g5EG0jKA6',
      'label': [
        'Добромильська',
        'Dobromylska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobromylska'
    },
    {
      'name': 'dobropilska',
      '$kuid': 'xYoZAmmdz',
      'label': [
        'Добропільська',
        'Dobropilska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobropilska'
    },
    {
      'name': 'dobroslavska',
      '$kuid': 'uYY7z8kjg',
      'label': [
        'Доброславська',
        'Dobroslavska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobroslavska'
    },
    {
      'name': 'dobrosynsko-maherivska',
      '$kuid': 'uPDuf04YS',
      'label': [
        'Добросинсько-Магерівська',
        'Dobrosynsko-Maherivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrosynsko-maherivska'
    },
    {
      'name': 'dobrotvirska',
      '$kuid': 'pkhXWre1t',
      'label': [
        'Добротвірська',
        'Dobrotvirska'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrotvirska'
    },
    {
      'name': 'dobrovelychkivska',
      '$kuid': 'Y2QAF6Lmp',
      'label': [
        'Добровеличківська',
        'Dobrovelychkivska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrovelychkivska'
    },
    {
      'name': 'dobrushynska',
      '$kuid': '0EjFiKzBe',
      'label': [
        'Добрушинська',
        'Dobrushynska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dobrushynska'
    },
    {
      'name': 'dokuchaievska',
      '$kuid': 'UUEiy5Kpk',
      'label': [
        'Докучаєвська',
        'Dokuchaievska'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'dokuchaievska'
    },
    {
      'name': 'dolmativska',
      '$kuid': '27UUWCCDB',
      'label': [
        'Долматівська',
        'Dolmativska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolmativska'
    },
    {
      'name': 'dolynnenska',
      '$kuid': 'PF0iHFv9q',
      'label': [
        'Долинненська',
        'Dolynnenska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynnenska'
    },
    {
      'name': 'dolynska',
      '$kuid': 'yj72tc9Hr',
      'label': [
        'Долинська',
        'Dolynska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska'
    },
    {
      'name': 'dolynska_2',
      '$kuid': '6nPO0vnFN',
      'label': [
        'Долинська',
        'Dolynska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska_2'
    },
    {
      'name': 'dolynska_3',
      '$kuid': 'RTcTdND7t',
      'label': [
        'Долинська',
        'Dolynska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska_3'
    },
    {
      'name': 'dolynska_4',
      '$kuid': 'dcMGhlJoi',
      'label': [
        'Долинська',
        'Dolynska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'dolynska_4'
    },
    {
      'name': 'domanivska',
      '$kuid': 'Ro7noGIC6',
      'label': [
        'Доманівська',
        'Domanivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'domanivska'
    },
    {
      'name': 'donetska',
      '$kuid': 'NY6bRwwEX',
      'label': [
        'Донецька',
        'Donetska'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'donetska'
    },
    {
      'name': 'donetska_2',
      '$kuid': 'T4LcU8Gev',
      'label': [
        'Донецька',
        'Donetska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'donetska_2'
    },
    {
      'name': 'donska',
      '$kuid': 'FC7nhIjYX',
      'label': [
        'Донська',
        'Donska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'donska'
    },
    {
      'name': 'doroshivska',
      '$kuid': 'Migbjd1e1',
      'label': [
        'Дорошівська',
        'Doroshivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'doroshivska'
    },
    {
      'name': 'dorosynivska',
      '$kuid': 'Y0nFUlih6',
      'label': [
        'Доросинівська',
        'Dorosynivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'dorosynivska'
    },
    {
      'name': 'dovbyska',
      '$kuid': 'g2P2746fg',
      'label': [
        'Довбиська',
        'Dovbyska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dovbyska'
    },
    {
      'name': 'dovzhanska',
      '$kuid': 'v9kbtjDtV',
      'label': [
        'Довжанська',
        'Dovzhanska'
      ],
      'raion': 'dovzhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'dovzhanska'
    },
    {
      'name': 'dovzhanska_2',
      '$kuid': 'cYTVix1t8',
      'label': [
        'Довжанська',
        'Dovzhanska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'dovzhanska_2'
    },
    {
      'name': 'drabivska',
      '$kuid': 'LG0ke2vWv',
      'label': [
        'Драбівська',
        'Drabivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'drabivska'
    },
    {
      'name': 'drabynivska',
      '$kuid': 'wj49Ipvp5',
      'label': [
        'Драбинівська',
        'Drabynivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'drabynivska'
    },
    {
      'name': 'drahivska',
      '$kuid': 'KSL1S8Aix',
      'label': [
        'Драгівська',
        'Drahivska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'drahivska'
    },
    {
      'name': 'drofynska',
      '$kuid': 'wWMSligNR',
      'label': [
        'Дрофинська',
        'Drofynska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'drofynska'
    },
    {
      'name': 'drohobytska',
      '$kuid': 'qTbbnMl76',
      'label': [
        'Дрогобицька',
        'Drohobytska'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'drohobytska'
    },
    {
      'name': 'druzhbivska',
      '$kuid': 'xrHOwlXsu',
      'label': [
        'Дружбівська',
        'Druzhbivska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'druzhbivska'
    },
    {
      'name': 'druzhkivska',
      '$kuid': 'UOBYxTsQd',
      'label': [
        'Дружківська',
        'Druzhkivska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'druzhkivska'
    },
    {
      'name': 'dubechnenska',
      '$kuid': 'Rj5eHx4bu',
      'label': [
        'Дубечненська',
        'Dubechnenska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubechnenska'
    },
    {
      'name': 'dubenska',
      '$kuid': 'M0OG6J95a',
      'label': [
        'Дубенська',
        'Dubenska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubenska'
    },
    {
      'name': 'dubivska',
      '$kuid': 'xi0d2f64z',
      'label': [
        'Дубівська',
        'Dubivska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubivska'
    },
    {
      'name': 'dubivska_2',
      '$kuid': 'XmknJ6CHV',
      'label': [
        'Дубівська',
        'Dubivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubivska_2'
    },
    {
      'name': 'dubivska_3',
      '$kuid': 'YIkmO7Zyb',
      'label': [
        'Дубівська',
        'Dubivska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubivska_3'
    },
    {
      'name': 'dubovetska',
      '$kuid': 'Xtjw93TZW',
      'label': [
        'Дубовецька',
        'Dubovetska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubovetska'
    },
    {
      'name': 'duboviazivska',
      '$kuid': 'FhuQ9alOk',
      'label': [
        'Дубов\'язівська',
        'Duboviazivska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'duboviazivska'
    },
    {
      'name': 'dubovykivska',
      '$kuid': 'MQfxn6zNo',
      'label': [
        'Дубовиківська',
        'Dubovykivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubovykivska'
    },
    {
      'name': 'dubrivska',
      '$kuid': 'v66vwxyYq',
      'label': [
        'Дубрівська',
        'Dubrivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubrivska'
    },
    {
      'name': 'dubrovytska',
      '$kuid': 'bgtH4eVJm',
      'label': [
        'Дубровицька',
        'Dubrovytska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubrovytska'
    },
    {
      'name': 'dubrynytska-malobereznianska',
      '$kuid': 'gsTuGmDIB',
      'label': [
        'Дубриницько-Малоберезнянська',
        'Dubrynytska-Malobereznianska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'dubrynytska-malobereznianska'
    },
    {
      'name': 'dunaievetska',
      '$kuid': 'fyCj57qPQ',
      'label': [
        'Дунаєвецька',
        'Dunaievetska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'dunaievetska'
    },
    {
      'name': 'dvorichanska',
      '$kuid': 'qKE2ulDYk',
      'label': [
        'Дворічанська',
        'Dvorichanska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'dvorichanska'
    },
    {
      'name': 'dykanska',
      '$kuid': 'CEiWl6aoJ',
      'label': [
        'Диканська',
        'Dykanska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'dykanska'
    },
    {
      'name': 'dymerska',
      '$kuid': 'FrkoFfsre',
      'label': [
        'Димерська',
        'Dymerska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'dymerska'
    },
    {
      'name': 'dyviziiska',
      '$kuid': 'Y8lWayiE7',
      'label': [
        'Дивізійська',
        'Dyviziiska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'dyviziiska'
    },
    {
      'name': 'dzhankoiska',
      '$kuid': 'yK9SIlA42',
      'label': [
        'Джанкойська',
        'Dzhankoiska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzhankoiska'
    },
    {
      'name': 'dzhulynska',
      '$kuid': 'Q2PSGkWPG',
      'label': [
        'Джулинська',
        'Dzhulynska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzhulynska'
    },
    {
      'name': 'dzhurynska',
      '$kuid': 'wSjXn7Drq',
      'label': [
        'Джуринська',
        'Dzhurynska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzhurynska'
    },
    {
      'name': 'dzvyniatska',
      '$kuid': 'XnaT2Yh3N',
      'label': [
        'Дзвиняцька',
        'Dzvyniatska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'dzvyniatska'
    },
    {
      'name': 'enerhodarska',
      '$kuid': '5kmHBMHs8',
      'label': [
        'Енергодарська',
        'Enerhodarska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'enerhodarska'
    },
    {
      'name': 'esmanska',
      '$kuid': 'ycu8EiIjR',
      'label': [
        'Есманьська',
        'Esmanska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'esmanska'
    },
    {
      'name': 'fastivska',
      '$kuid': 'GZsPma1NC',
      'label': [
        'Фастівська',
        'Fastivska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'fastivska'
    },
    {
      'name': 'fedorivska',
      '$kuid': 'fgExnZoNQ',
      'label': [
        'Федорівська',
        'Fedorivska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'fedorivska'
    },
    {
      'name': 'feodosiiska',
      '$kuid': 'dRBamydzj',
      'label': [
        'Феодосійська',
        'Feodosiiska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'feodosiiska'
    },
    {
      'name': 'feodosiivska',
      '$kuid': '6tToTMKpP',
      'label': [
        'Феодосіївська',
        'Feodosiivska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'feodosiivska'
    },
    {
      'name': 'filativska',
      '$kuid': 'sTLw9R80B',
      'label': [
        'Філатівська',
        'Filativska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'filativska'
    },
    {
      'name': 'fontanska',
      '$kuid': 'jCsIxjEJx',
      'label': [
        'Фонтанська',
        'Fontanska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'fontanska'
    },
    {
      'name': 'foroska',
      '$kuid': '6qQUQJQSL',
      'label': [
        'Фороська',
        'Foroska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'foroska'
    },
    {
      'name': 'frunzenska',
      '$kuid': 'nKddS4xre',
      'label': [
        'Фрунзенська',
        'Frunzenska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'frunzenska'
    },
    {
      'name': 'fursivska',
      '$kuid': 'afrxlktkh',
      'label': [
        'Фурсівська',
        'Fursivska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'fursivska'
    },
    {
      'name': 'hadiatska',
      '$kuid': 'UbqlESUkl',
      'label': [
        'Гадяцька',
        'Hadiatska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'hadiatska'
    },
    {
      'name': 'haisynska',
      '$kuid': 'gyfSq88Ag',
      'label': [
        'Гайсинська',
        'Haisynska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'haisynska'
    },
    {
      'name': 'haivoronska',
      '$kuid': '6FGeY2abe',
      'label': [
        'Гайворонська',
        'Haivoronska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'haivoronska'
    },
    {
      'name': 'halytska',
      '$kuid': 'oxpjUCX7p',
      'label': [
        'Галицька',
        'Halytska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'halytska'
    },
    {
      'name': 'halytsynivska',
      '$kuid': 'rlTZmPamq',
      'label': [
        'Галицинівська',
        'Halytsynivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'halytsynivska'
    },
    {
      'name': 'hannivska',
      '$kuid': 'dvmaiiksV',
      'label': [
        'Ганнівська',
        'Hannivska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'hannivska'
    },
    {
      'name': 'hannopilska',
      '$kuid': 'C4DlhRdUt',
      'label': [
        'Ганнопільська',
        'Hannopilska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hannopilska'
    },
    {
      'name': 'hasprynska',
      '$kuid': 'mVtd6wp7w',
      'label': [
        'Гаспринська',
        'Hasprynska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hasprynska'
    },
    {
      'name': 'hatnenska',
      '$kuid': 'sPwsKeZW4',
      'label': [
        'Гатненська',
        'Hatnenska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hatnenska'
    },
    {
      'name': 'helmiazivska',
      '$kuid': 'ZdFB3SYmm',
      'label': [
        'Гельмязівська',
        'Helmiazivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'helmiazivska'
    },
    {
      'name': 'henicheska',
      '$kuid': 'ipTCDnj5n',
      'label': [
        'Генічеська',
        'Henicheska'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'henicheska'
    },
    {
      'name': 'heroiska',
      '$kuid': 'tUX8Gdxmg',
      'label': [
        'Геройська',
        'Heroiska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'heroiska'
    },
    {
      'name': 'hertsaivska',
      '$kuid': 'AHmU3Sssg',
      'label': [
        'Герцаївська',
        'Hertsaivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'hertsaivska'
    },
    {
      'name': 'hirska',
      '$kuid': 'Sf2g9LtQg',
      'label': [
        'Гірська',
        'Hirska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'hirska'
    },
    {
      'name': 'hirska_2',
      '$kuid': 'HmnNCfNyZ',
      'label': [
        'Гірська',
        'Hirska'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'hirska_2'
    },
    {
      'name': 'hladkovytska',
      '$kuid': 'zXdfnTolB',
      'label': [
        'Гладковицька',
        'Hladkovytska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'hladkovytska'
    },
    {
      'name': 'hlazivska',
      '$kuid': 'L3NhvM8uT',
      'label': [
        'Глазівська',
        'Hlazivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlazivska'
    },
    {
      'name': 'hleiuvatska',
      '$kuid': 'jbbJKXK5o',
      'label': [
        'Глеюватська',
        'Hleiuvatska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'hleiuvatska'
    },
    {
      'name': 'hlevakhivska',
      '$kuid': 'nerBfN0Pa',
      'label': [
        'Глевахівська',
        'Hlevakhivska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlevakhivska'
    },
    {
      'name': 'hlobynska',
      '$kuid': 'ghjdJSSdR',
      'label': [
        'Глобинська',
        'Hlobynska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlobynska'
    },
    {
      'name': 'hlodoska',
      '$kuid': 'tE9whbDS5',
      'label': [
        'Глодоська',
        'Hlodoska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlodoska'
    },
    {
      'name': 'hlukhivska',
      '$kuid': 'V5BfquDTt',
      'label': [
        'Глухівська',
        'Hlukhivska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlukhivska'
    },
    {
      'name': 'hlukhovetska',
      '$kuid': 'PNFB1qfqa',
      'label': [
        'Глуховецька',
        'Hlukhovetska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlukhovetska'
    },
    {
      'name': 'hlybochytska',
      '$kuid': 'remebxped',
      'label': [
        'Глибочицька',
        'Hlybochytska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlybochytska'
    },
    {
      'name': 'hlybotska',
      '$kuid': 'ona2lK0IA',
      'label': [
        'Глибоцька',
        'Hlybotska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlybotska'
    },
    {
      'name': 'hlynianska',
      '$kuid': 'uX0TtRbg0',
      'label': [
        'Глинянська',
        'Hlynianska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hlynianska'
    },
    {
      'name': 'hnivanska',
      '$kuid': 'LTJbDBa5I',
      'label': [
        'Гніванська',
        'Hnivanska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hnivanska'
    },
    {
      'name': 'hnizdychivska',
      '$kuid': 'Yvd7k7b3Y',
      'label': [
        'Гніздичівська',
        'Hnizdychivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hnizdychivska'
    },
    {
      'name': 'hoholivska',
      '$kuid': 'QvyVUC2FW',
      'label': [
        'Гоголівська',
        'Hoholivska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'hoholivska'
    },
    {
      'name': 'holobska',
      '$kuid': 'iBgY96JMP',
      'label': [
        'Голобська',
        'Holobska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'holobska'
    },
    {
      'name': 'holoprystanska',
      '$kuid': 'tDnD0D99H',
      'label': [
        'Голопристанська',
        'Holoprystanska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'holoprystanska'
    },
    {
      'name': 'holovanivska',
      '$kuid': 'rdU2jRKXA',
      'label': [
        'Голованівська',
        'Holovanivska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'holovanivska'
    },
    {
      'name': 'holovnenska',
      '$kuid': 'pFd3fgztS',
      'label': [
        'Головненська',
        'Holovnenska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'holovnenska'
    },
    {
      'name': 'holovynska',
      '$kuid': 't0ZNGGNvX',
      'label': [
        'Головинська',
        'Holovynska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'holovynska'
    },
    {
      'name': 'holubynska',
      '$kuid': 'Ca1uadeXL',
      'label': [
        'Голубинська',
        'Holubynska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'holubynska'
    },
    {
      'name': 'honcharivska',
      '$kuid': 'oI2QpyVwl',
      'label': [
        'Гончарівська',
        'Honcharivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'honcharivska'
    },
    {
      'name': 'horinchivska',
      '$kuid': 'kPTTBphPC',
      'label': [
        'Горінчівська',
        'Horinchivska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'horinchivska'
    },
    {
      'name': 'horishnoplavnivska',
      '$kuid': 'YzHsE3AnN',
      'label': [
        'Горішньоплавнівська',
        'Horishnoplavnivska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'horishnoplavnivska'
    },
    {
      'name': 'horishnosherovetska',
      '$kuid': 'zbEN6zD6i',
      'label': [
        'Горішньошеровецька',
        'Horishnosherovetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'horishnosherovetska'
    },
    {
      'name': 'horlivska',
      '$kuid': '8VTOJDC0C',
      'label': [
        'Горлівська',
        'Horlivska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horlivska'
    },
    {
      'name': 'hornostaivska',
      '$kuid': 'cTxxBbEl8',
      'label': [
        'Горностаївська',
        'Hornostaivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hornostaivska'
    },
    {
      'name': 'hornostaivska_2',
      '$kuid': 'i8RJTzb8G',
      'label': [
        'Горностаївська',
        'Hornostaivska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'hornostaivska_2'
    },
    {
      'name': 'horodenkivska',
      '$kuid': 'QlJpDXdUR',
      'label': [
        'Городенківська',
        'Horodenkivska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodenkivska'
    },
    {
      'name': 'horodkivska',
      '$kuid': 'fXtKGfiNR',
      'label': [
        'Городківська',
        'Horodkivska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodkivska'
    },
    {
      'name': 'horodnenska',
      '$kuid': 'm2mjiBa3s',
      'label': [
        'Городненська',
        'Horodnenska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodnenska'
    },
    {
      'name': 'horodnianska',
      '$kuid': 'yEQzMS8SJ',
      'label': [
        'Городнянська',
        'Horodnianska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodnianska'
    },
    {
      'name': 'horodnytska',
      '$kuid': 'Ac3bGXd2f',
      'label': [
        'Городницька',
        'Horodnytska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodnytska'
    },
    {
      'name': 'horodotska',
      '$kuid': '6OX6YAvSc',
      'label': [
        'Городоцька',
        'Horodotska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska'
    },
    {
      'name': 'horodotska_2',
      '$kuid': 'kI7j6jwNR',
      'label': [
        'Городоцька',
        'Horodotska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska_2'
    },
    {
      'name': 'horodotska_3',
      '$kuid': 'kgRAlGpbv',
      'label': [
        'Городоцька',
        'Horodotska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska_3'
    },
    {
      'name': 'horodotska_4',
      '$kuid': '8wjiHiSG4',
      'label': [
        'Городоцька',
        'Horodotska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodotska_4'
    },
    {
      'name': 'horodyshchenska',
      '$kuid': '2rOqQCmfm',
      'label': [
        'Городищенська',
        'Horodyshchenska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodyshchenska'
    },
    {
      'name': 'horodyshchenska_2',
      '$kuid': 'x3ze5J99J',
      'label': [
        'Городищенська',
        'Horodyshchenska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'horodyshchenska_2'
    },
    {
      'name': 'horokhivska',
      '$kuid': 'IIlSYBbmn',
      'label': [
        'Горохівська',
        'Horokhivska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'horokhivska'
    },
    {
      'name': 'horokhivska_2',
      '$kuid': 'p69C0FZIn',
      'label': [
        'Горохівська',
        'Horokhivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'horokhivska_2'
    },
    {
      'name': 'horondivska',
      '$kuid': 'dLVkkuye7',
      'label': [
        'Горондівська',
        'Horondivska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'horondivska'
    },
    {
      'name': 'horshchykivska',
      '$kuid': 'WhpThjr6s',
      'label': [
        'Горщиківська',
        'Horshchykivska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'horshchykivska'
    },
    {
      'name': 'hoshchanska',
      '$kuid': '8ijoh9u6l',
      'label': [
        'Гощанська',
        'Hoshchanska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'hoshchanska'
    },
    {
      'name': 'hostomelska',
      '$kuid': 'mXHkKfwkx',
      'label': [
        'Гостомельська',
        'Hostomelska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'hostomelska'
    },
    {
      'name': 'hrabovetsko-dulibivska',
      '$kuid': 'xGjjVuLks',
      'label': [
        'Грабовецько-Дулібівська',
        'Hrabovetsko-Dulibivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrabovetsko-dulibivska'
    },
    {
      'name': 'hradyzka',
      '$kuid': 'g6PgGF8ww',
      'label': [
        'Градизька',
        'Hradyzka'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'hradyzka'
    },
    {
      'name': 'hrebinkivska',
      '$kuid': 'l6Q1dTK94',
      'label': [
        'Гребінківська',
        'Hrebinkivska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrebinkivska'
    },
    {
      'name': 'hrebinkivska_2',
      '$kuid': 's021HMNYw',
      'label': [
        'Гребінківська',
        'Hrebinkivska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrebinkivska_2'
    },
    {
      'name': 'hrechanopodivska',
      '$kuid': 'pxRQkjG36',
      'label': [
        'Гречаноподівська',
        'Hrechanopodivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'hrechanopodivska'
    },
    {
      'name': 'hresivska',
      '$kuid': '4plT9rgoc',
      'label': [
        'Гресівська',
        'Hresivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'hresivska'
    },
    {
      'name': 'hrodivska',
      '$kuid': 'E79DW3cdJ',
      'label': [
        'Гродівська',
        'Hrodivska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrodivska'
    },
    {
      'name': 'hrunska',
      '$kuid': 'ngZKsfawt',
      'label': [
        'Грунська',
        'Hrunska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrunska'
    },
    {
      'name': 'hrushivska',
      '$kuid': 'NI0YMfC1x',
      'label': [
        'Грушівська',
        'Hrushivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrushivska'
    },
    {
      'name': 'hrushivska_2',
      '$kuid': '4fbmWnTye',
      'label': [
        'Грушівська',
        'Hrushivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'hrushivska_2'
    },
    {
      'name': 'hrymailivska',
      '$kuid': 'ouUXVUHdK',
      'label': [
        'Гримайлівська',
        'Hrymailivska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrymailivska'
    },
    {
      'name': 'hryshkovetska',
      '$kuid': '8WLUeUo40',
      'label': [
        'Гришковецька',
        'Hryshkovetska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hryshkovetska'
    },
    {
      'name': 'hryshynska',
      '$kuid': '4qSzBHHA4',
      'label': [
        'Гришинська',
        'Hryshynska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'hryshynska'
    },
    {
      'name': 'hrytsivska',
      '$kuid': 'thG0pBr8x',
      'label': [
        'Грицівська',
        'Hrytsivska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'hrytsivska'
    },
    {
      'name': 'hubynyska',
      '$kuid': 'ECamurI77',
      'label': [
        'Губиниська',
        'Hubynyska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'hubynyska'
    },
    {
      'name': 'hukivska',
      '$kuid': 'Otj8ZhIiR',
      'label': [
        'Гуківська',
        'Hukivska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'hukivska'
    },
    {
      'name': 'huliaipilska',
      '$kuid': 'Htiw3gjWR',
      'label': [
        'Гуляйпільська',
        'Huliaipilska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'huliaipilska'
    },
    {
      'name': 'humenetska',
      '$kuid': 'TVjwo6DZh',
      'label': [
        'Гуменецька',
        'Humenetska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'humenetska'
    },
    {
      'name': 'hurivska',
      '$kuid': 'D94w4tFVA',
      'label': [
        'Гурівська',
        'Hurivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hurivska'
    },
    {
      'name': 'hurzufska',
      '$kuid': 'mCZphRUXK',
      'label': [
        'Гурзуфська',
        'Hurzufska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'hurzufska'
    },
    {
      'name': 'husiatynska',
      '$kuid': '7EGp7qF1o',
      'label': [
        'Гусятинська',
        'Husiatynska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'husiatynska'
    },
    {
      'name': 'hvardiiska',
      '$kuid': '6cBFQfIAp',
      'label': [
        'Гвардійська',
        'Hvardiiska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvardiiska'
    },
    {
      'name': 'hvardiiska_2',
      '$kuid': 'zXH2Qbuw0',
      'label': [
        'Гвардійська',
        'Hvardiiska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvardiiska_2'
    },
    {
      'name': 'hvardiiska_3',
      '$kuid': 'Wk8BpvMgP',
      'label': [
        'Гвардійська',
        'Hvardiiska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvardiiska_3'
    },
    {
      'name': 'hvizdetska',
      '$kuid': 'O0O00V997',
      'label': [
        'Гвіздецька',
        'Hvizdetska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'hvizdetska'
    },
    {
      'name': 'ichnianska',
      '$kuid': 'UVbmK9OwJ',
      'label': [
        'Ічнянська',
        'Ichnianska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'ichnianska'
    },
    {
      'name': 'ilarionivska',
      '$kuid': 'db49rBCZl',
      'label': [
        'Іларіонівська',
        'Ilarionivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ilarionivska'
    },
    {
      'name': 'illichivska',
      '$kuid': 'ecZlBL9oo',
      'label': [
        'Іллічівська',
        'Illichivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'illichivska'
    },
    {
      'name': 'illichivska_2',
      '$kuid': 'NXNLuhEgs',
      'label': [
        'Іллічівська',
        'Illichivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'illichivska_2'
    },
    {
      'name': 'illinetska',
      '$kuid': 'SNd363FMd',
      'label': [
        'Іллінецька',
        'Illinetska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'illinetska'
    },
    {
      'name': 'illinivska',
      '$kuid': 'JaWhckyaL',
      'label': [
        'Іллінівська',
        'Illinivska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'illinivska'
    },
    {
      'name': 'illinska',
      '$kuid': '5ZrOtkSr4',
      'label': [
        'Іллінська',
        'Illinska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'illinska'
    },
    {
      'name': 'ilovaiska',
      '$kuid': 's7o3ChqQ0',
      'label': [
        'Іловайська',
        'Ilovaiska'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'ilovaiska'
    },
    {
      'name': 'inhulska',
      '$kuid': 'BjpkbwBmJ',
      'label': [
        'Інгульська',
        'Inhulska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'inhulska'
    },
    {
      'name': 'irkliivska',
      '$kuid': '28zIrH1JD',
      'label': [
        'Іркліївська',
        'Irkliivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'irkliivska'
    },
    {
      'name': 'irpinska',
      '$kuid': 's2lmZw3bu',
      'label': [
        'Ірпінська',
        'Irpinska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'irpinska'
    },
    {
      'name': 'irshanska',
      '$kuid': 'A3lWeuGar',
      'label': [
        'Іршанська',
        'Irshanska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'irshanska'
    },
    {
      'name': 'irshavska',
      '$kuid': 'hg1YhcK8L',
      'label': [
        'Іршавська',
        'Irshavska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'irshavska'
    },
    {
      'name': 'ishunska',
      '$kuid': '1xb9JniQa',
      'label': [
        'Ішунська',
        'Ishunska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'ishunska'
    },
    {
      'name': 'ivane-pustenska',
      '$kuid': 'JXMB5gD0E',
      'label': [
        'Іване-Пустенська',
        'Ivane-Pustenska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivane-pustenska'
    },
    {
      'name': 'ivanivska',
      '$kuid': 'CHIO0yJ3H',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska'
    },
    {
      'name': 'ivanivska_2',
      '$kuid': 'YiFoKBJyw',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_2'
    },
    {
      'name': 'ivanivska_3',
      '$kuid': 'uZMt8RQfw',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_3'
    },
    {
      'name': 'ivanivska_4',
      '$kuid': 'RanfRW8QP',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_4'
    },
    {
      'name': 'ivanivska_5',
      '$kuid': '26cLJwsz1',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_5'
    },
    {
      'name': 'ivanivska_6',
      '$kuid': 'cBh5ibx1c',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_6'
    },
    {
      'name': 'ivanivska_7',
      '$kuid': 'kCkTeZrlk',
      'label': [
        'Іванівська',
        'Ivanivska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanivska_7'
    },
    {
      'name': 'ivankivska_8',
      '$kuid': 'LxqTvG7Nt',
      'label': [
        'Іваньківська',
        'Ivankivska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivankivska_8'
    },
    {
      'name': 'ivankivska_9',
      '$kuid': 'IwG6UZJ2e',
      'label': [
        'Іванківська',
        'Ivankivska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivankivska_9'
    },
    {
      'name': 'ivano-frankivska_2',
      '$kuid': 'Ax4Vn8SMQ',
      'label': [
        'Івано-Франківська',
        'Ivano-Frankivska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivano-frankivska_2'
    },
    {
      'name': 'ivano-frankivska_3',
      '$kuid': 'PD2nUfru6',
      'label': [
        'Івано-Франківська',
        'Ivano-Frankivska'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivano-frankivska_3'
    },
    {
      'name': 'ivanovetska',
      '$kuid': 'RiOJeSBAI',
      'label': [
        'Івановецька',
        'Ivanovetska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanovetska'
    },
    {
      'name': 'ivanychivska',
      '$kuid': 'tvn8oVNko',
      'label': [
        'Іваничівська',
        'Ivanychivska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ivanychivska'
    },
    {
      'name': 'iziaslavska',
      '$kuid': 'GelKuHwB3',
      'label': [
        'Ізяславська',
        'Iziaslavska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'iziaslavska'
    },
    {
      'name': 'iziumska',
      '$kuid': 'IRiNdliqv',
      'label': [
        'Ізюмська',
        'Iziumska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'iziumska'
    },
    {
      'name': 'izmailska',
      '$kuid': 'WSu11RS9J',
      'label': [
        'Ізмаїльська',
        'Izmailska'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'izmailska'
    },
    {
      'name': 'izobilnenska',
      '$kuid': 'na3teODua',
      'label': [
        'Ізобільненська',
        'Izobilnenska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'izobilnenska'
    },
    {
      'name': 'izobilnenska_2',
      '$kuid': 'lDKNi4tc0',
      'label': [
        'Ізобільненська',
        'Izobilnenska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'izobilnenska_2'
    },
    {
      'name': 'izumrudnivska',
      '$kuid': 'EeEMaHBtm',
      'label': [
        'Ізумруднівська',
        'Izumrudnivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'izumrudnivska'
    },
    {
      'name': 'kadiivska',
      '$kuid': 'oCssSyCV5',
      'label': [
        'Кадіївська',
        'Kadiivska'
      ],
      'raion': 'alchevskyi',
      'list_name': 'hromada',
      '$autovalue': 'kadiivska'
    },
    {
      'name': 'kadubovetska',
      '$kuid': 'ychRfTATF',
      'label': [
        'Кадубовецька',
        'Kadubovetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kadubovetska'
    },
    {
      'name': 'kaharlytska',
      '$kuid': 'VlUYXKtC6',
      'label': [
        'Кагарлицька',
        'Kaharlytska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kaharlytska'
    },
    {
      'name': 'kakhovska',
      '$kuid': 'KhSa02P3I',
      'label': [
        'Каховська',
        'Kakhovska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kakhovska'
    },
    {
      'name': 'kalanchatska',
      '$kuid': 'sJZA7ov0O',
      'label': [
        'Каланчацька',
        'Kalanchatska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalanchatska'
    },
    {
      'name': 'kalchytska',
      '$kuid': 'FNYNgPbWT',
      'label': [
        'Кальчицька',
        'Kalchytska'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalchytska'
    },
    {
      'name': 'kalininska',
      '$kuid': 'eG6y2HRWl',
      'label': [
        'Калінінська',
        'Kalininska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalininska'
    },
    {
      'name': 'kalininska_2',
      '$kuid': 'gghSdeaGm',
      'label': [
        'Калінінська',
        'Kalininska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalininska_2'
    },
    {
      'name': 'kalmiuska',
      '$kuid': 'MXycOPFwx',
      'label': [
        'Кальміуська',
        'Kalmiuska'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalmiuska'
    },
    {
      'name': 'kaluska',
      '$kuid': '17Hc3dDmT',
      'label': [
        'Калуська',
        'Kaluska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'kaluska'
    },
    {
      'name': 'kalynivska',
      '$kuid': 'N8gdy7coo',
      'label': [
        'Калинівська',
        'Kalynivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska'
    },
    {
      'name': 'kalynivska_2',
      '$kuid': 'vTDD8tWq6',
      'label': [
        'Калинівська',
        'Kalynivska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_2'
    },
    {
      'name': 'kalynivska_3',
      '$kuid': 'RnsAYdgaT',
      'label': [
        'Калинівська',
        'Kalynivska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_3'
    },
    {
      'name': 'kalynivska_4',
      '$kuid': 'Mh53ctkmn',
      'label': [
        'Калинівська',
        'Kalynivska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_4'
    },
    {
      'name': 'kalynivska_5',
      '$kuid': 'MMjPC3T7x',
      'label': [
        'Калинівська',
        'Kalynivska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalynivska_5'
    },
    {
      'name': 'kalytianska',
      '$kuid': 'VHaDkQkru',
      'label': [
        'Калитянська',
        'Kalytianska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'kalytianska'
    },
    {
      'name': 'kamianetska',
      '$kuid': 'VcYfly7M6',
      'label': [
        'Кам\'янецька',
        'Kamianetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianetska'
    },
    {
      'name': 'kamianets-podilska',
      '$kuid': 'avUvuWIns',
      'label': [
        'Кам\'янець-Подільська',
        'Kamianets-Podilska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianets-podilska'
    },
    {
      'name': 'kamianka-buzka',
      '$kuid': '3SN8ValIo',
      'label': [
        'Кам\'янка-Бузька',
        'Kamianka-Buzka'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianka-buzka'
    },
    {
      'name': 'kamianomostivska',
      '$kuid': 'v8eGaC94w',
      'label': [
        'Кам\'яномостівська',
        'Kamianomostivska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianomostivska'
    },
    {
      'name': 'kamianopotokivska',
      '$kuid': 'atbpz22JD',
      'label': [
        'Кам\'янопотоківська',
        'Kamianopotokivska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianopotokivska'
    },
    {
      'name': 'kamianska',
      '$kuid': 'KgPoKyQXX',
      'label': [
        'Кам\'янська',
        'Kamianska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska'
    },
    {
      'name': 'kamianska_2',
      '$kuid': 'pCw3EfKic',
      'label': [
        'Кам\'янська',
        'Kamianska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska_2'
    },
    {
      'name': 'kamianska_3',
      '$kuid': 'ygOKrrsnj',
      'label': [
        'Кам\'янська',
        'Kamianska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska_3'
    },
    {
      'name': 'kamianska_4',
      '$kuid': '6NZ1DIcSX',
      'label': [
        'Кам\'янська',
        'Kamianska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamianska_4'
    },
    {
      'name': 'kamiansko-dniprovska',
      '$kuid': 'OGrZ8MRZZ',
      'label': [
        'Кам\'янсько-Дніпровська',
        'Kamiansko-Dniprovska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamiansko-dniprovska'
    },
    {
      'name': 'kamin-kashyrska',
      '$kuid': 'VaDbTwqyw',
      'label': [
        'Камінь-Каширська',
        'Kamin-Kashyrska'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kamin-kashyrska'
    },
    {
      'name': 'kanivska',
      '$kuid': 'XmcNpzNiI',
      'label': [
        'Канівська',
        'Kanivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'kanivska'
    },
    {
      'name': 'kanonytska',
      '$kuid': 'X3cizCKql',
      'label': [
        'Каноницька',
        'Kanonytska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'kanonytska'
    },
    {
      'name': 'karapchivska',
      '$kuid': 'Pxc9ZqgSn',
      'label': [
        'Карапчівська',
        'Karapchivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'karapchivska'
    },
    {
      'name': 'karlivska',
      '$kuid': 'DGZyRotNf',
      'label': [
        'Карлівська',
        'Karlivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'karlivska'
    },
    {
      'name': 'karolino-buhazka',
      '$kuid': 'KBMwFRpLU',
      'label': [
        'Кароліно-Бугазька',
        'Karolino-Buhazka'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'karolino-buhazka'
    },
    {
      'name': 'karpivska',
      '$kuid': 'bW3QNB3vC',
      'label': [
        'Карпівська',
        'Karpivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'karpivska'
    },
    {
      'name': 'kashtanivska',
      '$kuid': 'tBuMTfx1F',
      'label': [
        'Каштанівська',
        'Kashtanivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kashtanivska'
    },
    {
      'name': 'katerynivska',
      '$kuid': 'zaXYtIsRR',
      'label': [
        'Катеринівська',
        'Katerynivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'katerynivska'
    },
    {
      'name': 'katerynopilska',
      '$kuid': '19G84cFOC',
      'label': [
        'Катеринопільська',
        'Katerynopilska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'katerynopilska'
    },
    {
      'name': 'kazankivska',
      '$kuid': 'cMtK7J1Hj',
      'label': [
        'Казанківська',
        'Kazankivska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kazankivska'
    },
    {
      'name': 'kehychivska',
      '$kuid': 'kqUaHcCRE',
      'label': [
        'Кегичівська',
        'Kehychivska'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'kehychivska'
    },
    {
      'name': 'kelmenetska',
      '$kuid': 'Aqe2pkjfl',
      'label': [
        'Кельменецька',
        'Kelmenetska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kelmenetska'
    },
    {
      'name': 'kerchenska',
      '$kuid': '4wy9SvOhb',
      'label': [
        'Керченська',
        'Kerchenska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kerchenska'
    },
    {
      'name': 'keretskivska',
      '$kuid': 'EkvOwEC2Z',
      'label': [
        'Керецьківська',
        'Keretskivska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'keretskivska'
    },
    {
      'name': 'ketrysanivska',
      '$kuid': 'RC6SKfTGv',
      'label': [
        'Кетрисанівська',
        'Ketrysanivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ketrysanivska'
    },
    {
      'name': 'kharkivska_2',
      '$kuid': 'QdixUkWQO',
      'label': [
        'Харківська',
        'Kharkivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kharkivska_2'
    },
    {
      'name': 'khartsyzka',
      '$kuid': 'moXPXeru8',
      'label': [
        'Харцизька',
        'Khartsyzka'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'khartsyzka'
    },
    {
      'name': 'kharytonivska',
      '$kuid': 'THfOmm11Q',
      'label': [
        'Харитонівська',
        'Kharytonivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kharytonivska'
    },
    {
      'name': 'khersonska_2',
      '$kuid': 'npSUcWrvn',
      'label': [
        'Херсонська',
        'Khersonska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'khersonska_2'
    },
    {
      'name': 'khlibodarivska',
      '$kuid': 'nsT9AVG8t',
      'label': [
        'Хлібодарівська',
        'Khlibodarivska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'khlibodarivska'
    },
    {
      'name': 'khmelivska',
      '$kuid': 'wvLqX9e81',
      'label': [
        'Хмелівська',
        'Khmelivska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'khmelivska'
    },
    {
      'name': 'khmelnytska_2',
      '$kuid': 'sbW4yxYm5',
      'label': [
        'Хмельницька',
        'Khmelnytska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'khmelnytska_2'
    },
    {
      'name': 'khmilnytska',
      '$kuid': 'EH8ZSftLk',
      'label': [
        'Хмільницька',
        'Khmilnytska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'khmilnytska'
    },
    {
      'name': 'khodorivska',
      '$kuid': 'eEJ2vws4b',
      'label': [
        'Ходорівська',
        'Khodorivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'khodorivska'
    },
    {
      'name': 'kholmkivska',
      '$kuid': 'OaKWlbjCt',
      'label': [
        'Холмківська',
        'Kholmkivska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'kholmkivska'
    },
    {
      'name': 'kholmynska',
      '$kuid': 'XGmuQlnvt',
      'label': [
        'Холминська',
        'Kholmynska'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kholmynska'
    },
    {
      'name': 'khorolska',
      '$kuid': 'n0qt6I3po',
      'label': [
        'Хорольська',
        'Khorolska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'khorolska'
    },
    {
      'name': 'khoroshivska',
      '$kuid': 'cjXiM2L4E',
      'label': [
        'Хорошівська',
        'Khoroshivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'khoroshivska'
    },
    {
      'name': 'khorostkivska',
      '$kuid': 'eHzRBqYSv',
      'label': [
        'Хоростківська',
        'Khorostkivska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'khorostkivska'
    },
    {
      'name': 'khotinska',
      '$kuid': 'I3SMP4fht',
      'label': [
        'Хотінська',
        'Khotinska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'khotinska'
    },
    {
      'name': 'khotynska',
      '$kuid': 'DY6zvzK2j',
      'label': [
        'Хотинська',
        'Khotynska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'khotynska'
    },
    {
      'name': 'khrestivska',
      '$kuid': 'iEgUNgnvI',
      'label': [
        'Хрестівська',
        'Khrestivska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrestivska'
    },
    {
      'name': 'khrestivska_2',
      '$kuid': '6xfvotQ6Q',
      'label': [
        'Хрестівська',
        'Khrestivska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrestivska_2'
    },
    {
      'name': 'khrustalnenska',
      '$kuid': 'OY1En7zL9',
      'label': [
        'Хрустальненська',
        'Khrustalnenska'
      ],
      'raion': 'rovenkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrustalnenska'
    },
    {
      'name': 'khrystynivska',
      '$kuid': 'd2zmNhU4s',
      'label': [
        'Христинівська',
        'Khrystynivska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'khrystynivska'
    },
    {
      'name': 'khustska',
      '$kuid': '7XuVtXdfG',
      'label': [
        'Хустська',
        'Khustska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'khustska'
    },
    {
      'name': 'khyrivska',
      '$kuid': 'NxzAxzrLt',
      'label': [
        'Хирівська',
        'Khyrivska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'khyrivska'
    },
    {
      'name': 'kiliiska',
      '$kuid': 'GXjPBA1gc',
      'label': [
        'Кілійська',
        'Kiliiska'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'kiliiska'
    },
    {
      'name': 'kindrashivska',
      '$kuid': 'TAmxcQB4U',
      'label': [
        'Кіндрашівська',
        'Kindrashivska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kindrashivska'
    },
    {
      'name': 'kindrativska',
      '$kuid': 'tPeFMHiFe',
      'label': [
        'Кіндратівська',
        'Kindrativska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kindrativska'
    },
    {
      'name': 'kiptivska',
      '$kuid': 'hWcor3O7L',
      'label': [
        'Кіптівська',
        'Kiptivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kiptivska'
    },
    {
      'name': 'kirovska',
      '$kuid': 'ePQMX31Hj',
      'label': [
        'Кіровська',
        'Kirovska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kirovska'
    },
    {
      'name': 'kirovska_2',
      '$kuid': 'VqwSnOnHD',
      'label': [
        'Кіровська',
        'Kirovska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kirovska_2'
    },
    {
      'name': 'kirovska_3',
      '$kuid': 'swS2nn5j1',
      'label': [
        'Кіровська',
        'Kirovska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kirovska_3'
    },
    {
      'name': 'kistochkivska',
      '$kuid': 'hpaz4v7QE',
      'label': [
        'Кісточківська',
        'Kistochkivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'kistochkivska'
    },
    {
      'name': 'kitsmanska',
      '$kuid': 'IaPaPH4ne',
      'label': [
        'Кіцманська',
        'Kitsmanska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kitsmanska'
    },
    {
      'name': 'kivertsivska',
      '$kuid': 'iIcuCPQBA',
      'label': [
        'Ківерцівська',
        'Kivertsivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kivertsivska'
    },
    {
      'name': 'klepyninska',
      '$kuid': 'UuZuEcrZc',
      'label': [
        'Клепинінська',
        'Klepyninska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'klepyninska'
    },
    {
      'name': 'klesivska',
      '$kuid': 'Bkh7Gwhsw',
      'label': [
        'Клесівська',
        'Klesivska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'klesivska'
    },
    {
      'name': 'klevanska',
      '$kuid': 'Ktoqqor97',
      'label': [
        'Клеванська',
        'Klevanska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'klevanska'
    },
    {
      'name': 'klishkovetska',
      '$kuid': 'DAIputbUZ',
      'label': [
        'Клішковецька',
        'Klishkovetska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'klishkovetska'
    },
    {
      'name': 'kobeliatska',
      '$kuid': 'JPRXYRPIS',
      'label': [
        'Кобеляцька',
        'Kobeliatska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kobeliatska'
    },
    {
      'name': 'koblivska',
      '$kuid': 'j7BfqEYNn',
      'label': [
        'Коблівська',
        'Koblivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'koblivska'
    },
    {
      'name': 'kochubeivska',
      '$kuid': 'XYEvyi4Cx',
      'label': [
        'Кочубеївська',
        'Kochubeivska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kochubeivska'
    },
    {
      'name': 'kodymska',
      '$kuid': 'KLKXtzUlL',
      'label': [
        'Кодимська',
        'Kodymska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kodymska'
    },
    {
      'name': 'koktebelska',
      '$kuid': 'FYUlIhvzW',
      'label': [
        'Коктебельська',
        'Koktebelska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'koktebelska'
    },
    {
      'name': 'kolarivska',
      '$kuid': 'w62mHHmBh',
      'label': [
        'Коларівська',
        'Kolarivska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolarivska'
    },
    {
      'name': 'kolchuhynska',
      '$kuid': '5Npr6WZBh',
      'label': [
        'Кольчугинська',
        'Kolchuhynska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolchuhynska'
    },
    {
      'name': 'kolchynska',
      '$kuid': 'gACzrjPcQ',
      'label': [
        'Кольчинська',
        'Kolchynska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolchynska'
    },
    {
      'name': 'kolkivska',
      '$kuid': '5iVWN9XDx',
      'label': [
        'Колківська',
        'Kolkivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolkivska'
    },
    {
      'name': 'kolochavska',
      '$kuid': 'iX1klP4iK',
      'label': [
        'Колочавська',
        'Kolochavska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolochavska'
    },
    {
      'name': 'kolodiazhnenska',
      '$kuid': 'cQvoSrGgz',
      'label': [
        'Колодяжненська',
        'Kolodiazhnenska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolodiazhnenska'
    },
    {
      'name': 'kolodiazianska',
      '$kuid': 'u2vm68qOA',
      'label': [
        'Колодязянська',
        'Kolodiazianska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolodiazianska'
    },
    {
      'name': 'kolomatska',
      '$kuid': 'w8wLXTlcT',
      'label': [
        'Коломацька',
        'Kolomatska'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomatska'
    },
    {
      'name': 'kolomatska_2',
      '$kuid': 'ZuH31xlH6',
      'label': [
        'Коломацька',
        'Kolomatska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomatska_2'
    },
    {
      'name': 'kolomyichyska',
      '$kuid': 'C0SvRlJLz',
      'label': [
        'Коломийчиська',
        'Kolomyichyska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomyichyska'
    },
    {
      'name': 'kolomyiska',
      '$kuid': 'pzhmGpGgR',
      'label': [
        'Коломийська',
        'Kolomyiska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolomyiska'
    },
    {
      'name': 'koltsovska',
      '$kuid': 'EctDhfHo6',
      'label': [
        'Кольцовська',
        'Koltsovska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'koltsovska'
    },
    {
      'name': 'kolyndianska',
      '$kuid': 'wttysIBA7',
      'label': [
        'Колиндянська',
        'Kolyndianska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kolyndianska'
    },
    {
      'name': 'komarivska',
      '$kuid': 'xVm10XFKq',
      'label': [
        'Комарівська',
        'Komarivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'komarivska'
    },
    {
      'name': 'komarnivska',
      '$kuid': '1AHEvIBba',
      'label': [
        'Комарнівська',
        'Komarnivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'komarnivska'
    },
    {
      'name': 'komarska',
      '$kuid': 'J9kVLCme1',
      'label': [
        'Комарська',
        'Komarska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'komarska'
    },
    {
      'name': 'kompaniivska',
      '$kuid': 'wD82TN4ou',
      'label': [
        'Компаніївська',
        'Kompaniivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'kompaniivska'
    },
    {
      'name': 'komyshanska',
      '$kuid': 'C8WlBxpyu',
      'label': [
        'Комишанська',
        'Komyshanska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'komyshanska'
    },
    {
      'name': 'komyshnianska',
      '$kuid': 'dlL5BksmZ',
      'label': [
        'Комишнянська',
        'Komyshnianska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'komyshnianska'
    },
    {
      'name': 'komyshuvaska',
      '$kuid': 'UiZoGBbdO',
      'label': [
        'Комишуваська',
        'Komyshuvaska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'komyshuvaska'
    },
    {
      'name': 'komysh-zorianska',
      '$kuid': 'MDonnpN4E',
      'label': [
        'Комиш-Зорянська',
        'Komysh-Zorianska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'komysh-zorianska'
    },
    {
      'name': 'koniatynska',
      '$kuid': 'Uq4GEF66c',
      'label': [
        'Конятинська',
        'Koniatynska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'koniatynska'
    },
    {
      'name': 'konoplianska',
      '$kuid': 'LmYwHxu7n',
      'label': [
        'Коноплянська',
        'Konoplianska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'konoplianska'
    },
    {
      'name': 'konotopska',
      '$kuid': '1yLmzu41j',
      'label': [
        'Конотопська',
        'Konotopska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'konotopska'
    },
    {
      'name': 'kopachivska',
      '$kuid': 'FMgmEP4NL',
      'label': [
        'Копачівська',
        'Kopachivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kopachivska'
    },
    {
      'name': 'kopaihorodska',
      '$kuid': '9Gz2u0kCf',
      'label': [
        'Копайгородська',
        'Kopaihorodska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kopaihorodska'
    },
    {
      'name': 'kopychynetska',
      '$kuid': 'nxaLVOsEq',
      'label': [
        'Копичинецька',
        'Kopychynetska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kopychynetska'
    },
    {
      'name': 'koreizka',
      '$kuid': 'zGpzDxzBX',
      'label': [
        'Кореїзька',
        'Koreizka'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'koreizka'
    },
    {
      'name': 'koretska',
      '$kuid': '84cpWl8Dg',
      'label': [
        'Корецька',
        'Koretska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'koretska'
    },
    {
      'name': 'koriukivska',
      '$kuid': 'A26GGRJ4G',
      'label': [
        'Корюківська',
        'Koriukivska'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'koriukivska'
    },
    {
      'name': 'kormivska',
      '$kuid': '6xTs3TdJa',
      'label': [
        'Кормівська',
        'Kormivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kormivska'
    },
    {
      'name': 'kornynska',
      '$kuid': 'QeDCzS1SS',
      'label': [
        'Корнинська',
        'Kornynska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'kornynska'
    },
    {
      'name': 'kornynska_2',
      '$kuid': 'pCIexPotm',
      'label': [
        'Корнинська',
        'Kornynska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kornynska_2'
    },
    {
      'name': 'korolivska',
      '$kuid': 'yRXCoOu9h',
      'label': [
        'Королівська',
        'Korolivska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'korolivska'
    },
    {
      'name': 'koropetska',
      '$kuid': 'WtoYsQp1N',
      'label': [
        'Коропецька',
        'Koropetska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'koropetska'
    },
    {
      'name': 'koropska',
      '$kuid': '06zNXIHYE',
      'label': [
        'Коропська',
        'Koropska'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'koropska'
    },
    {
      'name': 'korostenska',
      '$kuid': '436qGlZ3x',
      'label': [
        'Коростенська',
        'Korostenska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'korostenska'
    },
    {
      'name': 'korostyshivska',
      '$kuid': 'zhVnjXVpW',
      'label': [
        'Коростишівська',
        'Korostyshivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'korostyshivska'
    },
    {
      'name': 'korovynska',
      '$kuid': 'EVj9IjtYN',
      'label': [
        'Коровинська',
        'Korovynska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'korovynska'
    },
    {
      'name': 'korshivska',
      '$kuid': 'F57k0C9H7',
      'label': [
        'Коршівська',
        'Korshivska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'korshivska'
    },
    {
      'name': 'korsun-shevchenkivska',
      '$kuid': 'iIiFFG7rl',
      'label': [
        'Корсунь-Шевченківська',
        'Korsun-Shevchenkivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'korsun-shevchenkivska'
    },
    {
      'name': 'kosivska',
      '$kuid': 'tFPrIYnDM',
      'label': [
        'Косівська',
        'Kosivska'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kosivska'
    },
    {
      'name': 'kosmatska',
      '$kuid': 'RTP0J59Aq',
      'label': [
        'Космацька',
        'Kosmatska'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kosmatska'
    },
    {
      'name': 'kosonska',
      '$kuid': 'ysLr8oE68',
      'label': [
        'Косоньська',
        'Kosonska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kosonska'
    },
    {
      'name': 'kostiantynivska',
      '$kuid': 'M0FuggfKS',
      'label': [
        'Костянтинівська',
        'Kostiantynivska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska'
    },
    {
      'name': 'kostiantynivska_2',
      '$kuid': '0nspj96e1',
      'label': [
        'Костянтинівська',
        'Kostiantynivska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska_2'
    },
    {
      'name': 'kostiantynivska_3',
      '$kuid': 'FrGClMqKy',
      'label': [
        'Костянтинівська',
        'Kostiantynivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska_3'
    },
    {
      'name': 'kostiantynivska_4',
      '$kuid': 'PP1BjxYFd',
      'label': [
        'Костянтинівська',
        'Kostiantynivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostiantynivska_4'
    },
    {
      'name': 'kostopilska',
      '$kuid': 'eArzVBXLh',
      'label': [
        'Костопільська',
        'Kostopilska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostopilska'
    },
    {
      'name': 'kostrynska',
      '$kuid': 'Zf5FcDpdg',
      'label': [
        'Костринська',
        'Kostrynska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostrynska'
    },
    {
      'name': 'kostryzhivska',
      '$kuid': 'BUeWxnWml',
      'label': [
        'Кострижівська',
        'Kostryzhivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kostryzhivska'
    },
    {
      'name': 'kotelevska',
      '$kuid': 'kAFDpY9AT',
      'label': [
        'Котелевська',
        'Kotelevska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'kotelevska'
    },
    {
      'name': 'kotelnykivska',
      '$kuid': 'LrNNa9NUE',
      'label': [
        'Котельниківська',
        'Kotelnykivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kotelnykivska'
    },
    {
      'name': 'kotsiubynska',
      '$kuid': 'zyAjtn6U1',
      'label': [
        'Коцюбинська',
        'Kotsiubynska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'kotsiubynska'
    },
    {
      'name': 'kovalivska',
      '$kuid': 'dvK56lceC',
      'label': [
        'Ковалівська',
        'Kovalivska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kovalivska'
    },
    {
      'name': 'kovelska',
      '$kuid': 'nwIPrzKuh',
      'label': [
        'Ковельська',
        'Kovelska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'kovelska'
    },
    {
      'name': 'kovylnivska',
      '$kuid': 'PzRBztfbi',
      'label': [
        'Ковильнівська',
        'Kovylnivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'kovylnivska'
    },
    {
      'name': 'kozeletska',
      '$kuid': 'ZvdQilCLw',
      'label': [
        'Козелецька',
        'Kozeletska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozeletska'
    },
    {
      'name': 'kozelshchynska',
      '$kuid': 'Fb4kgpQQl',
      'label': [
        'Козельщинська',
        'Kozelshchynska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozelshchynska'
    },
    {
      'name': 'kozhanska',
      '$kuid': 'at6JcatFy',
      'label': [
        'Кожанська',
        'Kozhanska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozhanska'
    },
    {
      'name': 'koziatynska',
      '$kuid': 'fo9bp1WU1',
      'label': [
        'Козятинська',
        'Koziatynska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'koziatynska'
    },
    {
      'name': 'kozivska',
      '$kuid': 'uPkNiIH0E',
      'label': [
        'Козівська',
        'Kozivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozivska'
    },
    {
      'name': 'kozivska_2',
      '$kuid': 'B47ADvQaq',
      'label': [
        'Козівська',
        'Kozivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozivska_2'
    },
    {
      'name': 'kozlivska',
      '$kuid': 'ArJB5skYj',
      'label': [
        'Козлівська',
        'Kozlivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozlivska'
    },
    {
      'name': 'kozynska',
      '$kuid': 'u4UinpwSO',
      'label': [
        'Козинська',
        'Kozynska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozynska'
    },
    {
      'name': 'kozynska_3',
      '$kuid': 'uslENJpIv',
      'label': [
        'Козинська',
        'Kozynska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kozynska_3'
    },
    {
      'name': 'krainenska',
      '$kuid': 'pmyQkcrYe',
      'label': [
        'Крайненська',
        'Krainenska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krainenska'
    },
    {
      'name': 'kramatorska',
      '$kuid': 'r1sUNVwcP',
      'label': [
        'Краматорська',
        'Kramatorska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'kramatorska'
    },
    {
      'name': 'krasnenska',
      '$kuid': 'IyYFZws2F',
      'label': [
        'Красненська',
        'Krasnenska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnenska'
    },
    {
      'name': 'krasnoarmiiska',
      '$kuid': 'qMjR12CyQ',
      'label': [
        'Красноармійська',
        'Krasnoarmiiska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoarmiiska'
    },
    {
      'name': 'krasnoflotska',
      '$kuid': 'rVRKUbbin',
      'label': [
        'Краснофлотська',
        'Krasnoflotska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoflotska'
    },
    {
      'name': 'krasnohirska',
      '$kuid': 'XWNfpkN3q',
      'label': [
        'Красногірська',
        'Krasnohirska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohirska'
    },
    {
      'name': 'krasnohradska',
      '$kuid': 'AnRh38gLT',
      'label': [
        'Красноградська',
        'Krasnohradska'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohradska'
    },
    {
      'name': 'krasnohvardiiska',
      '$kuid': 'MmWvth17Q',
      'label': [
        'Красногвардійська',
        'Krasnohvardiiska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohvardiiska'
    },
    {
      'name': 'krasnohvardiiska_2',
      '$kuid': 'Y5RQECCuE',
      'label': [
        'Красногвардійська',
        'Krasnohvardiiska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnohvardiiska_2'
    },
    {
      'name': 'krasnoiarska',
      '$kuid': 'cM1V6YlAb',
      'label': [
        'Красноярська',
        'Krasnoiarska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoiarska'
    },
    {
      'name': 'krasnoilska',
      '$kuid': '3gMQDemzq',
      'label': [
        'Красноїльська',
        'Krasnoilska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoilska'
    },
    {
      'name': 'krasnokutska',
      '$kuid': 'uN2MWt41M',
      'label': [
        'Краснокутська',
        'Krasnokutska'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnokutska'
    },
    {
      'name': 'krasnolutska',
      '$kuid': 'YDbv2yMjg',
      'label': [
        'Краснолуцька',
        'Krasnolutska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnolutska'
    },
    {
      'name': 'krasnomatska',
      '$kuid': 'KROsYFoH8',
      'label': [
        'Красномацька',
        'Krasnomatska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnomatska'
    },
    {
      'name': 'krasnoperekopska',
      '$kuid': '8NWb9V7Rw',
      'label': [
        'Красноперекопська',
        'Krasnoperekopska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoperekopska'
    },
    {
      'name': 'krasnopilska',
      '$kuid': 'HB1BsH2ba',
      'label': [
        'Краснопільська',
        'Krasnopilska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopilska'
    },
    {
      'name': 'krasnopilska_2',
      '$kuid': 'jwfoqfskq',
      'label': [
        'Краснопільська',
        'Krasnopilska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopilska_2'
    },
    {
      'name': 'krasnopilska_3',
      '$kuid': 'as4Aa8A2d',
      'label': [
        'Краснопільська',
        'Krasnopilska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopilska_3'
    },
    {
      'name': 'krasnopolianska',
      '$kuid': '1weYvNGyc',
      'label': [
        'Краснополянська',
        'Krasnopolianska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnopolianska'
    },
    {
      'name': 'krasnorichenska',
      '$kuid': 'hmpIpx1Yw',
      'label': [
        'Красноріченська',
        'Krasnorichenska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnorichenska'
    },
    {
      'name': 'krasnosilska',
      '$kuid': 'z8qlAgaNA',
      'label': [
        'Красносільська',
        'Krasnosilska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnosilska'
    },
    {
      'name': 'krasnoznamianska',
      '$kuid': 'ZI2YjCau7',
      'label': [
        'Краснознам\'янська',
        'Krasnoznamianska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasnoznamianska'
    },
    {
      'name': 'krasylivska',
      '$kuid': 'osCO3zYDV',
      'label': [
        'Красилівська',
        'Krasylivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'krasylivska'
    },
    {
      'name': 'kremenchutska',
      '$kuid': 'nU5bslJLE',
      'label': [
        'Кременчуцька',
        'Kremenchutska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'kremenchutska'
    },
    {
      'name': 'kremenetska',
      '$kuid': 'APvPLh0c3',
      'label': [
        'Кременецька',
        'Kremenetska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kremenetska'
    },
    {
      'name': 'kreminska',
      '$kuid': 'GPREvQhE2',
      'label': [
        'Кремінська',
        'Kreminska'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'kreminska'
    },
    {
      'name': 'krestianivska',
      '$kuid': 'loRfItm9g',
      'label': [
        'Крестянівська',
        'Krestianivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'krestianivska'
    },
    {
      'name': 'krolevetska',
      '$kuid': 'hQe29cb8f',
      'label': [
        'Кролевецька',
        'Krolevetska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'krolevetska'
    },
    {
      'name': 'kropyvnytskyi_2',
      '$kuid': 'D98JljebT',
      'label': [
        'Кропивницька',
        'Kropyvnytskyi'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'kropyvnytskyi_2'
    },
    {
      'name': 'krupetska',
      '$kuid': 'DLY4Ywd9e',
      'label': [
        'Крупецька',
        'Krupetska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'krupetska'
    },
    {
      'name': 'krupetska_2',
      '$kuid': 'JoeKP6p3F',
      'label': [
        'Крупецька',
        'Krupetska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'krupetska_2'
    },
    {
      'name': 'krutivska',
      '$kuid': 'do2zCi5Z2',
      'label': [
        'Крутівська',
        'Krutivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'krutivska'
    },
    {
      'name': 'krymkivska',
      '$kuid': 'HnV97os0s',
      'label': [
        'Кримківська',
        'Krymkivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krymkivska'
    },
    {
      'name': 'krymska',
      '$kuid': 'Lbkahcaxp',
      'label': [
        'Кримська',
        'Krymska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'krymska'
    },
    {
      'name': 'krymskorozivska',
      '$kuid': '3dcYQl6cE',
      'label': [
        'Кримськорозівська',
        'Krymskorozivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'krymskorozivska'
    },
    {
      'name': 'krynychanska',
      '$kuid': 'C3xox9lDH',
      'label': [
        'Криничанська',
        'Krynychanska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'krynychanska'
    },
    {
      'name': 'krynychnenska',
      '$kuid': '1dbkHdzM0',
      'label': [
        'Криничненська',
        'Krynychnenska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'krynychnenska'
    },
    {
      'name': 'krynychnenska_2',
      '$kuid': 'NlzuMYl3k',
      'label': [
        'Криничненська',
        'Krynychnenska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'krynychnenska_2'
    },
    {
      'name': 'kryvoozerska',
      '$kuid': 'Q30ntSKdu',
      'label': [
        'Кривоозерська',
        'Kryvoozerska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kryvoozerska'
    },
    {
      'name': 'kryvorizka',
      '$kuid': '0ElHDWjMg',
      'label': [
        'Криворізька',
        'Kryvorizka'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'kryvorizka'
    },
    {
      'name': 'kryvorizka_2',
      '$kuid': 'ZtsaIgd0I',
      'label': [
        'Криворізька',
        'Kryvorizka'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kryvorizka_2'
    },
    {
      'name': 'kryzhopilska',
      '$kuid': 'FPfZmuU1p',
      'label': [
        'Крижопільська',
        'Kryzhopilska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kryzhopilska'
    },
    {
      'name': 'kubeiska',
      '$kuid': '0AKYTpMS3',
      'label': [
        'Кубейська',
        'Kubeiska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'kubeiska'
    },
    {
      'name': 'kuialnytska',
      '$kuid': '8CHvARgm0',
      'label': [
        'Куяльницька',
        'Kuialnytska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kuialnytska'
    },
    {
      'name': 'kuibyshevska',
      '$kuid': 'ZljsBakkX',
      'label': [
        'Куйбишевська',
        'Kuibyshevska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'kuibyshevska'
    },
    {
      'name': 'kukushkinska',
      '$kuid': 'Jy7TPwXbF',
      'label': [
        'Кукушкінська',
        'Kukushkinska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'kukushkinska'
    },
    {
      'name': 'kulevchanska',
      '$kuid': 'OP6TKqagS',
      'label': [
        'Кулевчанська',
        'Kulevchanska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kulevchanska'
    },
    {
      'name': 'kulykivska',
      '$kuid': 'QGXh2bd5J',
      'label': [
        'Куликівська',
        'Kulykivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kulykivska'
    },
    {
      'name': 'kulykivska_2',
      '$kuid': 'j1hMPfxLO',
      'label': [
        'Куликівська',
        'Kulykivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kulykivska_2'
    },
    {
      'name': 'kunievska',
      '$kuid': 'f24N08HEj',
      'label': [
        'Куньєвська',
        'Kunievska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'kunievska'
    },
    {
      'name': 'kunkivska',
      '$kuid': 'uDw9td3Lo',
      'label': [
        'Кунківська',
        'Kunkivska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'kunkivska'
    },
    {
      'name': 'kupchynetska',
      '$kuid': 'Kb2dztXGH',
      'label': [
        'Купчинецька',
        'Kupchynetska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kupchynetska'
    },
    {
      'name': 'kupianska',
      '$kuid': '5WTeuIR78',
      'label': [
        'Куп\'янська',
        'Kupianska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kupianska'
    },
    {
      'name': 'kurakhivska',
      '$kuid': 'Bpxrvb5Ce',
      'label': [
        'Курахівська',
        'Kurakhivska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurakhivska'
    },
    {
      'name': 'kurisovska',
      '$kuid': 'Lkf1ZYzjM',
      'label': [
        'Курісовська',
        'Kurisovska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurisovska'
    },
    {
      'name': 'kurnenska',
      '$kuid': 'zbBfiqzFM',
      'label': [
        'Курненська',
        'Kurnenska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurnenska'
    },
    {
      'name': 'kurska',
      '$kuid': 'F23UH2DUd',
      'label': [
        'Курська',
        'Kurska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurska'
    },
    {
      'name': 'kurylivska',
      '$kuid': 'VMPbduPLB',
      'label': [
        'Курилівська',
        'Kurylivska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'kurylivska'
    },
    {
      'name': 'kushuhumska',
      '$kuid': 'XM8t9bc3M',
      'label': [
        'Кушугумська',
        'Kushuhumska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'kushuhumska'
    },
    {
      'name': 'kutska',
      '$kuid': 'JT9VizNyo',
      'label': [
        'Кутська',
        'Kutska'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kutska'
    },
    {
      'name': 'kutsurubska',
      '$kuid': 'MAPObQmc6',
      'label': [
        'Куцурубська',
        'Kutsurubska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kutsurubska'
    },
    {
      'name': 'kvitneva',
      '$kuid': 'OiqlMUBBC',
      'label': [
        'Квітнева',
        'Kvitneva'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kvitneva'
    },
    {
      'name': 'kyinska',
      '$kuid': 'WWLLanhbG',
      'label': [
        'Киїнська',
        'Kyinska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyinska'
    },
    {
      'name': 'kyivska_2',
      '$kuid': '9faZ180ko',
      'label': [
        'Київська',
        'Kyivska'
      ],
      'raion': 'kyivska',
      'list_name': 'hromada',
      '$autovalue': 'kyivska_2'
    },
    {
      'name': 'kyrykivska',
      '$kuid': 'cpe648Jb8',
      'label': [
        'Кириківська',
        'Kyrykivska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyrykivska'
    },
    {
      'name': 'kyrylivska',
      '$kuid': 'jAPCICZzq',
      'label': [
        'Кирилівська',
        'Kyrylivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyrylivska'
    },
    {
      'name': 'kyselivska',
      '$kuid': 'Pcl1WcRxD',
      'label': [
        'Киселівська',
        'Kyselivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'kyselivska'
    },
    {
      'name': 'kytaihorodska',
      '$kuid': 'vV07DXIG2',
      'label': [
        'Китайгородська',
        'Kytaihorodska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'kytaihorodska'
    },
    {
      'name': 'kytaihorodska_2',
      '$kuid': 'E15xMsZQJ',
      'label': [
        'Китайгородська',
        'Kytaihorodska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'kytaihorodska_2'
    },
    {
      'name': 'ladanska',
      '$kuid': 'xLmL9Ra6W',
      'label': [
        'Ладанська',
        'Ladanska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'ladanska'
    },
    {
      'name': 'ladyzhynska',
      '$kuid': 'IxKcpIVFX',
      'label': [
        'Ладижинська',
        'Ladyzhynska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'ladyzhynska'
    },
    {
      'name': 'ladyzhynska_2',
      '$kuid': 'LCCOo0eaH',
      'label': [
        'Ладижинська',
        'Ladyzhynska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ladyzhynska_2'
    },
    {
      'name': 'lanchynska',
      '$kuid': '7K1xSrh1l',
      'label': [
        'Ланчинська',
        'Lanchynska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'lanchynska'
    },
    {
      'name': 'lannivska',
      '$kuid': 'Jl6L0h27b',
      'label': [
        'Ланнівська',
        'Lannivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'lannivska'
    },
    {
      'name': 'lanovetska',
      '$kuid': 'jb5YsHZLx',
      'label': [
        'Лановецька',
        'Lanovetska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'lanovetska'
    },
    {
      'name': 'lazurnenska',
      '$kuid': 's4qZ2j3kG',
      'label': [
        'Лазурненська',
        'Lazurnenska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'lazurnenska'
    },
    {
      'name': 'lebedynska',
      '$kuid': '69wWGJ0fA',
      'label': [
        'Лебединська',
        'Lebedynska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'lebedynska'
    },
    {
      'name': 'leninska',
      '$kuid': 'Ux9V3JC32',
      'label': [
        'Ленінська',
        'Leninska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'leninska'
    },
    {
      'name': 'leninska_2',
      '$kuid': 'VdZYpIj5Q',
      'label': [
        'Ленінська',
        'Leninska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'leninska_2'
    },
    {
      'name': 'leninska_3',
      '$kuid': '1R1tXg3EH',
      'label': [
        'Ленінська',
        'Leninska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'leninska_3'
    },
    {
      'name': 'lenkovetska',
      '$kuid': 'TomkAJ77B',
      'label': [
        'Ленковецька',
        'Lenkovetska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lenkovetska'
    },
    {
      'name': 'leskivska',
      '$kuid': '1ndBsxQgK',
      'label': [
        'Леськівська',
        'Leskivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'leskivska'
    },
    {
      'name': 'letychivska',
      '$kuid': 'OOynFMXtG',
      'label': [
        'Летичівська',
        'Letychivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'letychivska'
    },
    {
      'name': 'lhovska',
      '$kuid': 'EMBvCOA0d',
      'label': [
        'Льговська',
        'Lhovska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'lhovska'
    },
    {
      'name': 'liashkivska',
      '$kuid': 'N2KLhvsfh',
      'label': [
        'Ляшківська',
        'Liashkivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'liashkivska'
    },
    {
      'name': 'lipliavska',
      '$kuid': 'zeLVcreyU',
      'label': [
        'Ліплявська',
        'Lipliavska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'lipliavska'
    },
    {
      'name': 'lisnivska',
      '$kuid': 'INva2TXxH',
      'label': [
        'Ліснівська',
        'Lisnivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'lisnivska'
    },
    {
      'name': 'lisovohrynivetska',
      '$kuid': 'FnZmNzhmw',
      'label': [
        'Лісовогринівецька',
        'Lisovohrynivetska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'lisovohrynivetska'
    },
    {
      'name': 'litynska',
      '$kuid': 'FxQgNG1cK',
      'label': [
        'Літинська',
        'Litynska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'litynska'
    },
    {
      'name': 'liubarska',
      '$kuid': 'SagddaKhs',
      'label': [
        'Любарська',
        'Liubarska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubarska'
    },
    {
      'name': 'liubashivska',
      '$kuid': 'Ut8uiWcwY',
      'label': [
        'Любашівська',
        'Liubashivska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubashivska'
    },
    {
      'name': 'liubeshivska',
      '$kuid': 'yLgzk6sRo',
      'label': [
        'Любешівська',
        'Liubeshivska'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubeshivska'
    },
    {
      'name': 'liubetska',
      '$kuid': 'Ks1uzWoBz',
      'label': [
        'Любецька',
        'Liubetska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubetska'
    },
    {
      'name': 'liublynetska',
      '$kuid': 'NS445SAS9',
      'label': [
        'Люблинецька',
        'Liublynetska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'liublynetska'
    },
    {
      'name': 'liubomlska',
      '$kuid': 'NbNe2Xq0I',
      'label': [
        'Любомльська',
        'Liubomlska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubomlska'
    },
    {
      'name': 'liubotynska',
      '$kuid': 'jjpzCB1N9',
      'label': [
        'Люботинська',
        'Liubotynska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubotynska'
    },
    {
      'name': 'liubymivska',
      '$kuid': 'pYGAl77yf',
      'label': [
        'Любимівська',
        'Liubymivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubymivska'
    },
    {
      'name': 'liubymivska_2',
      '$kuid': '6RH1P3Tcp',
      'label': [
        'Любимівська',
        'Liubymivska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'liubymivska_2'
    },
    {
      'name': 'liutenska',
      '$kuid': 'Rzqnc3zZG',
      'label': [
        'Лютенська',
        'Liutenska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'liutenska'
    },
    {
      'name': 'livadiiska',
      '$kuid': 'hhx1R1Q5m',
      'label': [
        'Лівадійська',
        'Livadiiska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'livadiiska'
    },
    {
      'name': 'livynetska',
      '$kuid': '338tm8tZL',
      'label': [
        'Лівинецька',
        'Livynetska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'livynetska'
    },
    {
      'name': 'lobanivska',
      '$kuid': 'OV4jmuaPM',
      'label': [
        'Лобанівська',
        'Lobanivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'lobanivska'
    },
    {
      'name': 'lokachynska',
      '$kuid': 'EHeySNmt0',
      'label': [
        'Локачинська',
        'Lokachynska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'lokachynska'
    },
    {
      'name': 'lokhvytska',
      '$kuid': 'nJ4UN0cvq',
      'label': [
        'Лохвицька',
        'Lokhvytska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'lokhvytska'
    },
    {
      'name': 'loknytska',
      '$kuid': 'lsT3zwyxh',
      'label': [
        'Локницька',
        'Loknytska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'loknytska'
    },
    {
      'name': 'lopatynska',
      '$kuid': '8Tx5tXj9f',
      'label': [
        'Лопатинська',
        'Lopatynska'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'lopatynska'
    },
    {
      'name': 'lopushnenska',
      '$kuid': 'ARLbdopPu',
      'label': [
        'Лопушненська',
        'Lopushnenska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'lopushnenska'
    },
    {
      'name': 'losynivska',
      '$kuid': 'EVZUhsDIC',
      'label': [
        'Лосинівська',
        'Losynivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'losynivska'
    },
    {
      'name': 'lozivska',
      '$kuid': 'zeTN5tCpB',
      'label': [
        'Лозівська',
        'Lozivska'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lozivska'
    },
    {
      'name': 'lozno-oleksandrivska',
      '$kuid': 'zOOKsxRVX',
      'label': [
        'Лозно-Олександрівська',
        'Lozno-Oleksandrivska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'lozno-oleksandrivska'
    },
    {
      'name': 'lozuvatska',
      '$kuid': '7kbQ7FKXc',
      'label': [
        'Лозуватська',
        'Lozuvatska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'lozuvatska'
    },
    {
      'name': 'lubenska',
      '$kuid': 'g6aZiW3Ms',
      'label': [
        'Лубенська',
        'Lubenska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'lubenska'
    },
    {
      'name': 'luchystivska',
      '$kuid': 'oyTBhMXPl',
      'label': [
        'Лучистівська',
        'Luchystivska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'luchystivska'
    },
    {
      'name': 'luhanska_2',
      '$kuid': 'UfMrByzjs',
      'label': [
        'Луганська',
        'Luhanska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhanska_2'
    },
    {
      'name': 'luhanska_3',
      '$kuid': '04wJb1aRh',
      'label': [
        'Луганська',
        'Luhanska'
      ],
      'raion': 'luhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhanska_3'
    },
    {
      'name': 'luhivska',
      '$kuid': 'Ex9eR09Ym',
      'label': [
        'Лугівська',
        'Luhivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhivska'
    },
    {
      'name': 'luhynska',
      '$kuid': '67NaQW1yM',
      'label': [
        'Лугинська',
        'Luhynska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'luhynska'
    },
    {
      'name': 'luka-meleshkivska',
      '$kuid': '8crVJ12vO',
      'label': [
        'Лука-Мелешківська',
        'Luka-Meleshkivska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'luka-meleshkivska'
    },
    {
      'name': 'lukivska',
      '$kuid': 'hbCgaigE3',
      'label': [
        'Луківська',
        'Lukivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'lukivska'
    },
    {
      'name': 'lutska',
      '$kuid': 'mh7jkBgHf',
      'label': [
        'Луцька',
        'Lutska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'lutska'
    },
    {
      'name': 'lutuhynska',
      '$kuid': 'gDsB1IuWO',
      'label': [
        'Лутугинська',
        'Lutuhynska'
      ],
      'raion': 'luhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'lutuhynska'
    },
    {
      'name': 'lvivska_2',
      '$kuid': 'TzUhOqYEv',
      'label': [
        'Львівська',
        'Lvivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lvivska_2'
    },
    {
      'name': 'lychkivska',
      '$kuid': 'tDnPADChb',
      'label': [
        'Личківська',
        'Lychkivska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'lychkivska'
    },
    {
      'name': 'lykhivska',
      '$kuid': 'tmYS4Xd8L',
      'label': [
        'Лихівська',
        'Lykhivska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'lykhivska'
    },
    {
      'name': 'lymanska',
      '$kuid': 'szTdx73RB',
      'label': [
        'Лиманська',
        'Lymanska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'lymanska'
    },
    {
      'name': 'lymanska_2',
      '$kuid': 'MPQaSCuOZ',
      'label': [
        'Лиманська',
        'Lymanska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'lymanska_2'
    },
    {
      'name': 'lymanska_3',
      '$kuid': 'pvZ336mkX',
      'label': [
        'Лиманська',
        'Lymanska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'lymanska_3'
    },
    {
      'name': 'lynovytska',
      '$kuid': 'NogmYPqa8',
      'label': [
        'Линовицька',
        'Lynovytska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'lynovytska'
    },
    {
      'name': 'lypetska',
      '$kuid': 'UjTshRNaZ',
      'label': [
        'Липецька',
        'Lypetska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypetska'
    },
    {
      'name': 'lypianska',
      '$kuid': 'QwZ6iORat',
      'label': [
        'Лип\'янська',
        'Lypianska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypianska'
    },
    {
      'name': 'lypovetska',
      '$kuid': 'KkauL1LQJ',
      'label': [
        'Липовецька',
        'Lypovetska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypovetska'
    },
    {
      'name': 'lypovodolynska',
      '$kuid': 'e5W8kyf9R',
      'label': [
        'Липоводолинська',
        'Lypovodolynska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'lypovodolynska'
    },
    {
      'name': 'lysetska',
      '$kuid': 'j66Idi3wU',
      'label': [
        'Лисецька',
        'Lysetska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'lysetska'
    },
    {
      'name': 'lysianska',
      '$kuid': 'nc728mfb4',
      'label': [
        'Лисянська',
        'Lysianska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'lysianska'
    },
    {
      'name': 'lystvynska',
      '$kuid': 'vR87M8fxr',
      'label': [
        'Листвинська',
        'Lystvynska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'lystvynska'
    },
    {
      'name': 'lysychanska',
      '$kuid': 'NqdIE08NC',
      'label': [
        'Лисичанська',
        'Lysychanska'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'lysychanska'
    },
    {
      'name': 'lytovezka',
      '$kuid': 'OTmYkGppo',
      'label': [
        'Литовезька',
        'Lytovezka'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'lytovezka'
    },
    {
      'name': 'machukhivska',
      '$kuid': '8OVynFVo1',
      'label': [
        'Мачухівська',
        'Machukhivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'machukhivska'
    },
    {
      'name': 'mahalska',
      '$kuid': 'p0UfNzEHa',
      'label': [
        'Магальська',
        'Mahalska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'mahalska'
    },
    {
      'name': 'mahazynska',
      '$kuid': 'WMQwNrDzf',
      'label': [
        'Магазинська',
        'Mahazynska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'mahazynska'
    },
    {
      'name': 'mahdalynivska',
      '$kuid': 'QnIZq8piq',
      'label': [
        'Магдалинівська',
        'Mahdalynivska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mahdalynivska'
    },
    {
      'name': 'maiakivska',
      '$kuid': 'tUWVxCUJH',
      'label': [
        'Маяківська',
        'Maiakivska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'maiakivska'
    },
    {
      'name': 'maiska',
      '$kuid': '86z9gHmxj',
      'label': [
        'Майська',
        'Maiska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'maiska'
    },
    {
      'name': 'makarivska',
      '$kuid': 'oY88LeAXA',
      'label': [
        'Макарівська',
        'Makarivska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'makarivska'
    },
    {
      'name': 'makhnivska',
      '$kuid': 'oWn6rEpHh',
      'label': [
        'Махнівська',
        'Makhnivska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'makhnivska'
    },
    {
      'name': 'makiivska',
      '$kuid': 'PHOW26Guj',
      'label': [
        'Макіївська',
        'Makiivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'makiivska'
    },
    {
      'name': 'makiivska_2',
      '$kuid': 'irhMMcGCI',
      'label': [
        'Макіївська',
        'Makiivska'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'makiivska_2'
    },
    {
      'name': 'makivska',
      '$kuid': '1oYsU9hqG',
      'label': [
        'Маківська',
        'Makivska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'makivska'
    },
    {
      'name': 'malobilozerska',
      '$kuid': 'Ltu5c38Dh',
      'label': [
        'Малобілозерська',
        'Malobilozerska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malobilozerska'
    },
    {
      'name': 'malodanylivska',
      '$kuid': 'WcedREBZe',
      'label': [
        'Малоданилівська',
        'Malodanylivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malodanylivska'
    },
    {
      'name': 'malodivytska',
      '$kuid': '8ftmTEQ8N',
      'label': [
        'Малодівицька',
        'Malodivytska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'malodivytska'
    },
    {
      'name': 'maloliubashanska',
      '$kuid': 'R19gtoexa',
      'label': [
        'Малолюбашанська',
        'Maloliubashanska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'maloliubashanska'
    },
    {
      'name': 'malomaiatska',
      '$kuid': 'po31Reiyy',
      'label': [
        'Маломаяцька',
        'Malomaiatska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'malomaiatska'
    },
    {
      'name': 'malomykhailivska',
      '$kuid': 'hkHoA0k4B',
      'label': [
        'Маломихайлівська',
        'Malomykhailivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malomykhailivska'
    },
    {
      'name': 'malorichenska',
      '$kuid': 'kLOaKZsYr',
      'label': [
        'Малоріченська',
        'Malorichenska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'malorichenska'
    },
    {
      'name': 'malotokmachanska',
      '$kuid': 'xRUMZNLX1',
      'label': [
        'Малотокмачанська',
        'Malotokmachanska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malotokmachanska'
    },
    {
      'name': 'malovilshanska',
      '$kuid': 'Z1UU54KUp',
      'label': [
        'Маловільшанська',
        'Malovilshanska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malovilshanska'
    },
    {
      'name': 'malovyskivska',
      '$kuid': 'dtONUAEMh',
      'label': [
        'Маловисківська',
        'Malovyskivska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'malovyskivska'
    },
    {
      'name': 'malynivska',
      '$kuid': 'Hm5twMrrU',
      'label': [
        'Малинівська',
        'Malynivska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynivska'
    },
    {
      'name': 'malynivska_2',
      '$kuid': '8OqcIAqeH',
      'label': [
        'Малинівська',
        'Malynivska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynivska_2'
    },
    {
      'name': 'malynska',
      '$kuid': 'BFmNM33vx',
      'label': [
        'Малинська',
        'Malynska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynska'
    },
    {
      'name': 'malynska_2',
      '$kuid': 'UgO7jCbED',
      'label': [
        'Малинська',
        'Malynska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'malynska_2'
    },
    {
      'name': 'mamaivska',
      '$kuid': 'hZPFEdnvo',
      'label': [
        'Мамаївська',
        'Mamaivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'mamaivska'
    },
    {
      'name': 'mamalyhivska',
      '$kuid': '1yDlkGBBw',
      'label': [
        'Мамалигівська',
        'Mamalyhivska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mamalyhivska'
    },
    {
      'name': 'manevytska',
      '$kuid': 'rT8EALULN',
      'label': [
        'Маневицька',
        'Manevytska'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'manevytska'
    },
    {
      'name': 'manhushska',
      '$kuid': 'F6BFz543N',
      'label': [
        'Мангушська',
        'Manhushska'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'manhushska'
    },
    {
      'name': 'mankivska',
      '$kuid': 'vilJtk9wP',
      'label': [
        'Маньківська',
        'Mankivska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'mankivska'
    },
    {
      'name': 'marazliivska',
      '$kuid': 'rg7EKR8G2',
      'label': [
        'Маразліївська',
        'Marazliivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'marazliivska'
    },
    {
      'name': 'marfivska',
      '$kuid': 'keOxBQVbg',
      'label': [
        'Марфівська',
        'Marfivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'marfivska'
    },
    {
      'name': 'marhanetska',
      '$kuid': '2TGLPfZRi',
      'label': [
        'Марганецька',
        'Marhanetska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'marhanetska'
    },
    {
      'name': 'marianivska',
      '$kuid': 'Vy3xtFuGF',
      'label': [
        'Мар\'янівська',
        'Marianivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'marianivska'
    },
    {
      'name': 'marianivska_2',
      '$kuid': 'DZLKFE1Ra',
      'label': [
        'Мар\'янівська',
        'Marianivska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'marianivska_2'
    },
    {
      'name': 'marianivska_3',
      '$kuid': 'BjY9pocE8',
      'label': [
        'Мар\'янівська',
        'Marianivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'marianivska_3'
    },
    {
      'name': 'marinska',
      '$kuid': 'UZJHl0MdG',
      'label': [
        'Мар\'їнська',
        'Marinska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'marinska'
    },
    {
      'name': 'mariupolska',
      '$kuid': 'Y93VPn5HJ',
      'label': [
        'Маріупольська',
        'Mariupolska'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'mariupolska'
    },
    {
      'name': 'marivska',
      '$kuid': 'F8zgPm4PX',
      'label': [
        'Мар\'ївська',
        'Marivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'marivska'
    },
    {
      'name': 'markivska',
      '$kuid': '5cI1rTXn8',
      'label': [
        'Марківська',
        'Markivska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'markivska'
    },
    {
      'name': 'martynivska',
      '$kuid': 'tFnJrfB80',
      'label': [
        'Мартинівська',
        'Martynivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'martynivska'
    },
    {
      'name': 'masandrivska',
      '$kuid': 'suYj95o9t',
      'label': [
        'Масандрівська',
        'Masandrivska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'masandrivska'
    },
    {
      'name': 'mashivska',
      '$kuid': 'HQbfB4DmH',
      'label': [
        'Машівська',
        'Mashivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'mashivska'
    },
    {
      'name': 'maslivska',
      '$kuid': 'yx6FUtpLH',
      'label': [
        'Маслівська',
        'Maslivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'maslivska'
    },
    {
      'name': 'mateievetska',
      '$kuid': 'y72iLQMMn',
      'label': [
        'Матеївецька',
        'Mateievetska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mateievetska'
    },
    {
      'name': 'matusivska',
      '$kuid': 'GyiTZrriP',
      'label': [
        'Матусівська',
        'Matusivska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'matusivska'
    },
    {
      'name': 'matviivska',
      '$kuid': 'W3B4hfkLa',
      'label': [
        'Матвіївська',
        'Matviivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'matviivska'
    },
    {
      'name': 'mazanska',
      '$kuid': 'lXLHdtrDR',
      'label': [
        'Мазанська',
        'Mazanska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'mazanska'
    },
    {
      'name': 'medenytska',
      '$kuid': 'zmmg5P8bz',
      'label': [
        'Меденицька',
        'Medenytska'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'medenytska'
    },
    {
      'name': 'medvedivska',
      '$kuid': 'AIiB5SQsS',
      'label': [
        'Медведівська',
        'Medvedivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvedivska'
    },
    {
      'name': 'medvedivska_2',
      '$kuid': 'Jl13vF1UD',
      'label': [
        'Медведівська',
        'Medvedivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvedivska_2'
    },
    {
      'name': 'medvedivska_3',
      '$kuid': 'cIIjhULpA',
      'label': [
        'Медведівська',
        'Medvedivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvedivska_3'
    },
    {
      'name': 'medvynska',
      '$kuid': 'hEV4rDU7t',
      'label': [
        'Медвинська',
        'Medvynska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'medvynska'
    },
    {
      'name': 'medzhybizka',
      '$kuid': 'QXx9JRbhZ',
      'label': [
        'Меджибізька',
        'Medzhybizka'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'medzhybizka'
    },
    {
      'name': 'melitopolska',
      '$kuid': 'lvPrAoPtB',
      'label': [
        'Мелітопольська',
        'Melitopolska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'melitopolska'
    },
    {
      'name': 'melnychna',
      '$kuid': '2iyXqb0JN',
      'label': [
        'Мельнична',
        'Melnychna'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'melnychna'
    },
    {
      'name': 'melnytse-podilska',
      '$kuid': 'BgKuQCXE0',
      'label': [
        'Мельнице-Подільська',
        'Melnytse-Podilska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'melnytse-podilska'
    },
    {
      'name': 'menska',
      '$kuid': 'eJg9f2foR',
      'label': [
        'Менська',
        'Menska'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'menska'
    },
    {
      'name': 'merefianska',
      '$kuid': 'iKGN9GQdW',
      'label': [
        'Мереф\'янська',
        'Merefianska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'merefianska'
    },
    {
      'name': 'mezhivska',
      '$kuid': 'oviP1SB3I',
      'label': [
        'Межівська',
        'Mezhivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mezhivska'
    },
    {
      'name': 'mezhyritska',
      '$kuid': '9DkIazjYR',
      'label': [
        'Межиріцька',
        'Mezhyritska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'mezhyritska'
    },
    {
      'name': 'michurinska',
      '$kuid': 'yugZubU7Z',
      'label': [
        'Мічурінська',
        'Michurinska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'michurinska'
    },
    {
      'name': 'milovska',
      '$kuid': '1Mn00EjsS',
      'label': [
        'Міловська',
        'Milovska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'milovska'
    },
    {
      'name': 'mishkovo-pohorilivska',
      '$kuid': 'Gf9TZjd4Z',
      'label': [
        'Мішково-Погорілівська',
        'Mishkovo-Pohorilivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mishkovo-pohorilivska'
    },
    {
      'name': 'mizhhirska',
      '$kuid': 'atwuXxHlr',
      'label': [
        'Міжгірська',
        'Mizhhirska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizhhirska'
    },
    {
      'name': 'mizhrichenska',
      '$kuid': 'mpnLGY1tG',
      'label': [
        'Міжріченська',
        'Mizhrichenska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizhrichenska'
    },
    {
      'name': 'mizhvodnenska',
      '$kuid': 'U7BTJbxt3',
      'label': [
        'Міжводненська',
        'Mizhvodnenska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizhvodnenska'
    },
    {
      'name': 'mizotska',
      '$kuid': 'rrCudmcyF',
      'label': [
        'Мізоцька',
        'Mizotska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'mizotska'
    },
    {
      'name': 'mliivska',
      '$kuid': 'FBpvb1xzm',
      'label': [
        'Мліївська',
        'Mliivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'mliivska'
    },
    {
      'name': 'mlynivska',
      '$kuid': 'ouBHFNKgl',
      'label': [
        'Млинівська',
        'Mlynivska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'mlynivska'
    },
    {
      'name': 'mohyliv-podilska',
      '$kuid': 'tIUr0IVR6',
      'label': [
        'Могилів-Подільська',
        'Mohyliv-Podilska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'mohyliv-podilska'
    },
    {
      'name': 'mohylivska',
      '$kuid': 'w0hwia3KC',
      'label': [
        'Могилівська',
        'Mohylivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mohylivska'
    },
    {
      'name': 'mokrokalyhirska',
      '$kuid': 'fpDmpBLaU',
      'label': [
        'Мокрокалигірська',
        'Mokrokalyhirska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'mokrokalyhirska'
    },
    {
      'name': 'molochanska',
      '$kuid': 'wGeH1BP7W',
      'label': [
        'Молочанська',
        'Molochanska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'molochanska'
    },
    {
      'name': 'molochnenska',
      '$kuid': 'VXlfKpZDt',
      'label': [
        'Молочненська',
        'Molochnenska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'molochnenska'
    },
    {
      'name': 'molodizhnenska',
      '$kuid': 'qvqxTZWNs',
      'label': [
        'Молодіжненська',
        'Molodizhnenska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'molodizhnenska'
    },
    {
      'name': 'molodohvardiiska',
      '$kuid': '1qwHHvLPb',
      'label': [
        'Молодогвардійська',
        'Molodohvardiiska'
      ],
      'raion': 'luhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'molodohvardiiska'
    },
    {
      'name': 'molohivska',
      '$kuid': 'daqRfXwh4',
      'label': [
        'Мологівська',
        'Molohivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'molohivska'
    },
    {
      'name': 'monastyryshchenska',
      '$kuid': '0XLYxy1x1',
      'label': [
        'Монастирищенська',
        'Monastyryshchenska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'monastyryshchenska'
    },
    {
      'name': 'monastyryska',
      '$kuid': 'K11k7rDqF',
      'label': [
        'Монастириська',
        'Monastyryska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'monastyryska'
    },
    {
      'name': 'morshynska',
      '$kuid': 'Q4M9QeTFJ',
      'label': [
        'Моршинська',
        'Morshynska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'morshynska'
    },
    {
      'name': 'morska',
      '$kuid': 'L0KPsAvo1',
      'label': [
        'Морська',
        'Morska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'morska'
    },
    {
      'name': 'moshnivska',
      '$kuid': 'DUxXz7xZM',
      'label': [
        'Мошнівська',
        'Moshnivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'moshnivska'
    },
    {
      'name': 'mostivska',
      '$kuid': 'd1x0NwZ1T',
      'label': [
        'Мостівська',
        'Mostivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'mostivska'
    },
    {
      'name': 'mostyska',
      '$kuid': 'OR50e24J3',
      'label': [
        'Мостиська',
        'Mostyska'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mostyska'
    },
    {
      'name': 'mrynska',
      '$kuid': 'KwOEr0XD0',
      'label': [
        'Мринська',
        'Mrynska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'mrynska'
    },
    {
      'name': 'mukachivska',
      '$kuid': '7nKAlaMt1',
      'label': [
        'Мукачівська',
        'Mukachivska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mukachivska'
    },
    {
      'name': 'murafska',
      '$kuid': 'N0UelRn1l',
      'label': [
        'Мурафська',
        'Murafska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'murafska'
    },
    {
      'name': 'muromska',
      '$kuid': 's0YiBzrob',
      'label': [
        'Муромська',
        'Muromska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'muromska'
    },
    {
      'name': 'murovanokurylovetska',
      '$kuid': 'hVfBvVG7Q',
      'label': [
        'Мурованокуриловецька',
        'Murovanokurylovetska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'murovanokurylovetska'
    },
    {
      'name': 'murovanska',
      '$kuid': '8el41YOSr',
      'label': [
        'Мурованська',
        'Murovanska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'murovanska'
    },
    {
      'name': 'muzykivska',
      '$kuid': 'cSoYoy70Y',
      'label': [
        'Музиківська',
        'Muzykivska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'muzykivska'
    },
    {
      'name': 'myhiivska',
      '$kuid': 'Qj3Iz8QpQ',
      'label': [
        'Мигіївська',
        'Myhiivska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'myhiivska'
    },
    {
      'name': 'mykhailiutska',
      '$kuid': 'kALFcYGV9',
      'label': [
        'Михайлюцька',
        'Mykhailiutska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailiutska'
    },
    {
      'name': 'mykhailivska',
      '$kuid': 'VU0h4rpR0',
      'label': [
        'Михайлівська',
        'Mykhailivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska'
    },
    {
      'name': 'mykhailivska_2',
      '$kuid': 'Bpa6s0N2X',
      'label': [
        'Михайлівська',
        'Mykhailivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_2'
    },
    {
      'name': 'mykhailivska_3',
      '$kuid': 'Vr4u71aPN',
      'label': [
        'Михайлівська',
        'Mykhailivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_3'
    },
    {
      'name': 'mykhailivska_4',
      '$kuid': 'nzRsCXqsR',
      'label': [
        'Михайлівська',
        'Mykhailivska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_4'
    },
    {
      'name': 'mykhailivska_5',
      '$kuid': 'n1JpbBUoC',
      'label': [
        'Михайлівська',
        'Mykhailivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailivska_5'
    },
    {
      'name': 'mykhailo-kotsiubynska',
      '$kuid': 'H7pWBOXgs',
      'label': [
        'Михайло-Коцюбинська',
        'Mykhailo-Kotsiubynska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailo-kotsiubynska'
    },
    {
      'name': 'mykhailo-lukashivska',
      '$kuid': 'YxJOiTee4',
      'label': [
        'Михайло-Лукашівська',
        'Mykhailo-Lukashivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'mykhailo-lukashivska'
    },
    {
      'name': 'mykolaivska',
      '$kuid': 'ROjEXgb68',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska'
    },
    {
      'name': 'mykolaivska_2',
      '$kuid': 'VMtdpAUEJ',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_2'
    },
    {
      'name': 'mykolaivska_3',
      '$kuid': '25ODWHbrf',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_3'
    },
    {
      'name': 'mykolaivska_4',
      '$kuid': 'stxelZlY4',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_4'
    },
    {
      'name': 'mykolaivska_5',
      '$kuid': '9LvjDNXgt',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_5'
    },
    {
      'name': 'mykolaivska_6',
      '$kuid': 'wheRn9OLp',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_6'
    },
    {
      'name': 'mykolaivska_7',
      '$kuid': 'X7dGqejNF',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_7'
    },
    {
      'name': 'mykolaivska_8',
      '$kuid': 'DCEyonfQw',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_8'
    },
    {
      'name': 'mykolaivska_9',
      '$kuid': 'f90MKkNWv',
      'label': [
        'Миколаївська',
        'Mykolaivska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykolaivska_9'
    },
    {
      'name': 'mykulynetska',
      '$kuid': 'V3GT8caDP',
      'label': [
        'Микулинецька',
        'Mykulynetska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'mykulynetska'
    },
    {
      'name': 'myliatska',
      '$kuid': 'kpi5bITvG',
      'label': [
        'Миляцька',
        'Myliatska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'myliatska'
    },
    {
      'name': 'mylivska',
      '$kuid': 'aXZYk22Wk',
      'label': [
        'Милівська',
        'Mylivska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'mylivska'
    },
    {
      'name': 'myrhorodska',
      '$kuid': 'IBmw1KB0I',
      'label': [
        'Миргородська',
        'Myrhorodska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrhorodska'
    },
    {
      'name': 'myrivska',
      '$kuid': 'kUSrl0G8n',
      'label': [
        'Мирівська',
        'Myrivska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrivska'
    },
    {
      'name': 'myrnenska',
      '$kuid': 'cuVKz4njk',
      'label': [
        'Мирненська',
        'Myrnenska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnenska'
    },
    {
      'name': 'myrnenska_2',
      '$kuid': 'Qm8KQkMlW',
      'label': [
        'Мирненська',
        'Myrnenska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnenska_2'
    },
    {
      'name': 'myrnenska_3',
      '$kuid': 'xY1ZMGrju',
      'label': [
        'Мирненська',
        'Myrnenska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnenska_3'
    },
    {
      'name': 'myrnivska',
      '$kuid': 'JSKy5CWWW',
      'label': [
        'Мирнівська',
        'Myrnivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnivska'
    },
    {
      'name': 'myrnivska_2',
      '$kuid': 'ssfMYATme',
      'label': [
        'Мирнівська',
        'Myrnivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnivska_2'
    },
    {
      'name': 'myrnivska_3',
      '$kuid': 'IMrJphC9g',
      'label': [
        'Мирнівська',
        'Myrnivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnivska_3'
    },
    {
      'name': 'myrnohradska',
      '$kuid': 'gG5HHVrFZ',
      'label': [
        'Мирноградська',
        'Myrnohradska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrnohradska'
    },
    {
      'name': 'myrohoshchanska',
      '$kuid': 'cXqdx5Vx5',
      'label': [
        'Мирогощанська',
        'Myrohoshchanska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'myrohoshchanska'
    },
    {
      'name': 'myroliubnenska',
      '$kuid': '0XUpbbrC0',
      'label': [
        'Миролюбненська',
        'Myroliubnenska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'myroliubnenska'
    },
    {
      'name': 'myronivska',
      '$kuid': 'mcBueFNOp',
      'label': [
        'Миронівська',
        'Myronivska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'myronivska'
    },
    {
      'name': 'myropilska',
      '$kuid': 'OcP9RqM57',
      'label': [
        'Миропільська',
        'Myropilska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'myropilska'
    },
    {
      'name': 'myropilska_2',
      '$kuid': 'ePImtBWa5',
      'label': [
        'Миропільська',
        'Myropilska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'myropilska_2'
    },
    {
      'name': 'mysivska',
      '$kuid': 'wes5W8YVw',
      'label': [
        'Мисівська',
        'Mysivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'mysivska'
    },
    {
      'name': 'mytiaivska',
      '$kuid': 'ypraLp8zk',
      'label': [
        'Митяївська',
        'Mytiaivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'mytiaivska'
    },
    {
      'name': 'mytrofanivska',
      '$kuid': 'XCGbxsA9G',
      'label': [
        'Митрофанівська',
        'Mytrofanivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'mytrofanivska'
    },
    {
      'name': 'nabutivska',
      '$kuid': 'kgSfJzu8O',
      'label': [
        'Набутівська',
        'Nabutivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'nabutivska'
    },
    {
      'name': 'nadlatska',
      '$kuid': 'pwQjquGQa',
      'label': [
        'Надлацька',
        'Nadlatska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nadlatska'
    },
    {
      'name': 'nadvirnianska',
      '$kuid': '8rblpTwE8',
      'label': [
        'Надвірнянська',
        'Nadvirnianska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'nadvirnianska'
    },
    {
      'name': 'nahirianska',
      '$kuid': 'QtWIp4Uhq',
      'label': [
        'Нагірянська',
        'Nahirianska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nahirianska'
    },
    {
      'name': 'naidonivska',
      '$kuid': 'Cv1R7yOjE',
      'label': [
        'Найдьонівська',
        'Naidonivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'naidonivska'
    },
    {
      'name': 'naraivska',
      '$kuid': 'vCTJshlXO',
      'label': [
        'Нараївська',
        'Naraivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'naraivska'
    },
    {
      'name': 'narkevytska',
      '$kuid': 'zUe2bEUH9',
      'label': [
        'Наркевицька',
        'Narkevytska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'narkevytska'
    },
    {
      'name': 'narodytska',
      '$kuid': 'OrN318eWI',
      'label': [
        'Народицька',
        'Narodytska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'narodytska'
    },
    {
      'name': 'nasypnivska',
      '$kuid': 'RgLfv2T44',
      'label': [
        'Насипнівська',
        'Nasypnivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'nasypnivska'
    },
    {
      'name': 'natalynska',
      '$kuid': 'JNdOIGhVe',
      'label': [
        'Наталинська',
        'Natalynska'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'natalynska'
    },
    {
      'name': 'nechaianska',
      '$kuid': 'ssGapWC3v',
      'label': [
        'Нечаянська',
        'Nechaianska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nechaianska'
    },
    {
      'name': 'nedoboivska',
      '$kuid': 'THTaKlD3U',
      'label': [
        'Недобоївська',
        'Nedoboivska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'nedoboivska'
    },
    {
      'name': 'nedryhailivska',
      '$kuid': 'RTzUKnGGA',
      'label': [
        'Недригайлівська',
        'Nedryhailivska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'nedryhailivska'
    },
    {
      'name': 'nekhvoroshchanska',
      '$kuid': '6joqEATSV',
      'label': [
        'Нехворощанська',
        'Nekhvoroshchanska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'nekhvoroshchanska'
    },
    {
      'name': 'nekrasovska',
      '$kuid': 'Y7YnmJkQE',
      'label': [
        'Некрасовська',
        'Nekrasovska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'nekrasovska'
    },
    {
      'name': 'nelipynska',
      '$kuid': 'ZTfFClbp2',
      'label': [
        'Неліпинська',
        'Nelipynska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nelipynska'
    },
    {
      'name': 'nemishaivska',
      '$kuid': 'YbxCl8iZy',
      'label': [
        'Немішаївська',
        'Nemishaivska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'nemishaivska'
    },
    {
      'name': 'nemovytska',
      '$kuid': 'Ww4gRMsxZ',
      'label': [
        'Немовицька',
        'Nemovytska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'nemovytska'
    },
    {
      'name': 'nemyrivska',
      '$kuid': '5xXublQpH',
      'label': [
        'Немирівська',
        'Nemyrivska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'nemyrivska'
    },
    {
      'name': 'nepolokovetska',
      '$kuid': 'xT0P6NdBQ',
      'label': [
        'Неполоковецька',
        'Nepolokovetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'nepolokovetska'
    },
    {
      'name': 'neresnytska',
      '$kuid': 'uG2IToPEV',
      'label': [
        'Нересницька',
        'Neresnytska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'neresnytska'
    },
    {
      'name': 'nerubaiska',
      '$kuid': 'S7nDWwalX',
      'label': [
        'Нерубайська',
        'Nerubaiska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'nerubaiska'
    },
    {
      'name': 'netishynska',
      '$kuid': '40dUEm1F6',
      'label': [
        'Нетішинська',
        'Netishynska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'netishynska'
    },
    {
      'name': 'nikolska',
      '$kuid': 'bpgJlb2MH',
      'label': [
        'Нікольська',
        'Nikolska'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'nikolska'
    },
    {
      'name': 'nikopolska',
      '$kuid': 'sUzruUlXu',
      'label': [
        'Нікопольська',
        'Nikopolska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'nikopolska'
    },
    {
      'name': 'nizhynska',
      '$kuid': 'hsCxlypUR',
      'label': [
        'Ніжинська',
        'Nizhynska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'nizhynska'
    },
    {
      'name': 'nosivska',
      '$kuid': '1OgfCj4lk',
      'label': [
        'Носівська',
        'Nosivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'nosivska'
    },
    {
      'name': 'novenska',
      '$kuid': 'A8IwCnbXv',
      'label': [
        'Новенська',
        'Novenska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novenska'
    },
    {
      'name': 'novhorodkivska',
      '$kuid': 'FPBlaSb1r',
      'label': [
        'Новгородківська',
        'Novhorodkivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'novhorodkivska'
    },
    {
      'name': 'novhorod-siverska',
      '$kuid': 'A5EFcUloa',
      'label': [
        'Новгород-Сіверська',
        'Novhorod-Siverska'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'novhorod-siverska'
    },
    {
      'name': 'novoaidarska',
      '$kuid': 'peahQ5qTL',
      'label': [
        'Новоайдарська',
        'Novoaidarska'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoaidarska'
    },
    {
      'name': 'novoandriivska',
      '$kuid': 'McIViMzHI',
      'label': [
        'Новоандріївська',
        'Novoandriivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoandriivska'
    },
    {
      'name': 'novoarkhanhelska',
      '$kuid': 'SoHEV5oO0',
      'label': [
        'Новоархангельська',
        'Novoarkhanhelska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoarkhanhelska'
    },
    {
      'name': 'novoazovska',
      '$kuid': 'sSQJkDSSu',
      'label': [
        'Новоазовська',
        'Novoazovska'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoazovska'
    },
    {
      'name': 'novobasanska',
      '$kuid': 'cjsfEE2Z6',
      'label': [
        'Новобасанська',
        'Novobasanska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobasanska'
    },
    {
      'name': 'novobilouska',
      '$kuid': 'BKVq6SvMV',
      'label': [
        'Новобілоуська',
        'Novobilouska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobilouska'
    },
    {
      'name': 'novobohdanivska',
      '$kuid': 'n0176xHHc',
      'label': [
        'Новобогданівська',
        'Novobohdanivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobohdanivska'
    },
    {
      'name': 'novoborivska',
      '$kuid': 'gp11Vi4vW',
      'label': [
        'Новоборівська',
        'Novoborivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoborivska'
    },
    {
      'name': 'novoborysivska',
      '$kuid': 'YdOR4FX9s',
      'label': [
        'Новоборисівська',
        'Novoborysivska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoborysivska'
    },
    {
      'name': 'novobuzka',
      '$kuid': 'aJyVnXZYa',
      'label': [
        'Новобузька',
        'Novobuzka'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'novobuzka'
    },
    {
      'name': 'novodmytrivska',
      '$kuid': 'T8QkPZZhR',
      'label': [
        'Новодмитрівська',
        'Novodmytrivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'novodmytrivska'
    },
    {
      'name': 'novodnistrovska',
      '$kuid': '1ixIshRUW',
      'label': [
        'Новодністровська',
        'Novodnistrovska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novodnistrovska'
    },
    {
      'name': 'novodonetska',
      '$kuid': 'NWMeolxXN',
      'label': [
        'Новодонецька',
        'Novodonetska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'novodonetska'
    },
    {
      'name': 'novofedorivska',
      '$kuid': 'ANba4Mdf2',
      'label': [
        'Новофедорівська',
        'Novofedorivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novofedorivska'
    },
    {
      'name': 'novohaleshchynska',
      '$kuid': 'VoaL0H0DM',
      'label': [
        'Новогалещинська',
        'Novohaleshchynska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohaleshchynska'
    },
    {
      'name': 'novohrad-volynska',
      '$kuid': '0gXRA39jg',
      'label': [
        'Новоград-Волинська',
        'Novohrad-Volynska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohrad-volynska'
    },
    {
      'name': 'novohrodivska',
      '$kuid': 'zfsMrMdW8',
      'label': [
        'Новогродівська',
        'Novohrodivska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohrodivska'
    },
    {
      'name': 'novohryhorivska',
      '$kuid': 'cmyvAoL2s',
      'label': [
        'Новогригорівська',
        'Novohryhorivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohryhorivska'
    },
    {
      'name': 'novohuivynska',
      '$kuid': 'Y6VYqTwi4',
      'label': [
        'Новогуйвинська',
        'Novohuivynska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'novohuivynska'
    },
    {
      'name': 'novoiarychivska',
      '$kuid': 'XJjHf6WqK',
      'label': [
        'Новояричівська',
        'Novoiarychivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoiarychivska'
    },
    {
      'name': 'novoiavorivska',
      '$kuid': 'KlnjGWs65',
      'label': [
        'Новояворівська',
        'Novoiavorivska'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoiavorivska'
    },
    {
      'name': 'novoivanivska',
      '$kuid': '8yCbJELWx',
      'label': [
        'Новоіванівська',
        'Novoivanivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoivanivska'
    },
    {
      'name': 'novokakhovska',
      '$kuid': 'ADX8SFnb8',
      'label': [
        'Новокаховська',
        'Novokakhovska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokakhovska'
    },
    {
      'name': 'novokalchevska',
      '$kuid': 'nENxE7SoX',
      'label': [
        'Новокальчевська',
        'Novokalchevska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokalchevska'
    },
    {
      'name': 'novokalynivska',
      '$kuid': 'Q16tMI7Lc',
      'label': [
        'Новокалинівська',
        'Novokalynivska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokalynivska'
    },
    {
      'name': 'novokrymska',
      '$kuid': 'avnTEqv1n',
      'label': [
        'Новокримська',
        'Novokrymska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novokrymska'
    },
    {
      'name': 'novolativska',
      '$kuid': 'Bt1GRBLDZ',
      'label': [
        'Новолатівська',
        'Novolativska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novolativska'
    },
    {
      'name': 'novomarivska',
      '$kuid': 't1eIJQLlQ',
      'label': [
        'Новомар\'ївська',
        'Novomarivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomarivska'
    },
    {
      'name': 'novomoskovska',
      '$kuid': 'GILFZNyaU',
      'label': [
        'Новомосковська',
        'Novomoskovska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomoskovska'
    },
    {
      'name': 'novomykolaivska',
      '$kuid': 'tsxSdxRJt',
      'label': [
        'Новомиколаївська',
        'Novomykolaivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomykolaivska'
    },
    {
      'name': 'novomykolaivska_2',
      '$kuid': 'sBp1IWhwQ',
      'label': [
        'Новомиколаївська',
        'Novomykolaivska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomykolaivska_2'
    },
    {
      'name': 'novomykolaivska_3',
      '$kuid': 'PXVlUcUmu',
      'label': [
        'Новомиколаївська',
        'Novomykolaivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novomykolaivska_3'
    },
    {
      'name': 'novomyrhorodska',
      '$kuid': '6TpP1CQHO',
      'label': [
        'Новомиргородська',
        'Novomyrhorodska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'novomyrhorodska'
    },
    {
      'name': 'novoodeska',
      '$kuid': '7AwtIH7MS',
      'label': [
        'Новоодеська',
        'Novoodeska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoodeska'
    },
    {
      'name': 'novooleksandrivska',
      '$kuid': 'pDIdrjGtf',
      'label': [
        'Новоолександрівська',
        'Novooleksandrivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novooleksandrivska'
    },
    {
      'name': 'novooleksandrivska_2',
      '$kuid': 'bYe5M1VEw',
      'label': [
        'Новоолександрівська',
        'Novooleksandrivska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novooleksandrivska_2'
    },
    {
      'name': 'novooleksandrivska_3',
      '$kuid': 'gXt76H69X',
      'label': [
        'Новоолександрівська',
        'Novooleksandrivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novooleksandrivska_3'
    },
    {
      'name': 'novoorzhytska',
      '$kuid': '9dYPWsxlW',
      'label': [
        'Новооржицька',
        'Novoorzhytska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoorzhytska'
    },
    {
      'name': 'novoozernivska',
      '$kuid': '0vfnuBRMl',
      'label': [
        'Новоозернівська',
        'Novoozernivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoozernivska'
    },
    {
      'name': 'novopavlivska',
      '$kuid': 'UIxyF79Pc',
      'label': [
        'Новопавлівська',
        'Novopavlivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopavlivska'
    },
    {
      'name': 'novopavlivska_2',
      '$kuid': 'iYJ4bxphN',
      'label': [
        'Новопавлівська',
        'Novopavlivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopavlivska_2'
    },
    {
      'name': 'novopilska',
      '$kuid': 'n7eIOZZoI',
      'label': [
        'Новопільська',
        'Novopilska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'novopilska'
    },
    {
      'name': 'novopokrovska',
      '$kuid': 'MXDlcXFTj',
      'label': [
        'Новопокровська',
        'Novopokrovska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopokrovska'
    },
    {
      'name': 'novopokrovska_3',
      '$kuid': 'lool5GzQp',
      'label': [
        'Новопокровська',
        'Novopokrovska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopokrovska_3'
    },
    {
      'name': 'novopokrovska_4',
      '$kuid': 'OpMTesOu0',
      'label': [
        'Новопокровська',
        'Novopokrovska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopokrovska_4'
    },
    {
      'name': 'novoprazka',
      '$kuid': 'hPRwwxyev',
      'label': [
        'Новопразька',
        'Novoprazka'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoprazka'
    },
    {
      'name': 'novopskovska',
      '$kuid': '3vSMC28cA',
      'label': [
        'Новопсковська',
        'Novopskovska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'novopskovska'
    },
    {
      'name': 'novoraiska',
      '$kuid': '8T233NPsz',
      'label': [
        'Новорайська',
        'Novoraiska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoraiska'
    },
    {
      'name': 'novorozdilska',
      '$kuid': 'HO8RNepv3',
      'label': [
        'Новороздільська',
        'Novorozdilska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novorozdilska'
    },
    {
      'name': 'novosanzharska',
      '$kuid': 'GgutMg33Y',
      'label': [
        'Новосанжарська',
        'Novosanzharska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novosanzharska'
    },
    {
      'name': 'novoselivska',
      '$kuid': 'rHZrQmgLH',
      'label': [
        'Новоселівська',
        'Novoselivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselivska'
    },
    {
      'name': 'novoselivska_2',
      '$kuid': 'ri9hE162c',
      'label': [
        'Новоселівська',
        'Novoselivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselivska_2'
    },
    {
      'name': 'novoselivska_3',
      '$kuid': 'WKiytL9lY',
      'label': [
        'Новоселівська',
        'Novoselivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselivska_3'
    },
    {
      'name': 'novoselytska',
      '$kuid': 'dYyNBAVz0',
      'label': [
        'Новоселицька',
        'Novoselytska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoselytska'
    },
    {
      'name': 'novosilska',
      '$kuid': 'P7RaoqP9q',
      'label': [
        'Новосільська',
        'Novosilska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novosilska'
    },
    {
      'name': 'novoslobidska',
      '$kuid': 'tSpLsB1iY',
      'label': [
        'Новослобідська',
        'Novoslobidska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoslobidska'
    },
    {
      'name': 'novosvitska',
      '$kuid': 'c0rVOy60G',
      'label': [
        'Новосвітська',
        'Novosvitska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'novosvitska'
    },
    {
      'name': 'novotroitska',
      '$kuid': 'cuaouW41f',
      'label': [
        'Новотроїцька',
        'Novotroitska'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'novotroitska'
    },
    {
      'name': 'novoukrainska',
      '$kuid': 'vqgTEV7QB',
      'label': [
        'Новоукраїнська',
        'Novoukrainska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoukrainska'
    },
    {
      'name': 'novounaievetska',
      '$kuid': 'mVwJSlX7q',
      'label': [
        'Новодунаєвецька',
        'Novounaievetska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'novounaievetska'
    },
    {
      'name': 'novoushytska',
      '$kuid': '88q35XEip',
      'label': [
        'Новоушицька',
        'Novoushytska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'novoushytska'
    },
    {
      'name': 'novouspenivska',
      '$kuid': 'RU3lBMMKD',
      'label': [
        'Новоуспенівська',
        'Novouspenivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novouspenivska'
    },
    {
      'name': 'novovasylivska',
      '$kuid': '2PmqLDmXH',
      'label': [
        'Нововасилівська',
        'Novovasylivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovasylivska'
    },
    {
      'name': 'novovodolazka',
      '$kuid': 'iGUIDJHLg',
      'label': [
        'Нововодолазька',
        'Novovodolazka'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovodolazka'
    },
    {
      'name': 'novovolynska',
      '$kuid': 'YGs1JKkQX',
      'label': [
        'Нововолинська',
        'Novovolynska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovolynska'
    },
    {
      'name': 'novovorontsovska',
      '$kuid': 'a9cRwsRSo',
      'label': [
        'Нововоронцовська',
        'Novovorontsovska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'novovorontsovska'
    },
    {
      'name': 'novozhylivska',
      '$kuid': 'JuZsypIU0',
      'label': [
        'Новожилівська',
        'Novozhylivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'novozhylivska'
    },
    {
      'name': 'novytska',
      '$kuid': 'QNKce8EyK',
      'label': [
        'Новицька',
        'Novytska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'novytska'
    },
    {
      'name': 'nyvotrudivska',
      '$kuid': 'V7INw25iv',
      'label': [
        'Нивотрудівська',
        'Nyvotrudivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'nyvotrudivska'
    },
    {
      'name': 'nyzhnoduvanska',
      '$kuid': 'QFJVKlA47',
      'label': [
        'Нижньодуванська',
        'Nyzhnoduvanska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnoduvanska'
    },
    {
      'name': 'nyzhnohirska',
      '$kuid': 'ac4ijJ8Dj',
      'label': [
        'Нижньогірська',
        'Nyzhnohirska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnohirska'
    },
    {
      'name': 'nyzhnosirohozka',
      '$kuid': 'iLfJJCYb6',
      'label': [
        'Нижньосірогозька',
        'Nyzhnosirohozka'
      ],
      'raion': 'henicheskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnosirohozka'
    },
    {
      'name': 'nyzhnosyrovatska',
      '$kuid': 'fV6I3VVDE',
      'label': [
        'Нижньосироватська',
        'Nyzhnosyrovatska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnosyrovatska'
    },
    {
      'name': 'nyzhnoteplivska',
      '$kuid': 'ELDPmKOXQ',
      'label': [
        'Нижньотеплівська',
        'Nyzhnoteplivska'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnoteplivska'
    },
    {
      'name': 'nyzhnoverbizka',
      '$kuid': '284sfXy0p',
      'label': [
        'Нижньовербізька',
        'Nyzhnoverbizka'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnoverbizka'
    },
    {
      'name': 'nyzhnovoritska',
      '$kuid': 'WGc3u9eHr',
      'label': [
        'Нижньоворітська',
        'Nyzhnovoritska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'nyzhnovoritska'
    },
    {
      'name': 'obertynska',
      '$kuid': 'MUxZEgckv',
      'label': [
        'Обертинська',
        'Obertynska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'obertynska'
    },
    {
      'name': 'obodivska',
      '$kuid': 'Dc7LH2c9U',
      'label': [
        'Ободівська',
        'Obodivska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'obodivska'
    },
    {
      'name': 'obolonska',
      '$kuid': '594Hmljxi',
      'label': [
        'Оболонська',
        'Obolonska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'obolonska'
    },
    {
      'name': 'obroshynska',
      '$kuid': 'asobUcjXk',
      'label': [
        'Оброшинська',
        'Obroshynska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'obroshynska'
    },
    {
      'name': 'obukhivska',
      '$kuid': 'KTYxWlnhY',
      'label': [
        'Обухівська',
        'Obukhivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'obukhivska'
    },
    {
      'name': 'obukhivska_2',
      '$kuid': '9Qjdy6iTk',
      'label': [
        'Обухівська',
        'Obukhivska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'obukhivska_2'
    },
    {
      'name': 'ochakivska',
      '$kuid': 'jqRVrFrhT',
      'label': [
        'Очаківська',
        'Ochakivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ochakivska'
    },
    {
      'name': 'ocheretynska',
      '$kuid': 'MA6q2UpgJ',
      'label': [
        'Очеретинська',
        'Ocheretynska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'ocheretynska'
    },
    {
      'name': 'odeska',
      '$kuid': 'wsDfD30p2',
      'label': [
        'Одеська',
        'Odeska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'odeska'
    },
    {
      'name': 'okhotnykivska',
      '$kuid': 'c7rIGDF8l',
      'label': [
        'Охотниківська',
        'Okhotnykivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'okhotnykivska'
    },
    {
      'name': 'okhotska',
      '$kuid': 'G32SeCtQz',
      'label': [
        'Охотська',
        'Okhotska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'okhotska'
    },
    {
      'name': 'okhtyrska',
      '$kuid': 'REdfvHwpR',
      'label': [
        'Охтирська',
        'Okhtyrska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'okhtyrska'
    },
    {
      'name': 'oknianska',
      '$kuid': 'uwGhXiJZa',
      'label': [
        'Окнянська',
        'Oknianska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'oknianska'
    },
    {
      'name': 'oktiabrska',
      '$kuid': '5C44Fgv3F',
      'label': [
        'Октябрська',
        'Oktiabrska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'oktiabrska'
    },
    {
      'name': 'oktiabrska_2',
      '$kuid': 'jGlaWpi7l',
      'label': [
        'Октябрська',
        'Oktiabrska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oktiabrska_2'
    },
    {
      'name': 'oktiabrska_3',
      '$kuid': 'Htrx9fWMe',
      'label': [
        'Октябрська',
        'Oktiabrska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oktiabrska_3'
    },
    {
      'name': 'okunivska',
      '$kuid': 'LSpaB5Ddj',
      'label': [
        'Окунівська',
        'Okunivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'okunivska'
    },
    {
      'name': 'oleksandriiska',
      '$kuid': 'pmlXCZZBm',
      'label': [
        'Олександрійська',
        'Oleksandriiska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandriiska'
    },
    {
      'name': 'oleksandriiska_2',
      '$kuid': '0O82h9mbM',
      'label': [
        'Олександрійська',
        'Oleksandriiska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandriiska_2'
    },
    {
      'name': 'oleksandrivska',
      '$kuid': 'XND5HW8hs',
      'label': [
        'Олександрівська',
        'Oleksandrivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska'
    },
    {
      'name': 'oleksandrivska_3',
      '$kuid': '0bkVmWBOD',
      'label': [
        'Олександрівська',
        'Oleksandrivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_3'
    },
    {
      'name': 'oleksandrivska_4',
      '$kuid': 'KBrRpzyhN',
      'label': [
        'Олександрівська',
        'Oleksandrivska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_4'
    },
    {
      'name': 'oleksandrivska_5',
      '$kuid': 'hCe4lUByb',
      'label': [
        'Олександрівська',
        'Oleksandrivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_5'
    },
    {
      'name': 'oleksandrivska_6',
      '$kuid': 'c3sLpFriM',
      'label': [
        'Олександрівська',
        'Oleksandrivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksandrivska_6'
    },
    {
      'name': 'oleksiivska',
      '$kuid': 'U5cl4flWg',
      'label': [
        'Олексіївська',
        'Oleksiivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksiivska'
    },
    {
      'name': 'oleksiivska_2',
      '$kuid': 'xg99cSOW8',
      'label': [
        'Олексіївська',
        'Oleksiivska'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleksiivska_2'
    },
    {
      'name': 'olenivska',
      '$kuid': '88Cm9xdOV',
      'label': [
        'Оленівська',
        'Olenivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'olenivska'
    },
    {
      'name': 'oleshanska',
      '$kuid': 'AXIe9WdGS',
      'label': [
        'Олешанська',
        'Oleshanska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleshanska'
    },
    {
      'name': 'oleshkivska',
      '$kuid': 'Pic7ssVgh',
      'label': [
        'Олешківська',
        'Oleshkivska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'oleshkivska'
    },
    {
      'name': 'olevska',
      '$kuid': 'inna4Xc0E',
      'label': [
        'Олевська',
        'Olevska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'olevska'
    },
    {
      'name': 'olhopilska',
      '$kuid': 'yGelDLFjB',
      'label': [
        'Ольгопільська',
        'Olhopilska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'olhopilska'
    },
    {
      'name': 'olhynska',
      '$kuid': 'f0p4681WJ',
      'label': [
        'Ольгинська',
        'Olhynska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'olhynska'
    },
    {
      'name': 'oliivska',
      '$kuid': 'E9IlRAy40',
      'label': [
        'Оліївська',
        'Oliivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'oliivska'
    },
    {
      'name': 'olshanska',
      '$kuid': 'XsQeb91nR',
      'label': [
        'Ольшанська',
        'Olshanska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'olshanska'
    },
    {
      'name': 'olyshivska',
      '$kuid': 'UCVQxV32w',
      'label': [
        'Олишівська',
        'Olyshivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'olyshivska'
    },
    {
      'name': 'olytska',
      '$kuid': 'SQkHkzZKm',
      'label': [
        'Олицька',
        'Olytska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'olytska'
    },
    {
      'name': 'omelianivska',
      '$kuid': 'Uq8HL5XcH',
      'label': [
        'Омелянівська',
        'Omelianivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'omelianivska'
    },
    {
      'name': 'omelnytska',
      '$kuid': 'x6Dg7tnAv',
      'label': [
        'Омельницька',
        'Omelnytska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'omelnytska'
    },
    {
      'name': 'onokivska',
      '$kuid': 'EmnZHvbCJ',
      'label': [
        'Оноківська',
        'Onokivska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'onokivska'
    },
    {
      'name': 'onufriivska',
      '$kuid': '6UGunSwoz',
      'label': [
        'Онуфріївська',
        'Onufriivska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'onufriivska'
    },
    {
      'name': 'opishnianska',
      '$kuid': 'WHqPCNMu9',
      'label': [
        'Опішнянська',
        'Opishnianska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'opishnianska'
    },
    {
      'name': 'orativska',
      '$kuid': 'C0YKgdmWm',
      'label': [
        'Оратівська',
        'Orativska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'orativska'
    },
    {
      'name': 'ordzhonikidzevska',
      '$kuid': 'nqMW42HzI',
      'label': [
        'Орджонікідзевська',
        'Ordzhonikidzevska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'ordzhonikidzevska'
    },
    {
      'name': 'orikhivska',
      '$kuid': 'DGRpMFJtO',
      'label': [
        'Оріхівська',
        'Orikhivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'orikhivska'
    },
    {
      'name': 'orikhivska_2',
      '$kuid': 'quOVh5a56',
      'label': [
        'Оріхівська',
        'Orikhivska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'orikhivska_2'
    },
    {
      'name': 'orlivska',
      '$kuid': 'sIktiGWgk',
      'label': [
        'Орлівська',
        'Orlivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'orlivska'
    },
    {
      'name': 'orynynska',
      '$kuid': 'AQQh4rczA',
      'label': [
        'Орининська',
        'Orynynska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'orynynska'
    },
    {
      'name': 'orzhytska',
      '$kuid': 'FWv0Jpczg',
      'label': [
        'Оржицька',
        'Orzhytska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'orzhytska'
    },
    {
      'name': 'oskilska',
      '$kuid': 'MTy5xb1R2',
      'label': [
        'Оскільська',
        'Oskilska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'oskilska'
    },
    {
      'name': 'ostaninska',
      '$kuid': 'eWFO99gqL',
      'label': [
        'Останінська',
        'Ostaninska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostaninska'
    },
    {
      'name': 'osterska',
      '$kuid': 'HlLNrY4iL',
      'label': [
        'Остерська',
        'Osterska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'osterska'
    },
    {
      'name': 'ostrovska',
      '$kuid': 'A41jZoBkM',
      'label': [
        'Островська',
        'Ostrovska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrovska'
    },
    {
      'name': 'ostrozhetska',
      '$kuid': 'I4vs1IEzQ',
      'label': [
        'Острожецька',
        'Ostrozhetska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrozhetska'
    },
    {
      'name': 'ostrozka',
      '$kuid': '4ZtsEQp4I',
      'label': [
        'Острозька',
        'Ostrozka'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrozka'
    },
    {
      'name': 'ostrytska',
      '$kuid': 'eXjeUSntm',
      'label': [
        'Острицька',
        'Ostrytska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'ostrytska'
    },
    {
      'name': 'osypenkivska',
      '$kuid': '1jwK9IQtj',
      'label': [
        'Осипенківська',
        'Osypenkivska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'osypenkivska'
    },
    {
      'name': 'otyniiska',
      '$kuid': 'qcwcBayq1',
      'label': [
        'Отинійська',
        'Otyniiska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'otyniiska'
    },
    {
      'name': 'ovadnivska',
      '$kuid': 'pJjfRhaCv',
      'label': [
        'Оваднівська',
        'Ovadnivska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ovadnivska'
    },
    {
      'name': 'ovidiopolska',
      '$kuid': 'GssgOOtAX',
      'label': [
        'Овідіопольська',
        'Ovidiopolska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'ovidiopolska'
    },
    {
      'name': 'ovrutska',
      '$kuid': 'OFeiflPIZ',
      'label': [
        'Овруцька',
        'Ovrutska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ovrutska'
    },
    {
      'name': 'ozernianska',
      '$kuid': '1ZfpIFrKT',
      'label': [
        'Озернянська',
        'Ozernianska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ozernianska'
    },
    {
      'name': 'pakharivska',
      '$kuid': 'EscQaKt7l',
      'label': [
        'Пахарівська',
        'Pakharivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pakharivska'
    },
    {
      'name': 'palanska',
      '$kuid': 'IJ9iWC6Nr',
      'label': [
        'Паланська',
        'Palanska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'palanska'
    },
    {
      'name': 'pantaivska',
      '$kuid': 'VwfxhGevS',
      'label': [
        'Пантаївська',
        'Pantaivska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pantaivska'
    },
    {
      'name': 'parafiivska',
      '$kuid': 'yxx5ky66B',
      'label': [
        'Парафіївська',
        'Parafiivska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'parafiivska'
    },
    {
      'name': 'partenitska',
      '$kuid': 'aGvYcOEfK',
      'label': [
        'Партенітська',
        'Partenitska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'partenitska'
    },
    {
      'name': 'partyzanska',
      '$kuid': 'YCaQ7ExWo',
      'label': [
        'Партизанська',
        'Partyzanska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'partyzanska'
    },
    {
      'name': 'pasichnianska',
      '$kuid': 'Q3i7Ouw0Z',
      'label': [
        'Пасічнянська',
        'Pasichnianska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'pasichnianska'
    },
    {
      'name': 'pavlivska',
      '$kuid': 'l3tMrE4wW',
      'label': [
        'Павлівська',
        'Pavlivska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlivska'
    },
    {
      'name': 'pavlivska_2',
      '$kuid': 'yL5J4rShe',
      'label': [
        'Павлівська',
        'Pavlivska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlivska_2'
    },
    {
      'name': 'pavlivska_3',
      '$kuid': 'vMBkjhpoF',
      'label': [
        'Павлівська',
        'Pavlivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlivska_3'
    },
    {
      'name': 'pavlohradska',
      '$kuid': 'gj6AWVrXK',
      'label': [
        'Павлоградська',
        'Pavlohradska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'pavlohradska'
    },
    {
      'name': 'pechenizhynska',
      '$kuid': 'wb1TtcdSV',
      'label': [
        'Печеніжинська',
        'Pechenizhynska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pechenizhynska'
    },
    {
      'name': 'pechenizka',
      '$kuid': 'nG6j3trtb',
      'label': [
        'Печенізька',
        'Pechenizka'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pechenizka'
    },
    {
      'name': 'perechynska',
      '$kuid': 'zo6Gu4Q2E',
      'label': [
        'Перечинська',
        'Perechynska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'perechynska'
    },
    {
      'name': 'perehinska',
      '$kuid': 'IAgWFqSWp',
      'label': [
        'Перегінська',
        'Perehinska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'perehinska'
    },
    {
      'name': 'perehonivska',
      '$kuid': 'E0VuDjcXg',
      'label': [
        'Перегонівська',
        'Perehonivska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'perehonivska'
    },
    {
      'name': 'pereiaslavсska',
      '$kuid': 'fXCX5Ci1K',
      'label': [
        'Переяславська',
        'Pereiaslavсska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pereiaslavсska'
    },
    {
      'name': 'peremyshlianska',
      '$kuid': '5M9G8raU6',
      'label': [
        'Перемишлянська',
        'Peremyshlianska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'peremyshlianska'
    },
    {
      'name': 'pererislianska',
      '$kuid': 'uIIOEoBos',
      'label': [
        'Переріслянська',
        'Pererislianska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'pererislianska'
    },
    {
      'name': 'pereshchepynska',
      '$kuid': 'zxBkLjQJh',
      'label': [
        'Перещепинська',
        'Pereshchepynska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pereshchepynska'
    },
    {
      'name': 'perovska',
      '$kuid': 'sspaXZKuS',
      'label': [
        'Перовська',
        'Perovska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'perovska'
    },
    {
      'name': 'pershotravenska',
      '$kuid': 'reEr0ttGZ',
      'label': [
        'Першотравенська',
        'Pershotravenska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pershotravenska'
    },
    {
      'name': 'pershotravnevska',
      '$kuid': '9ZFEz9jQu',
      'label': [
        'Першотравневська',
        'Pershotravnevska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pershotravnevska'
    },
    {
      'name': 'pervomaiska',
      '$kuid': 'JZlXJcRQt',
      'label': [
        'Первомайська',
        'Pervomaiska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska'
    },
    {
      'name': 'pervomaiska_2',
      '$kuid': '1gtt4tDpb',
      'label': [
        'Первомайська',
        'Pervomaiska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_2'
    },
    {
      'name': 'pervomaiska_3',
      '$kuid': 'dOpdLvoEp',
      'label': [
        'Первомайська',
        'Pervomaiska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_3'
    },
    {
      'name': 'pervomaiska_4',
      '$kuid': 'NrohYb6Er',
      'label': [
        'Первомайська',
        'Pervomaiska'
      ],
      'raion': 'lozivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_4'
    },
    {
      'name': 'pervomaiska_5',
      '$kuid': 'lm7U8i4Xh',
      'label': [
        'Первомайська',
        'Pervomaiska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_5'
    },
    {
      'name': 'pervomaiska_6',
      '$kuid': '4mb9U0O5H',
      'label': [
        'Первомайська',
        'Pervomaiska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervomaiska_6'
    },
    {
      'name': 'pervozvanivska',
      '$kuid': 'OZdwsqZsS',
      'label': [
        'Первозванівська',
        'Pervozvanivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'pervozvanivska'
    },
    {
      'name': 'petrivska',
      '$kuid': 'Wa11EIpqg',
      'label': [
        'Петрівська',
        'Petrivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivska'
    },
    {
      'name': 'petrivska_2',
      '$kuid': 'pKxbUwuj9',
      'label': [
        'Петрівська',
        'Petrivska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivska_2'
    },
    {
      'name': 'petrivska_3',
      '$kuid': 'FMzR9uSNH',
      'label': [
        'Петрівська',
        'Petrivska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivska_3'
    },
    {
      'name': 'petrivsko-romenska',
      '$kuid': 'ZA7loKfvq',
      'label': [
        'Петрівсько-Роменська',
        'Petrivsko-Romenska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrivsko-romenska'
    },
    {
      'name': 'petro-mykhailivska',
      '$kuid': 'MCJi6bpfY',
      'label': [
        'Петро-Михайлівська',
        'Petro-Mykhailivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'petro-mykhailivska'
    },
    {
      'name': 'petropavlivska',
      '$kuid': 'XdM79YTBK',
      'label': [
        'Петропавлівська',
        'Petropavlivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'petropavlivska'
    },
    {
      'name': 'petropavlivska_2',
      '$kuid': 'SiVJzevhD',
      'label': [
        'Петропавлівська',
        'Petropavlivska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'petropavlivska_2'
    },
    {
      'name': 'petropavlivska_3',
      '$kuid': 'iZl7QcfbT',
      'label': [
        'Петропавлівська',
        'Petropavlivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'petropavlivska_3'
    },
    {
      'name': 'petrovetska',
      '$kuid': 'cwMjVnuEr',
      'label': [
        'Петровецька',
        'Petrovetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrovetska'
    },
    {
      'name': 'petrovirivska',
      '$kuid': 'DPEcwLTKj',
      'label': [
        'Петровірівська',
        'Petrovirivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrovirivska'
    },
    {
      'name': 'petrykivska',
      '$kuid': 'OMPSo7Fg1',
      'label': [
        'Петриківська',
        'Petrykivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'petrykivska'
    },
    {
      'name': 'piadytska',
      '$kuid': 'lQBrYKtDv',
      'label': [
        'П\'ядицька',
        'Piadytska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'piadytska'
    },
    {
      'name': 'piatykhatska',
      '$kuid': 'XvTiHK9Vo',
      'label': [
        'П\'ятихатська',
        'Piatykhatska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'piatykhatska'
    },
    {
      'name': 'piatykhatska_2',
      '$kuid': 'mnGQgwBI7',
      'label': [
        'П\'ятихатська',
        'Piatykhatska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'piatykhatska_2'
    },
    {
      'name': 'pidberiztsivska',
      '$kuid': 'phOotEAAj',
      'label': [
        'Підберізцівська',
        'Pidberiztsivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidberiztsivska'
    },
    {
      'name': 'pidhaichykivska',
      '$kuid': 'aqhqhQv7b',
      'label': [
        'Підгайчиківська',
        'Pidhaichykivska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhaichykivska'
    },
    {
      'name': 'pidhaietska',
      '$kuid': 'iRTeLBiwP',
      'label': [
        'Підгаєцька',
        'Pidhaietska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhaietska'
    },
    {
      'name': 'pidhaitsivska',
      '$kuid': 'bvjx6IU5k',
      'label': [
        'Підгайцівська',
        'Pidhaitsivska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhaitsivska'
    },
    {
      'name': 'pidhorodnenska',
      '$kuid': 's32qgpww3',
      'label': [
        'Підгородненська',
        'Pidhorodnenska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhorodnenska'
    },
    {
      'name': 'pidhorodnianska',
      '$kuid': '00xyUGk3v',
      'label': [
        'Підгороднянська',
        'Pidhorodnianska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidhorodnianska'
    },
    {
      'name': 'pidkaminska',
      '$kuid': '16M1BDEmn',
      'label': [
        'Підкамінська',
        'Pidkaminska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidkaminska'
    },
    {
      'name': 'pidloztsivska',
      '$kuid': 'MA4mo7RbX',
      'label': [
        'Підлозцівська',
        'Pidloztsivska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidloztsivska'
    },
    {
      'name': 'pidvolochyska',
      '$kuid': 'DF5IIboee',
      'label': [
        'Підволочиська',
        'Pidvolochyska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidvolochyska'
    },
    {
      'name': 'pidvysotska',
      '$kuid': 'WaRxpqYaA',
      'label': [
        'Підвисоцька',
        'Pidvysotska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pidvysotska'
    },
    {
      'name': 'pirnivska',
      '$kuid': 'anpN53HcU',
      'label': [
        'Пірнівська',
        'Pirnivska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'pirnivska'
    },
    {
      'name': 'pishchanivska',
      '$kuid': 'zy4EMea2t',
      'label': [
        'Піщанівська',
        'Pishchanivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanivska'
    },
    {
      'name': 'pishchanobridska',
      '$kuid': 'utbpikyBT',
      'label': [
        'Піщанобрідська',
        'Pishchanobridska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanobridska'
    },
    {
      'name': 'pishchanska',
      '$kuid': 'XQjw2eJ6O',
      'label': [
        'Піщанська',
        'Pishchanska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska'
    },
    {
      'name': 'pishchanska_2',
      '$kuid': 'H2lA3zmJY',
      'label': [
        'Піщанська',
        'Pishchanska'
      ],
      'raion': 'novomoskovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_2'
    },
    {
      'name': 'pishchanska_3',
      '$kuid': 'ash8FVrpR',
      'label': [
        'Піщанська',
        'Pishchanska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_3'
    },
    {
      'name': 'pishchanska_4',
      '$kuid': 'OkLJZvTl0',
      'label': [
        'Піщанська',
        'Pishchanska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_4'
    },
    {
      'name': 'pishchanska_5',
      '$kuid': 'Ed9NaOZ8H',
      'label': [
        'Піщанська',
        'Pishchanska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchanska_5'
    },
    {
      'name': 'pishchivska',
      '$kuid': 'fh1i6MtUQ',
      'label': [
        'Піщівська',
        'Pishchivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pishchivska'
    },
    {
      'name': 'piskivska',
      '$kuid': 'nSwu0HIDL',
      'label': [
        'Пісківська',
        'Piskivska'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'piskivska'
    },
    {
      'name': 'pisochynska',
      '$kuid': 'caSRKv9T0',
      'label': [
        'Пісочинська',
        'Pisochynska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pisochynska'
    },
    {
      'name': 'pivdennomiska',
      '$kuid': 'hMtlDjteF',
      'label': [
        'Південноміська',
        'Pivdennomiska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pivdennomiska'
    },
    {
      'name': 'plakhtiivska',
      '$kuid': '5zUVLziOH',
      'label': [
        'Плахтіївська',
        'Plakhtiivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'plakhtiivska'
    },
    {
      'name': 'plodivska',
      '$kuid': '0kgcWF6nS',
      'label': [
        'Плодівська',
        'Plodivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'plodivska'
    },
    {
      'name': 'plodorodnenska',
      '$kuid': 'Nbix2Eo1y',
      'label': [
        'Плодородненська',
        'Plodorodnenska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'plodorodnenska'
    },
    {
      'name': 'pluzhnenska',
      '$kuid': 'VCM1mzD8W',
      'label': [
        'Плужненська',
        'Pluzhnenska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pluzhnenska'
    },
    {
      'name': 'plyskivska',
      '$kuid': '3NMXEb5sn',
      'label': [
        'Плисківська',
        'Plyskivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'plyskivska'
    },
    {
      'name': 'pobiednenska',
      '$kuid': 'wEpEibsMY',
      'label': [
        'Побєдненська',
        'Pobiednenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pobiednenska'
    },
    {
      'name': 'pobuzka',
      '$kuid': 'Fyal1F7WL',
      'label': [
        'Побузька',
        'Pobuzka'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pobuzka'
    },
    {
      'name': 'pochaivska',
      '$kuid': 'Wl3WvCxCn',
      'label': [
        'Почаївська',
        'Pochaivska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'pochaivska'
    },
    {
      'name': 'pochetnenska',
      '$kuid': '1kH5APp6g',
      'label': [
        'Почетненська',
        'Pochetnenska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'pochetnenska'
    },
    {
      'name': 'podilska',
      '$kuid': 'gXemmsGaB',
      'label': [
        'Подільська',
        'Podilska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'podilska'
    },
    {
      'name': 'pohrebyshchenska',
      '$kuid': 'VZ6v9gbRO',
      'label': [
        'Погребищенська',
        'Pohrebyshchenska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'pohrebyshchenska'
    },
    {
      'name': 'pokrovska',
      '$kuid': 'l5O3PjDV5',
      'label': [
        'Покровська',
        'Pokrovska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska'
    },
    {
      'name': 'pokrovska_2',
      '$kuid': 'Se2tso7vo',
      'label': [
        'Покровська',
        'Pokrovska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska_2'
    },
    {
      'name': 'pokrovska_3',
      '$kuid': 'HyLDwsF2Q',
      'label': [
        'Покровська',
        'Pokrovska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska_3'
    },
    {
      'name': 'pokrovska_4',
      '$kuid': 'olXeAhD3T',
      'label': [
        'Покровська',
        'Pokrovska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'pokrovska_4'
    },
    {
      'name': 'polianska',
      '$kuid': 'NwinhdUTZ',
      'label': [
        'Полянська',
        'Polianska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'polianska'
    },
    {
      'name': 'polianytska',
      '$kuid': 'nyDNxACoB',
      'label': [
        'Поляницька',
        'Polianytska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'polianytska'
    },
    {
      'name': 'poliska',
      '$kuid': 'QTTumCFHG',
      'label': [
        'Поліська',
        'Poliska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'poliska'
    },
    {
      'name': 'polohivska',
      '$kuid': 'HhQgThVUx',
      'label': [
        'Пологівська',
        'Polohivska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'polohivska'
    },
    {
      'name': 'polonska',
      '$kuid': 'y9AD9yc9r',
      'label': [
        'Полонська',
        'Polonska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'polonska'
    },
    {
      'name': 'poltavska_2',
      '$kuid': '0ohsrzELx',
      'label': [
        'Полтавська',
        'Poltavska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'poltavska_2'
    },
    {
      'name': 'poltavska_3',
      '$kuid': 'unxLcI3eu',
      'label': [
        'Полтавська',
        'Poltavska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'poltavska_3'
    },
    {
      'name': 'polytska',
      '$kuid': 'DvWjH8iYQ',
      'label': [
        'Полицька',
        'Polytska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'polytska'
    },
    {
      'name': 'pomichnianska',
      '$kuid': 'PsC0aEuuQ',
      'label': [
        'Помічнянська',
        'Pomichnianska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'pomichnianska'
    },
    {
      'name': 'pomorianska',
      '$kuid': 'c5Pu7d7iT',
      'label': [
        'Поморянська',
        'Pomorianska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pomorianska'
    },
    {
      'name': 'poninkivska',
      '$kuid': 'hAi3No7A8',
      'label': [
        'Понінківська',
        'Poninkivska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'poninkivska'
    },
    {
      'name': 'ponornytska',
      '$kuid': 'B2JjTseOS',
      'label': [
        'Понорницька',
        'Ponornytska'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'ponornytska'
    },
    {
      'name': 'popasnianska',
      '$kuid': '1mZZCoVze',
      'label': [
        'Попаснянська',
        'Popasnianska'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'popasnianska'
    },
    {
      'name': 'popelnastivska',
      '$kuid': 'TRojsZNcO',
      'label': [
        'Попельнастівська',
        'Popelnastivska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'popelnastivska'
    },
    {
      'name': 'popilnianska',
      '$kuid': 'wt74LJasn',
      'label': [
        'Попільнянська',
        'Popilnianska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'popilnianska'
    },
    {
      'name': 'popivska',
      '$kuid': 'RaBaA6fSi',
      'label': [
        'Попівська',
        'Popivska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'popivska'
    },
    {
      'name': 'poromivska',
      '$kuid': 'wiGMFuBjf',
      'label': [
        'Поромівська',
        'Poromivska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'poromivska'
    },
    {
      'name': 'poshtivska',
      '$kuid': 'UGn0W624X',
      'label': [
        'Поштівська',
        'Poshtivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'poshtivska'
    },
    {
      'name': 'potiivska',
      '$kuid': '7mga2H7WK',
      'label': [
        'Потіївська',
        'Potiivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'potiivska'
    },
    {
      'name': 'povchanska',
      '$kuid': 'rQ3vGB7Qq',
      'label': [
        'Повчанська',
        'Povchanska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'povchanska'
    },
    {
      'name': 'povorska',
      '$kuid': 'ZAtEiVowp',
      'label': [
        'Поворська',
        'Povorska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'povorska'
    },
    {
      'name': 'pozharska',
      '$kuid': 'nq5bK3u9o',
      'label': [
        'Пожарська',
        'Pozharska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pozharska'
    },
    {
      'name': 'pravdivska',
      '$kuid': 'F1mbDVLcG',
      'label': [
        'Правдівська',
        'Pravdivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'pravdivska'
    },
    {
      'name': 'preobrazhenska',
      '$kuid': 'nBGHiQSIb',
      'label': [
        'Преображенська',
        'Preobrazhenska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'preobrazhenska'
    },
    {
      'name': 'prostornenska',
      '$kuid': 'fHcKir5Oy',
      'label': [
        'Просторненська',
        'Prostornenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'prostornenska'
    },
    {
      'name': 'prudivska',
      '$kuid': 'lESY0Av7M',
      'label': [
        'Прудівська',
        'Prudivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'prudivska'
    },
    {
      'name': 'pryazovska',
      '$kuid': 'XoM94VNZg',
      'label': [
        'Приазовська',
        'Pryazovska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryazovska'
    },
    {
      'name': 'prybuzhanivska',
      '$kuid': 'cQDnrjfZN',
      'label': [
        'Прибужанівська',
        'Prybuzhanivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'prybuzhanivska'
    },
    {
      'name': 'prybuzka',
      '$kuid': '0FjD8g5Qq',
      'label': [
        'Прибузька',
        'Prybuzka'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'prybuzka'
    },
    {
      'name': 'pryiutivska',
      '$kuid': 'HgzInj5oS',
      'label': [
        'Приютівська',
        'Pryiutivska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryiutivska'
    },
    {
      'name': 'prylisnenska',
      '$kuid': 'TOCjMx5op',
      'label': [
        'Прилісненська',
        'Prylisnenska'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'prylisnenska'
    },
    {
      'name': 'prylutska',
      '$kuid': 'mT7bdncAT',
      'label': [
        'Прилуцька',
        'Prylutska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'prylutska'
    },
    {
      'name': 'prymorska',
      '$kuid': '5EQ02ppCw',
      'label': [
        'Приморська',
        'Prymorska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'prymorska'
    },
    {
      'name': 'prymorska_2',
      '$kuid': 'WvW05gwMo',
      'label': [
        'Приморська',
        'Prymorska'
      ],
      'raion': 'berdianskyi',
      'list_name': 'hromada',
      '$autovalue': 'prymorska_2'
    },
    {
      'name': 'pryozernivska',
      '$kuid': 'wKUGHNju0',
      'label': [
        'Приозернівська',
        'Pryozernivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryozernivska'
    },
    {
      'name': 'pryshybska',
      '$kuid': 'r3UNCu6ow',
      'label': [
        'Пришибська',
        'Pryshybska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryshybska'
    },
    {
      'name': 'prystolychna',
      '$kuid': 'tTf2BCdWF',
      'label': [
        'Пристолична',
        'Prystolychna'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'prystolychna'
    },
    {
      'name': 'prysyvaska',
      '$kuid': 'u0I2p4vom',
      'label': [
        'Присиваська',
        'Prysyvaska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'prysyvaska'
    },
    {
      'name': 'pryvilnenska',
      '$kuid': 'ocIc5yRpK',
      'label': [
        'Привільненська',
        'Pryvilnenska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvilnenska'
    },
    {
      'name': 'pryvilnenska_2',
      '$kuid': 'fq8vhS3bD',
      'label': [
        'Привільненська',
        'Pryvilnenska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvilnenska_2'
    },
    {
      'name': 'pryvitnenska_3',
      '$kuid': '5suGlucx9',
      'label': [
        'Привітненська',
        'Pryvitnenska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvitnenska_3'
    },
    {
      'name': 'pryvitnenska_4',
      '$kuid': '44VJtPBRi',
      'label': [
        'Привітненська',
        'Pryvitnenska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'pryvitnenska_4'
    },
    {
      'name': 'pshenychnenska',
      '$kuid': 'jIkCIprbS',
      'label': [
        'Пшеничненська',
        'Pshenychnenska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'pshenychnenska'
    },
    {
      'name': 'pulynska',
      '$kuid': 'ElQAPZH1y',
      'label': [
        'Пулинська',
        'Pulynska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'pulynska'
    },
    {
      'name': 'pushkinska',
      '$kuid': '4NggI6SNk',
      'label': [
        'Пушкінська',
        'Pushkinska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'pushkinska'
    },
    {
      'name': 'pustomytivska',
      '$kuid': 'QRWW4or9e',
      'label': [
        'Пустомитівська',
        'Pustomytivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pustomytivska'
    },
    {
      'name': 'putylska',
      '$kuid': 'eFxLwGm3E',
      'label': [
        'Путильська',
        'Putylska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'putylska'
    },
    {
      'name': 'putyvlska',
      '$kuid': 'uWF6Vfn8F',
      'label': [
        'Путивльська',
        'Putyvlska'
      ],
      'raion': 'konotopskyi',
      'list_name': 'hromada',
      '$autovalue': 'putyvlska'
    },
    {
      'name': 'pyiterfolvivska',
      '$kuid': 'Te1fOswMr',
      'label': [
        'Пийтерфолвівська',
        'Pyiterfolvivska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'pyiterfolvivska'
    },
    {
      'name': 'pylypetska',
      '$kuid': 'LUMnhtgTI',
      'label': [
        'Пилипецька',
        'Pylypetska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'pylypetska'
    },
    {
      'name': 'pyriatynska',
      '$kuid': 'ftwdMARhW',
      'label': [
        'Пирятинська',
        'Pyriatynska'
      ],
      'raion': 'lubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'pyriatynska'
    },
    {
      'name': 'radekhivska',
      '$kuid': 'BzKvxdys1',
      'label': [
        'Радехівська',
        'Radekhivska'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'radekhivska'
    },
    {
      'name': 'radomyshlska',
      '$kuid': 'mgUbVClzV',
      'label': [
        'Радомишльська',
        'Radomyshlska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'radomyshlska'
    },
    {
      'name': 'radsadivska',
      '$kuid': 'FDrwg2NQE',
      'label': [
        'Радсадівська',
        'Radsadivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'radsadivska'
    },
    {
      'name': 'radyvylivska',
      '$kuid': '4VSXtEZdb',
      'label': [
        'Радивилівська',
        'Radyvylivska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'radyvylivska'
    },
    {
      'name': 'rafalivska',
      '$kuid': 'c2N6MxmwF',
      'label': [
        'Рафалівська',
        'Rafalivska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'rafalivska'
    },
    {
      'name': 'raihorodotska',
      '$kuid': 'I7bTORiHk',
      'label': [
        'Райгородоцька',
        'Raihorodotska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'raihorodotska'
    },
    {
      'name': 'raihorodska',
      '$kuid': 'MQJRH1IiS',
      'label': [
        'Райгородська',
        'Raihorodska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'raihorodska'
    },
    {
      'name': 'raivska',
      '$kuid': 'o3DqWvJM2',
      'label': [
        'Раївська',
        'Raivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'raivska'
    },
    {
      'name': 'rakhivska',
      '$kuid': 'dgwxIsYsF',
      'label': [
        'Рахівська',
        'Rakhivska'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rakhivska'
    },
    {
      'name': 'ralivska',
      '$kuid': 'b5tAWqAag',
      'label': [
        'Ралівська',
        'Ralivska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'ralivska'
    },
    {
      'name': 'ratnivska',
      '$kuid': 'jFDdWmYEl',
      'label': [
        'Ратнівська',
        'Ratnivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'ratnivska'
    },
    {
      'name': 'raukhivska',
      '$kuid': 'OWtRT6Fol',
      'label': [
        'Раухівська',
        'Raukhivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'raukhivska'
    },
    {
      'name': 'rava-ruska',
      '$kuid': 'wwOxn2FeL',
      'label': [
        'Рава-Руська',
        'Rava-Ruska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rava-ruska'
    },
    {
      'name': 'reniiska',
      '$kuid': '2QtTsHCin',
      'label': [
        'Ренійська',
        'Reniiska'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'reniiska'
    },
    {
      'name': 'reshetylivska',
      '$kuid': 'SS5HVYOKF',
      'label': [
        'Решетилівська',
        'Reshetylivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'reshetylivska'
    },
    {
      'name': 'richkivska',
      '$kuid': 'a4r7Kf727',
      'label': [
        'Річківська',
        'Richkivska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'richkivska'
    },
    {
      'name': 'ripkynska',
      '$kuid': 'q5dOgASE6',
      'label': [
        'Ріпкинська',
        'Ripkynska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ripkynska'
    },
    {
      'name': 'rivnenska_2',
      '$kuid': 'gLpUpv9ns',
      'label': [
        'Рівненська',
        'Rivnenska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnenska_2'
    },
    {
      'name': 'rivnenska_3',
      '$kuid': 'Ryb5ZtFJR',
      'label': [
        'Рівненська',
        'Rivnenska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnenska_3'
    },
    {
      'name': 'rivnianska',
      '$kuid': '0ZCtENpW7',
      'label': [
        'Рівнянська',
        'Rivnianska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnianska'
    },
    {
      'name': 'rivnivska',
      '$kuid': 'YfxItjoNv',
      'label': [
        'Рівнівська',
        'Rivnivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'rivnivska'
    },
    {
      'name': 'rodnykivska',
      '$kuid': '4mkRNhRH1',
      'label': [
        'Родниківська',
        'Rodnykivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'rodnykivska'
    },
    {
      'name': 'rohanska',
      '$kuid': 'HPeGgHPsi',
      'label': [
        'Роганська',
        'Rohanska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rohanska'
    },
    {
      'name': 'rohatynska',
      '$kuid': '8nrUWVlH6',
      'label': [
        'Рогатинська',
        'Rohatynska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rohatynska'
    },
    {
      'name': 'rokytnianska',
      '$kuid': 'ZU7PyK5tW',
      'label': [
        'Рокитнянська',
        'Rokytnianska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rokytnianska'
    },
    {
      'name': 'rokytnivska',
      '$kuid': 'TNvzByeYY',
      'label': [
        'Рокитнівська',
        'Rokytnivska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'rokytnivska'
    },
    {
      'name': 'romanivska',
      '$kuid': 'tn1T8ugyN',
      'label': [
        'Романівська',
        'Romanivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'romanivska'
    },
    {
      'name': 'romashkinska',
      '$kuid': 'GArpHE0wc',
      'label': [
        'Ромашкінська',
        'Romashkinska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'romashkinska'
    },
    {
      'name': 'romenska',
      '$kuid': 'is0OSRDc3',
      'label': [
        'Роменська',
        'Romenska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'romenska'
    },
    {
      'name': 'romodanivska',
      '$kuid': 'TIII4WAZY',
      'label': [
        'Ромоданівська',
        'Romodanivska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'romodanivska'
    },
    {
      'name': 'roshchynska',
      '$kuid': 'R5fJzaadB',
      'label': [
        'Рощинська',
        'Roshchynska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'roshchynska'
    },
    {
      'name': 'rotmistrivska',
      '$kuid': 'DGicraM9v',
      'label': [
        'Ротмістрівська',
        'Rotmistrivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'rotmistrivska'
    },
    {
      'name': 'rovenkivska',
      '$kuid': 'x2wjAHu9v',
      'label': [
        'Ровеньківська',
        'Rovenkivska'
      ],
      'raion': 'rovenkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rovenkivska'
    },
    {
      'name': 'rozdilnianska',
      '$kuid': 'lmDAoJfEs',
      'label': [
        'Роздільнянська',
        'Rozdilnianska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdilnianska'
    },
    {
      'name': 'rozdolnenska',
      '$kuid': '8eXawpkRK',
      'label': [
        'Роздольненська',
        'Rozdolnenska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdolnenska'
    },
    {
      'name': 'rozdolska',
      '$kuid': 'Ch0xNkTxr',
      'label': [
        'Роздольська',
        'Rozdolska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdolska'
    },
    {
      'name': 'rozdorska',
      '$kuid': 'Dq5dN5ApW',
      'label': [
        'Роздорська',
        'Rozdorska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozdorska'
    },
    {
      'name': 'rozhniativska',
      '$kuid': '7fJyzoZoz',
      'label': [
        'Рожнятівська',
        'Rozhniativska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozhniativska'
    },
    {
      'name': 'rozhnivska',
      '$kuid': 'cPbGiCghX',
      'label': [
        'Рожнівська',
        'Rozhnivska'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozhnivska'
    },
    {
      'name': 'rozhyshchenska',
      '$kuid': 'C0KM2EymK',
      'label': [
        'Рожищенська',
        'Rozhyshchenska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozhyshchenska'
    },
    {
      'name': 'rozivska',
      '$kuid': '61KLieerc',
      'label': [
        'Розівська',
        'Rozivska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozivska'
    },
    {
      'name': 'rozkishnenska',
      '$kuid': 'Q5nSUPn3n',
      'label': [
        'Розкішненська',
        'Rozkishnenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozkishnenska'
    },
    {
      'name': 'rozkvitivska',
      '$kuid': 'bKy7wPZ4O',
      'label': [
        'Розквітівська',
        'Rozkvitivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozkvitivska'
    },
    {
      'name': 'rozsoshanska',
      '$kuid': 'p7s4hdiWJ',
      'label': [
        'Розсошанська',
        'Rozsoshanska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozsoshanska'
    },
    {
      'name': 'rozvadivska',
      '$kuid': '5BCCTmOeO',
      'label': [
        'Розвадівська',
        'Rozvadivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'rozvadivska'
    },
    {
      'name': 'rubanivska',
      '$kuid': 'BCnkqUzvN',
      'label': [
        'Рубанівська',
        'Rubanivska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'rubanivska'
    },
    {
      'name': 'rubizhanska',
      '$kuid': '79peGLtqs',
      'label': [
        'Рубіжанська',
        'Rubizhanska'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'rubizhanska'
    },
    {
      'name': 'ruchivska',
      '$kuid': 'ry2ral60w',
      'label': [
        'Руч\'ївська',
        'Ruchivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'ruchivska'
    },
    {
      'name': 'rudkivska',
      '$kuid': 'yp59IaXW0',
      'label': [
        'Рудківська',
        'Rudkivska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'rudkivska'
    },
    {
      'name': 'rukshynska',
      '$kuid': '3N0erFTdF',
      'label': [
        'Рукшинська',
        'Rukshynska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'rukshynska'
    },
    {
      'name': 'rusakivska',
      '$kuid': 'gdMRR2eUF',
      'label': [
        'Русаківська',
        'Rusakivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'rusakivska'
    },
    {
      'name': 'ruskopolianska',
      '$kuid': 'wdA7LDuaJ',
      'label': [
        'Руськополянська',
        'Ruskopolianska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'ruskopolianska'
    },
    {
      'name': 'ruzhynska',
      '$kuid': 'usmFnynwK',
      'label': [
        'Ружинська',
        'Ruzhynska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ruzhynska'
    },
    {
      'name': 'rzhyshchivska',
      '$kuid': 'sEBnuGyjF',
      'label': [
        'Ржищівська',
        'Rzhyshchivska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'rzhyshchivska'
    },
    {
      'name': 'sadivska',
      '$kuid': 'FZqTpjplE',
      'label': [
        'Садівська',
        'Sadivska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'sadivska'
    },
    {
      'name': 'sadova',
      '$kuid': 'l1mDy4x5L',
      'label': [
        'Садова',
        'Sadova'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'sadova'
    },
    {
      'name': 'safianivska',
      '$kuid': 'F6BAoYk8D',
      'label': [
        'Саф\'янівська',
        'Safianivska'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'safianivska'
    },
    {
      'name': 'sahunivska',
      '$kuid': 'mkf4AM3ug',
      'label': [
        'Сагунівська',
        'Sahunivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'sahunivska'
    },
    {
      'name': 'sakhnovetska',
      '$kuid': 'R0rtiGWE8',
      'label': [
        'Сахновецька',
        'Sakhnovetska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sakhnovetska'
    },
    {
      'name': 'sakhnovshchynska',
      '$kuid': 'qymthbalq',
      'label': [
        'Сахновщинська',
        'Sakhnovshchynska'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'sakhnovshchynska'
    },
    {
      'name': 'saksahanska',
      '$kuid': '6Jd0XWKBD',
      'label': [
        'Саксаганська',
        'Saksahanska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'saksahanska'
    },
    {
      'name': 'sakska',
      '$kuid': 'BVP9b8Uoi',
      'label': [
        'Сакська',
        'Sakska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sakska'
    },
    {
      'name': 'samarivska',
      '$kuid': 'KN73bPCrc',
      'label': [
        'Самарівська',
        'Samarivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'samarivska'
    },
    {
      'name': 'sambirska',
      '$kuid': 'rMnH2wNfG',
      'label': [
        'Самбірська',
        'Sambirska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'sambirska'
    },
    {
      'name': 'samhorodotska',
      '$kuid': 'EfrTAPomD',
      'label': [
        'Самгородоцька',
        'Samhorodotska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'samhorodotska'
    },
    {
      'name': 'saranchukivska',
      '$kuid': 'gP5k03BhD',
      'label': [
        'Саранчуківська',
        'Saranchukivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'saranchukivska'
    },
    {
      'name': 'saratska',
      '$kuid': 'd3PzKdq9Q',
      'label': [
        'Саратська',
        'Saratska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'saratska'
    },
    {
      'name': 'sarnenska',
      '$kuid': 'eTLrih8Od',
      'label': [
        'Сарненська',
        'Sarnenska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'sarnenska'
    },
    {
      'name': 'sartanska',
      '$kuid': 'JygK6gx8C',
      'label': [
        'Сартанська',
        'Sartanska'
      ],
      'raion': 'mariupolskyi',
      'list_name': 'hromada',
      '$autovalue': 'sartanska'
    },
    {
      'name': 'sarybashivska',
      '$kuid': 'vRodz5HiW',
      'label': [
        'Сарибашівська',
        'Sarybashivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'sarybashivska'
    },
    {
      'name': 'satanivska',
      '$kuid': 'Gf1XiqzCu',
      'label': [
        'Сатанівська',
        'Satanivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'satanivska'
    },
    {
      'name': 'savranska',
      '$kuid': 'RvQB2oHVN',
      'label': [
        'Савранська',
        'Savranska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'savranska'
    },
    {
      'name': 'savynska',
      '$kuid': 'HFhSzPe3a',
      'label': [
        'Савинська',
        'Savynska'
      ],
      'raion': 'iziumskyi',
      'list_name': 'hromada',
      '$autovalue': 'savynska'
    },
    {
      'name': 'sednivska',
      '$kuid': 'SdnYT7cla',
      'label': [
        'Седнівська',
        'Sednivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sednivska'
    },
    {
      'name': 'seliatynska',
      '$kuid': '9FPt848qo',
      'label': [
        'Селятинська',
        'Seliatynska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'seliatynska'
    },
    {
      'name': 'selydivska',
      '$kuid': 'w9dsIVOwI',
      'label': [
        'Селидівська',
        'Selydivska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'selydivska'
    },
    {
      'name': 'selyshchenska',
      '$kuid': 'ZHMlKU9Dw',
      'label': [
        'Селищенська',
        'Selyshchenska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'selyshchenska'
    },
    {
      'name': 'semenivska',
      '$kuid': 'Ww2cDw3Yl',
      'label': [
        'Семенівська',
        'Semenivska'
      ],
      'raion': 'novhorod-siverskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska'
    },
    {
      'name': 'semenivska_2',
      '$kuid': '2uQwA4lpq',
      'label': [
        'Семенівська',
        'Semenivska'
      ],
      'raion': 'kremenchutskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska_2'
    },
    {
      'name': 'semenivska_3',
      '$kuid': 'ohyUWsUEk',
      'label': [
        'Семенівська',
        'Semenivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska_3'
    },
    {
      'name': 'semenivska_4',
      '$kuid': '5KgwseeTa',
      'label': [
        'Семенівська',
        'Semenivska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'semenivska_4'
    },
    {
      'name': 'semydubska',
      '$kuid': 'KUPWT5x95',
      'label': [
        'Семидубська',
        'Semydubska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'semydubska'
    },
    {
      'name': 'semysotska',
      '$kuid': '2LMvrahc0',
      'label': [
        'Семисотська',
        'Semysotska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'semysotska'
    },
    {
      'name': 'senchanska',
      '$kuid': 'KZox5WTNQ',
      'label': [
        'Сенчанська',
        'Senchanska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'senchanska'
    },
    {
      'name': 'serebrianska',
      '$kuid': '9qQXzq23j',
      'label': [
        'Серебрянська',
        'Serebrianska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'serebrianska'
    },
    {
      'name': 'serednianska',
      '$kuid': 'c4bMSpCgU',
      'label': [
        'Середнянська',
        'Serednianska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'serednianska'
    },
    {
      'name': 'seredyno-budska',
      '$kuid': 'O2FvZmPo0',
      'label': [
        'Середино-Будська',
        'Seredyno-Budska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'seredyno-budska'
    },
    {
      'name': 'serekhovychivska',
      '$kuid': 'TOIGMUYo1',
      'label': [
        'Сереховичівська',
        'Serekhovychivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'serekhovychivska'
    },
    {
      'name': 'serhiivska',
      '$kuid': '7oxdx8weq',
      'label': [
        'Сергіївська',
        'Serhiivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'serhiivska'
    },
    {
      'name': 'serhiivska_2',
      '$kuid': 'G2Viv0wGg',
      'label': [
        'Сергіївська',
        'Serhiivska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'serhiivska_2'
    },
    {
      'name': 'sevastopilska_2',
      '$kuid': '8pKkl0sVx',
      'label': [
        'Севастопільська',
        'Sevastopilska'
      ],
      'raion': 'sevastopilska',
      'list_name': 'hromada',
      '$autovalue': 'sevastopilska_2'
    },
    {
      'name': 'sevastopilska_3',
      '$kuid': 'N9GbJq1Ut',
      'label': [
        'Севастопільська',
        'Sevastopilska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sevastopilska_3'
    },
    {
      'name': 'severynivska',
      '$kuid': 'WEPEK5GHe',
      'label': [
        'Северинівська',
        'Severynivska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'severynivska'
    },
    {
      'name': 'shabivska',
      '$kuid': 'EZDIMwoV6',
      'label': [
        'Шабівська',
        'Shabivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'shabivska'
    },
    {
      'name': 'shakhivska',
      '$kuid': '5RLiBtazB',
      'label': [
        'Шахівська',
        'Shakhivska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'shakhivska'
    },
    {
      'name': 'shakhtarska',
      '$kuid': 'WIWkAVG5h',
      'label': [
        'Шахтарська',
        'Shakhtarska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shakhtarska'
    },
    {
      'name': 'shalyhynska',
      '$kuid': 'LvMiywIqb',
      'label': [
        'Шалигинська',
        'Shalyhynska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shalyhynska'
    },
    {
      'name': 'sharhorodska',
      '$kuid': 'RhdHLGn66',
      'label': [
        'Шаргородська',
        'Sharhorodska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'sharhorodska'
    },
    {
      'name': 'shatska',
      '$kuid': 'oRszRwrrs',
      'label': [
        'Шацька',
        'Shatska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'shatska'
    },
    {
      'name': 'shchastynska',
      '$kuid': 'SnPBsUfgx',
      'label': [
        'Щастинська',
        'Shchastynska'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchastynska'
    },
    {
      'name': 'shchebetovska',
      '$kuid': 'GY3CNlnf8',
      'label': [
        'Щебетовська',
        'Shchebetovska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchebetovska'
    },
    {
      'name': 'shcherbanivska',
      '$kuid': 'AU3uVZjlj',
      'label': [
        'Щербанівська',
        'Shcherbanivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'shcherbanivska'
    },
    {
      'name': 'shcholkinska',
      '$kuid': 'LGFKsmolH',
      'label': [
        'Щолкінська',
        'Shcholkinska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shcholkinska'
    },
    {
      'name': 'shchyborivska',
      '$kuid': 'JKgDVOXdg',
      'label': [
        'Щиборівська',
        'Shchyborivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchyborivska'
    },
    {
      'name': 'shchyretska',
      '$kuid': 'N7iAZd646',
      'label': [
        'Щирецька',
        'Shchyretska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shchyretska'
    },
    {
      'name': 'shehynivska',
      '$kuid': 'KMTtWibWp',
      'label': [
        'Шегинівська',
        'Shehynivska'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shehynivska'
    },
    {
      'name': 'shepetivska',
      '$kuid': 'MoJtKffam',
      'label': [
        'Шепетівська',
        'Shepetivska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shepetivska'
    },
    {
      'name': 'shevchenkivska',
      '$kuid': 'InWVp4CIQ',
      'label': [
        'Шевченківська',
        'Shevchenkivska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'shevchenkivska'
    },
    {
      'name': 'shevchenkivska_2',
      '$kuid': 'HdUwIbDN2',
      'label': [
        'Шевченківська',
        'Shevchenkivska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'shevchenkivska_2'
    },
    {
      'name': 'shevchenkivska_3',
      '$kuid': 'Qmi2d8WDi',
      'label': [
        'Шевченківська',
        'Shevchenkivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shevchenkivska_3'
    },
    {
      'name': 'shkilnenska',
      '$kuid': '7dcdeOtgz',
      'label': [
        'Шкільненська',
        'Shkilnenska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'shkilnenska'
    },
    {
      'name': 'shostkynska',
      '$kuid': 'i5B6u1Tpm',
      'label': [
        'Шосткинська',
        'Shostkynska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shostkynska'
    },
    {
      'name': 'shpanivska',
      '$kuid': 'RPc4OUycL',
      'label': [
        'Шпанівська',
        'Shpanivska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'shpanivska'
    },
    {
      'name': 'shpolianska',
      '$kuid': 'fEK1aa1tI',
      'label': [
        'Шполянська',
        'Shpolianska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'shpolianska'
    },
    {
      'name': 'shpykivska',
      '$kuid': '8EZkiRFMN',
      'label': [
        'Шпиківська',
        'Shpykivska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shpykivska'
    },
    {
      'name': 'shramkivska',
      '$kuid': '1sQPRJlYF',
      'label': [
        'Шрамківська',
        'Shramkivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'shramkivska'
    },
    {
      'name': 'shtormivska',
      '$kuid': 's6oxmc9OX',
      'label': [
        'Штормівська',
        'Shtormivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'shtormivska'
    },
    {
      'name': 'shulhynska',
      '$kuid': 'ioPOiwsQb',
      'label': [
        'Шульгинська',
        'Shulhynska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'shulhynska'
    },
    {
      'name': 'shumska',
      '$kuid': '15SRY5kqg',
      'label': [
        'Шумська',
        'Shumska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'shumska'
    },
    {
      'name': 'shvaikivska',
      '$kuid': 'GPwxeh1Cd',
      'label': [
        'Швайківська',
        'Shvaikivska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shvaikivska'
    },
    {
      'name': 'shyriaivska',
      '$kuid': '1bczn5QgA',
      'label': [
        'Ширяївська',
        'Shyriaivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyriaivska'
    },
    {
      'name': 'shyrokivska',
      '$kuid': '8M8UwRrC1',
      'label': [
        'Широківська',
        'Shyrokivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska'
    },
    {
      'name': 'shyrokivska_2',
      '$kuid': 'oNIanPjFH',
      'label': [
        'Широківська',
        'Shyrokivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_2'
    },
    {
      'name': 'shyrokivska_3',
      '$kuid': 'qFOD6NjYn',
      'label': [
        'Широківська',
        'Shyrokivska'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_3'
    },
    {
      'name': 'shyrokivska_4',
      '$kuid': 'oufVx2ZrW',
      'label': [
        'Широківська',
        'Shyrokivska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_4'
    },
    {
      'name': 'shyrokivska_5',
      '$kuid': 'seebf9HE5',
      'label': [
        'Широківська',
        'Shyrokivska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'shyrokivska_5'
    },
    {
      'name': 'shyshatska',
      '$kuid': 'T5Ce8YPvn',
      'label': [
        'Шишацька',
        'Shyshatska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'shyshatska'
    },
    {
      'name': 'sievierodonetska',
      '$kuid': '65niwbm4F',
      'label': [
        'Сєвєродонецька',
        'Sievierodonetska'
      ],
      'raion': 'sievierodonetskyi',
      'list_name': 'hromada',
      '$autovalue': 'sievierodonetska'
    },
    {
      'name': 'simeizka',
      '$kuid': '0E9SDm3kW',
      'label': [
        'Сімеїзька',
        'Simeizka'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'simeizka'
    },
    {
      'name': 'simferopolska',
      '$kuid': '8iP7Zesbf',
      'label': [
        'Сімферопольська',
        'Simferopolska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'simferopolska'
    },
    {
      'name': 'siurtivska',
      '$kuid': 'xtTqOMubz',
      'label': [
        'Сюртівська',
        'Siurtivska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'siurtivska'
    },
    {
      'name': 'siverska',
      '$kuid': 'kWI2fCalV',
      'label': [
        'Сіверська',
        'Siverska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'siverska'
    },
    {
      'name': 'skadovska',
      '$kuid': 'dYjJz1YDz',
      'label': [
        'Скадовська',
        'Skadovska'
      ],
      'raion': 'skadovskyi',
      'list_name': 'hromada',
      '$autovalue': 'skadovska'
    },
    {
      'name': 'skala-podilska',
      '$kuid': 'sVDUovUoQ',
      'label': [
        'Скала-Подільська',
        'Skala-Podilska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'skala-podilska'
    },
    {
      'name': 'skalatska',
      '$kuid': '7rmKdiHZY',
      'label': [
        'Скалатська',
        'Skalatska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'skalatska'
    },
    {
      'name': 'skalystivska',
      '$kuid': 'zWZkXFdG2',
      'label': [
        'Скалистівська',
        'Skalystivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'skalystivska'
    },
    {
      'name': 'skhidnytska',
      '$kuid': 'lH7yABJIk',
      'label': [
        'Східницька',
        'Skhidnytska'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'skhidnytska'
    },
    {
      'name': 'skolivska',
      '$kuid': 'x8oxrbQ7k',
      'label': [
        'Сколівська',
        'Skolivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'skolivska'
    },
    {
      'name': 'skorokhodivska',
      '$kuid': 'Y6KZ6Ud4P',
      'label': [
        'Скороходівська',
        'Skorokhodivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'skorokhodivska'
    },
    {
      'name': 'skorykivska',
      '$kuid': '09apDDHir',
      'label': [
        'Скориківська',
        'Skorykivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'skorykivska'
    },
    {
      'name': 'skvortsivska',
      '$kuid': 'egzhJXIiN',
      'label': [
        'Скворцівська',
        'Skvortsivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'skvortsivska'
    },
    {
      'name': 'skvyrska',
      '$kuid': '4icyE3a82',
      'label': [
        'Сквирська',
        'Skvyrska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'skvyrska'
    },
    {
      'name': 'slavhorodska',
      '$kuid': 'Kw5pFEy55',
      'label': [
        'Славгородська',
        'Slavhorodska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavhorodska'
    },
    {
      'name': 'slavnivska',
      '$kuid': 'xDLznft5F',
      'label': [
        'Славнівська',
        'Slavnivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavnivska'
    },
    {
      'name': 'slavska',
      '$kuid': 'fTnSQpuK9',
      'label': [
        'Славська',
        'Slavska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavska'
    },
    {
      'name': 'slavutska',
      '$kuid': 's1rJoe8Th',
      'label': [
        'Славутська',
        'Slavutska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavutska'
    },
    {
      'name': 'slavutytska',
      '$kuid': 'ubGIHMNiU',
      'label': [
        'Славутицька',
        'Slavutytska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'slavutytska'
    },
    {
      'name': 'slobidska',
      '$kuid': 'awZusFmBx',
      'label': [
        'Слобідська',
        'Slobidska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobidska'
    },
    {
      'name': 'slobidsko-kulchiievetska',
      '$kuid': 'RJWhidD3i',
      'label': [
        'Слобідсько-Кульчієвецька',
        'Slobidsko-Kulchiievetska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobidsko-kulchiievetska'
    },
    {
      'name': 'slobozhanska',
      '$kuid': '46wz7VMpV',
      'label': [
        'Слобожанська',
        'Slobozhanska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobozhanska'
    },
    {
      'name': 'slobozhanska_2',
      '$kuid': 'tzkaHHjp8',
      'label': [
        'Слобожанська',
        'Slobozhanska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slobozhanska_2'
    },
    {
      'name': 'slovechanska',
      '$kuid': 'S06RX0pYy',
      'label': [
        'Словечанська',
        'Slovechanska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovechanska'
    },
    {
      'name': 'slovianska',
      '$kuid': 'zryW8zSOs',
      'label': [
        'Слов\'янська',
        'Slovianska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovianska'
    },
    {
      'name': 'slovianska_2',
      '$kuid': '7QecO2IXh',
      'label': [
        'Слов\'янська',
        'Slovianska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovianska_2'
    },
    {
      'name': 'slovianska_3',
      '$kuid': 'wXGHdiD5F',
      'label': [
        'Слов\'янська',
        'Slovianska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'slovianska_3'
    },
    {
      'name': 'smidynska',
      '$kuid': 'ARm8gIO31',
      'label': [
        'Смідинська',
        'Smidynska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'smidynska'
    },
    {
      'name': 'smilianska',
      '$kuid': 'aoYpzyJbV',
      'label': [
        'Смілянська',
        'Smilianska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'smilianska'
    },
    {
      'name': 'smolinska',
      '$kuid': 'iRc8GPZt2',
      'label': [
        'Смолінська',
        'Smolinska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'smolinska'
    },
    {
      'name': 'smotrytska',
      '$kuid': 'V5eZjS40S',
      'label': [
        'Смотрицька',
        'Smotrytska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'smotrytska'
    },
    {
      'name': 'smyrnovska',
      '$kuid': 'aaaG5B6lS',
      'label': [
        'Смирновська',
        'Smyrnovska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'smyrnovska'
    },
    {
      'name': 'smyzka',
      '$kuid': 'UPqjZmQD5',
      'label': [
        'Смизька',
        'Smyzka'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'smyzka'
    },
    {
      'name': 'sniatynska',
      '$kuid': 'cx5p5WX8W',
      'label': [
        'Снятинська',
        'Sniatynska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sniatynska'
    },
    {
      'name': 'snihurivska',
      '$kuid': 'uAMsehPFm',
      'label': [
        'Снігурівська',
        'Snihurivska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'snihurivska'
    },
    {
      'name': 'snizhnianska',
      '$kuid': 'qYYIhFjYa',
      'label': [
        'Сніжнянська',
        'Snizhnianska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'snizhnianska'
    },
    {
      'name': 'snovska',
      '$kuid': 'Ia96jnLei',
      'label': [
        'Сновська',
        'Snovska'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'snovska'
    },
    {
      'name': 'sobolivska',
      '$kuid': 'AyHfEZ1ut',
      'label': [
        'Соболівська',
        'Sobolivska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'sobolivska'
    },
    {
      'name': 'sofiivska',
      '$kuid': 'Xo86dNNv0',
      'label': [
        'Софіївська',
        'Sofiivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'sofiivska'
    },
    {
      'name': 'sofiivska_2',
      '$kuid': 'NHFvTU0ST',
      'label': [
        'Софіївська',
        'Sofiivska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'sofiivska_2'
    },
    {
      'name': 'sokalska',
      '$kuid': 'Mu4vvnnVQ',
      'label': [
        'Сокальська',
        'Sokalska'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokalska'
    },
    {
      'name': 'sokilnytska',
      '$kuid': 'HjZNXsciU',
      'label': [
        'Сокільницька',
        'Sokilnytska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokilnytska'
    },
    {
      'name': 'sokolivska',
      '$kuid': 'L6FiGPNZj',
      'label': [
        'Соколівська',
        'Sokolivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokolivska'
    },
    {
      'name': 'sokyrianska',
      '$kuid': 'GFVBI2wkj',
      'label': [
        'Сокирянська',
        'Sokyrianska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'sokyrianska'
    },
    {
      'name': 'soledarska',
      '$kuid': '9BZ4Mr9qq',
      'label': [
        'Соледарська',
        'Soledarska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'soledarska'
    },
    {
      'name': 'solobkovetska',
      '$kuid': 'oVUPMkFHN',
      'label': [
        'Солобковецька',
        'Solobkovetska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'solobkovetska'
    },
    {
      'name': 'solonianska',
      '$kuid': 'Y3jJFmi5w',
      'label': [
        'Солонянська',
        'Solonianska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'solonianska'
    },
    {
      'name': 'solonkivska',
      '$kuid': '6A7rwSHXJ',
      'label': [
        'Солонківська',
        'Solonkivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solonkivska'
    },
    {
      'name': 'solonytsivska',
      '$kuid': 'GxsWPLGnW',
      'label': [
        'Солоницівська',
        'Solonytsivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solonytsivska'
    },
    {
      'name': 'solotvynska',
      '$kuid': 'eopxPxnTs',
      'label': [
        'Солотвинська',
        'Solotvynska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solotvynska'
    },
    {
      'name': 'solotvynska_2',
      '$kuid': 'WwjMXNjIf',
      'label': [
        'Солотвинська',
        'Solotvynska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'solotvynska_2'
    },
    {
      'name': 'soniachnodolynska',
      '$kuid': 'FfKmN0Ro9',
      'label': [
        'Сонячнодолинська',
        'Soniachnodolynska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'soniachnodolynska'
    },
    {
      'name': 'sorokynska',
      '$kuid': 'QuJzg7ukQ',
      'label': [
        'Сорокинська',
        'Sorokynska'
      ],
      'raion': 'dovzhanskyi',
      'list_name': 'hromada',
      '$autovalue': 'sorokynska'
    },
    {
      'name': 'soshychnenska',
      '$kuid': '82EcdnUIS',
      'label': [
        'Сошичненська',
        'Soshychnenska'
      ],
      'raion': 'kamin-kashyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'soshychnenska'
    },
    {
      'name': 'sosnivska',
      '$kuid': 'oXs07UF08',
      'label': [
        'Соснівська',
        'Sosnivska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'sosnivska'
    },
    {
      'name': 'sosnytska',
      '$kuid': '1TmI6Q0UN',
      'label': [
        'Сосницька',
        'Sosnytska'
      ],
      'raion': 'koriukivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sosnytska'
    },
    {
      'name': 'sovietska',
      '$kuid': 'xIur9ZShd',
      'label': [
        'Совєтська',
        'Sovietska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sovietska'
    },
    {
      'name': 'sovkhoznenska',
      '$kuid': '5CqdBDwUv',
      'label': [
        'Совхозненська',
        'Sovkhoznenska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'sovkhoznenska'
    },
    {
      'name': 'spaska',
      '$kuid': 'HOlovL2Xd',
      'label': [
        'Спаська',
        'Spaska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'spaska'
    },
    {
      'name': 'sribnianska',
      '$kuid': 'nCxn5G91u',
      'label': [
        'Срібнянська',
        'Sribnianska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'sribnianska'
    },
    {
      'name': 'stakhanovska',
      '$kuid': '3at5G4x4q',
      'label': [
        'Стахановська',
        'Stakhanovska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'stakhanovska'
    },
    {
      'name': 'stalnenska',
      '$kuid': 'ZP82GQdRh',
      'label': [
        'Стальненська',
        'Stalnenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'stalnenska'
    },
    {
      'name': 'stanislavchytska',
      '$kuid': 'HB5Jh5K0u',
      'label': [
        'Станіславчицька',
        'Stanislavchytska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanislavchytska'
    },
    {
      'name': 'stanislavska',
      '$kuid': 'xIJymderZ',
      'label': [
        'Станіславська',
        'Stanislavska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanislavska'
    },
    {
      'name': 'stanychno-luhanska',
      '$kuid': 'stSoKBzL8',
      'label': [
        'Станично-Луганська',
        'Stanychno-Luhanska'
      ],
      'raion': 'shchastynskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanychno-luhanska'
    },
    {
      'name': 'stanyshivska',
      '$kuid': 'RNHlrs6pE',
      'label': [
        'Станишівська',
        'Stanyshivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'stanyshivska'
    },
    {
      'name': 'starobeshivska',
      '$kuid': 'cLRnPUarU',
      'label': [
        'Старобешівська',
        'Starobeshivska'
      ],
      'raion': 'kalmiuskyi',
      'list_name': 'hromada',
      '$autovalue': 'starobeshivska'
    },
    {
      'name': 'starobilska',
      '$kuid': 'Z0v8VzS4z',
      'label': [
        'Старобільська',
        'Starobilska'
      ],
      'raion': 'starobilskyi',
      'list_name': 'hromada',
      '$autovalue': 'starobilska'
    },
    {
      'name': 'starobohorodchanska',
      '$kuid': 'fU9dgAYeH',
      'label': [
        'Старобогородчанська',
        'Starobohorodchanska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'starobohorodchanska'
    },
    {
      'name': 'starokostiantynivska',
      '$kuid': 'qixVBtUOP',
      'label': [
        'Старокостянтинівська',
        'Starokostiantynivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'starokostiantynivska'
    },
    {
      'name': 'starokozatska',
      '$kuid': 'XtSy65aUz',
      'label': [
        'Старокозацька',
        'Starokozatska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'starokozatska'
    },
    {
      'name': 'starokrymska',
      '$kuid': 'e7iVukrOK',
      'label': [
        'Старокримська',
        'Starokrymska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'starokrymska'
    },
    {
      'name': 'staromaiakivska',
      '$kuid': 'I8eBwKqSi',
      'label': [
        'Старомаяківська',
        'Staromaiakivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'staromaiakivska'
    },
    {
      'name': 'staromlynivska',
      '$kuid': 'Tf67ARyZu',
      'label': [
        'Старомлинівська',
        'Staromlynivska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'staromlynivska'
    },
    {
      'name': 'staroostropilska',
      '$kuid': 'cuE7Qwocj',
      'label': [
        'Староостропільська',
        'Staroostropilska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'staroostropilska'
    },
    {
      'name': 'starosaltivska',
      '$kuid': 'GuHVtkXZv',
      'label': [
        'Старосалтівська',
        'Starosaltivska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosaltivska'
    },
    {
      'name': 'starosambirska',
      '$kuid': 'xTfJqX1a8',
      'label': [
        'Старосамбірська',
        'Starosambirska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosambirska'
    },
    {
      'name': 'starosiletska',
      '$kuid': 'SLC3N8gUD',
      'label': [
        'Старосілецька',
        'Starosiletska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosiletska'
    },
    {
      'name': 'starosilska',
      '$kuid': 'I3Fwhl2pS',
      'label': [
        'Старосільська',
        'Starosilska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosilska'
    },
    {
      'name': 'starosyniavska',
      '$kuid': 'HJJ5sxLev',
      'label': [
        'Старосинявська',
        'Starosyniavska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'starosyniavska'
    },
    {
      'name': 'staroushytska',
      '$kuid': 'fEOSTs5mH',
      'label': [
        'Староушицька',
        'Staroushytska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'staroushytska'
    },
    {
      'name': 'starovirivska',
      '$kuid': 'ILZwrc9aH',
      'label': [
        'Старовірівська',
        'Starovirivska'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'starovirivska'
    },
    {
      'name': 'starovyzhivska',
      '$kuid': 'HGyLfJTvh',
      'label': [
        'Старовижівська',
        'Starovyzhivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'starovyzhivska'
    },
    {
      'name': 'stavchanska',
      '$kuid': 'ip9krrkq7',
      'label': [
        'Ставчанська',
        'Stavchanska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'stavchanska'
    },
    {
      'name': 'stavnenska',
      '$kuid': 'ZAm2BtPAW',
      'label': [
        'Ставненська',
        'Stavnenska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'stavnenska'
    },
    {
      'name': 'stavyshchenska',
      '$kuid': 'vDvHprvMr',
      'label': [
        'Ставищенська',
        'Stavyshchenska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'stavyshchenska'
    },
    {
      'name': 'steblivska',
      '$kuid': 'NIfpUjBKr',
      'label': [
        'Стеблівська',
        'Steblivska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'steblivska'
    },
    {
      'name': 'stepanetska',
      '$kuid': 'vsVxSqJVm',
      'label': [
        'Степанецька',
        'Stepanetska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanetska'
    },
    {
      'name': 'stepanivska',
      '$kuid': 'TdLVbFZ1w',
      'label': [
        'Степанівська',
        'Stepanivska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanivska'
    },
    {
      'name': 'stepanivska_2',
      '$kuid': 'wjg74XvX1',
      'label': [
        'Степанівська',
        'Stepanivska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanivska_2'
    },
    {
      'name': 'stepankivska',
      '$kuid': '49BXzrUTB',
      'label': [
        'Степанківська',
        'Stepankivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepankivska'
    },
    {
      'name': 'stepanska',
      '$kuid': 'BDwtpMQ0M',
      'label': [
        'Степанська',
        'Stepanska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepanska'
    },
    {
      'name': 'stepivska',
      '$kuid': 'BL2HQZ7kX',
      'label': [
        'Степівська',
        'Stepivska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepivska'
    },
    {
      'name': 'stepnenska',
      '$kuid': 'Sa5EtLo2u',
      'label': [
        'Степненська',
        'Stepnenska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'stepnenska'
    },
    {
      'name': 'stepnivska',
      '$kuid': 'RLHSNDHiy',
      'label': [
        'Степнівська',
        'Stepnivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepnivska'
    },
    {
      'name': 'stepnohirska',
      '$kuid': 'Mu9x9vKRg',
      'label': [
        'Степногірська',
        'Stepnohirska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'stepnohirska'
    },
    {
      'name': 'storozhynetska',
      '$kuid': 'LtSbxdYtZ',
      'label': [
        'Сторожинецька',
        'Storozhynetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'storozhynetska'
    },
    {
      'name': 'stovpivska',
      '$kuid': 'ifZd25fUH',
      'label': [
        'Стовпівська',
        'Stovpivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'stovpivska'
    },
    {
      'name': 'strilkivska',
      '$kuid': 'WRuor74YO',
      'label': [
        'Стрілківська',
        'Strilkivska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'strilkivska'
    },
    {
      'name': 'striukivska',
      '$kuid': '76zoLDrmR',
      'label': [
        'Стрюківська',
        'Striukivska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'striukivska'
    },
    {
      'name': 'stryiska',
      '$kuid': 'oILAqUgl0',
      'label': [
        'Стрийська',
        'Stryiska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'stryiska'
    },
    {
      'name': 'stryivska',
      '$kuid': 'KelX18P7D',
      'label': [
        'Стриївська',
        'Stryivska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'stryivska'
    },
    {
      'name': 'stryzhavska',
      '$kuid': 'RNSxDmCU6',
      'label': [
        'Стрижавська',
        'Stryzhavska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'stryzhavska'
    },
    {
      'name': 'studenianska',
      '$kuid': 'ayS4QqwZ4',
      'label': [
        'Студенянська',
        'Studenianska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'studenianska'
    },
    {
      'name': 'studenykivska',
      '$kuid': 'mflK63Ll6',
      'label': [
        'Студениківська',
        'Studenykivska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'studenykivska'
    },
    {
      'name': 'subottsivska',
      '$kuid': 'E3ceQJZw8',
      'label': [
        'Суботцівська',
        'Subottsivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'subottsivska'
    },
    {
      'name': 'suchevenska',
      '$kuid': 'dgAp90QqU',
      'label': [
        'Сучевенська',
        'Suchevenska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'suchevenska'
    },
    {
      'name': 'sudatska',
      '$kuid': 'JyxCzjZbU',
      'label': [
        'Судацька',
        'Sudatska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'sudatska'
    },
    {
      'name': 'sudovovyshnianska',
      '$kuid': 'IiWZ5ADZV',
      'label': [
        'Судововишнянська',
        'Sudovovyshnianska'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sudovovyshnianska'
    },
    {
      'name': 'sudylkivska',
      '$kuid': 'bu8zMnqyB',
      'label': [
        'Судилківська',
        'Sudylkivska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sudylkivska'
    },
    {
      'name': 'sukhoielanetska',
      '$kuid': '8Pcp9GEJk',
      'label': [
        'Сухоєланецька',
        'Sukhoielanetska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'sukhoielanetska'
    },
    {
      'name': 'sukhopolovianska',
      '$kuid': 'aXyRVkOCw',
      'label': [
        'Сухополов\'янська',
        'Sukhopolovianska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'sukhopolovianska'
    },
    {
      'name': 'sumska_3',
      '$kuid': 'rCNciNoVZ',
      'label': [
        'Сумська',
        'Sumska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'sumska_3'
    },
    {
      'name': 'sursko-lytovska',
      '$kuid': 'lVi7kdVm7',
      'label': [
        'Сурсько-Литовська',
        'Sursko-Lytovska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'sursko-lytovska'
    },
    {
      'name': 'susaninska',
      '$kuid': 'XrHCarpzy',
      'label': [
        'Сусанінська',
        'Susaninska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'susaninska'
    },
    {
      'name': 'sutyskivska',
      '$kuid': 'dZxlgUPzo',
      'label': [
        'Сутисківська',
        'Sutyskivska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'sutyskivska'
    },
    {
      'name': 'suvorovska',
      '$kuid': 's7iNAPXcq',
      'label': [
        'Суворовська',
        'Suvorovska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'suvorovska'
    },
    {
      'name': 'suvorovska_2',
      '$kuid': 'hr8VG9Gdg',
      'label': [
        'Суворовська',
        'Suvorovska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'suvorovska_2'
    },
    {
      'name': 'suvorovska_3',
      '$kuid': 'XBeM4z34V',
      'label': [
        'Суворовська',
        'Suvorovska'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'suvorovska_3'
    },
    {
      'name': 'svaliavska',
      '$kuid': 'T2VA5yvIs',
      'label': [
        'Свалявська',
        'Svaliavska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'svaliavska'
    },
    {
      'name': 'svativska',
      '$kuid': 'fuW0nOF7r',
      'label': [
        'Сватівська',
        'Svativska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'svativska'
    },
    {
      'name': 'sveska',
      '$kuid': 'D4AevGhlv',
      'label': [
        'Свеська',
        'Sveska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'sveska'
    },
    {
      'name': 'sviatohirska',
      '$kuid': 'zDIRYG9eI',
      'label': [
        'Святогірська',
        'Sviatohirska'
      ],
      'raion': 'kramatorskyi',
      'list_name': 'hromada',
      '$autovalue': 'sviatohirska'
    },
    {
      'name': 'sviatovasylivska',
      '$kuid': 'x0kI13Ijb',
      'label': [
        'Святовасилівська',
        'Sviatovasylivska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'sviatovasylivska'
    },
    {
      'name': 'svitlivska',
      '$kuid': 'b8uR3aqun',
      'label': [
        'Світлівська',
        'Svitlivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'svitlivska'
    },
    {
      'name': 'svitlodarska',
      '$kuid': 'K5md2MLqk',
      'label': [
        'Світлодарська',
        'Svitlodarska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'svitlodarska'
    },
    {
      'name': 'svitlovodska',
      '$kuid': 'BxQ3wkfCa',
      'label': [
        'Світловодська',
        'Svitlovodska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'svitlovodska'
    },
    {
      'name': 'synelnykivska',
      '$kuid': 'q33kOYULF',
      'label': [
        'Синельниківська',
        'Synelnykivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'synelnykivska'
    },
    {
      'name': 'synevyrska',
      '$kuid': 'zRL4vXWmm',
      'label': [
        'Синевирська',
        'Synevyrska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'synevyrska'
    },
    {
      'name': 'syniukhynobridska',
      '$kuid': '8TIoOJzQr',
      'label': [
        'Синюхинобрідська',
        'Syniukhynobridska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'syniukhynobridska'
    },
    {
      'name': 'synivska',
      '$kuid': 'Dhu73X2Vz',
      'label': [
        'Синівська',
        'Synivska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'synivska'
    },
    {
      'name': 'synytsynska',
      '$kuid': 'udxlMEOU1',
      'label': [
        'Синицинська',
        'Synytsynska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'synytsynska'
    },
    {
      'name': 'syzivska',
      '$kuid': 'slghlq8B5',
      'label': [
        'Сизівська',
        'Syzivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'syzivska'
    },
    {
      'name': 'tabachnenska',
      '$kuid': 'PhMNBMwji',
      'label': [
        'Табачненська',
        'Tabachnenska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tabachnenska'
    },
    {
      'name': 'tabachnenska_2',
      '$kuid': 'hIZX3dwUZ',
      'label': [
        'Табачненська',
        'Tabachnenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tabachnenska_2'
    },
    {
      'name': 'tairovska',
      '$kuid': 'e4wvNarbl',
      'label': [
        'Таїровська',
        'Tairovska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'tairovska'
    },
    {
      'name': 'talalaivska',
      '$kuid': 'NSawxsK6m',
      'label': [
        'Талалаївська',
        'Talalaivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'talalaivska'
    },
    {
      'name': 'talalaivska_2',
      '$kuid': '6xPdoyRX7',
      'label': [
        'Талалаївська',
        'Talalaivska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'talalaivska_2'
    },
    {
      'name': 'talnivska',
      '$kuid': 'UQRZu4xN6',
      'label': [
        'Тальнівська',
        'Talnivska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'talnivska'
    },
    {
      'name': 'tarakanivska',
      '$kuid': 'B4T0X59in',
      'label': [
        'Тараканівська',
        'Tarakanivska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarakanivska'
    },
    {
      'name': 'tarashanska',
      '$kuid': 'vwtcbWnPN',
      'label': [
        'Тарашанська',
        'Tarashanska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarashanska'
    },
    {
      'name': 'tarashchanska',
      '$kuid': 'G4rLlQrek',
      'label': [
        'Таращанська',
        'Tarashchanska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarashchanska'
    },
    {
      'name': 'tarutynska',
      '$kuid': 'PoaembsPV',
      'label': [
        'Тарутинська',
        'Tarutynska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'tarutynska'
    },
    {
      'name': 'tashanska',
      '$kuid': 'ivsaZdAdN',
      'label': [
        'Ташанська',
        'Tashanska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'tashanska'
    },
    {
      'name': 'tatarbunarska',
      '$kuid': 'LkGVLgqK7',
      'label': [
        'Татарбунарська',
        'Tatarbunarska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tatarbunarska'
    },
    {
      'name': 'tavriiska',
      '$kuid': 'ZBzsHdZ67',
      'label': [
        'Таврійська',
        'Tavriiska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tavriiska'
    },
    {
      'name': 'tavriiska_3',
      '$kuid': 'RKgOcZjBa',
      'label': [
        'Таврійська',
        'Tavriiska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'tavriiska_3'
    },
    {
      'name': 'tavrychanska',
      '$kuid': 'CYQXy7J0i',
      'label': [
        'Тавричанська',
        'Tavrychanska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tavrychanska'
    },
    {
      'name': 'teofipolska',
      '$kuid': 'Vo7O7tDEB',
      'label': [
        'Теофіпольська',
        'Teofipolska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'teofipolska'
    },
    {
      'name': 'teplodarska',
      '$kuid': 'x3YLvSFsB',
      'label': [
        'Теплодарська',
        'Teplodarska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'teplodarska'
    },
    {
      'name': 'teplytska',
      '$kuid': 'ChRN5JgPS',
      'label': [
        'Теплицька',
        'Teplytska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'teplytska'
    },
    {
      'name': 'teplytska_2',
      '$kuid': 'QoipFUSTA',
      'label': [
        'Теплицька',
        'Teplytska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'teplytska_2'
    },
    {
      'name': 'tereblechenska',
      '$kuid': 'I5QNCTaCh',
      'label': [
        'Тереблеченська',
        'Tereblechenska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'tereblechenska'
    },
    {
      'name': 'terebovlianska',
      '$kuid': 'xW5c5ewV7',
      'label': [
        'Теребовлянська',
        'Terebovlianska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'terebovlianska'
    },
    {
      'name': 'tereshkivska',
      '$kuid': '2KZAvigH9',
      'label': [
        'Терешківська',
        'Tereshkivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'tereshkivska'
    },
    {
      'name': 'teresvianska',
      '$kuid': 'o6dUl8yJ7',
      'label': [
        'Тересвянська',
        'Teresvianska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'teresvianska'
    },
    {
      'name': 'ternivska',
      '$kuid': 'vXaCzzzYW',
      'label': [
        'Тернівська',
        'Ternivska'
      ],
      'raion': 'cherkaskyi',
      'list_name': 'hromada',
      '$autovalue': 'ternivska'
    },
    {
      'name': 'ternivska_2',
      '$kuid': 'y6RXdskA7',
      'label': [
        'Тернівська',
        'Ternivska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'ternivska_2'
    },
    {
      'name': 'ternopilska_3',
      '$kuid': 'aF9fpbRuq',
      'label': [
        'Тернопільська',
        'Ternopilska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'ternopilska_3'
    },
    {
      'name': 'ternuvatska',
      '$kuid': 'ss7HcOn6S',
      'label': [
        'Тернуватська',
        'Ternuvatska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'ternuvatska'
    },
    {
      'name': 'terpinnivska',
      '$kuid': 'FJPjWrjTz',
      'label': [
        'Терпіннівська',
        'Terpinnivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'terpinnivska'
    },
    {
      'name': 'teterivska',
      '$kuid': 'MhftA28JN',
      'label': [
        'Тетерівська',
        'Teterivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'teterivska'
    },
    {
      'name': 'tetiivska',
      '$kuid': 'sgPqpetU5',
      'label': [
        'Тетіївська',
        'Tetiivska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tetiivska'
    },
    {
      'name': 'tiachivska',
      '$kuid': '2KJVX3fXI',
      'label': [
        'Тячівська',
        'Tiachivska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tiachivska'
    },
    {
      'name': 'tiahynska',
      '$kuid': 'mKwcnjr6C',
      'label': [
        'Тягинська',
        'Tiahynska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'tiahynska'
    },
    {
      'name': 'tinystivska',
      '$kuid': 'HEzEATPr8',
      'label': [
        'Тінистівська',
        'Tinystivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tinystivska'
    },
    {
      'name': 'tlumatska',
      '$kuid': 'owDbJO7uI',
      'label': [
        'Тлумацька',
        'Tlumatska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tlumatska'
    },
    {
      'name': 'tokarievska',
      '$kuid': 'xiSP4NkgK',
      'label': [
        'Токарєвська',
        'Tokarievska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tokarievska'
    },
    {
      'name': 'tokmatska',
      '$kuid': 'bbi2V1ECp',
      'label': [
        'Токмацька',
        'Tokmatska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tokmatska'
    },
    {
      'name': 'tomakivska',
      '$kuid': 'ZUYbdj0KI',
      'label': [
        'Томаківська',
        'Tomakivska'
      ],
      'raion': 'nikopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'tomakivska'
    },
    {
      'name': 'tomashivska',
      '$kuid': '1LRZwWxRa',
      'label': [
        'Томашівська',
        'Tomashivska'
      ],
      'raion': 'fastivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tomashivska'
    },
    {
      'name': 'tomashpilska',
      '$kuid': 'Pcp77mIpY',
      'label': [
        'Томашпільська',
        'Tomashpilska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'tomashpilska'
    },
    {
      'name': 'toporivska',
      '$kuid': '0pitAJkyt',
      'label': [
        'Топорівська',
        'Toporivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'toporivska'
    },
    {
      'name': 'torchynska',
      '$kuid': 'RsvRIsqlX',
      'label': [
        'Торчинська',
        'Torchynska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'torchynska'
    },
    {
      'name': 'toretska',
      '$kuid': '4bN2xIvWQ',
      'label': [
        'Торецька',
        'Toretska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'toretska'
    },
    {
      'name': 'tovstenska',
      '$kuid': 'LYPrfkI8s',
      'label': [
        'Товстенська',
        'Tovstenska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tovstenska'
    },
    {
      'name': 'troitska',
      '$kuid': '3ETUZ1JV2',
      'label': [
        'Троїцька',
        'Troitska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'troitska'
    },
    {
      'name': 'troitska_2',
      '$kuid': 'QYhWXj82e',
      'label': [
        'Троїцька',
        'Troitska'
      ],
      'raion': 'svativskyi',
      'list_name': 'hromada',
      '$autovalue': 'troitska_2'
    },
    {
      'name': 'trostianetska',
      '$kuid': 'fTfB0IxLT',
      'label': [
        'Тростянецька',
        'Trostianetska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'trostianetska'
    },
    {
      'name': 'trostianetska_2',
      '$kuid': 'He7N9DEkc',
      'label': [
        'Тростянецька',
        'Trostianetska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'trostianetska_2'
    },
    {
      'name': 'trostianetska_3',
      '$kuid': 'vS1goJ1pt',
      'label': [
        'Тростянецька',
        'Trostianetska'
      ],
      'raion': 'haisynskyi',
      'list_name': 'hromada',
      '$autovalue': 'trostianetska_3'
    },
    {
      'name': 'trudivska',
      '$kuid': 'A42odoSAc',
      'label': [
        'Трудівська',
        'Trudivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'trudivska'
    },
    {
      'name': 'truskavetska',
      '$kuid': 'SuAMJFvjK',
      'label': [
        'Трускавецька',
        'Truskavetska'
      ],
      'raion': 'drohobytskyi',
      'list_name': 'hromada',
      '$autovalue': 'truskavetska'
    },
    {
      'name': 'trybukhivska',
      '$kuid': 'U1iA6d1JD',
      'label': [
        'Трибухівська',
        'Trybukhivska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'trybukhivska'
    },
    {
      'name': 'tsarychanska',
      '$kuid': '4G2HFxBYT',
      'label': [
        'Царичанська',
        'Tsarychanska'
      ],
      'raion': 'dniprovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsarychanska'
    },
    {
      'name': 'tsebrykivska',
      '$kuid': 'Ou21j3tJC',
      'label': [
        'Цебриківська',
        'Tsebrykivska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsebrykivska'
    },
    {
      'name': 'tsilynna',
      '$kuid': '8BMZZClqP',
      'label': [
        'Цілинна',
        'Tsilynna'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsilynna'
    },
    {
      'name': 'tsumanska',
      '$kuid': 'hZ2i1Vgay',
      'label': [
        'Цуманська',
        'Tsumanska'
      ],
      'raion': 'lutskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsumanska'
    },
    {
      'name': 'tsvitochnenska',
      '$kuid': 'qXsQH4A5w',
      'label': [
        'Цвіточненська',
        'Tsvitochnenska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsvitochnenska'
    },
    {
      'name': 'tsyblivska',
      '$kuid': 'zEIKzbCjx',
      'label': [
        'Циблівська',
        'Tsyblivska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsyblivska'
    },
    {
      'name': 'tsyrkunivska',
      '$kuid': 'VOkP1qjpd',
      'label': [
        'Циркунівська',
        'Tsyrkunivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tsyrkunivska'
    },
    {
      'name': 'tulchynska',
      '$kuid': 'Xc6S2Wbz1',
      'label': [
        'Тульчинська',
        'Tulchynska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'tulchynska'
    },
    {
      'name': 'tupychivska',
      '$kuid': 'NFdWfb7NC',
      'label': [
        'Тупичівська',
        'Tupychivska'
      ],
      'raion': 'chernihivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tupychivska'
    },
    {
      'name': 'turbivska',
      '$kuid': 'JlKRSyq7e',
      'label': [
        'Турбівська',
        'Turbivska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'turbivska'
    },
    {
      'name': 'turie-remetivska',
      '$kuid': 'pLY15Nyhq',
      'label': [
        'Тур\'є-Реметівська',
        'Turie-Remetivska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'turie-remetivska'
    },
    {
      'name': 'turiiska',
      '$kuid': '30dXxBy2G',
      'label': [
        'Турійська',
        'Turiiska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'turiiska'
    },
    {
      'name': 'turkivska',
      '$kuid': 'jKbw6TPM2',
      'label': [
        'Турківська',
        'Turkivska'
      ],
      'raion': 'sambirskyi',
      'list_name': 'hromada',
      '$autovalue': 'turkivska'
    },
    {
      'name': 'tuzlivska',
      '$kuid': 'ebr96AvpA',
      'label': [
        'Тузлівська',
        'Tuzlivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'tuzlivska'
    },
    {
      'name': 'tyshkivska',
      '$kuid': 'yLOBmvNp5',
      'label': [
        'Тишківська',
        'Tyshkivska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'tyshkivska'
    },
    {
      'name': 'tysmenytska',
      '$kuid': '89w1YJlQ8',
      'label': [
        'Тисменицька',
        'Tysmenytska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'tysmenytska'
    },
    {
      'name': 'tyvrivska',
      '$kuid': '2ucXTItUg',
      'label': [
        'Тиврівська',
        'Tyvrivska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'tyvrivska'
    },
    {
      'name': 'udachnenska',
      '$kuid': 'kZIyrJtsj',
      'label': [
        'Удачненська',
        'Udachnenska'
      ],
      'raion': 'pokrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'udachnenska'
    },
    {
      'name': 'uhlianska',
      '$kuid': 'PwGNJKsqu',
      'label': [
        'Углянська',
        'Uhlianska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'uhlianska'
    },
    {
      'name': 'uhlivska',
      '$kuid': 'X3OwReGMs',
      'label': [
        'Углівська',
        'Uhlivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'uhlivska'
    },
    {
      'name': 'uhrynivska',
      '$kuid': 'l45qKKEZN',
      'label': [
        'Угринівська',
        'Uhrynivska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'uhrynivska'
    },
    {
      'name': 'uiutnenska',
      '$kuid': 'ZBTi2GfSb',
      'label': [
        'Уютненська',
        'Uiutnenska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'uiutnenska'
    },
    {
      'name': 'ukrainska',
      '$kuid': 'yvWtTtJip',
      'label': [
        'Українська',
        'Ukrainska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ukrainska'
    },
    {
      'name': 'ukrainska_2',
      '$kuid': 'oEKnKk8xA',
      'label': [
        'Українська',
        'Ukrainska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ukrainska_2'
    },
    {
      'name': 'ukromnivska',
      '$kuid': 'qpmuvcM0A',
      'label': [
        'Укромнівська',
        'Ukromnivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'ukromnivska'
    },
    {
      'name': 'ulanivska',
      '$kuid': '9WuKIZ9Hq',
      'label': [
        'Уланівська',
        'Ulanivska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ulanivska'
    },
    {
      'name': 'ulashanivska',
      '$kuid': '18rzvm9Gn',
      'label': [
        'Улашанівська',
        'Ulashanivska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ulashanivska'
    },
    {
      'name': 'umanska',
      '$kuid': 'WlGCzRQZh',
      'label': [
        'Уманська',
        'Umanska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'umanska'
    },
    {
      'name': 'urozhainivska',
      '$kuid': 'mD1q18weA',
      'label': [
        'Урожайнівська',
        'Urozhainivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'urozhainivska'
    },
    {
      'name': 'urozhainivska_2',
      '$kuid': '1vdsFztPi',
      'label': [
        'Урожайнівська',
        'Urozhainivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'urozhainivska_2'
    },
    {
      'name': 'usativska',
      '$kuid': 'yBqiXztfz',
      'label': [
        'Усатівська',
        'Usativska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'usativska'
    },
    {
      'name': 'ushomyrska',
      '$kuid': 'iuEW8BXQa',
      'label': [
        'Ушомирська',
        'Ushomyrska'
      ],
      'raion': 'korostenskyi',
      'list_name': 'hromada',
      '$autovalue': 'ushomyrska'
    },
    {
      'name': 'uspenivska',
      '$kuid': 'QLhiIY6Rp',
      'label': [
        'Успенівська',
        'Uspenivska'
      ],
      'raion': 'bilhorod-dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'uspenivska'
    },
    {
      'name': 'ust-chornianska',
      '$kuid': 'L9IDnBZTs',
      'label': [
        'Усть-Чорнянська',
        'Ust-Chornianska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'ust-chornianska'
    },
    {
      'name': 'ust-putylska',
      '$kuid': 'aplaMXpQR',
      'label': [
        'Усть-Путильська',
        'Ust-Putylska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ust-putylska'
    },
    {
      'name': 'ustyluzka',
      '$kuid': 'WC59KKZTB',
      'label': [
        'Устилузька',
        'Ustyluzka'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'ustyluzka'
    },
    {
      'name': 'ustynivska',
      '$kuid': '8DMFLI4nz',
      'label': [
        'Устинівська',
        'Ustynivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'ustynivska'
    },
    {
      'name': 'uvarivska',
      '$kuid': 'AE2nvnCUb',
      'label': [
        'Уварівська',
        'Uvarivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'uvarivska'
    },
    {
      'name': 'uvarivska_2',
      '$kuid': 'ZxkfNiGo5',
      'label': [
        'Уварівська',
        'Uvarivska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'uvarivska_2'
    },
    {
      'name': 'uzhhorodska',
      '$kuid': 'RBeDmmeve',
      'label': [
        'Ужгородська',
        'Uzhhorodska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'uzhhorodska'
    },
    {
      'name': 'uzynska',
      '$kuid': 'u8mbNA4TJ',
      'label': [
        'Узинська',
        'Uzynska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'uzynska'
    },
    {
      'name': 'vakulivska',
      '$kuid': 'qCUAUjcK7',
      'label': [
        'Вакулівська',
        'Vakulivska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'vakulivska'
    },
    {
      'name': 'valkivska',
      '$kuid': 'WtKbq9mCc',
      'label': [
        'Валківська',
        'Valkivska'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'valkivska'
    },
    {
      'name': 'vanchykovetska',
      '$kuid': 'H1ErGep3h',
      'label': [
        'Ванчиковецька',
        'Vanchykovetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'vanchykovetska'
    },
    {
      'name': 'vapniarska',
      '$kuid': 'qwbvZrG3B',
      'label': [
        'Вапнярська',
        'Vapniarska'
      ],
      'raion': 'tulchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vapniarska'
    },
    {
      'name': 'varaska',
      '$kuid': 'P7RAt7Nqg',
      'label': [
        'Вараська',
        'Varaska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'varaska'
    },
    {
      'name': 'varkovytska',
      '$kuid': 'uq89nJ8v2',
      'label': [
        'Варковицька',
        'Varkovytska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'varkovytska'
    },
    {
      'name': 'varvynska',
      '$kuid': '7D8F7IKXb',
      'label': [
        'Варвинська',
        'Varvynska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'varvynska'
    },
    {
      'name': 'vashkivetska',
      '$kuid': 'YBjFR7ZGn',
      'label': [
        'Вашківецька',
        'Vashkivetska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vashkivetska'
    },
    {
      'name': 'vashkovetska',
      '$kuid': 'zXF2RkK16',
      'label': [
        'Вашковецька',
        'Vashkovetska'
      ],
      'raion': 'dnistrovskyi',
      'list_name': 'hromada',
      '$autovalue': 'vashkovetska'
    },
    {
      'name': 'vasylivska',
      '$kuid': 'etJNo2SLJ',
      'label': [
        'Василівська',
        'Vasylivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylivska'
    },
    {
      'name': 'vasylivska_2',
      '$kuid': 'LwSJbDPx4',
      'label': [
        'Василівська',
        'Vasylivska'
      ],
      'raion': 'bolhradskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylivska_2'
    },
    {
      'name': 'vasylivska_3',
      '$kuid': 'qTBlDScGK',
      'label': [
        'Василівська',
        'Vasylivska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylivska_3'
    },
    {
      'name': 'vasylkivska_4',
      '$kuid': 'Y8BbRFHcV',
      'label': [
        'Васильківська',
        'Vasylkivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylkivska_4'
    },
    {
      'name': 'vasylkivska_5',
      '$kuid': 'xsqPUKdJ6',
      'label': [
        'Васильківська',
        'Vasylkivska'
      ],
      'raion': 'obukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylkivska_5'
    },
    {
      'name': 'vasylkovetska',
      '$kuid': 'Bawv1XFQd',
      'label': [
        'Васильковецька',
        'Vasylkovetska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vasylkovetska'
    },
    {
      'name': 'vatutinska',
      '$kuid': '5EqIU2IDE',
      'label': [
        'Ватутінська',
        'Vatutinska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vatutinska'
    },
    {
      'name': 'vchoraishenska',
      '$kuid': 'k3v4jumoN',
      'label': [
        'Вчорайшенська',
        'Vchoraishenska'
      ],
      'raion': 'berdychivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vchoraishenska'
    },
    {
      'name': 'velykoandrusivska',
      '$kuid': 'IOdJvNVz8',
      'label': [
        'Великоандрусівська',
        'Velykoandrusivska'
      ],
      'raion': 'oleksandriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoandrusivska'
    },
    {
      'name': 'velykobahachanska',
      '$kuid': 'sED9ymhSx',
      'label': [
        'Великобагачанська',
        'Velykobahachanska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobahachanska'
    },
    {
      'name': 'velykoberezka',
      '$kuid': 'nE6FGetGl',
      'label': [
        'Великоберезька',
        'Velykoberezka'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoberezka'
    },
    {
      'name': 'velykobereznianska',
      '$kuid': 'f0hQnbPeh',
      'label': [
        'Великоберезнянська',
        'Velykobereznianska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobereznianska'
    },
    {
      'name': 'velykoberezovytska',
      '$kuid': 'fsK1lRMRz',
      'label': [
        'Великоберезовицька',
        'Velykoberezovytska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoberezovytska'
    },
    {
      'name': 'velykobilozerska',
      '$kuid': 'eDRDt2yEU',
      'label': [
        'Великобілозерська',
        'Velykobilozerska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobilozerska'
    },
    {
      'name': 'velykobirkivska',
      '$kuid': 'aG3IaPct6',
      'label': [
        'Великобірківська',
        'Velykobirkivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobirkivska'
    },
    {
      'name': 'velykobudyshchanska',
      '$kuid': '9WII38YiR',
      'label': [
        'Великобудищанська',
        'Velykobudyshchanska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobudyshchanska'
    },
    {
      'name': 'velykobuialytska',
      '$kuid': 'D90Yvwd2i',
      'label': [
        'Великобуялицька',
        'Velykobuialytska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobuialytska'
    },
    {
      'name': 'velykoburlutska',
      '$kuid': 'BebyJaQ70',
      'label': [
        'Великобурлуцька',
        'Velykoburlutska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoburlutska'
    },
    {
      'name': 'velykobychkivska',
      '$kuid': 'HFq7MCD8M',
      'label': [
        'Великобичківська',
        'Velykobychkivska'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobychkivska'
    },
    {
      'name': 'velykobyihanska',
      '$kuid': 'g4Ydxthgx',
      'label': [
        'Великобийганська',
        'Velykobyihanska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykobyihanska'
    },
    {
      'name': 'velykodalnytska',
      '$kuid': 'viQ6sa9aC',
      'label': [
        'Великодальницька',
        'Velykodalnytska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodalnytska'
    },
    {
      'name': 'velykodederkalska',
      '$kuid': 'wgf9KPNIH',
      'label': [
        'Великодедеркальська',
        'Velykodederkalska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodederkalska'
    },
    {
      'name': 'velykodobronska',
      '$kuid': '98zKCWK1F',
      'label': [
        'Великодобронська',
        'Velykodobronska'
      ],
      'raion': 'uzhhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodobronska'
    },
    {
      'name': 'velykodolynska',
      '$kuid': 'hGAqN9HsO',
      'label': [
        'Великодолинська',
        'Velykodolynska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodolynska'
    },
    {
      'name': 'velykodymerska',
      '$kuid': 'wWFLRP5pa',
      'label': [
        'Великодимерська',
        'Velykodymerska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykodymerska'
    },
    {
      'name': 'velykohaivska',
      '$kuid': '6Q6ICM4Zv',
      'label': [
        'Великогаївська',
        'Velykohaivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykohaivska'
    },
    {
      'name': 'velykokhutirska',
      '$kuid': 'i6ATeipHe',
      'label': [
        'Великохутірська',
        'Velykokhutirska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykokhutirska'
    },
    {
      'name': 'velykokopanivska',
      '$kuid': 'ig7ks7ryg',
      'label': [
        'Великокопанівська',
        'Velykokopanivska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykokopanivska'
    },
    {
      'name': 'velykokuchurivska',
      '$kuid': 'w1snppkcW',
      'label': [
        'Великокучурівська',
        'Velykokuchurivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykokuchurivska'
    },
    {
      'name': 'velykolepetyska',
      '$kuid': 'pU16v8ma9',
      'label': [
        'Великолепетиська',
        'Velykolepetyska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykolepetyska'
    },
    {
      'name': 'velykoliubinska',
      '$kuid': 'fMXDwUJRx',
      'label': [
        'Великолюбінська',
        'Velykoliubinska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoliubinska'
    },
    {
      'name': 'velykoluchkivska',
      '$kuid': 'HPOxsLlbL',
      'label': [
        'Великолучківська',
        'Velykoluchkivska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoluchkivska'
    },
    {
      'name': 'velykomezhyritska',
      '$kuid': 'pv1jgHDjo',
      'label': [
        'Великомежиріцька',
        'Velykomezhyritska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomezhyritska'
    },
    {
      'name': 'velykomostivska',
      '$kuid': 'a3Zk1Lh4S',
      'label': [
        'Великомостівська',
        'Velykomostivska'
      ],
      'raion': 'chervonohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomostivska'
    },
    {
      'name': 'velykomykhailivska',
      '$kuid': 'pzkb8Jt20',
      'label': [
        'Великомихайлівська',
        'Velykomykhailivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomykhailivska'
    },
    {
      'name': 'velykomykhailivska_2',
      '$kuid': 'vShOkFNBD',
      'label': [
        'Великомихайлівська',
        'Velykomykhailivska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykomykhailivska_2'
    },
    {
      'name': 'velykonovosilkivska',
      '$kuid': 'UARNIj2ko',
      'label': [
        'Великоновосілківська',
        'Velykonovosilkivska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykonovosilkivska'
    },
    {
      'name': 'velykooleksandrivska',
      '$kuid': '7teNS43tP',
      'label': [
        'Великоолександрівська',
        'Velykooleksandrivska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykooleksandrivska'
    },
    {
      'name': 'velykoomelianska',
      '$kuid': 'jU4wZjQqu',
      'label': [
        'Великоомелянська',
        'Velykoomelianska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoomelianska'
    },
    {
      'name': 'velykoploskivska',
      '$kuid': 'X1fg4h5dp',
      'label': [
        'Великоплосківська',
        'Velykoploskivska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoploskivska'
    },
    {
      'name': 'velykopysarivska',
      '$kuid': 'nO7agK7Sg',
      'label': [
        'Великописарівська',
        'Velykopysarivska'
      ],
      'raion': 'okhtyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykopysarivska'
    },
    {
      'name': 'velykorublivska',
      '$kuid': 'oJk4EDzyf',
      'label': [
        'Великорублівська',
        'Velykorublivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykorublivska'
    },
    {
      'name': 'velykoseverynivska',
      '$kuid': 'M0H7xva8C',
      'label': [
        'Великосеверинівська',
        'Velykoseverynivska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykoseverynivska'
    },
    {
      'name': 'velykosorochynska',
      '$kuid': '7R3SSvCs0',
      'label': [
        'Великосорочинська',
        'Velykosorochynska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'velykosorochynska'
    },
    {
      'name': 'velymchenska',
      '$kuid': 'dIQJK5gi8',
      'label': [
        'Велимченська',
        'Velymchenska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'velymchenska'
    },
    {
      'name': 'velytska',
      '$kuid': 'fwv54fYjP',
      'label': [
        'Велицька',
        'Velytska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'velytska'
    },
    {
      'name': 'vendychanska',
      '$kuid': 'odzsBceYO',
      'label': [
        'Вендичанська',
        'Vendychanska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'vendychanska'
    },
    {
      'name': 'verbkivska',
      '$kuid': 'nACvWLSXC',
      'label': [
        'Вербківська',
        'Verbkivska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'verbkivska'
    },
    {
      'name': 'verbska',
      '$kuid': 'AlMONbpZr',
      'label': [
        'Вербська',
        'Verbska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'verbska'
    },
    {
      'name': 'verenchanska',
      '$kuid': 'feVgEzJ2w',
      'label': [
        'Веренчанська',
        'Verenchanska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'verenchanska'
    },
    {
      'name': 'veresaievska',
      '$kuid': 'uNG0G29yX',
      'label': [
        'Вересаєвська',
        'Veresaievska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'veresaievska'
    },
    {
      'name': 'verkhivtsivska',
      '$kuid': 'OBk8qnu8G',
      'label': [
        'Верхівцівська',
        'Verkhivtsivska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhivtsivska'
    },
    {
      'name': 'verkhnianska',
      '$kuid': 'DQMnTabW8',
      'label': [
        'Верхнянська',
        'Verkhnianska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnianska'
    },
    {
      'name': 'verkhnodniprovska',
      '$kuid': 'mwiZH4s3O',
      'label': [
        'Верхньодніпровська',
        'Verkhnodniprovska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnodniprovska'
    },
    {
      'name': 'verkhnokoropetska',
      '$kuid': 'qYJqwgyZl',
      'label': [
        'Верхньокоропецька',
        'Verkhnokoropetska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnokoropetska'
    },
    {
      'name': 'verkhnorohachytska',
      '$kuid': 'F3FTfBvhF',
      'label': [
        'Верхньорогачицька',
        'Verkhnorohachytska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnorohachytska'
    },
    {
      'name': 'verkhnosyrovatska',
      '$kuid': 'vmAZqaZG1',
      'label': [
        'Верхньосироватська',
        'Verkhnosyrovatska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhnosyrovatska'
    },
    {
      'name': 'verkhorichenska',
      '$kuid': 't81kSvB6m',
      'label': [
        'Верхоріченська',
        'Verkhorichenska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhorichenska'
    },
    {
      'name': 'verkhovynska',
      '$kuid': 'e8A1Iz5oS',
      'label': [
        'Верховинська',
        'Verkhovynska'
      ],
      'raion': 'verkhovynskyi',
      'list_name': 'hromada',
      '$autovalue': 'verkhovynska'
    },
    {
      'name': 'vertiivska',
      '$kuid': '2fleY5NfK',
      'label': [
        'Вертіївська',
        'Vertiivska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vertiivska'
    },
    {
      'name': 'veselivska',
      '$kuid': 'OIpSqGxZP',
      'label': [
        'Веселівська',
        'Veselivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselivska'
    },
    {
      'name': 'veselivska_2',
      '$kuid': '3d5qkc91T',
      'label': [
        'Веселівська',
        'Veselivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselivska_2'
    },
    {
      'name': 'veselivska_3',
      '$kuid': 'mWR0RLIUp',
      'label': [
        'Веселівська',
        'Veselivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselivska_3'
    },
    {
      'name': 'veselynivska',
      '$kuid': 'poptiPMBH',
      'label': [
        'Веселинівська',
        'Veselynivska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'veselynivska'
    },
    {
      'name': 'vesnianska',
      '$kuid': 'nBF1F4UzI',
      'label': [
        'Веснянська',
        'Vesnianska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vesnianska'
    },
    {
      'name': 'viitovetska',
      '$kuid': 's8aUnGKRZ',
      'label': [
        'Війтовецька',
        'Viitovetska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'viitovetska'
    },
    {
      'name': 'viknianska',
      '$kuid': '1UbiSL5lB',
      'label': [
        'Вікнянська',
        'Viknianska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'viknianska'
    },
    {
      'name': 'vilinska',
      '$kuid': 'KCjqePFtZ',
      'label': [
        'Вілінська',
        'Vilinska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilinska'
    },
    {
      'name': 'vilkhivska',
      '$kuid': 'AUoY4TAiO',
      'label': [
        'Вільхівська',
        'Vilkhivska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilkhivska'
    },
    {
      'name': 'vilkhovetska',
      '$kuid': 'zZauikDLA',
      'label': [
        'Вільховецька',
        'Vilkhovetska'
      ],
      'raion': 'tiachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilkhovetska'
    },
    {
      'name': 'vilkhuvatska',
      '$kuid': '8bsHLUZq5',
      'label': [
        'Вільхуватська',
        'Vilkhuvatska'
      ],
      'raion': 'kupianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilkhuvatska'
    },
    {
      'name': 'vilnenska',
      '$kuid': 'zHXPLfCCj',
      'label': [
        'Вільненська',
        'Vilnenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnenska'
    },
    {
      'name': 'vilnianska',
      '$kuid': 'JZlzqjg5o',
      'label': [
        'Вільнянська',
        'Vilnianska'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnianska'
    },
    {
      'name': 'vilnohirska',
      '$kuid': 'uBT3wqsJ1',
      'label': [
        'Вільногірська',
        'Vilnohirska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnohirska'
    },
    {
      'name': 'vilnozaporizka',
      '$kuid': 'kvGUKXDa3',
      'label': [
        'Вільнозапорізька',
        'Vilnozaporizka'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilnozaporizka'
    },
    {
      'name': 'vilshanska',
      '$kuid': 'TyIjPJVa8',
      'label': [
        'Вільшанська',
        'Vilshanska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska'
    },
    {
      'name': 'vilshanska_2',
      '$kuid': 'WKsn60Lrz',
      'label': [
        'Вільшанська',
        'Vilshanska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska_2'
    },
    {
      'name': 'vilshanska_3',
      '$kuid': 'Ef7qYzAfq',
      'label': [
        'Вільшанська',
        'Vilshanska'
      ],
      'raion': 'romenskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska_3'
    },
    {
      'name': 'vilshanska_4',
      '$kuid': 'dPkDnyzz2',
      'label': [
        'Вільшанська',
        'Vilshanska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'vilshanska_4'
    },
    {
      'name': 'vinkovetska',
      '$kuid': 'QTboqHBlk',
      'label': [
        'Віньковецька',
        'Vinkovetska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vinkovetska'
    },
    {
      'name': 'vinnytska_2',
      '$kuid': 'xkpJVkjbJ',
      'label': [
        'Вінницька',
        'Vinnytska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vinnytska_2'
    },
    {
      'name': 'vladyslavivska',
      '$kuid': '4r9tHGLRI',
      'label': [
        'Владиславівська',
        'Vladyslavivska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vladyslavivska'
    },
    {
      'name': 'vodianska',
      '$kuid': '3A4N2d7Uu',
      'label': [
        'Водянська',
        'Vodianska'
      ],
      'raion': 'vasylivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vodianska'
    },
    {
      'name': 'vodianytska',
      '$kuid': 'pwYvyxikC',
      'label': [
        'Водяницька',
        'Vodianytska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vodianytska'
    },
    {
      'name': 'voikovska',
      '$kuid': 'zif4prO4K',
      'label': [
        'Войковська',
        'Voikovska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'voikovska'
    },
    {
      'name': 'voikovska_2',
      '$kuid': '20WV6scW9',
      'label': [
        'Войковська',
        'Voikovska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'voikovska_2'
    },
    {
      'name': 'voinska',
      '$kuid': 'iqJhYrq8C',
      'label': [
        'Воїнська',
        'Voinska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'voinska'
    },
    {
      'name': 'voinylivska',
      '$kuid': 'Pdjt1iSEv',
      'label': [
        'Войнилівська',
        'Voinylivska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'voinylivska'
    },
    {
      'name': 'volnovaska',
      '$kuid': '8s7D8ii0C',
      'label': [
        'Волноваська',
        'Volnovaska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'volnovaska'
    },
    {
      'name': 'volochyska',
      '$kuid': 'kIZycyhVC',
      'label': [
        'Волочиська',
        'Volochyska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'volochyska'
    },
    {
      'name': 'volodarska',
      '$kuid': 'OgbvjSNx9',
      'label': [
        'Володарська',
        'Volodarska'
      ],
      'raion': 'bilotserkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodarska'
    },
    {
      'name': 'volodymyretska',
      '$kuid': 'srLRonsNg',
      'label': [
        'Володимирецька',
        'Volodymyretska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodymyretska'
    },
    {
      'name': 'volodymyrivska',
      '$kuid': 'ET5EKN335',
      'label': [
        'Володимирівська',
        'Volodymyrivska'
      ],
      'raion': 'bashtanskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodymyrivska'
    },
    {
      'name': 'volodymyr-volynska',
      '$kuid': '4cNIhmr6N',
      'label': [
        'Володимир-Волинська',
        'Volodymyr-Volynska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'volodymyr-volynska'
    },
    {
      'name': 'volokivska',
      '$kuid': 'WjSexM7sT',
      'label': [
        'Волоківська',
        'Volokivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'volokivska'
    },
    {
      'name': 'volovetska',
      '$kuid': 'VBaU5rqz6',
      'label': [
        'Воловецька',
        'Volovetska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'volovetska'
    },
    {
      'name': 'volytska',
      '$kuid': 'R5pzsndxe',
      'label': [
        'Волицька',
        'Volytska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'volytska'
    },
    {
      'name': 'vorobiovska',
      '$kuid': 'Ex9KDH3XW',
      'label': [
        'Воробйовська',
        'Vorobiovska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vorobiovska'
    },
    {
      'name': 'vorokhtianska',
      '$kuid': 'hG3770Jbo',
      'label': [
        'Ворохтянська',
        'Vorokhtianska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vorokhtianska'
    },
    {
      'name': 'voronkivska',
      '$kuid': 'p5P1x1out',
      'label': [
        'Вороньківська',
        'Voronkivska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'voronkivska'
    },
    {
      'name': 'voronovytska',
      '$kuid': 'gvf7NFae4',
      'label': [
        'Вороновицька',
        'Voronovytska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'voronovytska'
    },
    {
      'name': 'vorozhbianska',
      '$kuid': 'B1vXSneED',
      'label': [
        'Ворожбянська',
        'Vorozhbianska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'vorozhbianska'
    },
    {
      'name': 'voskhodnenska',
      '$kuid': 'dJcou7fXK',
      'label': [
        'Восходненська',
        'Voskhodnenska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'voskhodnenska'
    },
    {
      'name': 'voskresenska',
      '$kuid': '2siVBHc83',
      'label': [
        'Воскресенська',
        'Voskresenska'
      ],
      'raion': 'mykolaivskyi',
      'list_name': 'hromada',
      '$autovalue': 'voskresenska'
    },
    {
      'name': 'voskresenska_2',
      '$kuid': 'oSGUWpZEv',
      'label': [
        'Воскресенська',
        'Voskresenska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'voskresenska_2'
    },
    {
      'name': 'vovchanska',
      '$kuid': 'flNc9yWzl',
      'label': [
        'Вовчанська',
        'Vovchanska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vovchanska'
    },
    {
      'name': 'vovkovynetska',
      '$kuid': 'PNLGGyky4',
      'label': [
        'Вовковинецька',
        'Vovkovynetska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vovkovynetska'
    },
    {
      'name': 'vozdvyzhivska',
      '$kuid': '0ySoR3a3M',
      'label': [
        'Воздвижівська',
        'Vozdvyzhivska'
      ],
      'raion': 'polohivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vozdvyzhivska'
    },
    {
      'name': 'voznesenska',
      '$kuid': '9c4eNiJPg',
      'label': [
        'Вознесенська',
        'Voznesenska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'voznesenska'
    },
    {
      'name': 'voznesenska_2',
      '$kuid': 'FIUGqENno',
      'label': [
        'Вознесенська',
        'Voznesenska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'voznesenska_2'
    },
    {
      'name': 'vradiivska',
      '$kuid': '59VmnwsFZ',
      'label': [
        'Врадіївська',
        'Vradiivska'
      ],
      'raion': 'pervomaiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vradiivska'
    },
    {
      'name': 'vuhledarska',
      '$kuid': '8Nx7M25dq',
      'label': [
        'Вугледарська',
        'Vuhledarska'
      ],
      'raion': 'volnovaskyi',
      'list_name': 'hromada',
      '$autovalue': 'vuhledarska'
    },
    {
      'name': 'vuhlehirska',
      '$kuid': 'zOxA5My3z',
      'label': [
        'Вуглегірська',
        'Vuhlehirska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vuhlehirska'
    },
    {
      'name': 'vyhodianska',
      '$kuid': 'i2sjfvwU2',
      'label': [
        'Вигодянська',
        'Vyhodianska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyhodianska'
    },
    {
      'name': 'vyhodska',
      '$kuid': '2XNqEbRc0',
      'label': [
        'Вигодська',
        'Vyhodska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyhodska'
    },
    {
      'name': 'vylkivska',
      '$kuid': 'eNpoTOTuJ',
      'label': [
        'Вилківська',
        'Vylkivska'
      ],
      'raion': 'izmailskyi',
      'list_name': 'hromada',
      '$autovalue': 'vylkivska'
    },
    {
      'name': 'vylotska',
      '$kuid': 'YrT8YS7QQ',
      'label': [
        'Вилоцька',
        'Vylotska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vylotska'
    },
    {
      'name': 'vynohradivska',
      '$kuid': 'fT4BMZ60Z',
      'label': [
        'Виноградівська',
        'Vynohradivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradivska'
    },
    {
      'name': 'vynohradivska_2',
      '$kuid': 'z6EUcqzEH',
      'label': [
        'Виноградівська',
        'Vynohradivska'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradivska_2'
    },
    {
      'name': 'vynohradivska_3',
      '$kuid': 'bVe4vyRh1',
      'label': [
        'Виноградівська',
        'Vynohradivska'
      ],
      'raion': 'berehivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradivska_3'
    },
    {
      'name': 'vynohradnenska',
      '$kuid': 'SuE1nV5u0',
      'label': [
        'Виноградненська',
        'Vynohradnenska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradnenska'
    },
    {
      'name': 'vynohradska',
      '$kuid': 'sFE1UPhe8',
      'label': [
        'Виноградська',
        'Vynohradska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vynohradska'
    },
    {
      'name': 'vyrivska',
      '$kuid': 'oO5BkQrZO',
      'label': [
        'Вирівська',
        'Vyrivska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyrivska'
    },
    {
      'name': 'vyshenska',
      '$kuid': 'PVY90eaZf',
      'label': [
        'Вишенська',
        'Vyshenska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshenska'
    },
    {
      'name': 'vyshevytska',
      '$kuid': 'jnpOwl4hz',
      'label': [
        'Вишевицька',
        'Vyshevytska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshevytska'
    },
    {
      'name': 'vyshhorodska',
      '$kuid': 'sEKAcMtAq',
      'label': [
        'Вишгородська',
        'Vyshhorodska'
      ],
      'raion': 'vyshhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshhorodska'
    },
    {
      'name': 'vyshkivska',
      '$kuid': 'qc1EShvHo',
      'label': [
        'Вишківська',
        'Vyshkivska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshkivska'
    },
    {
      'name': 'vyshneva',
      '$kuid': 'pWADDUS03',
      'label': [
        'Вишнева',
        'Vyshneva'
      ],
      'raion': 'buchanskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshneva'
    },
    {
      'name': 'vyshnivetska',
      '$kuid': 'PXtLLpHML',
      'label': [
        'Вишнівецька',
        'Vyshnivetska'
      ],
      'raion': 'kremenetskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivetska'
    },
    {
      'name': 'vyshnivska',
      '$kuid': 'd09ianH9e',
      'label': [
        'Вишнівська',
        'Vyshnivska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivska'
    },
    {
      'name': 'vyshnivska_2',
      '$kuid': 'oVzrCqa3H',
      'label': [
        'Вишнівська',
        'Vyshnivska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivska_2'
    },
    {
      'name': 'vyshnivska_3',
      '$kuid': 'eHs0KGfs1',
      'label': [
        'Вишнівська',
        'Vyshnivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyshnivska_3'
    },
    {
      'name': 'vysochanska',
      '$kuid': 'aHDaJIAzu',
      'label': [
        'Височанська',
        'Vysochanska'
      ],
      'raion': 'nizhynskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysochanska'
    },
    {
      'name': 'vysochanska_2',
      '$kuid': 'CAm4ZcX8R',
      'label': [
        'Височанська',
        'Vysochanska'
      ],
      'raion': 'kharkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysochanska_2'
    },
    {
      'name': 'vysokivska',
      '$kuid': 'tHdaXN8w5',
      'label': [
        'Високівська',
        'Vysokivska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysokivska'
    },
    {
      'name': 'vysokopilska',
      '$kuid': 'JpJCRgCQB',
      'label': [
        'Високопільська',
        'Vysokopilska'
      ],
      'raion': 'beryslavskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysokopilska'
    },
    {
      'name': 'vysotska',
      '$kuid': 'ncoerq00D',
      'label': [
        'Висоцька',
        'Vysotska'
      ],
      'raion': 'sarnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'vysotska'
    },
    {
      'name': 'vytvytska',
      '$kuid': 'F8PZ5hBbv',
      'label': [
        'Витвицька',
        'Vytvytska'
      ],
      'raion': 'kaluskyi',
      'list_name': 'hromada',
      '$autovalue': 'vytvytska'
    },
    {
      'name': 'vyzhnytska',
      '$kuid': 'ATqrCkfyt',
      'label': [
        'Вижницька',
        'Vyzhnytska'
      ],
      'raion': 'vyzhnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyzhnytska'
    },
    {
      'name': 'vyzyrska',
      '$kuid': 'yKJA4ctqw',
      'label': [
        'Визирська',
        'Vyzyrska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'vyzyrska'
    },
    {
      'name': 'yablunivska',
      '$kuid': 'df8OZeTso',
      'label': [
        'Яблунівська',
        'Yablunivska'
      ],
      'raion': 'prylutskyi',
      'list_name': 'hromada',
      '$autovalue': 'yablunivska'
    },
    {
      'name': 'yablunivska_2',
      '$kuid': '9rbSMTEza',
      'label': [
        'Яблунівська',
        'Yablunivska'
      ],
      'raion': 'kosivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yablunivska_2'
    },
    {
      'name': 'yahotynska',
      '$kuid': '62ZvyFUap',
      'label': [
        'Яготинська',
        'Yahotynska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'yahotynska'
    },
    {
      'name': 'yakushynetska',
      '$kuid': 'NKSMhbuKO',
      'label': [
        'Якушинецька',
        'Yakushynetska'
      ],
      'raion': 'vinnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'yakushynetska'
    },
    {
      'name': 'yakymivska',
      '$kuid': 'fJVZR3ku3',
      'label': [
        'Якимівська',
        'Yakymivska'
      ],
      'raion': 'melitopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'yakymivska'
    },
    {
      'name': 'yakymivska_3',
      '$kuid': 'mKEPx3jxy',
      'label': [
        'Якимівська',
        'Yakymivska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'yakymivska_3'
    },
    {
      'name': 'yaltynska',
      '$kuid': 'lW8TmCewM',
      'label': [
        'Ялтинська',
        'Yaltynska'
      ],
      'raion': 'yaltynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaltynska'
    },
    {
      'name': 'yamnytska',
      '$kuid': 'XYnCZtY62',
      'label': [
        'Ямницька',
        'Yamnytska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yamnytska'
    },
    {
      'name': 'yampilska',
      '$kuid': 'DNMMQqhA0',
      'label': [
        'Ямпільська',
        'Yampilska'
      ],
      'raion': 'shepetivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yampilska'
    },
    {
      'name': 'yampilska_2',
      '$kuid': 'Gfgdsx5Nr',
      'label': [
        'Ямпільська',
        'Yampilska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yampilska_2'
    },
    {
      'name': 'yampilska_3',
      '$kuid': 'rrUHQSHHn',
      'label': [
        'Ямпільська',
        'Yampilska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'yampilska_3'
    },
    {
      'name': 'yantarnenska',
      '$kuid': 'fTzHvlxQf',
      'label': [
        'Янтарненська',
        'Yantarnenska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'yantarnenska'
    },
    {
      'name': 'yaremchanska',
      '$kuid': 'q6qjDxuZY',
      'label': [
        'Яремчанська',
        'Yaremchanska'
      ],
      'raion': 'nadvirnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaremchanska'
    },
    {
      'name': 'yarkivska',
      '$kuid': 'YTVjwh1MV',
      'label': [
        'Ярківська',
        'Yarkivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarkivska'
    },
    {
      'name': 'yarkopolenska',
      '$kuid': 'SG5T9nt4q',
      'label': [
        'Яркополенська',
        'Yarkopolenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarkopolenska'
    },
    {
      'name': 'yarkopolenska_2',
      '$kuid': 'JTmq9vSms',
      'label': [
        'Яркополенська',
        'Yarkopolenska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarkopolenska_2'
    },
    {
      'name': 'yarmolynetska',
      '$kuid': 'LZY1BfBz1',
      'label': [
        'Ярмолинецька',
        'Yarmolynetska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarmolynetska'
    },
    {
      'name': 'yaroslavytska',
      '$kuid': 'HhI8gvATh',
      'label': [
        'Ярославицька',
        'Yaroslavytska'
      ],
      'raion': 'dubenskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaroslavytska'
    },
    {
      'name': 'yarunska',
      '$kuid': '6UOQxHD3b',
      'label': [
        'Ярунська',
        'Yarunska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yarunska'
    },
    {
      'name': 'yaryshivska',
      '$kuid': 'IlPfwaMzv',
      'label': [
        'Яришівська',
        'Yaryshivska'
      ],
      'raion': 'mohyliv-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaryshivska'
    },
    {
      'name': 'yasinianska',
      '$kuid': 'OxDP8Thhm',
      'label': [
        'Ясінянська',
        'Yasinianska'
      ],
      'raion': 'rakhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yasinianska'
    },
    {
      'name': 'yaskivska',
      '$kuid': '7SmkFuS04',
      'label': [
        'Яськівська',
        'Yaskivska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'yaskivska'
    },
    {
      'name': 'yasnopolianska',
      '$kuid': 'yXXNYJVMx',
      'label': [
        'Яснополянська',
        'Yasnopolianska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yasnopolianska'
    },
    {
      'name': 'yasynuvatska',
      '$kuid': 'ru9MuDd0X',
      'label': [
        'Ясинуватська',
        'Yasynuvatska'
      ],
      'raion': 'donetskyi',
      'list_name': 'hromada',
      '$autovalue': 'yasynuvatska'
    },
    {
      'name': 'yavorivska',
      '$kuid': 'Kbyxu1Gwq',
      'label': [
        'Яворівська',
        'Yavorivska'
      ],
      'raion': 'yavorivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yavorivska'
    },
    {
      'name': 'yelanetska',
      '$kuid': '7rToDxEvG',
      'label': [
        'Єланецька',
        'Yelanetska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'yelanetska'
    },
    {
      'name': 'yemilchynska',
      '$kuid': '8gM4NBavK',
      'label': [
        'Ємільчинська',
        'Yemilchynska'
      ],
      'raion': 'novohrad-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'yemilchynska'
    },
    {
      'name': 'yenakiievska',
      '$kuid': 'ed29bdVEa',
      'label': [
        'Єнакієвська',
        'Yenakiievska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yenakiievska'
    },
    {
      'name': 'yerkivska',
      '$kuid': 'VmRaK9Mlv',
      'label': [
        'Єрківська',
        'Yerkivska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'yerkivska'
    },
    {
      'name': 'yermakivska',
      '$kuid': 'gjSBqjj2E',
      'label': [
        'Єрмаківська',
        'Yermakivska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yermakivska'
    },
    {
      'name': 'yevpatoriiska',
      '$kuid': '1k59xny8m',
      'label': [
        'Євпаторійська',
        'Yevpatoriiska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'yevpatoriiska'
    },
    {
      'name': 'yezupilska',
      '$kuid': 'LNvptN72x',
      'label': [
        'Єзупільська',
        'Yezupilska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'yezupilska'
    },
    {
      'name': 'yunakivska',
      '$kuid': '1la3Ns2vX',
      'label': [
        'Юнаківська',
        'Yunakivska'
      ],
      'raion': 'sumskyi',
      'list_name': 'hromada',
      '$autovalue': 'yunakivska'
    },
    {
      'name': 'yurivska',
      '$kuid': 'XOOrLPwdT',
      'label': [
        'Юр\'ївська',
        'Yurivska'
      ],
      'raion': 'pavlohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'yurivska'
    },
    {
      'name': 'yurkovetska',
      '$kuid': 'N1s4E3wok',
      'label': [
        'Юрковецька',
        'Yurkovetska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'yurkovetska'
    },
    {
      'name': 'yuvileina',
      '$kuid': 'UasFWiX6Q',
      'label': [
        'Ювілейна',
        'Yuvileina'
      ],
      'raion': 'khersonskyi',
      'list_name': 'hromada',
      '$autovalue': 'yuvileina'
    },
    {
      'name': 'yuzhnenska',
      '$kuid': '4EQ7EQZGG',
      'label': [
        'Южненська',
        'Yuzhnenska'
      ],
      'raion': 'odeskyi',
      'list_name': 'hromada',
      '$autovalue': 'yuzhnenska'
    },
    {
      'name': 'yuzhnoukrainska',
      '$kuid': 'LeE8kyjtC',
      'label': [
        'Южноукраїнська',
        'Yuzhnoukrainska'
      ],
      'raion': 'voznesenskyi',
      'list_name': 'hromada',
      '$autovalue': 'yuzhnoukrainska'
    },
    {
      'name': 'zabolotivska',
      '$kuid': 'F0XjywLuL',
      'label': [
        'Заболотівська',
        'Zabolotivska'
      ],
      'raion': 'kolomyiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabolotivska'
    },
    {
      'name': 'zabolottivska',
      '$kuid': 'xp9PeBKxF',
      'label': [
        'Заболоттівська',
        'Zabolottivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabolottivska'
    },
    {
      'name': 'zabolottsivska',
      '$kuid': 'bH4qXCwvX',
      'label': [
        'Заболотцівська',
        'Zabolottsivska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabolottsivska'
    },
    {
      'name': 'zabrodivska',
      '$kuid': 'eMsrAzXnq',
      'label': [
        'Забродівська',
        'Zabrodivska'
      ],
      'raion': 'kovelskyi',
      'list_name': 'hromada',
      '$autovalue': 'zabrodivska'
    },
    {
      'name': 'zachepylivska',
      '$kuid': 'B4zmPpZ0p',
      'label': [
        'Зачепилівська',
        'Zachepylivska'
      ],
      'raion': 'krasnohradskyi',
      'list_name': 'hromada',
      '$autovalue': 'zachepylivska'
    },
    {
      'name': 'zahvizdianska',
      '$kuid': '2pgj1FWqP',
      'label': [
        'Загвіздянська',
        'Zahvizdianska'
      ],
      'raion': 'ivano-frankivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zahvizdianska'
    },
    {
      'name': 'zaitsivska',
      '$kuid': 'esdnMUhe9',
      'label': [
        'Зайцівська',
        'Zaitsivska'
      ],
      'raion': 'synelnykivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaitsivska'
    },
    {
      'name': 'zakharivska',
      '$kuid': 'pfY2trnW0',
      'label': [
        'Захарівська',
        'Zakharivska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zakharivska'
    },
    {
      'name': 'zakupnenska',
      '$kuid': '0K4tek8Zu',
      'label': [
        'Закупненська',
        'Zakupnenska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zakupnenska'
    },
    {
      'name': 'zalishchytska',
      '$kuid': 'isQcyKfd3',
      'label': [
        'Заліщицька',
        'Zalishchytska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zalishchytska'
    },
    {
      'name': 'zaliznychnenska',
      '$kuid': '1GUWHO60K',
      'label': [
        'Залізничненська',
        'Zaliznychnenska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaliznychnenska'
    },
    {
      'name': 'zalozetska',
      '$kuid': 'vHEtFIh2Y',
      'label': [
        'Залозецька',
        'Zalozetska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zalozetska'
    },
    {
      'name': 'zaozernenska',
      '$kuid': 'lNdvj3QZM',
      'label': [
        'Заозерненська',
        'Zaozernenska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaozernenska'
    },
    {
      'name': 'zaporizka_2',
      '$kuid': 'eWxqjbb3B',
      'label': [
        'Запорізька',
        'Zaporizka'
      ],
      'raion': 'zaporizkyi',
      'list_name': 'hromada',
      '$autovalue': 'zaporizka_2'
    },
    {
      'name': 'zarichanska',
      '$kuid': 'Mcxda8cmT',
      'label': [
        'Зарічанська',
        'Zarichanska'
      ],
      'raion': 'khustskyi',
      'list_name': 'hromada',
      '$autovalue': 'zarichanska'
    },
    {
      'name': 'zarichnenska',
      '$kuid': 'i3mvnuCbH',
      'label': [
        'Зарічненська',
        'Zarichnenska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zarichnenska'
    },
    {
      'name': 'zarichnenska_2',
      '$kuid': 'BUlaFw3y1',
      'label': [
        'Зарічненська',
        'Zarichnenska'
      ],
      'raion': 'varaskyi',
      'list_name': 'hromada',
      '$autovalue': 'zarichnenska_2'
    },
    {
      'name': 'zasluchnenska',
      '$kuid': 'PpjX9YUPQ',
      'label': [
        'Заслучненська',
        'Zasluchnenska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'zasluchnenska'
    },
    {
      'name': 'zastavnivska',
      '$kuid': 'bp2SJNmmt',
      'label': [
        'Заставнівська',
        'Zastavnivska'
      ],
      'raion': 'cnernivetskyi',
      'list_name': 'hromada',
      '$autovalue': 'zastavnivska'
    },
    {
      'name': 'zaturtsivska',
      '$kuid': 'JOvHyWUJY',
      'label': [
        'Затурцівська',
        'Zaturtsivska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zaturtsivska'
    },
    {
      'name': 'zatyshanska',
      '$kuid': 'H03mibiLS',
      'label': [
        'Затишанська',
        'Zatyshanska'
      ],
      'raion': 'rozdilnianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zatyshanska'
    },
    {
      'name': 'zatyshnianska',
      '$kuid': '7zVhtUeUj',
      'label': [
        'Затишнянська',
        'Zatyshnianska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zatyshnianska'
    },
    {
      'name': 'zavallivska',
      '$kuid': 'pcb1xV1sT',
      'label': [
        'Заваллівська',
        'Zavallivska'
      ],
      'raion': 'holovanivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavallivska'
    },
    {
      'name': 'zavitnenska',
      '$kuid': 'zZPqfu8xT',
      'label': [
        'Завітненська',
        'Zavitnenska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavitnenska'
    },
    {
      'name': 'zavitnenska_2',
      '$kuid': 'jY5yuZnyF',
      'label': [
        'Завітненська',
        'Zavitnenska'
      ],
      'raion': 'kerchynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavitnenska_2'
    },
    {
      'name': 'zavito-leninska',
      '$kuid': '3ki56Zw5J',
      'label': [
        'Завіто-Ленінська',
        'Zavito-Leninska'
      ],
      'raion': 'dzhankoiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavito-leninska'
    },
    {
      'name': 'zavodska',
      '$kuid': 'bgjbkEgSB',
      'label': [
        'Заводська',
        'Zavodska'
      ],
      'raion': 'myrhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavodska'
    },
    {
      'name': 'zavodska_2',
      '$kuid': 'VNr8fHxFj',
      'label': [
        'Заводська',
        'Zavodska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zavodska_2'
    },
    {
      'name': 'zazymska',
      '$kuid': '6MguzoOuk',
      'label': [
        'Зазимська',
        'Zazymska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'zazymska'
    },
    {
      'name': 'zbarazka',
      '$kuid': 'FbLY482Uo',
      'label': [
        'Збаразька',
        'Zbarazka'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zbarazka'
    },
    {
      'name': 'zborivska',
      '$kuid': 'zOfYOPcO2',
      'label': [
        'Зборівська',
        'Zborivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zborivska'
    },
    {
      'name': 'zdolbunivska',
      '$kuid': 'K1jppClGs',
      'label': [
        'Здолбунівська',
        'Zdolbunivska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'zdolbunivska'
    },
    {
      'name': 'zdovbytska',
      '$kuid': 'RnEaoFbJP',
      'label': [
        'Здовбицька',
        'Zdovbytska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'zdovbytska'
    },
    {
      'name': 'zelenivska',
      '$kuid': '8wgePdOQu',
      'label': [
        'Зеленівська',
        'Zelenivska'
      ],
      'raion': 'bakhchysaraiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenivska'
    },
    {
      'name': 'zelenodolska',
      '$kuid': 'GTR5pCgCf',
      'label': [
        'Зеленодольська',
        'Zelenodolska'
      ],
      'raion': 'kryvorizkyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenodolska'
    },
    {
      'name': 'zelenohirska',
      '$kuid': '026Mcl0uu',
      'label': [
        'Зеленогірська',
        'Zelenohirska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenohirska'
    },
    {
      'name': 'zelenohirska_2',
      '$kuid': 'YQXCdqh44',
      'label': [
        'Зеленогірська',
        'Zelenohirska'
      ],
      'raion': 'podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenohirska_2'
    },
    {
      'name': 'zelenopidska',
      '$kuid': 'qIvyiGGty',
      'label': [
        'Зеленопідська',
        'Zelenopidska'
      ],
      'raion': 'kakhovskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenopidska'
    },
    {
      'name': 'zelenska',
      '$kuid': '4HGTfzuTn',
      'label': [
        'Зеленська',
        'Zelenska'
      ],
      'raion': 'verkhovynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zelenska'
    },
    {
      'name': 'zemlianychnenska',
      '$kuid': 'jrp3ORWvO',
      'label': [
        'Земляничненська',
        'Zemlianychnenska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zemlianychnenska'
    },
    {
      'name': 'zernivska',
      '$kuid': 'E3k3Pqfh6',
      'label': [
        'Зернівська',
        'Zernivska'
      ],
      'raion': 'kurmanskyi',
      'list_name': 'hromada',
      '$autovalue': 'zernivska'
    },
    {
      'name': 'zernivska_2',
      '$kuid': '4m9Fruw6B',
      'label': [
        'Зернівська',
        'Zernivska'
      ],
      'raion': 'yevpatoriiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zernivska_2'
    },
    {
      'name': 'zghurivska',
      '$kuid': '8WvqBJeJF',
      'label': [
        'Згурівська',
        'Zghurivska'
      ],
      'raion': 'brovarskyi',
      'list_name': 'hromada',
      '$autovalue': 'zghurivska'
    },
    {
      'name': 'zhashkivska',
      '$kuid': 'N5MTGbNks',
      'label': [
        'Жашківська',
        'Zhashkivska'
      ],
      'raion': 'umanskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhashkivska'
    },
    {
      'name': 'zhdanivska',
      '$kuid': 'fNxCp98Ga',
      'label': [
        'Жданівська',
        'Zhdanivska'
      ],
      'raion': 'horlivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhdanivska'
    },
    {
      'name': 'zhdanivska_3',
      '$kuid': 'zYTDwuPAY',
      'label': [
        'Жданівська',
        'Zhdanivska'
      ],
      'raion': 'khmilnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhdanivska_3'
    },
    {
      'name': 'zhdeniivska',
      '$kuid': 'ZMmWKwEP3',
      'label': [
        'Жденіївська',
        'Zhdeniivska'
      ],
      'raion': 'mukachivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhdeniivska'
    },
    {
      'name': 'zheliabovska',
      '$kuid': 'Cogh99S2Z',
      'label': [
        'Желябовська',
        'Zheliabovska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zheliabovska'
    },
    {
      'name': 'zhemchuzhynska',
      '$kuid': 'fAGqy5a5r',
      'label': [
        'Жемчужинська',
        'Zhemchuzhynska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhemchuzhynska'
    },
    {
      'name': 'zhmerynska',
      '$kuid': 'TPyQx8Mlu',
      'label': [
        'Жмеринська',
        'Zhmerynska'
      ],
      'raion': 'zhmerynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhmerynska'
    },
    {
      'name': 'zhovkivska',
      '$kuid': 'pZRbbarpC',
      'label': [
        'Жовківська',
        'Zhovkivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhovkivska'
    },
    {
      'name': 'zhovtanetska',
      '$kuid': 'IBOC37it8',
      'label': [
        'Жовтанецька',
        'Zhovtanetska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhovtanetska'
    },
    {
      'name': 'zhovtovodska',
      '$kuid': 'Cq0Rd9YBR',
      'label': [
        'Жовтоводська',
        'Zhovtovodska'
      ],
      'raion': 'kamianskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhovtovodska'
    },
    {
      'name': 'zhuravlivska',
      '$kuid': 'iB9xyLDqL',
      'label': [
        'Журавлівська',
        'Zhuravlivska'
      ],
      'raion': 'simferopolskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhuravlivska'
    },
    {
      'name': 'zhuravnenska',
      '$kuid': 'cEcyvWN3X',
      'label': [
        'Журавненська',
        'Zhuravnenska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhuravnenska'
    },
    {
      'name': 'zhuravska',
      '$kuid': 'dBfhoQnC2',
      'label': [
        'Журавська',
        'Zhuravska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhuravska'
    },
    {
      'name': 'zhvanetska',
      '$kuid': 'TeIp5kQf8',
      'label': [
        'Жванецька',
        'Zhvanetska'
      ],
      'raion': 'kamianets-podilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhvanetska'
    },
    {
      'name': 'zhydachivska',
      '$kuid': 'SnjGIYPDu',
      'label': [
        'Жидачівська',
        'Zhydachivska'
      ],
      'raion': 'stryiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhydachivska'
    },
    {
      'name': 'zhytomyrska_2',
      '$kuid': '04Hta6iW4',
      'label': [
        'Житомирська',
        'Zhytomyrska'
      ],
      'raion': 'zhytomyrskyi',
      'list_name': 'hromada',
      '$autovalue': 'zhytomyrska_2'
    },
    {
      'name': 'zinkivska',
      '$kuid': 'W240fEmj9',
      'label': [
        'Зіньківська',
        'Zinkivska'
      ],
      'raion': 'khmelnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'zinkivska'
    },
    {
      'name': 'zinkivska_2',
      '$kuid': '4QZ9gt5u9',
      'label': [
        'Зіньківська',
        'Zinkivska'
      ],
      'raion': 'poltavskyi',
      'list_name': 'hromada',
      '$autovalue': 'zinkivska_2'
    },
    {
      'name': 'zlynska',
      '$kuid': 'NarO38sum',
      'label': [
        'Злинська',
        'Zlynska'
      ],
      'raion': 'novoukrainskyi',
      'list_name': 'hromada',
      '$autovalue': 'zlynska'
    },
    {
      'name': 'zmiivska',
      '$kuid': 'TZHpHLIFU',
      'label': [
        'Зміївська',
        'Zmiivska'
      ],
      'raion': 'chuhuivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zmiivska'
    },
    {
      'name': 'znamianska',
      '$kuid': 'QewAjBF1e',
      'label': [
        'Знам\'янська',
        'Znamianska'
      ],
      'raion': 'kropyvnytskyi',
      'list_name': 'hromada',
      '$autovalue': 'znamianska'
    },
    {
      'name': 'znamianska_2',
      '$kuid': 'yQBKOJqMy',
      'label': [
        'Знам\'янська',
        'Znamianska'
      ],
      'raion': 'berezivskyi',
      'list_name': 'hromada',
      '$autovalue': 'znamianska_2'
    },
    {
      'name': 'znob-novhorodska',
      '$kuid': 'RTRV8cnoq',
      'label': [
        'Зноб-Новгородська',
        'Znob-Novhorodska'
      ],
      'raion': 'shostkynskyi',
      'list_name': 'hromada',
      '$autovalue': 'znob-novhorodska'
    },
    {
      'name': 'zolochivska',
      '$kuid': 'PGMRCR1nQ',
      'label': [
        'Золочівська',
        'Zolochivska'
      ],
      'raion': 'bohodukhivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolochivska'
    },
    {
      'name': 'zolochivska_2',
      '$kuid': 'a5Rsrobkz',
      'label': [
        'Золочівська',
        'Zolochivska'
      ],
      'raion': 'boryspilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolochivska_2'
    },
    {
      'name': 'zolochivska_3',
      '$kuid': '4BTSDpbUS',
      'label': [
        'Золочівська',
        'Zolochivska'
      ],
      'raion': 'zolochivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolochivska_3'
    },
    {
      'name': 'zolotnykivska',
      '$kuid': '3fke5NJDd',
      'label': [
        'Золотниківська',
        'Zolotnykivska'
      ],
      'raion': 'ternopilskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotnykivska'
    },
    {
      'name': 'zolotoniska',
      '$kuid': 'bFeCKB7UO',
      'label': [
        'Золотоніська',
        'Zolotoniska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotoniska'
    },
    {
      'name': 'zolotopolenska',
      '$kuid': 'QWOTmbBT0',
      'label': [
        'Золотополенська',
        'Zolotopolenska'
      ],
      'raion': 'feodosiiskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotopolenska'
    },
    {
      'name': 'zolotopotitska',
      '$kuid': 's45WXdhmn',
      'label': [
        'Золотопотіцька',
        'Zolotopotitska'
      ],
      'raion': 'chortkivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zolotopotitska'
    },
    {
      'name': 'zorianska',
      '$kuid': 'ewBhgrCrM',
      'label': [
        'Зорянська',
        'Zorianska'
      ],
      'raion': 'rivnenskyi',
      'list_name': 'hromada',
      '$autovalue': 'zorianska'
    },
    {
      'name': 'zorivska',
      '$kuid': 'plvVux06a',
      'label': [
        'Зорівська',
        'Zorivska'
      ],
      'raion': 'zolotoniskyi',
      'list_name': 'hromada',
      '$autovalue': 'zorivska'
    },
    {
      'name': 'zorkinska',
      '$kuid': 'yhq5mMng9',
      'label': [
        'Зоркінська',
        'Zorkinska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zorkinska'
    },
    {
      'name': 'zuiska',
      '$kuid': 'nN7npjlHp',
      'label': [
        'Зуйська',
        'Zuiska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zuiska'
    },
    {
      'name': 'zvanivska',
      '$kuid': 'qx4qeMtV9',
      'label': [
        'Званівська',
        'Zvanivska'
      ],
      'raion': 'bakhmutskyi',
      'list_name': 'hromada',
      '$autovalue': 'zvanivska'
    },
    {
      'name': 'zvenyhorodska',
      '$kuid': 'ILX7j45cQ',
      'label': [
        'Звенигородська',
        'Zvenyhorodska'
      ],
      'raion': 'zvenyhorodskyi',
      'list_name': 'hromada',
      '$autovalue': 'zvenyhorodska'
    },
    {
      'name': 'zybynska',
      '$kuid': 'a46eryzyI',
      'label': [
        'Зибинська',
        'Zybynska'
      ],
      'raion': 'bilohirskyi',
      'list_name': 'hromada',
      '$autovalue': 'zybynska'
    },
    {
      'name': 'zymnivska',
      '$kuid': 'a1EpDRdTz',
      'label': [
        'Зимнівська',
        'Zymnivska'
      ],
      'raion': 'volodymyr-volynskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymnivska'
    },
    {
      'name': 'zymnovodivska',
      '$kuid': 'qtYZ1W35k',
      'label': [
        'Зимноводівська',
        'Zymnovodivska'
      ],
      'raion': 'lvivskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymnovodivska'
    },
    {
      'name': 'zymohirivska',
      '$kuid': 'BIc3nLXQE',
      'label': [
        'Зимогір\'ївська',
        'Zymohirivska'
      ],
      'raion': 'alchevskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymohirivska'
    },
    {
      'name': 'zymynska',
      '$kuid': '4e7vqvOXg',
      'label': [
        'Зиминська',
        'Zymynska'
      ],
      'raion': 'perekopskyi',
      'list_name': 'hromada',
      '$autovalue': 'zymynska'
    }
  ],
  'settings': {
    'default_language': 'Ukrainian (uk)'
  },
  'translated': [
    'constraint_message',
    'hint',
    'label'
  ],
  'translations': [
    'Ukrainian (uk)',
    'English (en)'
  ]
}