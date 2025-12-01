import { ThemeToggle } from '@/components/theme-toggle';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['75%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <ScrollView className="flex-1 bg-white dark:bg-gray-900">
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4 text-fuchsia dark:text-white">
            Theme Settings
          </Text>
          <ThemeToggle />
          <Text className="mt-4 text-gray-600 dark:text-gray-400">
            Select your preferred theme. System will use your device&apos;s
            theme by default.
          </Text>
        </View>
        <View className="p-4">
          <Text className="text-red-500 dark:text-green-500 text-lg font-semibold">
            Hello - Theme Demo
          </Text>
          <Text className="mt-2 text-gray-800 dark:text-gray-200">
            This text changes color based on theme
          </Text>
        </View>
        <View className="p-4 space-y-1">
          <Input placeholder="Office Depot" label="Merchant" important={true} />
          <Button
            title="Open Bottom Sheet"
            onPress={() => sheetRef.current?.snapToIndex(0)}
            variant="secondary"
          />
        </View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableDynamicSizing={false}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheetBackground}
      >
        <BottomSheetScrollView
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator
        >
          <Text style={{ lineHeight: 22 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            iusto qui facere, perspiciatis quidem distinctio, accusamus quasi
            adipisci dicta, eveniet eligendi. Maiores eos unde ea! Nihil sit
            autem voluptate voluptatum et. Maiores repellat ullam quod, placeat
            excepturi odit eligendi enim necessitatibus aspernatur consequuntur
            architecto consequatur unde rem saepe perspiciatis libero quas et
            corrupti itaque ducimus magni cum! Minima perspiciatis earum minus a
            reiciendis dolore, culpa rerum, obcaecati omnis nostrum quidem neque
            quaerat? Quisquam voluptas obcaecati id, in dignissimos aspernatur
            quia, ab, illo optio eum architecto. Itaque officiis facere neque
            odio sit quidem ut aperiam consequatur modi nobis quia cupiditate
            eos, reprehenderit aspernatur ipsa dolores eligendi dolorum unde,
            magnam sapiente labore illo quae doloribus quas? Nesciunt,
            temporibus dolorum optio maiores facere accusantium repudiandae
            dolorem perferendis atque eligendi quaerat corrupti molestias
            delectus voluptatum animi fuga mollitia ad sed suscipit iusto ex quo
            itaque nihil! Ipsa, corrupti et eligendi quam quisquam mollitia
            similique sit animi, cum sed, accusantium doloribus enim temporibus
            laboriosam possimus illo nihil asperiores delectus provident harum.
            Cum aut quae ipsa sequi qui debitis at velit, maiores, alias error
            quaerat ducimus voluptatum quo totam, ad non iusto aliquid quasi
            vitae culpa! Modi provident nam vel laborum expedita enim nobis
            voluptatem ad, in placeat dolore obcaecati? Mollitia, quo inventore
            iste placeat amet odio illum perferendis corporis reiciendis
            eveniet! Doloribus molestias cumque, explicabo similique dicta, ex
            at laudantium ducimus quia nesciunt corporis. Asperiores, iure
            culpa. Incidunt dolorum eos vel necessitatibus, iste architecto,
            cupiditate officiis pariatur voluptatibus excepturi debitis voluptas
            maiores alias nemo nostrum vitae, odio laboriosam impedit? Est,
            voluptate ullam vero voluptatem nulla sint corrupti ratione omnis
            iste a nam id porro distinctio cupiditate. Maxime aut commodi id
            omnis maiores dolore dolorem. Ut totam, et excepturi enim officiis
            incidunt esse eveniet ipsam blanditiis, sequi quidem eius natus
            magnam architecto consequatur neque alias sint necessitatibus culpa,
            quasi eos nesciunt! Provident dolor consequatur nobis itaque
            nesciunt alias, unde soluta! Amet corporis temporibus nulla
            nesciunt? Neque, qui unde dolorem, quos, cupiditate doloremque
            officia eius placeat facilis dolore tenetur alias quisquam fugiat
            mollitia nesciunt beatae nisi inventore dolorum! Vero voluptates
            dolores cumque velit esse inventore error omnis tempora facere
            nesciunt architecto necessitatibus veniam, cupiditate autem quod aut
            numquam delectus iste nisi possimus perferendis voluptate illum
            dolore! Fuga deserunt eveniet non vero nam. Repudiandae incidunt
            voluptate aperiam, nam est sed voluptatum fugit? Id exercitationem
            eius unde aliquid architecto in perferendis magni, quo sit, odio
            iusto veniam possimus. Rerum minus, eius doloribus cumque velit
            aperiam rem soluta exercitationem vel earum delectus dicta iusto
            non? Voluptas, voluptatum veritatis molestias blanditiis at ducimus
            harum? Id, ducimus natus! Alias magni recusandae suscipit assumenda
            omnis ab sint esse. Laboriosam minima molestias laborum, corporis
            voluptatibus voluptatum in praesentium quia ab perferendis vel
            veniam inventore deleniti velit? Soluta iusto, iste laboriosam
            reiciendis, corrupti corporis, debitis unde quibusdam neque
            voluptatum a quas! Ad, tempora doloremque inventore corrupti
            excepturi quas alias quo deserunt consequuntur eaque quae, in
            dolorem exercitationem dignissimos voluptate perspiciatis tempore
            placeat! Iure maiores ab perspiciatis vitae quas a. Numquam natus
            facilis blanditiis repudiandae consequuntur incidunt placeat id
            laborum dignissimos perferendis! Voluptas itaque eius perspiciatis
            aliquid optio labore ab sint quisquam et consequuntur eum maiores,
            non eos tempora ad atque, modi hic! Incidunt nam at dolorum quod
            commodi earum. Numquam quidem quis ex alias nisi ipsum optio
            laboriosam sunt tempora animi eveniet quia incidunt itaque cum esse
            explicabo ab eum eos id, blanditiis commodi. Eos eveniet unde nihil
            exercitationem? Maiores fugit mollitia error, dolor esse aut, nulla
            nisi totam rem optio eius odit neque molestiae dolorum qui dolorem
            iste voluptatem! Optio quia repudiandae voluptatum obcaecati ipsam,
            cumque iusto natus numquam tenetur enim accusamus. Corrupti
            aspernatur magnam officiis beatae quasi libero saepe quis, ipsam,
            cumque, soluta quaerat laborum dolorum veritatis totam nam itaque ut
            tenetur inventore exercitationem hic error obcaecati eum. Fuga neque
            ut recusandae asperiores, molestiae iure alias atque autem esse?
            Optio sint, eaque quisquam ut iure, est, aliquid veritatis numquam
            dolores eveniet libero! Officiis qui fugiat iure dolores obcaecati,
            amet alias? Aperiam nisi consectetur distinctio illum repellat fuga
            accusamus architecto, eius sed doloribus ea magni. Beatae adipisci
            illum, dolor obcaecati quae reiciendis et corrupti amet repellat at
            blanditiis inventore reprehenderit velit expedita voluptates
            molestias dicta recusandae veritatis, quos architecto, quasi dolores
            enim sequi! Tempore culpa cupiditate officiis molestias nostrum
            dolor quis alias quidem aliquam architecto atque minus nulla
            reiciendis natus ex adipisci, ullam sit repellat, eius voluptatibus
            nihil eaque sequi? Quisquam nobis aut quibusdam. Vitae, pariatur
            nihil, accusantium, doloremque iure enim nostrum est dolorem
            incidunt blanditiis dolore rem. Quaerat nihil corrupti cumque
            dolorem illo. Corporis exercitationem dolores saepe veniam tempore
            est hic, neque necessitatibus, nulla nemo et ipsam deleniti quis
            distinctio inventore praesentium eligendi mollitia quam provident
            rerum! Nobis porro ad illum eaque, accusantium ab quas consequuntur
            sunt laudantium, ipsam dolor possimus tempore aspernatur placeat
            doloremque beatae fugiat ex? Vitae, quisquam facere. Amet dolor
            consequuntur perspiciatis, modi pariatur quos rerum, nemo fugit unde
            laudantium vitae quae architecto sint a alias dolorem. Ad rem illum
            doloremque aliquid obcaecati atque similique velit odit veniam ipsum
            facilis recusandae ea, impedit distinctio praesentium accusamus cum
            ullam itaque iusto, aperiam tempora ipsa. Tenetur atque aut ipsa,
            exercitationem blanditiis ad deserunt, commodi velit earum facere
            numquam at beatae rerum, eius quos reprehenderit recusandae
            accusantium ipsum a magni? Eius, distinctio? Ipsa harum rerum id aut
            ex, consequatur laborum quibusdam laboriosam molestiae officia
            commodi, blanditiis corporis deleniti assumenda nobis praesentium
            eum eaque earum voluptatum aliquid. Molestias facilis similique
            nesciunt non delectus quibusdam, aspernatur vitae voluptatem
            provident numquam doloribus corrupti voluptates iure ullam ea a aut
            porro voluptatum reprehenderit atque minima reiciendis quas aliquid?
            Sapiente in facilis quasi facere id, veniam placeat, reiciendis
            culpa eaque minima inventore maiores eum. Incidunt quia
            exercitationem minima earum molestias, a voluptatum veritatis quo
            impedit officiis doloribus sunt officia aliquid ipsa sapiente est
            nihil neque? Minima, eveniet officia maxime, non suscipit vel
            obcaecati qui natus at consectetur laborum placeat esse! Autem
            praesentium illo hic ut animi reiciendis eius nobis natus. Itaque
            inventore labore maxime fuga ea quidem cum animi. Non odio
            laudantium praesentium autem sapiente possimus reprehenderit
            laboriosam ab quia iusto error architecto esse numquam delectus,
            perferendis aspernatur veniam maiores cumque? Iusto vitae, ipsam
            nulla consectetur ab aspernatur rem et, similique doloribus soluta
            corrupti? Voluptatum optio quos aperiam blanditiis, quod minus quo
            similique. Ipsa voluptatum doloribus, sunt soluta optio aliquam
            deleniti minima dolor incidunt saepe nemo eligendi delectus eaque
            quisquam. Perspiciatis alias unde veritatis amet laudantium fugiat
            autem architecto quod deserunt quo nemo animi maiores, eveniet
            explicabo aspernatur, quos quas, harum similique! Nesciunt, voluptas
            ex earum excepturi aspernatur enim similique qui dolor atque nobis
            ratione porro aperiam aliquam incidunt eius labore architecto
            consequuntur amet odio dolore non optio maxime? Rem officiis nam
            dolores alias corporis ad. Suscipit fuga omnis, debitis commodi
            facilis nulla ut facere, ratione officia vel esse voluptates nemo?
            Eligendi qui esse adipisci neque expedita! Vitae provident
            consequuntur suscipit autem dolor voluptatibus, necessitatibus
            temporibus! Hic atque maiores eaque nam iste earum aliquid,
            distinctio soluta deserunt pariatur recusandae voluptas impedit,
            maxime iusto esse non minus nemo perspiciatis ducimus, aperiam modi.
            Sapiente necessitatibus fugit nam facere? Iusto, sunt perferendis
            neque facilis adipisci temporibus. Perspiciatis recusandae
            asperiores illum voluptate non, quisquam odit pariatur facilis
            voluptates mollitia, nulla aut molestiae doloribus maxime, tempora
            labore. Fuga sed quo enim, aliquid consequatur esse vero laborum
            adipisci quos nisi ad doloremque, labore optio molestias quidem
            doloribus nemo! Eos ipsam cumque odit impedit, provident blanditiis
            accusantium perferendis ipsa quod ut, at facilis repudiandae. Animi
            veritatis vitae unde placeat ad ratione veniam similique dolorum
            iure laborum ex illo dolore delectus, nostrum est quisquam illum
            earum magni doloribus modi nisi, maxime quae fugit. Perferendis nam
            numquam voluptates modi tenetur at autem rerum alias natus,
            consequuntur maiores doloremque quo eum dolore sequi ad ipsam. In
            consequatur unde quibusdam ab repellat aspernatur culpa sit nam
            fugiat nemo deserunt quia nihil velit, magni fuga, porro ad delectus
            deleniti laborum iure. Id minima expedita modi facilis repellat, ad
            cupiditate asperiores. In saepe non cum cumque nam omnis culpa a
            hic! Minima, ea dolorem temporibus officia voluptates obcaecati amet
            blanditiis accusamus. Id odio, nobis enim consequuntur hic aliquid
            voluptatibus culpa placeat, aut ducimus quidem nulla minima facilis,
            voluptates porro provident pariatur accusamus voluptate! Dolor
            doloribus consequatur distinctio vitae earum aperiam ipsam. Eos, quo
            sint quis quia, neque quam ea asperiores ipsam nostrum quod ducimus.
            Alias ea magni facilis delectus aliquid! Magni eaque voluptatem
            consequatur accusamus alias, corrupti deleniti eum, vitae vel
            maiores cum odio impedit consequuntur? Ex id doloremque minima a,
            eligendi voluptas odit officiis ducimus ipsum neque architecto natus
            eius ea. Pariatur ducimus perferendis inventore. Suscipit alias
            deserunt quos ex expedita earum, ipsa unde dolorem? Temporibus
            tenetur quasi, quas repudiandae, explicabo qui cum eveniet aliquid,
            consequatur voluptates tempore labore hic dolor magnam. Ea, porro
            quis, numquam natus dolor ut eligendi fuga ratione incidunt maxime
            dolorem error. Tenetur ducimus laboriosam harum illo illum nihil
            similique, distinctio aut aliquid minus optio ipsum qui minima
            maiores sunt porro sapiente libero, accusamus quaerat aperiam
            nostrum? Vero, et. Obcaecati nobis expedita vero quisquam voluptates
            quae possimus repellat! Veniam explicabo, tenetur itaque porro eius
            nesciunt eveniet dolorem, dolore officiis voluptatibus tempore ipsa
            vitae quos. Iste, impedit, veritatis voluptatibus illo eaque,
            mollitia a nesciunt deserunt nemo consequatur modi repellat harum?
            Pariatur blanditiis veritatis voluptatum repudiandae voluptate id
            dicta ullam in aut quis dolore animi assumenda impedit iure nulla
            inventore minima tenetur, ratione repellendus, facere totam
            excepturi ab labore. Sunt, eligendi? Itaque modi sunt, facere quasi
            voluptatum temporibus blanditiis magni. Quasi sint quis cum! Minus
            non assumenda libero laboriosam esse vero tempora voluptatibus
            tenetur. Voluptate corrupti veritatis in ab impedit soluta saepe,
            quia distinctio libero vitae quae magni fugit assumenda ex.
            Laudantium praesentium quod itaque blanditiis deleniti ut numquam,
            iure, recusandae, eveniet quia similique rerum labore esse
            cupiditate dolorem nobis tenetur. Facere molestiae maxime facilis
            assumenda animi, eum iusto dolore delectus. Corporis itaque autem
            recusandae temporibus reiciendis maxime, odit tempore alias illum
            veritatis eligendi consequuntur in accusamus doloribus eos omnis
            modi cumque deleniti natus possimus ea voluptatibus ratione
            blanditiis laudantium! Nemo error fuga eum ad eaque obcaecati cumque
            voluptas dolores officia amet, in saepe praesentium molestiae
            aspernatur corrupti officiis! Fugit, fuga facere! Labore, enim est
            dolores, sed totam repellat iure deserunt nostrum, aliquam quibusdam
            eveniet quaerat tempora saepe eum nesciunt quis culpa voluptatibus
            suscipit! Accusamus odio labore voluptatum nam error adipisci quae
            rem repellendus in eligendi reprehenderit est illo, voluptatibus
            voluptatem nemo at minima soluta! Eos quis at error dignissimos
            optio nesciunt laborum voluptatibus! Necessitatibus sed quibusdam
            eligendi veniam cupiditate repudiandae incidunt repellat sint
            ratione quos itaque rerum quidem, nulla quasi facilis doloremque
            sequi accusamus velit blanditiis reprehenderit facere fugiat
            doloribus sapiente. Deserunt cumque ducimus vero accusamus quos
            culpa explicabo consequatur, pariatur voluptatibus! Sunt odio
            expedita odit, corporis nihil sapiente explicabo iste commodi labore
            minima illum reprehenderit facere non cum amet libero delectus rem
            molestiae debitis fuga animi, itaque aliquid nisi? Sequi minima
            placeat corporis cupiditate obcaecati ab, odit odio commodi eius
            quis tenetur autem. Inventore minima accusamus deleniti quaerat
            perferendis nobis impedit nam dolore veniam debitis sed autem at
            dicta ullam neque, ab ipsam nostrum aliquam, dolor animi
            voluptatibus vel unde quo! Sunt reiciendis unde incidunt dolores
            assumenda vero nam reprehenderit aspernatur, praesentium, corporis
            labore maxime fuga voluptatibus illum ipsa architecto nesciunt
            laudantium nemo error. Eum quod iusto ea debitis excepturi
            architecto deserunt amet sed. Nobis tempore laborum consequuntur
            veniam, perspiciatis, vero nulla consectetur dolor excepturi
            voluptas doloribus exercitationem nam sint dolorum rerum quae sed
            obcaecati. Molestias officia at libero, cupiditate cum voluptas
            architecto tempora minima. Perferendis perspiciatis, sunt dolorum,
            itaque voluptatem laborum velit deleniti rem laudantium ea ullam.
            Esse dolor saepe accusamus nulla, voluptatem minima culpa! Sunt
            aperiam facilis et odit. Cum minus laborum quo maxime, accusantium
            odio quod cumque quas nisi facere dicta atque illum accusamus
            asperiores nostrum dolorum consequuntur unde error optio. Doloremque
            nam assumenda repellat similique molestias quia porro natus. Error
            quia corporis qui quae minima distinctio corrupti facilis sit.
            Consequatur, accusamus minus. Hic molestiae commodi dignissimos
            fuga? Dolorem optio quos eos recusandae natus quis maxime, vitae
            distinctio fugiat tempora sit unde! Culpa repellendus optio dolor
            ducimus autem tempore, minus deserunt eos nostrum quasi fugiat
            perspiciatis vitae, quos cupiditate quisquam inventore recusandae
            labore quas sequi veritatis eligendi dicta et ex doloribus! Beatae
            ea rem saepe eveniet. Nisi facere voluptatibus doloremque
            reprehenderit porro, autem culpa. Placeat similique repellendus odit
            architecto minus, quibusdam doloremque inventore repellat nulla
            quasi quia praesentium odio numquam voluptatibus blanditiis
            voluptatem commodi est qui! Corrupti voluptatem consequuntur eum
            mollitia nihil. Obcaecati qui, culpa veniam hic, beatae illo dolores
            consectetur ea animi velit asperiores laboriosam ullam rem optio,
            minus id voluptatibus debitis aliquid. Sint adipisci soluta sunt
            corrupti ducimus. Odio illo quam deserunt corrupti laboriosam qui
            dignissimos sequi quis. Quo cumque doloribus doloremque assumenda
            est nisi qui labore, fugiat voluptatibus magni? Laborum quos fuga
            quibusdam repudiandae, praesentium excepturi a suscipit quisquam
            cumque est nam vero aliquid, repellat consectetur odio delectus
            doloribus itaque eligendi molestias. Dolore quas tempore non nostrum
            ducimus? Dolores vitae itaque officia ad dicta recusandae atque,
            unde repudiandae iste molestiae. Modi, exercitationem optio.
            Expedita unde voluptatem, repudiandae at doloribus quibusdam harum
            sapiente maiores alias maxime nam quos? Mollitia provident nam, rem
            maiores voluptatem delectus et, quasi, aperiam iste cumque tempore
            quos veritatis beatae modi architecto eius! Sed natus reiciendis
            ullam dolorem saepe voluptatibus libero voluptatem voluptatum,
            officiis autem fugit iure dolorum deleniti nostrum est vero
            inventore expedita laboriosam exercitationem? Ullam alias vel enim.
            Veritatis quidem accusamus aut reprehenderit tenetur aliquid
            eligendi ea modi natus, inventore, totam nam expedita provident.
            Aspernatur odio debitis placeat accusamus rem ratione et voluptas
            unde sit. Neque, vero nulla. Iste ullam at omnis eaque autem
            consequuntur. Sequi sed neque rerum incidunt aliquam similique
            reprehenderit! Nemo et doloribus amet nesciunt eligendi? Minus
            quidem repudiandae quam adipisci ad vitae, rerum nisi, eos modi
            quaerat nam laudantium ut totam dolor. Ipsum suscipit quis
            praesentium, ullam doloremque et nam illum ipsam sunt fuga saepe in,
            voluptatibus veniam placeat voluptas, dolor hic dolore accusantium
            harum consequuntur! Alias deserunt, rem qui laboriosam, ad tenetur
            excepturi a iste ab temporibus sed harum quasi similique, modi nobis
            ex saepe labore dolor magnam recusandae quae dolorum maxime! Alias
            ullam sit odio nemo nesciunt, soluta id voluptates eum commodi nam
            magnam! Cupiditate consequatur ex voluptas maxime facilis atque fuga
            eos nesciunt ullam deleniti obcaecati id magni laborum, dolorum
            officiis culpa perferendis amet natus molestiae odit nemo in at
            ipsa. Mollitia reprehenderit natus, possimus fugit cupiditate, hic
            magnam optio quos suscipit alias ducimus illo vitae dolor enim sed
            maxime odit aliquid, assumenda ipsa. Voluptates praesentium quis
            fuga nemo magni pariatur temporibus eius culpa velit distinctio,
            doloribus nostrum deleniti repellendus, id quae natus enim? Unde
            eius nostrum quaerat distinctio iure enim eaque tempore incidunt,
            quo soluta, totam maiores doloribus quos expedita voluptates labore
            exercitationem fugit molestiae assumenda alias, animi vero facere.
            Est, corporis maxime! Impedit, libero eius dolore nisi, voluptas
            praesentium nobis reiciendis itaque mollitia odio eos repellendus
            qui natus voluptates numquam, fugiat commodi esse facere delectus?
            Nobis, nostrum dignissimos vero animi sed non perspiciatis debitis
            exercitationem porro voluptate cumque nisi alias consequuntur beatae
            unde totam saepe corporis dolore obcaecati! Quod reprehenderit
            impedit neque non id incidunt odit omnis, repudiandae dolor esse
            odio? Consequatur doloribus sint ullam doloremque blanditiis ad
            autem consequuntur cum deserunt quibusdam maiores quam, cumque, quis
            quas sequi vitae numquam recusandae explicabo delectus sit
            excepturi, dicta consectetur ratione fugiat! Dolor, natus nobis
            incidunt provident inventore cupiditate et tempore corrupti expedita
            repudiandae, deserunt laboriosam harum dolores. Qui, quasi
            voluptatem? Ullam molestiae tempore mollitia distinctio similique
            temporibus sequi voluptates a esse alias! Unde deleniti laudantium
            animi, dolorem voluptatem tempora error facere aliquam! Minima
            assumenda, labore iure error, ducimus repellendus commodi quidem
            iusto iste quaerat ratione asperiores ipsum! Officia, recusandae
            vero quibusdam nihil voluptas culpa aperiam at, voluptatum
            reprehenderit quod vel nam quasi autem, quae repellat deserunt
            commodi omnis accusantium quia sint perspiciatis? Illo et voluptas
            repellendus suscipit ipsum sapiente! Delectus eos, amet consequatur
            totam iste quidem praesentium voluptatibus blanditiis modi ut maxime
            ad, est illo iure unde doloremque. Vitae provident odit similique
            eveniet voluptatum nesciunt ea, ullam quas. Natus, quidem ex? Quae
            molestias facere possimus tenetur ex alias aliquid omnis quisquam.
            Omnis harum aspernatur porro vitae ipsa a ullam illum ratione modi
            alias aliquid quis animi laudantium quam, explicabo aperiam
            delectus? Exercitationem minus, odit veritatis vitae voluptatem nemo
            ad pariatur soluta, obcaecati excepturi repellendus labore expedita
            iure. Nesciunt qui atque asperiores dolores. Laborum aperiam enim
            quos reprehenderit cumque minima accusantium dolore natus veritatis
            vel. Eius voluptas quibusdam praesentium sapiente eligendi nesciunt
            atque enim, commodi dolor sint sequi eum, optio, maiores ipsam? Fuga
            eaque aut odio pariatur officia molestias numquam soluta
            voluptatibus eos, quidem vel excepturi animi delectus sequi quam
            facilis architecto ea. Facere suscipit possimus repudiandae
            asperiores dolores aperiam? Assumenda velit corrupti beatae nobis
            aliquid, suscipit similique, in eum necessitatibus perspiciatis
            omnis natus neque quibusdam expedita minima odit voluptatum facere
            alias animi dolor. Totam reprehenderit quidem esse amet veniam,
            minima quis nihil commodi distinctio quam quos deleniti atque eos
            repellat autem cupiditate nulla assumenda! Nulla, laborum quos!
            Explicabo accusamus ex, praesentium consectetur, in velit tempore
            voluptate deserunt quaerat magni labore laboriosam nisi sint! Optio
            laudantium est nam atque reprehenderit sunt explicabo, eius nihil
            alias sint iusto quo ex possimus debitis laborum non exercitationem
            blanditiis hic dolorum! Recusandae alias, minima et officia
            voluptates, atque reprehenderit quasi asperiores similique pariatur
            harum earum numquam ad nobis sapiente animi officiis quisquam fugit,
            quia unde repellendus provident cum. Quae blanditiis nam quo
            incidunt animi molestiae cum. Repudiandae odio perferendis obcaecati
            temporibus architecto necessitatibus. Atque vitae illo maxime
            ducimus molestias cumque quasi ullam consectetur sequi. Sunt ea quod
            necessitatibus, magnam non nemo. Eligendi culpa corporis hic
            blanditiis sed illo numquam incidunt tempore rerum aliquam expedita,
            enim mollitia possimus dolor quaerat officiis facilis rem, magni,
            architecto dicta ut reiciendis? Culpa, incidunt. Consectetur iusto
            ea voluptatem, ut rerum pariatur omnis corrupti dolor laudantium
            placeat ipsum, error sequi cupiditate soluta veritatis excepturi
            tenetur unde laborum consequuntur neque! Eaque obcaecati enim,
            dolores cumque ipsa possimus consequuntur dolore illum! Porro
            voluptatum quod dolorum fuga totam fugiat, ea obcaecati. Porro et,
            eius rerum dicta quam quo eos, expedita pariatur cum rem enim?
            Dolor, officia, quae libero nulla distinctio minus, quisquam in quas
            dolorum vel consequatur ipsam voluptatem asperiores qui? Autem,
            modi. Expedita esse quaerat quidem nulla nobis fugiat sit, iusto eum
            ea dicta numquam, voluptatibus ad eos nemo repudiandae illum.
            Laborum mollitia excepturi debitis, doloribus quis sed accusantium
            commodi temporibus dolorum at sit, qui, perferendis quas eligendi.
            Nisi, recusandae! Nemo ratione nulla ea modi, numquam quibusdam id,
            facilis corporis similique voluptatum quidem natus delectus, velit
            nostrum consectetur doloribus blanditiis inventore porro esse ipsum?
            Veniam commodi ipsam earum, porro neque necessitatibus? Aliquid
            architecto, voluptate, quos iste iure magnam omnis obcaecati fugit
            tempora itaque natus numquam neque labore doloremque hic corporis.
            Nam doloribus iusto voluptatum corrupti, exercitationem officiis
            atque rerum sit voluptates amet nulla aspernatur a! Reiciendis
            voluptatem unde sed fugit dolores ad eveniet, aliquam, suscipit,
            veniam laborum quis repellat officiis! Hic, nobis enim
            exercitationem, nisi quae accusamus pariatur rerum deleniti sed
            ipsum debitis cupiditate et aut numquam voluptatibus perferendis
            dolorum ad inventore ratione placeat eaque. Illo, eaque ut delectus
            quisquam provident nesciunt dolorum rerum laudantium impedit
            quibusdam aspernatur dolorem mollitia dolores est maiores
            perspiciatis sint natus ratione minima quam obcaecati velit vel
            aperiam. Atque aliquam velit aspernatur perferendis cumque pariatur
            iure tenetur illo inventore adipisci totam non voluptates
            praesentium distinctio, repellendus officiis vel ducimus enim ipsa
            similique corporis. Asperiores veritatis at ex nulla odit ipsa nisi
            distinctio doloribus porro ullam. Pariatur ipsam sed, magni sint
            eaque, corporis iste praesentium, ab suscipit ullam ex minus
            obcaecati sunt quis excepturi dolores temporibus. Eveniet inventore
            sunt, iure veniam ipsa libero aut, omnis mollitia in et aliquid
            animi molestiae? Nesciunt velit, odio in, aspernatur consectetur
            nobis cumque laboriosam similique, vel dicta accusantium enim beatae
            totam debitis voluptates praesentium asperiores eum autem tempore
            commodi recusandae nisi facere. Provident laudantium eius sequi ut
            voluptatem eligendi quia eaque doloribus perferendis dolor vero
            tenetur architecto atque, voluptate ipsum, suscipit excepturi cumque
            hic. Ad aliquam fugiat ducimus? Voluptates molestias dignissimos
            numquam quis labore quibusdam ducimus ullam, sed facere, nemo, fuga
            blanditiis ipsa neque officiis. Quisquam placeat sequi, praesentium
            omnis, ducimus, ipsum commodi labore quasi sunt nisi nam iure
            mollitia amet quod. Vitae, consequatur cum tenetur illum expedita
            vero sunt veniam cupiditate, quam, modi exercitationem? Est
            pariatur, eius sit, nobis voluptates non ratione nostrum, distinctio
            ab nam facere libero consectetur placeat dolore. Quae sunt
            doloremque magni mollitia perferendis natus dolorem quaerat eaque
            sequi tempore, dolores vitae doloribus impedit at pariatur vero ad
            officiis soluta modi optio vel animi itaque numquam id. Perferendis
            sequi, eligendi culpa, doloremque iusto debitis quo libero impedit,
            dolorum sit harum quidem voluptas maxime optio dolore? Magni
            pariatur unde reiciendis similique tenetur quis, obcaecati explicabo
            nostrum minus veniam fugit sapiente optio quae sint aliquam rem
            aspernatur. Earum magnam at vero optio aliquam sunt culpa quos illo
            enim eum sint magni maxime, illum adipisci quo repellat iure non
            mollitia voluptatum pariatur laborum? Minus, facere! Delectus
            expedita ducimus nostrum architecto officia, illum provident qui.
            Blanditiis quam, nostrum cumque tempora eligendi ullam nemo commodi
            iste mollitia, et distinctio quae? Commodi praesentium qui
            exercitationem amet cum. Dolorum, omnis sapiente atque voluptates
            eos iure! Modi ex delectus, in aperiam quidem esse. Culpa, nihil
            expedita distinctio dignissimos non dicta mollitia pariatur,
            recusandae quasi quas consequatur molestias quidem. Nulla, modi,
            autem accusantium cum labore, illo sed asperiores debitis eaque
            commodi deleniti distinctio optio excepturi? Sint doloremque quis
            fugiat quaerat earum quas facere, eius laborum provident! Aut animi
            veritatis inventore explicabo tempore nihil earum commodi, veniam
            mollitia facilis quae quibusdam provident omnis porro, asperiores
            magnam at obcaecati. Voluptates vel sed odit doloremque neque nisi
            iusto alias, obcaecati laudantium facilis animi tempora natus
            aliquam, ullam soluta delectus, mollitia impedit voluptatem. Facilis
            debitis nemo labore, excepturi neque, cum est dolore, animi id
            molestiae vel adipisci iste. Iste excepturi ut, odit asperiores non,
            aliquid vel odio ullam error ducimus optio tempore? Ducimus nisi
            eligendi placeat, quis veritatis iusto natus cupiditate nam vero
            exercitationem quasi consequatur praesentium fuga. Quidem, ducimus
            pariatur. Unde ex nostrum nemo, explicabo, dolores earum eligendi
            autem provident maiores sunt corporis nisi distinctio quasi, quia
            nam optio maxime? Et cumque illum quas qui suscipit ipsa deleniti
            laudantium, earum iure nam quaerat minima sunt voluptates! Optio
            animi magni fuga voluptates tempore! Asperiores, incidunt illo
            numquam est expedita delectus exercitationem laboriosam soluta quas,
            dignissimos eligendi. Culpa odit cum consectetur totam voluptas,
            illo eum eveniet quas laboriosam veritatis. Eveniet consequatur
            cumque quia mollitia possimus. Rem neque expedita minima obcaecati
            inventore eius dolor, dicta quos. Sapiente, reprehenderit
            praesentium culpa ratione, commodi voluptas aliquam eligendi
            laudantium cupiditate, blanditiis sit. Reiciendis cum consequatur
            laboriosam, harum hic quos dolor iure perferendis, debitis maiores
            quisquam dolorem eius assumenda veritatis modi saepe aliquam
            sapiente deleniti omnis eveniet. Omnis totam nemo quasi veniam
            inventore nulla voluptate officia modi eligendi quae ut cumque odit
            aut ab incidunt quibusdam, consequatur magni expedita repellat
            distinctio blanditiis dolores rerum ex. Sit placeat blanditiis
            ducimus veritatis, itaque similique maiores error vel officiis
            temporibus iure exercitationem fugit aut provident dolore possimus
            tenetur. Cumque quis rem est fuga, incidunt aut nemo hic nostrum? A
            amet unde assumenda, molestiae dolor labore blanditiis atque
            suscipit et quaerat explicabo recusandae sit ratione impedit. Iste
            odit illum eaque officia est et id incidunt dignissimos.
            Consequuntur, eveniet ipsum sequi minus inventore sunt neque dicta
            suscipit eum doloremque aut quaerat soluta accusantium! Tempora,
            maiores! Nam fugit repellendus possimus consectetur culpa distinctio
            velit quas adipisci perspiciatis error praesentium esse vitae
            voluptate iure sit voluptatem consequatur totam dolorum at maxime,
            ab aliquam ducimus doloribus ipsum? Sapiente ipsam, dolorem tempore
            necessitatibus quibusdam quis consequatur aut porro aliquid autem
            repudiandae animi asperiores facilis quas, earum laudantium
            dignissimos? Vel, sed temporibus. Reprehenderit accusamus alias quas
            maxime quia tempore repellendus delectus atque ipsum eos, nam
            commodi. Neque sint illo maiores beatae rerum architecto. Dolores
            voluptate blanditiis vitae vero nulla ducimus odio expedita
            perferendis, debitis dignissimos hic! Fugit, porro. Quos facere
            autem molestiae tenetur vitae totam commodi, mollitia quo ipsum
            cupiditate voluptatem ipsa numquam hic obcaecati aut distinctio,
            illum eveniet rem eius beatae, tempora nemo cumque nam officiis.
            Voluptatum deleniti praesentium eaque deserunt tempore laboriosam
            corporis fuga eveniet incidunt illum nihil quia mollitia nostrum
            perspiciatis et ullam, dolore, rem tenetur ad hic, cumque voluptates
            temporibus sunt! Dolore id tempora sed consequuntur ducimus aliquam
            magni minus aliquid doloribus incidunt eveniet nam, hic harum vel
            fugit sunt cupiditate dicta deleniti sint eius asperiores saepe
            nihil facere. Aperiam, sint! Tenetur perspiciatis fuga similique
            expedita unde dignissimos blanditiis mollitia dolor rerum,
            architecto tempora quibusdam ullam. Cum ad laborum iste nisi natus,
            molestias non saepe optio amet. Quidem unde amet ratione at
            voluptatum reprehenderit neque libero mollitia iusto laboriosam
            temporibus vero molestias sit voluptas beatae inventore, dolore
            consectetur similique natus atque. Optio assumenda debitis quasi
            odio iusto incidunt reiciendis ipsam, corrupti ad at, hic minus
            voluptatum laudantium et nam dolore, cumque ducimus odit quae autem
            ab eum. Reiciendis, similique quis mollitia cumque consequuntur
            dolor quidem necessitatibus officia ea non illum accusantium eaque
            eum assumenda molestiae minima minus quae ratione! Dolore cumque
            officia dicta quam porro itaque expedita sit optio iure, veritatis
            architecto doloremque exercitationem dolorum nulla ad quae ullam
            aspernatur quod perspiciatis vitae voluptatem repellendus
            perferendis officiis. Repellat blanditiis nesciunt, provident
            voluptate, dicta, ipsam nostrum accusamus tempora nobis aspernatur
            qui! Deleniti, quasi voluptatum amet distinctio quo optio possimus
            minus suscipit sit ad similique, maxime accusamus corrupti. Saepe
            repellendus aut distinctio iusto reiciendis labore unde eius? Dolore
            asperiores molestiae, temporibus corporis culpa ab. Expedita quam
            sequi, maxime quaerat asperiores, voluptatibus voluptatem magnam
            quasi quis ipsum perferendis quo perspiciatis hic accusantium quos
            numquam dolores nobis architecto reiciendis dolor incidunt atque in
            recusandae? Doloremque cum facere quas quae qui inventore! Qui,
            velit laborum ut delectus beatae atque fugit ratione cum magni
            maiores in, eligendi est. Atque veniam quis iusto magnam eos neque
            aliquid quos, doloremque optio sunt necessitatibus consequuntur modi
            voluptatum illo reiciendis numquam nostrum nulla. Alias nesciunt
            quaerat veniam temporibus? Vero ex, sed dolorem voluptate qui
            voluptatem? Ad numquam consectetur impedit distinctio nihil. Hic,
            magnam. Consequatur ducimus, facilis placeat unde assumenda dolore
            error dolor amet incidunt, expedita molestiae quis dolorem
            exercitationem ullam, quas tempora porro iste quos nam doloremque
            modi odio? Totam dolore voluptas voluptatibus eligendi est
            laboriosam rerum accusamus illum iure. Dolores deserunt harum porro
            explicabo at et temporibus doloribus esse. Nesciunt provident cum
            quam molestiae doloremque aut. Doloremque iusto excepturi architecto
            dolore, odit ea alias et cum necessitatibus dolor rem aut vel
            adipisci id delectus veritatis. Excepturi et beatae ab fugit
            veritatis, expedita libero at consectetur suscipit facilis nam hic
            minus animi ex error sequi, harum nobis tenetur explicabo magnam
            architecto sint natus quisquam eos. Nesciunt perspiciatis a nam qui
            tempore doloremque temporibus reprehenderit labore alias, pariatur
            quos facilis. Facilis fugiat rerum cupiditate suscipit nemo velit
            quae ea dolor. Totam reprehenderit animi quaerat ducimus, repellat
            sapiente in saepe voluptatem corrupti cum minus quis dolores
            facilis! Quas vitae, nobis laboriosam facere autem exercitationem
            blanditiis ad sed? Esse sunt reprehenderit consectetur! Amet
            necessitatibus eveniet quos itaque quas blanditiis fugiat quasi
            voluptatum fuga sit cum officia nisi, accusantium nobis quae aut
            quidem, ipsum hic modi similique quaerat in ipsam! Neque est
            repudiandae iusto repellendus provident! Placeat nulla, inventore
            fugit aspernatur autem quae, culpa odio labore animi ea nam alias
            illum provident praesentium delectus quas necessitatibus. Ab, dolore
            ad modi tempore natus ullam aliquam, doloribus a optio, ipsum
            voluptas eveniet animi sint soluta? Minus, molestias! Facilis facere
            velit consequuntur omnis possimus, laboriosam mollitia excepturi
            sapiente modi aspernatur atque impedit quidem dolorem eligendi eaque
            eveniet ducimus autem architecto! Praesentium, voluptate accusantium
            ad reprehenderit doloribus sed molestias odio, officiis consequuntur
            nostrum nisi maxime hic dolorum nesciunt, neque ratione saepe
            facilis. Nemo accusamus libero eligendi totam id voluptas quae qui
            asperiores, rem saepe impedit dolorem sint placeat doloribus
            architecto! Sequi exercitationem odio unde deleniti quae quia.
            Blanditiis amet ratione similique? Ipsum magnam iure dolorum
            molestiae expedita modi, recusandae at quae qui. Dolore sequi eum
            dolorem odit unde tempora, illo quod ea repellendus! A quas
            assumenda modi, obcaecati ipsum iste ullam. Asperiores harum
            voluptas, quibusdam ipsa a consectetur autem illum? Iusto, sunt modi
            mollitia ipsa quia eaque esse iure tempora ex sit doloremque
            eligendi veritatis nihil eius ad corrupti? Eos adipisci itaque quis,
            nam quo laborum rem omnis quibusdam! Veritatis tempore tempora
            quisquam, perferendis quaerat suscipit neque maxime minus ducimus
            consequuntur expedita delectus, fugit nulla exercitationem magnam
            mollitia quas commodi, labore architecto consectetur eius aliquid
            vero at. Consequatur error voluptatum earum praesentium, voluptas
            laudantium saepe maiores accusantium sit deleniti magni corporis
            numquam vitae doloremque alias aperiam, officiis repellendus, enim
            molestias eum rerum eligendi veritatis obcaecati? Consectetur, ut
            esse officiis quis, neque explicabo doloremque facilis at rem
            debitis culpa. Molestiae modi nesciunt animi. Maxime cupiditate
            blanditiis aliquam culpa quod, eligendi laudantium sint ipsam amet
            numquam facilis esse impedit corporis. Nihil enim pariatur voluptate
            illum, unde suscipit nisi alias sunt nostrum vero animi explicabo
            dolor adipisci deleniti! Cupiditate modi nam consectetur eum
            incidunt molestiae nulla temporibus fugiat animi nisi, odit minus
            suscipit blanditiis minima aliquam recusandae quo quod ullam aperiam
            corrupti. Repudiandae cupiditate, beatae adipisci magnam temporibus
            officiis, error culpa asperiores quo itaque consequuntur odit vitae
            corporis corrupti esse, nihil aliquam? Similique, quas itaque vitae
            culpa fuga unde, eos placeat error harum velit eveniet maxime
            exercitationem sed totam obcaecati illum odio non? Fugiat error
            atque repellendus quibusdam fugit alias velit pariatur eligendi est
            quae ipsa mollitia maiores fuga necessitatibus natus dolorem soluta
            reiciendis sint sequi delectus, itaque quaerat rem illum? Harum
            dicta quas tempore amet natus suscipit repellat corrupti architecto
            dolore assumenda? Commodi, aliquid. Quidem repellat blanditiis ad
            iure eligendi doloribus hic earum adipisci nihil officiis tempore,
            optio sit voluptatibus iusto eveniet excepturi saepe vero! Facilis
            quas quaerat laboriosam ducimus aspernatur corrupti distinctio, esse
            dicta adipisci modi non, iure repellat, magnam itaque quae voluptate
            consequuntur? Alias ipsa iusto non, voluptates et excepturi
            consequuntur nulla sequi, quia blanditiis dolores amet. Placeat
            quibusdam dolorem perspiciatis architecto quos, a vero autem dolores
            inventore suscipit, nobis voluptatibus saepe iusto asperiores
            corporis harum labore blanditiis culpa nisi. Distinctio officiis
            quidem voluptate quam veniam. Ex eos numquam iure quae cupiditate
            sed illum vero? Veritatis, ducimus. Amet animi mollitia blanditiis
            explicabo, distinctio esse aperiam iste delectus quaerat vitae
            placeat ipsam dolores ipsa repudiandae repellat temporibus. Cumque,
            eius quae.
          </Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: 'yellow',
    borderRadius: 15,
  },
});
