import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import LinkButton from '../../components/button/LinkButton';
import PublicationMenuData from '../../data/publication/publicationMenu.json';
import PublicationItemData from '../../data/publication/publicationItems.json';

class PublicationTable extends Component {
    constructor( props ) {
        super( props );
        this.onFilterChange = this.onFilterChange.bind( this );

        this.state = {
            selected: 0,
            list: [...PublicationMenuData]
        };
    }

    handleClick( i, e ) {
        e.preventDefault();

        this.setState( {
            selected: i
        } );

        return false
    }

    onFilterChange = ( newFilter ) => {
        const publicationTable_items_name = this.grid;
        const publicationTable_item_name  = '.publicationTable-item';

        if ( this.iso === undefined ) {
            this.iso = new Isotope( publicationTable_items_name, {
                itemSelector: publicationTable_item_name,
                masonry: {
                    horizontalOrder: true
                }
            } );
        }

        if ( newFilter === '*' ) {
            this.iso.arrange( { filter: `*` } );

        } else {
            this.iso.arrange( { filter: `.${ newFilter }` } );
        }
    };

    componentDidMount() {
    }

    render() {
        const listCount = this.state.list.length - 1;

        return (
            <div className="publicationTable spacer p-bottom-lg">
                <div className="wrapper">
                    <h4>Selected Publications</h4>
                    <ul className="publicationTable-filter">
                        { this.state.list.map( ( item, key ) => (
                            <React.Fragment key={ key }>
                                <li>
                                    <span title={ item.title }
                                       className={ "btn btn-link transform-scale-h click" + ( key === this.state.selected ? ' active' : '' ) }
                                       data-filter={ item.filter }
                                       onClick={ ( event ) => {
                                           this.onFilterChange( item.filter );
                                           this.handleClick( key, event )
                                       } }>
                                        {item.title}
                                    </span>
                                </li>

                                { key !== listCount ?
                                    <li>
                                        <span className="btn btn-link">-</span>
                                    </li>
                                    : ""
                                }
                            </React.Fragment>
                        ) ) }
                    </ul>
                <div className={"publicationTable-item-wrapper"} >
                    <div className="publicationTable-items" ref={ ( c ) => this.grid = c }>
                        { PublicationItemData && PublicationItemData.map( ( item, key ) => {
                            if (item.material === ""){
                                return (
                                    <div key={ key } title={ item.title } className={ "publicationTable-item active " + item.category }>
                                        <h6>{ item.title }</h6>
                                        <p className='no-line-hight'>{ item.Authors }</p>
                                        <p className="date">{ item.bookTitle }</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={ key } title={ item.title } className={ "publicationTable-item active " + item.category }>
                                        <h6>{ item.title }</h6>
                                        <p className='no-line-hight'>{ item.Authors }</p>
                                        <p className="date">{ item.bookTitle }</p>
                                        {Object.keys(item.material).map((key_name, index) => {
                                            if (index === 0){
                                                return(
                                                    <LinkButton 
                                                        keyword = {key_name} 
                                                        link={item.material[key_name]}
                                                        position = ""
                                                        textcolor = "has-white-color"
                                                        backgroundcolor = "has-gray-dark-background-color"
                                                    />
                                                );
                                            } else {
                                                return(
                                                    <LinkButton 
                                                        keyword = {key_name} 
                                                        link={item.material[key_name]}
                                                        position = "inline"
                                                        textcolor = "has-white-color"
                                                        backgroundcolor = "has-gray-dark-background-color"
                                                    />
                                                );
                                            }
                                        })
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <h6 className='margin'>More Publication @ <a className='active-color' href='https://scholar.google.com/citations?user=MCkggcgAAAAJ&hl=en'> Google Scholar</a> Page</h6>
                </div>
                </div>
            </div>
        );
    }
}

export default PublicationTable;
