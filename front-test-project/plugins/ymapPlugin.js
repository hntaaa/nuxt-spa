import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: 'https://api-maps.yandex.ru/2.1?apikey=ваш API-ключ&lang=ru_RU',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
} 

Vue.use(YmapPlugin, settings);