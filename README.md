Projeto IMHERE

**Iniciando com React Native**

# Modulo 1#
 - Introdução
 - O Projeto
 - O que é React Native
 - Quem usa React Native
 - O que é Expo
 - Quiz-Iniciando com React Native

# Modulo 2#
 - Preparando seu Ambiente de Ambiente
 - RocketSet Docs | Ambiente React Native
 - Expo com NPX
 - Criando novo Projeto
 - Estrutura de pastas e arquivos
 - Executando o Projeto
 - Funcionamento do React Native
 - Refresh e Reload
 - Entendendo o JSX
 - Entendendo a LogBox
 - Estilizando Elementos
 - Entendendo densidade de pixel
 - Ultilizando StyleSheet
 - Organizando o projeto
 - Export e Export Default
 - Input de dados
 - Botão de Adicionar
 - Criando o Form
 - Entendendo componentização
    **Peças que podem ser reaproveitadas**
    **Peçãs especificas**

   *Quebra cabeça é diferente de um Lego!*

"Tem uma coisa em comum, os dois possuem peças, porém possuim uma diferença.
A peça do quebra a cabeça é planejada para ocupar uma posição especifica para formar a imagem, O Lego possui peças especificas e
peças que podem ser reaproveitadas."

"Quando falamos  de componenetização estamos falando  de peças que podem ser reaproveitadas em toda nossa interface."

"O desenvolvimento baseado em componentes, permite criar partes/peças diminuindo a complexidade e permitindo que cada componente
seja focado em apenas uma funcionalidade ou um conjunto de funcionalidades."

#Benefícios de compoenentização#
    -Reutilização de código
    -Produtividade
    -Isolament de contexto
    -Legitibilidade do código
    -Redução da Complexibilidade
    -Arquivos Menores e
    -Padronização do Projeto.

      
 - Criando Componente de Participant
 - Entendendo o TypeScript
 - Utilizando Propriedades no Componente
 - Função Remover
 - Ativando Rolagem na tela
 - Lista de Participantes
 - Entendendo ScrollView e FlatList
      **ScrowView**

      "Renderiza todos os elementos da listagem e perde perfonmance."

      *ScrowView renderiza todos os seus componentes filhos de reação de uma só vez, mas isso tem uma desvantagem de desempenho."

       <ScrollView 
         showsVerticalScrollIndicator={false}>
              {
                participants.map(participant=>(
                  <Participant 
                    name={participant}
                    key={participant} 
                    onRemove={()=>handleParticipantRemove(participant)}
                    />
                ))
              }
        </ScrollView> 
   

      **FlatList**

      "Carrega lista, porem apenas os elementos que estão na visão da tela, ganho de performance e possui uma margin para o proximo elemento."
      *FlatList renderiza itens lentamente, quando eles estão prestes a aparecer, e remove itens que rolam para fora da tela para economizar memória e tempo de processamento.*
 
          <FlatList
           data={participants}
           keyExtractor={item => item}
           showsVerticalScrollIndicator={false}
           renderItem={({item})=>(
                <Participant 
                    name={item}
                    key={item} 
                     onRemove={()=>handleParticipantRemove(item)}
          />
          )}
          ListEmptyComponent={()=>(
             <Text style={styles.listEmptyText}>
               Niguém chegou no evento ainda? Adicione participantes a sua lista de presença!
             </Text>
            
          )}
      />
   
-Estilizando a StatusBar
-Exibindo Alertas

Alert.alert(
            "Participante existe!", 
            "Já existe um participante na lista com esse nome."
          )

   Alert.alert(
      "Remover",
      `Remover o participante ${name}?`,
       [{text:"Sim", onPress: () => { Alert.alert("Deletado!")}},{text:"Não",style:"cancel"}] 
      );
-Quiz
   
   
