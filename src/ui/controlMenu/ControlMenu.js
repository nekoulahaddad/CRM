import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import Drawer from 'rc-drawer'
import PropTypes from 'prop-types'
import cn from 'classnames'
import useWindowSize from 'hooks/useWindowSize'
import { Icon, Text, Modal, Button, ButtonGroup } from 'components/ui'
import styles from './control-menu.module.sass'

const ControlMenu = ({
	children,
	placement,
	width,
	isOpen,
	handler,
	level,
	onClose,
	title,
	observerChanges,
	hasChanges,
	alertMessage,
	onSaveData,
	isCanClose,
	customHeader,
	closeIcon,
	closePlacement
}) => {
	const { t } = useTranslation(['common'])
	const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)
	const [drawerWidth, setDrawerWidth] = useState(width)
	const { width: currentWidth, deviceWidth } = useWindowSize()
	const location = useLocation()
	const mainRouterPage = location.pathname.split('/')[1]

	useEffect(() => {
		if (!width) {
			if (currentWidth <= 1200) {
				setDrawerWidth(`${currentWidth}px`)
			} else {
				setDrawerWidth('1000px')
			}
		}
	}, [width, currentWidth])

	const closeMenu = () => {
		if (observerChanges) {
			hasChanges ? checkCanClose() : onClose()
		} else {
			onClose()
		}
	}

	const checkCanClose = async () => {
		const response = await isCanClose()
		response && setIsOpenConfirmModal(true)
	}

	const saveData = async () => {
		setIsOpenConfirmModal(false)
		await onSaveData()
		onClose()
	}

	const HeaderDefault = () => {
		return (
			<div className={styles['header-content']}>
				<div className={styles['header-content__icon']}>
					<Icon
						name={mainRouterPage}
						size={deviceWidth === 'large' ? 'xl' : 'sm'}
						color='white'
					/>
				</div>
				<Text
					className={styles['header-content__title']}
					as='h2'
					color={deviceWidth === 'large' ? 'blue' : 'black'}
					align='center'
				>
					{title}
				</Text>
			</div>
		)
	}

	return (
		<Drawer
			placement={placement}
			width={drawerWidth}
			open={isOpen}
			handler={handler}
			level={level}
			onClose={closeMenu}
		>
			<div className={styles['control-menu']}>
				<div className={styles['control-menu__header']}>
					<div className={cn(styles['close-button'], { [styles[closePlacement]]: closePlacement })}>
						<Icon
							name={closeIcon}
							size={deviceWidth === 'large' ? 'md' : 'lg'}
							hoverColor='gray'
							title={t('buttonDesc.closeWithoutSave')}
							onClick={() => onClose()}
						/>
					</div>
					<div className={styles['header-content-wrapper']}>
						{!customHeader ? <HeaderDefault /> : <>{customHeader}</>}
					</div>
				</div>
				<div className={styles['control-menu__content']}>
					{isOpen ? children : ''}
				</div>
			</div>

			<Modal
				isOpen={isOpenConfirmModal}
				onRequestClose={() => setIsOpenConfirmModal(false)}
				size='sm'
			>
				<div className='modal-body'>
					<div className='modal-body__text'>
						<Text as='p' size='xl' align='center'>
							{alertMessage ?? t('alerts.leaveControlMenu')}
						</Text>
					</div>
					<div className='modal-body__confirm-buttons'>
						<ButtonGroup>
							<Button fluid={true} onClick={() => saveData()}>
								{t('buttons.save')}
							</Button>
							<Button fluid={true} onClick={() => setIsOpenConfirmModal(false)}>
								{t('buttons.cancel')}
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</Modal>
		</Drawer>
	)
}

ControlMenu.defaultProps = {
	placement: 'right',
	handler: false,
	level: '',
	title: '',
	observerChanges: true,
	hasChanges: false,
	closeIcon: 'close',
	closePlacement: 'right'
}

ControlMenu.propTypes = {
	placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
	width: PropTypes.string,
	isOpen: PropTypes.bool.isRequired,
	handler: PropTypes.bool,
	level: PropTypes.oneOf(['', 'all']),
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
	observerChanges: PropTypes.bool,
	hasChanges: PropTypes.bool,
	alertMessage: PropTypes.string,
	onSaveData: PropTypes.func,
	isCanClose: PropTypes.func,
	customHeader: PropTypes.object,
	closeIcon: PropTypes.oneOf(['close', 'replay']),
	closePlacement: PropTypes.oneOf(['left', 'right'])
}

export default React.memo(ControlMenu)
