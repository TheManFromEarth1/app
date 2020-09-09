import React from 'react'
import t from '~t'

import { Label } from '~co/common/form'
import TagsField from '~co/tags/field'
import Suggested from './suggested'

class BookmarkEditFormTags extends React.Component {
    onChange = (tags)=>{
        this.props.onChange({ tags })
    }

    render() {
        const { autoFocus, item: { tags, collectionId }, onCommit } = this.props

        return (
            <>
                <Label>{t.s('tags')}</Label>
                <div>
                    <TagsField 
                        value={tags}
                        spaceId={collectionId}
                        
                        autoFocus={autoFocus=='tags'}
                        onChange={this.onChange}
                        onBlur={onCommit} />

                    <Suggested {...this.props} />
                </div>
            </>
        )
    }
}

export default BookmarkEditFormTags