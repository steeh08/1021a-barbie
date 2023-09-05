import Filme from './../filme/Filme'
import './Main.css'
export default function Main(){
    return(
        <>
        <div className='campo-pesquisa'>
            <input type="text" className='botao-pesquisa' placeholder='Pesquise um Filme:'/>
            <p>Digitado:</p>
        </div>
       
        <main className="content-main">
            <Filme titulo='Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca 
            de aparência menos do que perfeita, Barbie parte 
            para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'/>
            <Filme titulo='A Bela Adormecida'
            sinopse='Ciumenta e vingativa a fada Malévola lança um feitiço 
            cruel sobre a princesa Aurora no dia do seu nascimento. Aurora 
            está condenada a cair em um sono profundo quando completar 16 
            anos de idade e, para despertar novamente, sua única salvação 
            seria um beijo de seu verdadeiro amor. As três fadas bondosas, 
            Flora, Fauna e Primavera tentam evitar a profecia do mal, mas 
            não conseguem. Agora só resta ao príncipe Felipe enfrentar 
            Malévola e salvar a princesa.'
            imagem='/Abelaadormecida.webp'/>
            <Filme titulo='Ken'
            sinopse='Lançado em 1961 pela Mattel, o boneco Ken era o resumo do 
            garoto americano da casa ao lado. Bem cuidado,atlético e com um 
            corte de cabelo alinhado, ele era a contraparte perfeita de 
            sua namorada mais famosa, Barbie.'
            imagem='/KEN.webp'/>
            <Filme titulo='Frozen'
            sinopse='Acompanhada por um vendedor de gelo, a jovem e destemida
            princesa Anna parte em uma jornada por perigosas montanhas de gelo
            na esperança de encontrar sua irmã, a rainha Elsa,e acabar com a 
            terrível maldição de inverno eterno, que está provocando o congelamento
             do reino.'
            imagem='/frozen.jpg'/>
            <Filme titulo='Filme Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca 
            de aparência menos do que perfeita, Barbie parte 
            para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'/>
            <Filme titulo='Filme Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca 
            de aparência menos do que perfeita, Barbie parte 
            para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'/>
            <Filme titulo='Filme Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca 
            de aparência menos do que perfeita, Barbie parte 
            para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'/>
            <Filme titulo='Filme Barbie'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca 
            de aparência menos do que perfeita, Barbie parte 
            para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.png'/>
        </main>
        </>
    )
}