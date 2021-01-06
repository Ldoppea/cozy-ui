import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withLocales from '../I18n/withLocales'

import ViewerWrapper from './ViewerWrapper'
import ViewerControls from './ViewerControls'
import ImageViewer from './ImageViewer'
import AudioViewer from './AudioViewer'
import VideoViewer from './VideoViewer'
import PdfJsViewer from './PdfJsViewer'
import TextViewer from './TextViewer'
import NoViewer from './NoViewer'
import ShortcutViewer from './ShortcutViewer'

import en from './locales/en.json'
import fr from './locales/fr.json'
import { FileDoctype } from '../proptypes'

export const locales = {
  en,
  fr
}

const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39
const KEY_CODE_ESCAPE = 27

import { isMobileApp, isMobile } from 'cozy-device-helper'

export const isPlainText = (mimeType = '', fileName = '') => {
  return mimeType ? /^text\//.test(mimeType) : /\.(txt|md)$/.test(fileName)
}

export const getViewerComponentName = file => {
  switch (file.class) {
    case 'shortcut':
      return ShortcutViewer
    case 'image':
      return ImageViewer
    case 'audio':
      return AudioViewer
    case 'video':
      return isMobile() ? NoViewer : VideoViewer
    case 'pdf':
      return PdfJsViewer
    case 'text':
      return isPlainText(file.mime, file.name) ? TextViewer : NoViewer
    default:
      return NoViewer
  }
}

export class Viewer extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp, false)
  }

  onKeyUp = e => {
    if (e.keyCode === KEY_CODE_LEFT) this.onPrevious()
    else if (e.keyCode === KEY_CODE_RIGHT) this.onNext()
    else if (e.keyCode === KEY_CODE_ESCAPE) this.onClose()
  }

  onNext = () => {
    const { files, currentIndex } = this.props
    if (currentIndex === files.length - 1) {
      return
    }
    const nextIndex = currentIndex + 1
    const nextFile = files[nextIndex]
    this.onChange(nextFile, nextIndex)
  }

  onPrevious = () => {
    const { files, currentIndex } = this.props
    if (currentIndex === 0) {
      return
    }
    const prevIndex = currentIndex - 1
    const prevFile = files[prevIndex]
    this.onChange(prevFile, prevIndex)
  }

  onClose = () => {
    if (this.props.onCloseRequest) {
      this.props.onCloseRequest()
    }
  }

  onChange(nextFile, nextIndex) {
    if (this.props.onChangeRequest) {
      this.props.onChangeRequest(nextFile, nextIndex)
    }
  }

  renderViewer(file) {
    if (!file) return null
    const { renderFallbackExtraContent } = this.props
    const ComponentName = getViewerComponentName(file)
    return (
      <ComponentName
        file={file}
        onClose={this.onClose}
        renderFallbackExtraContent={renderFallbackExtraContent}
      />
    )
  }

  render() {
    const {
      files,
      className,
      currentIndex,
      dark,
      showToolbar,
      showNavigation
    } = this.props
    const currentFile = files[currentIndex]
    const fileCount = files.length
    const hasPrevious = currentIndex > 0
    const hasNext = currentIndex < fileCount - 1
    // this `expanded` property makes the next/previous controls cover the displayed image
    const expanded = currentFile && currentFile.class === 'image'
    return (
      <ViewerWrapper className={className} dark={dark}>
        <ViewerControls
          currentFile={currentFile}
          onClose={this.onClose}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onPrevious={this.onPrevious}
          onNext={this.onNext}
          isMobile={isMobile()}
          expanded={expanded}
          showToolbar={showToolbar}
          showNavigation={showNavigation}
          isMobileApp={isMobileApp()}
        >
          {this.renderViewer(currentFile)}
        </ViewerControls>
      </ViewerWrapper>
    )
  }
}

Viewer.propTypes = {
  /** One or more `io;cozy.files` to display */
  files: PropTypes.arrayOf(FileDoctype).isRequired,
  /** Index of the file to show */
  currentIndex: PropTypes.number,
  className: PropTypes.string,
  /** Called when the user wants to leave the Viewer */
  onCloseRequest: PropTypes.func,
  /** Called with (nextFile, nextIndex) when the user requests to navigate to another file */
  onChangeRequest: PropTypes.func,
  /** Switch between light and dark mode */
  dark: PropTypes.bool,
  /** Whether to show the toolbar or not. Note that the built-in close button is in the toolbar. */
  showToolbar: PropTypes.bool,
  /** Weather to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,
  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func
}

Viewer.defaultProps = {
  currentIndex: 0,
  dark: true,
  showToolbar: true,
  showNavigation: true
}

export default withLocales(locales)(Viewer)
