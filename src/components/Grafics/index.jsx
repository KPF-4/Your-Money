import { useContext } from "react"
import { GraficsContext } from "../../providers/grafics"
import { StyleGrafics } from "./style";
import { 
    Chart as ChartJS, 
    ArcElement,
    Tooltip, 
    Legend, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    } from 'chart.js';
import { Doughnut, Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
)

export const Grafics = ()=>{
    const token = localStorage.getItem("@YOURMONEY-TOKEN");
    const {setPlayDashboard, data} = useContext(GraficsContext);
    const [inputMonth, setInputMonth] = useState("Todos");
    const [inputGraficos, setInputGraficos] = useState("Gastos e ganhos");
    const monthExt = {1: "Janeiro", 2:"Fevereiro", 3:"Março", 4:"Abril", 5:"Maio", 6:"Junho", 7:"Julho", 8:"Agosto", 9:"Setembro", 10:"Outubro", 11:"Novembro", 12:"Dezembro"};

    if(data.length < 1 && token){
        setPlayDashboard(true)
    }
    
    const colors = ["rgba(0, 128, 0, 1)", "rgba(255, 0, 0, 1)", "rgba(52, 144, 220, 1)", "rgba(250, 253, 15, 1)", "rgba(255, 134, 158,1)", "rgba(255, 120, 0, 1)"]
    const expenses = data.filter((item)=>(inputMonth !=="Todos" ? parseInt(new Date(item.data).getMonth()+1) === parseInt(inputMonth): true) && item.tipo === "Gasto")
    const incomes = data.filter((item)=>(inputMonth !=="Todos" ? parseInt(new Date(item.data).getMonth()+1) === parseInt(inputMonth): true) && item.tipo === "Ganho")
    const expAndInc = data.filter((item)=>(inputMonth !=="Todos" ? parseInt(new Date(item.data).getMonth()+1) === parseInt(inputMonth): true))
    
    const valueExpenses = data.filter((el)=> el.tipo === "Gasto")
    const valueIncomes = data.filter((el)=> el.tipo === "Ganho")
    
    const catExpenses = expenses.map((item)=>item.categoria )
    const catIncomes = incomes.map((item)=>item.categoria)
    const tipes = expAndInc.map((item)=> item.tipo)
    const months = data.map((item)=> new Date(item.data).getMonth()+1)
    
    const filterCatExpenses = catExpenses.filter((cat, i)=> catExpenses.indexOf(cat) === i)
    const filterCatIncomes = catIncomes.filter((cat, i)=> catIncomes.indexOf(cat) === i)
    const filterTipes = tipes.filter((tipe, i)=> tipes.indexOf(tipe) === i)
    const filterMonths = months.filter((item, i)=> months.indexOf(item) === i)
    const monthsString = filterMonths.map((item)=> monthExt[item])
    
    const colorsCatExpenses  = filterCatExpenses.map((el, i)=> colors[i])
    const colorsCatIncomes  = filterCatIncomes.map((el, i)=> colors[i])
    const colorsTipes = filterTipes.map((el, i)=> colors[i])
    
    const valueExpensesCat = filterCatExpenses.map((item)=>
    expenses.map((el) => el.categoria === item? parseFloat(el.valor): 0)
    .reduce((c, t) => c+t,0)
    )

    const valueIncomesCat = filterCatIncomes.map((item)=>
    incomes.map((el) => el.categoria === item? parseFloat(el.valor): 0)
    .reduce((c, t) => c+t,0)
    )

    const valueTipes = filterTipes.map((item)=>
    expAndInc.map((el) => el.tipo === item? parseFloat(el.valor): 0)
    .reduce((c, t) => c+t,0)
    )

    const valueExpensesLine = filterMonths.map((item)=>
        valueExpenses.map((el)=> 
            parseInt(new Date(el.data).getMonth()+1) === parseInt(item)? parseFloat(el.valor):0
        ).reduce((c, t)=> c+t,0)
    )

    const valueIncomesLine = filterMonths.map((item)=>
        valueIncomes.map((el)=> 
            parseInt(new Date(el.data).getMonth()+1) === parseInt(item)? parseFloat(el.valor):0
        ).reduce((c, t)=> c+t,0)
    )
    
    const dataExpenses = {
        labels: filterCatExpenses,
        datasets:[{
            label: "# valor",
            data: valueExpensesCat,
            backgroundColor: colorsCatExpenses,
        }],
        options:{
            responsive: true
        }
    }
    const dataIncomes = {
        labels: filterCatIncomes,
        datasets:[
            {
            label: "# valor",
            data: valueIncomesCat,
            backgroundColor: colorsCatIncomes,
        }
        ],
        options:{
            responsive: true
        }
    }
    const dataTipes = {
        labels: filterTipes,
        datasets:[
            {
            label: "# valor",
            data: valueTipes,
            backgroundColor: colorsTipes,
        }
        ],
        options:{
            responsive: true
        }
    }
    const optionsLine = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
    };
    const dataLine = {
        labels: monthsString,
        datasets: [
            {
                label: "Gastos",
                data: valueExpensesLine,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Ganhos',
                data: valueIncomesLine,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
    ],
    }
    const filtro = () =>{
        return(
            <div className="filtros">
                <span>Filtrar Mês Desejado</span>
                <select onChange={(event)=>{setInputMonth(event.target.value)}}>
                    <option value="Todos">Todos</option>
                    {filterMonths.map((item, index)=> 
                    <option key={index} value={item}>{monthExt[item]}</option>
                    )}
                </select>
            </div>
        )
    }

    const graficos = ()=>{
        if(inputGraficos === "Gastos e ganhos"){
            return (
                <>
                    <div className="filtros">    
                        {filtro()}
                        <span className="grafic-name">{inputGraficos}</span>
                    </div>
                    <div className="container-grafic">
                        <div className="grafic">
                            <Doughnut data={dataTipes}/>
                        </div>
                    </div>
                </>
            )
        } else if (inputGraficos === "Evolução financeira"){
            return (
                <>  
                    <div className="filtros">
                        <span className="grafic-name">{inputGraficos}</span>
                    </div>
                    <div className="container-grafic">
                        <div className="grafic-evolucao">
                            <Line options={optionsLine} data={dataLine}/>
                        </div>
                    </div>
                </>
            )
        } else if (inputGraficos === "Gastos por categoria"){
            return (
                <>
                    <div className="filtros">    
                        {filtro()}
                        <span className="grafic-name">{inputGraficos}</span>
                    </div>
                    <div className="container-grafic">
                        <div className="grafic">
                            <Doughnut data={dataExpenses}/>
                        </div>
                    </div>
                </>
            )
        } else if (inputGraficos === "Ganhos por categoria"){
            return (
                <>
                    <div className="filtros">    
                        {filtro()}
                        <span className="grafic-name">{inputGraficos}</span>
                    </div>
                    <div className="container-grafic">
                        <div className="grafic">
                            <Doughnut data={dataIncomes}/>
                        </div>
                    </div>
                </>
            )
        }
    }
    

    return (
        <StyleGrafics>
            <h2>Gráficos Financeiros</h2>
            <section className="container-Grafics">
                <div className="filtros">
                    <span>Gráficos</span>
                    <select onChange={(event)=>{setInputGraficos(event.target.value)}}>
                        <option value="Gastos e ganhos">Gráfico de gastos e ganhos</option>
                        <option value="Evolução financeira">Gráfico de evolução financeira</option>
                        <option value="Gastos por categoria">Gráfico de gastos por categoria</option>
                        <option value="Ganhos por categoria">Gráfico de ganhos por categoria</option>
                    </select>
                </div>
                {graficos()}
            </section>
        </StyleGrafics>
    )
}
    