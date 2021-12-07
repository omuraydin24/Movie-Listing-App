import React from 'react';
import {View} from 'react-native';

/**
 * Selamlar. Sizlerden istenen IMDB benzeri bir film analiz uygulaması geliştirmenizdir.
 * Uygulama açılışında bir film listesi bulunmalı ve bu listede filmlerin isimleri, tarzları ve puanları bulunmalıdır. Ek olarak filmin konusu hakkında (brief) sadece iki satırlık
 * bir yer de ekleyelim. Kullanıcı bir filme tıkladığında film detayına gidebilmeli ve detay kısmında film ile ilgili her bir veriye erişebilmelidir. "rate" property'si için yıldız ikonu
 * kullanabiliriz. Uygulamada bol bol ikon kullanalım.
 * Kullanıcı herhangi bir filme tıkladığında sayfanın en altında o filmin tarzına benzer bir kaç film de gösterebiliriz. Örneğin kullanıcı "genre" propertysinde "HORROR" ve "THRILLER" bulunan bir
 * film seçtiğinde, tüm filmler arasında "genre" propertysinde "HORROR" ya da "THRILLER" değerini barındıran 4 adet filmi sayfanın altında ufak kart şeklinde gösterebiliriz. İlişkili filmleri
 * rastgele seçebilirsiniz, size kalmış. Tıklayınca detayına gitmek opsiyonel bir seçenek, ister ekleyin ister eklemeyin.
 * Ayrıca bir filmin detayındayken "See Reviews" kısmı ekleyelim ve eğer o film hakkında bir yorum varsa o yorumları görüntüleyebilelim. Kullanıcı isterse burada filme yorum ekleyebilsin.
 * Eğer hiç yorum yoksa "Yorum yazan ilk siz olun" diye ibare gösterelim.
 * Son olarak da ana sayfada "genre"'ye göre filtreleme seçeneği ekleyelim. Tıklandığında ekranın altında bir filtreleme modal'ı açılsın. Kullanıcı bir değer seçtiğinde genre'sinde sadece seçilen
 * değeri barındıran filmler kalsın. Bu modal'a "All Genres" değeri eklemeyi de unutmayalım.
 *
 * NOT: Yorumlar ekranında kullanıcının gireceği yorum server'a gönderilmeyecek. Sadece o sayfada tutulması yeterli. Geri gidip sayfaya gelindiğinde silinebilir, sorun yok.
 *
 * $ json-server --host 127.0.0.1 --watch <MOVIES JSON DOSYASININ KONUMU>
 * */

export default function App() {
  return <View>{/* ... */}</View>;
}
