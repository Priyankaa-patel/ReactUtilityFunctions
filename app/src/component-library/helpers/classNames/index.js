export const classNames = ({ blk = '', elt = '', mods = [''] }) => {

    let subClass = '';

    if (blk !== '') {
        subClass = `${blk}`

        if (elt !== '') {
            subClass += ` ${blk}__${elt}`
        }

        if (mods.length > 0) {
            mods.map((item) => {

                if (item !== '')
                    subClass += ` ${blk}__${elt}--${item}`
            })
        }
        return subClass;
    }

}



