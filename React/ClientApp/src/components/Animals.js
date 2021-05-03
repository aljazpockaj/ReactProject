import React, { Component } from 'react';

export class Animals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            currentPage: [],
            dataValue: []
        };
        this.selectPage = this.selectPage.bind(this);
       }

    componentDidMount() {
        fetch("https://localhost:44352/weatherforecast/narocnik")
            .then(res => res.json()) 
            .then(
                (result) => {
                    this.setState({
                        animals: result,
                        currentPage: result
                    });
                },
                (error) => {
                }
            )
    }

   
     selectPage(e) {
         e.preventDefault();
         var animalsPage;
         const key = e.target
         var page = key.dataset.page
         const liClassPrevious = document.querySelector('.previous');
         const liClassNext = document.querySelector('.next');
         if (page == '1') {
             liClassPrevious.classList.add('disabled')
         }
         else {
             liClassPrevious.classList.remove('disabled')
         }

         if (page == '10') {
             liClassNext.classList.add('disabled')
         }
         else {
             liClassNext.classList.remove('disabled')
         }
         this.setState({ dataValue: page })
         const next = key.dataset.next
         console.log(next)
         console.log(page)
 
         if (next == '0') {
             var curDataValue = this.state.dataValue;

             curDataValue = curDataValue - 1;
             this.setState({ dataValue: curDataValue })
             
             animalsPage = this.state.animals.slice((curDataValue - 1) * 10, (parseInt(curDataValue) * 10))
             this.setState({ currentPage: animalsPage })
             if (this.state.dataValue == '2') {
                 liClassPrevious.classList.add('disabled')
             }
             else {
                 liClassPrevious.classList.remove('disabled')
             }
                }
             else if (next == '11') {
             var curDataValue = this.state.dataValue;
             curDataValue = parseInt(curDataValue) + 1;
             this.setState({ dataValue: curDataValue })

             if (this.state.dataValue == '9') {
                 liClassNext.classList.add('disabled')
             }
             else {
                 liClassNext.classList.remove('disabled')
             }


             animalsPage = this.state.animals.slice((curDataValue - 1) * 10, (parseInt(curDataValue) * 10))
             this.setState({ currentPage: animalsPage })
         }
         else {
             animalsPage = this.state.animals.slice((page - 1) * 10, (parseInt(page) * 10))
             this.setState({ currentPage: animalsPage })
         }
         }

    render() { 

        const pageSize = 10;
        const animalsCount = 100;
        const pageNumber = animalsCount / pageSize;
        const pagesContent = [];
        
        for (var i = 0;i < pageNumber; i++)
        {
            pagesContent.push(<a href="#" data-page={i+1} onClick={this.selectPage}>{i + 1}</a>);
        }
             
        const psi = this.state.animals.filter(animal => { return animal.pasma != null && animal.pasma.length > 0 });
    
        const macke = this.state.animals.filter(animal => animal.pasma === undefined);

        const psicki = this.state.animals.filter(animal => { return animal.vrsta === "pes"});

        const mackice = this.state.animals.filter(animal => animal.vrsta === "macka");

        const curPage = this.state.currentPage;
        return (
            <div>
                <h1>Animals</h1>
                <table>
                    <thead>
                        <h3>Psi</h3>
                        <tr>
                            <th>Ime</th>
                            <th>Starost</th>
                            <th>Velikost</th>
                         </tr>
                    </thead>
                    <tbody>

                        {curPage.map((animal) => {
                            return <tr key={Math.floor(Math.random() * 1000000)}>
                                <td>{animal.ime}</td>
                                <center> <td>{animal.starost}</td> </center>
                                <td>{animal.velikost}</td>
                                </tr>
                        })}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <h3>Mucice</h3>
                        <tr>
                            <th>Ime</th>
                            <th>Starost</th>
                            <th>Velikost</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {curPage.map((animal) => {
                            return <tr key={Math.floor(Math.random() * 1000000)}>
                                <td>{animal.ime}</td>
                                <center> <td>{animal.starost}</td></center>
                                <td>{animal.velikost}</td>                              
                              
                            </tr>
                        })}
                    </tbody>
                </table>
                <br></br>
                <h1><center>{pagesContent}</center></h1>
          
                <div class="container d-flex justify-content-center">
                    <ul class="pagination pagination-lg">
                        <li class="previous page-item "><a class="page-link" href="#" data-next={0} onClick={this.selectPage}>Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={1} onClick={this.selectPage}>1</a></li>
                        <li class="page-item "><a class="page-link" href="#" data-page={2} onClick={this.selectPage}>2</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={3} onClick={this.selectPage}>3</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={4} onClick={this.selectPage}>4</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={5} onClick={this.selectPage}>5</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={6} onClick={this.selectPage}>6</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={7} onClick={this.selectPage}>7</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={8} onClick={this.selectPage}>8</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={9} onClick={this.selectPage}>9</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-page={10} onClick={this.selectPage}>10</a></li>
                        <li class="next page-item"><a class="page-link" href="#" data-next={11} onClick={this.selectPage}>Next</a></li>
                    </ul>
                    </div>
                </div>
        );
    }
}