import '../../App.css'

import React from 'react'

class PostPreview extends React.Component {
    render() {
        return (
            <div className='post-preview'>
                {this.props.authorTitle}
            </div>
        )
    }
}

export default PostPreview;