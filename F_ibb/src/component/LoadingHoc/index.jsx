import React from 'react';
import { Spin } from 'antd';

export function LoadingHoc(Component) {
    return class LoadingHoc extends React.PureComponent {
        state = {
            loading: false
        };

        toggleLoading = () => {
            this.setState(prevState => ({
                loading: !prevState.loading
            }) , () => {
                // console.log(this.state.loading);
            });
        };

        render() {
            return (
                <Spin spinning={this.state.loading}>
                    <Component
                        toggleLoading={this.toggleLoading}
                        {...this.props}
                    />
                </Spin>
            );
        }
    };
}
